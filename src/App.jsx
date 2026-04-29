import Portfolio from './react_portfolio_website_layout'
import './App.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <Portfolio />
    </>
  )
}

export default App
