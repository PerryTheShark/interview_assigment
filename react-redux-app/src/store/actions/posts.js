import { POST_GET_ALL, POST_SET_ALL } from "../types"

export const getAllPosts = () => {
    return { type: POST_GET_ALL }
}

export const setAllPosts = (posts) => {
    return {
        type: POST_SET_ALL,
        posts
    }
}