import React from 'react';

// import Image from 'next/image';

const ProfileImage = () => (
  <div className="w-100 h-100 rounded-full overflow-hidden border-4 border-black shadow-md">
    <Image
      src= "https:/localhost:3000/create_portfolio.png"
    //   "@/public/create-portfolio.jpg"
      alt="Create Image"
      quality={100}
      layout="fill"  // This makes the image fill the container
      objectFit="cover" // Ensures the image covers the whole area
      // width={128}
      // hight={128}
      className="object-cover"
    />
  </div>
);

export default ProfileImage;