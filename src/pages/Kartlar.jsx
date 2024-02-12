import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  setItemInCard } from "../redux/cart/reducer";
// import { Item } from "semantic-ui-react";

function Kartlar() {
  // const с = useSelector(state => state.initialState);
  const cart = useSelector((state) => state.cart).itemsInCard
  const [Add,setAdd] = useState(false)
// console.log(cart,'jj');
  // cart.find((i)=>i.id === item.id)?setAdd(true):setAdd(false)
  const [active, setactive] = useState(
    localStorage.getItem("languages") === "Aze"
      ? "Hamisi"
      : localStorage.getItem("languages") === "Ru"
      ? "Все"
      : "All"
  );
  const [dataK, setDataK] = useState([]);
  const [data, setData] = useState([]);
  const [yazilarFilter, setYazilarFilter] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleClick = (e) => {
  //   e.stopPropagation();
  //   dispatch(setItemInCard(game));
  // };
  // function errors() {
  //   if(id !== data.map((item,i)=>item.id)){
  //     navigate("/*")
  //   }else{
  //     navigate('/Cards/:id')
  //   }
  // }
  // errors()
  useEffect(() => {
    const filterYazilar = async () => {
      try {
        axios
          .get(
            localStorage.getItem("languages") === "Aze"
              ? `http://localhost:3300/yazilar`
              : localStorage.getItem("languages") === "Ru"
              ? ` http://localhost:3301/yazilar`
              : " http://localhost:3302/yazilar"
          )
          .then((e) => {
            setYazilarFilter(e.data);
          });
      } catch (error) {}
    };

    filterYazilar();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          localStorage.getItem("languages") === "Aze"
            ? "http://localhost:3300/dataKart"
            : localStorage.getItem("languages") === "Ru"
            ? " http://localhost:3301/dataKart"
            : " http://localhost:3302/dataKart"
        );
        setData(response.data);
        setDataK(response.data);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <div
        style={
          localStorage.getItem("darkLightMod") === "light"
            ? { background: "linear-gradient(45deg, #76bc21, #8cc745)" }
            : { background: "#132A13" }
        }
        className="container"
      >
        <div className="pading">
          <div className="kartlar-container">
            <div className="kartlar-container-name">
              <h1>{yazilarFilter.Kartlarımız}</h1>
            </div>
            <div className="kartlar-container-categories">
              <ul>
                <li
                  className={`${
                    active ===
                    (localStorage.getItem("languages") === "Aze"
                      ? "Hamisi"
                      : localStorage.getItem("languages") === "Ru"
                      ? "Все"
                      : "All")
                      ? localStorage.getItem("darkLightMod") === "light"
                        ? "active"
                        : "Darkactive"
                      : ""
                  }`}
                  onClick={() => {
                    setactive(
                      localStorage.getItem("languages") === "Aze"
                        ? "Hamisi"
                        : localStorage.getItem("languages") === "Ru"
                        ? "Все"
                        : "All"
                    ),
                      setData(dataK);
                  }}
                >
                  {localStorage.getItem("languages") === "Aze"
                    ? "Hamisi"
                    : localStorage.getItem("languages") === "Ru"
                    ? "Все"
                    : "All"}
                </li>
                <li
                  className={`${
                    active ===
                    (localStorage.getItem("languages") === "Aze"
                      ? "Taksit-kartlar"
                      : localStorage.getItem("languages") === "Ru"
                      ? "Карты рассрочки"
                      : "Payment installment cards")
                      ? localStorage.getItem("darkLightMod") === "light"
                        ? "active"
                        : "Darkactive"
                      : ""
                  }`}
                  onClick={() => {
                    setactive(
                      localStorage.getItem("languages") === "Aze"
                        ? "Taksit-kartlar"
                        : localStorage.getItem("languages") === "Ru"
                        ? "Карты рассрочки"
                        : "Payment installment cards"
                    ),
                      setData(dataK.filter((x) => x.type === "Taksit kartlar"));
                  }}
                >
                  {localStorage.getItem("languages") === "Aze"
                    ? "Taksit-kartlar"
                    : localStorage.getItem("languages") === "Ru"
                    ? "Карты рассрочки"
                    : "Payment installment cards"}
                </li>
                <li
                  className={`${
                    active ===
                    (localStorage.getItem("languages") === "Aze"
                      ? "Debet-kartlar"
                      : localStorage.getItem("languages") === "Ru"
                      ? "Дебетовые карты"
                      : "Debit cards")
                      ? localStorage.getItem("darkLightMod") === "light"
                        ? "active"
                        : "Darkactive"
                      : ""
                  }`}
                  onClick={() => {
                    setactive(
                      localStorage.getItem("languages") === "Aze"
                        ? "Debet-kartlar"
                        : localStorage.getItem("languages") === "Ru"
                        ? "Дебетовые карты"
                        : "Debit cards"
                    ),
                      setData(dataK.filter((x) => x.type === "Debet kartlar"));
                  }}
                >
                  {localStorage.getItem("languages") === "Aze"
                    ? "Debet-kartlar"
                    : localStorage.getItem("languages") === "Ru"
                    ? "Дебетовые карты"
                    : "Debit cards"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main id="kartlar-main">
        <div className="main-kartlar-container">
          {data.map((item, ind) => (
            <div key={ind} className="kart-item">
              
              <Link to={`${item.id}`} className="kart-item-img">
                <img src={item.img[0]} alt="" />
              </Link>
              <div className="kart-item-word">
                <Link
                  to={`${item.id}`}
                  className={
                    localStorage.getItem("darkLightMod") === "light"
                      ? "item-logo"
                      : "Dark-item-logo "
                  }
                >
                  <h3>{item.name}</h3>
                </Link>
                <Link
                  to={`${item.id}`}
                  className={
                    localStorage.getItem("darkLightMod") === "light"
                      ? "item-categories"
                      : "Dark-item-categories"
                  }
                >
                  <ul>
                    <li>
                      <span>{item.kreditLimit[0]}</span>
                      <b>{item.kreditLimit[1]}</b>
                    </li>
                    <li>
                      <span>{item.faiz[0]}</span>
                      <b>{item.faiz[1]}</b>
                    </li>
                    <li>
                      <span>{item.qiymet[0]}</span>
                      <b>{item.qiymet[1]}</b>
                    </li>
                    <li>
                      <span>{item.muddet[0]}</span>
                      <b>{item.muddet[1]}</b>
                    </li>
                  </ul>
                </Link>
                <div className="item-navigate">
                  {
                     item.Səbətəəlavəet && (
                      <>
                    
                         {
                          
                          localStorage.getItem("user")?(
                           <>
                           
                           <button   style={cart.find((i)=>i.id === item.id) ?{cursor: "no-drop",background:"red"}:{cursor:'pointer'}}
                            onClick={()=>localStorage.getItem("user")?dispatch(setItemInCard(item)):""}
                              className={
                                localStorage.getItem("darkLightMod") === "light"
                                  ? "navigate-link"
                                  : "dark-navigate-link"
                              }
                            >
                              {cart.find((i)=>i.id === item.id) ?item.Səbətəəlavəolundu:item.Səbətəəlavəet}
                            </button>
                            {/* <button  className={
                                localStorage.getItem("darkLightMod") === "light"
                                  ? "navigate-link"
                                  : "dark-navigate-link"
                              }  style={cart.find((i)=>i.id === item.id) ?{cursor:'pointer'}:{cursor: "no-drop",background:"red"}} onClick={()=> dispatch(deletItemFromCart(item.id))}>
                            Sebetten cixar
                            </button> */}
                           
                           </>
                          ):(
                            <Link
                            
                              className={
                                localStorage.getItem("darkLightMod") === "light"
                                  ? "navigate-link"
                                  : "dark-navigate-link"
                              }
                              
                              
                              to={
                                localStorage.getItem("user")
                                  ? ''
                                  : "/Login-Registr"
                              }
                              
                            >
                              {cart.find((i)=>i.id === item.id) ?item.Səbətəəlavəolundu:item.Səbətəəlavəet}
                            </Link>
                          )
                         }
                         
                      </>
                     )
                  }
                 
                  <Link to={`${item.id}`}>
                    <span
                      style={
                        localStorage.getItem("darkLightMod") === "light"
                          ? { color: "black" }
                          : { color: "white" }
                      }
                      className={localStorage.getItem("darkLightMod") === "light"?"ƏtraflıLight":"ƏtraflıDark"}
                    >
                      {item.Ətraflıməlumat}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Kartlar;
