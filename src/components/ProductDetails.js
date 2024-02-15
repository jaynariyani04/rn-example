import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/globalStyles';
import { images } from '../constants/images';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { sizes } from '../constants/sizes';

const ProductDetails = ({ data, onClose }) => {
    return (
        <View style={styles.container}>
            <View style={styles.productDetailsTopBar}>
                <TouchableOpacity onPress={onClose}>
                    <Image
                        source={images.cross}
                        style={styles.navIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.productDetailsTitle}>{data.title}</Text>
                <Image
                    source={images.cart}
                    style={styles.navIcon}
                />
            </View>
            <ScrollView>
                <SwiperFlatList
                    index={0}
                    data={Object.values(data.images)}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 510 }}>
                                <Image
                                    source={{ uri: item }}
                                    style={styles.swiperImage}
                                />
                            </View>
                        )
                    }}
                />
                <View>
                    <View style={styles.productDetailsPriceRow}>
                        <View style={styles.productDetailsPrice}>
                            <Text style={styles.offerPrice}>{`SAR ${data.price_min}`}</Text>
                            <Text style={styles.offerCancelledPrice}>{`SAR ${data.compare_at_price_min}`}</Text>
                        </View>
                        <View style={styles.productDetailsFavBar}>
                            <Image
                                style={{ marginRight: sizes.s }}
                                source={images.share}
                            />
                            <Image
                                source={images.heart}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetails