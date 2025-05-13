import React from 'react';
import MoveButton from './MoveButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 800px;
    height: 150px;
    margin : 0 auto;
    position : fixed;
    top : 0;
`

const TtDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin-top : 16px;
    margin-bottom : 16px;
    background : #333;
    padding : 12px;
    border-radius : 8px;
`;

const UserDiv = styled.div`
    width : 100%;
    height : 15px;
    text-align : right;
`

const TopBar = () => {
    const navigate = useNavigate();
    const login = localStorage.getItem("JWTtoken");
    const role = localStorage.getItem("USERrole");
    const username = localStorage.getItem("USERname");

    return (
        <Wrapper>
            <UserDiv>
                {
                    login ?
                    <h4>{username}님 환영합니다!</h4>
                    : <h4></h4>
                }
            </UserDiv>
            <TtDiv> 
                <MoveButton title="홈" onClick={() => navigate('/')}/>
                <MoveButton title="날씨" onClick={() => navigate('/weather')}/>
                <MoveButton title="최신영화" onClick={() => navigate('/movies')}/>
                {
                    role === "[ROLE_ADMIN]" ?
                    <MoveButton title="회원관리" onClick={() => alert("회원관리탭")} />
                    : <></>
                }
                {
                    login ? 
                    <MoveButton title="로그아웃" onClick={() => {
                        localStorage.removeItem("JWTtoken");
                        localStorage.removeItem("USERrole");
                        localStorage.removeItem("USERname");
                        navigate("/login");}}/> 
                    : <MoveButton title="로그인" onClick={() => navigate('/login')}/>
                    
                }
                
            </TtDiv>
        </Wrapper>
        
    );
};

export default TopBar;