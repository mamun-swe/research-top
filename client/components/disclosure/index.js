
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUp } from "react-feather"

export const CustomDisclouser = ({ items }) => {
    return (
        <div className="w-full">
            <div className="w-full mt-4 bg-white rounded-2xl">
                {items && items.length > 0 ?
                    items.map((item, i) =>
                        <Disclosure key={i}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-3 text-sm font-medium text-left text-sky-900 bg-sky-100 rounded-lg hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75 mb-2">
                                        <span>{item.title}</span>
                                        <ChevronUp
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-sky-500`}
                                        />
                                    </Disclosure.Button>

                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="p-3">
                                            {item.body}
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ) : null
                }
            </div>
        </div>
    )
}
