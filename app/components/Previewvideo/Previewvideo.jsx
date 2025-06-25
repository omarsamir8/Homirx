function Previewvideo(){
    return (
        <>
        <div style={{padding:"20px",color:"black"}} className="Previewvideo">
            <h2 style={{fontSize:"26px",fontWeight:"bold"}}> <i style={{fontSize:"20px",color:"rgb(243, 100, 48)"}} className="fas fa-video"></i> Preview Video</h2>
<iframe
        src="https://www.youtube.com/embed/QmfVLaBan5I"
        title="Modern Tropical House Design Perfection (3 Bedrooms - 236sqm/2540sqft)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
       style={{width:"100%",height:"60vh",borderRadius:"20px",marginTop:"20px"}}
      ></iframe>        </div>
        </>
    )
}
export default Previewvideo;