import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { PostList } from "@components/PostList";
import StyledButton from "@components/base/StyledButton";
import { COLORS, INDENT, SIZE } from "@shared/tokens";

const Posts = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>      
      <Text style={styles.header}>Posts</Text>

      <View style={styles.posts}>
        <PostList />
      </View>
      <StyledButton label="Create New Post" size="large"  onPress={() => router.push('/posts/create')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: INDENT.p46,
    paddingHorizontal: INDENT.p24,
  },
  header: { 
    marginVertical: 18,
    fontSize: SIZE.fz40, 
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },
  posts: {
    flex: 1
  },
});

export default Posts;