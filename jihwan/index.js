const NAV_CLASSNAME = "nav-span-selected";
const head_nav_li = document.querySelectorAll("nav span");
const main_div = document.querySelectorAll("#main > div");

const discordP = document.querySelectorAll(".p-discord");
const emailP = document.querySelectorAll(".p-email");
document.querySelector("#discordImg").addEventListener("click", onClickDiscordImg);
document.querySelector("#emailImg").addEventListener("click", onClickEmailImg);

const leftBtn = document.querySelector("#leftbtn").addEventListener("click", onClickLeft);
const rightBtn= document.querySelector("#rightbtn").addEventListener("click", onClickRight);

function onClickRight(e) {
    for (let i = 0; i < main_div.length; i++) {
        if (main_div[i].classList.contains(NAV_CLASSNAME)) {
            main_div[i].classList.remove(NAV_CLASSNAME);
            main_div[i+1 < main_div.length ? i+1 : 0].classList.add(NAV_CLASSNAME);

            head_nav_li[i].classList.remove(NAV_CLASSNAME);
            head_nav_li[i+1 < main_div.length ? i+1 : 0].classList.add(NAV_CLASSNAME);
            break;
        }
    }
}

function onClickLeft(e) {
    for (let i = 0; i < main_div.length; i++) {
        if (main_div[i].classList.contains(NAV_CLASSNAME)) {
            main_div[i].classList.remove(NAV_CLASSNAME);
            main_div[i-1 >=0 ? i-1 : main_div.length-1].classList.add(NAV_CLASSNAME);

            head_nav_li[i].classList.remove(NAV_CLASSNAME);
            head_nav_li[i-1 >=0 ? i-1 : main_div.length-1].classList.add(NAV_CLASSNAME);
            break;
        }
    }
}
head_nav_li.forEach(li => {
    li.addEventListener("click", liOnClick);
});
function onClickDiscordImg() {
    discordP.forEach(p => p.classList.toggle("none"));
}
function onClickEmailImg() {
    emailP.forEach(p => p.classList.toggle("none"));
}
function liOnClick (e) {
    head_nav_li.forEach(li => {
        li.classList.remove(NAV_CLASSNAME);
    });
    e.target.classList.add(NAV_CLASSNAME);

    main_div.forEach(div => {
        if (div.id === e.target.innerText) {
            div.classList.add(NAV_CLASSNAME);
        } else {
            div.classList.remove(NAV_CLASSNAME);
        }
    });
}