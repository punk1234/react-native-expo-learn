import React from 'react';

import { ImageBackground, Text, View } from "react-native";

import bgImage from './../../assets/images/ModelS.jpeg';

import styles from './styles';


function CarItem() {

    return (

        <View style={styles.carContainer}>

            <ImageBackground source={bgImage} style={styles.image} />

            <View style={styles.carInfo}>

                <Text style={styles.title}>Model S</Text>

                <Text style={styles.subtitle}>Starting at $69,420</Text>

            </View>

        </View>

    )
    
}

export default CarItem
