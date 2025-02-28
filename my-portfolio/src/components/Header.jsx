import logo from '../assets/logo.png'

const Navbar = () => {

  return (

    <div className="navbar bg-black fixed z-50 ">
      <div className="flex-1 ml-10">
        <img className="img size-8" src={logo} />
      </div>
      <div className="ml-5">
        <ul className="menu menu-horizontal px-5">
          <li>
            <details>
              <summary className="text-md">Menu</summary>
              <ul className="bg-black rounded-t-none">
                <li><a href='#hero'>Hero</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experiences'>Experiences</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#designs'>Designs</a></li>
                <li><a href='#projects'>Projects</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
