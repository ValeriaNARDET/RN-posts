import { axiosInstance } from "./axios";
import { Post, NewPost } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>("/posts");
  return response.data;
};

export const createPost = async (data: NewPost): Promise<Post> => {
  const response = await axiosInstance.post<Post>("/posts", data);
  return response.data;
};

export const editPost = async (data: Post): Promise<Post> => {
  const response = await axiosInstance.put<Post>(`/posts/${data.id}`, data);
  return response.data;
};

export const deletePost = async (id: Post["id"]): Promise<Post> => {
  const response = await axiosInstance.delete<Post>(`/posts/${id}`);
  return response.data;
};