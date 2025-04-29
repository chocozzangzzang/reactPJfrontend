import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import Library from './chap03/Libraray';
// import Clock from './chap04/Clock';
// import CommentList from './chap05/CommentList';
// import NotificationList from './chap06/NotificationList';
// import StateEx from './chap07/StateEx';
// import TextInputWithRef from './chap07/TextInputWithRef';
// import Accomodate from './chap07/Accomodate';
// import ConfirmButton from './chap08/ConfirmButton';
// import ConfirmButtonFunc from './chap08/ConfirmButtonFunc';
// import MainPage from './chap09/MainPage';
// import LandingPage from './chap09/LandingPage';
// import AttandanceBook from './chap10/AttandanceBook';
// import NameForm from './chap11/NameForm';
// import RequestForm from './chap11/RequestForm';
// import FruitSelect from './chap11/FruitSelect';
// import MultipleOptions from './chap11/MultipleOptions';
// import SignUp from './chap11/SignUp';
// import Calculator from './chap12/Calculator';
// import ProfileCard from './chap13/ProfileCard';
// import BlackOrWhite from './chap14/BlackOrWhite';
// import StyledComp from './chap15/StyledComp';
// import Blocks from './chap15/Blocks';
// import BlogMain from './mini-pro/BlogMain';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// chap04
// setInterval(() => { 함수 코드 -> root.render(); }, time)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );
// }, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
