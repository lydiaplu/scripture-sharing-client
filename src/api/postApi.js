import { api, getHeader } from './apiConfig';

export async function addPost(post) {
    const formData = new FormData();
    formData.append("userId", post.userId);
    formData.append("content", post.content);

    if (post.images)
        formData.append("images", post.images);

    const response = await api.post("/posts/add/new-post", formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log("/posts/add/new-post: ", response);

    if (response.status === 200) {
        return response.data;
    } else {
        return false;
    }
}

export async function editPost(post) {
    const formData = new FormData();
    formData.append("content", post.content);
    if (post.images)
        formData.append("images", post.images);

    const response = await api.put(`/posts/update/${post.postId}`, formData, {
        headers: { ...getHeader(), "Content-Type": "multipart/form-data" }
    })

    console.log(`/posts/update/${post.postId}`, response);

    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export async function deletePost(postId) {
    try {
        const result = await api.delete(`/posts/delete/${postId}`, {
            headers: getHeader()
        })

        return result.data;
    } catch (error) {
        throw new Error(`Error deleting ${error.message}`);
    }
}

export async function getPostById(postId) {
    try {
        const result = await api.get(`/posts/post/${postId}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function getLatestPostsByUserAndFollowers(userId, lastSeenTimestamp, page, size) {
    try {
        const result = await api.get(`/posts/newest?userId=${userId}&lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findLatestPostsByUser(userId, lastSeenTimestamp, page, size) {
    try {
        const result = await api.get(`/posts/${userId}/newest?lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}

export async function findLatestPostsByUsername(username, lastSeenTimestamp, page, size) {
    try {
        const result = await api.get(`/posts/byusername/${username}/newest?lastSeenTimestamp=${lastSeenTimestamp}&page=${page}&size=${size}`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching ${error.message}`)
    }
}