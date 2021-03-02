(this.webpackJsonpreact_chat_app=this.webpackJsonpreact_chat_app||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(16),n=a.n(c),r=a(13),i=a(8),l=a(9),o=a(104),u=a(105),j=a(1),m=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=e.chatId,m=e.creds,d=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(i.n)(m,r,{text:t}),n("")};return Object(j.jsxs)("form",{className:"message-form",onSubmit:d,children:[Object(j.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(i.k)(e,r)},onSubmit:d}),Object(j.jsx)("label",{htmlFor:"upload-button",children:Object(j.jsx)("span",{className:"image-button",children:Object(j.jsx)(o.a,{className:"picture-icon"})})}),Object(j.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(i.n)(m,r,{files:e.target.files,text:""})}.bind(undefined)}),Object(j.jsx)("button",{type:"submit",className:"send-button",children:Object(j.jsx)(u.a,{className:"send-icon"})})]})},d=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?Object(j.jsx)("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(j.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:t.text})},b=function(e){var t=e.lastMessage,a=e.message,s=!t||t.sender.username!==a.sender.username;return Object(j.jsxs)("div",{className:"message-row",children:[s&&Object(j.jsx)("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?Object(j.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:s?"4px":"48px"}}):Object(j.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:s?"4px":"48px"},children:a.text})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],i=function(e,t){return n.people.map((function(a,s){return a.last_read===e.id&&Object(j.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(s))}))};return n?Object(j.jsxs)("div",{className:"chat-feed",children:[Object(j.jsxs)("div",{className:"chat-title-container",children:[Object(j.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(j.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],l=s===n.sender.username;return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)("div",{className:"message-block",children:l?Object(j.jsx)(d,{message:n}):Object(j.jsx)(b,{message:n,lastMessage:c[r]})}),Object(j.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?"0px":"68px"},children:i(n,l)})]},"msg_".concat(a))}))}(),Object(j.jsx)("div",{style:{height:"100px"}}),Object(j.jsx)("div",{className:"message-form-container",children:Object(j.jsx)(m,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):Object(j.jsx)("div",{})},p=a(23),g=a.n(p),x=a(47),O=a(4),f=a.n(O),v=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],u=Object(s.useState)(""),m=Object(l.a)(u,2),d=m[0],b=m[1],h=function(){var e=Object(x.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"1b7801d6-8a66-4be4-a442-89219d833dfc","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,f.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Oops, incorrect credentials.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{className:"title",children:"Chat Application"}),Object(j.jsxs)("form",{onSubmit:h,children:[Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(j.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(j.jsx)("div",{align:"center",children:Object(j.jsx)("button",{type:"submit",className:"button",children:Object(j.jsx)("span",{children:"Start chatting"})})})]}),Object(j.jsx)("h1",{children:d})]})})},N=(a(101),function(){return localStorage.getItem("username")?Object(j.jsx)(i.c,{height:"100vh",projectID:"6be35fa6-d7fe-4b29-9072-2287106f30be",userName:"userOne",userSecret:"123456",renderChatFeed:function(e){return Object(j.jsx)(h,Object(r.a)({},e))},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):Object(j.jsx)(v,{})});n.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.17ece35b.chunk.js.map