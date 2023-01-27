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
          img: 'https://drive.google.com/uc?id=1mOFSx5kTeAkv5dESmJE-B5j-RQQbVU6v'
        },
        {
          img: "https://drive.google.com/uc?id=1XwSEDvfS6B93CJvWGC0UPcdwTr0Mfe4h"
        },
        {
          img: "https://drive.google.com/uc?id=1XDmjWJOSPnvcAyNW_0M6icjR3ulZz2gW"
        },
        {
          img: "https://drive.google.com/uc?id=1NM-dV4j-ateLsTQMZYqxZkBWde39lKx8"
        },
        {
          img: "https://drive.google.com/uc?id=1NPXQzH2eRiUmm18vFpa57k2srkANPCxC"
        },
        {
          img: "https://drive.google.com/uc?id=1dB-b18sjj-r48_lDjNt7sSSepfW3FvNP"
        },
        {
          img:"https://drive.google.com/uc?id=1KcAIlTcUuM6gb4O-QeOgVzQeu3xlyNgk"
        },
        {
          img:"https://drive.google.com/uc?id=1nNVq5Ed5AeVdhRM81yZmDdfaf1MIPeIm"
        },
        {
          img:"https://drive.google.com/uc?id=1nqNLujY6AIj-FXbw68YqsCVMcY3S8Yr8"
        },
        {
          img:"https://drive.google.com/uc?id=10TEcs-V2NTDcZci0POcz8WyuNzDCYssE"
        },
        {
          img:"https://drive.google.com/uc?id=11yEP8YUS0rDGY5Wd94_LHK3luAQSK0GL"
        }
      ]

  return (
    <div id="gallery" className='text-center m-3 popWrapper' style={{display:"relative"}}>
        <Button className="m-auto p-3 " size='lg' variant='dark' onClick={openModal} style={{fontSize:"2rem"}}>Enter Tessaract Gallery Room</Button>

        {modal?<div className='text-center' style={{backgroundColor:"rgba(255,255,255,0.2)",  Color: 'yellow', width: '100vw',minHeight:"100vh", height: 'fit-content', zIndex: "10",padding:"25px",transform:"translate(0,-25%)"}} >
        
        <Gallery
        galleryImages={galleryImages}
      />
      <Button className="m-3 m-3 p-3 " size='lg' variant='dark' onClick={openModal}>Return Back to Space</Button>
        </div>:<></>}
    </div>
  )
}

export default PopUp