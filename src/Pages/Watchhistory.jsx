import { faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistory, getAllVideoHistory } from '../services/allApi'


function Watchhistory() {
  const [videoHistory, setVideoHistory] = useState([])
  const [deleteStatus, setdeleteStatus] = useState([])

  const getAllHistory = async () => {
    const result = await getAllVideoHistory()
    //console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data)
    }
  }

  //console.log(videoHistory);

  const deleteVideo = async (id) => {
    const result = await deleteVideoHistory(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdeleteStatus(result.data)
    }
  }


  useEffect(() => {
    getAllHistory()
  }, [deleteStatus])

  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h5>Watch History</h5>
        <Link to={'/Home'} style={{ textDecoration: 'none' }}><h5 className='d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faHouse} className='me-2' /> <span className='fs-5 d-none d-md-flex me-5'>Back Home</span></h5></Link>
      </div>

      <div className="container mt-5 table-responsive">
        {
          videoHistory?.length > 0 ? <table className='table table-bordered'>
            <thead>
              <tr>
                <th className='p-3 text-center'>SI.NO</th>
                <th className='p-3 text-center'>Caption</th>
                <th className='p-3 text-center'>Url</th>
                <th className='p-3 text-center'>Timestamp</th>
                <th className='p-3 text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                videoHistory?.map((item, index) => (
                  <tr className='text-center' key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td><Link to={`${item?.url}`} target='_blank'>{item?.url}</Link></td>
                    <td>{item?.time}</td>
                    <td><button onClick={() => deleteVideo(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
                  </tr>
                ))
              }
            </tbody>
          </table> :
            <h4 className='text-danger text-center mt-5'>History Cleared</h4>
        }
      </div>
    </>
  )
}

export default Watchhistory