/* Event Listeners */
$('.header-right>a').click(mostraMenu);
$(".hamburger-menu > .close").click(nascondiMenu);


/* Funzioni */
function mostraMenu() {
    $(".hamburger-menu").addClass("active");
};

function nascondiMenu() {
    $(".hamburger-menu").removeClass("active");
};