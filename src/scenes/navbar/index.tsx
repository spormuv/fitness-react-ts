import Logo from '@/assets/Logo.png';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from './Link';
import { SelectedPage } from '@/shared/types';

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
const FlexBetween = 'flex items-center justify-between';

  return <nav>
    <div className={`${FlexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${FlexBetween} mx-auto w-5/6`}>
        <div className={`${FlexBetween} w-full gap-16`}>
          <img src={Logo} alt="logo" />

          <div className={`${FlexBetween} w-full`}>
            <div className={`${FlexBetween} gap-8 text-sm`}>
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className={`${FlexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;

