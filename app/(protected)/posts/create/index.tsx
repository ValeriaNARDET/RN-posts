import { PostForm } from "@components/PostForm";
import { COLORS, INDENT, SIZE } from "@shared/tokens";
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
      paddingVertical: INDENT.p46,
      paddingHorizontal: INDENT.p24,
    },
    header: { 
      marginVertical: 18,
      fontSize: SIZE.fz28, 
      fontWeight: "bold",
      color: COLORS.primaryDark,
    },
});

export default CreatePostForm;