"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// توسعه تایپ‌های Leaflet به روشی صحیح
declare module "leaflet" {
  interface IconDefault {
    _getIconUrl?: () => string;
  }
}

// رفع مشکل آیکون Leaflet
// بازنویسی L.Icon.Default با تایپ صحیح
const defaultIconPrototype = L.Icon.Default.prototype as L.IconDefault;
delete defaultIconPrototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// تعریف نوع برای موقعیت مکانی
type LatLng = [number, number] | null;

const GetUserLocation: React.FC = () => {
  const [position, setPosition] = useState<LatLng>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos);
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error(err);
          alert("خطا در دریافت موقعیت مکانی");
        }
      );
    } else {
      alert("مرورگر شما از مکان‌یابی پشتیبانی نمی‌کند.");
    }
  }, []);

  return (
    <div className="h-[80vh] w-full">
      {position ? (
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>موقعیت فعلی شما</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>در حال بارگذاری موقعیت مکانی...</p>
      )}
    </div>
  );
};

export default GetUserLocation;
