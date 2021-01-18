function ibg(){

let ibg=document.querySelectorAll("._ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
if(document.querySelector('body').classList.contains("no-webp")){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
else{
let path = ""+ibg[i].querySelector('img').getAttribute('src').split('.')[0]+".webp";
ibg[i].style.backgroundImage = 'url('+path+')';
}
}
}
}

ibg();