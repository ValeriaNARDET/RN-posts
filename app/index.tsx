import { useEffect } from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { selectAuth } from "@store/auth/authSlice";

export default function Index() {
  const isAuthenticated = useSelector(selectAuth);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/posts");
    } else {
      router.replace("/auth");
    }
  }, [isAuthenticated]);

  return null;
}