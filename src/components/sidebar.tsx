import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps>= ({ isOpen, toggleSidebar}) => {

  return (
    <div className={`sidebar ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800 text-white w-64 fixed top-0 left-0 h-full overflow-y-auto ease-in-out transition-all duration-300 z-50`}>
      <button className="toggle-btn bg-gray-700 py-3 px-4 w-full text-left" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <ul className="mt-4">
        <li>
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/transactions" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Transactions
          </Link>
        </li>
        <li>
          <Link href="/budget" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Budget
          </Link>
        </li>
        <li>
          <Link href="/reports" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Reports
          </Link>
        </li>
        <li>
          <Link href="/settings" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
