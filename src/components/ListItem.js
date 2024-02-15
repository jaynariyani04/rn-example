import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/globalStyles';
import { images } from '../constants/images';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
  } from 'react-native-reanimated';

const ListItem = ({ item, onPress, isRTL, viewableItems }) => {
    const { cartItems, addToCart, removeFromCart } = useCart();
    const buttonScale = useSharedValue(1);
    const rippleWidth = useSharedValue(0);
  
    const animatedButtonStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: buttonScale.value }],
      };
    });
  
    const animatedRippleStyle = useAnimatedStyle(() => {
      return {
        width: rippleWidth.value,
      };
    });

    const handlePress = () => {
        buttonScale.value = withSpring(0.9, {}, () => {
          buttonScale.value = withSpring(1);
        });
    
        rippleWidth.value = withTiming(300, {
          duration: 1000,
          easing: Easing.out(Easing.ease),
        });
    
        setTimeout(() => {
          buttonScale.value = withSpring(1);
          rippleWidth.value = withTiming(0, {
            duration: 0,
          });
        }, 500);
      };

    const {t} = useTranslation();
    let offerMessageParts
    let discountDescription
    let discountCode
    if (isRTL == 'true') {
        offerMessageParts = item['offer-message'].split('، ');
        discountDescription = offerMessageParts[0].trim();
        discountCode = offerMessageParts[1].split('الكود:')[1].trim();
    } else {
        offerMessageParts = item['offer-message'].split(', ');
        discountDescription = offerMessageParts[0];
        discountCode = offerMessageParts[1].split(':')[1];
    }

    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
          viewableItems.value
            .filter(element => element.isViewable)
            .find(viewableItem => viewableItem.item.id === item.id),
        );
    
        return {
          opacity: withTiming(isVisible ? 1 : 0),
          transform: [
            {
              scale: withTiming(isVisible ? 1 : 0.8),
            },
          ],
        };
      }, []);

    return (
        <Animated.View style={[styles.container, rStyle]}>
        <TouchableOpacity onPress={() => onPress(item)} style={styles.listItemContainer}>
            <ImageBackground
                source={{ uri: item.images['1'] }}
                style={{
                    height: 250,
                    width: '100%',
                    position: 'relative',
                }}
            >
                <TouchableOpacity 
                style={isRTL == 'true' ? styles.listItemLikeBtnRTL : styles.listItemLikeBtn}
                >
                    <Image
                        source={images.heart}
                    />
                </TouchableOpacity>
                <View style={styles.listItemOfferBar}>
                    <View style={styles.offerBarLeft}>
                        <Text style={styles.offerFont}>{discountDescription}</Text>
                    </View>
                    <View style={styles.offerBarRight}>
                        <Text style={styles.offerFont}>{discountCode}</Text>
                    </View>
                </View>
            </ImageBackground>
            <Text style={[styles.listItemProductTitle, isRTL == 'true' && styles.listItemProductTitleRTL]}>{item.title}</Text>
            <View style={[styles.priceBlock, isRTL == 'true' && styles.priceBlockRTL]}>
                <Text style={styles.offerPrice}>{isRTL == 'true' ? `${item.price_min} ر.س ` :`SAR ${item.price_min}`}</Text>
                <Text style={[styles.offerCancelledPrice, isRTL == 'true' && styles.offerCancelledPriceRTL]}>{isRTL == 'true' ? `${item.compare_at_price_min} ر.س ` :`SAR ${item.compare_at_price_min}`}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                        addToCart(item); 
                        handlePress();
                    }
                }
                style={styles.addToCardBtnContainer}
            >
                    <Animated.View style={[styles.button, animatedButtonStyle]}>
                        <Text style={styles.buttonText}>{t('addToCart')}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.ripple, animatedRippleStyle]} />
            </TouchableOpacity>
        </TouchableOpacity>
        </Animated.View>
    )
}

export default ListItem;