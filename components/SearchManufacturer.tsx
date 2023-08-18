'use client';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';




export default function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
  const [query, setquery] = useState('');


  const filterManufacturers = 
  query === " " ? manufacturers 
  : manufacturers.filter((item) =>(item
  .toLowerCase()
  .replace(/\s+/g,"")
  .includes(query.toLowerCase().replace(/\s+/g,""))
  ))

  

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='./car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt="car log"
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder='volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            className="search-manufacturer__input"
            onChange={(e) => {
              setquery(e.target.value)
              console.log()
            }}
          />

          <Transition as={Fragment}
            leave=' transation ease-in duration-100 '
            leaveFrom='opacticy-100'
            leaveTo='opacity-0'
            afterLeave={() => setquery('')}>

            <Combobox.Options>
            
            </Combobox.Options>

          </Transition>


        </div>
      </Combobox>
    </div>
  )
}
