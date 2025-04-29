import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Pencil, Trash2, Undo } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
import CommDeleteContext from './CommDeleteContext';
import axios from 'axios';
import TextInputArea from '../ui/TextInputArea';
import CommEditContext from './CommEditContext';

const ReplyBox = styled.div`
    padding : 10px;
    border : 1px solid lightgrey;
    border-radius : 8px;
    flex : 1;
`
const TotalDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
`

const ButtonDiv = styled.div`
    padding : 16px;
`

function Comm(props) {

    const { indexINarr, postId, replyId, reply } = props;
    const [ isEdit, setIsEdit ] = useState(false);
    const [ editComm, setEditComm ] = useState(null);

    const token = localStorage.getItem("JWTtoken");
    
    const commDelete = useContext(CommDeleteContext);
    const commEdit = useContext(CommEditContext);
    
    const modi = () => {
        setEditComm(reply);
        setIsEdit(true);
    }
    const dele = async (event) => {
        event.preventDefault();
        if(window.confirm("댓글을 삭제하시겠습니까?")) {
            await axios.delete(`http://localhost:8080/reply/delete/${replyId}`,
                {
                    headers : {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    }
                }
            )
            .then(() => commDelete(replyId))
            .catch((error) => console.log(error));
        }
    };

    const commEditHandle = (event) => {
        setEditComm(event.target.value);
        event.preventDefault();
    }

    const editConfirm = async (event) => {
        if(window.confirm("정말 수정하시겠습니까?")) {
            const token = localStorage.getItem("JWTtoken");
            await axios.put(`http://localhost:8080/reply/edit`,
                {
                    replyId : replyId,
                    replyContent : editComm,
                    postId : postId,
                },
                { headers : {"Content-Type" : "application/json", "Authorization" : `Bearer ${token}`}
                , withCredentials : true },
            ).then(() => {
                commEdit(indexINarr, editComm);
                setIsEdit(false);
                setEditComm("");
            })
        }
    }

    const doNotEdit = (event) => {
        setIsEdit(false);
        setEditComm("");
    }
    
    return (
        <div>
            {
                isEdit ? (
                    <TotalDiv>
                        <div style={{flex : "1"}}>
                            <TextInputArea height={20} value={editComm} onChange={commEditHandle} />
                        </div>
                        <ButtonDiv>
                            <Pencil size={20} onClick={editConfirm} style={{ cursor : "pointer", marginRight : "10px"}}/>
                            <Undo size={20} onClick={doNotEdit} style={{ cursor : "pointer"}} />
                        </ButtonDiv>
                    </TotalDiv>
                ) : (
                    <TotalDiv>
                        <ReplyBox>
                            {reply}
                        </ReplyBox>
                        <ButtonDiv>
                            <Pencil size={20} onClick={modi} style={{ cursor : "pointer", marginRight : "10px" }}/>
                            <Trash2 size={20} onClick={dele} style={{ cursor : "pointer"}}/>
                        </ButtonDiv>
                    </TotalDiv>
                    
                )
            }
            
        </div>
    )
}

export default Comm