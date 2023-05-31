import { useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
// import './App.css'
import Header from './components/Header'
import { routes } from './routes'

function App() {

const router = useRoutes(routes)
// function borderRadius() {
//   window.location.pathname.includes(Kartlar/id)?
// }
  return (
    <>
    <div className="all-main">
       <Header></Header>
    {router}
    <Footer></Footer>
    </div>
   
    </>
  )
}

export default App