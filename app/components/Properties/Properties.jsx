import './Properties.css';
import Image from 'next/image';
import Link from 'next/link';
function Properties(){
    return (
        <>
        <div className="Properties">
            <p>Properties</p>
            <h2>Welcom To Our <span>Luxurious Properties </span> With All The Conveniences</h2>
          <Link href="/Properties"><button className="btn btn-outline btn-accent"><i className="fa-solid fa-house"></i> View Properties</button></Link> 
            <div className='propertiesimage'>
                <Image style={{cursor:"pointer"}} src="/Assets/handvilla.jpg" alt="Logo" width={300} height={30} />
            </div>
        </div>
        </>
    )
}
export default Properties;