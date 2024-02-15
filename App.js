import { I18nManager } from 'react-native';
import Home from './src/screens/Home/Home';
import { CartProvider } from './src/context/CartContext';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from './src/utils/localize';

export default function App() {
  useEffect(() => {
    const loadRTLPreference = async () => {
      try {
        const isRTL = await AsyncStorage.getItem('isRTL');
        if (isRTL !== null && isRTL == 'true') {
          i18next.changeLanguage('ar')
        } else {
          i18next.changeLanguage('en')
        }
      } catch (error) {
        console.error('Error loading RTL preference:', error);
      }
    };

    loadRTLPreference();
  }, []);
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}
