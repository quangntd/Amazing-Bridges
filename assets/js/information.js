//--------info1-----------
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var info = document.querySelector('#info');
var sitemp = document.querySelector('#sitemap');
var feback = document.querySelector('#feed');
document.querySelector('#sitemap').style.display = 'none';
document.querySelector('#feed').style.display = 'none';
document.querySelector('#info').style.display = 'none';
btn1.addEventListener('click', () => {
    if (info.style.display === 'none') {
        info.style.display = 'block';
        sitemp.style.display = 'none';
        feback.style.display = 'none';
    } else {
        info.style.display = 'none';

    }
})
btn2.addEventListener('click', () => {
    if (sitemp.style.display === 'none') {
        sitemp.style.display = 'block';
        info.style.display = 'none';
        feback.style.display = 'none';
    } else {
        sitemp.style.display = 'none';
    }
})
btn3.addEventListener('click', () => {
        if (feback.style.display === 'none') {
            feback.style.display = 'block';
            info.style.display = 'none';
            sitemp.style.display = 'none';
        } else {
            feback.style.display = 'none';
        }
    })
    //-----click thumnail
var thumnail1 = document.querySelector('#thumbnail1');
var thumnail2 = document.querySelector('#thumbnail2');
var thumnail3 = document.querySelector('#thumbnail3');
var thumnail4 = document.querySelector('#thumbnail4');
thumnail1.addEventListener('click', () => {
    sitemp2.style.display = 'none';
    feback2.style.display = 'none';
    info2.style.display = 'none';
    sitemp3.style.display = 'none';
    feback3.style.display = 'none';
    info3.style.display = 'none';
    info4.style.display = 'none';
    sitemp4.style.display = 'none';
    feback4.style.display = 'none';
})
thumnail2.addEventListener('click', () => {
    info.style.display = 'none';
    feback.style.display = 'none';
    feback.style.display = 'none';
    sitemp3.style.display = 'none';
    feback3.style.display = 'none';
    info3.style.display = 'none';
    info4.style.display = 'none';
    sitemp4.style.display = 'none';
    feback4.style.display = 'none';
})
thumnail3.addEventListener('click', () => {
    info.style.display = 'none';
    feback.style.display = 'none';
    feback.style.display = 'none';
    sitemp2.style.display = 'none';
    feback2.style.display = 'none';
    info2.style.display = 'none';
    info4.style.display = 'none';
    sitemp4.style.display = 'none';
    feback4.style.display = 'none';
})
thumnail4.addEventListener('click', () => {
        info.style.display = 'none';
        feback.style.display = 'none';
        feback.style.display = 'none';
        sitemp2.style.display = 'none';
        feback2.style.display = 'none';
        info2.style.display = 'none';
        info3.style.display = 'none';
        sitemp3.style.display = 'none';
        feback3.style.display = 'none';
    })
    //------info2-------
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');
var btn6 = document.querySelector('#btn6');
var info2 = document.querySelector('#info2');
var sitemp2 = document.querySelector('#sitemap2');
var feback2 = document.querySelector('#feed2');
document.querySelector('#sitemap2').style.display = 'none';
document.querySelector('#feed2').style.display = 'none';
document.querySelector('#info2').style.display = 'none';
btn4.addEventListener('click', () => {
    if (info2.style.display === 'none') {
        info2.style.display = 'block';
        sitemp2.style.display = 'none';
        feback2.style.display = 'none';
    } else {
        info2.style.display = 'none';
    }
})
btn5.addEventListener('click', () => {
    if (sitemp2.style.display === 'none') {
        sitemp2.style.display = 'block';
        info2.style.display = 'none';
        feback2.style.display = 'none';
    } else {
        sitemp2.style.display = 'none';
    }
})
btn6.addEventListener('click', () => {
        if (feback2.style.display === 'none') {
            feback2.style.display = 'block';
            info2.style.display = 'none';
            sitemp2.style.display = 'none';
        } else {
            feback2.style.display = 'none';
        }
    })
    //------info3----------
var btn7 = document.querySelector('#btn7');
var btn8 = document.querySelector('#btn8');
var btn9 = document.querySelector('#btn9');
var info3 = document.querySelector('#info3');
var sitemp3 = document.querySelector('#sitemap3');
var feback3 = document.querySelector('#feed3');
document.querySelector('#sitemap3').style.display = 'none';
document.querySelector('#feed3').style.display = 'none';
document.querySelector('#info3').style.display = 'none';
btn7.addEventListener('click', () => {
    if (info3.style.display === 'none') {
        info3.style.display = 'block';
        sitemp3.style.display = 'none';
        feback3.style.display = 'none';
    } else {
        info3.style.display = 'none';
    }
})
btn8.addEventListener('click', () => {
    if (sitemp3.style.display === 'none') {
        sitemp3.style.display = 'block';
        info3.style.display = 'none';
        feback3.style.display = 'none';
    } else {
        sitemp3.style.display = 'none';
    }
})
btn9.addEventListener('click', () => {
        if (feback3.style.display === 'none') {
            feback3.style.display = 'block';
            info3.style.display = 'none';
            sitemp3.style.display = 'none';
        } else {
            feback3.style.display = 'none';
        }
    })
    //----------info4------------
var btn10 = document.querySelector('#btn10');
var btn11 = document.querySelector('#btn11');
var btn12 = document.querySelector('#btn12');
var info4 = document.querySelector('#info4');
var sitemp4 = document.querySelector('#sitemap4');
var feback4 = document.querySelector('#feed4');
document.querySelector('#sitemap4').style.display = 'none';
document.querySelector('#feed4').style.display = 'none';
document.querySelector('#info4').style.display = 'none';
btn10.addEventListener('click', () => {
    if (info4.style.display === 'none') {
        info4.style.display = 'block';
        sitemp4.style.display = 'none';
        feback4.style.display = 'none';
    } else {
        info4.style.display = 'none';
    }
})
btn11.addEventListener('click', () => {
    if (sitemp4.style.display === 'none') {
        sitemp4.style.display = 'block';
        info4.style.display = 'none';
        feback4.style.display = 'none';
    } else {
        sitemp4.style.display = 'none';
    }
})
btn12.addEventListener('click', () => {
    if (feback4.style.display === 'none') {
        feback4.style.display = 'block';
        info4.style.display = 'none';
        sitemp4.style.display = 'none';
    } else {
        feback4.style.display = 'none';
    }
})