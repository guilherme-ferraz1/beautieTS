import AsyncStorage from '@react-native-async-storage/async-storage';

const isEmpty = (value: any) => value === null || value === undefined || value === '';

export const setItem = async (key: string, value: any) => {
  try {
    if (isEmpty(value)) await AsyncStorage.removeItem(key);
    else await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(`[Error saving ${key}] : ${error}`);
  }
};

export const getItem = async (key: string) => {
  if (!isEmpty(key)) {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result) return JSON.parse(result);
    } catch (error) {
      throw new Error(`[Error getting ${key}] : ${error}`);
    }
  }
  return key;
};