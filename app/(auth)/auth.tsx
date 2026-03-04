import { View, TextInput, Button, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { login } from "@store/auth/authSlice";

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
          <Pressable style={styles.button} onPress={handleAuth}>
            <Text  style={styles.buttonText}>Send</Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ce79ff',
  },
  group: {
    width: '90%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 16,
    borderColor: '#3e1158',
    borderWidth: 2,
    backgroundColor: '#faf3ff',
  },
  header: { 
    marginVertical: 12,
    fontSize: 28, 
    fontWeight: "bold" 
  },
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
    marginVertical: 18,
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

export default Auth;