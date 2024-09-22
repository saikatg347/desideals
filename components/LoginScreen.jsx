import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign in</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitle}>Please Sign In To Continue</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signUpContainer}>
            Don't have any account?
            <Text style={styles.signUpText}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
        {/* Continue With Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Ionicons name="logo-google" size={20} color="black" />
          <Text style={styles.googleButtonText}>Continue With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
    marginTop: 20,
  },

  signUpContainer: {
    textAlign: "center",
    marginTop: 10,
    color: "#777",
    marginBottom: 20,
  },
  signUpText: {
    color: "red",
    fontWeight: "bold",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    margintop: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 20,
    marginTop: 20,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    top: 12,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 4,
    backgroundColor: "white",
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: "red",
  },
  rememberText: {
    color: "#777",
  },
  forgotPassword: {
    color: "red",
  },
  signInButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15, // Adjusted margin between buttons
    marginTop: 10,
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  googleButtonText: {
    color: "black",
    marginLeft: 5,
  },
});

export default LoginScreen;
