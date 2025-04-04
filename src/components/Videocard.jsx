import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideosApi } from '../services/allApi';

function Videocard({ video, setDeleteVideoStates, isPresent }) {
  //console.log(video);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const addVideoHistory = async () => {
    let caption = video?.caption
    let url = video?.embedLink
    const time = new Date
    //console.log(time);
    const result = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time);
    console.log(result);

    const response = await addVideoHistoryApi({ caption, url, time: result })
    console.log(response);



  }

  const handleShow = () => {
    setShow(true);
    addVideoHistory()
  }

  const deleteVideo = async (id) => {
    const result = await deleteVideosApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteVideoStates(result.data)
    }

  }

  const videoDrag = (e, video) => {
    console.log(e);
    console.log(video);
    e.dataTransfer.setData("videoDetails", JSON.stringify(video))

  }

  return (
    <>
      <Card className='mb-2 mt-2' style={{ width: '100%' }} draggable onDragStart={(e) => videoDrag(e, video)}>
        {!isPresent && <Card.Img onClick={handleShow} variant="top" src={video?.image} style={{ height: '200px' }} />}
        <Card.Body className='d-flex justify-content-between'>
          <Card.Title>{video?.caption}</Card.Title>
          {!isPresent && <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} onClick={() => deleteVideo(video?.id)} /></Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="377" src={`${video?.embedLink}?autoplay=1`} title="Lucifer Official Trailer | Mohanlal | Prithviraj Sukumaran | Antony Perumbavoor | Murali Gopy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard