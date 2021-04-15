import { Link } from 'react-router-dom';

const TopNav = ()=>{
  return(
    <div className="nav bg-dark d-flex justify-content-around">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/register">Register</Link>
    </div>
  )
}

export default TopNav;
