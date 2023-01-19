import { Button } from 'react-bootstrap';
import Gallery from "./Gallery";
import { useState } from 'react';
const PopUp = (props) => {

    const [modal, setModal] = useState(false)

    function openModal() {
      modal===false?setModal(true):setModal(false);
      props.func();
    }
    const galleryImages = [
        {
          img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]

  return (
    <div className='text-center m-3 popWrapper'>
        <Button className="m-auto p-3 " size='lg' variant='dark' onClick={openModal} style={{fontSize:"2rem"}}>Enter Tessaract Gallery Room</Button>

        {modal?<div className='text-center' style={{position:"absolute",backgroundColor:"rgba(255,255,255,0.2)",  Color: 'yellow', width: '100vw',minHeight:"100vh", height: 'fit-content', zIndex: "10",top:'220vh',left:'0',padding:"25px"}} >
        
        <Gallery
        galleryImages={galleryImages}
      />
      <Button className="m-3 m-3 p-3 " size='lg' variant='dark' onClick={openModal}>Return Back to Space</Button>
        </div>:<></>}
    </div>
  )
}

export default PopUp