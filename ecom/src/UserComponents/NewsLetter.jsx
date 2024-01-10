import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function NewsLetter() {
  return (
    <div>
        <footer style={{backgroundColor:"#bf8040"}}>
  
  <div className="container p-4 pb-0" >
    
    <section className="">
      <form action="">
        
        <div style={{marginLeft:"400px"}}>
          
          <div className="col-auto">
            <p className="pt-2" >
              <h4><strong>Subscribe to our newsletter</strong></h4>
              <p>Signup to receive news and updates</p>
            </p>
          </div>
         

          <div style={{display:"flex",flexDirection:"row"}}>
          <div className="col-md-5 col-12">
           
           <div className="form-outline mb-4">
             <input type="email" id="form5Example27" className="form-control" style={{width:"300px"}}  placeholder="Email Address"/>
             
           </div>
         </div>
        

        
         <div className="col-auto">
          
           <button type="submit" className="btn btn-primary mb-4" style={{color:"white",backgroundColor:"black",marginLeft:"20px"}}>
             Join
           </button>
         </div>
       
          </div>
          
        </div>
       
      </form>
    </section>
   
  </div>
  

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
   <FacebookRoundedIcon/>
   <InstagramIcon/>
   <PinterestIcon/>
   <YouTubeIcon/>
  </div>
 
</footer>
    </div>
  )
}
