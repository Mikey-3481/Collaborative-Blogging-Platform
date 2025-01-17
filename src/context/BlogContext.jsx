import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const getStoredBlogs = () =>
    JSON.parse(localStorage.getItem("userBlogs")) || {};
  const saveStoredBlogs = (data) =>
    localStorage.setItem("userBlogs", JSON.stringify(data));

  const [blogData, setBlogData] = useState(() => {
    const storedData = getStoredBlogs();
    return user?.id
      ? storedData[user.id] || { title: null, content: null }
      : { title: null, content: null };
  });

  const updateBlogData = useCallback(
    (newData) => {
      if (!user?.id) return;

      const storedData = getStoredBlogs();
      const userData = storedData[user.id] || {};
      const updatedData = { ...userData, ...newData };

      storedData[user.id] = updatedData;
      saveStoredBlogs(storedData);

      setBlogData(updatedData);
    },
    [user?.id]
  );

  const clearBlogData = useCallback(() => {
    if (!user?.id) return;

    const storedData = getStoredBlogs();
    delete storedData[user.id];
    saveStoredBlogs(storedData);

    setBlogData({ title: null, content: null });
  }, [user?.id]);

  useEffect(() => {
    const storedData = getStoredBlogs();
    if (user?.id) {
      setBlogData(storedData[user.id] || { title: null, content: null });
    } else {
      setBlogData({ title: null, content: null });
    }
  }, [user?.id]);

  return (
    <BlogContext.Provider
      value={{
        blogData,
        updateBlogData,
        clearBlogData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
