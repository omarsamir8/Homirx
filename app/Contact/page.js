'use client'
import BookAppointment from '../components/BookAppointment/BookAppointment'
import Brands from '../components/Brands/Brands'

function Contact(){
    return (
        <>
        <div style={{paddingTop:"80px" }} className="Contact">
            <div style={{ padding: "20px",color:"black" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d151231.97830993807!2d30.917798755306546!3d30.444379854419093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1750260720872!5m2!1sar!2seg"
                    width="100%"
                    height="450"
                    style={{ border: 0 ,borderRadius:"20px"}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div style={{
                        display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",padding:"20px",marginTop:"-100px"
                    }}  className='infos'>
                    <div style={{
                        display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",textAlign:"center",width:"18%",backgroundColor:"bisque",padding:"20px",borderRadius:"10px"
                    }}>
                       <div style={{width:"40px",height:"40px",color:"white",background:"rgb(243, 100, 48)",display:"flex",justifyContent:"center",borderRadius:"5px",alignContent:"center"}} > <i style={{marginTop:"10px"}} className="fas fa-phone"></i></div>
                        <h5 style={{fontSize:"18px",fontWeight:"bold",marginTop:"10px"}}>Our Address</h5>
                        <p style={{color:"gray",width:"80%"}}>Banha City ,Qualibya, Egypt ,Africa</p>
                    </div>
                    <div style={{
                        display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",textAlign:"center",width:"18%",backgroundColor:"bisque",padding:"20px",borderRadius:"10px"
                    }}>
                       <div style={{width:"40px",height:"40px",color:"white",background:"rgb(243, 100, 48)",display:"flex",justifyContent:"center",borderRadius:"5px",alignContent:"center"}} > <i style={{marginTop:"10px"}} className="fas fa-envelope"></i></div>
                        <h5 style={{fontSize:"18px",fontWeight:"bold",marginTop:"10px"}}>Omarsamir@gmail.com</h5>
                        <p style={{color:"gray",width:"80%"}}>Email Us anytime for any kind of quety</p>
                    </div>
                    <div style={{
                        display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",textAlign:"center",width:"18%",backgroundColor:"bisque",padding:"20px",borderRadius:"10px"
                    }}>
                       <div style={{width:"40px",height:"40px",color:"white",background:"rgb(243, 100, 48)",display:"flex",justifyContent:"center",borderRadius:"5px",alignContent:"center"}} > <i style={{marginTop:"10px"}} className="fas fa-location-dot"></i></div>
                        <h5 style={{fontSize:"18px",fontWeight:"bold",marginTop:"10px"}}>Hot:0100-123-4567</h5>
                        <p style={{color:"gray",width:"80%"}}>24/7/365 priority live chat and tickiting support</p>
                    </div>
                    <div style={{
                        display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",textAlign:"center",width:"18%",backgroundColor:"bisque",padding:"20px",borderRadius:"10px"
                    }}>
                       <div style={{width:"40px",height:"40px",color:"white",background:"rgb(243, 100, 48)",display:"flex",justifyContent:"center",borderRadius:"5px",alignContent:"center"}} > <i style={{marginTop:"10px"}} className="fas fa-clock"></i></div>
                        <h5 style={{fontSize:"18px",fontWeight:"bold",marginTop:"10px"}}>Opening Hour</h5>
                        <p style={{color:"gray",width:"80%"}}>Sunday-Friday:9AM-6pm Saturday:9AM-4PM</p>
                    </div>
                   
                </div>
            </div>
            <BookAppointment/>
            <Brands/>
        </div>
        </>
    )
}
export default Contact;