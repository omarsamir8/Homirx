import Image from 'next/image';
import './Aboutus.css'
import Link from 'next/link';
function AboutUs(){
    return (
        <>
        <div className="aboutus">
            <div className='aboutimg'>
                <Image style={{cursor:"pointer"}} src="/Assets/trashed-1752325273-listing-13-600x385.jpg" alt="Logo" width={700} height={50} />
            </div>
            <div className='aboutcontent'>
                <h5>About Company</h5>
                <h2>Welcom To Properties</h2>
                <p>It's is a long estiblished fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters</p>
                <div style={{marginTop:"30px",display:"flex",alignItems:"center",gap:"50px"}}>
                   <ul>
                      <li><i className="fas fa-arrow-right"></i> Proactively Pontificate Client</li>
                      <li><i className="fas fa-arrow-right"></i> Is there a waiting list for desired</li>
                      <li><i className="fas fa-arrow-right"></i> Immediate 24/7 Emergency</li>
                   </ul>
                   <div className='aboutcirclr'>
                    <h4>30k+</h4>
                    <p>Satisficed Client</p>
                   </div>
                   <div className='aboutcirclr'>
                    <h4>700+</h4>
                    <p>House</p>
                   </div>
                </div>
               <Link href="/AboutUs"><button  className="btn btn-outline aboutbutton"><i className="fa-solid fa-house"></i> Explore More</button></Link> 
            </div>
        </div>
        </>
    )
}
export default AboutUs;