import { getItem, setItem } from './storage';

const KEYS = Object.freeze({
  LANGUAGE: 'app-language',
  FIRST_ACCESS: 'first-access',
});

export const getLanguage = () => getItem(KEYS.LANGUAGE);

export const getFirstAccess = () => getItem(KEYS.FIRST_ACCESS);

export const setFirstAccess = (value: any) => setItem(KEYS.FIRST_ACCESS, value);