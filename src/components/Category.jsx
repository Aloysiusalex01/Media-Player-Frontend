import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from '../components/Videocard'
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../services/allApi';
import { toast, ToastContainer } from 'react-toastify';

function Category() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const [categoryName, setCategoryName] = useState("")
    console.log(categoryName);
    const [allCategory, setAllCategory] = useState([])
    const [addCategoryStatus, setAddCategoryStatus] = useState({})
    const [deleteCategoryStatus, setDeleteCategoryStatus] = useState({})
    const [updateCategoryStatus, setUpdateCategoryStatus] = useState({})

    const handleReset = () => {
        setCategoryName("")
    }

    const handleClose = () => {
        setShow(false);
        handleReset()
    }

    const addNewCategory = async () => {
        if (categoryName) {
            const reqBody = {
                category: categoryName,
                allVideos: []
            }
            const result = await addCategoryApi(reqBody)
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                toast.success('Category Added Succesfully')
                handleClose()
                setAddCategoryStatus(result.data)
            }
            else {
                toast.error('Something Error')
                handleReset()
            }
        } else {
            toast.info('Please Add A Category Name')
        }

    }

    const getAllCategory = async () => {
        const result = await getAllCategoryApi()
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setAllCategory(result.data)
        }
    }
    //console.log(allCategory);

    const deleteCategory = async (id) => {
        const result = await deleteCategoryApi(id)
        console.log(result);

        if (result.status >= 200 && result.status < 300) {
            setDeleteCategoryStatus(result.data)
        }
    }

    const videoOver = (e) => {
        //prevent the reload - data loss
        e.preventDefault()
    }

    const videoDrop = async (e, categoryDetails) => {
        console.log(e);
        console.log(categoryDetails);

        //allVideos: []
        //category: "Malayalam Movies"
        //id: 1

        const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
        console.log(videoDetails);

        //caption: "Thudarum"
        //embedLink: "https://www.youtube.com/embed/HZrYlXuecRg"
        //id: 60
        //image: "https://static.toiimg.com/thumb/msid-115109909,width-1280,height-720,resizemode-4/1151

        if (categoryDetails.allVideos.find((item) => item.id == videoDetails.id)) {
            toast.warning('Video already in this category')
        } else {
            categoryDetails.allVideos.push(videoDetails)
            const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
            //console.log(result); 
            if (result.status >= 200 && result.status < 300) {
                setUpdateCategoryStatus(result.data)
            }
        }
    }


    useEffect(() => {
        getAllCategory()
    }, [addCategoryStatus, deleteCategoryStatus, updateCategoryStatus])

    return (
        <>
            <h5>Category</h5>
            <button onClick={handleShow} className='btn btn-danger mt-4' style={{ width: '370px' }}>Add Category</button>
            {
                allCategory?.length > 0 ?
                    allCategory?.map((item, index) => (
                        <div className='border border-secondary rounded mt-3 p-3' key={index} droppable="true" onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
                            <div className='d-flex justify-content-between'>
                                <h6>{item?.category}</h6>
                                <button onClick={() => deleteCategory(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
                            </div>


                            {
                                item?.allVideos?.map((video) => (
                                    <div>
                                        <Videocard video={video} isPresent = {true} />
                                    </div>
                                ))
                            }

                        </div>)) :
                    <p className='text-danger mt-3 text-center'>No Category Yet Added</p>
            }


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger'>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='border rounded p-3'>
                        <div>
                            <input value={categoryName} type="text" placeholder='Enter Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="danger" onClick={addNewCategory}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme="colored" autoClose={2000} />
        </>
    )
}

export default Category