const buttenCliked = document.querySelector(".butten-cliked");
buttenCliked.addEventListener("click",() =>{
    hideSection();
    toggleNavbar();
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
        else{
             hideSection();
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
        buttenCliked.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
        },500)
    }
})

/*-------About tabs------*/
const tabsContainer = document.querySelector(".about-tabs"),
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click" , (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
    }
});
