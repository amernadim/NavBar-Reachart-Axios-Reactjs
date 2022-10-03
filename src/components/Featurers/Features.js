import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
  return (
    <div>
      <div className='flex'>
        <CheckCircleIcon className="h-5 w-5 mt-1 text-green-600"/>
        <p className='ml-2 '>{feature}</p>
     </div>     
    </div>
  );
};

export default Features;