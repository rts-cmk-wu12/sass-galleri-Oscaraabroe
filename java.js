document.querySelector(".dropdown");
document.addEventListener('click', showHideMenu)
var dropdownItems = document.getElementById(".dropdown-items")

function showHideMenu(){
    if (dropdownItems.style.display = none){
        dropdownItems.style.display = block;
        
    } else{
        dropdownItems.style.display = none
    }
}