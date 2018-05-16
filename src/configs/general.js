/**
 * Arquivo de configurações da aplicação
 */
import { Platform } from 'react-native';

// Nome da aplicação
const APP_NAME = '';

// URL aplicação web
const BASE_URL = __DEV__ ? 'homolog.example.com' : 'example.com';

// Chave de login no storage
const LOGIN_KEY = '@Example:username';

// Chave de token do device no storage
const DEVICE_TOKEN = '@Example:deviceToken';

const platform = Platform;

export { APP_NAME, BASE_URL, LOGIN_KEY, DEVICE_TOKEN, platform };
