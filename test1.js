const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var prev = $('.arrow-left');
var next = $('.arrow-right');
var listItem = $$('.banner-img-item');

next.onclick = () => {
    listItem.forEach((item, index) => {  
        if(item.classList[1] == 'active'){
            item.classList.add('left');
            index<(listItem.length - 1) ? listItem[index+1].classList.add('next') : listItem[0].classList.add('next');
            setTimeout(() => {
                index<(listItem.length - 1) ? listItem[index+1].classList.add('left') : listItem[0].classList.add('left');
            },1); 
        }
    })
}

setInterval(() => {
    $('.banner-img-item.active.left').classList.remove('active','left');
    $('.banner-img-item.next.left').classList.add('active');
    $('.banner-img-item.active.next.left').classList.remove('next','left');
},2000)
prev.onclick = () => {
    listItem.forEach((item, index) => { 
        if(item.classList[1] == 'active'){
            item.classList.add('right');
            console.log(listItem[index])
            index == 0 ? listItem[listItem.length - 1].classList.add('prev') : listItem[index-1].classList.add('prev');
            setTimeout(() => {
                index == 0 ? listItem[listItem.length - 1].classList.add('right') : listItem[index-1].classList.add('right');
            },1);
        }
    })
}
setInterval(() => {
    $('.banner-img-item.active.right').classList.remove('active','right');
    $('.banner-img-item.prev.right').classList.add('active');
    $('.banner-img-item.active.prev.right').classList.remove('prev','right');
},2000)

const tabs = $$('.tabs-item');
const pans = $$('.pans-item');

tabs.forEach((tab,index) => {
    const pan = pans[index];
    tab.onclick = () => {
        $('.tabs-item.active').classList.remove('active');
        tabs[index].classList.add('active');
        if(!pan.classList.contains('active')) {
            $('.pans-item.active').classList.add('left');
            pan.classList.add('next');
            setTimeout(() => {
                pan.classList.add('left');
            })
        }
    }
})
setInterval(() => {
    $('.pans-item.active.left').classList.remove('active','left');
    $('.pans-item.next.left').classList.add('active');
    $('.pans-item.active.next.left').classList.remove('next','left');
},2000)