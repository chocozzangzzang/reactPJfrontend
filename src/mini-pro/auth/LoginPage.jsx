import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
      width: '700px',
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
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    button2: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: 'lightgrey',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }
  };

function LoginPage(props) {

    const { setIsAuthenticated } = props;

    const [ userName, setUserName ] = useState("");
    const [ passWord, setPassWord ] = useState("");
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

    const submitLoginForm = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:8080/auth/login',
            {
                username : userName,
                password : passWord,
            },
            { headers : { "Content-Type" : "application/json" },
            withCredentials: true // 쿠키로 JWT 전송
        },
        ).then((response) => {
            localStorage.setItem("USERname", response.data.username);
            localStorage.setItem("JWTtoken", response.data.token);
            localStorage.setItem("USERrole", response.data.role);
            setIsAuthenticated(true);
            setUserName("");
            setPassWord("");
            navigate("/");
            // console.log(response.data);
        })
        .catch((error) => console.log(error));
    }

    const signUpPage = () => {
        navigate("/signup");
    }

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={submitLoginForm} style={styles.form}>
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
                { errorMsg && <p style={{color : 'red'}}>{errorMsg}</p>}
                <button type="submit" style={styles.button}>로그인</button>
                <button onClick={signUpPage} style={styles.button2}>회원가입</button>
            </form>
            
        </div>
    )
}

export default LoginPage