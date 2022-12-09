import { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import logo from '../../img/mainLogo.jpg'
import useAuth from '../../hooks/useAuth';

const headers = [
  {
    name: 'Memo',
    description: 'Get a better understanding of where your traffic is coming from.',
    to: '/memo',
    icon: ChartBarIcon,
  },
  {
    name: 'Memory',
    description: 'Speak directly to your customers in a more meaningful way.',
    to: '/memory',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'To Do List',
    description: "Connect with third-party tools that you're already using.",
    to: '/todo',
    icon: Squares2X2Icon,
  },
  {
    name: 'Reminder',
    description: 'Build strategic funnels that will drive your customers to convert',
    to: '/reminder',
    icon: ArrowPathIcon,
  },
]

export default function Header() {
  const { auth } = useAuth();
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Ken & Emma</span>
              <img
                className="h-12 w-12 w-auto sm:h-18 sm:w-18"
                src={logo}
                alt=""
              />
            </a>
          </div>
          {
            auth.token ?
              <>
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                  <Link to="/memo" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Memo
                  </Link>
                  <Link to="/memory" clbuttonssName="text-base font-medium text-gray-500 hover:text-gray-900">
                    Memory
                  </Link>
                  <Link to="/todo" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    To Do List
                  </Link>
                  <Link to="/reminder" className="text-base font-medium text-gray-500 hover:text-gray-900" v>
                    Reminder
                  </Link>
                </Popover.Group>
              </>
              : <></>
          }
        </div>
      </div>

      {
        auth.token ?
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6 text-blue-300" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {headers.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-blue-300" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-500">{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          : <></>
      }
    </Popover>
  )
}
