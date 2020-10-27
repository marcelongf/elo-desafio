import React from 'react';
import {Link} from 'react-router-dom';

import menuList from './menuList.json';

const Header = () => {
  const [navbarListComp, setNavBarComp] = React.useState([]);
  React.useEffect(() => {
    setNavBarComp(menuList.items.map((item) => {
      return (
      <li className="nav-item active">
        <Link to={`${item.path}`} className="nav-link" >{item.title}</Link>
      </li>)
    }))
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {navbarListComp}
        </ul>
      </div>
    </nav>
  )
}

export default Header