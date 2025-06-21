import img from '../assets/chef-logo.png';

export default function Header() {
  return(
    <header>
      <img src={img} className="logo" alt="chef"/>
      <h1 className="title">Chef Chic</h1>
    </header>
  )
}