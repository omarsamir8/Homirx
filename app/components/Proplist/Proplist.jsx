import Image from 'next/image';
import '../Listing/Listing.css'
import Link from 'next/link';
function Proplist(props){
    return (
        <>
        <h2 style={{color:"black",fontSize:"26px",fontWeight:"bold",padding:"20px 20px 0 20px"}}>{props.name}</h2>
        <div style={{padding:"20px"}} className="Proplist">
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/trashed-1752325273-listing-13-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/listing-15-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/trashed-1752325273-listing-8-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/post-02-560x370.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/post-02-560x370.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/post-05-560x370.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/post-04-560x370.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                           <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/post-03-560x370.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/post-06-560x370.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/trashed-1752325273-listing-14-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/listing-17-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
             <div style={{width:"32%",backgroundColor:"rgb(206, 204, 204)",color:"black",borderRadius:"20px"}} className='area'>
                        <div className='areaimg'>
                            <Image style={{cursor:"pointer",borderRadius:"20px",width:"100%"}} src="/Assets/listing-18-600x385.jpg" alt="Logo" width={300} height={50} />
                           <div style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"25px",right:"10px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignContent:"center"}} ><i style={{marginTop:"10px",fontSize:"20px",color:"white"}} className="fas fa-heart"></i></div> 
                            <Image  style={{cursor:"pointer",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",top:"205px",right:"10px"}} src="/Assets/team-2.jpg" alt="Logo" width={40} height={10} />
                        </div>
                        <div style={{paddingLeft:"20px",paddingTop:"20px"}} className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            (1)
                        </div>
                        <div style={{padding:"20px",paddingTop:"5px"}}>
                            <h2>Peninsula Apartment</h2>
                            <h5><i className="fa-solid fa-location-dot"></i> 18 Broklyn Street , New York</h5>
                            <p>it is along etiblished fact that a reader will be distracted the readable content</p>
                        </div> 
                        <div className='bath' style={{padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h5><i className="fas fa-ruler-combined"></i> 1860 sqft</h5>
                            <h5><i className="fas fa-bed"></i> Bed 6</h5>
                            <h5 style={{border:"none"}}><i className="fas fa-bath"></i> Bath 3</h5>
                        </div>
                        <div  className='det'>
                            <h4>$198.00</h4>
                            <Link href="/Properties/property"><button  className="btn btn-outline "><i className="fa-solid fa-house"></i> Details</button></Link>
                        </div>
            </div>
        </div>
        </>
    )
}
export default Proplist;