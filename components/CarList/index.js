import React from 'react';

import { Dimensions, FlatList, View } from 'react-native';

import styles from './styles';

import cars from './cars';

import CarItem from '../CarItem';


function CarList() {

    return (

        <View style={styles.container}>

            <FlatList

                data={cars}

                renderItem={ ({item, index}) => 

                    <CarItem key={index} car={item} />
                
                }

                showsVerticalScrollIndicator={false}

                snapToAlignment={'start'}

                decelerationRate={'fast'}

                snapToInterval={Dimensions.get('window').height}
            
             />
            
        </View>

    )

}

export default CarList
