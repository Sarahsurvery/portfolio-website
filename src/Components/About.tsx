import React from "react";

    const About =() => {
   
    return(
        
            <section id="about"
            className="py-20 bg-gradient-to-r from-black-500 to-teal-500 text-white text-center">
                <h2 className="text-7xl font-bold text-blue-800 mb-8">About Me</h2>
                <p className="text-5xl text-black-800 mb-20 tracking-wide">
                    I am a fashion and textile designer and media art creator,
                 dedicated to blending traditional craftsmanship with modern techniques.
                 My work focuses on creating unique textiles and fashion pieces
                 that tell a story while exploring the connection between design and digital media. 
                 With a commitment to sustainability and innovation,
                 I aim to inspire and engage audiences through my creations.</p>
                
        
            <div className="button">
               
                <button className="bg-transparent border-2 border-blue-500 text-blue-500 font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <a href="#hero">Back</a>
                    
                </button>
                
            
            </div>
    </section>
        
            
    );
}

export default About
