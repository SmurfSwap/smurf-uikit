import { variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";
const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;
export const light = {
    [PRIMARY]: {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    [SECONDARY]: {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: `2px solid ${lightColors.primary}`,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    [TERTIARY]: {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    [TEXT]: {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    [DANGER]: {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    [SUBTLE]: {
        background: lightColors.textSubtle,
        backgroundActive: `${lightColors.textSubtle}D9`,
        backgroundHover: `${lightColors.textSubtle}B3`,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    [SUCCESS]: {
        background: lightColors.success,
        backgroundActive: `${lightColors.success}D9`,
        backgroundHover: `${lightColors.success}B3`,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
};
export const dark = {
    [PRIMARY]: {
        ...light.primary,
    },
    [SECONDARY]: {
        ...light.secondary,
    },
    [TERTIARY]: {
        ...light.tertiary,
        background: darkColors.tertiary,
        backgroundActive: darkColors.tertiary,
        backgroundHover: darkColors.tertiary,
        color: darkColors.primary,
    },
    [TEXT]: {
        ...light.text,
        backgroundHover: darkColors.tertiary,
    },
    [DANGER]: {
        ...light.danger,
    },
    [SUBTLE]: {
        ...light.subtle,
    },
    [SUCCESS]: {
        ...light.success,
    },
};
