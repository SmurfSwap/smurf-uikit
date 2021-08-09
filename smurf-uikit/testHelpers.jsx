import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { light } from "./theme";
/* eslint-disable import/prefer-default-export */
export const renderWithTheme = (component, theme = light) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
