import './Featured.css'
function Featured(){
    return (
        <>
        <div className='Featured'>
            <h2><i className="fas fa-list"></i> Featured & Amenities</h2>
            <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",gap:"10px"}}>
                <h5><i className="fas fa-check"></i> Air Conditioning</h5>
                <h5><i className="fas fa-check"></i> Washer and dryer</h5>
                <h5><i className="fas fa-check"></i> Swimming Pool</h5>
                <h5><i className="fas fa-check"></i> Basketball</h5>
                <h5><i className="fas fa-check"></i> 24*7 Security</h5>
                <h5><i className="fas fa-check"></i> Central Air</h5>
                <h5><i className="fas fa-check"></i> Media Room</h5>
                <h5><i className="fas fa-check"></i> Indoor Game</h5>
            </div>
        </div>  
        </>
    )
}
export default Featured;