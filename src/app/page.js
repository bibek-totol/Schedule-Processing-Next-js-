'use client'
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import HowItWorks from "./components/HowItWorks";


export default function Home() {
   


    
  

    return (
        <div className="flex flex-col min-h-screen  gap-8 p-5">
           
        <div className="min-h-screen bg-white text-gray-900">
            <main className="">
                <Banner/>
                <Feature/>
                <HowItWorks/>
                <Benefits/>
                <CTA/>


            </main>
            



        </div>
        </div>
    );
}
