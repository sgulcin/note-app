import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
      <header className="bg-slate-50 shadow p-4 flex justify-between items-center">
          <h1 className="font-mono text-2xl font-bold"><Link to="/">Note App</Link></h1>
          <nav aria-label="Global" className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="z-9 text-gray-700 px-4 py-2 rounded hover:bg-slate-100 focus:outline-none" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownMenu"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="">
                  <div className="fixed inset-0 z-10" />
                  <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          <Link to="/second" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-700 hover:bg-slate-100">Settings</Link>
                          <Link to="./upload-image" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-700 hover:bg-slate-100">Change Background Image</Link>
                        </div>
                        <div className="py-6">
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        <StarIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    </a>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </Dialog>
        </header>
    )
}