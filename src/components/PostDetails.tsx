import { Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "@store/posts/postsSlice";
import { Post } from "../types/post";


export const PostDetails: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = useSelector(selectPosts).find((p:Post) => p.id === Number(id));

  if (!post) {
    return <Text>Post not found</Text>;
  }

  const handlePress = () => {
    router.push(`/posts/edit/${id}`);
  }

  return (
    <ScrollView>
      <Text style={styles.header}>
        {post.title}
      </Text>

      <Text style={styles.content}>{post.body}</Text>

      <Pressable style={styles.button} onPress={() => handlePress()}>
        <Text style={styles.buttonText}>Edit Post</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: { 
    marginVertical: 18,
    fontSize: 28, 
    fontWeight: "bold",
    color: '#3e1158'
  },
  content: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#3e1158'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#faf3ff",
  },
  buttonText: {
    color: '#3e1158',
  },
});