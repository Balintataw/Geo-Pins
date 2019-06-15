(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{327:function(e,t,n){e.exports=n(599)},599:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(0),i=n.n(r),o=n(31),c=n.n(o),l=n(603),u=n(605),s=n(604),m=n(20),d=n(104),p=n.n(d),g=n(105),f=n.n(g),h=n(53),b=n.n(h),E=Object(m.createMuiTheme)({palette:{primary:{light:p.a[300],main:p.a[500],dark:p.a[700]},secondary:{light:f.a[300],main:f.a[500],dark:f.a[700]}},typography:{useNextVariants:!0}});var v=function(e){return function(t){return i.a.createElement(m.MuiThemeProvider,{theme:E},i.a.createElement(b.a,null),i.a.createElement(e,t))}},O=n(54),j=n.n(O),y=n(55),x=n.n(y),_=n(230),w=n.n(_),N=n(21),A=n.n(N),C=n(33),I=Object(r.createContext)({currentUser:null,isAuth:!1,draft:null,pins:[],currentPin:null}),P=n(56),k=n(229),S=n.n(k),D="LOGIN_USER",T="SIGNOUT_USER",L="IS_LOGGED_IN",R="CREATE_DRAFT",B="UPDATE_DRAFT_LOCATION",F="DELETE_DRAFT",M="CREATE_PIN",U="GET_PINS",z="SET_PIN",G="DELETE_PIN",Q="CREATE_COMMENT",$=Object(m.withStyles)({root:{cursor:"pointer",display:"flex"},buttonText:{color:"orange"},buttonIcon:{marginLeft:"5px",color:"orange"}})(function(e){var t=e.classes,n=Object(r.useContext)(I).dispatch,a=Object(C.unstable_useMediaQuery)("(max-width: 650px)");return i.a.createElement(P.GoogleLogout,{onLogoutSuccess:function(){n({type:T}),console.log("Signed out")},render:function(e){var n=e.onClick;return i.a.createElement("span",{className:t.root,onClick:n},i.a.createElement(A.a,{style:{display:a?"none":"block"},variant:"body1",className:t.buttonText},"Sign Out"),i.a.createElement(S.a,{className:t.buttonIcon}))}})}),W=Object(m.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1,display:"flex",alignItems:"center"},icon:{marginRight:e.spacing.unit,color:"green",fontSize:45},mobile:{display:"none"},picture:{height:"50px",borderRadius:"90%",marginRight:2*e.spacing.unit}}})(function(e){var t=e.classes,n=Object(r.useContext)(I).state,a=Object(C.unstable_useMediaQuery)("(max-width: 650px)"),o=n.currentUser;return i.a.createElement("div",{className:t.root},i.a.createElement(j.a,{position:"static"},i.a.createElement(x.a,null,i.a.createElement("div",{className:t.grow},i.a.createElement(w.a,{className:t.icon}),i.a.createElement(A.a,{className:a?t.mobile:"",component:"h1",variant:"h6",color:"inherit",noWrap:!0},"GeoPins")),o&&i.a.createElement("div",{className:t.grow},i.a.createElement("img",{className:t.picture,src:o.picture,alt:o.name}),i.a.createElement(A.a,{className:a?t.mobile:"",variant:"h5",noWrap:!0,color:"inherit"},o.name)),i.a.createElement($,null))))}),q=n(27),V=n.n(q),Y=n(34),H=n(58),X=n(68),J=n(61),K=n.n(J),Z=n(232),ee=n(72),te=n(107),ne=n(108),ae=n.n(ne);function re(){var e=Object(te.a)(["\n  subscription {\n    pinDeleted {\n      _id\n    }\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(te.a)(["\n  subscription {\n    pinUpdated {\n      _id\n      createdAt\n      title\n      content\n      image\n      latitude\n      longitude\n      author {\n        _id\n        name\n      }\n      comments {\n        text\n        createdAt\n        author {\n          name\n          picture\n        }\n      }\n    }\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(te.a)(["\n  subscription {\n    pinAdded {\n      _id\n      createdAt\n      title\n      image\n      content\n      latitude\n      longitude\n      author {\n        _id\n        name\n        email\n        picture\n      }\n      comments {\n        text\n        createdAt\n        author {\n          name\n          picture\n        }\n      }\n    }\n  }\n"]);return oe=function(){return e},e}var ce=ae()(oe()),le=ae()(ie()),ue=ae()(re()),se=n(149),me=n(233),de=n.n(me),pe=Object(m.withStyles)(function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},icon:{margin:e.spacing.unit,fontSize:"80px"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(de.a,{className:t.icon}),i.a.createElement(A.a,{noWrap:!0,component:"h2",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0},"Click on the map to add a pin"))}),ge=n(234),fe=n.n(ge),he=n(82),be=n.n(he),Ee=n(236),ve=n.n(Ee),Oe=n(235),je=n.n(Oe),ye=n(101),xe=n.n(ye),_e=n(237),we=n.n(_e),Ne=n(100),Ae="https://jossendal-geopins.herokuapp.com/graphql",Ce=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)(function(){var e=window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;i(e)},[]),new Ne.GraphQLClient(Ae,{headers:{authorization:n}})},Ie=Object(m.withStyles)(function(e){return{form:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:e.spacing.unit},contentField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:"95%"},input:{display:"none"},alignCenter:{display:"flex",alignItems:"center"},iconLarge:{fontSize:40,marginRight:e.spacing.unit},leftIcon:{fontSize:20,marginRight:e.spacing.unit},rightIcon:{fontSize:20,marginLeft:e.spacing.unit},button:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,marginRight:e.spacing.unit,marginLeft:0}}})(function(e){var t=e.classes,n=Ce(),o=Object(C.unstable_useMediaQuery)("(max-width: 650px)"),c=Object(r.useContext)(I),l=c.state,u=c.dispatch,s=Object(r.useState)(""),m=Object(a.a)(s,2),d=m[0],p=m[1],g=Object(r.useState)(""),f=Object(a.a)(g,2),h=f[0],b=f[1],E=Object(r.useState)(""),v=Object(a.a)(E,2),O=v[0],j=v[1],y=Object(r.useState)(!1),x=Object(a.a)(y,2),_=x[0],w=x[1],N=function(){p(""),b(""),j(""),u({type:F})},P=function(){var e=Object(Y.a)(V.a.mark(function e(t){var a,r,i,o,c;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),e.prev=2,e.next=5,k();case 5:return a=e.sent,r=l.draft,i=r.latitude,o=r.longitude,c={title:d,image:a,content:O,latitude:i,longitude:o},e.next=10,n.request("\n    mutation($title: String!, $image: String!, $content: String!, $latitude: Float!, $longitude: Float!) {\n        createPin(input: {\n            title: $title,\n            image: $image,\n            content: $content,\n            latitude: $latitude,\n            longitude: $longitude\n        }) {\n            _id\n            createdAt\n            title\n            image\n            content\n            latitude\n            longitude\n            author {\n                _id\n                name\n                email\n                picture\n            }\n        }\n    }\n",c);case 10:N(),e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(2),w(!1),new Error("Error creating pin: ".concat(e.t0));case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(Y.a)(V.a.mark(function e(){var t,n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",h),t.append("upload_preset","geopins_default"),t.append("cloud_name","jossendal-development"),t.append("folder","geopins"),e.prev=5,e.next=8,fe.a.post("https://api.cloudinary.com/v1_1/jossendal-development/image/upload",t);case 8:return n=e.sent,e.abrupt("return",n.data.url);case 12:throw e.prev=12,e.t0=e.catch(5),new Error("Error uploading image: ".concat(e.t0));case 15:case"end":return e.stop()}},e,null,[[5,12]])}));return function(){return e.apply(this,arguments)}}();return i.a.createElement("form",{className:t.form},i.a.createElement(A.a,{className:t.alignCenter,component:"h2",variant:"h4",color:"secondary"},i.a.createElement(je.a,{className:t.iconLarge})," Pin a location"),i.a.createElement("div",null,i.a.createElement(be.a,{name:"title",label:"Title",placeholder:"Insert Pin title",onChange:function(e){return p(e.target.value)}}),i.a.createElement("input",{accept:"image/*",id:"image",type:"file",className:t.input,onChange:function(e){return b(e.target.files[0])}}),i.a.createElement("label",{htmlFor:"image"},i.a.createElement(K.a,{component:"span",style:{color:h&&"green"},size:"small",className:t.button},i.a.createElement(ve.a,null)))),i.a.createElement("div",{className:t.contentField},i.a.createElement(be.a,{name:"content",label:"Content",multiline:!0,rows:o?"3":"6",margin:"normal",fullWidth:!0,variant:"outlined",onChange:function(e){return j(e.target.value)}})),i.a.createElement("div",null,i.a.createElement(K.a,{onClick:N,className:t.button,variant:"contained",color:"primary"},i.a.createElement(xe.a,{className:t.leftIcon}),"Discard"),i.a.createElement(K.a,{onClick:P,disabled:!d.trim()||!h||!O.trim()||_,className:t.button,variant:"contained",color:"secondary"},"Submit",i.a.createElement(we.a,{className:t.rightIcon}))))}),Pe=n(240),ke=n.n(Pe),Se=n(239),De=n.n(Se),Te=n(147),Le=n.n(Te),Re=n(65),Be=n.n(Re),Fe=n(83),Me=n.n(Fe),Ue=n(238),ze=n.n(Ue),Ge=n(93),Qe=n.n(Ge),$e=Object(m.withStyles)(function(e){return{form:{display:"flex",alignItems:"center"},input:{marginLeft:8,flex:1},clearButton:{padding:0,color:"red"},sendButton:{padding:5,color:e.palette.secondary.dark}}})(function(e){var t=e.classes,n=Ce(),o=Object(r.useState)(""),c=Object(a.a)(o,2),l=c[0],u=c[1],s=Object(r.useContext)(I).state,m=function(){var e=Object(Y.a)(V.a.mark(function e(){var t;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={pinId:s.currentPin._id,text:l},e.next=3,n.request("\n    mutation($pinId: ID!, $text: String!) {\n        createComment(pinId: $pinId, text: $text) {\n            _id\n            createdAt\n            title\n            content\n            image\n            latitude\n            longitude\n            author {\n                _id\n                name\n            }\n            comments {\n                text\n                createdAt\n                author {\n                    name\n                    picture\n                }\n            }\n        }\n    }\n",t);case 3:u("");case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:t.form},i.a.createElement(Me.a,{className:t.clearButton,onClick:function(){return u("")},disabled:!l.trim()},i.a.createElement(xe.a,null)),i.a.createElement(Be.a,{className:t.input,placeholder:"Add Comment",value:l,onChange:function(e){return u(e.target.value)},multiline:!0}),i.a.createElement(Me.a,{className:t.sendButton,onClick:m,disabled:!l.trim()},i.a.createElement(ze.a,{size:"10px"}))),i.a.createElement(Qe.a,null))}),We=n(81),qe=n.n(We),Ve=n(94),Ye=n.n(Ve),He=n(97),Xe=n.n(He),Je=n(95),Ke=n.n(Je),Ze=n(96),et=n.n(Ze),tt=n(148),nt=n.n(tt),at=Object(m.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})(function(e){var t=e.classes,n=e.comments;return i.a.createElement(qe.a,{className:t.root},n.map(function(e,n){return i.a.createElement(Ye.a,{key:n,alignItems:"flex-start"},i.a.createElement(Ke.a,null,i.a.createElement(et.a,{src:e.author.picture,alt:e.author.name})),i.a.createElement(Xe.a,{primary:e.text,secondary:i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{className:t.inline,component:"span",color:"textPrimary"},e.author.name),"\xb7 ",nt()(+e.createdAt,"MMM Do"))}))}))}),rt=Object(m.withStyles)(function(e){return{root:{padding:"1em 0.5em",textAlign:"center",width:"100%"},icon:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},text:{display:"flex",alignItems:"center",justifyContent:"center"}}})(function(e){var t=e.classes,n=Object(r.useContext)(I).state.currentPin,a=n.title,o=n.content,c=n.author,l=n.createdAt,u=n.comments;return i.a.createElement("div",{className:t.root},i.a.createElement(A.a,{component:"h2",variant:"h4",color:"primary",gutterBottom:!0},a),i.a.createElement(A.a,{className:t.text,component:"h3",variant:"h6",color:"inherit",gutterBottom:!0},i.a.createElement(De.a,{className:t.icon})," ",c.name),i.a.createElement(A.a,{className:t.text,variant:"subtitle2",color:"inherit",gutterBottom:!0},i.a.createElement(ke.a,{className:t.icon}),Le()(+l,{addSuffix:!0})),i.a.createElement(A.a,{className:t.text,variant:"subtitle1",gutterBottom:!0},o),i.a.createElement($e,null),i.a.createElement(at,{comments:u}))}),it=Object(m.withStyles)({root:{minWidth:350,maxWidth:400,maxHeight:"calc(100vh - 64px)",overflowY:"scroll",display:"flex",justifyContent:"center"},rootMobile:{maxWidth:"100%",maxHeight:300,overflowX:"hidden",overflowY:"scroll"}})(function(e){var t,n=e.classes,a=Object(r.useContext)(I).state,o=Object(C.unstable_useMediaQuery)("(max-width: 650px)"),c=a.draft,l=a.currentPin;return c||l?c&&!l?t=Ie:!c&&l&&(t=rt):t=pe,i.a.createElement(se.a,{className:o?n.rootMobile:n.root},i.a.createElement(t,null))}),ot=n(241),ct=n(242),lt=n(250),ut=n(243),st=n(252),mt=function(e){function t(){return Object(ot.a)(this,t),Object(lt.a)(this,Object(ut.a)(t).apply(this,arguments))}return Object(st.a)(t,e),Object(ct.a)(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=void 0===t?20:t,a=e.onClick,r=e.color;return i.a.createElement(i.a.Fragment,null,i.a.createElement("svg",{width:n,height:n,viewBox:"-16 -18 64 64",onClick:a},i.a.createElement("path",{fill:"rgba(0,0,0,.2)",stroke:"none",transform:"translate(-2,48) scale(1,0.5) rotate(40) translate(0,-46)",d:"M0,47 Q0,28 10,15 A15,15 0,1,0 -10,15 Q0,28 0,47"}),i.a.createElement("path",{fill:r,stroke:"black",strokeWidth:"1",d:"M0,47 Q0,28 10,15 A15,15 0,1,0 -10,15 Q0,28 0,47"}),i.a.createElement("circle",{cx:"0",cy:"4",r:"4",fill:"black",stroke:"none"})))}}]),t}(r.PureComponent),dt=n(244),pt={latitude:36.1577,longitude:-115.1376,zoom:10},gt=Object(m.withStyles)({root:{display:"flex"},rootMobile:{display:"flex",flexDirection:"column-reverse"},navigationControl:{position:"absolute",top:0,left:0,margin:"1em"},deleteIcon:{color:"red"},popupImage:{padding:"0.4em",height:200,width:200,objectFit:"cover"},popupTab:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}})(function(e){var t=e.classes,n=Ce(),o=Object(C.unstable_useMediaQuery)("(max-width: 650px)"),c=Object(r.useContext)(I),l=c.state,u=c.dispatch;Object(r.useEffect)(function(){x()},[]);var s=Object(r.useState)(pt),m=Object(a.a)(s,2),d=m[0],p=m[1],g=Object(r.useState)(null),f=Object(a.a)(g,2),h=f[0],b=f[1];Object(r.useEffect)(function(){y()},[]);var E=Object(r.useState)(null),v=Object(a.a)(E,2),O=v[0],j=v[1];Object(r.useEffect)(function(){O&&l.pins.findIndex(function(e){return e._id===O._id})>-1||j(null)},[l.pins.length]);var y=function(){"geolocation"in navigator&&window.navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,a=t.longitude;p(Object(H.a)({},d,{latitude:n,longitude:a,zoom:13})),b({latitude:n,longitude:a})})},x=function(){var e=Object(Y.a)(V.a.mark(function e(){var t,a;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.request("\n{\n    getPins {\n        _id\n        createdAt\n        title\n        image\n        content\n        latitude\n        longitude\n        author {\n            _id\n            name\n            email\n            picture\n        }\n        comments {\n            text\n            createdAt\n            author {\n                _id\n                name\n                picture\n            }\n        }\n    }\n}\n");case 2:t=e.sent,a=t.getPins,console.log("PINS",a),u({type:U,payload:a});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(e){return Object(dt.differenceInHours)(Date.now(),+e.createdAt)>=1?"black":"blue"},w=function(){var e=Object(Y.a)(V.a.mark(function e(t){var a;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={pinId:t._id},e.next=4,n.request("\n    mutation($pinId: ID!) {\n        deletePin(pinId: $pinId) {\n            _id\n        }\n    }\n",a);case 4:j(null),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error deleting pin:",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:o?t.rootMobile:t.root},i.a.createElement(X.d,Object.assign({mapboxApiAccessToken:"pk.eyJ1Ijoiam9zc2VuZGFsIiwiYSI6ImNqd3V1dm1uYjAxdWc0NHFuaDNxYjdzOXcifQ.b2MnsKjRAYAA4V_noPXleQ",width:"100vw",height:"calc(100vh - 64px)",mapStyle:"mapbox://styles/mapbox/streets-v9",onViewportChange:function(e){return p(e)},onClick:function(e){var t=e.lngLat;if(e.leftButton){l.draft||u({type:R});var n=Object(a.a)(t,2),r=n[0],i=n[1];u({type:B,payload:{latitude:i,longitude:r}})}},scrollZoom:!o},d),i.a.createElement("div",{className:t.navigationControl},i.a.createElement(X.b,{onViewportChange:function(e){return p(e)}})),h&&i.a.createElement(X.a,{latitude:h.latitude,longitude:h.longitude,offsetLeft:-5,offsetTop:-28},i.a.createElement(mt,{color:"rgba(255,0,0,0.7",size:30})),l.draft&&i.a.createElement(X.a,{latitude:l.draft.latitude,longitude:l.draft.longitude,draggable:!0,onDragStart:function(e){},onDrag:function(e){},onDragEnd:function(e){var t=e.lngLat,n=Object(a.a)(t,2),r=n[0],i=n[1];u({type:B,payload:{latitude:i,longitude:r}})},offsetLeft:-5,offsetTop:-28},i.a.createElement(mt,{color:"hotpink",size:25})),l.pins.length>0&&l.pins.map(function(e){return i.a.createElement(X.a,{key:e._id,latitude:e.latitude,longitude:e.longitude,offsetLeft:-5,offsetTop:-28},i.a.createElement(mt,{onClick:function(){return function(e){j(e),u({type:z,payload:e})}(e)},size:25,color:_(e)}))}),O&&i.a.createElement(X.c,{anchor:"top",latitude:O.latitude,longitude:O.longitude,closeOnClick:!1,onClose:function(){return j(null)}},i.a.createElement("img",{className:t.popupImage,src:O.image,alt:O.title}),i.a.createElement("div",{className:t.popupTab},i.a.createElement(A.a,null,O.latitude.toFixed(6),", ",O.longitude.toFixed(6)),l.currentUser._id===O.author._id&&i.a.createElement(K.a,{onClick:function(){return w(O)}},i.a.createElement(Z.a,{icon:"trash-alt",className:t.deleteIcon}))))),i.a.createElement(ee.b,{subscription:ce,onSubscriptionData:function(e){var t=e.subscriptionData.data.pinAdded;console.log("PIN ADDED",{pinAdded:t}),u({type:M,payload:t})}}),i.a.createElement(ee.b,{subscription:le,onSubscriptionData:function(e){var t=e.subscriptionData.data.pinUpdated;console.log("PIN UPDATED",{pinUpdated:t}),u({type:Q,payload:t})}}),i.a.createElement(ee.b,{subscription:ue,onSubscriptionData:function(e){var t=e.subscriptionData.data.pinDeleted;console.log("PIN DELETED",{pinDeleted:t}),u({type:G,payload:t})}}),i.a.createElement(it,null))}),ft=v(function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(W,null),i.a.createElement(gt,null))}),ht=n(602),bt=Object(m.withStyles)({root:{height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}})(function(e){var t=e.classes;console.log("BASE_URL_LOGIN",Ae);var n=Object(r.useContext)(I).dispatch,a=function(){var e=Object(Y.a)(V.a.mark(function e(t){var a,r,i,c;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.getAuthResponse().id_token,r=new Ne.GraphQLClient(Ae,{headers:{authorization:a}}),e.next=5,r.request("\n{\n    me {\n        _id\n        name\n        email\n        picture\n    }\n}");case 5:i=e.sent,c=i.me,n({type:D,payload:c}),n({type:L,payload:t.isSignedIn()}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),o(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),o=function(e){console.error("Error logging in: ".concat(JSON.stringify(e))),n({type:L,payload:!1})};return i.a.createElement("div",{className:t.root},i.a.createElement(A.a,{component:"h1",variant:"h3",gutterBottom:!0,noWrap:!0,style:{color:"rgb(66, 133, 244)"}},"Welcome"),i.a.createElement(P.GoogleLogin,{clientId:"24306163231-25c71dn3o0g22rfg9vr3r85finier0nu.apps.googleusercontent.com",onSuccess:a,onFailure:o,buttonText:"Login with Google",isSignedIn:!0,theme:"dark"}))}),Et=function(){return Object(r.useContext)(I).state.isAuth?i.a.createElement(ht.a,{to:"/"}):i.a.createElement(bt,null)},vt=n(249);function Ot(e,t){switch(t.type){case D:return Object(H.a)({},e,{currentUser:t.payload});case L:return Object(H.a)({},e,{isAuth:t.payload});case T:return Object(H.a)({},e,{currentUser:null,isAuth:!1});case R:return Object(H.a)({},e,{currentPin:null,draft:{latitude:0,longitude:0}});case B:return Object(H.a)({},e,{draft:{latitude:t.payload.latitude,longitude:t.payload.longitude}});case F:return Object(H.a)({},e,{draft:null});case U:return Object(H.a)({},e,{pins:t.payload});case M:var n=t.payload,a=e.pins.filter(function(e){return e._id!==n._id});return Object(H.a)({},e,{pins:[].concat(Object(vt.a)(a),[n])});case z:return Object(H.a)({},e,{currentPin:t.payload,draft:null});case G:var r=t.payload,i=e.pins.filter(function(e){return e._id!==r._id});if(e.currentPin)if(r._id===e.currentPin._id)return Object(H.a)({},e,{pins:i,currentPin:null});return Object(H.a)({},e,{pins:i});case Q:var o=t.payload,c=e.pins.map(function(e){return e._id===o._id?o:e});return Object(H.a)({},e,{pins:c,currentPin:o});default:return e}}var jt=n(251),yt=function(e){var t=e.component,n=Object(jt.a)(e,["component"]),a=Object(r.useContext)(I).state;return i.a.createElement(s.a,Object.assign({render:function(e){return a.isAuth?i.a.createElement(t,e):i.a.createElement(ht.a,{to:"/login"})}},n))},xt=n(84),_t=n(152);xt.b.add(_t.a,_t.b);n(589),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var wt=n(73),Nt=n(247),At=n(248);console.log("ENV",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_OAUTH_CLIENT_ID:"24306163231-25c71dn3o0g22rfg9vr3r85finier0nu.apps.googleusercontent.com",REACT_APP_MAPBOX_PUBLIC_TOKEN:"pk.eyJ1Ijoiam9zc2VuZGFsIiwiYSI6ImNqd3V1dm1uYjAxdWc0NHFuaDNxYjdzOXcifQ.b2MnsKjRAYAA4V_noPXleQ",REACT_APP_GRAPHQL_ENDPOINT_DEV:"http://localhost:4000/graphql",REACT_APP_APOLLO_WEBSOCKET_URL_DEV:"ws://localhost:4000/graphql",REACT_APP_GRAPHQL_ENDPOINT_PROD:"https://jossendal-geopins.herokuapp.com/graphql",REACT_APP_APOLLO_WEBSOCKET_URL_PROD:"wss://jossendal-geopins.herokuapp.com/graphql"}));var Ct=new Nt.a({uri:"wss://jossendal-geopins.herokuapp.com/graphql",options:{reconnect:!0}}),It=new wt.a({link:Ct,cache:new At.a});c.a.render(i.a.createElement(function(){var e=Object(r.useContext)(I),t=Object(r.useReducer)(Ot,e),n=Object(a.a)(t,2),o=n[0],c=n[1];return i.a.createElement(l.a,null,i.a.createElement(ee.a,{client:It},i.a.createElement(I.Provider,{value:{state:o,dispatch:c}},i.a.createElement(u.a,null,i.a.createElement(yt,{exact:!0,path:"/",component:ft}),i.a.createElement(s.a,{path:"/login",component:Et})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[327,2,1]]]);
//# sourceMappingURL=main.ab8bcfc1.chunk.js.map