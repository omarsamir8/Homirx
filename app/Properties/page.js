export const metadata = {
  title: "Properties",
  description: "We are a team of passionate and experienced civil engineers dedicated to shaping the future through innovative, sustainable, and reliable engineering solutions. At [الماسة], we specialize in designing, planning, and managing infrastructure projects that stand the test of time. From residential and commercial developments to highways, bridges, and water systems, our commitment to quality and precision drives every project we undertake.Explore our expertise in: Structural Engineering Transportation & Highway Design Water Resources & Environmental Engineering Construction Management Land Development & Urban Planning",
};
import Dreamhome from '../components/Dreamhome/Dreamhome'
import AboutUs from '../components/AboutUs/Aboutus'
import PartmentTypes from '../components/PartmentTypes/PartmentTypes'
import Proplist from '../components/Proplist/Proplist'
function Properties(){
    return (
        <>
        <div className="properties">
            <div style={{paddingTop:"50px" }}>
                <Dreamhome/>
            </div>
            <Proplist/>
           <PartmentTypes/> 
           <AboutUs/>
        </div>
        </>
    )
}
export default Properties;