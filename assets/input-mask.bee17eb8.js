import{a as e,j as i}from"./index.58149636.js";import{C as t}from"./Card.afbee749.js";import{T as r}from"./Textinput.9e815988.js";import{I as l}from"./InputGroup.f0810831.js";import"./cleave-phone.us.f45702a3.js";const u=()=>e("div",{children:e(t,{title:"Input Mask",children:i("div",{className:"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5",children:[e(r,{label:"Credit Card",isMask:!0,options:{creditCard:!0},placeholder:"0000 0000 0000 0000"}),e(l,{label:"Phone Number",prepend:"MY (+6)",placeholder:"Phone Number",id:"phoneNumber",options:{phone:!0,phoneRegionCode:"US"},isMask:!0}),e(r,{label:"Date",id:"date",options:{date:!0,datePattern:["Y","m","d"]},placeholder:"YYYY-MM-DD",isMask:!0}),e(r,{label:"Time",id:"time",options:{time:!0,timePattern:["h","m","s"]},placeholder:"HH:MM:SS",isMask:!0}),e(r,{label:"Numeral Formatting",id:"nu",options:{numeral:!0},placeholder:"10,000",isMask:!0}),e(r,{label:"Blocks",id:"block",options:{blocks:[4,3,3],uppercase:!0},placeholder:"Block[1,4,7]",isMask:!0}),e(r,{label:"Delimiters",id:"delimiters",options:{delimiter:"\xB7",blocks:[3,3,3],uppercase:!0},placeholder:"Delimiter: '.'",isMask:!0}),e(r,{label:"Custom Delimiters",id:"customDelimiter",options:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0},placeholder:"Delimiter: ['.', '.', '-']",isMask:!0}),e(r,{label:"prefix",id:"prefix",options:{prefix:"+88",blocks:[3,3,3,4],uppercase:!0},placeholder:"+88",isMask:!0})]})})});export{u as default};