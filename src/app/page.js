'use client'
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import HowItWorks from "./components/HowItWorks";


export default function Home() {
   


    
  

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main className="pt-16">
                <Banner/>
                <Feature/>
                <HowItWorks/>
                <Benefits/>
                <CTA/>


            </main>
            



        </div>
    );
}
