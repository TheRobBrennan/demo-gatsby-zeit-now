import React from 'react'

import SlideShow from 'components/SlideShow'

// Images to cycle through in the background of our landing page
import image1 from 'images/01.jpg'
import image2 from 'images/02.jpg'
import image3 from 'images/03.jpg'

var settings = {
  images: [
    { src: image1, position: 'center' },
    { src: image2, position: 'center' },
    { src: image3, position: 'center' }
  ],
  // Delay.
  delay: 6000
}

export const DefaultBackgroundSlideShow = () => {
  return (<SlideShow settings={settings} />)
}
export default DefaultBackgroundSlideShow