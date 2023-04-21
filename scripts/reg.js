$(".show-password").on("click", function () {
    let parent = $(this.getAttribute("parent"));
    if (this.getAttribute("hide") == "false") {
        this.setAttribute("hide", "true");
        parent.attr("type", "text");
        this.innerHTML = `<i class="fi fi-rr-eye-crossed"></i>`;
    } else if (this.getAttribute("hide") == "true") {
        this.setAttribute("hide", "false");
        parent.attr("type", "password");
        this.innerHTML = `<i class="fi fi-rr-eye"></i>`;
    }
});

document.body.addEventListener("mouseenter", function (e) {
    if (window.screen.availWidth > 425) {
        let cursor = $("span.cursor");
        cursor.css("opacity", "1");
    }
});
document.body.addEventListener("mouseleave", function (e) {
    if (window.screen.availWidth > 425) {
        let cursor = $("span.cursor");
        cursor.css("opacity", "0");
    }
});
document.body.addEventListener("mousemove", function (e) {
    const div = 10;
    let form = $(".form");
    let cursor = $("span.cursor");
    let dom = form[0].getBoundingClientRect();
    let centerX = dom.left + dom.width / 2;
    let centerY = dom.top + dom.height / 2;
    let x = e.pageX;
    let y = e.pageY;
    form.css("--this-box-shadow-x", `${parseInt((centerX - x) / div)}px`);
    form.css("--this-box-shadow-y", `${parseInt((centerY - y) / div)}px`);
    if (window.screen.availWidth > 425) {
        cursor.css({
            top: y + "px",
            left: x + "px",
        });
    }
});
const gotos = (path) =>
    (document.location.href =
        document.location.href.replace(
            /\/([^\/]*)\/$/gm.exec(document.location.href)[0],
            ""
        ) + path);

$(".send-button").on("click", function () {
    const name = $("#name > input").val();
    // const password = $("#password > input").val();
    $.cookie("name", name);
    gotos("/loading_2");
});
