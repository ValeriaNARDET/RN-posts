import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { PostEditForm } from "@components/PostEditForm";

const PostEditPage: React.FC = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Post</Text>
            <PostEditForm id={Number(id)} />           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      paddingVertical: 46,
      paddingHorizontal: 28,
    },
    header: { 
      marginVertical: 18,
      fontSize: 28, 
      fontWeight: "bold",
      color: '#3e1158'
    },
});


export default PostEditPage;