const wishes=[
["Эгегей!","Завод чтения запущен. Крепитесь: сил вам, ясной головы и чтобы ни одна страница сегодня не победила вас."],
["Ну здравствуй, герой декабря!","Пусть сегодня дела сами выстраиваются в очередь, кофе работает как заклинание, а вы — как человек, у которого всё под контролем."],
["Внимание, режим «не сдаваться»!","Желаю вам энергии маленького трактора и спокойствия большого капибара. Странное сочетание, зато надёжное."],
["Хоба — четвёртое окно!","Пусть сегодня случится хотя бы одна приятная неожиданность. Желательно без слов «срочно», «созвон» и «мы тут подумали»."],
["Боевой декабрь продолжается!","Желаю, чтобы сложные задачи внезапно оказались простыми, а простые — уже сделанными кем-то до вас."],
["Шестой день. Полёт нормальный!","Пусть внутренний аккумулятор держит заряд дольше телефона, а настроение не требует перезагрузки."],
["Эй, машина!","Сегодня вам официально разрешено гордиться собой даже за маленькие победы. Особенно за те, которые никто кроме вас не заметил."],
["Восьмое окошко открыто!","Пусть удача сегодня ходит за вами хвостиком и иногда незаметно подталкивает в нужную дверь."],
["Девятый уровень декабря!","Желаю железных нервов, мягкого пледа и людей вокруг, которые с первого раза понимают слово «нет»."],
["Десяточка!","Пусть сегодняшний день принесёт больше «ого!» и меньше «ну вот опять». Баланс должен быть восстановлен."],
["Эгегей, почти экватор!","Желаю не тащить весь мир на плечах. Мир тяжёлый, спина одна. Берегите главный инвентарь."],
["Двенадцать!","Пусть ваши планы сегодня сойдутся с реальностью хотя бы в одном помещении и наконец договорятся."],
["Чёртова дюжина, но добрая!","Пусть 13-е окно принесёт наглое везение: такое, когда всё получилось, а вы даже не успели понервничать."],
["Четырнадцатый пошёл!","Желаю вам продуктивности без героизма: сделать важное, забить на лишнее и вовремя уйти отдыхать."],
["Пятнадцать. Держим строй!","Пусть рядом окажутся правильные люди, правильная музыка и неправильное количество вкусного."],
["Шестнадцатое окно!","Сегодня желаю вам суперсилу: отличать действительно срочное от того, что просто громко пищит."],
["Семнадцать!","Пусть все ваши «когда-нибудь» понемногу превращаются в «а почему бы не сегодня?» — кроме уборки, её можно завтра."],
["Восемнадцатый рубеж!","Желаю крепкого духа, лёгких решений и чтобы декабрь перестал делать вид, будто в сутках по девять часов."],
["Девятнадцать!","Пусть сегодня кто-нибудь скажет вам именно те хорошие слова, которые вы давно заслужили услышать."],
["Двадцаточка!","Финиш уже пахнет мандаринами. Желаю дотянуть до него без суеты, с достоинством и запасом вкусного."],
["Двадцать первое!","Пусть три оставшихся дня до финального окна будут не гонкой, а красивым победным кругом."],
["Двадцать два!","Желаю закрыть старые хвосты, не отрастить новые и войти в праздник налегке — хотя бы морально."],
["Предпоследнее!","Сегодня берегите силы. Завтра финал, а великим людям перед финалом положено драматично смотреть вдаль и пить чай."],
["ФИНАЛЬНОЕ ОКНО!","Эгегей! Вы дошли. Пусть впереди будет много сил, своих людей рядом, сумасшедших хороших идей и поводов сказать: «Вот это мы, конечно, красиво сделали!»"]
];

const calendar=document.querySelector("#calendar");
const dialog=document.querySelector("#wishDialog");
const modalDay=document.querySelector("#modalDay"),modalTitle=document.querySelector("#modalTitle"),modalWish=document.querySelector("#modalWish");
const progressText=document.querySelector("#progressText"),progressBar=document.querySelector("#progressBar");
const previewToggle=document.querySelector("#previewToggle");
let preview=sessionStorage.getItem("adventPreview")==="1";

function dateState(day){
 if(preview)return "available";
 const now=new Date(),y=now.getFullYear(),m=now.getMonth(),d=now.getDate();
 if(y<2026||(y===2026&&m<11))return "locked";
 if(y>2026||(y===2026&&m>11))return "available";
 return day<=d?"available":"locked";
}
function opened(){try{return JSON.parse(localStorage.getItem("advent2026-opened")||"[]")}catch{return []}}
function saveOpened(arr){localStorage.setItem("advent2026-opened",JSON.stringify([...new Set(arr)]))}
function build(){
 const wasOpened=opened(); calendar.innerHTML="";
 for(let day=1;day<=24;day++){
  const b=document.createElement("button");b.type="button";b.className="door";
  if(day===24)b.classList.add("big");
  const locked=dateState(day)==="locked";
  if(locked)b.classList.add("locked");
  if(wasOpened.includes(day))b.classList.add("opened");
  const now=new Date();if(!preview&&now.getFullYear()===2026&&now.getMonth()===11&&now.getDate()===day)b.classList.add("today");
  b.disabled=locked;b.setAttribute("aria-label",locked?day+" декабря — пока закрыто":"Открыть "+day+" декабря");
  b.innerHTML='<span class="door-symbol">'+(locked?"":"✦")+'</span><span class="door-number">'+day+'</span>';
  b.addEventListener("click",()=>openDoor(day,b));calendar.appendChild(b);
 }
 updateProgress();
}
function openDoor(day,b){
 const arr=opened();if(!arr.includes(day)){arr.push(day);saveOpened(arr)}
 b.classList.add("opened");modalDay.textContent=String(day).padStart(2,"0")+" / 24";
 modalTitle.textContent=wishes[day-1][0];modalWish.textContent=wishes[day-1][1];
 if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");
 updateProgress();
}
function updateProgress(){
 const now=new Date();let n=0;
 if(now.getFullYear()>2026||(now.getFullYear()===2026&&now.getMonth()>11))n=24;
 else if(now.getFullYear()===2026&&now.getMonth()===11)n=Math.min(24,now.getDate());
 progressBar.style.width=(n/24*100)+"%";
 if(preview)progressText.textContent="Режим проверки · все окна доступны";
 else if(n===0)progressText.textContent="Стартуем 1 декабря";
 else if(n<24)progressText.textContent="Сегодня можно открыть окно № "+n;
 else progressText.textContent="Все 24 окна доступны";
}
function close(){dialog.close?.();if(dialog.hasAttribute("open"))dialog.removeAttribute("open")}
document.querySelector("#closeDialog").addEventListener("click",close);
document.querySelector("#modalOk").addEventListener("click",close);
dialog.addEventListener("click",e=>{if(e.target===dialog)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dialog.open)close()});
previewToggle.addEventListener("click",()=>{preview=!preview;sessionStorage.setItem("adventPreview",preview?"1":"0");previewToggle.classList.toggle("active",preview);build()});
previewToggle.classList.toggle("active",preview);build();