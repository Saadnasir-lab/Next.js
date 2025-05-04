import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-max mx-auto my-5'>
      <Image alt="Picture of the author"
      width={500}
      height={500}
      quality={70}
      priority
      src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg'></Image>
    </div>
  )
}

export default page
