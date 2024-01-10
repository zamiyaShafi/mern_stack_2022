import React from 'react'


export default function NavbarHead() {
  // const display=()=>{
  //   return(
      
  //   )
  // }
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color:"	 #bf8040",fontWeight:"30px",fontFamily:"Lucida Fax",fontSize:"40px"}}>JULYY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <b>Shop</b> 
          </a>
          <ul className="dropdown-menu">
            <div  >
               <div style={{display:"flex",flexDirection:"rows"}}  >
            <li><a className="dropdown-item" href="OurCollections" style={{color:"	 #bf8040"}}><b>Shop By Type</b></a></li>
            <li><a className="dropdown-item" href="OurCollections" style={{color:"	 #bf8040"}}><b>Shop By Collections</b></a></li>
            <li><a className="dropdown-item" href="Aboutus" style={{color:"	 #bf8040"}}><b>Store Information</b></a></li>
       

            </div>
            <div style={{display:"flex",flexDirection:"rows"}}  >
            <li><a className="dropdown-item" href="NewArrivals" style={{color:"	 #bf8040"}}>&nbsp;All Types</a></li>
            <li><a className="dropdown-item" href="OurCollections" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Collections</a></li>
            <li><a className="dropdown-item" href="/AboutUs" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us</a></li>
       

            </div>
            <div style={{display:"flex",flexDirection:"rows"}}  >
            <li><a className="dropdown-item" href="Dresses" style={{color:"	 #bf8040"}}>&nbsp;Dresses</a></li>
            <li><a className="dropdown-item" href="NewArrivals" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Arrivals</a></li>
            <li><a className="dropdown-item" href="Contact" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us</a></li>
       

            </div>
            
            <div style={{display:"flex",flexDirection:"rows"}}  >
            <li><a className="dropdown-item" href="Rompers" style={{color:"	 #bf8040"}}>&nbsp;Rompers</a></li>
            <li><a className="dropdown-item" href="NewArrivals" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff favorites</a></li>
            {/* <li><a className="dropdown-item" href="#" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Theme features</a></li> */}
       

            </div>
            
            <div style={{display:"flex",flexDirection:"rows"}}  >
            <li><a className="dropdown-item" href="Tops" style={{color:"	 #bf8040"}}>&nbsp;Tops</a></li>
            <li><a className="dropdown-item" href="NewArrivals" style={{color:"	 #bf8040"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best Selling</a></li>
            

            </div>

            </div>
           
           
            
          </ul>
          
        </li>
        <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Collections</b>
          </a>
          <ul className="dropdown-menu" style={{marginLeft:"-20px"}}>
            <div style={{display:"flex",flexDirection:"row",gap:"1px"}}> 
            <li><a className="dropdown-item" href="NewArrivals"><img src='https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_450x.jpg?v=1523381606' style={{height:"250px",width:"190px"}}></img></a></li>
            <li><a className="dropdown-item" href="Dresses">
              <img src='https://cdn.shopify.com/s/files/1/0245/6825/products/birdie-ruffle-dress-main_02_450x.jpg?v=1523558771' style={{height:"250px",width:"190px"}}></img></a></li>
              <li><a className="dropdown-item" href="Rompers">
              <img src='https://cdn.shopify.com/s/files/1/0245/6825/products/rockstar-romper-main_02_450x.jpg?v=1523382258' style={{height:"250px",width:"190px"}}></img></a></li>
              <li><a className="dropdown-item" href="Tops">
              <img src='https://cdn.shopify.com/s/files/1/0245/6825/products/casey-collar-top-main_02_450x.jpg?v=1523559007'style={{height:"250px",width:"190px"}}></img></a></li>
            
            </div>
            <div style={{display:"flex",flexDirection:"row"}}> 
            <li><a className="dropdown-item" href="NewArrivals">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Arrivals</a></li>
            <li><a className="dropdown-item" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dresses</a></li>
            <li><a className="dropdown-item" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rompers</a></li>
            <li><a className="dropdown-item" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tops</a></li>

            </div>
            
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>Blog</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Contact"><b>Contact</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="AboutUs"><b>About Us</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><b>FAQ</b></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
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
