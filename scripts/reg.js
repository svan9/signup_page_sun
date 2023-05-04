import "./env.js";

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


$(".send-button").on("click", function () {
    const name = $("#name > input").val();
    const password = $("#password > input").val();
    const password_check = $("#password-check > input").val();
    if (password != password_check) {
        $(".error-match").removeAttr("hidden");
        this.style.backgroundColor = "var(--plt1-error-1-)";
        return;
    }
    var id = -1;
    var http = new XMLHttpRequest();
    var url = "https://functions.yandexcloud.net/d4e3ske4c2k4an1ad4p2?integration=raw";
    // http.open("POST", url, true);
    // http.setRequestHeader("Content-type", "text/xml");
    // http.onload = function () {
    //     console.log(http.response);
    // };
    // http.send();
    // $.ajax({
    //     type: "method",
    //     url: "url",
    //     data: "data",
    //     dataType: "dataType",
    //     success: function (response) {
            
    //     }
    // });

    (async function () {
        let f = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "text/json" },
            body: { query: "SELECT id FROM `s/users` ORDER BY id DESC LIMIT 1" },
            mode: "no-cors",
        });
        console.log(f);
    })();
    //"SELECT id FROM `s/users` ORDER BY id DESC LIMIT 1"
    //`SELECT * FROM \`s/users\` WHERE name = "${name}" `
    // $.cookie("name", name);
    // $.cookie("loading", {  });
    // gotos("/loading_2");
});

$("#password-check > input, #password > input").on("input", function () {
    $(".error-match").attr("hidden", "true");
    $(".send-button").removeAttr("style");
});
