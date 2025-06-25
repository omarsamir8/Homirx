import Member from '../.././components/member/member'
import DisplayVilla from '../.././components/DisplayVilla/DisplayVilla'
import ClientReview from '../.././components/ClientReview/ClientReview'
import Proplist from '../.././components/Proplist/Proplist'
import Brands from '../.././components/Brands/Brands'
import BookAppointment from '../.././components/BookAppointment/BookAppointment'
import OverView from '../.././components/OverView/OverView'
import Previewvideo from '../.././components/Previewvideo/Previewvideo'
import Featured from '../.././components/Featured/Featured'
import MyMap from '../.././components/Location/Location'
function Property(){
    return (
        <div className="property">
            <div style={{paddingTop:"50px" }}>
               <Member name="Nova Quincy Apartment" home="Home"/> 
            </div>
            <DisplayVilla/>
            <OverView/>
            <Previewvideo/>
            <Featured/>
            <MyMap/>
            <ClientReview/>
            <Proplist name="Top Related Properties"/>
            <Brands/>
            <BookAppointment/>
        </div>
    )
}
export default Property;