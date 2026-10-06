const days=[
["ХОБА, ДЕКАБРЬ","Ну всё, поехали. До Нового года ещё 31 день, а ощущение, что дедлайн был вчера. Начинаем красиво."],
["РАБОТАЕМ, БРАТЦЫ","Сегодня без подвигов. Просто сделать своё, помочь соседу и не назначать созвон на 17:55. Уже отличный день."],
["КАПИБАРА-МОД","Вокруг суета, а ты — капибара. Сидишь спокойно, делаешь по порядку и не открываешь письмо с темой «СРОЧНО!!!» раньше кофе."],
["КОФЕ ЕСТЬ — ЖИВЁМ","Первый кофе — чтобы проснуться. Второй — чтобы понять задачу. Третий уже просто член команды."],
["ОДНО ДЕЛО ЗА РАЗ","Не надо закрывать весь декабрь сегодня. Закрой одну задачу. Потом вторую. Потом случайно открой мем — бывает."],
["НОРМАЛЬНАЯ КОМАНДА","Это когда пишешь «ребят, я туплю» — и тебе не ставят реакцию, а реально помогают."],
["ПЛАН Б","Если всё пошло не по плану — поздравляем, теперь это план Б. Главное произносить уверенно."],
["ФОКУС-ПОКУС","Закрой лишние вкладки. Да, все 38. Нет, вкладка с доставкой еды считается важной."],
["ТЯГА ТРАКТОРА","Сегодня работаем как трактор: медленно, уверенно и через всё это поле задач. Бр-р-р, поехали."],
["ФИНАЛ_v8_ТОЧНО","Если файл называется «финал_точно_финал_v8», не задавай вопросов. Просто знай: впереди v9."],
["ПРИНТЕР, НЕ ПОДВЕДИ","Есть задачи сложные. Есть очень сложные. А есть распечатать один лист с первого раза."],
["КОРОНА НА МЕСТЕ","Сегодня ты главный специалист по тому, что делаешь. Даже если первые десять минут гуглил, как это делать."],
["МАЛЕНЬКАЯ ПРАВОЧКА","Где-то прямо сейчас кто-то пишет: «Там буквально на пять минут». Держимся."],
["ВСЁ СОШЛОСЬ","Цифры сошлись. Документ сохранился. Нужный человек ответил. Всё, не трогай ничего — редкий момент."],
["РАЗБЕРЁМСЯ","Универсальный рабочий навык: посмотреть на непонятную фигню, сказать «ага» и через полчаса реально разобраться."],
["ИДЕЯ ПРИШЛА","Хорошие идеи почему-то приходят не на мозговом штурме, а по дороге за чаем. Поэтому чай — рабочий инструмент."],
["ТИХО ЕДЕМ","Не обязательно нестись. Главное — не назад. И чтобы никто по пути не добавил ещё три «маленькие задачки»."],
["ОТПРАВЬ МЕМ","Если коллеге тяжко — отправь мем. Если совсем тяжко — два мема и «пойдём кофе возьмём»."],
["БЕЗ СЮРПРИЗОВ","Пусть единственным сюрпризом сегодня будет печенька на кухне. Никаких «а вы видели письмо?»."],
["ДАВАЙТЕ ПРОЩЕ","Если идею нельзя объяснить без презентации на 84 слайда, возможно, пора удалить 79 из них."],
["ВДОХ — ВЫДОХ","Сохрани файл. Отправь письмо. Разомни спину. Посмотри в окно. Всё, ты снова человек."],
["СВОБОДНАЯ ПЕРЕГОВОРКА","Нашёл свободную переговорку без брони? Не двигайся. Ты обнаружил легендарный артефакт."],
["ПЛАНЫ И ПЕРЕПЛАНЫ","План на день хороший. Особенно первые семь минут, пока никто ничего не написал."],
["БАТАРЕЙКА 24%","До праздников недалеко. Работаем в энергосберегающем режиме: важное делаем, ерунду героически переносим на январь."],
["ТЕПЛО ПОШЛО","Чай горячий, батарея тёплая, коллеги сегодня добрые. Всё, декабрь официально удался."],
["СВОИ ЛЮДИ","Цени тех, кому можно написать просто «спаси», а в ответ получить «иду», а не «что случилось?»."],
["МЫ ВООБЩЕ-ТО МОЛОДЦЫ","Посмотри, сколько всего сделали за год. Серьёзно. Даже если половину декабря кажется, что мы только отвечаем на сообщения."],
["СОВЕЩАНИЕ ОТМЕНЕНО","Иногда счастье выглядит как уведомление: «Встреча отменена организатором». Наслаждайся моментом."],
["ТАК И БЫЛО ЗАДУМАНО","Что-то пошло странно? Главное не суетиться. Посмотри уверенно и скажи: «Да, проверяем сценарий»."],
["НЕ НАЧИНАЙ НОВОЕ","30 декабря. Если задача спокойно жила без тебя весь год, есть шанс, что ещё пару дней она выдержит."],
["ХОБА — СДЕЛАЛИ!","Вот и всё. Таблицы закрыты, задачи пережиты, мемы отправлены. Спасибо всем, кто тащил, помогал и не писал «есть минутка?» вечером. С Новым годом!"]
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
