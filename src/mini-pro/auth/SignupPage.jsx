import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
      maxWidth: '500px',
      margin: '100px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    input: {
      padding: '10px',
      fontSize: '16px'
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: 'lightgrey',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
  };

function SignupPage(props) {

    const { setIsAuthenticated } = props;

    const [ userName, setUserName ] = useState("");
    const [ passWord, setPassWord ] = useState("");
    const [ passWordCheck, setPassWordCheck ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");

    const navigate = useNavigate();

    const userNameChangeHandler = (event) => {
        event.preventDefault();
        setUserName(event.target.value);
    }

    const passWordChangeHandler = (event) => {
        event.preventDefault();
        setPassWord(event.target.value);
    }

    const passWordCheckChangeHandler = (event) => {
        event.preventDefault();
        setPassWordCheck(event.target.value);
    }

    const submitSignupForm = async (event) => {
        event.preventDefault();
        if(userName != null && passWord != null && passWord === passWordCheck) {
            await axios.post('http://localhost:8080/auth/signup',
                {
                    username : userName,
                    password : passWord,
                },
                { headers : { "Content-Type" : "application/json" }
                , withCredentials : true},
            ).then((response) => {
                setUserName("");
                setPassWord("");
                setPassWordCheck("");
                alert("가입되었습니다..!");
                navigate("/login");
            })
            .catch((error) => alert(error.response.data));
        }
        
    }

    return (
        <div style={styles.container}>
            <h2>Signup</h2>
            <form onSubmit={submitSignupForm} style={styles.form}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={userName}
                    onChange={userNameChangeHandler}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={passWord}
                    onChange={passWordChangeHandler}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="비밀번호확인"
                    value={passWordCheck}
                    onChange={passWordCheckChangeHandler}
                    required
                    style={styles.input}
                />
                { errorMsg && <p style={{color : 'red'}}>{errorMsg}</p>}
                <button type="submit" style={styles.button}>회원가입</button>
            </form>
        </div>
    )
}

export default SignupPage