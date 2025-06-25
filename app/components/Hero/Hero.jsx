import './hero.css';
import Link from 'next/link';
function Hero(){
    return (
        <>
        <div className="hero">
            <div className="carousel w-full">
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                    style={{height:"100vh"}}
                    src="/Assets/listing-9-600x385.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                    style={{height:"100vh"}}
                    src="/Assets/listing-8-600x385.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                    style={{height:"100vh"}}
                    src="/Assets/listing-5-600x385.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='maincontent'>
                <h2>Let's Find Dream House .</h2>
                <div className='topics'>
                    <p style={{backgroundColor:"rgb(243, 100, 48)"}}>Genral</p>
                    <p>Villa</p>
                    <p>Apartment</p>
                </div>
                <div className='topics2'>
                    <div className='texts'>
                        <div>
                            <p>Keyword</p>
                            <input type='text' placeholder='Looking for?'/>
                        </div>
                        <div>
                            <p>Category</p>
                            <input type='text' placeholder='Your Category'/>
                        </div>
                        <div>
                            <p><i className="fa-solid fa-location-dot"></i> Location</p>
                            <input type='text' placeholder='Location'/>
                        </div>
                    </div>
                    <div className='sea'>
                        <p><i className="fa-brands fa-monero"></i> More</p>
                     <Link href="/Properties"><button className="btn btn-active btn-error"><i className="fas fa-search"></i>Search </button> </Link>  
                    </div>
                </div>
                <div className='bts'>
                   <Link href="/Properties"><button className="btn btn-outline">Commerical <i className="fas fa-arrow-right"></i></button></Link> 
                   <Link href="/Properties"><button className="btn btn-outline">Villa <i className="fas fa-arrow-right"></i></button></Link> 
                   <Link href="/Properties"><button className="btn btn-outline">Sales <i className="fas fa-arrow-right"></i></button></Link> 
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero;