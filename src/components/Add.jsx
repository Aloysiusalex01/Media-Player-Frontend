import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { videoAddApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'





function Add({ setAddVideoStatus }) {
  const [show, setShow] = useState(false);

  const [videoDetails, setvideoDetails] = useState({
    caption: "",
    image: "",
    embedLink: ""
  })
  console.log(videoDetails);

  const handleClose = () => {
    setShow(false);
    handleReset()
  }
  const handleShow = () => setShow(true);

  const handleReset = () => {
    setvideoDetails({
      caption: "",
      image: "",
      embedLink: ""
    })
  }

  const handleUpload = async () => {
    const { caption, image, embedLink } = videoDetails
    if (!caption || !image || !embedLink) {
      alert('Please Fill The Form Completely')
    } else {

      //https://youtu.be/YtYAu31_YJU?si=Zvp1erJD3-g6gJW8
      if (embedLink.startsWith('https://youtu.be')) {
        let link = `https://www.youtube.com/embed/${embedLink.slice(17, 28)}`
        console.log(link);
        const result = await videoAddApi({ caption, image, embedLink: link })
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success('Video Added Successfully')
          handleClose()
          setAddVideoStatus(result.data)
        } else {
          toast.error('Sometrhing Went wrong')
          handleReset()
        }


      } else {
        //https://www.youtube.com/watch?v=YtYAu31_YJU
        let link = `https://www.youtube.com/embed/${embedLink.slice(-11)}`
        console.log(link);
        const result = await videoAddApi({ caption, image, embedLink: link })
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success('Video Added Successfully')
          handleClose()
          setAddVideoStatus(result.data)
        } else {

          toast.error('Something Went wrong')
          handleReset()
        }

      }
    }
  }

  return (
    <>
      <h5 className='d-flex justify-content-center align-items-center'><span className='fs-5 d-none d-md-flex ms-5'>Upload New Videos </span> <FontAwesomeIcon icon={faCloudArrowUp} className='ms-2' onClick={handleShow} /></h5>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'><FontAwesomeIcon icon={faFilm} className='me-2 fs-5' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details</p>
          <form className='border rounded p-3'>
            <div className='mb-3'>
              <input value={videoDetails.caption} type="text" placeholder='Video Caption' className='form-control' onChange={(e) =>
                setvideoDetails({ ...videoDetails, caption: e.target.value })
              } />
            </div>
            <div className='mb-3'>
              <input value={videoDetails.image} type="text" placeholder='Video Image' className='form-control' onChange={(e) =>
                setvideoDetails({ ...videoDetails, image: e.target.value })
              } />
            </div>
            <div>
              <input value={videoDetails.embedLink} type="text" placeholder='Video Url' className='form-control' onChange={(e) =>
                setvideoDetails({ ...videoDetails, embedLink: e.target.value })
              } />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="danger" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme="colored" autoClose={2000} />

    </>
  )
}

export default Add