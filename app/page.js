import Image from "next/image";
import Hero from "./components/home/hero";
import JoinNetwork from "./components/home/joinNetwork";
import Welcome from "./components/home/welcome";

export default function Home() {
  return (
    <>
    <Hero/>
    <JoinNetwork/>
    <Welcome/>
    </>
  );
}
