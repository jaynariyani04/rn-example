import { Dimensions, Platform, StyleSheet } from "react-native";
import { sizes } from "../constants/sizes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.s,
        marginTop: Platform.OS == 'android' && sizes.s
    },
    headerContainerRTL: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.s,
        marginTop: Platform.OS == 'android' && sizes.s
    },
    title: {
        fontSize: sizes.FONT_SIZE_EXTRA_LARGE,
        alignSelf: 'center'
    },
    navIcon: {
        height: sizes.ICON_NAV,
        width: sizes.ICON_NAV
    },
    listItemContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: sizes.s,
        borderRadius: sizes.s,
        paddingBottom: sizes.s,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    listItemLikeBtn: {
        width: '15%',
        alignSelf: 'flex-end'
    },
    listItemLikeBtnRTL: {
        width: '15%',
        alignSelf: 'flex-start'
    },
    listItemOfferBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: sizes.s
    },
    offerBarLeft: {
        backgroundColor: '#fcdcdc',
        padding: sizes.xs,
        maxWidth: '70%',
        borderColor: '#f26363',
        borderWidth: 1,
        borderLeftWidth: 0
    },
    offerFont: {
        fontSize: sizes.FONT_SIZE_EXTRA_SMALL,
        color: '#ff0808'
    },
    offerBarRight: {
        backgroundColor: '#fcdcdc',
        padding: sizes.xs,
        maxWidth: '30%',
        borderColor: '#f26363',
        borderWidth: 1,
        borderRightWidth: 0
    },
    listItemProductTitle: {
        padding: sizes.xs
    },
    listItemProductTitleRTL: {
        padding: sizes.xs,
        textAlign: 'right'
    },
    priceBlock: {
        paddingHorizontal: sizes.xs,
        flexDirection: 'row',
    },
    priceBlockRTL: {
        paddingHorizontal: sizes.xs,
        flexDirection: 'row-reverse',
    },
    offerPrice: {
        color: '#E60028',
        fontWeight: '600',
        marginRight: sizes.s,
        fontSize: sizes.FONT_SIZE_MEDIUM
    },
    offerCancelledPrice: {
        textDecorationLine: 'line-through',
        fontSize: sizes.FONT_SIZE_SMALL
    },
    offerCancelledPriceRTL: {
        textDecorationLine: 'line-through',
        fontSize: sizes.FONT_SIZE_SMALL,
        marginRight: sizes.s
    },
    addToCardBtnContainer: {
        borderWidth: 1,
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: sizes.s,
        borderRadius: sizes.xl,
        overflow: "hidden",
    },
    productDetailsTopBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.xs
    },
    productDetailsTitle: {
        fontSize: sizes.FONT_SIZE_LARGE,
    },
    swiperImage: {
        height: 500,
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
    },
    productDetailsPriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.m,
        alignItems: 'center'
    },
    productDetailsPrice: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productDetailsFavBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartContainer: {
        position: 'relative',
        width: 24,
        height: 24,
        marginHorizontal: 10,
      },
    badgeContainer: {
        position: 'absolute',
        top: -5,
        right: -18,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 25,
        minHeight: 25,
        paddingHorizontal: 4,
        paddingVertical: 2,
      },
      badgeText: {
        color: 'white',
        fontSize: sizes.FONT_SIZE_EXTRA_SMALL,
        fontWeight: 'bold',
      },
      topBarContainer: {
        backgroundColor: 'black',
        paddingVertical: sizes.s,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: sizes.xs
      },
      marqueeText: {
        color: 'white'
      },

      // Animated Add to Cart
      button: {
        overflow: 'hidden',
        padding: sizes.s,
      },
      buttonText: {
        fontWeight: 'bold',
      },
      ripple: {
        position: 'absolute',
        backgroundColor: 'rgba(252, 220, 220, 0.5)',
        height: '100%',
        top: 0,
        left: 0,
      },
      buttonContainer: {
        overflow: 'hidden',
      },
})

export default styles