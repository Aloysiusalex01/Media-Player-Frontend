import { commonApi } from "./commonapi"
import { serverurl } from "./serverurl"

//video api
export const videoAddApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/videos`, reqBody)
}

//api to get all videos
export const allVideosApi = async () => {
    return await commonApi('GET', `${serverurl}/videos`)
}

//to delete a video
export const deleteVideosApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/videos/${id}`, {})
}

//api to add video to watch history
export const addVideoHistoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/history`, reqBody)
}

//api to get all video from history
export const getAllVideoHistory = async () => {
    return await commonApi('GET', `${serverurl}/history`)
}

//api to delete video from history 
export const deleteVideoHistory = async (id) => {
    return await commonApi('DELETE', `${serverurl}/history/${id}`, {})
}

//api to get category
export const addCategoryApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/category`, reqBody)
}

//api to get all categories
export const getAllCategoryApi = async () => {
    return await commonApi('GET', `${serverurl}/category`)
}

//api to delete category
export const deleteCategoryApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/category/${id}`, {})
}

//api to update category
export const updateCategoryApi = async (id, reqBody) => {
    return await commonApi('PUT', `${serverurl}/category/${id}`, reqBody)
}