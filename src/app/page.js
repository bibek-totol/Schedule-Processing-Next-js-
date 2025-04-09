'use client'
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import GoogleMap from "./components/GoogleMap";
import HowItWorks from "./components/HowItWorks";


export default function Home() {
   


    
  

    return (
        <div className="flex flex-col min-h-screen  gap-8 ">
           
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-900">
            <main className="">
                <Banner/>
                <Feature/>
                <HowItWorks/>

                <GoogleMap/>
                
                <CTA/>


            </main>
            



        </div>
        </div>
    );
}
