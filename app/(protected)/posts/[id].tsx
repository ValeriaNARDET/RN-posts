import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { PostDetails } from "@components/PostDetails";

const PostDetailsPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <PostDetails />   
    
            <Pressable style={styles.button} onPress={( ) => router.back()}>
                <Text style={styles.buttonText}>Go to Posts</Text>
            </Pressable>        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 46,
        paddingHorizontal: 28,
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
});

export default PostDetailsPage;