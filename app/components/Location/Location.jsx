export default function MyMap() {
  return (
    <>
    <div className="map">
      <h2 style={{fontSize:"26px",fontWeight:"bold",padding:"20px",color:"black"}}><i style={{fontSize:"22px",color:"rgb(243, 100, 48)"}} className="fas fa-location"></i> Location</h2>
       <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d151231.97830993807!2d30.917798755306546!3d30.444379854419093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1750260720872!5m2!1sar!2seg"
                    width="98%"
                    height="450"
                    style={{ border: 0 ,borderRadius:"20px",margin:"auto",}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
    </div>
    </>
  );
}
