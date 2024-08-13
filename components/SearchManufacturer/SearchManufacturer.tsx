'use client'

import { SearchManufacturerProps } from '@/types'
import { Combobox,ComboboxButton, Transition } from '@headlessui/react'
import Image from 'next/image'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <ComboboxButton className='absolute top-[14px]'>
            <Image 
            src='/car-logo.svg'
            alt='Car Logo'
            width={20}
            height={20}
            className='ml-4'
            />
          </ComboboxButton>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer