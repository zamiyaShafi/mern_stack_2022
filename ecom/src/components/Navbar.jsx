import React from 'react'
import { Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const nav=useNavigate();
  const Profile=()=>{
    // return(<>
    // <ul>
    //   <li><Button>LogOut</Button></li>
    // </ul>
    // </>

    // )
    nav("/Profile")

  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Home">DASHBOARD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Product">PRODUCT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href="/Customers">CUSTOMERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Category"> CATEGORY</a>
        </li>
        <li className="nav-item active dropdown">
          <a className="nav-link active dropdown-toggle" href="/Category" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           gggg
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href=''>Disabled</a>
        </li>
      </ul>
      <div style={{marginLeft:"500px"}}>
      <Badge badgeContent={4} color="primary">
      <Button variant="outlined" >< NotificationsIcon color="action" /></Button>
      </Badge>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="outlined" onClick={Profile}><  AccountCircleIcon color="action" /></Button>
      
    
    
      </div>
      
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
     
    </div>
    
  </div>
</nav>
    </div>
  )
}
