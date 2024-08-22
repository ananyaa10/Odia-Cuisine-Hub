import React, { useEffect, useState } from 'react'

import './Menu.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
const ImageSlider = () => {
  // Use URLs directly
  const slidesData = [
    { imgurl: 'https://images.livemint.com/img/2021/04/29/1140x641/Odia_pakhala_bhaat_Alka_Jena_1619705827646_1619705837535.jpg' },
    { imgurl: 'https://img.freepik.com/premium-photo/bowl-crab-curry-with-parsley-side_147933-1255.jpg' },
    { imgurl: 'https://i0.wp.com/www.traveldiaryparnashree.com/wp-content/uploads/2020/08/DSC_7083-1-scaled.jpg'},
    { imgurl: 'https://media.istockphoto.com/id/1159362325/photo/bread-pakora.jpg?s=612x612&w=0&k=20&c=93uILcInCMXroXgjEJYXNeUzWh5NASSrEnylAgW7hcs=' },
    { imgurl: 'https://c.ndtvimg.com/2023-06/n1bjgkf_mixed-veg-dish_625x300_27_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
    { imgurl: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_1166,w_3024,h_1701,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/lotus-eco-beach-resort-konark/Dahi_baigana_avlbsq' }, // add the images url here
    { imgurl: 'https://res.cloudinary.com/simplotel/image/upload/x_0,y_46,w_1280,h_720,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/lotus-eco-beach-resort-konark/Chhena_Poda_ti9uxo' },
    { imgurl: 'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/lotus-eco-beach-resort-konark/Khichede_rlthg6' }
  ];

  const [curr, setCurr] = useState(0);
  const len = slidesData.length - 1;

  const prevSlide = () => {
    setCurr(curr === 0 ? len : curr - 1);
  };

  const nextSlide = () => {
    setCurr(curr === len ? 0 : curr + 1);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setCurr(curr === len ? 0 : curr + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [curr, len]);
  return (
    <div
    className='Slider-container'
    style={{backgroundImage : `url(${slidesData[curr].imgurl})`}}
    >
      <div className='SlideContent'>
      <FaArrowAltCircleLeft className='btn' onClick={prevSlide} />
        <h3>Our Speciality</h3>
        <FaArrowAltCircleRight className='btn' onClick={nextSlide} />
      </div>
        </div>
      );
    };
 /* // console.log(SlidesData[0].imgurl)
  const [curr,setCurr]= useState(0);
  const len = SlidesData.length-1;
  const prevSlide = ()=>{
    setCurr(curr===0 ? len : curr-1)
  }
  const nextSlide = ()=>{
    setCurr(curr===len ? 0 : curr+1)
  }
  useEffect(()=>{
    let slider = setInterval(() => {
      setCurr(curr===len ? 0 : curr+1);
    }, 5000)
    return()=>{
      clearInterval(slider);
    }
  },[curr]);
  
  return (
    <div className='Slider-container' style={{backgroundImage: `url(${SlidesData[curr].imgurl})`}}>
      <div className='SlideContent'>
      <FaArrowAltCircleLeft className='btn' onClick={prevSlide}/>
      <h3>Our Speciality</h3>
      <FaArrowAltCircleRight className='btn' onClick={nextSlide}/>
      </div>
      </div>

  )
}*/

export default ImageSlider