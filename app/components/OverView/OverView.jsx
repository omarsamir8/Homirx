import './OverView.css'
function OverView(){
    return (
        <>
        <h2 style={{color:"black",fontWeight:"bold",fontSize:"26px",padding:"10px 20px"}}><i style={{fontSize:"22px",paddingRight:"10px",color:"rgb(243, 100, 48)"}} className="fa-solid fa-location-dot"></i>Overview</h2>
        <div className="OverView">
            <div className="ov-left">
                <div className="overone">
                    <div className="ov-icon"><i className="fas fa-star"></i></div>
                    <div>
                        <h2>Number ID</h2>
                        <p>#1686</p>
                    </div>
                </div>
                <div className="overone">
                    <div className="ov-icon"><i className="fas fa-ruler-combined"></i></div>
                    <div>
                        <h2>Build Year</h2>
                        <p>2019</p>
                    </div>
                </div>
                <div className="overone">
                    <div className="ov-icon"><i className="fas fa-bath"></i></div>
                    <div>
                        <h2>Bath</h2>
                        <p>6</p>
                    </div>
                </div>
            </div>
            <div className="ov-right">
                <div className="overone">
                    <div className="ov-icon"><i className="fas fa-bed"></i></div>
                    <div>
                        <h2>Bed</h2>
                        <p>5</p>
                    </div>
                </div>
                <div className="overone">
                    <div className="ov-icon"><i className="fas fa-ruler-combined"></i></div>
                    <div>
                        <h2>Size</h2>
                        <p>1897 sqft</p>
                    </div>
                </div>
                <div className="overone">
                    <div className="ov-icon"><i className="fas fa-hotel"></i></div>
                    <div>
                        <h2>Type</h2>
                        <p>Apartment</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OverView;