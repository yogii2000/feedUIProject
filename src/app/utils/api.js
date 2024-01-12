// utils/api.js

export const fetchPosts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const createPost = async (newPost) => {
    // const {title,thumbnail} = newPost;
    // const formData = new FormData()
    // formData.append('thumbnail',thumbnail)
    // formData.append('title',title)
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) {
        throw new Error('Failed to create a new post');
    }
    return response.json();
};

export const deletePost = async (postId) => {
    const response = await fetch(`https://dummyjson.com/products/${postId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete the post');
    }
    return response.json();
};
