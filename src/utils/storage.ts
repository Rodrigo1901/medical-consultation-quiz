import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveJSON<T>(key: string, value: T): Promise<void> {
  try { await AsyncStorage.setItem(key, JSON.stringify(value)); }
  catch (e) { console.error('AsyncStorage save error', e); }
}

export async function loadJSON<T>(key: string): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (e) {
    console.error('AsyncStorage load error', e);
    return null;
  }
}

export async function loadAllKeys(prefix = 'form:') {
  const keys = await AsyncStorage.getAllKeys();
  return keys.filter(k => k.startsWith(prefix));
}