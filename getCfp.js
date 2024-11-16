function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}
var getCfp = function() {
    var Dt = document.createElement("canvas");
    if (!Dt.getContext)
        return !1;
    try {
        var Ut = [];
        Dt.width = 2000,
        Dt.height = 200,
        Dt.style.display = "inline";
        var Ft = Dt.getContext("2d");
        return !!Ft && (Ft.rect(0, 0, 10, 10),
        Ft.rect(2, 2, 6, 6),
        Ut.push(("canvas winding:").concat(!1 === Ft.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
        Ft.textBaseline = "alphabetic",
        Ft.fillStyle = "#f60",
        Ft.fillRect(125, 1, 62, 20),
        Ft.fillStyle = "#069",
        Ft.font = "11pt no-real-font-123",
        Ft.fillText('Cwm fjordbank glyphs vext quiz, 😃', 2, 15),
        Ft.fillStyle = "rgba(102, 204, 0, 0.2)",
        Ft.font = '18pt Arial',
        Ft.fillText('Cwm fjordbank glyphs vext quiz, 😃', 4, 45),
        Ft.globalCompositeOperation = "multiply",
        Ft.fillStyle = 'rgb(255,0,255)',
        Ft.beginPath(),
        Ft.arc(50, 50, 50, 0, 2 * Math.PI, !0),
        Ft.closePath(),
        Ft.fill(),
        Ft.fillStyle = 'rgb(0,255,255)',
        Ft.beginPath(),
        Ft.arc(100, 50, 50, 0, 2 * Math.PI, !0),
        Ft.closePath(),
        Ft.fill(),
        Ft.fillStyle = 'rgb(255,255,0)',
        Ft.beginPath(),
        Ft.arc(75, 100, 50, 0, 2 * Math.PI, !0),
        Ft.closePath(),
        Ft.fill(),
        Ft.fillStyle = 'rgb(255,0,255)',
        Ft.arc(75, 75, 75, 0, 2 * Math.PI, !0),
        Ft.arc(75, 75, 25, 0, 2 * Math.PI, !0),
        Ft.fill("evenodd"),
        Ut.push(('canvas fp:').concat(Dt.toDataURL())),
        (0,hashCode)(Ut.join("~")))
    } catch (t) {
        return !1
    }
}
console.log(getCfp())
