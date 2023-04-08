import React from "react";
import './ErrorPage.css';
import Copyright from "../Copyright/Copyright";
import { useNavigate } from "react-router-dom";

export default function ErrorPage(){
    const navigate = useNavigate();
    return (
        <>
        <div className="error__div">
            <p>404</p>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/')}>Return To Home</button>
        </div>
        <Copyright/>
        </>
    )
}