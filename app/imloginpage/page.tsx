"use client";

import {
  TextAreaX,
  TextInputX,
  CheckboxX,
  NameInputX,
  PhoneInputX,
  EmailInputX,
  DateInputX,
  HiddenInputX,
  NumberInputX,
  ButtonX,
  SubmitButtonX,
  SelectOptionField,
  OptionButtonX,
} from '@/components/Form/UdxFormComponents';
import {signIn}  from 'next-auth/react'
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function X() {
  const router = useRouter();
  const {data:session} = useSession();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    const res = await signIn('credentials',{
      username,
      password,
      redirect:false
    })
    if(res?.error){
      alert("Invalid Credentials");
    }
    if(res){
      router.push('/imloggedin');
    }
  }
  return (
    <>
    <h1>Log in</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/> 
      <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
      <button>Submit</button>
    </form>
    </>
  );
}
