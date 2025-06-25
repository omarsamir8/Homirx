import './member.css'
function Member(prop){
    return(
        <>
        <div className="member">
            <h2>{prop.name}</h2>
            <h3>{prop.home} / <span>{prop.name}</span></h3>
        </div>
        </>
    )
}
export default Member;