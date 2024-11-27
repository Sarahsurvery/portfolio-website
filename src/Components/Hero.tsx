import React from "react"
import Navbar from "@/components/navbar"

const Hero =() => {
    return(

        <div id ="Hero" className='min-h-screen bg-no-repeat bg-[url(/create_portfolio.png)] bg-right bg-cover'
        style={{backgroundSize:"30%", backgroundPosition:"right 50px top 100px"}}
        >
            <Navbar /> 
        
                     <div className="text-[30px] sm:text-[70px] text-bold leading-tight justify-left item-center px-[20%] gap-[10]"> 

           <div className="text-left text-blue-500 py-[22%]">
                    <h1 className="text-15xl font-bold">I'm Sarah</h1>
                    <div className="text-red-200 italic">
                    <p  className="text-[30px]">Textile & Fashion Designer</p>
                    <p className="text-[30px]">Media Art Creator</p>
             </div>
             </div>
              </div>
                 </div> 
                 
     )                  
    }
        export default Hero

