import { Stack, Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { selectAuth } from "@store/auth/authSlice";

export default function ProtectedLayout() {
  const isAuth = useSelector(selectAuth);

  if (!isAuth) {
    return <Redirect href="/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}