import Banner from "@/components/Banner";
import Toprating from "@/components/Toprating";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div >
        <Banner></Banner>
      <Toprating></Toprating>
    </div>
  );
}
