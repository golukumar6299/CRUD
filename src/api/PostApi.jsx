import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export const getPost = () =>{
    return api.get("/posts")
};

// delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
};

//post method
export const PostData = (post) => {
    return api.post("/posts", post);
};

// put method
// Use PATCH instead of PUT for updating data
export const updateData = (id, post) => {
    return api.patch(`/posts/${id}`, post); // changed to PATCH
};
