"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[728],{9487:function(e,t,a){var s=a(7437);t.default=e=>{let{title:t,containerStyle:a,handleClick:r}=e;return(0,s.jsx)("button",{disabled:!1,type:"button",className:"custom-btn ".concat(a),onClick:r,children:(0,s.jsx)("span",{className:"flex-1",children:t})})}},1082:function(e,t,a){a.d(t,{default:function(){return w}});var s=a(7437),r=a(2265),n=a(3304),l=a(4867),i=a(2218),o=a(8214);let d=n.fC,c=n.xz;n.x8;let u=n.h_,f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});f.displayName=n.aV.displayName;let m=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=r.forwardRef((e,t)=>{let{side:a="right",className:r,children:i,...d}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,o.cn)(m({side:a}),r),...d,children:[(0,s.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(l.Pxu,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]}),i]})]})});x.displayName=n.VY.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold text-foreground",a),...r})});p.displayName=n.Dx.displayName;let h=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})});h.displayName=n.dk.displayName;var g=a(2873),b=a(2200),j=a(7138),y=a(6463),N=a(6920),v=a(1222),w=e=>{let{sidebarItems:t}=e,a=(0,y.usePathname)(),[n,l]=(0,r.useState)(null),{setResultData:i,setOnSubmit:o}=(0,r.useContext)(v._),u=()=>{o(!1),i("")};return(0,r.useEffect)(()=>{l(t.find(e=>a.includes(e.link)))},[a,t]),(0,s.jsxs)("header",{className:"flex items-center gap-4 bg-muted/40 px-4 lg:px-6 pt-7",children:[(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{asChild:!0,children:(0,s.jsxs)(b.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,s.jsx)(g.Z,{className:"h-5 w-5"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,s.jsxs)(x,{side:"left",className:"flex flex-col bg-white",children:[(0,s.jsx)(p,{children:(0,s.jsx)(h,{className:"hidden",children:"Menu"})}),(0,s.jsxs)("nav",{className:"grid gap-2 text-base font-medium",children:[(0,s.jsx)("div",{className:"flex h-14 items-center px-4 py-5 lg:h-[60px] lg:px-6",children:(0,s.jsxs)(j.default,{href:"/",className:"flex justify-center items-center gap-2",children:[(0,s.jsx)("div",{className:"flex justify-center items-center bg-green w-8 h-8 rounded-lg",children:(0,s.jsx)("img",{src:"/leaf.svg",alt:"FeatherAI Logo",width:25,height:25})}),(0,s.jsxs)("span",{className:"text-xl font-normal",children:["Feather",(0,s.jsx)("span",{className:"font-bold",children:"AI"})]})]})}),(0,s.jsx)("div",{className:"border-t py-4",children:t.map((e,t)=>{let r=e.disabled;return(0,s.jsxs)(j.default,{href:e.link,className:"flex items-center gap-3 rounded-lg px-4 py-5 transition-all ".concat(r?"cursor-not-allowed text-gray-400":"text-gray-300/40 hover:text-white hover:bg-green"," ").concat(a.slice(0,-1)===e.link?"bg-green text-white":""),onClick:e=>{if(r){e.preventDefault();return}u()},children:[(0,s.jsx)(N.G,{icon:e.icon}),(0,s.jsxs)("div",{children:[e.name,(0,s.jsx)("span",{className:"text-xs block",children:r?"(coming soon)":""})]})]},t)})})]})]})]}),n&&(0,s.jsx)("h3",{className:"text-xl md:text-3xl font-bold",children:n.name})]})}},6341:function(e,t,a){var s=a(7437),r=a(7138),n=a(6463),l=a(6920),i=a(2265),o=a(1222);t.default=e=>{let{sidebarItems:t}=e,a=(0,n.usePathname)(),{setResultData:d,setOnSubmit:c}=(0,i.useContext)(o._),u=()=>{c(!1),d("")};return(0,s.jsx)("nav",{className:"grid items-start text-base font-medium gap-2",children:t.map((e,t)=>{let n=e.disabled;return(0,s.jsxs)(r.default,{href:n?"#":e.link,className:"flex items-center gap-3 rounded-lg p-4 transition-all ".concat(n?"cursor-not-allowed text-gray-400":"text-gray-300/40 hover:text-white hover:bg-green"," ").concat(a.slice(0,-1)===e.link?"bg-green text-white":""),onClick:e=>{if(n){e.preventDefault();return}u()},children:[(0,s.jsx)(l.G,{icon:e.icon}),(0,s.jsxs)("div",{children:[e.name,(0,s.jsx)("span",{className:"text-xs block",children:n?"(coming soon)":""})]})]},t)})})}},2200:function(e,t,a){a.d(t,{z:function(){return d}});var s=a(7437),r=a(2265),n=a(1538),l=a(2218),i=a(8214);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",xl:"h-14 rounded-lg px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:l,asChild:d=!1,...c}=e,u=d?n.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:r,size:l,className:a})),ref:t,...c})});d.displayName="Button"},3277:function(e,t,a){a.r(t),a.d(t,{Label:function(){return d}});var s=a(7437),r=a(2265),n=a(8364),l=a(2218),i=a(8214);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.f,{ref:t,className:(0,i.cn)(o(),a),...r})});d.displayName=n.f.displayName},9256:function(e,t,a){a.d(t,{Select:function(){return o},SelectContent:function(){return m},SelectItem:function(){return x},SelectTrigger:function(){return c},SelectValue:function(){return d}});var s=a(7437),r=a(2265),n=a(4867),l=a(771),i=a(8214);let o=l.fC;l.ZA;let d=l.B4,c=r.forwardRef((e,t)=>{let{className:a,children:r,...o}=e;return(0,s.jsxs)(l.xz,{ref:t,className:(0,i.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...o,children:[r,(0,s.jsx)(l.JO,{asChild:!0,children:(0,s.jsx)(n.jnn,{className:"h-4 w-4 opacity-50"})})]})});c.displayName=l.xz.displayName;let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.u_,{ref:t,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(n.g8U,{})})});u.displayName=l.u_.displayName;let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.$G,{ref:t,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(n.v4q,{})})});f.displayName=l.$G.displayName;let m=r.forwardRef((e,t)=>{let{className:a,children:r,position:n="popper",...o}=e;return(0,s.jsx)(l.h_,{children:(0,s.jsxs)(l.VY,{ref:t,className:(0,i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:n,...o,children:[(0,s.jsx)(u,{}),(0,s.jsx)(l.l_,{className:(0,i.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(f,{})]})})});m.displayName=l.VY.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",a),...r})}).displayName=l.__.displayName;let x=r.forwardRef((e,t)=>{let{className:a,children:r,...o}=e;return(0,s.jsxs)(l.ck,{ref:t,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.wU,{children:(0,s.jsx)(n.nQG,{className:"h-4 w-4"})})}),(0,s.jsx)(l.eT,{children:r})]})});x.displayName=l.ck.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=l.Z0.displayName},1222:function(e,t,a){a.d(t,{_:function(){return l}});var s=a(7437),r=a(2265),n=a(8472);let l=(0,r.createContext)(),i=e=>{let t=e.replace(/##\s(.*?)(?=\n)/g,"<h2>$1</h2>");return(t=(t=(t=(t=t.replace(/###\s(.*?)(?=\n)/g,"<h3>$1</h3>")).replace(/\*\*(.*?)\*\*/g,"<b>$1</b>")).split("*").join("</br>")).split("\n").join("</br>")).replace(RegExp("```(.*?)```","gs"),"<span>$1</span>")};t.default=e=>{let[t,a]=(0,r.useState)(!1),[o,d]=(0,r.useState)(!1),[c,u]=(0,r.useState)(""),f=(e,t)=>{setTimeout(()=>{u(e=>e+t)},75*e)},m=async e=>{let t;u("");try{t=await n.Z.post("/api/generate-prompt",{prompt:e}),i(t.data).split(" ").forEach((e,t)=>{f(t,e+" ")})}catch(e){console.error("Error fetching response:",e)}return t};return(0,s.jsx)(l.Provider,{value:{loading:t,setLoading:a,resultData:c,setResultData:u,onSent:m,onSubmit:o,setOnSubmit:d},children:e.children})}},8214:function(e,t,a){a.d(t,{cn:function(){return n}});var s=a(4839),r=a(6164);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}}]);