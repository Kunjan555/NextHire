import React, { createContext, useState } from 'react'
import Cookies from "js-cookie";

export const  accountContext = createContext();

export default function AccountProvider({children}) {
  const checkLogin = Cookies.get("account");
  let accountInfo = {};
  if (checkLogin) {
     accountInfo = JSON.parse(checkLogin);

  }else{
    accountInfo = {};
  }
  const [account, setAccount] = useState(accountInfo);
  return (
    <accountContext.Provider value={{account, setAccount}}>
      {children}
    </accountContext.Provider>
  )
}
