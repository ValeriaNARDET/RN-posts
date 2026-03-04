import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "@store/posts/postsSlice";
import { AppDispatch } from "@store/store";
import { fetchPosts } from "@store/posts/postsSlice";
import { useRouter } from "expo-router";


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
            <Pressable style={styles.button} onPress={() => getPostdetails(Number(item.id))}>
              <Text style={styles.buttonText}>Show Details</Text>
            </Pressable>
          </View>
        )}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 6,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#3e1158'
  },
  body: {
    paddingVertical: 8,
    fontSize: 14,
    color: '#3e1158'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
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