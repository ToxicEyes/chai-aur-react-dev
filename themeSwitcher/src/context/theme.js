import { createContext, useContext } from "react";

//in createContext, we can pass default values as shown below
export const ThemeContext = createContext({
 themeMode: "light",
 lightTheme: () => {},
 darkTheme: () => {}
})

// instead of making different file , we can use code below
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
 return useContext(ThemeContext);
}
