import "./styles.css";
import { pageLoad } from "./page-load";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

const navBar = document.querySelector(".navbar");

navBar.addEventListener("click", (event) => {
    if (event.target.dataset.option === "home") {
        document.querySelector("#content").innerHTML = "";
        pageLoad();
    } else if (event.target.dataset.option === "menu") {
        document.querySelector("#content").innerHTML = "";
        loadMenu();
    } else if (event.target.dataset.option === "about") {
        document.querySelector("#content").innerHTML = "";
        loadAbout();
    }
});

pageLoad()
