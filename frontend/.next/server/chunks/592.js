"use strict";exports.id=592,exports.ids=[592],exports.modules={9357:(e,s,a)=>{a.d(s,{nh:()=>i.default,lq:()=>d,YE:()=>r.default,oi:()=>c,sJ:()=>p});var l=a(326);a(434),a(7385);var r=a(9536),i=a(6331),t=a(7115),n=a(1132);let d=({value:e,handleChange:s,touched:a,errors:r,labelName:i,optional:d,selectType:o,selectValues:c})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.Label,{htmlFor:o,className:"text-base font-medium",children:[i," ",l.jsx("span",{className:"text-[12px] text-gray-100",children:d?"(optional)":""})]}),(0,l.jsxs)(n.Select,{name:o,value:e,onValueChange:e=>{s({target:{name:o,value:e}})},children:[l.jsx(n.SelectTrigger,{id:o,className:"h-[50px] items-center [&_[data-description]]:hidden",children:l.jsx(n.SelectValue,{defaultValue:e})}),l.jsx(n.SelectContent,{className:"bg-white",children:c.map((e,s)=>l.jsx(n.SelectItem,{value:e,className:"hover:bg-gray-200 cursor-pointer",children:l.jsx("div",{className:"flex items-start gap-3",children:l.jsx("span",{className:"font-regular",children:e})})},s))})]}),a[o]&&r[o]&&l.jsx("span",{className:"text-red-500 text-sm",children:r[o]})]});var o=a(5188);let c=({value:e,handleChange:s,touched:a,errors:r,labelName:i,optional:n,inputType:d,placeholder:c,maxCharacters:m})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)(t.Label,{htmlFor:d,className:"text-base font-medium",children:[i," ",l.jsx("span",{className:"text-[12px] text-gray-100",children:n?"(optional)":""})]}),m&&(0,l.jsxs)("span",{className:"text-xs text-gray-100",children:[0===e.length?"0":e.length,"/",m]})]}),l.jsx(o.I,{type:"text",id:d,name:d,value:e,onChange:s,className:"h-[50px]",placeholder:c}),a[d]&&r[d]&&l.jsx("span",{className:"text-red-500 text-sm",children:r[d]})]});var m=a(7577),x=a(1175);let f=m.forwardRef(({className:e,...s},a)=>l.jsx("textarea",{className:(0,x.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...s}));f.displayName="Textarea";let p=({value:e,handleChange:s,touched:a,errors:r,labelName:i,optional:n,inputType:d,placeholder:o,maxCharacters:c})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)(t.Label,{htmlFor:d,className:"text-base font-medium",children:[i," ",l.jsx("span",{className:"text-[12px] text-gray-100",children:n?"(optional)":""})]}),c&&(0,l.jsxs)("span",{className:"text-xs text-gray-100",children:[0===e.length?"0":e.length,"/",c]})]}),l.jsx(f,{id:d,name:d,className:"h-32",value:e,onChange:s,placeholder:o}),a[d]&&r[d]&&l.jsx("span",{className:"text-red-500 text-sm",children:r[d]})]})},809:(e,s,a)=>{a.d(s,{Zb:()=>t,aY:()=>n});var l=a(326),r=a(7577),i=a(1175);let t=r.forwardRef(({className:e,...s},a)=>l.jsx("div",{ref:a,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...s}));t.displayName="Card",r.forwardRef(({className:e,...s},a)=>l.jsx("div",{ref:a,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...s})).displayName="CardHeader",r.forwardRef(({className:e,...s},a)=>l.jsx("h3",{ref:a,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...s})).displayName="CardTitle",r.forwardRef(({className:e,...s},a)=>l.jsx("p",{ref:a,className:(0,i.cn)("text-sm text-muted-foreground",e),...s})).displayName="CardDescription";let n=r.forwardRef(({className:e,...s},a)=>l.jsx("div",{ref:a,className:(0,i.cn)("p-6 pt-0",e),...s}));n.displayName="CardContent",r.forwardRef(({className:e,...s},a)=>l.jsx("div",{ref:a,className:(0,i.cn)("flex items-center p-6 pt-0",e),...s})).displayName="CardFooter"},5188:(e,s,a)=>{a.d(s,{I:()=>t});var l=a(326),r=a(7577),i=a(1175);let t=r.forwardRef(({className:e,type:s,...a},r)=>l.jsx("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...a}));t.displayName="Input"},3659:(e,s,a)=>{a.d(s,{O:()=>i});var l=a(326),r=a(1175);function i({className:e,...s}){return l.jsx("div",{className:(0,r.cn)("animate-pulse rounded-md bg-primary/10",e),...s})}},3527:(e,s,a)=>{a.d(s,{i:()=>n});var l=a(326),r=a(7577),i=a(7131),t=a(1175);let n=r.forwardRef(({className:e,...s},a)=>(0,l.jsxs)(i.fC,{ref:a,className:(0,t.cn)("relative flex w-full touch-none select-none items-center bg-gray-200",e),...s,children:[l.jsx(i.fQ,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full",children:l.jsx(i.e6,{className:"absolute h-full bg-green"})}),l.jsx(i.bU,{className:"block h-4 w-4 rounded-full border border-green bg-green shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]}));n.displayName=i.fC.displayName},4319:(e,s,a)=>{a.d(s,{SP:()=>o,dr:()=>d,mQ:()=>n,nU:()=>c});var l=a(326),r=a(7577),i=a(5408),t=a(1175);let n=i.fC,d=r.forwardRef(({className:e,...s},a)=>l.jsx(i.aV,{ref:a,className:(0,t.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...s}));d.displayName=i.aV.displayName;let o=r.forwardRef(({className:e,...s},a)=>l.jsx(i.xz,{ref:a,className:(0,t.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-green data-[state=active]:text-white data-[state=active]:shadow",e),...s}));o.displayName=i.xz.displayName;let c=r.forwardRef(({className:e,...s},a)=>l.jsx(i.VY,{ref:a,className:(0,t.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...s}));c.displayName=i.VY.displayName},4130:(e,s,a)=>{a.d(s,{Mj:()=>t,cs:()=>i,zG:()=>r});var l=a(3440);let r=[{name:"AI Email Write",icon:l.Yai,label:"AI Email Write",link:"/writemail"},{name:"AI Email Reply",icon:l.Z6I,label:"AI Email Reply",link:"/emailreply"},{name:"Prompts",icon:l.Jw3,label:"Prompts",link:"/prompts"},{name:"Profile Settings",icon:l.cRF,label:"Profile Settings",link:"/settings"},{name:"Subscription",icon:l.Ozh,label:"Subscription",link:"/subscriptions"},{name:"History",icon:l.On6,label:"History",link:"/history"}],i=["Professional","Casual","Funny","Excited"],t=["English","Hindi","Spanish","French","Standard Arabic","Mandarin Chinese","Portugese","Russian","Japanese"]},3999:(e,s,a)=>{a.d(s,{o:()=>n});var l=a(326),r=a(9357),i=a(4130),t=a(434);let n=({children:e})=>(0,l.jsxs)("div",{className:"grid w-full max-lg:h-dvh h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] p-5",children:[l.jsx("div",{className:"hidden border rounded-xl md:block p-5",children:(0,l.jsxs)("div",{className:"flex h-full max-h-screen flex-col gap-2 fixed",children:[l.jsx("div",{className:"flex justify-center items-center px-4 py-2 lg:px-12",children:(0,l.jsxs)(t.default,{href:"/",className:"flex justify-center items-center gap-2",children:[l.jsx("div",{className:"flex justify-center items-center bg-green w-8 h-8 rounded-lg",children:l.jsx("img",{src:"/leaf.svg",alt:"AirderEase Logo",width:25,height:25})}),(0,l.jsxs)("span",{className:"text-xl font-normal",children:["Airder",l.jsx("span",{className:"font-bold",children:"Ease"})]})]})}),l.jsx("div",{className:"flex-1 border-t py-4",children:l.jsx(r.YE,{sidebarItems:i.zG})})]})}),(0,l.jsxs)("div",{className:"flex flex-col",children:[l.jsx(r.nh,{sidebarItems:i.zG}),l.jsx("main",{className:"grid col-span-full xl:grid-cols-3 gap-4 mx-4 mt-4 lg:px-6 pt-6 lg:gap-6 lg:mt-6 border-t h-full",children:e})]})]})}};