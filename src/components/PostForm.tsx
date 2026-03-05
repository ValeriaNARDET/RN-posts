import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { addPost } from "@store/posts/postsSlice";
import { NewPost } from "../types/post";
import { router } from "expo-router";
import StyledButton from "@components/base/StyledButton";
import { COLORS, INDENT, RADIUS, SIZE } from "@shared/tokens";


export const PostForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const addNewPost = () => {
        if (!title || !body) {
            return;
        }
        const post: NewPost = {title, body, userId: 1};
        dispatch(addPost(post));
        router.replace('/posts');
    }
      

    const onPressAdd = () => {
        if (!title) {
            return;
        } else {
            setTitle('');
        }
    }

    const disabled = !title || !body;

    return (
        <View>
            <TextInput
                placeholder="Title" 
                value={title}
                style={styles.input}
                onChangeText={setTitle}
            />
            <TextInput
                placeholder="Post body ..." 
                value={body}multiline={true}
                numberOfLines={4} 
                style={styles.input}
                onChangeText={setBody}
            />
            <StyledButton label="Save" size="large" disabled={disabled} onPress={() => addNewPost()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        paddingHorizontal: INDENT.p16,
        paddingVertical: INDENT.p12,
        marginVertical: INDENT.p8,
        borderRadius: RADIUS.r6,
        fontSize: SIZE.fz18,
        backgroundColor: COLORS.white,
    },
});
