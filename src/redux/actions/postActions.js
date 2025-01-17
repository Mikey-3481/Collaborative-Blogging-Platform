import { v4 as uuidv4 } from "uuid";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

const getPosts = () => JSON.parse(localStorage.getItem("posts")) || [];
const getPublishedBlogs = () =>
  JSON.parse(localStorage.getItem("published-blogs")) || [];
const setPosts = (posts) =>
  localStorage.setItem("posts", JSON.stringify(posts));
const setPublishedBlogs = (blogs) =>
  localStorage.setItem("published-blogs", JSON.stringify(blogs));

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userSuccess = (data) => ({
  type: USER_SUCCESS,
  payload: data,
});

export const userFailure = (error) => ({
  type: USER_FAILURE,
  payload: error,
});

export const getBlogs = (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const posts = getPosts();
      dispatch(userSuccess(posts));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const fetchBlogById = (id) => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const blogs = getPublishedBlogs();
      const blog = blogs.find((blog) => blog.id === id);
      dispatch(userSuccess(blog));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const fetchPublishedBlogs = (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const blogs = getPublishedBlogs();
      dispatch(userSuccess(blogs));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const createPost = (data) => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const posts = getPosts();
      const newPost = {
        id: uuidv4(),
        author: data.author,
        title: data.title,
        content: data.content,
      };
      posts.push(newPost);
      setPosts(posts);
      dispatch(userSuccess(data));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const deletePost = (id) => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const posts = getPosts();
      const filteredPosts = posts.filter((post) => post.id !== id);
      setPosts(filteredPosts);
      dispatch(userSuccess(filteredPosts));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const updateBlog = (id, updatedData) => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const posts = getPosts();
      const updatedPosts = posts.map((post) =>
        post.id === id ? { ...post, ...updatedData } : post
      );
      setPosts(updatedPosts);
      dispatch(userSuccess(updatedPosts));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};

export const publishBlog = (data) => (dispatch) => {
  dispatch(userRequest());
  setTimeout(() => {
    try {
      const blogs = getPublishedBlogs();
      const newBlog = {
        id: data.id,
        author: data.author,
        title: data.title,
        content: data.content,
        published: new Date().toISOString(),
      };
      blogs.push(newBlog);
      setPublishedBlogs(blogs);
      dispatch(userSuccess(newBlog));
    } catch (error) {
      dispatch(userFailure(error));
    }
  }, 1000);
};
