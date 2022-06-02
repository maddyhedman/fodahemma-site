import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropwdown = () => {
  return (
    <Menu
      as="div"
      className="ml-3 relative lg:hidden"
    >
      {({ open }) => (
        <div className="">
          <div>
            <Menu.Button className="inline-flex justify-center items-center text-lg">
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="text-xl absolute right-0 w-48 rounded-md shadow-lg bg-green ring-1 ring-[#000000] ring-opacity-5 focus:outline-none pr-6 text-right"
            >
              <div className="bg-green inline-flex flex-col gap-1 py-10  font-normal  h-44">
                <Menu.Item>
                  <p>   
                    <Link href="/barnmorskor">Barnmorskor</Link>
                  </p>
                </Menu.Item>

                <Menu.Item>
                  <p>
                    <Link href="/qanda">Q&A</Link>
                  </p>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default Dropwdown