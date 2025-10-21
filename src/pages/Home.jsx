import React, { useContext } from 'react'
import { accountContext } from '../components/AccountProvider'
export default function Home() {
  const {account, setAccount} = useContext(accountContext);
  console.log(account);
  return (
    <>
    <div>Home</div>
      <div>{account.name}</div>
    </>
  )
}
