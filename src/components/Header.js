import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../constants/images';
import styles from '../styles/globalStyles';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

const Header = ({ isRTL }) => {
    const { t } = useTranslation()
    const { cartItems, clearCart } = useCart()
    return (
        <View style={isRTL == 'true' ? styles.headerContainerRTL : styles.headerContainer}>
            <Image
                style={[styles.navIcon,  isRTL == 'true' && {transform: [{rotateY: '180deg'}]}]}
                source={images.backArrow}
            />
            <TouchableOpacity style={{justifyContent: 'center'}} onPress={clearCart}>
            <Text style={styles.title}>{t('home')}</Text>
            </TouchableOpacity>
            <View style={styles.cartContainer}>
                <Image
                    style={styles.navIcon}
                    source={images.cart}
                />
                {cartItems.length > 0 &&
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{cartItems.length}</Text>
                    </View>
                }
            </View>

        </View>
    )
}

export default Header