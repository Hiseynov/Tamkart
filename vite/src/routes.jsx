import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Kampaniyalar from "./pages/Kampaniyalar";
import Kartlar from "./pages/Kartlar";
import Partnyorlar from "./pages/Partnyorlar";
import Əlagə from "./pages/Əlagə";
import CardsId from './pages/CardsId'


export const routes = [
    {
        path: '/',
        element: <Home ></Home>
    },
    {
        path: 'Kartlar',
        element: <Kartlar></Kartlar>
    },
    {
        path: 'Kampaniyalar',
        element: <Kampaniyalar></Kampaniyalar>
    },
    {
        path: 'Partnyorlar',
        element: <Partnyorlar></Partnyorlar>
    },
    {
        path: 'Əlaqə',
        element: <Əlagə></Əlagə>
    },
    {
        path:"Faq",
        element:<Faq></Faq>
    },
    {
         path: "Kartlar/:id",
         element:<CardsId></CardsId>
    } 
]