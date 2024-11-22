import dynamic from "next/dynamic";

const GetUserLocation = dynamic(() => import("@modules/GetUserLocation"), {
  ssr: false,
});
const LocationPicker = dynamic(() => import("@modules/LocationPicker"), {
  ssr: false,
});

const Lab1 = () => {
  return (
    <div className="flex flex-col gap-20">
      <LocationPicker />
      <GetUserLocation />
    </div>
  );
};

export default Lab1;
