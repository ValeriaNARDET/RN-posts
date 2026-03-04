import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { PostList } from "@components/PostList";

const Posts = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>      
      <Text style={styles.header}>Posts</Text>

      <View style={styles.posts}>
        <PostList />
      </View>

      <Pressable style={styles.button} onPress={( ) => router.push('/posts/create')}>
        <Text style={styles.buttonText}>Create New Post</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  header: { 
    marginTop: 34,
    marginBottom: 18,
    fontSize: 38, 
    fontWeight: "bold",
    color: '#3e1158'
  },
  posts: {
    flex: 1
  },
  button: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
    paddingVertical: 14,
    borderRadius: 6,
    backgroundColor: '#3e1158',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Posts;