const nav = document.querySelector(".nav")
const navBtn = document.querySelector('.nav-btn')
const btnDarMode = document.querySelector ('.dark-mode-btn')

navBtn.onclick = () => {
        if (nav.classList.toggle("open")) {

        } else {

        }
}


if (localStorage.getItem('darkMode') === 'dark') {
        btnDarMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("light");
}


if (window.matchMedia && window.matchMedia("(prefers-color-scheme:light)").matches ) {
        btnDarMode.classList.toggle("dark-mode-btn--active");
        document.body.classList.toggle("light");
}


window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "light") {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("light");
        localStorage.setItem("darkMode", "light");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("light");
        localStorage.setItem("darkMode", "dark");
    }
})

btnDarMode.onclick = () => {
        btnDarMode.classList.toggle("dark-mode-btn--active");
        const isDark=document.body.classList.toggle("light");

        if (isDark) {
                localStorage.setItem("darkMode", "light");
            } else {
                localStorage.setItem("darkMode", "dark");
            }
}







