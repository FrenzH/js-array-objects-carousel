

function moveCarouselForward(){
    clearInterval(idInterval)
    activeIndex = activeIndex < images.length -1 ? activeIndex +1 : 0 ;
    buildCarousel(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}

function moveCarouselPrevious(){
     clearInterval(idInterval);
    activeIndex = activeIndex > 0 ? activeIndex -1 : images.length -1 ;
    buildCarousel(images, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}


function buildCarousel(images, activeIndex){
    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';
    for(let i = 0; i < images.length; i++){
        const url = images[i].url;
        const title = images[i].title;
        const imageClass = i === activeIndex ? 'carousel-img active' : 'carousel-img'
        content += `<img class="${imageClass}" src="${url}" alt="${title}" />`;
    }
    carouselImages.innerHTML = content;
    carouselThumbs.innerHTML = content;
}

function setIntervalBackWard(){
    clearInterval(idInterval);
    activeIndex = activeIndex > 0 ? activeIndex -1 : images.length -1 ;
    buildCarousel(images,activeIndex);
    idInterval=setInterval(setIntervalBackWard,CHANGE_IMAGE_DELAY*1000)


}


function setIntervalForWard(){

}