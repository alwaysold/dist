import{j as i,a as e}from"./index.58149636.js";import{T as m}from"./Textinput.9e815988.js";import{u as l}from"./index.esm.9137ef03.js";import{c as n,a as r,o as c}from"./object.9204f103.js";const u=n({email:r().email("Invalid email").required("Email is Required"),password:r().required("Password is Required")}).required(),h=()=>{const{register:s,formState:{errors:a},handleSubmit:o}=l({resolver:c(u)});return i("form",{onSubmit:o(t=>{console.log(t)}),className:"space-y-4 ",children:[e(m,{name:"email",label:"email",type:"password",register:s,error:a.password,className:"h-[48px]"}),e("button",{className:"btn btn-dark block w-full text-center",children:"Unlock"})]})};export{h as L};