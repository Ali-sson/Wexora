import CoreValues from "../components/CoreValues";
import DistributorCTA from "../components/DistributorsCta";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VisionMission from "../components/VisionMission";
import WhoWeAre from "../components/WhoWeAre";
import WhyWexora from "../components/WhyWexora";

const Hero = () => {
  return (
    <>
    <Navbar/>
    <section className="relative overflow-hidden sm:h-[40vh] md:h-[60vh] bg-gradient-to-br from-[#071A33] via-[#08264A] to-[#0B3D78]">
      
      {/* Background glow */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24">

        {/* Left Content */}
        <div className="max-w-3xl">

          <span className="mb-6 inline-flex rounded-full border border-blue-300/20 bg-wexora-primary px-4 py-2 text-sm font-medium tracking-wide text-white">
            About Us
          </span>

          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
              Connecting Supply With Market Opportunity        
          </h1>

           <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white">
            Building connections between supply, market demand, and new business opportunities
          </p>
        
        

        </div>

      </div>
    </section>

    <WhoWeAre/>

    <VisionMission/>
      <WhyWexora/>
    <CoreValues/>
  

    <DistributorCTA/>

    <Footer/>

    </>
  );
};

export default Hero;