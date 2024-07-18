"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  return (
    <>
    <h1>Logged in</h1>
    {JSON.stringify(session)}
    <br/>
    <button onClick={()=>signOut()}>Signout</button>
    </>
  );
}
