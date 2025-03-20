import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl">
            <Link href="/">
              EL EMPLEO
            </Link>
          </div>
          <div className="space-x-6">
            <Link href="/">
             
                Inicio (SSR)
              
            </Link>
            <Link href="/posts">
              
                Posts (Híbrido: SSR Y CSR)
             
            </Link>
            <Link href="/client-side">
              
                Client-Side
            
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;