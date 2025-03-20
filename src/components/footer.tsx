import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-6 mt-2">
        <div className="container mx-auto">
          <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} EL EMPLEO.</p>
  
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/" className="hover:text-gray-300">Inicio</Link>
            <Link href="/client-side" className="hover:text-gray-300">Posts</Link>
            <Link href="/contacto" className="hover:text-gray-300">Client side</Link>
          </div>
        </div>
      </footer>
    )
}
export default Footer;