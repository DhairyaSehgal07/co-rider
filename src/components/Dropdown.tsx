import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MdPeopleAlt } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { MdReport } from 'react-icons/md';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="hover:bg-gray-300 opacity-0.8">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
          <div className="" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <MdPeopleAlt className="mr-2" size={16} />
                  Members
                </a>
              )}
            </Menu.Item>
            <hr className='w-full border-t-[1.5px] border-gray-300 border-opacity-50 font-bold' />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <IoMdCall className="mr-2" size={16} />
                  Share Number
                </a>
              )}
            </Menu.Item>
            <hr className='w-full border-t-[1.5px] border-gray-300 border-opacity-50 font-bold' />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center px-4 py-2 text-sm'
                  )}
                >
                  <MdReport className="mr-2" size={16} />
                  Report
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#"></form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
