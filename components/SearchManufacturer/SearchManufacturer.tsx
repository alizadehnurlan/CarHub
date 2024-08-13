'use client'
import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'
import { Combobox, ComboboxButton, ComboboxInput, Transition, ComboboxOptions,ComboboxOption } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

  const [query, Setquery] = useState('')

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
        return item.toLocaleLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLocaleLowerCase().replace(/\s+/g,""))
      })

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

          <ComboboxInput
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => Setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => Setquery('')}
          >
            <ComboboxOptions>
              {filteredManufactures.length === 0 ? query !=="" &&(
                <ComboboxOption
                value={query}
                className="search-manufacturer__option"
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufactures.map((item)=>{
                  return(
                    <ComboboxOption
                    key={item}
                    className={({active})=>
                    `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={item}
                    >
                      {item}

                    </ComboboxOption>


                  )
                })
              )
              }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer