import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MemberPage = styled.div`
    width : 800px;
    margin: 40px auto;
    background-color: #fff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    font-family: sans-serif;
`

const Member = styled.div`
    width : 800px;
    margin : 0 auto;
    display : flex;
    flex-direction : row;
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


    useEffect(() => {
        if(fetched.current) return;
        else fetched.current = true;

        getUserList();
    })
    return (
        <MemberPage>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th className="actions">Actions</th>
            </tr>
            </thead>
            <tbody>
             {
             userList ? 
             (
                userList.map((user) => (
                    <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td className="actions">
                            <button>탈퇴</button>
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