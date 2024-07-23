import AboutStart from "@/components/about-start";
import ClassStarts from "@/components/class-starts";
import MainCarousel from "@/components/main-carousel";
import SchoolFacilities from "@/components/school-facilities";
import TeamStart from "@/components/team-start";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <SchoolFacilities />
      <AboutStart />
      <ClassStarts />
      <TeamStart />
    </>
  );
}
