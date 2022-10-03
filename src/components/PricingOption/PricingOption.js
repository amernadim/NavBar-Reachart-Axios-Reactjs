import React from 'react';
import Features from '../Featurers/Features';


const PricingOption = ({option}) => {
  const {feature} = option;
  return (
    <div className='m-3 rounded-lg bg-indigo-300 p-3'>
     <div className='text-white'>
       <p>
       <span className='font-bold text-5xl'>{option.price}</span>
       <span className='text-2xl text-gray-100'>/mon</span>
       </p>
       <p className='text-3xl'>{option.name}</p>
     </div>
     {
      feature.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
     }
    <button className='bg-green-600 w-full py-2 rounded text-white font-bold hover:bg-green-400'>Buy Now</button>
    
    </div>
  );
};

export default PricingOption;