import { Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "@store/posts/postsSlice";
import { Post } from "../types/post";
import StyledButton from "@components/base/StyledButton";
import { COLORS, SIZE } from "@shared/tokens";


export const PostDetails: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = useSelector(selectPosts).find((p: Post) => p.id === Number(id));

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

      <StyledButton label="Edit Post" size="small" onPress={() => handlePress()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 18,
    fontSize: SIZE.fz28,
    fontWeight: "bold",
    color: COLORS.primaryDark
  },
  content: {
    fontSize: SIZE.fz16,
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },
});