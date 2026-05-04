import React from 'react'
import CVSdet from '../../../public/cv/CV_SDET.pdf'
import CVDevops from '../../../public/cv/CV_Devops.pdf'
import CVPetroleum from '../../../public/cv/CV_Petroleum.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CVSdet} download className='btn'>CV SDET</a>
      <a href={CVDevops} download className='btn'>CV DevOps</a>
      <a href={CVPetroleum} download className='btn'>CV Petroleum</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA