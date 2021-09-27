export const API_ENDPOINT = {
     getAllPosts: (domain) => `${domain}/posts`,
    getPost : (domain , id) => `${domain}/posts/${id}`,
    getAllComments : (domain , id) => `${domain}/comments?postId=${id}`
}



