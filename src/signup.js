import React,{useState} from 'react'
const App=()=>
    {
        const[name,setName]=useState({
            FIRSTNAME:'',PASSWORD:''
        })
        const {FIRSTNAME,PASSWORD}=name;
  const changehandler=e=>
    {
      setName({...name,[e.target.name]:[e.target.value]})
    }
    const submithandler=e=>
      {
        e.preventDefault()
        console.log(name)
      }
        return(
            <div>
                <center>
                    <form onSubmit={submithandler}>
                        <label>FIRSTNAME</label>
                        <input type="text" name="FIRST NAME" value={FIRSTNAME} onChange={changehandler}/><br/>
                        <label>EMAIL</label>
                        <input type="email" name="email"/><br/>
                        <label>PASSWORD</label>
                        <input type="text" name="PASSWORD" value={PASSWORD} onChange={changehandler}/><br/>
                        <label>MOBILE NUMBER</label>
                        <input type="text" name="MOBILE NUMBER"/><br/>
                        <input type="SUBMIT" name="SUBMIT"/><br/>
                    </form>
                </center>
            </div>

        );
    }
    export default App