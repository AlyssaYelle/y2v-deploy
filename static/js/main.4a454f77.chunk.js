(this.webpackJsonpy2v=this.webpackJsonpy2v||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(20),o=a.n(i),r=(a(28),a(4)),l=a(5),c=a(7),u=a(6),m=a(8),h=a(14),p=a(10),d=(a(29),a(30),a(13)),y=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return s.a.createElement("div",null,s.a.createElement("iframe",{src:"https://open.spotify.com/embed/track/".concat(this.props.uri),title:this.props.title,width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))}}]),t}(n.Component)),g=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){return s.a.createElement("div",{id:"myModal",className:"modal"},s.a.createElement("span",{className:"close",onClick:this.props.close},"\xd7"),s.a.createElement("div",{className:"modal-content"},s.a.createElement("img",{className:"modal-img",id:"img01",src:this.props.info.artLink,alt:""}),s.a.createElement("div",{id:"caption"},s.a.createElement("h3",null,this.props.info.artTitle),s.a.createElement(y,{uri:this.props.info.songUri,title:this.props.info.songTitle}),s.a.createElement("p",null,this.props.info.artDesc))))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={isModalDisplayed:!1},e.displayModal=e.displayModal.bind(Object(d.a)(e)),e.closeModal=e.closeModal.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"displayModal",value:function(){this.setState({isModalDisplayed:!0})}},{key:"closeModal",value:function(){this.setState({isModalDisplayed:!1})}},{key:"render",value:function(e){return s.a.createElement("div",{className:"artImg"},this.state.isModalDisplayed?s.a.createElement(g,{info:this.props.info,close:this.closeModal}):"",s.a.createElement("img",{onClick:this.displayModal,src:this.props.info.artLink,alt:this.props.info.artTitle,style:{cursor:"pointer"}}))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={art:[{artTitle:"do no harm",artDesc:"when you smoke on the sidewalk you are hurting all of us",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/harm.png",songTitle:"keep the streets empty for me",songArtist:"fever ray",songUri:"3TbKcmraxp8J4PvsJNRXhi"},{artTitle:"it's fashun, hunny",artDesc:"you woudn't understand",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_6707.png",songTitle:"evelyn",songArtist:"kim tillman",songUri:"7IxAZG49yA14FHkFADeseO"},{artTitle:"stoicism",artDesc:"you asked me why my voice croaks and i wince every time i try to smile so i am painting you this",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/scream.png",songTitle:"there's nothing at 4th & king but a train station",songArtist:"corpus callosum",songUri:"6woDFmBzkY9IF6XNYeFF4e"},{artTitle:"shame",artDesc:"wear it like a crown",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/blood1.png",songTitle:"little drop of poison",songArtist:"tom waits",songUri:"03wn5kP9qGwFHz2hpP2GrY"},{artTitle:"lady macbeth",artDesc:"you'll never wash away the blood from your hands but we'll worship you anyway",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_5958.png",songTitle:"rings on her fingers",songArtist:"vudu sister",songUri:"0PtXnk3nDReF3Hipg91xZK"},{artTitle:"untitled",artDesc:"be careful what you wish for",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_7780.png",songTitle:"winter ghosts",songArtist:"JBM",songUri:"3c1ZxZ6Sz3xMHQRNU2OGln"},{artTitle:"loss",artDesc:"for jeffrey, forever ago",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/ghosts.png",songTitle:"fourth of july",songArtist:"sufjan stevens",songUri:"4K3RZJ8sWPbv0IedcnEfw6"},{artTitle:"cul sec",artDesc:"libert\xe9, egalit\xe9, biere-et\xe9",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_1743.png",songTitle:"tous les memes",songArtist:"stromae",songUri:"1GC1MIaRMW3kfVK9VyD5Ii"},{artTitle:"untitled",artDesc:"bare your soul & become the sun",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_6580.png",songTitle:"broken land",songArtist:"the bones of j.r. jones",songUri:"49QhVXEB8yQW635WvWA9mT"},{artTitle:"saint sisters",artDesc:"sensational // sinsational",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_5402.png",songTitle:"yo! my saint",songArtist:"karen o",songUri:"2We0UNxKWgx4by5BVxy6P5"}]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"component"},this.state.art?this.state.art.map((function(e,t){return s.a.createElement(b,{key:t,info:e})})):"")}}]),t}(n.Component);a(32);var v=function(){return s.a.createElement("div",{className:"component"},s.a.createElement("article",null,s.a.createElement("div",{className:"portrait-here"}),s.a.createElement("div",{className:"details"},s.a.createElement("h2",null,"Hey! I'm Yelle.")),s.a.createElement("p",null,"I'm a software engineer based in Brooklyn & this is my art portfolio."),s.a.createElement("p",null,"Each piece of art is paired with a song that matches the mood I was in during the creation process. I hope you like both what you see & what you hear!")))},k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h.a,null,s.a.createElement("header",null,s.a.createElement("h1",null,s.a.createElement("span",null,"Yelle")," into the void"),s.a.createElement("nav",null,s.a.createElement(h.b,{className:"nav-link",to:"/y2v-deploy/"},"Art"),s.a.createElement(h.b,{className:"nav-link",to:"/about"},"About"))),s.a.createElement(p.a,{exact:!0,path:"/",component:f}),s.a.createElement(p.a,{path:"/about",component:v})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4a454f77.chunk.js.map