"use strict";
function el(e) {
    return document.getElementById(e)
}
function copyToClipBoard(e) {
    var t, n, o, a, l = document;
    e = l.createTextNode(e), t = window, n = l.body, n.appendChild(e), n.createTextRange ? (o = n.createTextRange(), o.moveToElementText(e), o.select(), l.execCommand("copy")) : (o = l.createRange(), a = t.getSelection, o.selectNodeContents(e), a().removeAllRanges(), a().addRange(o), l.execCommand("copy"), a().removeAllRanges()), e.remove()
}
function copyElementToClipboard(e) {
    window.getSelection().removeAllRanges();
    var t = document.createRange();
    t.selectNode("string" == typeof e ? document.getElementById(e) : e), window.getSelection().addRange(t), document.execCommand("copy"), window.getSelection().removeAllRanges()
}

function b64EncodeUnicode(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
        return String.fromCharCode("0x" + t)
    }))
}
function b64DecodeUnicode(e) {
    return decodeURIComponent(atob(e).split("").map(function(e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
    }).join(""))
}
function copyText() {
    if (document.getElementById("source_txt")) {
        var e = document.getElementById("source_txt");
        e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy")
    }
}
function idleLogout() {
    function e() {
        window.location.reload()
    }

    function t() {
        clearTimeout(n), n = setTimeout(e, 6e5)
    }
    var n;
    window.onload = t, window.onmousemove = t, window.onmousedown = t, window.ontouchstart = t, window.ontouchmove = t, window.onclick = t, window.onkeydown = t, window.addEventListener("scroll", t, !0)
}
var utf8ToBin, binToUtf8, ajax_url, base_url, tooltipTriggerList, tooltipList, source_txt, popoverTriggerList, popoverList;

 ajax_url = document.getElementById("ajax_url").value, base_url = document.getElementById("base_url").value, tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), 
function() {
        if (feather.replace(), count_words(), idleLogout(), document.getElementById("wheel-container")) {
            loadWheel();
            var e = getCookie("wheel_list");
            e && createButtonFromCookies(e)
        }
    }();
//# sourceMappingURL=myapp.min.js.map