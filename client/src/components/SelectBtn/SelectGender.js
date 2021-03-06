import React, {Fragment} from 'react'
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const SelectGender = ({genderSelected, setGenderSelected, gender}) => {
  return (
    <div className="w-36 md:44 mb-3">
        <Listbox value={genderSelected} onChange={setGenderSelected}>
        <div className="relative mt-1">
            <Listbox.Button className="relative w-full rounded-lg bg-white pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm py-2 border border-gray-200 cursor-pointer">
            <span className="block truncate">{genderSelected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
                />
            </span>
            </Listbox.Button>
            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {gender.map((person, personIdx) => (
                <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                    }
                    value={person}
                >
                    {({ genderSelected }) => (
                    <>
                        <span
                        className={`block truncate ${
                            genderSelected ? 'font-medium' : 'font-normal'
                        }`}
                        >
                        {person.name}
                        </span>
                        {genderSelected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        ) : null}
                    </>
                    )}
                </Listbox.Option>
                ))}
            </Listbox.Options>
            </Transition>
        </div>
        </Listbox>
    </div>
  )
}

export default SelectGender