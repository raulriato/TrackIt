import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle";
import Habits from "./Habits";
import Historic from "./Historic";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";


export default function App () {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/habits' element={<Habits />} />
                    <Route path='/today' element={<Today />} />
                    <Route path='/history' element={<Historic />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}