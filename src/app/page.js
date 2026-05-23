import Image from "next/image";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AvailableStudyRooms from "@/components/AvailableStudyRooms";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AvailableStudyRooms></AvailableStudyRooms>
      <Features></Features>
      <HowItWorks></HowItWorks>
    </main>
  );
}
