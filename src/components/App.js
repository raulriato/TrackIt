import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import Habits from "./Habits";
import Historic from "./Historic";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import UserContext from "../contexts/UserContext";


export default function App() {

    const [config, setConfig] = useState({
        Authorization: 'Bearer '
    });

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={{ config, setConfig }} >
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='/habits' element={<Habits />} />
                        <Route path='/today' element={<Today />} />
                        <Route path='/history' element={<Historic />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}