import { getItem, setItem } from "./storage";

const KEYS = Object.freeze({
  LANGUAGE: "app-language",
  FIRST_ACCESS: "first-access",
});

export const getLanguage = (): Promise<string> => getItem(KEYS.LANGUAGE);

export const getFirstAccess = (): Promise<unknown> =>
  getItem(KEYS.FIRST_ACCESS);

export const setFirstAccess = (value: unknown): Promise<void> =>
  setItem(KEYS.FIRST_ACCESS, value);
