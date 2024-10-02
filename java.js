let dropdownItems = document.getElementById(".dropdown-items")
let dropdownMenu = document.getElementById("#dropdown--menu")
document.querySelector(".dropdown");
dropdownMenu.addEventListener('click', showHideMenu)


function showHideMenu(){
    if (dropdownItems.style.display = none){
        dropdownItems.style.display = block;

    } else{
        dropdownItems.style.display = none
    }
};