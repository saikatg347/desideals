import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const validateName = () => {
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setErrors((prev) => ({
        ...prev,
        name: "Name should only contain letters",
      }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          "Password must be 8 characters long, contain at least one number, one uppercase letter, and one lowercase letter",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSignup = () => {
    validateName();
    validateEmail();
    validatePassword();

    if (isChecked && !errors.name && !errors.email && !errors.password) {
      Alert.alert("Success", "You have signed up successfully!");
      // Add your signup logic here
    } else if (!isChecked) {
      Alert.alert("Error", "You must agree to the terms and conditions.");
    } else {
      Alert.alert("Error", "Please correct the errors before submitting.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <Text style={styles.subtitle}>
        Fill Your Information Below Or Register With Your Social Accounts
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        onBlur={validateName}
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        onBlur={validatePassword}
      />
      {errors.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, isChecked && styles.checkboxChecked]}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && <View style={styles.checkboxMark} />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          Agree With <Text style={styles.link}>Terms & Condition</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign up with</Text>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/signuplogo/google.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/signuplogo/fb.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require("../assets/signuplogo/apple.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.signInText}>
        Already Have An Account?{" "}
        <Text
          style={styles.signInLink}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    borderColor: "#FF3B30",
    backgroundColor: "#FF3B30",
  },
  checkboxMark: {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  link: {
    color: "#FF3B30",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  or: {
    textAlign: "center",
    marginVertical: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 15,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  signInText: {
    textAlign: "center",
  },
  signInLink: {
    color: "#FF3B30",
    fontWeight: "bold",
  },
});

export default Signup;
