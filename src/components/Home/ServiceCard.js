import React from 'react'

const ServiceCard = ({id, imgurl,h1,p1,mapUrl}) => {

  const handleClick = () => {
    window.open(mapUrl, '_blank');
  };
  return (
    <div className='Service_card ' onClick={handleClick}>
        <div className='Ser_img'>
            <img src={imgurl} alt='img'/>

        </div>
        <div className='Service_info'>
            <h3>{h1}</h3>
            <p>{p1}</p>
        </div>
    </div>
  )
}

export default ServiceCard;