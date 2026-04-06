import { Link } from "react-router-dom";


function Header() {
  return (
    <header class="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 class="text-5xl font-bold">LOGO</h1>
        <nav>
            <ul class="flex gap-[4vw] text-2xl ">
                <li class="hover:underline"><Link to='/'>Home</Link></li>
                <li class="hover:underline"><Link to='/about'>About</Link></li>
                <li class="hover:underline"><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;