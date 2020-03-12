const bar = document.querySelector('#bar');
const sidebar = document.querySelector('#side-navbar');
const mediaPhoneWidth = 599;

window.onresize = () => {
    if (window.innerWidth > mediaPhoneWidth)
        sidebar.style.display = "block";
    else
        sidebar.style.display = "none";
};

function onBarClick(event) {
    if (window.innerWidth <= mediaPhoneWidth) {
        if (event.target === bar)
            sidebar.style.display = "block";
        else
            sidebar.style.display = "none";
    }
}