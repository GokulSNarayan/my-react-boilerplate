import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button/button'
import { Layout } from './layout'
import { LandingPage } from './views/landingPage'

// const buttons = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']

type Themes = 'light' | 'dark';
function App() {
  const [theme, setTheme] = useState<Themes>('light')
  const toggleTheme = () => theme==='light' ? setTheme('dark') : setTheme('light');
  return (
    <Layout theme={theme}>
      <Button variant={theme} onClick={toggleTheme}>{theme === 'light' ? 'dark' :'light'}</Button>
      <LandingPage />
    </Layout>)
}

export default App

// {buttons.map(btn => (
//   <Button variant={btn}>{btn}</Button>
// ))}