import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
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
    }
  });
