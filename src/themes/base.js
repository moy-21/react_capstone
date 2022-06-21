import primaryThemeLight from './primaryThemeLight';
import primaryThemeDark from './primaryThemeDark';
const themes={
    primaryThemeDark,
    primaryThemeLight
}

export default function getTheme(theme){
    return themes[theme]
}