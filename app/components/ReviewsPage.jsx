import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/**
 * ReviewsPage Component
 * 
 * A component that displays a grid of customer reviews as clickable images.
 * Each review image is linked to the business's Google Reviews page.
 * 
 * Features:
 * - Responsive grid layout using flex-wrap
 * - Consistent image sizing with Next.js Image optimization
 * - Clickable review images that redirect to Google Reviews
 * 
 * @component
 * @returns {JSX.Element} A grid of review images with links
 */
export default function ReviewsPage() {
  return (
    <div className='text-white hidden md:block'>
        <h2 className='text-center font-bold text-[30px] pb-[20px]'>REVIEWS</h2>
        <div className='flex flex-wrap gap-4'>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review1.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review2.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review3.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review4.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review5.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review6.jpeg" alt="reviewimage6" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review7.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review8.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review9.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.google.co.uk/search?q=boom+leeds&sei=5NEQaIisEcW1hbIPuNXwwQw&safe=active&ssui=on#lrd=0x48795c121e0f9101:0x32a46bc9ed0ca713,1,,,,">
             <Image src="/review10.jpeg" alt="reviewimage" width={345} height={247}/>
            </Link>
          </div>
        </div>
    </div>
  )
}
