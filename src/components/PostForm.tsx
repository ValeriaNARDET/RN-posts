import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { addPost } from "@store/posts/postsSlice";
import { NewPost } from "../types/post";
import { router } from "expo-router";


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
            <Pressable style={[styles.button, disabled && styles.disabled]} disabled={disabled} onPress={() => addNewPost()}>
                <Text style={styles.buttonText}>Save</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginVertical: 8,
        borderRadius: 6,
        fontSize: 18,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
        paddingVertical: 14,
        borderRadius: 6,
        backgroundColor: '#3e1158',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    disabled: {
        opacity: 0.5
    }
});
