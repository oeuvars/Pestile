import Hero from "./home/hero";
import Experience from "./home/experience";
import Feature from "./home/feature";
import Pricing from "./home/pricing";
import Testimonials from "./home/testimonials";
import FAQ from "./home/faq";
import UpperFooter from "./home/upperfooter";
import DownFooter from "./home/downfooter";
import Navbar from "./home/navbar/navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Experience />
      <Feature />
      <Pricing />
      <Testimonials />
      <FAQ />
      <UpperFooter />
      <DownFooter />
    </main>
  )
}
