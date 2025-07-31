import React from 'react'
import { useParams } from 'react-router-dom'

const ViewCode = () => {
        var Id = useParams().id;
       
  return (
    <section className='w-screen text-white px-5 sm:px-10 md:px-20 py-10 min-h-screen flex flex-col items-center justify-center md:flex-row'>
<div>
  preview
</div>
<div>
  code
</div>
    </section>
  )
}

export default ViewCode