import React from 'react'
import { Link } from 'react-router-dom'
import { Truck, HeadphonesIcon, RefreshCw } from 'lucide-react'

function Contact() {
  return (
    <div className='container mx-auto p-6'>
         <h1 className='text-3xl font-bold'>Contact Us</h1>
         <p className='text-lg'>Reach us at support@devshaddy.com or call us at +254 795 849775.</p>
    </div>
  )
}
export default Contact

// const ContactUs = () => {
//     return (
//       <div className='container mx-auto p-6'>
//         <h1 className='text-3xl font-bold'>Contact Us</h1>
//         <p className='text-lg'>Reach us at support@devshaddy.com or call us at 123-456-7890.</p>
//       </div>
//     );
//   };