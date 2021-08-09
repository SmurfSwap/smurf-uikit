import getThemeValue from "./getThemeValue";
const getColor = (color, theme) => {
    return getThemeValue(`colors.${color}`, color)(theme);
};
export default getColor;
