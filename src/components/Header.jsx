import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="flex items-center justify-between p-4 px-[5vw] bg-gray-800 text-white">
        <h1 class="text-5xl font-bold">LOGO</h1>
        <nav class="max-lg:hidde">
          <ul class="flex gap-[4vw] text-2xl">
              <li class="hover:underline"><Link to='/'>Home</Link></li>
              <li class="hover:underline"><Link to='/about'>About</Link></li>
              <li class="hover:underline"><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

    </header>
  );
}

export default Header;





















//mobile
/*        <nav class="hidden">
          <div id="myButton" class="burger-btn bg-gray-800 cursor-pointer">
            <div class="line h-[3px] w-[30px] my-2 bg-white"></div>
            <div class="line h-[3px] w-[30px] my-2 bg-white"></div>
            <div class="line h-[3px] w-[30px] my-2 bg-white"></div>
          </div>
          <ul id="myMenu" class="hidden">
            <li class="hover:underline"><Link to='/'>Home</Link></li>
            <li class="hover:underline"><Link to='/about'>About</Link></li>
            <li class="hover:underline"><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
*/