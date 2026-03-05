import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "@store/posts/postsSlice";
import { AppDispatch } from "@store/store";
import { fetchPosts } from "@store/posts/postsSlice";
import { useRouter } from "expo-router";
import StyledButton from "@components/base/StyledButton";
import { COLORS, INDENT, RADIUS, SIZE } from "@shared/tokens";


export const PostList: React.FC = () => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts());
    }
  }, []);

  const getPostdetails = (id: number) => {
    router.push(`/posts/${id}`);
  }

  return (
    <View>
      {posts && <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body.substring(0, 35)} ...</Text>
            <StyledButton label="Show Details" size="small" onPress={() => getPostdetails(Number(item.id))} />
          </View>
        )}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: INDENT.p8,
    borderRadius: RADIUS.r6,
  },
  title: {
    fontSize: SIZE.fz20,
    fontWeight: "bold",
    color: COLORS.primaryDark,
  },
  body: {
    paddingVertical: INDENT.p8,
    fontSize: SIZE.fz16,
    color: COLORS.primaryDark,
  },
});