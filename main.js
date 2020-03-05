
// gallery Item Filler

const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++ ) {
    filterButtons[i].addEventListener("click",function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target=this.getAttribute("data-target")

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target==items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            
            if(target=="all"){
                items[k].style.display="block";

            }
        }
    })
    
}

// LightBox

const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img")

    lightbox.addEventListener('click',function(){
        if(event.target!=lightboxImage){
            lightbox.classList.remove('show');
            lightbox.classList.add('hide');
        }
    })

    closeLightbox.addEventListener("click", function(){
        lightbox.classList.remove('show');
        lightbox.classList.add('hide');
})

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");
console.log(galleryItem)

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove('hide');
        lightbox.classList.add('show');
        lightboxImage.src=element.querySelector("img").getAttribute("src")
    })
})

// Header Navbar Shahab & Ahmed

var header = document.querySelector('header'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    this.console.log(window.scrollY)
    if (window.scrollY <= 150) { // Just an example
        header.style.backgroundColor = 'transparent'; // or default color
    }
    // if (window.scrollY >=950){
    //     header.style.backgroundColor = '#fff';
    //     header.style = "#000";
    // }
    else  {
        header.style.backgroundColor = '#602080';
        
        header.style.transition= 'all .3s ease-in-out';;
    }
});

// Header fixed

window.onscroll=function(){
    const docScrollTop = document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

// navbar links

const navbar= document.querySelector(".navbar");
    a = navbar.querySelectorAll("a");

    a.forEach(function(element){
        element.addEventListener("click",function(){
            for(let i=0; i<a.length; i++){
                a[i].classList.remove('active');
            }
            this.classList.add("active")
            // document.querySelector(".navbar").classList.toggle("show") // If I want to close the drop down bar whenever scrolling.
        })
    })

// ham-burger

const hamBurger= document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("show")
})