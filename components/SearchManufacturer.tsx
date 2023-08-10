'use client';
import { Combobox  , Transition} from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import { useState , Fragment } from 'react';




export default function SearchManufacturer( { manufacturer, setManufacturer} : SearchManufacturerProps) {
   const [query, setquery] = useState('')
 
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
                    displayValue={(manufacturer :string)=> manufacturer}
                    className="search-manufacturer__input"
                    onChange={(e) => setquery(e.target.value)}
                    />

                    <Transition>
                        {/*  stop the video here >>> 1:03:17 */}
                    </Transition>
                    
                
             </div>
         </Combobox>
    </div>
  )
}
