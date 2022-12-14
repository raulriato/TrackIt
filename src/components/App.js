import { useState } from "react";
import UserContext from "../contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import Habits from "./Habits";
import Historic from "./Historic";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import PrivatePage from "./common/PrivatePage";


export default function App() {

    const [percentage, setPercentage] = useState(0);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={{ percentage, setPercentage }}>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='/' element={
                            <PrivatePage>
                                <Habits />
                            </PrivatePage>
                        } />
                        <Route path='/today' element={
                            <PrivatePage>
                                <Today />
                            </PrivatePage>
                        } />
                        <Route path='/history' element={
                            <PrivatePage>
                                <Historic />
                            </PrivatePage>
                        } />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}