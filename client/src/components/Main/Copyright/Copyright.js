import React from "react";
import "./Copyright.css";

export default function Copyright() {
  const areCookiesEnabled = navigator.cookieEnabled;
  return (
    <div className="copyright">
      {!areCookiesEnabled && (
        <div className="cookie__access">
          <p>
            Please enable your third-party cookies from the Browser Settings to
            get the full functionality of the application!
          </p>
        </div>
      )}

      <h1>© 2023 SalesIT. All rights reserved.</h1>
    </div>
  );
}
