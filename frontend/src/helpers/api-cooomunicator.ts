import axios from "axios";
export const signInUser = async (email: string, password: string) => {
  const res = await axios.post("/user/signin", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to Sign In");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if (res.status !== 200) {
      throw new Error("Unable to authenticate");
    }
    const data = await res.data;
    return data;
  };


  export const sendChatRequest = async (message: string) => {
    const res = await axios.post("/chat/new", { message });
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
  };  

  export const getUserChats = async () => {
    const res = await axios.get("/chat/all-chats");
    if (res.status !== 200) {
      throw new Error("Unable to get chat");
    }
    const data = await res.data;
    return data;
  };

  export const deleteUserChats = async () => {
    const res = await axios.delete("/chat/delete");
    if (res.status !== 200) {
      throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
  };

  export const signOutUser = async () => {
    const res = await axios.get("/user/signout");
    if (res.status !== 200) {
      throw new Error("Unable to sign out user");
    }
    const data = await res.data;
    return data;
  };

  export const signupUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    const res = await axios.post("/user/signup", { name, email, password });
    if (res.status !== 201) {
      throw new Error("Unable to Signup");
    }
    const data = await res.data;
    return data;
  };