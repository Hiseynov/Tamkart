import { useEffect } from "react";
import { Route, useRoutes } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
// import './App.css'
import Header from "./components/Header";
// const [chatAc,setChatAc] = useState(false)
// import LanguageSwitcher from './LanguageSwitcher'
import { routes } from "./routes";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
// import ChatBots from "./components/ChatBots";
// import { useTranslation } from 'react-i18next';
// import i18n from './i18n'
// import ChatBot from "react-simple-chatbot"
// import {Segment} from 'semantic-ui-react'
import ChatBot from 'react-simple-chatbot'; 
// import Eror from "./pages/Eror";



 

function App() {
const [chatAc,setChatAc] = useState(false)
  // const { t } = useTranslation();
  const router = useRoutes(routes);

  // const [ad,setAd]=useState({
    window.scrollTo(0,0)

  const steps = [
    {
      id: '1',
      message: 'Xoş gəldiniz, adınızı qeyd edin',
      trigger:'2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id:"3",
      message:`Salam {previousValue} (Cənab/Xanım), probleminiz nədir?`,
     trigger:'4'
    },
    {
      id:"4",
      options:[
        {value:"Kartlar",label:"Kartlar",trigger:"5"},
        {value:"Partnorlar",label:"Partnorlar",trigger:"6"},
        {value:"Kampaniyalar",label:"Kampaniyalar",trigger:"7"},

      ]
    },
    {
      id:'5',
      message:'Sizin kartla bağlı probleminiz nədir??',
      trigger:'8'

    },
    {
      id:"8",
      options:[
        {value:"Karti almagla",label:"Karti almagla",trigger:"9"},
        {value:"Karti yenilemek",label:"Karti yenilemek",trigger:"10"},
        {value:"Diger",label:"Diger",trigger:"11"},

      ]
    },
    {
      id:'9',
      message:'Kartı almamışdan əvvəl 2-3 gün onlayn alış-veriş edin, kartı filialdan gətirin və ya əvvəlcədən filiala gəlib alış-veriş edə bilərsiniz.',
      end:true

    },
    {
      id:'10',
      message:'Kartınızı yeniləməzdən əvvəl filialımıza gəlin və istisnanın səbəbini bizə bildirin, o zaman kartınız uzadılacaq.',
      end:true

    },
    {
      id:'11',
      message:'Operatorumuzla əlaqə saxlayın +994 (51) - 604 - 19 - 05.',
      end:true
    },
    {
      id:'6',
      message:'Партнеры В чем именно заключается ваша проблема?',
      trigger:'12'

    },
    {
      id:"12",
      options:[
        {value:"TamKart'a partner olmak için",label:"TamKart'a partner olmak için",trigger:"13"},
        {value:"Parnorlugdan cixmag istisiz",label:"Parnorlugdan cixmag istisiz",trigger:"14"},
        {value:"Diger",label:"Diger",trigger:"15"},

      ]
    },

    {
      id:'13',
      message:" TamKart'a partner olmak için aşağıdaki adımları takip edebilirsiniz: Resmi İletişim: İlk adım, TamKart'a partner olma talebinizi resmi iletişim kanalları aracılığıyla iletmektir. TamKart'ın resmi web sitesini ziyaret ederek veya telefon, e-posta gibi iletişim kanallarını kullanarak şirketle iletişime geçebilirsiniz. Görüşme ve Değerlendirme: TamKart yetkilileri, sizinle bir görüşme düzenleyerek iş teklifinizi ve potansiyel iş birliğini değerlendirecektir. Bu aşamada, iş modelinizi, hedeflerinizi ve TamKart'a nasıl katkıda bulunabileceğinizi anlatma fırsatınız olacaktır. Anlaşma ve Sözleşme: Eğer TamKart, iş birliği teklifinizi olumlu değerlendirirse, bir anlaşma ve sözleşme hazırlanacaktır. Bu sözleşmede iş birliği şartları, karşılıklı taahhütler ve diğer detaylar belirtilecektir. Uygulama ve Entegrasyon: Sözleşmenin kabulü ve imzalanmasının ardından, TamKart'ın partner programına resmi olarak katılacaksınız. Bu aşamada, TamKart ile işbirliğine uygun olarak belirlenen entegrasyon ve uygulama süreçlerini tamamlamanız gerekebilir. İş Birliği Başlangıcı: Entegrasyon ve uygulama süreçleri tamamlandıktan sonra, iş birliğiniz resmi olarak başlayacak ve TamKart'ın partneri olarak faydalarınız ve sorumluluklarınız başlayacaktır. TamKart'a partner olma süreci her şirket için farklılık gösterebilir ve spesifik gereksinimler olabilir. Bu nedenle, TamKart'ın resmi web sitesinden veya doğrudan iletişim kanallarından detaylı bilgi almak için şirketle iletişime geçmeniz önemlidir.",
      end:true

    },
    {
      id:"14",
      message:"Eğer bir partnerlikten (iş ortaklığından) çıkmak istiyorsanız, genellikle şirketinize gönderdiğiniz resmi bir yazılı bildirimle işbirliğini sonlandırabilirsiniz. TamKart'la işbirliğinizin nasıl sonlandırılacağına dair detaylar sözleşmenizde veya işbirliği anlaşmasında belirtilmiş olabilir. Bu nedenle, işbirliğini sonlandırmadan önce sözleşme ve anlaşmalarınızı dikkatlice gözden geçirmeniz önemlidir.      Aşağıda, partnerlikten çıkma sürecini genel olarak adım adım açıklıyorum:      Sözleşmeyi İnceleyin: İlk adım olarak, mevcut işbirliğinin sonlandırılmasıyla ilgili sözleşmeyi ve anlaşmaları inceleyin. Partnerlikten çıkma süreci ve gereklilikleri bu belgelerde belirtilecektir.      Resmi Bildirim Gönderin: Partnerlikten çıkmak istediğinizi resmi bir yazılı bildirimle şirkete iletmelisiniz. Bu yazılı bildirim, işbirliğini sonlandırma talebinizi ve planlanan çıkış tarihini içermelidir. İşbirliğinin nasıl sonlandırılacağına dair gereksinimleri de açıkça belirtin.    Gerekli Süreçleri Tamamlayın: Şirketinizle işbirliğinin sonlanması için belirlenen süreçleri tamamlayın. Bu süreçler, veri aktarımı, ödeme düzenlemeleri, envanter devri gibi işbirliğinin çıkışına dair pratik detayları içerebilir      Resmi Onay Alın: Şirketiniz, işbirliğinin sonlandırılma talebinizi değerlendirecektir. İstenen süreçler ve belgeler tamamlandıktan sonra, partnerlikten çıkışınızın resmi olarak onaylandığını doğrulayacaklar.      İşbirliği Sonlandırması: Son adım, belirlenen tarihte ve koşullarda işbirliğini resmi olarak sonlandırmaktır. Bu aşamada, tüm işbirliği faaliyetleri sona erecektir. Partnerlikten çıkmadan önce, işbirliğini sonlandırma sürecini detaylı bir şekilde iletişim halinde olduğunuz şirketle koordine edin. Bu süreçte her iki tarafın da beklentilerini karşılamak önemlidir. Yine belirtmek gerekir ki, partnerlikten çıkma süreci şirketten şirkete farklılık gösterebilir. Bu nedenle, TamKart ile işbirliğinizi sonlandırmak istiyorsanız, TamKart ile doğrudan iletişime geçerek işbirliğinin nasıl sonlandırılacağı hakkında bilgi almanız en doğrusu olacaktır.",
      end:true

    },
    {
      id:'15',
      message:'Zehmet olmasa aperatirimizla elage saxlayin +994 (77) - 304 - 22 - 45',
      end:true

    },
    {
      id:'7',
      message:'Kampaniyalarimiz hakta melumat elde etmekicin  aperatirimizla elage saxlayin +994 (51) - 604 - 19 - 05',
      end:true

    }
  ];

  return (
    <>
      <div className="all-main"  style={localStorage.getItem("darkLightMod")==="light"?({background:""}):({background:"black"})} >
        <ToastContainer theme="colored"></ToastContainer>
        <Header></Header>
        <div className="chatbots-container">
          <p onClick={()=> setChatAc(!chatAc)}>
            <img style={!chatAc?({top:'11px',left:"7px"}):({top:"15px",left:'15px'})} src={!chatAc?"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwIiB3aWR0aD0iMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIGhlaWdodD0iMTM4LjclIiB3aWR0aD0iMTMxLjQlIiB4PSItMTUuNyUiIHk9Ii0xNS4xJSI+PGZlTW9ycGhvbG9neSBpbj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJkaWxhdGUiIHJhZGl1cz0iMSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjEiLz48ZmVPZmZzZXQgZHk9IjEiIGluPSJzaGFkb3dTcHJlYWRPdXRlcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIxIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA3IDAiLz48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTE0LjIzIDIwLjQ2bC05LjY1IDEuMUwzIDUuMTIgMzAuMDcgMmwxLjU4IDE2LjQ2LTkuMzcgMS4wNy0zLjUgNS43Mi00LjU1LTQuOHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=":"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5LjM5OSAyLjA0YTEuMzM0IDEuMzM0IDAgMDAtMi4yOS0uOTNsLTcuMDU2IDcuMDU3TDIuOTk1IDEuMTFBMS4zMzMgMS4zMzMgMCAxMDEuMTEgMi45OTVsNy4wNTcgNy4wNThMMS4xMSAxNy4xMWExLjMzNCAxLjMzNCAwIDEwMS44ODUgMS44ODVsNy4wNTgtNy4wNTcgNy4wNTcgNy4wNTdhMS4zMzQgMS4zMzQgMCAxMDEuODg1LTEuODg1bC03LjA1Ny03LjA1NyA3LjA1Ny03LjA1OGExLjMzMiAxLjMzMiAwIDAwLjQwNC0uOTU1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="} alt="" />
             </p>
          {
            chatAc?<ChatBot steps={steps} />:""
          }
        
      </div>
        {router}
        <Footer></Footer>
      </div>
   
    </>
  );
}

export default App;
