import Image from "next/image";
import "./home/homepage.css";
import Homebanner from "./home/Homebanner";
import HomeCarousel from "./home/HomeCarousel";
import HomeAccordion from "./home/HomeAccordion";
import Counter from "./home/Counter";
import HomeTop from "./home/HomeTop";
export default function Home() {
  return (
   <main className="">
  <HomeTop></HomeTop>
  
	
	<section className="">
	  <div className="img-single">
	  <Image
              src="/bg2.jpg"
              alt="Image single"
              width={3000}
              height={807}
              priority
            />
	  </div>

    </section>
	
	<section className="lg:flex flex-col items-center justify-between p-8">
	   <h1 className={`mb-3 lg:text-7xl text-5xl font-semibold`}>
PROFITABLE FROM DAY 1
</h1>
<p className={`mb-3 text-lg font-semibold`}>
          We are proud that Convex Energy has been generating profits since the very start of its operations.
        </p>
    </section>
    <Counter></Counter>
  
    <HomeCarousel />
    <HomeAccordion />
	</main>
  );
}
