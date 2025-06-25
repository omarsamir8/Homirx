import Team from '../components/Team/Team'
import AboutUs from '../components/AboutUs/Aboutus'
import Member from '../components/member/member'

function Members(){
    return (
        <>
        <div className="Members">
            <div style={{paddingTop:"50px" }}>
                <Member name="Members" home="Home"/>
            </div>
            <Team/>
            <AboutUs/>
            
        </div>
        </>
    )
}
export default Members;