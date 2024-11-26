import React from 'react';

        
    const Feedback = () =>{   
    return(
            
                <section id="feedback"
            className="py-20 bg-gradient-to-r from-black-500 to-teal-500 text-white text-center">
                <div>
                <main className="container mx-auto p-8">
                  <h1 className="text-7xl font-bold text-blue-800 text-center mb-4">Feedback</h1>
                  <form className="max-w-md mx-auto space-y-4">
                    <div>
                      <label className="block text-4xl text-blue-800">Name:</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-lg"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-4xl text-blue-800">Comments:</label>
                      <textarea
                        className="w-full p-2 border rounded-lg"
                        placeholder="Your Feedback"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-transparent border-2 border-blue-500 text-blue-500 font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </form>
                </main>
                
                <div className="button">
                
                <button className="bg-transparent border-2 border-blue-500 text-blue-500 font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <a href="#hero">Back</a>
                    
                </button>
              </div>
              
                
            
            </div>
              </section>
            )
          } 
          export default Feedback;      

   


         