var __awaiter=this&&this.__awaiter||function(n,t,e,o){return new(e||(e=Promise))(function(r,i){function a(n){try{l(o.next(n))}catch(n){i(n)}}function u(n){try{l(o.throw(n))}catch(n){i(n)}}function l(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e(function(n){n(t)})).then(a,u)}l((o=o.apply(n,t||[])).next())})},__generator=this&&this.__generator||function(n,t){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(l){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(e=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,o=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){a.label=u[1];break}if(6===u[0]&&a.label<r[1]){a.label=r[1],r=u;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(u);break}r[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(n,a)}catch(n){u=[6,n],o=0}finally{e=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}},__LUONUTT_DEFAULTS={USERNAME:"ArnavK-09",AVATAR:"https://avatars.githubusercontent.com/u/69188140?v=4",BIO:"lorem ipsum",DEMO_IMG:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},__LUONUTT_ICONS={url:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>'},__LUONUTT_widgetPopupOverview=function(n,t,e){return void 0===t&&(t=__LUONUTT_DEFAULTS.AVATAR),'\n \x3c!-- LUONUTT POPUP PROFILE OVERVIEW START --\x3e\n <div id="__luonutt_cross_btn">\n X\n </div>\n   <div class="__luonutt_overview_upper __luonutt_select_none">\n     <img\n       id="__luonutt_popup_img"\n       class="__luonutt_popup_avatar"\n       src="'.concat(t,'"\n       alt="').concat(n,'"\n       draggable="false"\n     />\n     <p>\n       This project is made by\n     </p>\n     <h3>\n       @ArnavK-09\n     </h3>\n   </div>\n   ').concat(e?'\n   <div class="__luonutt_popup_txt_w_icon">\n   <svg\n     xmlns="http://www.w3.org/2000/svg"\n     fill="none"\n     viewBox="0 0 24 24"\n     stroke-width="2.5"\n     stroke="currentColor"\n   >\n     <path\n       stroke-linecap="round"\n       stroke-linejoin="round"\n       d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"\n     />\n     <path\n       stroke-linecap="round"\n       stroke-linejoin="round"\n       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"\n     />\n   </svg>\n   '.concat(e,"\n </div>\n   "):"",'\n   <hr class="__luonutt_hr" />\n </div>\n \x3c!-- LUONUTT POPUP PROFILE OVERVIEW END --\x3e\n ')},__LUONUTT_widgetPopupBio=function(n){return'\x3c!-- LUONUTT BIO START --\x3e\n  <div class="__luonutt_bio">\n    <details class="__luonutt_popup_details" open>\n      <summary><strong>Bio:-</strong></summary>\n      <p>\n        '.concat(n,"\n      </p>\n    </details>\n  </div>\n  \x3c!-- LUONUTT BIO END --\x3e\n  ")},__LUONUTT_widgetPopupLinks=function(n){return'\x3c!-- LUONUTT LINKS START --\x3e\n  <div class="__luonutt_popup_desc">\n    <details id="__luonutt_links" class="__luonutt_popup_details">\n      <summary><strong>Links:-</strong></summary>\n      <ul>\n        '.concat(n.map(function(n){var t,e;return"<li><span>".concat(null!==(t=n.svg)&&void 0!==t?t:__LUONUTT_ICONS.url,'</span><a href="').concat(n.href,'" target="_blank">').concat(null!==(e=n.title)&&void 0!==e?e:n.href,"</a></li>")}),"\n      </ul>\n    </details>\n  </div>\n  \x3c!-- LUONUTT LINKS END --\x3e")},__LUONUTT_widgetPopupProjects=function(n){return'\n  \x3c!-- LUONUTT PROJECTS START --\x3e\n  <div class="__luonutt_popup_desc">\n  <details class="__luonutt_popup_details" open>\n    <summary><strong>My Projects:-</strong></summary>\n    <div id="__luonutt_projects" class="__luonutt_noscrollbar">\n    '.concat(n.map(function(n,t){var e;return'\n      <div class="__luonutt_select_none" style="min-width: 90%;">\n        <a href="'.concat(n.url,'" target="_blank" aria-label="open project #').concat(t,'">\n          <article class="__luonutt_project_card">\n            <img\n              alt="Project #').concat(t,'"\n              src="').concat(n.img,'"\n              loading="lazy"\n            />\n            <div>\n              <p>').concat(null!==(e=n.heading)&&void 0!==e?e:"My Project #".concat(t),"</p>\n            </div>\n          </article>\n        </a>\n      </div>\n      ")}).join(""),"\n    </div>\n  </details>\n  </div>\n  \x3c!-- LUONUTT PROJECTS END --\x3e\n")},__LUONUTT_PopupTriggerBtn=function(n,t){return'\n  <section aria-label="open-luonutt-widget" id="__luonutt_popup_trigger_btn">\n  <img src="'.concat(null!=t?t:__LUONUTT_DEFAULTS.AVATAR,'" alt="').concat(n,'" />\n  <p>').concat(n,"</p></section>\n  ")},__LUONUTT_Popup=function(n){return'\n  <aside class="__luonutt_noscrollbar" id="__luonutt_popup">\n  '.concat(__LUONUTT_widgetPopupOverview(__LUONUTT_DEFAULTS.USERNAME,__LUONUTT_DEFAULTS.AVATAR,"India"),"\n  ").concat(__LUONUTT_widgetPopupBio("Lorem Ipsum"),"\n  ").concat(__LUONUTT_widgetPopupLinks([{href:"//github.com/"+__LUONUTT_DEFAULTS.USERNAME,title:"Github @"+__LUONUTT_DEFAULTS.USERNAME}]),"\n  ").concat(__LUONUTT_widgetPopupProjects([{img:__LUONUTT_DEFAULTS.DEMO_IMG,url:"github.com"},{img:__LUONUTT_DEFAULTS.DEMO_IMG,url:"github.com"},{img:__LUONUTT_DEFAULTS.DEMO_IMG,url:"github.com"}]),"\n  </aside>\n  ")},__LUONUTT_Styles=function(){return"\n  /* Popup styles */\n  #__luonutt_popup {\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    overflow-x: hidden;\n    padding: 1rem;\n    height: 32rem;\n    width: 16rem;\n    overflow-wrap: break-word;\n    border-radius: 0.7rem 0.7rem 0 0;\n    margin-left: 0.2rem;\n    background-color: #000000;\n    position: fixed;\n    bottom: 0rem;\n    z-index: 60;\n    color: white;\n    transform: translateY(130%);\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  \n  .__luonutt_popup_open {\n    transition: 0.4s !important;\n    transition-timing-function: ease-out !important;\n    transform: translateY(0) !important;\n  }\n  \n  #__luonutt_cross_btn {\n    cursor: pointer;\n    margin-top: -0.25rem;\n    font-weight: 700;\n    text-align: right;\n  }\n  \n  /* Popup trigger btn */\n  #__luonutt_popup_trigger_btn {\n    display: inline-flex;\n    position: fixed;\n    bottom: 0rem;\n    z-index: 50;\n    padding: 0.3rem 0.55rem;\n    left: 1rem;\n    border-radius: 10px 10px 0 0;\n    color: #ffffff;\n    background-color: #000000;\n    cursor: pointer;\n    user-select: none;\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    transition-property: background-color, border-color, color, fill, stroke,\n      opacity, box-shadow, transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 500ms;\n    p {\n      font-size: 12px; \n      font-weight: 700; \n      letter-spacing: 0.025em;\n      line-height: 0px;\n      text-overflow: ellipsis;\n    }\n    img {\n      aspect-ratio: 1 / 1;\n      border-radius: 9999px;\n      height: 24px;\n      margin-right: 0.5rem;\n    }\n  }\n  \n  #__luonutt_popup_trigger_btn:hover {\n    border-bottom-right-radius: 0.2rem;\n    border-bottom-left-radius: 0.2rem;\n  }\n  \n  \n  .__luonutt_popup_details > summary {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.975rem;\n    opacity: 0.9;\n    font-weight: 500;\n    margin-top: 1rem;\n    margin-bottom: 0.5rem;\n    text-align: left;\n    text-decoration: underline;\n    text-underline-offset: 4px;\n  }\n  \n  .__luonutt_popup_desc {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n  \n  .__luonutt_popup_avatar {\n    margin-bottom: 0.3rem;\n    aspect-ratio: 1 / 1;\n    border-radius: 9999px;\n    height: fit-content;\n    margin-right: 0.5rem;\n  }\n  \n  .__luonutt_popup_txt_w_icon {\n    opacity: 0.8;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 0.8em;\n    align-items: center;\n    height: fit-content;\n    text-align: center;\n    vertical-align: middle;\n    svg {\n      width: 0.9rem;\n      height: 0.9rem;\n      margin-right: 0.1rem;\n    }\n  }\n  \n  .__luonutt_bio {\n    margin-top: 0.5rem;\n  }\n  \n  .__luonutt_bio > details > p {\n    user-select: none;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    margin-top: 0.55rem;\n    font-weight: 400;\n    letter-spacing: 0.005em;\n    overflow-wrap: break-word;\n    opacity: 0.9;\n    text-decoration: none;\n  }\n  \n  #__luonutt_links {\n    ul {\n      user-select: none;\n      width: 100%;\n      margin-top: 1rem;\n    }\n    li {\n      display: flex;\n      align-items: left;\n      text-align: left;\n      height: fit-content;\n    }\n    svg {\n      width: 1rem;\n      height: 1rem;\n    }\n    a {\n      font-weight: 425;\n      font-size: 0.9rem;\n      line-height: 1.25rem;\n      color: white;\n      filter: brightness(125);\n      text-decoration: none;\n    }\n    span {\n      margin-right: 0.25rem;\n    }\n  }\n  \n  #__luonutt_projects {\n    border-radius: 0.6rem;\n    margin-right: -0.67rem;\n    margin-top: 0.67rem;\n    display: flex;\n    overflow-x: scroll;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: fit-content;\n  }\n  \n  .__luonutt_project_card {\n    transform: scale(0.9);\n    cursor: pointer;\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 300ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: auto;\n      aspect-ratio: 16 / 9;\n      border-top-left-radius: 0.75rem;\n      border-top-right-radius: 0.75rem;\n    }\n    div {\n      padding: 0.6rem;\n      background-color: #0d0d0d;\n      overflow-wrap: break-word;\n      border-bottom-right-radius: 0.75rem;\n      border-bottom-left-radius: 0.75rem;\n    }\n    p {\n      margin-top: 0.1rem;\n      font-size: 0.8rem;\n      line-height: 0.89rem;\n      color: #fff;\n      opacity: 0.98;\n    }\n  }\n\n  #__luonutt_popup_img {\n    height: 7em;\n    width: auto;\n    aspect-rato: 1 / 1;\n  }\n  \n  .__luonutt_project_card:hover {\n    transform: scale(0.95);\n    box-shadow:\n      0 20px 25px -5px rgba(0, 0, 0, 0.1),\n      0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n  \n  .__luonutt_overview_upper {\n    padding-bottom: 0.3rem;\n    display: grid;\n    place-items: center;\n    p {\n      margin-top: 1rem;\n      font-weight: 550;\n      font-size: 0.75rem;\n      letter-spacing: 0.025em;\n      color: #d1d5db;\n      line-height: 0;\n    }\n    h3 {\n      font-weight: 700;\n      font-size: 1.125rem;\n      margin-top: 10px;\n      line-height: 0;\n    }\n  }\n  \n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .__luonutt_noscrollbar::-webkit-scrollbar {\n    display: none;\n  }\n  \n  /* Hide scrollbar for IE, Edge and Firefox */\n  .__luonutt_noscrollbar {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n  \n  /* Misc luonutt */\n  .__luonutt_hr {\n    margin-top: 0.3rem;\n    border-width: 0;\n    height: 1px;\n    background-color: #e5e7eb;\n    opacity: 0.3;\n  }\n  .__luonutt_select_none {\n    user-select: none;\n  }  \n  "};function initLuoNutt(n){var t,e,o;return __awaiter(this,void 0,void 0,function(){var r,i,a,u,l,c,s,_;return __generator(this,function(p){switch(p.label){case 0:if(!n)throw new Error("[LUONUTT] Luonutt initialized without any props.");return"string"==typeof n&&(n={github_username:n.toString().trim()}),(r={log:function(){for(var t,e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];!1!==(null===(t=n.options)||void 0===t?void 0:t.debug)&&console.log("[LUONUTT] ".concat(e))}}).log("Luonutt widget initialized"),(null==n?void 0:n.github_username)?[4,fetch("https://api.github.com/users/".concat(n.github_username))]:[2,r.log("No Github username provided!")];case 1:return(i=p.sent()).ok?[4,i.json()]:[2,r.log("Failed to fetch Github User!")];case 2:return a=p.sent(),console.log(12,a),r.log("Fetched Github User"),(u=document.createElement("style")).innerHTML=__LUONUTT_Styles(),document.body.appendChild(u),r.log("Appended LUONUTT_STYLES to document body!"),l=document.createElement("div"),c=(null===(t=n.trigger_options)||void 0===t?void 0:t.text)?null===(e=n.trigger_options)||void 0===e?void 0:e.text.replace("{{username}}",n.github_username).trim():"Made by @".concat(n.github_username),l.innerHTML=__LUONUTT_PopupTriggerBtn(c),document.body.appendChild(l),r.log("Appended LUONUTT_TRIGGER_BTN to document body with content :- ".concat(c)),(s=document.createElement("div")).innerHTML=__LUONUTT_Popup(null),document.body.appendChild(s),r.log("Appended LUONUTT_POPUP to document body!"),_=function(){var n;return null===(n=document.getElementById("__luonutt_popup"))||void 0===n?void 0:n.classList.toggle("__luonutt_popup_open")},l.addEventListener("click",_),null===(o=document.getElementById("__luonutt_cross_btn"))||void 0===o||o.addEventListener("click",_),r.log("Configured LUONUTT Event Handlers!"),[2]}})})}