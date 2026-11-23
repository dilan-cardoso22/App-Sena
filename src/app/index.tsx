import React from 'react';
import {
View,
Text,
StyleSheet,
SafeAreaView
} from 'react-native';

export default function App() {
return (
<SafeAreaView style={styles.container}>

<Text style={styles.title}>APP SENA</Text>

<View style={styles.card}>
<Text style={styles.product}>
Producto
</Text>

<Text style={styles.price}>
$10.000
</Text>
</View>

</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffffff',
alignItems: 'center',
justifyContent: 'center',
},

title: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 15,
},

card: {
width: 170,
height: 105,
borderWidth: 2,
borderColor: '#333333',
borderRadius: 15,
alignItems: 'center',
justifyContent: 'center',
},

product: {
fontSize: 18,
fontWeight: 'bold',
},

price: {
fontSize: 20,
marginTop: 5,
},
});
