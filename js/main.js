sal({
    rootMargin: "30% 30%"
})

let sidebar = document.getElementById("sidebar");
let sidebarItem = document.getElementsByClassName("sidebar-item");

document.getElementById("cls-sidebar").onclick = function() {
    sidebar.style.width = "0vw";
}

for(let i = 0; i < sidebarItem.length; i++) {
    sidebarItem[i].onclick= function() {
        sidebar.style.width = "0vw";
    }
}

document.getElementById("open-sidebar").onclick = function() {
    sidebar.style.width = "70vw";
}