import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
  const pricinOption = [
    {id : 1 , name : 'Free' , price : 0, feature : [
        'Awesome Feature',
        'Extra Feature',
        'Unnesesary Feature',
        'Will never use Feature',
        'Hudai Feature',
        'Ajaira Feature'
    ]
  },
    {id : 2 , name : 'Medium' , price : 9.99 ,feature : [
      'EveryThings on Free',
      'Extra Feature',
      'Unnesesary Feature',
      'Will never use Feature',
      'Hudai Feature',
      'Ajaira Feature'
  ]},
    {id : 3 , name : 'Premium' , price : 19.99 , feature : [
      'Everythings on Premium',
      'Extra Feature',
      'Unnesesary Feature',
      'Will never use Feature',
      'Hudai Feature',
      'Ajaira Feature'
  ]},
  ]
  return (
    <div className=''>
      <h1 className='bg-indigo-300 text-white py-3'>The Best Deal of The Town</h1>

      <div className='grid md:grid-cols-3 gap-3'>
        {
          pricinOption.map(option => <PricingOption
          key={option.id}
          option={option}
          ></PricingOption>)
        }
      </div>
     
    </div>
  );
};

export default Pricing;