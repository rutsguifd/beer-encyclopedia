import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, FC, useContext, useMemo, useState } from "react";
import { theme } from "./theme";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

interface ColorModeContextProviderProps {
  children: React.ReactNode;
}

export const ColorModeContextProvider: FC<ColorModeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const Theme = useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
          },
        },
        theme
      ),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
