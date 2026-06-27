import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY_PREFIX = "form:";

export const STORAGE_KEYS = {
  DADOS_USUARIO: `${STORAGE_KEY_PREFIX}dadosUsuario`,
  PERFIL_USUARIO: `${STORAGE_KEY_PREFIX}perfilUsuario`,
  ATIVIDADE: `${STORAGE_KEY_PREFIX}activity`,
  RESPOSTAS_TERMOMETRO: `${STORAGE_KEY_PREFIX}respostasTermometro`,
};

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

export async function loadAllKeys(prefix = STORAGE_KEY_PREFIX) {
  const keys = await AsyncStorage.getAllKeys();
  return keys.filter((k) => k.startsWith(prefix));
}

export async function removeJSON(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("AsyncStorage remove error", e);
  }
}

export async function removeAllWithPrefix(prefix = STORAGE_KEY_PREFIX): Promise<void> {
  try {
    const keys = await loadAllKeys(prefix);
    if (keys.length > 0) {
      await AsyncStorage.multiRemove(keys);
    }
  } catch (e) {
    console.error('AsyncStorage removeAllWithPrefix error', e);
  }
}