import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

function Home(){
    const [fontsLoaded, fontError] = useFonts({
        'Koulen': require('../assets/fonts/Koulen-Regular.ttf'),
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return(
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373737',
    },

    Text: {
        textAlign: 'center',
        top: 500,
        color: 'white',
        fontSize: 200,
    }
})