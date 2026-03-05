import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { PostEditForm } from "@components/PostEditForm";
import { COLORS, INDENT, SIZE } from "@shared/tokens";

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
      paddingVertical: INDENT.p46,
      paddingHorizontal: INDENT.p24,
    },
    header: { 
      marginVertical: 18,
      fontSize: SIZE.fz28, 
      fontWeight: "bold",
      color: COLORS.primaryDark
    },
});


export default PostEditPage;