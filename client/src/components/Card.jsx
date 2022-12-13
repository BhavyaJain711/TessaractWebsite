import "./Card.css";
const Card = (props)=>{
    return(
        <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img"/>
            <div className="card_info">
               <h3>{props.title}</h3>
               <p>{props.text}</p>
               
            </div>
        </div>
    )
}