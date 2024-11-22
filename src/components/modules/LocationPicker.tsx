"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

declare module "leaflet" {
  interface IconDefault {
    _getIconUrl?: () => string;
  }
}

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

const LocationPicker: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<LatLng>(null);
  const [address, setAddress] = useState<string>("");

  // تعریف نوع برای توابع
  const fetchAddress = async (lat: number, lon: number): Promise<void> => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      setAddress(response.data.display_name || "آدرس یافت نشد");
      alert(
        `آدرس: ${response.data.display_name}\nعرض جغرافیایی: ${lat}\nطول جغرافیایی: ${lon}`
      );
    } catch (error) {
      console.error("خطا در دریافت آدرس:", error);
      alert("خطا در دریافت آدرس");
    }
  };

  const MapClickHandler: React.FC = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setSelectedPosition([lat, lng]);
        fetchAddress(lat, lng);
      },
    });
    return null;
  };

  return (
    <div className="h-[65vh] w-full">
      <MapContainer
        center={[35.6892, 51.389]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {selectedPosition && <Marker position={selectedPosition} />}
      </MapContainer>
      {address && (
        <p className="mt-4 text-center">
          آدرس انتخاب شده: <strong>{address}</strong>
        </p>
      )}
    </div>
  );
};

export default LocationPicker;
