(this.webpackJsonpy2v=this.webpackJsonpy2v||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(4),s=n(5),i=n(7),o=n(6),r=n(8),c=n(0),l=n.n(c),p=n(27),m=n.n(p),u=(n(43),n(15)),d=function(t){function e(){var t;return Object(a.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this))).state={art:[{artTitle:"do no harm",artDesc:"when you smoke on the sidewalk you are hurting all of us",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/harm.png",songTitle:"keep the streets empty for me",songArtist:"fever ray",songUri:"3TbKcmraxp8J4PvsJNRXhi",path:"harm-min.png"},{artTitle:"it's fashun, hunny",artDesc:"you woudn't understand",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_6707.png",songTitle:"evelyn",songArtist:"kim tillman",songUri:"7IxAZG49yA14FHkFADeseO",path:"IMG_6707-min.png"},{artTitle:"stoicism",artDesc:"you asked me why my voice croaks and i wince every time i try to smile so i am painting you this",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/scream.png",songTitle:"there's nothing at 4th & king but a train station",songArtist:"corpus callosum",songUri:"6woDFmBzkY9IF6XNYeFF4e",path:"scream-min.png"},{artTitle:"shame",artDesc:"wear it like a crown",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/blood1.png",songTitle:"little drop of poison",songArtist:"tom waits",songUri:"03wn5kP9qGwFHz2hpP2GrY",path:"blood1-min.png"},{artTitle:"lady macbeth",artDesc:"you'll never wash away the blood from your hands but we'll worship you anyway",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_5958.png",songTitle:"rings on her fingers",songArtist:"vudu sister",songUri:"0PtXnk3nDReF3Hipg91xZK",path:"IMG_5958-min.png"},{artTitle:"untitled",artDesc:"be careful what you wish for",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_7780.png",songTitle:"winter ghosts",songArtist:"JBM",songUri:"3c1ZxZ6Sz3xMHQRNU2OGln",path:"IMG_7780-min.png"},{artTitle:"loss",artDesc:"hide my ashes in the most beautiful canyon",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/ghosts.png",songTitle:"fourth of july",songArtist:"sufjan stevens",songUri:"4K3RZJ8sWPbv0IedcnEfw6",path:"ghosts-min.png"},{artTitle:"cul sec",artDesc:"libert\xe9, egalit\xe9, biere-et\xe9",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_1743.png",songTitle:"tous les memes",songArtist:"stromae",songUri:"1GC1MIaRMW3kfVK9VyD5Ii",path:"IMG_1743-min.png"},{artTitle:"untitled",artDesc:"bare your soul & become the sun",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_6580.png",songTitle:"broken land",songArtist:"the bones of j.r. jones",songUri:"49QhVXEB8yQW635WvWA9mT",path:"IMG_6580-min.png"},{artTitle:"saint sisters",artDesc:"sensational // sinsational",artLink:"https://github.com/AlyssaYelle/yelle-intothevoid/raw/master/y2v-frontend/public/assets/IMG_5402.png",songTitle:"yo! my saint",songArtist:"karen o",songUri:"2We0UNxKWgx4by5BVxy6P5",path:"IMG_5402-min.png"}]},t}return Object(r.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"component"},this.state.art?this.state.art.map((function(t,e){return l.a.createElement(m.a,{key:e},l.a.createElement(u.default,{key:e,info:t,imageSource:"./assets/"+t.path}))})):"")}}]),e}(c.Component);e.default=d},function(t,e,n){"use strict";n.r(e);var a=n(4),s=n(5),i=n(7),o=n(6),r=n(13),c=n(8),l=n(0),p=n.n(l),m=n(16),u=function(t){function e(){var t;return Object(a.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this))).state={isModalDisplayed:!1},t.displayModal=t.displayModal.bind(Object(r.a)(t)),t.closeModal=t.closeModal.bind(Object(r.a)(t)),t}return Object(c.a)(e,t),Object(s.a)(e,[{key:"displayModal",value:function(){this.setState({isModalDisplayed:!0})}},{key:"closeModal",value:function(){this.setState({isModalDisplayed:!1})}},{key:"render",value:function(t){return p.a.createElement("div",{className:"artImg"},this.state.isModalDisplayed?p.a.createElement(m.default,{info:this.props.info,close:this.closeModal,imageSource:this.props.imageSource}):"",p.a.createElement("img",{onClick:this.displayModal,src:n(24)("".concat(this.props.imageSource)),alt:this.props.info.artTitle,style:{cursor:"pointer"}}))}}]),e}(l.Component);e.default=u},function(t,e,n){"use strict";n.r(e);var a=n(4),s=n(5),i=n(7),o=n(6),r=n(8),c=n(0),l=n.n(c),p=(n(44),n(17)),m=function(t){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(s.a)(e,[{key:"render",value:function(t){return l.a.createElement("div",{id:"myModal",className:"modal"},l.a.createElement("span",{className:"close",onClick:this.props.close},"\xd7"),l.a.createElement("div",{className:"modal-content"},l.a.createElement("img",{className:"modal-img",id:"img01",src:n(24)("".concat(this.props.imageSource)),alt:""}),l.a.createElement("div",{id:"caption"},l.a.createElement("h3",null,this.props.info.artTitle),l.a.createElement(p.default,{uri:this.props.info.songUri,title:this.props.info.songTitle}),l.a.createElement("p",null,this.props.info.artDesc))))}}]),e}(c.Component);e.default=m},function(t,e,n){"use strict";n.r(e);var a=n(4),s=n(5),i=n(7),o=n(6),r=n(8),c=n(0),l=n.n(c),p=function(t){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(r.a)(e,t),Object(s.a)(e,[{key:"render",value:function(t){return l.a.createElement("div",null,l.a.createElement("iframe",{src:"https://open.spotify.com/embed/track/".concat(this.props.uri),title:this.props.title,width:"300",height:"80",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))}}]),e}(c.Component);e.default=p},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a);n(45);e.default=function(){return s.a.createElement("div",{className:"component"},s.a.createElement("article",null,s.a.createElement("div",{className:"portrait-here"}),s.a.createElement("div",{className:"details"},s.a.createElement("h2",null,"Hey! I'm Yelle.")),s.a.createElement("p",null,"I'm a software engineer based in Brooklyn & this is my art portfolio."),s.a.createElement("p",null,"Each piece of art is paired with a song that matches the mood I was in during the creation process. I hope you like both what you see & what you hear!")))}},,,,,,function(t,e,n){var a={"./About":18,"./About.js":18,"./Art":14,"./Art.js":14,"./ArtImg":15,"./ArtImg.js":15,"./ArtModal":16,"./ArtModal.js":16,"./Player":17,"./Player.js":17,"./assets/IMG_1743-min.png":46,"./assets/IMG_1743.png":47,"./assets/IMG_5398-min.png":48,"./assets/IMG_5398.png":49,"./assets/IMG_5402-min.png":50,"./assets/IMG_5402.png":51,"./assets/IMG_5958-min.png":52,"./assets/IMG_5958.png":53,"./assets/IMG_6463-min.png":54,"./assets/IMG_6463.png":55,"./assets/IMG_6580-min.png":56,"./assets/IMG_6580.png":57,"./assets/IMG_6707-min.png":58,"./assets/IMG_6707.png":59,"./assets/IMG_7780-min.png":60,"./assets/IMG_7780.png":61,"./assets/blood1-min.png":62,"./assets/blood1.png":63,"./assets/blood2-min.png":64,"./assets/blood2.png":65,"./assets/blood3-min.png":66,"./assets/blood3.png":67,"./assets/ghosts-min.png":68,"./assets/ghosts.png":69,"./assets/harm-min.png":70,"./assets/harm.png":71,"./assets/scream-min.png":72,"./assets/scream.png":73};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id=24},,,,,,function(t,e,n){t.exports=n(77)},,,,,function(t,e,n){},function(t,e,n){},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/IMG_1743-min.3359b3c7.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_1743.674050e7.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_5398-min.5ec168a8.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_5398.a8a439b5.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_5402-min.41661a9d.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_5402.ed98920d.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_5958-min.0dc41c65.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_5958.82e654e0.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_6463-min.8cdf21e4.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_6463.51f89e83.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_6580-min.d34fcfb8.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_6580.9d6357b3.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_6707-min.e6fc97dd.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_6707.99a17f0b.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_7780-min.579cff3f.png"},function(t,e,n){t.exports=n.p+"static/media/IMG_7780.6cde8638.png"},function(t,e,n){t.exports=n.p+"static/media/blood1-min.d56f0c84.png"},function(t,e,n){t.exports=n.p+"static/media/blood1.a4763fb7.png"},function(t,e,n){t.exports=n.p+"static/media/blood2-min.3478d273.png"},function(t,e,n){t.exports=n.p+"static/media/blood2.d23e1bfe.png"},function(t,e,n){t.exports=n.p+"static/media/blood3-min.a983f6ad.png"},function(t,e,n){t.exports=n.p+"static/media/blood3.fc11f266.png"},function(t,e,n){t.exports=n.p+"static/media/ghosts-min.84a17db9.png"},function(t,e,n){t.exports=n.p+"static/media/ghosts.6174a5c3.png"},function(t,e,n){t.exports=n.p+"static/media/harm-min.ceaa0974.png"},function(t,e,n){t.exports=n.p+"static/media/harm.7dd15d0a.png"},function(t,e,n){t.exports=n.p+"static/media/scream-min.ec197994.png"},function(t,e,n){t.exports=n.p+"static/media/scream.dcccb1f1.png"},,,,function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(26),o=n.n(i),r=(n(35),n(4)),c=n(5),l=n(7),p=n(6),m=n(8),u=n(19),d=n(10),g=(n(36),n(14)),h=n(18),f=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(u.a,{basename:"/"},s.a.createElement("header",null,s.a.createElement("h1",null,s.a.createElement("span",null,"Yelle")," into the void"),s.a.createElement("nav",null,s.a.createElement(u.b,{className:"nav-link",to:"/"},"Art"),s.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"))),s.a.createElement(d.a,{exact:!0,path:"/",component:g.default}),s.a.createElement(d.a,{path:"/about",component:h.default})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[30,1,2]]]);
//# sourceMappingURL=main.b9b2f4a4.chunk.js.map