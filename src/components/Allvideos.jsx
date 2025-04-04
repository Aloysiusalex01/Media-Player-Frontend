import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { allVideosApi } from '../services/allApi'


function Allvideos({ addVideoStatus }) {

  const [allVideo, setAllVideo] = useState([])
  const [deleteVideoStatus, setDeleteVideoStates] = useState()

  const getAllVideos = async () => {
    const result = await allVideosApi()
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllVideo(result.data)
    }
  }
  console.log(allVideo);


  useEffect(() => {
    getAllVideos()
  }, [addVideoStatus, deleteVideoStatus])


  return (
    <>
      <h5>All Videos</h5>
      <div className="container-fluid mt-5">
        <div className="row">
          {
            allVideo?.length > 0 ?
              allVideo?.map((item, index) => (
                <div className="col-md-3 p-2" key={index}>
                  <Videocard video={item} setDeleteVideoStates={setDeleteVideoStates} />
                </div>
              )) :

              <div className='d-flex justify-content-center align-items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGh4_lufGYCTbAKTVAZ3YxtWIV06iQVPQQIg&s" alt="no image" />
                <h5 className='text-danger ms-3'>No Video To Show</h5>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Allvideos