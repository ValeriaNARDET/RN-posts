import { View, TextInput, Button, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@store/auth/authSlice";
import StyledButton from "@components/base/StyledButton";
import { COLORS, INDENT, RADIUS, SIZE } from "@shared/tokens";

const Auth = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAuth = () => {
    if (!userEmail || !userPassword) { // так, це банально тупо, але для тестового поки що так, соррі
      return;
    }

    dispatch(login(userEmail));
    router.replace("/posts");
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.header}>Login Form</Text>
        <TextInput
          placeholder="Enter your email"
          value={userEmail}
          style={styles.input}
          onChangeText={setUserEmail}
          />
          <TextInput
            placeholder="Enter password"
            secureTextEntry={true}
            textContentType="password"
            autoComplete="current-password"
            value={userPassword}
            style={styles.input}
            onChangeText={setUserPassword}
            />
          <StyledButton label="Send" size="large"  onPress={handleAuth} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
  },
  group: {
    width: '90%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: INDENT.p16,
    paddingVertical: INDENT.p24,
    borderRadius: RADIUS.r16,
    borderWidth: 2,
    borderColor: COLORS.primaryDark,
    backgroundColor: COLORS.primaryLight,
  },
  header: { 
    marginVertical: 12,
    fontSize: SIZE.fz28, 
    fontWeight: "bold" 
  },
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

export default Auth;