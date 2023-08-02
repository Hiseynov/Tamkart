import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"

const Login = ()=>{
   const [yazilarFilter,setYazilarFilter]=useState([])
    const [username,usernameupdate]=useState('')
    const [password,passwordupdate]=useState('')
  const [UsernameDirty, setUsernameDirty] = useState(false);
  const [UsernameError, setUsernameError] = useState(localStorage.getItem('languages')==='Ru'? "Username не может быть пустым":localStorage.getItem('languages')==='Aze'? "İstifadəçi adı boş ola bilməz":"Username cannot be empty");
  const [passworError, setPassworError] = useState(localStorage.getItem('languages')==='Ru'? "Пароль не может быть пустым":localStorage.getItem('languages')==='Aze'? "Parol boş ola bilməz":"Password cannot be empty");
  const [passwordDirty, setPasswordDirty] = useState(false);
 

    const usenavigate = useNavigate()
    const ProceedLogin =(e)=>{
        e.preventDefault()
        if(formValid){
            // console.log('proceed');
            fetch('http://localhost:3300/user/'+username).then((res)=>{
                return res.json()
            }).then((resp)=>{
                // console.log(resp);
                if(Object.keys(resp).length===0){
                // toast.error("Please Enter valid username")
                }else{
                    if(resp.password===password){
                        // toast.success('Success')
                        usenavigate('/')
                        console.log(resp.name);
                        localStorage.setItem('user',resp.name)
                        location.reload()
                    }else{
                // toast.error("Please Enter valid credentials")
                    }
                }
            }).catch((err)=>{
                // toast.error('Login Failed due to :' + err.message)
            })
        }
    }
     const [formValid,setFormValid]=useState(false)
    

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
    if(UsernameError || passworError){
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  },[UsernameError,passworError])

    const usernameHandler = (e) => {
        if (e.target.value <= 0) {
          setUsernameError(localStorage.getItem('languages')==='Ru'? "Username не может быть пустым":localStorage.getItem('languages')==='Aze'? "İstifadəçi adı boş ola bilməz":"Username cannot be empty");
        } else {
            setUsernameError("");
        }
      };
      const passwordHandler = (e) => {
       
         if(e.target.value.length < 3 || e.target.value.length > 8){
          setPassworError(localStorage.getItem('languages')==='Ru'? "Парод должен составлять больше 3 и менбше 8":localStorage.getItem('languages')==='Aze'? "Parol 3 simvoldan çox və 8 simvoldan az olmalıdır":"Password must be more than 3 characters and less than 8")
         }else{setPassworError('')}
        
      };
      const blurHandler = (e) => {
        switch (e.target.name) {
          case "username":
            setUsernameDirty(true);
            break;
          case "password":
            setPasswordDirty(true);
            break;
        }
      };
    return(
       <>
        
          <form className="from-container" onSubmit={ProceedLogin}>
            
          <div className="registr-card">
            <h1>{localStorage.getItem('login')==="true" &&( yazilarFilter.Login)}</h1>
              <div className="registr-card-body">
                <div className="form-container">
                  <div className="form-group">
                      <label>User Name <span>*</span></label>
                      <input  onBlur={(e) => blurHandler(e)} name="username" value={username} onChange={e=>{usernameupdate(e.target.value),usernameHandler(e)}}   className={"form-control" + ( UsernameDirty && UsernameError ? " BorderActiveFalse" : " BorderActiveTrue") }></input>
                      {UsernameDirty && UsernameError && (
        <div style={{ color: "red"  }}>{UsernameError}</div>
      ) }
                  </div>
                  <div className="form-group">
                      <label>Password <span>*</span></label>
                      <input  onBlur={(e) => blurHandler(e)} name="password" type='password' value={password} onChange={e=>{passwordupdate(e.target.value),passwordHandler(e)}} className={"form-control" + (passworError && passwordDirty? " BorderActiveFalse ": " BorderActiveTrue")}></input>
                      {passworError && passwordDirty && (
        <div style={{ color: "red" }}>{passworError}</div>
      )}
                  </div> 
                </div>
                 

              </div>
              <div className="registr-card-footer">
                  <button style={!formValid?{cursor: "no-drop"}:{cursor:'pointer'}} disabled={!formValid} className="btn btn-primary">{yazilarFilter.Daxil}</button>

                  <Link className='btn btn-danger' onClick={()=>(localStorage.setItem('login',false),location.reload())}>{yazilarFilter.QeydiyyatButton}</Link>
              </div>
          </div>
         </form>
       </>
        
    );
}

export default Login