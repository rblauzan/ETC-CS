

import Image from "next/image"
import Link from "next/link"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    imageSrc: '/images/testimonials/1.jpg',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    imageSrc: '/images/testimonials/2.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    imageSrc: '/images/testimonials/3.jpg',
    imageAlt:
      '',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    imageSrc: '/images/testimonials/4.jpg',
    imageAlt:
      '',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    imageSrc: '/images/testimonials/5.jpg',
    imageAlt:
      '',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    imageSrc: '/images/testimonials/6.jpg',
    imageAlt:
      '.',
  },
  // More products...
]

export default function Example() {
  return (
    <>
    <section className="pb-[100px] pt-[120px]">
    <div className="container">
    <div className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group text-sm">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}
