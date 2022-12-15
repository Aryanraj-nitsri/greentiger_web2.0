import React from 'react';
import CustomWidth from '../../../Global Components/CustomWidth'
import Fullwidth from '../../../Global Components/Fullwidth'

export default function LandingPage({url}) {
  return (
        <Fullwidth url={""} >
    <CustomWidth>
      <div className='w-full h-screen flex justify-between  items-center gap-20'>
        {/* left side  */}
        <div className='w-1/3 flex-initial'>
     <p className='text-[#00aa13] text-3xl'>POWER TO CHOOSE</p>
        </div>
        {/* right side  */}
        <div className='w-8/12 flex-initial'>
            <video src={url} muted autoPlay loop></video>

        </div>

      </div>
    </CustomWidth>
    </Fullwidth>

  )
}
