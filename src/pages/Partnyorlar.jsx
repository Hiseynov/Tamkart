import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PopopPartnyor from '../components/PopopPartnyor';

function Partnyorlar() {
  const [PartnyorData,setPartnyorData]=useState([])
  const [popop,setPopop]=useState(false)
  const [dataitem,setDataItem]=useState('')
  const [value , setvalue] = useState("");
  const [openFilter,setOpenFilter]=useState(false)
  const [optionFilter,setOptionFilter] =useState([]) 
  const [All,setAll] =useState(localStorage.getItem('languages')==="Aze"?"Bütün kateqoriyalar":localStorage.getItem('languages')==="Ru"? 'Все категории':"All categories") 
  const [yazilarFilter,setYazilarFilter]=useState([])
  const [last,setLast] = useState('3')
  const [DahaBagla,setDahaBagla] = useState(true)
  const [kategoriya,setKategoriya]=useState('')
  var filtervalue = PartnyorData.filter((data) => {
    if(openFilter){
      location.reload
       return localStorage.getItem('kategoriya') === All ?
       setOpenFilter(!openFilter) && localStorage.setItem('kategoriya',''):data.logo.includes(localStorage.getItem('kategoriya'))
    }else{
      if(localStorage.getItem('kategoriya').length > 1){
        return localStorage.getItem('kategoriya') === All?
        localStorage.setItem('kategoriya',''):data.logo.includes(localStorage.getItem('kategoriya'))
      }else{
        return data.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ;
      }
      
    }
   
  });
  const plusLast = ()=>{
    setLast(+last + 3)
  }

  const handlchange = (e) => {
    if (e.target.value.trim() !== "") {
      setvalue(e.target.value);
    }
    else{
        setvalue('')
    }
    
  };
  function none(params) {
    setPopop(params)
  }
  useEffect(() => {
    const filterYazilar = async () => {
      try {
        axios.get(localStorage.getItem('languages')==="Aze"? `http://localhost:3300/yazilar`:localStorage.getItem('languages')==="Ru"?` http://localhost:3301/yazilar`:"http://localhost:3302/yazilar").then((e) => {
          setYazilarFilter(e.data);
        });
      } catch (error) {}
    };

    filterYazilar();
  }, []);
  useEffect(()=>{

    const filterAylar = async () => {
      try {
       axios.get(`http://localhost:3300/taksitAylar`).then((e)=>{
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    filterAylar();
  },[])
  useEffect(()=>{

    const filterdata = async () => {
      try {
       axios.get(localStorage.getItem('languages') ==="Aze"?
        `http://localhost:3300/filterCategori`:
        localStorage.getItem('languages')==="Ru"?
        'http://localhost:3301/filterCategori':
        "http://localhost:3302/filterCategori").then((e)=>{
       setOptionFilter(e.data);
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    filterdata();
  },[])
  useEffect(()=>{

    const fetchData = async () => {
      try {
      localStorage.setItem('kategoriya',localStorage.getItem('kategoriya') || All)
      localStorage.setItem('login',true)
       axios.get(localStorage.getItem('languages') ==="Aze"?`http://localhost:3300/Partnyorlar`:localStorage.getItem('languages')==="Ru"?"http://localhost:3301/Partnyorlar":"http://localhost:3302/Partnyorlar").then((e)=>{
       setPartnyorData(e.data);
       })
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  },[])
  // console.log(PartnyorData);
  return (
    <>
    <div style={localStorage.getItem("darkLightMod")==="light"?({background:"linear-gradient(45deg, #76bc21, #8cc745)"}):({background:"#132a13"})} className="container">
    <div className="pading">
          <div className="partnyorlar-containers">
            <h1>{yazilarFilter.Partnyorlar}</h1>
            <div className="PartnorlarForm">
               <form onSubmit={(e)=>{e.preventDefault()}} action="">
              <input
                type="text"
                placeholder="Partnyor axtar"
                onChange={handlchange}
              />
               <i className="fa-solid fa-magnifying-glass"></i>
            </form>
            <div  onClick={()=>setOpenFilter(!openFilter)} className="PartnorlarRighAc">
              <img src="https://tamkart.az/assets/frontend/style/img/filter_b.svg" alt="" />
              <a className='FilterAc'>{localStorage.getItem('languages')==="Aze"? 'Filtrləməni aç':localStorage.getItem('languages')==="Ru"?"Открыть фильтрацию":"Open filtering"}</a>
            </div>
            
            </div>
           
            {
              openFilter ? (

             <>
             <div className="oferwlof" onClick={() => setOpenFilter(false)}></div>
                  <div className='filterContainer'>
                    <div className="filterHeader">
                      <h1>{yazilarFilter.Axtarışnəticələrini}</h1>
                    </div>
                <div className="filerBody">
                  <label >{yazilarFilter.Kateqoriya} : </label>
                     {/* <select name="" id=""> */}
                     <span>
                          {optionFilter.map((item,i)=>(
                          <p className={localStorage.getItem('kategoriya')===item?'filterActive':""}
                           onClick={()=>{setKategoriya(item),
                          localStorage.setItem('kategoriya',item),
                          setLast('3'),setOpenFilter(!openFilter)}}
                           key={i}>{item}</p>))}
                     </span>
                  
                </div>
             

              </div>
             </>
              
              ): ""
            }
          </div>
        </div>
    </div>

        <div id="Partnyorlar">
            <div className="Partnyorlar-container">
            
           {
            filtervalue.slice(0,last).map((item)=>
          
          (
            
          <div key={item.id} onClick={()=>{setPopop(true),setDataItem(item)}  } className='Partnor-item'>
            <div className="Partnor-item-top">
              <img src={item.img} alt="" />
            </div>
            <div className="Partnor-item-button">
              <div className="Partnor-item-button-name">
                  <ul>
                <li style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})} className='partnor-categories-name'>{item.name}</li>
                <li className='partnor-categories-logo'><img src={item.iconLogo} alt="" /></li>
              </ul>
              </div>
              <div style={localStorage.getItem("darkLightMod")==="light"?({color:"black"}):({color:'white'})} className="Partnor-item-button-aylar">
                {item.aylar.map((x,i)=>(<b key={i}>{`${x}, `}</b>))} <b>ay</b>
              </div>
              <div className="Partnor-item-button-logo">
                <span>{item.logo}</span>
              </div>
            
            </div>
            
          </div>))
        }

        </div>
        {
        +last >  Object.keys(filtervalue.slice(0,last)).length? '':( 
          <div   onClick={plusLast} className={localStorage.getItem("darkLightMod")==="light"?"PartnyorlarDahaCox":" DarkPartnyorlarDahaCox"}>
           
            Daha çox
          </div>
          )}
       
        {
          popop? 
          
          <PopopPartnyor popop={popop} setPopop={setPopop} popopNone={none} def={dataitem}></PopopPartnyor>
          :
          ''
        }
        </div>
      
       
    </>
  )
}

export default Partnyorlar