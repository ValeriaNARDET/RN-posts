import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPosts } from "@store/posts/postsSlice";
import { AppDispatch } from "@store/store";
import { updatePost } from "@store/posts/postsSlice";
import { Post } from "../types/post";
import { router } from "expo-router";
import { editPost } from "@api/posts";


type PostEditFormProps = {
    id: Post["id"];
}


export const PostEditForm: React.FC<PostEditFormProps> = ({id}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const post = useSelector(selectPosts).find((p:Post) => p.id === id);


    useEffect(() => {
            setBody(post?.body || '');
            setTitle(post?.title || '');
    }, [id]);
    
    const handlePress = () => {
        dispatch(updatePost(post));
        editPost(post);
        router.back();
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
            <Pressable style={[styles.button, disabled && styles.disabled]} disabled={disabled} onPress={() => handlePress()}>
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
