import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Chats } from './Chats'
import { StatusStories } from './AllArrays'
import { StatusViewedStories } from './AllArrays'
import { Calls } from './AllArrays'
function CameraComponent() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const openCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <Button title="Open camera" onPress={openCamera} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}

// function HomeScreen() {
//     return (
//       <CameraComponent />
//     );
// }

function ChatScreen() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal: '2%' }}>
            <ScrollView>
                {Chats.map((profile, index) => (
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <View key={index} style={{ flexDirection: 'row', marginVertical: '2%' }}>
                            <Image
                                style={styles.pic2} source={{ uri: profile.src }}>
                            </Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: '5%', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 265 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{
                                        profile.user}
                                    </Text>
                                    <Text style={{ fontSize: 12, color: 'black', }}>{
                                        profile.time}
                                    </Text>
                                </View>
                                <Text style={{ color: '#8a8a8a' }}>{
                                    profile.msg.length > 11 ? profile.msg.slice(0, 33) + '...' : profile.msg.toUpperCase()}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
function StatusScreen() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal: '2%' }}>
            <ScrollView>
                {StatusStories.map((profile, index) => (
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <View key={index} style={{ flexDirection: 'row', marginVertical: '2%' }}>
                            <Image
                                style={styles.pic2} source={{ uri: profile.src }}>
                            </Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: '5%', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 265 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{
                                        profile.user}
                                    </Text>
                                </View>
                                <Text style={{ color: '#8a8a8a' }}>{
                                    profile.msg}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: '2%', marginLeft: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#8a8a8a' }}>Recent updates</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView>
                {StatusViewedStories.map((profile, index) => (
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <View key={index} style={{ flexDirection: 'row', marginVertical: '2%' }}>
                            <Image
                                style={styles.pic} source={{ uri: profile.src }}>
                            </Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: '5%', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 265 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{
                                        profile.user}
                                    </Text>
                                    {/* <Text style={{ fontSize: 12, color: 'black', }}>{
                                        profile.time}
                                    </Text> */}
                                </View>
                                <Text style={{ color: '#8a8a8a' }}>{
                                    profile.day}, <Text style={{ color: '#8a8a8a' }}>{
                                        profile.time}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                <View style={{ marginTop: '50%', marginLeft: '90%', paddingBottom: '5%' }}>
                    <TouchableOpacity style={styles.pencilbtn}>
                        <MaterialCommunityIcons name="pencil" size={20} color="black" style={{ textAlign: 'center', marginVertical: '30%' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.camerabtn}>
                        <FontAwesome name="camera" size={20} color="white" style={{ textAlign: 'center', marginVertical: '30%' }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
function CallScreen() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal: '2%' }}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                {Calls.map((profile, index) => (
                    <TouchableOpacity style={{ marginTop: 10, }}>
                        <View key={index} style={{ flexDirection: 'row', marginVertical: '2%' }}>
                            <Image
                                style={styles.pic2} source={{ uri: profile.src }}>
                            </Image>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginHorizontal: '5%', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 265 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{
                                        profile.user}
                                    </Text>
                                    <FontAwesome name="phone" size={20} color="#00a884" />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name="call-received" size={16} color="red" style={{ marginRight: '2%' }} />
                                    <Text style={{ color: '#8a8a8a' }}>{profile.day}, <Text style={{ color: '#8a8a8a' }}>{profile.time}</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

                <View style={{ marginTop: '56%', marginLeft: '90%', paddingBottom: '5%' }}>
                    <TouchableOpacity style={styles.camerabtn}>
                        <MaterialCommunityIcons name="phone-plus" size={20} color="white" style={{ textAlign: 'center', marginVertical: '30%' }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: '#008069' },
            tabBarIndicatorStyle: { backgroundColor: 'white' }
        }} >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => (
                    <TouchableOpacity>
                        <FontAwesome name="camera" size={20} color="#cadcda" />
                    </TouchableOpacity>
                ), tabBarShowLabel: false, 
            }} name="Camera" component={CameraComponent} />
            <Tab.Screen options={{ tabBarLabel: 'CHATS' }} name="CHATS" component={ChatScreen} />
            <Tab.Screen options={{ tabBarLabel: 'STATUS' }} name="STATUS" component={StatusScreen} />
            <Tab.Screen options={{ tabBarLabel: 'CALLS' }} name="CALLS" component={CallScreen} />
        </Tab.Navigator>

    );
}


const styles = StyleSheet.create({
    pic: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 2,
        borderColor: '#00ff33',
    },
    pic2: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 6,
        // borderWidth: 2,
        // borderColor: '#fd5740',
    },
    camerabtn: {
        backgroundColor: '#00a884',
        borderRadius: '50%',
        width: 55,
        height: 55,
        borderRadius: 50,
        marginLeft: '-70%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    pencilbtn: {
        backgroundColor: '#e9edef',
        borderRadius: '50%',
        width: 45,
        height: 45,
        borderRadius: 50,
        marginLeft: '-50%',
        marginBottom: '30%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    }
})