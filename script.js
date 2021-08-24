var avatar = document.getElementById('avatar');
var info = document.getElementsByClassName('info-avatar');

avatar.addEventListener("mouseover", showInfo);
avatar.addEventListener("mouseleave", hideInfo);

function showInfo() {
    for (var i = 0; i < info.length; i++) {
        info[i].style.display = "flex";
        info[i].style.opacity = "1";

    }

}

function hideInfo() {
    for (var i = 0; i < info.length; i++) {
        info[i].style.display = "none";
        info[i].style.opacity = "0";
    }

}

let en_btn = document.getElementById('en_lan');
let es_btn = document.getElementById('es_lan');

en_btn.addEventListener("click", changeToEn);
es_btn.addEventListener("click", changeToEs);

function changeToEn() {
    location.href = "../en/en_index.html";
}

function changeToEs() {
    location.href = "../es/es_index.html";
}