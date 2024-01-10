import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function FooterNav() {
  return (
    <div >
        
<footer className="bg-dark text-center text-white"  >
  
  <div className="container p-4" >
    
    <section className="mb-4">
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FacebookIcon/></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><InstagramIcon/></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><PinterestIcon/></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><YouTubeIcon/></a>

      
     
    </section>
    <div>
        
    </div>
    

    
    {/* <section className="" >
      <form action=""style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
        
        <div className="row d-flex justify-content-center">
          
          <div className="col-auto">
            <h6>
            Connect
            </h6>
            <p className="pt-2">
              <strong>Join our mailing list for updates</strong>
            </p>
          </div>
          

          
          <div className="col-md-5 col-12">
            
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          

          
          <div className="col-auto">
            
            <button type="submit" className="btn btn-outline-light mb-4">
              Join
            </button>
          </div>
          
        </div>
        
      </form>
    </section> */}
    

    
    {/* <section className="mb-4"> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p> */}
    {/* </section> */}
    


    <section className="">
      
      <div className="row">
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 className="text-uppercase">About</h6>

          <ul className="list-unstyled mb-0">
            {/* <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li> */}
            <p>
            Since 2013 JULYY has been providing the most on point fashion and lifestyle accessories.
            </p>
          </ul>
        </div>
        

        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 className="text-uppercase">Info</h6>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="AboutUs" className="text-white">About Us</a>
            </li>
            {/* <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li> */}
          </ul>
        </div>
        

        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 className="text-uppercase">Explore</h6>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Shop</a>
            </li>
            <li>
              <a href="#!" className="text-white">Collections</a>
            </li>
            <li>
              <a href="#!" className="text-white">Blog</a>
            </li>
            <li>
              <a href="Contact" className="text-white">Contact</a>
            </li>
            
            <li>
              <a href="#!" className="text-white">FAQ</a>
            </li>
          </ul>
        </div>
        

        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h6 className="text-uppercase">Quick links</h6>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="NewArrivals" className="text-white">New Arrivals</a>
            </li>
            <li>
              <a href="Dresses" className="text-white">Dresses</a>
            </li>
            <li>
              <a href="Tops" className="text-white">Tops</a>
            </li>
            <li>
              <a href="#!" className="text-white">Skirts</a>
            </li>
            <li>
              <a href="#!" className="text-white"><li>
              <a href="#!" className="text-white">Sale</a>
            </li></a>
            </li>
          </ul>
        </div>
        
      </div>
      
    </section>
    
  </div>
  

  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">JULLY.com</a>
  </div>
  
</footer>

    </div>
  )
}
