import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
function Regist() {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("male");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState(localStorage.getItem('languages')==='Ru'? "Электронная почта не может быть пустым":localStorage.getItem('languages')==='Aze'? "Email boş ola bilməz":"Email cannot be empty");
  const [UsernameDirty, setUsernameDirty] = useState(false);
  const [UsernameError, setUsernameError] = useState(localStorage.getItem('languages')==='Ru'? "Имя пользователя не может быть пустым":localStorage.getItem('languages')==='Aze'? "İstifadəçi adı boş ola bilməz":"Username cannot be empty");
  const [passworError, setPassworError] = useState(localStorage.getItem('languages')==='Ru'? "Пароль не может быть пустым":localStorage.getItem('languages')==='Aze'? "Parol boş ola bilməz":"Password cannot be empty");
  const [FulnameDirty, setFulnameDirty] = useState(false);
  const [FulnameError, setFulnameError] = useState(localStorage.getItem('languages')==='Ru'? "Полное имя не может быть пустым":localStorage.getItem('languages')==='Aze'? "Tam ad boş ola bilməz":"Full Name cannot be empty");
  const [PhoneDirty, setPhoneDirty] = useState(false);
  const [PhoneError, setPhoneError] = useState(localStorage.getItem('languages')==='Ru'? "Телефонный номер  не может быть пустым":localStorage.getItem('languages')==='Aze'? "Telefon nömrəsi boş ola bilməz":"Telephone number cannot be empty");
  const [formValid, setFormValid] = useState(false);
  const [karzina,setkarzina]= useState([])
  const [yazilarFilter,setYazilarFilter]=useState([])

  useEffect(() => {
    if (
      UsernameError ||
      passworError ||
      FulnameError ||
      PhoneError ||
      emailError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [UsernameError, passworError, FulnameError, PhoneError, emailError]);
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "Username":
        setUsernameDirty(true);
        break;
      case "Fulname":
        setFulnameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };
  const emailHandler = (e) => {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError(localStorage.getItem('languages')==='Ru'? "Некоректный емейл":localStorage.getItem('languages')==='Aze'? "Yanlış email formatı":"Invalid email format");
    } else {
      setEmailError("");
    }
  };
  const usernameHandler = (e) => {
    if (e.target.value <= 0) {
      setUsernameError(localStorage.getItem('languages')==='Ru'? "Имя пользователя не может быть пустым":localStorage.getItem('languages')==='Aze'? "İstifadəçi adı boş ola bilməz":"Username cannot be empty");
    } else {
        setUsernameError("");
    }
  };
  const passwordHandler = (e) => {
   
     if(e.target.value.length < 3 || e.target.value.length > 8){
      setPassworError(localStorage.getItem('languages')==='Ru'? "Парод должен составлять больше 3 и менбше 8":localStorage.getItem('languages')==='Aze'? "Parol 3 simvoldan çox və 8 simvoldan az olmalıdır":"Password must be more than 3 characters and less than 8")
     }else{setPassworError('')}
    
  };
  const fulnameHandler = (e) => {
    if (e.target.value <= 0) {
      setFulnameError(localStorage.getItem('languages')==='Ru'? "Полное имя не может быть пустым":localStorage.getItem('languages')==='Aze'? "Tam ad boş ola bilməz":"Full Name cannot be empty");
    } else {
      setFulnameError("");
    }
  };
  const phoneHandle = (e) => {
    const ph = /^(\+994|994|0)(50|51|55|70|77)(\d{7}|\d{2}- \d{3}- \d{2}- \d{2})$/;
    if (!ph.test(e.target.value)) {
      setPhoneError(
        localStorage.getItem('languages')==='Ru'? "Телефонный номер неправильно написан  должен быть записан в следующем формате: +994501234567":localStorage.getItem('languages')==='Aze'? "Telefon nömrəsi düzgün formatda yazılmalıdır: +994501234567":"The phone number must be written in the following format: +994501234567"
      );
    } else {
      setPhoneError("");
    }
  };
  
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
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      let regobj = {
        id,
        name,
        password,
        email,
        phone,
        country,
        address,
        gender,
        karzina,
      };
      fetch("http://localhost:3300/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          localStorage.setItem('login',true),location.reload()
        })
        .catch((err) => {});
    }
  };
  return (
   <>
      <form onSubmit={handlesubmit} className="from-container">
            <div className="registr-card">
            <h1>{localStorage.getItem('login')==="false" &&( yazilarFilter.Qeydiyyat)}</h1>

              <div className="registr-card-body">
                <div className="form-container">
                  <div className="form-group">
                    <label>
                      User Name <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="Username"
                      value={id}
                      onChange={(e) => {
                        idchange(e.target.value), usernameHandler(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (UsernameDirty && UsernameError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {UsernameDirty && UsernameError && (
                      <div style={{ color: "red" }}>{UsernameError}</div>
                    )}
                  </div>
                 
                  <div className="form-group">
                    <label>
                      Full Name <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      value={name}
                      name="Fulname"
                      onChange={(e) => {
                        namechange(e.target.value), fulnameHandler(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (FulnameDirty && FulnameError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {FulnameDirty && FulnameError && (
                      <div style={{ color: "red" }}>{FulnameError}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="email"
                      value={email}
                      onChange={(e) => {
                        emailchange(e.target.value), emailHandler(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (emailDirty && emailError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {emailDirty && emailError && (
                      <div style={{ color: "red" }}>{emailError}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Phone <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        phonechange(e.target.value), phoneHandle(e);
                      }}
                      type="text"
                      className={
                        "form-control" +
                        (PhoneDirty && PhoneError
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {PhoneDirty && PhoneError && (
                      <div style={{ color: "red" }}>{PhoneError}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Password <span>*</span>
                    </label>
                    <input
                      onBlur={(e) => blurHandler(e)}
                      name="password"
                      value={password}
                      onChange={(e) => {
                        passwordchange(e.target.value), passwordHandler(e);
                      }}
                      type="password"
                      className={
                        "form-control" +
                        (passworError && passwordDirty
                          ? " BorderActiveFalse "
                          : " BorderActiveTrue")
                      }
                    />
                    {passworError && passwordDirty && (
                      <div style={{ color: "red" }}>{passworError}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Country <span>*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => countrychange(e.target.value)}
                      className="form-control"
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Singapore">Singapore</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Adress</label>
                    <textarea
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group-gender">
                    <ul>
                      <li><label>Gender : </label></li>
                      <li>     <input
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      type="radio"
                      name="gender"
                      value="male"
                      className="app-check"
                    />
                    <label>Male</label>
                    <input
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      type="radio"
                      name="gender"
                      value="female"
                      className="app-check"
                    />
                    <label>Female</label>
                    </li>
                    </ul>
                    
               
                  </div>
                  
                </div>
              </div>
              <div className="registr-card-footer">
                <button 
                style={!formValid?{cursor: "no-drop"}:{cursor:'pointer'}}
                  disabled={!formValid}
                  type="submit"
                  className="btn btn-primary"
                >
                  {yazilarFilter.QeydiyyatButton}
                </button>
                <a onClick={()=>(localStorage.setItem('login',true),location.reload())} className="btn btn-danger">
                {yazilarFilter.Daxil}
                </a>
              </div>
            </div>
          </form>
   </>
  );
}
export default Regist;
