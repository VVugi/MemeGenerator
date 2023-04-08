import Logo from './../images/logo.png'

export default function Header()
{
   return(
      <header className="navbar">
         <img className="nav-image" src={Logo}></img>
         <h2 className="nav-title">Meme Generator</h2>
         <h4 className="nav-subtitle">React Course - Project 3</h4>
      </header>
   )
}