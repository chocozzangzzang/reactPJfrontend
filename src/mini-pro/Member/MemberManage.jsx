import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MemberPage = styled.div`
    width : 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    font-family: sans-serif;
    justify-content : center;
`

function MemberManage() {

    const fetched = useRef(false);
    const [ userList, setUserList ] = useState();
    async function getUserList() {
        const token = localStorage.getItem("JWTtoken");
        const users = await axios.get("http://localhost:8080/auth/userlist", {
                headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json",
                },
                withCredentials : true});
        setUserList(users.data);
        console.log(users);
    }

    async function deleteUser(uid) {
        const token = localStorage.getItem("JWTtoken");
        await axios.delete(`http://localhost:8080/auth/deleteUser/${uid}`, {
            headers : {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
            withCredentials : true
        })
        .then(() => {
            let updateUser = userList.filter((user) => user.userId !== uid);
            setUserList(updateUser);
        })
        .catch(e => console.log(e));
    }


    useEffect(() => {
        if(fetched.current) return;
        else fetched.current = true;

        getUserList();
    })
    return (
        <MemberPage>
            <h3>회원 관리</h3>
            <table style={{width : '700px'}}>
            <thead>
            <tr>
                <th style={{width : '20%'}}>ID</th>
                <th style={{width : '50%'}}>Username</th>
                <th style={{width : '20%'}}>Role</th>
                <th style={{width : '10%'}} className="actions">Actions</th>
            </tr>
            </thead>
            <tbody>
             {
             userList ? 
             (
                userList.map((user) => (
                    <tr key={user.userId}>
                        <td style={{textAlign : 'center'}}>{user.userId}</td>
                        <td style={{textAlign : 'center'}}>{user.username}</td>
                        <td style={{textAlign : 'center'}}>{user.role}</td>
                        <td style={{textAlign : 'center'}} className="actions">
                            <button onClick={() => {
                                if(window.confirm("탈퇴를 진행하겠습니까?")) {
                                    deleteUser(user.userId);
                                }
                                }}>탈퇴</button>
                        </td>
                    </tr>
                ) )
            ) : <></>}
            </tbody>
            </table>
        </MemberPage>
    )
}

export default MemberManage