import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Kampaniyalar from "./pages/Kampaniyalar";
import Kartlar from "./pages/Kartlar";
import Partnyorlar from "./pages/Partnyorlar";
import Əlagə from "./pages/Əlagə";
import CardsId from "./pages/CardsId";
import LoginRegisrt from "./pages/LoginRegisrt";
import TaksitImkani from "./pages/TaksitImkani";

export const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "Kartlar",
    element: <Kartlar></Kartlar>,
  },
  {
    path: "Kampaniyalar",
    element: <Kampaniyalar></Kampaniyalar>,
  },
  {
    path: "Partnyorlar",
    element: <Partnyorlar></Partnyorlar>,
  },
  {
    path: "Əlaqə",
    element: <Əlagə></Əlagə>,
  },
  {
    path: "Faq",
    element: <Faq></Faq>,
  },
  {
    path: "Kartlar/:id",
    element: <CardsId></CardsId>,
  },
  {
    path: "Login-Registr",
    element: <LoginRegisrt></LoginRegisrt>,
  },
  {
    path: "Карты",
    element: <Kartlar></Kartlar>,
  },
  {
    path: "Акции",
    element: <Kampaniyalar></Kampaniyalar>,
  },
  {
    path: "Партнеры",
    element: <Partnyorlar></Partnyorlar>,
  },
  {
    path: "Контакты",
    element: <Əlagə></Əlagə>,
  },
  {
    path: "Карты/:id",
    element: <CardsId></CardsId>,
  },
  { 
    path: "taksit",
    element: <TaksitImkani></TaksitImkani> 
    },
    {
        path: "Cards",
        element: <Kartlar></Kartlar>,
      },
      {
        path: "Campaigns",
        element: <Kampaniyalar></Kampaniyalar>,
      },
      {
        path: "Partners",
        element: <Partnyorlar></Partnyorlar>,
      },
      {
        path: "Contact",
        element: <Əlagə></Əlagə>,
      },
      {
        path: "Cards/:id",
        element: <CardsId></CardsId>,
      }
  //    {
  //     path:"register",
  //     element:<Regist></Regist>
  //    }
];
