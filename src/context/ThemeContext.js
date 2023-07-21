import { createContext, useContext, useState } from "react"

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {


    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme(prev => prev == "dark" ? "light" : "dark")
    }

    const values = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook u başka providerda ya da bu providerın dışında kullanıldığında çalışmayacaktır, uyarı vermesi için aşağıdakini yazdık

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme hook must be call inside ThemeContextProvider")
    }
    return context
}
