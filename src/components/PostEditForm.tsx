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
import StyledButton from "@components/base/StyledButton";
import { COLORS, INDENT, RADIUS, SIZE } from "@shared/tokens";


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
            <StyledButton label="Save" size="large"  disabled={disabled} onPress={() => handlePress()} />
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
    }
});
