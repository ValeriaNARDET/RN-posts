import { PostForm } from "@components/PostForm";
import { StyleSheet, View, Text } from "react-native";

const CreatePostForm = () => {
    return (
        <View style={styles.container}>
            <Text  style={styles.header}>Create Post</Text>
            <PostForm />
        </View>
    );
};

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

export default CreatePostForm;