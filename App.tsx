import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default function App() {

    return (
        <View style={styles.container}>
            <View style={styles.hero_header_container}>
                <View style={styles.header_container}>
                    <Text style={styles.header_text_title}>Some Text</Text>
                    <Image style={{width: 35, height: 25}} source={require('./images/icon-hamburger.png')}/>
                </View>
                <Image
                    style={styles.backgroundImage_hero_header}
                    source={require('./images/bg-pattern-intro-mobile.png')}
                />
                <Text style={styles.descriptionHeaderTitle}>A modern application</Text>
                <View style={styles["btn_Start_&_Learn"]}>
                    <TouchableOpacity style={styles.btn}
                    >
                        <Text style={styles.textBtn}>Press Here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                    >
                        <Text style={styles.textBtn}>Press Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>sdfsdsdf</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    "btn_Start_&_Learn": {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    btn: {
        margin: 12,
        alignItems: "center",
        borderColor: '#DDDDDD',
        borderWidth: 1,
        color: '#fff',
        // backgroundColor: "#DDDDDD",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 30
    },
    textBtn: {
        color: '#fff', fontWeight: '600', fontSize: 18
    },
    descriptionHeaderTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 30,
        textAlign: 'center'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 25,
        paddingLeft: 25,
        alignItems: 'center',
        marginTop: 45,
        zIndex: 10
    },
    header_text_title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        zIndex: 10
    },
    hero_header_container: {
        backgroundColor: '#FF5A60',
        height: '90%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 80
    },
    backgroundImage_hero_header: {
        width: 600,
        height: 650,
        position: 'absolute',
        top: -90,
        left: -100
    }
});
