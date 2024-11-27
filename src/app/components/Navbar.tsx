// "use client";
import React  from 'react'


const Navbar = () => {
  return(
    
  
<div className='container pt-8'>

{/* <Link href="/" className="text-xl font-bold">My Portfolio</Link> */}
<div className='flex justify-between item-center'>
<div className='text-3xl font-bold italic'>Sarah Survery

</div>
<ul className="flex space-x-6 text-2xl">
{/* // className='gap-10 lg:gap-5 hidden gap-4 md:flex' */}
<li className='menuLink'><a href="#hero">Home</a></li>
<li className='menuLink'><a href="#about">About</a></li>
<li className='menuLink'><a href="#skills">Skills</a></li>
<li className='menuLink'><a href="#feedback">Feedback</a></li>
{/* <li className='menuLink'><a href="#feedback">Feedback</a></li> */}

</ul>
</div> 
</div>

  
  )
}
export default Navbar;



    

