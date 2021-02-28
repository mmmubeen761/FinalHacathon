// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Image } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// import { Dimensions } from 'react-native';




// const ENTRIES1 = [
//     require('../images/onn.png'),
//     require('../images/onboarding2.png'),
//     require('../images/onboarding3.png'),
// ];
// const { width: screenWidth } = Dimensions.get('window');

// function GetStartedScreen1(props) {

//     const [isSelected, setSelection] = useState(false);


//     const [entries, setEntries] = useState([]);
//     const carouselRef = useRef(null);

//     const goForward = () => {
//         carouselRef.current.snapToNext();
//     };

//     useEffect(() => {
//         setEntries(ENTRIES1);
//     }, []);

//     const renderItem = ({ item, index }, parallaxProps) => {
//         return (
//             <View style={styles.item}>
//                 <ParallaxImage
//                     showSpinner={true}
//                     source={item}
//                     containerStyle={styles.imageContainer}
//                     style={styles.image}
//                     parallaxFactor={0.8}
//                     {...parallaxProps}
//                 />
//             </View>
//         );
//     };


//     return (
//         <>


//             <View style={styles.container}>
//                 <Carousel
//                     ref={carouselRef}
//                     sliderWidth={screenWidth}
//                     sliderHeight={screenWidth}
//                     itemWidth={screenWidth - 0}
//                     data={entries}
//                     renderItem={renderItem}
//                     hasParallaxImages={true}
//                 />
//             </View>
//             <View style={styles.container2}>
//                 <View style={styles.setting}>
//                     <View style={styles.settingtext}>
//                         <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', paddingTop: 10, fontWeight: 'bold', textAlign: 'center', marginLeft: 50, marginRight: 50 }}>Lorem ipsum dolor sit amet
//                     </Text>
//                         <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>Reference site about Lorem Ipsum, giving information on as a ran its origins, as well as a random Lipsum generator.
//                     </Text>
//                     </View>
//                     <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
//                         style={styles.button}
//                     >
//                         <Text style={{ color: 'white' }}>GET STARTED</Text>
//                     </TouchableOpacity>
//                     <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', textAlign: 'center', marginLeft: 50, marginRight: 50 }} >Are you a Business Origination? Contact us at rak@rakbridges.com
//                     </Text>
//                 </View>

//             </View>






//         </>
//     );
// }


// export default GetStartedScreen1;


// const styles = StyleSheet.create({


//     container2: {
//         flex: 1,

//     },
//     setting: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     textInput: {
//         color: 'black',
//         borderColor: 'black',
//         borderWidth: 1,
//         paddingLeft: 10,
//         margin: 15,
//         borderRadius: 5,
//     },
//     button: {
//         alignItems: "center",
//         backgroundColor: "#0273a3",
//         padding: 15,
//         margin: 20,
//         borderRadius: 5
//     }, checkboxContainer: {
//         flexDirection: "row",
//         marginBottom: 20,
//     },
//     checkbox: {
//         alignSelf: "center",
//         marginLeft: 20,
//     },
//     label: {
//         // margin:2,
//         paddingRight: 30
//     }, container: {
//         height: '60%'
//     },
//     item: {
//         width: screenWidth - 0,
//         height: screenWidth - 0,
//         // width: '100%',
//         // height: '70%',
//     },
//     imageContainer: {
//         flex: 1,
//         marginBottom: Platform.select({ ios: 0, android: -100 }), // Prevent a random Android rendering issue
//         backgroundColor: 'white',
//         borderRadius: 0,
//     },
//     image: {
//         ...StyleSheet.absoluteFillObject,
//         resizeMode: 'cover',
//     },
// });