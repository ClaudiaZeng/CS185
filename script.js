function openPage(){
    const homebtn = document.querySelector("#HomePage");
    homebtn.addEventListener("click", event => {
        console.log(event)
        location.href = "index.html"
    })

    const imgbtn = document.querySelector("#Images");
    imgbtn.addEventListener("click", event => {
        console.log(event)
        location.href = "images.html"
    })

    const videobtn = document.querySelector("#Videos");
    videobtn.addEventListener("click", event => {
        console.log(event)
        location.href = "videos.html"
    })

    const linkbtn = document.querySelector("#ExternalLinks");
    linkbtn.addEventListener("click", event => {
        console.log(event)
        location.href = "externallinks.html"
    })
}

function backButton(){
    var backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", event=>{
        topFunction();
    });
    window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function init(){
    openPage();
    scrollFunction();
    topFunction();
    backButton();
}