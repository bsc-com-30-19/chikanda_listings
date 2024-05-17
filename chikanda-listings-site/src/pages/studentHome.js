import HeroSection from "../components/herosection";
import PropertyContainer from "../components/propertysearch/propertycontainer";

//I think this should be the code for the landing page
const StudentHome = () =>{
    return (
      <div>
        <HeroSection />
        <div className="px-[5px]">
          <h1 className="font-bold text-[28px] mb-[5px]">
            Hostels based on your preferences:
          </h1>
          <hr className="h-[3px] border-[0px] bg-black rounded-full" />
          <div className="pt-[25px] px-[20px]">
          <div className=" flex flex-row flex-wrap justify-start">
            <PropertyContainer />
            <PropertyContainer />
            <PropertyContainer />
            <PropertyContainer />
            <PropertyContainer />
          </div>
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    );
};

export default StudentHome;