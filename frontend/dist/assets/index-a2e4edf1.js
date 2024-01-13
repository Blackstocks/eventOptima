import{I as g}from"./index-b0417868.js";import{_,r as m,o as e,c as n,R as h,n as s,b as d,p as l,t as r,M as a,g as u,O as f,q as k,f as w,e as o}from"./index-cb420f34.js";const C={components:{Icon:g},name:"Button",props:{text:{type:String,default:""},isDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},btnClass:{type:String,default:"bg-primary-500 text-white"},icon:{type:String,default:""},iconPosition:{type:String,default:"left"},iconClass:{type:String,default:"text-[20px]"},loadingClass:{type:String,default:""},link:{type:String,default:""},div:{type:Boolean,default:!1}}},x=["disabled"],v={key:0,class:"flex items-center"},b={key:1},L=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),B=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),S=[L,B],P={key:2},z={key:0,class:"flex items-center"},V={key:1},D=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),I=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),M=[D,I],N={key:2},j={key:0,class:"flex items-center"},A={key:1},H=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),q=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),E=[H,q],F={key:2};function O(i,R,t,T,G,J){const c=m("Icon"),y=m("router-link");return e(),n(a,null,[!t.link&&!t.div?(e(),n("button",h({key:0,disabled:t.isDisabled,class:["btn inline-flex justify-center",`
    ${t.isLoading?" pointer-events-none":""}
    ${t.isDisabled?" opacity-40 cursor-not-allowed":""}
    ${t.btnClass}
    `]},i.$attrs),[!t.isLoading&&!i.$slots.default?(e(),n("span",v,[t.icon?(e(),n("span",{key:0,class:s(`
          ${t.iconPosition==="right"?"order-1 ltr:ml-2 rtl:mr-2":" "}
          ${t.text&&t.iconPosition==="left"?"ltr:mr-2 rtl:ml-2":""}
          
          ${t.iconClass}
          
          `)},[d(c,{icon:t.icon},null,8,["icon"])],2)):l("",!0),t.text?(e(),n("span",b,r(t.text),1)):l("",!0)])):l("",!0),t.isLoading?(e(),n(a,{key:1},[(e(),n("svg",{class:s(["animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5",t.loadingClass]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},S,2)),u(" Loading ... ")],64)):l("",!0),i.$slots.default&&!t.isLoading?(e(),n("div",P,[f(i.$slots,"default")])):l("",!0)],16,x)):l("",!0),t.link&&!t.div?(e(),k(y,{key:1,to:t.link,class:s(["btn inline-flex justify-center",`
    ${t.isLoading?" pointer-events-none":""}
    ${t.isDisabled?" opacity-40 cursor-not-allowed":""}
    ${t.btnClass}
    `])},{default:w(()=>[!t.isLoading&&!i.$slots.default?(e(),n("span",z,[t.icon?(e(),n("span",{key:0,class:s(`
          ${t.iconPosition==="right"?"order-1 ltr:ml-2 rtl:mr-2":" "}
          ${t.text&&t.iconPosition==="left"?"ltr:mr-2 rtl:ml-2":""}
          
          ${t.iconClass}
          
          `)},[d(c,{icon:t.icon},null,8,["icon"])],2)):l("",!0),t.text?(e(),n("span",V,r(t.text),1)):l("",!0)])):l("",!0),t.isLoading?(e(),n(a,{key:1},[(e(),n("svg",{class:s(["animate-spin -ml-1 mr-3 h-5 w-5",t.loadingClass]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},M,2)),u(" Loading ... ")],64)):l("",!0),i.$slots.default&&!t.isLoading?(e(),n("div",N,[f(i.$slots,"default")])):l("",!0)]),_:3},8,["to","class"])):l("",!0),t.div&&!t.link?(e(),n("div",{key:2,class:s(["btn inline-flex justify-center",`
    ${t.isLoading?" pointer-events-none":""}
    ${t.isDisabled?" opacity-40 cursor-not-allowed":""}
    ${t.btnClass}
    `])},[!t.isLoading&&!i.$slots.default?(e(),n("span",j,[t.icon?(e(),n("span",{key:0,class:s(`
          ${t.iconPosition==="right"?"order-1 ltr:ml-2 rtl:mr-2":" "}
          ${t.text&&t.iconPosition==="left"?"ltr:mr-2 rtl:ml-2":""}
          
          ${t.iconClass}
          
          `)},[d(c,{icon:t.icon},null,8,["icon"])],2)):l("",!0),t.text?(e(),n("span",A,r(t.text),1)):l("",!0)])):l("",!0),t.isLoading?(e(),n(a,{key:1},[(e(),n("svg",{class:s(["animate-spin -ml-1 mr-3 h-5 w-5",t.loadingClass]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},E,2)),u(" Loading ... ")],64)):l("",!0),i.$slots.default&&!t.isLoading?(e(),n("div",F,[f(i.$slots,"default")])):l("",!0)],2)):l("",!0)],64)}const U=_(C,[["render",O]]);export{U as B};
