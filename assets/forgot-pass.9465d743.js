import{j as i,a as e}from"./index.c0aa2efc.js";import{T as m}from"./Textinput.b0378988.js";import{u as l}from"./index.esm.53ad068d.js";import{c as n,a as r,o as c}from"./object.e4849ff7.js";const u=n({email:r().email("Invalid email").required("Email is Required"),password:r().required("Password is Required")}).required(),S=()=>{const{register:a,formState:{errors:s},handleSubmit:o}=l({resolver:c(u)});return i("form",{onSubmit:o(t=>{console.log(t)}),className:"space-y-4 ",children:[e(m,{name:"email",label:"email",type:"email",register:a,error:s.email,className:"h-[48px]"}),e("button",{className:"btn btn-dark block w-full text-center",children:"Send recovery email"})]})};export{S as F};