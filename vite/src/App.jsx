import { useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
// import './App.css'
import Header from './components/Header'
import { routes } from './routes'

function App() {

const router = useRoutes(routes)
  return (
    <>
    <Header></Header>
    {router}
    <Footer></Footer>
    </>
  )
}

export default App