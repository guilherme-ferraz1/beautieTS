import React, { useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { setItem } from "../services/storage";
import { getLanguage } from "../services/properties";

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation("hello");
  const onChange = async (selectedLanguage: string) => {
    await Promise.all([
      i18n.changeLanguage(selectedLanguage),
      setItem("app-language", selectedLanguage),
    ]);
  };

  useEffect(() => {
    (async () => {
      const lang = await getLanguage();
      if (lang) onChange(lang);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{t("hey")}</Text>
      <Button title="spanish" onPress={() => onChange("es")} />
      <Button title="portuguese" onPress={() => onChange("pt")} />
      <Button title="english" onPress={() => onChange("en")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
