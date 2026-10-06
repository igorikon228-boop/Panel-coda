const days=[
["ХОБА, НАЧАЛИ!","Первое декабря. Завод хорошего настроения официально запущен. Пусть задачи сегодня сами становятся в очередь и не толкаются."],
["КОМАНДА, ВПЕРЁД","Пусть у офиса будет энергия маленького трактора: шумно не надо, а вот тянуть всё важное — пожалуйста."],
["КАПИБАРА-МОД","Спокойствие. План. Капибара. Пусть вокруг кипит декабрь, а внутри будет дзен и чёткое понимание, где лежит обед."],
["КОФЕЙНЫЙ ДВИГАТЕЛЬ","Желаем, чтобы кофе сегодня превращался не в тревожность, а строго в закрытые задачи и красивые галочки."],
["МАЛЕНЬКИЕ ШАГИ","Не обязательно сегодня покорять мир. Иногда достаточно ответить на то самое письмо. Да. На то самое."],
["ЗА КОМАНДУ!","Пусть рядом будут люди, с которыми и дедлайн не страшен, и мем в рабочем чате всегда своевременный."],
["НЕ ГУСЬ","Главное — не гусь, а движ. Если план пошёл не по плану, важно уверенно делать вид, что это была новая версия плана."],
["ДЕРЖИ ФОКУС","Пусть уведомления исчезнут, задачи решатся, а никто не напишет «есть минутка?» за две минуты до конца дня."],
["ЭНЕРГИЯ ТРАКТОРА","Желаем тяги маленького трактора и спокойствия большой капибары. Корпоративная суперсила активирована."],
["ВАЖНОЕ ДЕЛО","Ты делаешь важное дело. Даже если прямо сейчас это таблица с названием «финал_точно_финал_v7»."],
["СИЛА НА ВСЕ ЗАДАЧИ","Пусть производство работает ритмично, офис — разумно, а принтер впервые в жизни просто печатает."],
["РАБОТАЕМ КАК КОРОЛИ","Корона не обязательна. Достаточно не потерять пароль, кружку и веру в человечество до обеда."],
["БОЛЬШЕ КЛАССНЫХ ПРОЕКТОВ","Пусть проекты будут интересными, сроки человеческими, а фраза «небольшая правочка» действительно означает небольшую."],
["ПУСТЬ ВСЁ СКЛАДЫВАЕТСЯ","Желаем, чтобы всё сошлось: цифры, смены, документы, планы и желание уйти домой вовремя."],
["БОЛЬШЕ УВЕРЕННОСТИ","Сегодня официальный день фразы: «Разберёмся». Потому что разбирались раньше и сейчас разберёмся."],
["КРЕАТИВ ВКЛЮЧЕН","Пусть хорошая идея придёт до совещания, а не через три часа после него в душе."],
["ЕДЕМ К ЦЕЛЯМ","Не обязательно быстро. Главное — в правильную сторону и желательно с перекусом."],
["МЕМНАЯ ПОДДЕРЖКА","Если день сложный, отправь коллеге мем. Иногда это не прокрастинация, а полноценная система корпоративной поддержки."],
["ЯРКИХ МОМЕНТОВ","Пусть сегодня случится что-то приятное и неожиданное. Желательно не внеплановая инвентаризация."],
["СМЕЛЫЕ РЕШЕНИЯ","Желаем смелости сказать «давайте проще» там, где уже родилась презентация на 84 слайда."],
["НЕ ЗАБЫВАЙ ДЫШАТЬ","Вдох. Выдох. Ответить. Сохранить. Проверить. Молодец. Теперь можно ещё один чай."],
["БОЛЬШЕ ВОЗМОЖНОСТЕЙ","Пусть нужная дверь откроется. А если это дверь переговорки — пусть там хотя бы никого не будет."],
["ПЛАНЫ СБЫВАЮТСЯ","Желаем, чтобы планы сбывались чаще, чем переносились встречи в календаре."],
["СИЛ И ЭНЕРГИИ","До праздников рукой подать. Берегите заряд: человек — не погрузчик, хотя в декабре иногда очень похож."],
["ТЕПЛА И УЮТА","Пусть сегодня будет тепло: дома, в цехе, в офисе и особенно в рабочем чате."],
["КЛАССНЫЕ ЛЮДИ РЯДОМ","Самый ценный корпоративный ресурс — люди, которым можно написать «спаси» и получить не вопрос, а помощь."],
["ДОСТИЖЕНИЙ И РОСТА","Оглянись: за год сделано больше, чем кажется. Даже папка «разобрать потом» стала значительно опытнее."],
["ПРИЯТНЫЙ СЮРПРИЗ","Пусть сегодня случится приятный сюрприз. Например, совещание отменили. Мечтать никто не запрещал."],
["ВСЁ ИДЁТ ПО ПЛАНУ","А если не идёт — значит, план получает бесценный жизненный опыт."],
["ВРЕМЕНИ НА ГЛАВНОЕ","Пусть хватит времени закончить важное и не начинать 30 декабря то, что спокойно может подождать января."],
["МЫ СДЕЛАЛИ ЭТО!","Финал! Спасибо каждому, кто весь год двигал общее дело. Пусть новый год принесёт сил, своих людей рядом, классных идей и побольше моментов: «Хоба — получилось!»"]
];
const short=["НАЧИНАЕМ ДЕКАБРЬ","ВМЕСТЕ МОЖЕМ БОЛЬШЕ","СПОКОЙСТВИЕ. ПЛАН.","БОЛЬШЕ КОФЕ","МАЛЕНЬКИЕ ШАГИ","ЗА КОМАНДУ","ГЛАВНОЕ — ДВИЖ","ДЕРЖИ ФОКУС","ЭНЕРГИЯ ТРАКТОРА","ВАЖНОЕ ДЕЛО","СИЛ НА ЗАДАЧИ","КАК КОРОЛИ","КЛАССНЫХ ПРОЕКТОВ","ВСЁ СКЛАДЫВАЕТСЯ","БОЛЬШЕ УВЕРЕННОСТИ","БОЛЬШЕ КРЕАТИВА","К ЦЕЛЯМ","МЕМНАЯ ПОДДЕРЖКА","ЯРКИХ МОМЕНТОВ","СМЕЛЫХ РЕШЕНИЙ","НЕ ЗАБЫВАЙ ДЫШАТЬ","ВОЗМОЖНОСТЕЙ","ПЛАНЫ СБЫВАЮТСЯ","СИЛ И ЭНЕРГИИ","ТЕПЛА И УЮТА","КЛАССНЫЕ ЛЮДИ","ДОСТИЖЕНИЙ","СЮРПРИЗОВ","ВСЁ ПО ПЛАНУ","ВРЕМЕНИ НА ГЛАВНОЕ","С НОВЫМ ГОДОМ"];
let spriteData=null;
const cal=document.querySelector("#calendar"),dlg=document.querySelector("#wishDialog"),toggle=document.querySelector("#previewToggle");
let preview=sessionStorage.getItem("advent31preview")==="1";
function unlocked(d){if(preview)return true;const n=new Date();if(n.getFullYear()<2026||(n.getFullYear()===2026&&n.getMonth()<11))return false;if(n.getFullYear()>2026||(n.getFullYear()===2026&&n.getMonth()>11))return true;return d<=n.getDate()}
function opened(){try{return JSON.parse(localStorage.getItem("advent31opened")||"[]")}catch{return[]}}
function spriteStyle(d,mode="card"){
 const s=spriteData?.sprites?.[String(d)]; if(!s)return "";
 const atlas=spriteData.atlas, p=s[mode]||{}, scale=Number(p.scale)||1;
 const w=s.width*scale,h=s.height*scale;
 return "--sx:"+s.x+";--sy:"+s.y+";--sw:"+s.width+";--sh:"+s.height+";--aw:"+atlas.width+";--ah:"+atlas.height+";--scale:"+scale+";--px:"+(p.x||"50%")+";--py:"+(p.y||"50%")+";";
}
function build(){
 cal.innerHTML="";const op=opened();
 for(let d=1;d<=31;d++){
  const b=document.createElement("button");b.className="door";b.type="button";const ok=unlocked(d);
  if(!ok)b.classList.add("locked");if(op.includes(d))b.classList.add("opened");
  const n=new Date();if(!preview&&n.getFullYear()===2026&&n.getMonth()===11&&n.getDate()===d)b.classList.add("today");
  b.disabled=!ok;b.setAttribute("aria-label",ok?"Открыть "+d+" декабря":d+" декабря — пока закрыто");
  b.innerHTML='<span class="num">'+String(d).padStart(2,"0")+'</span><span class="sym">'+(ok?"✦":"⌁")+'</span><span class="sprite" aria-hidden="true" style="'+spriteStyle(d,"card")+'"></span><span class="mini">'+short[d-1]+'</span>';
  b.onclick=()=>show(d,b);cal.appendChild(b);
 }
}
function show(d,b){
 let op=opened();if(!op.includes(d)){op.push(d);localStorage.setItem("advent31opened",JSON.stringify(op))}
 b.classList.add("opened");document.querySelector("#modalDay").textContent=String(d).padStart(2,"0");
 document.querySelector("#modalTitle").textContent=days[d-1][0];document.querySelector("#modalWish").textContent=days[d-1][1];
 const m=document.querySelector("#modalMeme");m.className="modal-meme sprite";m.setAttribute("style",spriteStyle(d,"modal"));
 dlg.showModal();
}
function close(){if(dlg.open)dlg.close()}
document.querySelector("#closeDialog").onclick=close;document.querySelector("#modalOk").onclick=close;
dlg.onclick=e=>{if(e.target===dlg)close()};
toggle.onclick=()=>{preview=!preview;sessionStorage.setItem("advent31preview",preview?"1":"0");toggle.classList.toggle("active",preview);build()};
async function init(){
 try{const r=await fetch("advent-sprites.json?v=6",{cache:"no-store"});if(!r.ok)throw new Error("sprite json");spriteData=await r.json()}
 catch(e){console.warn("Sprite atlas metadata unavailable",e)}
 toggle.classList.toggle("active",preview);build();
}
init();
/* HOBA MODE v13 */
const hobaButton=document.querySelector("#hobaMode"),snowLayer=document.querySelector("#snowLayer"),dialogSnowLayer=document.querySelector("#dialogSnowLayer");
let hobaOn=localStorage.getItem("hobaMode")==="1";
function fillSnow(layer,count){if(!layer)return;layer.innerHTML="";
 for(let i=0;i<count;i++){const s=document.createElement("span");s.className="snowflake";s.textContent=i%4===0?"✦":"•";
  s.style.left=(Math.random()*100)+"vw";s.style.fontSize=(5+Math.random()*13)+"px";s.style.opacity=(.28+Math.random()*.58);
  s.style.setProperty("--drift",(-45+Math.random()*90)+"px");s.style.animationDuration=(7+Math.random()*10)+"s, "+(2+Math.random()*4)+"s";s.style.animationDelay=(-Math.random()*14)+"s";
  layer.appendChild(s)}}
function makeSnow(){
 if(!snowLayer)return;snowLayer.innerHTML="";
 const count=window.matchMedia("(max-width:450px)").matches?28:52;fillSnow(snowLayer,count);fillSnow(dialogSnowLayer,window.matchMedia("(max-width:450px)").matches?18:34)
}
function setHoba(on){hobaOn=on;localStorage.setItem("hobaMode",on?"1":"0");document.body.classList.toggle("hoba-on",on);snowLayer?.classList.toggle("on",on);dlg?.classList.toggle("hoba-dialog",on);
 if(hobaButton){hobaButton.setAttribute("aria-checked",String(on));hobaButton.querySelector("b").textContent=on?"ON":"OFF";hobaButton.setAttribute("aria-label",(on?"Выключить":"Включить")+" HOBA MODE и снег")}if(on&&snowLayer&&(!snowLayer.children.length||!dialogSnowLayer?.children.length))makeSnow()}
hobaButton?.addEventListener("click",()=>setHoba(!hobaOn));setHoba(hobaOn);
