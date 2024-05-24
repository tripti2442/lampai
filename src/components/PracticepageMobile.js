import React from 'react';
import Rightmobile from './Rightmobile';
import Practicemobile from './Practicemobile';

export default function PracticepageMobile() {
  return (
    <div className="flex-col justify-between bg-purple-100 h-[100%]">
      <div className="flex-grow flex-shrink-0 flex-basis-[60%]">
        <Practicemobile />
      </div>
      <div>
        <Rightmobile/>
      </div>
    </div>
  );
}
