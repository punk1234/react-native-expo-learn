import React from 'react';

import { Image, View } from "react-native"

import styles from './styles';

import imgLogo from './../../assets/images/logo.png';

import imgMenu from './../../assets/images/menu.png';


function Header() {

    return (

        <View style={styles.container}>

            <Image style={styles.logo} source={imgLogo} />

            <Image style={styles.menu} source={imgMenu} />

        </View>
        
    )

}

export default Header
