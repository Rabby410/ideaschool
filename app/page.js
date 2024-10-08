import Hero from "./components/home/hero";
import JoinNetwork from "./components/home/joinNetwork";
import Welcome from "./components/home/welcome";
import Banner from "./components/home/banner";
import About from "./components/home/about";
import History from "./components/home/history";
import Support from "./components/home/support";
import SchoolTiming from "./components/home/schoolTiming";
import News from "./components/home/news";

export default function Home() {
  return (
    <>
    <Hero/>
    <JoinNetwork/>
    <Welcome/>
    <Banner/>
    <About/>
    <History/>
    <Support/>
    <SchoolTiming/>
    <News/>
    </>
  );
}
