import{a as e,j as a,I as n}from"./index.20e87095.js";import{T as l}from"./Textinput.6916a31d.js";import{B as c}from"./Button.b58d7fcc.js";import{u as d,b as p}from"./index.esm.73e0e06c.js";const $=()=>{const{register:s,control:r,handleSubmit:h,reset:u,trigger:f,setError:N}=d({defaultValues:{test:[{firstName:"Bill",lastName:"Luo",phone:"123456"}]}}),{fields:i,append:m,remove:o}=p({control:r,name:"test"});return e("div",{children:a("div",{className:"bg-slate-50 dark:bg-slate-800 -mx-6 px-6 py-6",children:[e("div",{className:"mb-6 text-slate-600 dark:text-slate-300 text-xs font-medium uppercase",children:"Items info-500"}),a("div",{children:[e("form",{children:i.map((b,t)=>a("div",{className:"lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0",children:[e(l,{label:"First Name",type:"text",id:`name${t}`,placeholder:"First Name",register:s,name:`test[${t}].firstName`}),e(l,{label:"last Name",type:"text",id:`name2${t}`,placeholder:"Last Name",register:s,name:`test[${t}].lastName`}),a("div",{className:"flex justify-between items-end space-x-5",children:[e("div",{className:"flex-1",children:e(l,{label:"Phone",type:"text",id:`name3${t}`,placeholder:"Phone",register:s,name:`test[${t}].phone`})}),t>0&&e("div",{className:"flex-none relative",children:e("button",{onClick:()=>o(t),type:"button",className:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",children:e(n,{icon:"heroicons-outline:trash"})})})]})]},t))}),e("div",{className:"mt-4",children:e(c,{text:"Add new",icon:"heroicons-outline:plus",className:"text-slate-600 p-0 dark:text-slate-300",onClick:()=>m()})})]})]})})};export{$ as R};
