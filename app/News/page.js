import Member from '../components/member/member'
import Proplist from '../components/Proplist/Proplist'
function News(){
    return (
        <>
        <div className="news">
            <div style={{paddingTop:"50px" }}>
               <Member name="Providing the best Real Estate Services" home="Home"/> 
            </div>
            <Proplist name="Top Related News"/>
        </div>
        </>
    )
}
export default News;