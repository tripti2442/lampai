import React from 'react';
import Right from './Right';
import Practice from './Practice';

export default function PracticePage() {
  return (
    <div className="flex justify-between bg-purple-100 h-[90vh]">
      <div className="flex-grow flex-shrink-0 flex-basis-[60%]">
        <Practice />
      </div>
      <div className="flex-grow-0 flex-shrink p-4 flex-basis-[40%]">
        <Right />
      </div>
    </div>
  );
}
