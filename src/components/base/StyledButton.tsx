import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS, INDENT, RADIUS, SIZE } from "@shared/tokens";

type StyledButtonProps = {
    label: String;
    size: "large" | "small";
    disabled?: boolean;
    onPress?: () => void;
}

const StyledButton:React.FC<StyledButtonProps> = ({ 
    label, 
    size, 
    disabled,
    ...props 
}) => {
    return (
        <Pressable 
            style={[
                size === 'large' ? styles.buttonLarge : styles.buttonSmall, 
                disabled && styles.disabled
            ]} 
            disabled={disabled}
            {...props}
        >
            <Text style={size === 'large' ? styles.textLarge : styles.textSmall}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonLarge: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 20,
        paddingVertical: INDENT.p16,
        borderRadius: RADIUS.r6,
        backgroundColor: COLORS.primaryDark,
    },
    textLarge: {
        color: COLORS.primaryLight,
        fontSize: SIZE.fz20,
        fontWeight: 'bold',
    },
    buttonSmall: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        paddingVertical: INDENT.p8,
        paddingHorizontal: INDENT.p12,
        borderRadius: RADIUS.r4,
        elevation: 3,
        backgroundColor: COLORS.primaryLight,
    },
    textSmall: {
        color: COLORS.primaryDark,
    },
    disabled: {
        opacity: 0.5
    }
})

export default StyledButton;