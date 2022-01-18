import React from "react";
import Card from '../../components/Card/Card'


export default function HomePage() {
  return (
    <div>
      
      



















































      <div className='home__section'>
      <Card 
         src="/images/CatT.png"
         title="Tent house"
         price="$50/night"
         description="Unique mysterious tent."
      />
      <Card
        src="/images/CatM.png"
        title="Entire white home"
        price="$70/night"
        description="Comfortable private room for  white cats."
      />
      </div>
      <div className='home__section'>
      <Card
        src="/images/CatP.png"
        title="Penthouse in Downtown"
        price="$150/night"
        description="Superhost with great amenities."
        />
      <Card 
        src="images/CatH.png"
        title="Hidden Hills Mansion"
        price="$250/night"
        description="Private spacious hidden galor."
        />
      
    
      </div>
    </div>
  );
}

