import{a as e,j as o,o as a,I as r,J as f,r as w,N,D as t}from"./index.20e87095.js";import{C as n}from"./Card.f09d8ef4.js";import{B as l}from"./Button.b58d7fcc.js";const s=({label:g="Dropdown",wrapperClass:b="inline-block",labelClass:h="",children:p,classMenuItems:x="mt-2 w-[220px]",splitIcon:d="heroicons-outline:chevron-down",items:c=[{label:"Action",link:"#"},{label:"Another action",link:"#"},{label:"Something else here",link:"#"}],classItem:u="px-4 py-2"})=>e("div",{className:`relative ${b}`,children:o(a,{as:"div",className:"block w-full",children:[o("div",{className:"split-btngroup flex",children:[e("button",{type:"button",className:`btn flex-1 ${h}`,children:g}),e(a.Button,{className:`flex-0 px-3 ${h}`,children:e(r,{icon:d})})]}),e(f,{as:w.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e(a.Items,{className:`absolute ltr:right-0 rtl:left-0 origin-top-right  border border-slate-100
            rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]
            ${x}
            `,children:e("div",{children:p||(c==null?void 0:c.map((i,m)=>e(a.Item,{children:({active:v})=>e("div",{className:`${v?"bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50":"text-slate-600 dark:text-slate-300"} block     ${i.hasDivider?"border-t border-slate-100 dark:border-slate-700":""}`,children:i.link?e(N,{to:i.link,className:`block ${u}`,children:i.icon?o("div",{className:"flex items-center",children:[e("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:e(r,{icon:i.icon})}),e("span",{className:"block text-sm",children:i.label})]}):e("span",{className:"block text-sm",children:i.label})}):e("div",{className:`block cursor-pointer ${u}`,children:i.icon?o("div",{className:"flex items-center",children:[e("span",{className:"block text-xl ltr:mr-3 rtl:ml-3",children:e(r,{icon:i.icon})}),e("span",{className:"block text-sm",children:i.label})]}):e("span",{className:"block text-sm",children:i.label})})})},m)))})})})]})}),M=()=>o("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-6",children:[e(n,{title:"Basic dropdowns",children:o("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"primary",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"secondary",className:"btn-secondary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:"btn-success",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"info",className:"btn-info",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"warning",className:"btn-warning",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"danger",className:"btn-danger",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Dark",className:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Light",className:"btn-light",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Outline Dropdowns",children:o("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"primary",className:"btn-outline-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"secondary",className:"btn-outline-secondary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:"btn-outline-success",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"info",className:"btn-outline-info",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"warning",className:"btn-outline-warning",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"danger",className:"btn-outline-danger",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Dark",className:"btn-outline-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Light",className:"btn-outline-light",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Flat Dropdowns",children:o("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"primary",className:"text-primary-500 hover:bg-primary-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"secondary",className:"text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:"text-success-500 hover:bg-success-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"info",className:"text-info-500 hover:bg-info-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"warning",className:"text-warning-500 hover:bg-warning-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"danger",className:" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Dark",className:"text-slate-800 hover:bg-slate-800 hover:bg-opacity-20",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Light",className:"text-slate-600 hover:bg-light hover:bg-opacity-10",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Dropdown Sizes",children:o("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Large Button",className:"btn-primary btn-xl",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-2xl"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"Default",className:"btn-dark",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"left-0  w-[220px] top-[110%] ",label:e(l,{text:"success",className:" btn-success btn-sm",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-sm"})})]})}),e(n,{title:"Split Dropdowns",children:o("div",{className:"space-xy-5",children:[e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"primary",labelClass:"btn-primary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"secondary",labelClass:"btn-secondary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"success",labelClass:"btn-success"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"info",labelClass:"btn-info"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"warning",labelClass:"btn-warning"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"danger",labelClass:"btn-danger"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"Light",labelClass:"btn-light"})]})}),e(n,{title:" Split Outline Dropdowns",children:o("div",{className:"space-xy-5",children:[e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"primary",labelClass:"btn-outline-primary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"secondary",labelClass:"btn-outline-secondary"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"success",labelClass:"btn-outline-success"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"info",labelClass:"btn-outline-info"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"warning",labelClass:"btn-outline-warning"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"danger",labelClass:"btn-outline-danger"}),e(s,{classMenuItems:"left-0  w-[220px] top-[110%]",label:"Light",labelClass:"btn-outline-light"})]})}),e(n,{title:"Dropdown Directions",children:o("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-[220px] top-[110%]",label:e(l,{text:"Left align",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"w-[220px] top-[110%]",label:e(l,{text:"Right align",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"right-unset left-full w-[200px] top-0 ml-3",label:e(l,{text:"Drop-right-top",className:"btn-primary",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(t,{classMenuItems:"right-full  w-[200px] top-0 ml-3",label:e(l,{text:"Drop-left-left",className:"btn-primary",icon:"heroicons-outline:chevron-left",div:!0,iconClass:"text-lg"})})]})}),e(n,{title:"Dropdown Directions",children:o("div",{className:"space-xy-5",children:[e(t,{classMenuItems:"left-0  w-full top-[110%]",wrapperClass:"block",label:e(l,{text:"primary",className:"btn-primary block-btn",icon:"heroicons-outline:chevron-right",iconPosition:"right",div:!0,iconClass:"text-lg"})}),e(s,{classMenuItems:"left-0  w-full top-[110%]",label:"primary",labelClass:"btn-primary",wrapperClass:"block"}),e(s,{classMenuItems:"left-0 w-full top-[110%]",label:"primary",labelClass:"btn-outline-primary",wrapperClass:"block"})]})})]});export{M as default};
