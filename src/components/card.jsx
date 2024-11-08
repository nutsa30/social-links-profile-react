import avatarimg from"../assets/avatar-jessica.jpeg"

function Card(){

    return(
    <div className="profileCard">

      <div>
        <img src={avatarimg} alt="" />
        <h1 className="heading">Jessica Randall</h1>
        <h4 className="subHeading">London, United Kingdom</h4>
        
      </div>
      
     
    
      <div className="buttons">
        <p className="p">"Front-end developer and avid reader."</p>
        <button className="btn"> GitHub</button>
        <button className="btn">Frontend Mentor</button>
        <button className="btn">LinkedIn</button>
        <button className="btn">Twitter</button>
        <button className="btn">Instagram</button>
      </div>

    </div>
 
    )

}


export default Card