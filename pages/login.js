import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

function Login(){
    const [fontsLoaded, fontError] = useFonts({
        'Koulen': require('../assets/fonts/Koulen-Regular.ttf'),
      });
    
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.welcomeConainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.backText}>Back...</Text>  
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>What journey are we embarking on today?</Text>
                </View>

                <View style={styles.loginContainer}>
                    <TextInput 
                        style={styles.usernameInput}
                        keyboardAppearance='dark'
                        placeholder='username'
                        placeholderTextColor='white'
                        textAlign='left'
                        textContentType='username'
                    />
                    <TextInput 
                        style={styles.passwordInput}
                        keyboardAppearance='dark'
                        placeholder='password'
                        placeholderTextColor='white'
                        textAlign='left'
                        textContentType='password'
                        secureTextEntry='True'
                    />
                </View>

                <View style={styles.loginContainer}>
                    <Pressable>
                        <Text style={styles.loginButton}>login</Text>
                    </Pressable>
                </View>

                <View style={styles.loginContainer}>
                    <Pressable>
                        <Text style={styles.createAccountButton}>create account</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373737',
    },

    welcomeConainer: {
        
    },

    welcomeText: {
        position: 'absolute',
        paddingLeft: 10,
        fontSize: 100,
        textAlignVertical: 'auto',
        color: 'white',
        fontFamily: 'Koulen'
    },

    backText: {
        position: 'absolute',
        marginTop: 80,
        paddingLeft: 10,
        fontSize: 100,
        textAlignVertical: 'auto',
        color: 'white',
        fontFamily: 'Koulen' 
    },

    text: {
        position:'relative',
        paddingLeft: 10,
        fontSize: 20,
        fontFamily: 'Koulen',
        color: 'white',
    },

    textContainer: {
        top: 200,
    },

    usernameInput: {
        fontFamily: 'Koulen',
        fontSize: 20,
        color: 'white',
        letterSpacing: 5,
        borderColor: 'white',
        borderWidth: 2,
        borderRightWidth: 7,
        borderBottomWidth: 7,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 5,
        height: 50,
        width: 300,
        alignContent: 'center',
        paddingLeft: 10,
    },

    passwordInput: {
        fontFamily: 'Koulen',
        fontSize: 20,
        color: 'white',
        letterSpacing: 5,
        borderColor: 'white',
        borderWidth: 2,
        borderRightWidth: 7,
        borderBottomWidth: 7,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 5,
        height: 50,
        width: 300,
        alignContent: 'center',
        marginTop: 30,
        paddingLeft: 10,
    },

    loginContainer: {
        top: 340,
        alignItems:'center',
    },

    loginButton: {
        fontFamily: 'Koulen',
        letterSpacing: 3,
        fontSize: 40,
        color: 'white',
        marginTop: 50,

    },

    createAccountButton: {
        fontFamily: 'Koulen',
        fontSize: 20,
        color: 'white',
        marginTop: 150,
    }
  });
