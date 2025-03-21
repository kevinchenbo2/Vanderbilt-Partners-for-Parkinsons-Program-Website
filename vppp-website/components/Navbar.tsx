import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <header className="w-full">
            <nav className="w-full h-24 shadow-xl bg-black flex items-center justify-between px-8">
                {/* Logo */}
                <div>
                    <Link href="/">
                    <div className="circular-image w-[70px] h-[70px]">
                        <Image
                            src="/ribbon.png"
                            alt="Parkinsons Ribbon Logo"
                            width={70}
                            height={70}
                            className="cursor-pointer"
                        /> 
                    </div>
                    </Link>
                </div> 
                
                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                        Home
                    </Link>
                    <Link href="#about" className="text-white hover:text-blue-300 transition-colors">
                        About Us
                    </Link>
                    <Link href="#events" className="text-white hover:text-blue-300 transition-colors">
                        Past Events
                    </Link>
                </div>
                
                {/* Sign Up Button */}
                <div>
                    <Link href="#join" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar