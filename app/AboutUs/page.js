import Achievements from '../components/Achievements/Achievements'
import Team from '../components/Team/Team'
import ClientReview from '../components/ClientReview/ClientReview'
import AboutUs from '../components/AboutUs/Aboutus'
import Member from '../components/member/member'
import Brands from '../components/Brands/Brands'

function AboooutUs(){
    return (
        <>
        <div className="AboooutUs">
            <div style={{paddingTop:"50px" }}>
                <Member name="AboutUs" home="Home"/>
            </div>
            <Achievements/>
            <Team/>
            <Brands/>
            <AboutUs/>
            <ClientReview/>
        </div>
        </>
    )
}
export default AboooutUs;