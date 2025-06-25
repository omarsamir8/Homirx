import './BookAppointment.css';
function BookAppointment(){
    return (
        <>
        <div className='BookAppointment'>
            <h5>Book Appointment</h5>
            <h2>Send Message AnyTime</h2>
            <form>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <input style={{width:"50%"}}  type='text' placeholder='FullName*' required/>
                    <input style={{width:"48%"}} type='email' placeholder='Email Address*' required/>
                </div>
                <input style={{marginTop:"20px"}} type='text' placeholder='Real Estate'/>
                <textarea placeholder='Your Message' name="" id=""></textarea>
                <button type='submit' className="btn btn-active btn-error"> Send Message</button>
            </form>
        </div>
        </>
    )
}
export default BookAppointment;