import "./Card.css";
export const Card = (props)=>{
    return(
        
      <div className='item'>
      <img
          className=" carousel_image  "
          src={props.img}
          alt={props.name}
        />
        <div className='carousel_text'>
          <h3>Artist Name</h3>
          <p>{props.name}</p>
          <h3>Info</h3>
          <p>{props.info}</p>
          <h3>Date</h3>
          <p>{props.date}</p>
          <h3>Time</h3>
          <p>{props.time}</p>
        </div>
        
      </div>
        
      
    )
}

export const edmData=[
    {
        name:"Chris Hemsworth",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium dolore modi dolorum. Praesentium eveniet quos numquam doloribus accusamus recusandae!",
        date:"20/12/2022",
        time:"7:00 PM",
        img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQ1CUHjkHNjDtsNZ8L0tJIf9zxU9fd4-PFp4tD2tLXuT6eQesdR2TZZxESFtgqQbwMFl29hoMPUCDJ5uGw&psig=AOvVaw3Z_ZdeIT4mrU6GKcZtJvt4&ust=1671091352223000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCKiI7sDS-PsCFQAAAAAdAAAAABAE"
    },
    {
        name:"Robert Downey Jr.",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium dolore modi dolorum. Praesentium eveniet quos numquam doloribus accusamus recusandae!",
        date:"21/12/2022",
        time:"8:00 PM",
        img:"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcS8vYy2EaeIHi-nOXs2oaIrQks52cWHbC-ds66WbgVmrRrdfmfgSfVH-UsGBb0sFjzl1vxbdudVcV1k5Dg&psig=AOvVaw3qe3dqvCAK7giFA9e5Ah7B&ust=1671092213043000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIjfrtvV-PsCFQAAAAAdAAAAABAE"
    }

]