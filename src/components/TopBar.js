import React from 'react';
import { Text, TouchableOpacity, View, NativeModules } from 'react-native';
import styles from '../styles/globalStyles';
import { Marquee } from '@animatereactnative/marquee';
import { sizes } from '../constants/sizes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from '../utils/localize';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart'; 


const TopBar = ({ isRTL }) => {
    const {t} = useTranslation();

    function onLanguageChange() {
        if (isRTL == 'true') {
            i18next.changeLanguage('en')
            AsyncStorage.setItem('isRTL', JSON.stringify(false))
        } else {
            i18next.changeLanguage('ar')
            AsyncStorage.setItem('isRTL', JSON.stringify(true))
        }
        __DEV__ ? NativeModules.DevSettings.reload() : RNRestart.restart();
    }

    return (
        <View style={styles.topBarContainer}>
            <Marquee
                spacing={sizes.xxxl}
                speed={0.25}
                style={{ width: '85%' }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.marqueeText, { marginRight: sizes.xxxl }]}>Free Delivery above SAR 200</Text>
                    <Text style={[styles.marqueeText, { marginRight: sizes.xxxl }]}>Delivery within 3 days</Text>
                    <Text style={styles.marqueeText}>Buy now Pay later</Text>
                </View>
            </Marquee>
            <View style={{
                borderWidth: 1,
                borderColor: 'white'
            }} />
            <TouchableOpacity
                onPress={onLanguageChange}
                style={{ alignItems: 'center', justifyContent: 'center', width: '10%' }}
            >
                <Text style={{ fontSize: sizes.FONT_SIZE_MEDIUM, color: 'white' }}>{t('langCode')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopBar;