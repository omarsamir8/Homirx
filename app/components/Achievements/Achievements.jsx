'use client'
import './Achievements.css'
function Achievements(){
    return (
        <>
        <div className="Achievements">
            <p>Our Achievement</p>
            <h2>Our Homeda Awesome Success Story</h2>
            <div className='achieverate'>
                <div>
                    <h2>20.5K</h2>
                    <h5>Featured Projects</h5>
                </div>
                <div>
                    <h2>20.5K</h2>
                    <h5>Featured Projects</h5>
                </div>
                <div>
                    <h2>20.5K</h2>
                    <h5>Featured Projects</h5>
                </div>
            </div>
            <div style={{marginTop:"30px",borderRadius:"20px"}}>
                <iframe
                style={{ borderRadius: "20px" }}
                width="100%"
                height="747"
                src="https://www.youtube.com/embed/jUJMOtc0jB4"
                title="4 Kanal house design - 3 Bedrooms | Single story house design | Village house design"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ></iframe>
            </div>
            </div>
        </>
    )
}
export default Achievements;