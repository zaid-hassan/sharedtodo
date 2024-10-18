import { useEffect, useState } from 'react'
import { Navbar } from './components/components'
import { Outlet, json } from 'react-router-dom'
import { ThemeProvider } from './contexts/contexts'

function App() {
    const getLocalTheme = () => {
        const localTheme = localStorage.getItem('theme');
        if(localTheme) {
            return localTheme;
        } else {
            return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
    }
    const [theme, setTheme] = useState(getLocalTheme)
    const darkMode = () => {
        setTheme('dark')
    }
    const lightMode = () => {
        setTheme('light')
    }
    const onThemeToggle = (e) => {
        const checked = e.currentTarget.checked;
        if(checked) {
            darkMode()
        } else {
            lightMode()
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(theme);
    }, [theme])
    return (
        <div className="min-h-screen dark:bg-slate-900">
            <ThemeProvider value={{theme, darkMode, lightMode, onThemeToggle}}>
                <Navbar />
            </ThemeProvider>
            <div className="p-4 sm:ml-64">
                <Outlet />
            </div>
        </div>
    )
}

export default App