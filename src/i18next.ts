import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./translation/ru.json"
import en from "./translation/en.json"
import jp from "./translation/jp.json"


const resources= {
    en: {translation: en},
    ru: {translation: ru},
    jp: {translation: jp},
}

export const currentLang = localStorage.getItem("lang") || "ru" || "jp"

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: currentLang,
        fallbackLng: 'ru',
        interpolation: {escapeValue: false},
    })

export default i18n