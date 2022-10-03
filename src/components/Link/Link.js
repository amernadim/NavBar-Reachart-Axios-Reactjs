import React from 'react';

const Link = ({route}) => {
  // console.log(route);
  const {path , name} = route;
  return (
        <li className='gap-4'><a href={path} className="no-underline text-black text-xl">{name}</a></li>  
  );
};

export default Link;