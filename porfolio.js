const buttenCliked = document.querySelector(".butten-cliked");
buttenCliked.addEventListener("click",() =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
document.querySelector(".header").classList.toggle("active");
}

/*-------Active section------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //active the overly to privent the multiple clicks
        document.querySelector(".overlay").classList.add("active");
        buttenCliked.classList.add("hide")
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
             hideSection();
            document.body.classList.add("hide-scrolling");

        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
        buttenCliked.classList.remove("hide")
        document.querySelector(".overlay").classList.remove("active");


        },500)
    }
})

/*-------About tabs------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

    }
});
