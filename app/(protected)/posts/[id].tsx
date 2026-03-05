import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { PostDetails } from "@components/PostDetails";
import StyledButton from "@components/base/StyledButton";
import { INDENT } from "@shared/tokens";

const PostDetailsPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <PostDetails />   
            <StyledButton label="Go to Posts" size="large"  onPress={( ) => router.back()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: INDENT.p46,
        paddingHorizontal: INDENT.p24,
    },
});

export default PostDetailsPage;