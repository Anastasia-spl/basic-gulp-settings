function ibg(){

    let ibg=document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            if (document.querySelector('body').classList.contains("no-webp")) {
                if(window.devicePixelRatio === 2) {
                    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('picture img').getAttribute('srcset').split(',')[1].split('.')[0]+".png";          
                } else {
                    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('picture img').getAttribute('src')+')';
                }
            }
        
            else {
                if(window.devicePixelRatio === 2) {
                    let path = ""+ibg[i].querySelector('picture source').getAttribute('srcset').split(',')[1].split('.')[0]+".webp";
                    ibg[i].style.backgroundImage = 'url('+path+')';
                } else {
                  let path = ""+ibg[i].querySelector('picture img').getAttribute('src').split('.')[0]+".webp";
                    ibg[i].style.backgroundImage = 'url(' + path + ')';
                }
            }
        }
    }
}

ibg();