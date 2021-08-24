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