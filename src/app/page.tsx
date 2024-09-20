import HomeAbout from "@modules/HomeAbout";
import HomeMain from "@modules/HomeMain";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeMain />
      <HomeAbout />
    </div>
  );
}
