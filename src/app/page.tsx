import Image from "next/image";
import { HeroSection, NavBar } from "../components/index";

export default function Home() {
  return (
   <>
      <div className="bg-slate-900">
        <NavBar/>
        <HeroSection accounts="asd" tokenData="DATA"></HeroSection>
      </div>
   </>
  );
}
