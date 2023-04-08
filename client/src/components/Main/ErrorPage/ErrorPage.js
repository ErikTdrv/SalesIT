import React from "react";
import './ErrorPage.css';
import Copyright from "../Copyright/Copyright";

export default function ErrorPage(){
    return (
        <>
        <div className="error__div">
            <p>404</p>
            <h1>Page Not Found</h1>
            <button>Return To Home</button>
        </div>
        <Copyright/>
        </>
    )
}