import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Header from '../../components/Header';
import axios from 'axios';
import styles from '../../styles/globalStyles';
import ListItem from '../../components/ListItem';
import RBSheet from "react-native-raw-bottom-sheet";
import ProductDetails from '../../components/ProductDetails';
import TopBar from '../../components/TopBar';
import { useSharedValue } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
    let list;
    const [isRTL, setIsRTL] = useState(false)
    useEffect(() => {
        const getRTL = async () => {
            try {
                const RTL = await AsyncStorage.getItem('isRTL');
                setIsRTL(RTL)
            } catch (err) {
                console.log(err)
            }

        }
        getRTL();
    }, [])

    const arabicData = [
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: ' تيشيرت نسائي كبير',
            price_min: 100,
            compare_at_price_min: 200
        }
    ]

    const data = [
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        },
        {
            images: {
                "1": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "2": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
                "3": 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2020/m5-cs-precom/bmw-m3-cs-gallery-02.jpg',
            },
            title: 'women tshirt making it long text',
            price_min: 100,
            compare_at_price_min: 200
        }
    ]
    const [listData, setListData] = useState([]);
    const [selectedItem, setSelectedItem] = useState()
    const [loading, setLoading] = useState(false);
    const refRBSheet = useRef();

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            setLoading(true)
            let url;
            const isRTL = await AsyncStorage.getItem('isRTL');
            if (isRTL !== null && isRTL == 'true') {
                url = 'https://shopifyapptst1.bma.ae/react-native-exercise/?lang=ar'
            } else {
                url = 'https://shopifyapptst1.bma.ae/react-native-exercise/?lang=en'
            }
            axios
                .get(url)
                .then(res => {
                    if (res.status == 200) {
                        list = res.data.data.products
                        if (listData.length == 0) {
                            setListData(list.slice(0, 8))
                        } else {
                            setListData(prevData => [...prevData, ...list.slice(0, 4)]);
                        }
                    }
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    const handleEndReached = () => {
        if (listData.length < 16) {
            getData()
        }
    }
    const onPressListItem = (data) => {
        setSelectedItem(data)
        refRBSheet.current.open()
    }
    const closeBottomSheet = () => {
        refRBSheet.current.close()
    }
    const viewableItems = useSharedValue([]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <Header isRTL={isRTL}/>
            <TopBar isRTL={isRTL} />
            <FlatList
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.1}
                data={listData}
                numColumns={2}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    viewableItems.value = vItems;
                }}
                renderItem={({ item, index }) => <ListItem onPress={onPressListItem} item={item} isRTL={isRTL} viewableItems={viewableItems} />}
                keyExtractor={(item, index) => item.id + index}
            />
            {loading && <ActivityIndicator size={'large'} color='gray' animating={true} />}
            <RBSheet
                animationType='slide'
                height={700}
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000",
                    }
                }}
            >
                <ProductDetails data={selectedItem} onClose={closeBottomSheet} />
            </RBSheet>
        </SafeAreaView>
    )
}

export default Home