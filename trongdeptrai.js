document.onkeydown = function(t) {
    if (t.ctrlKey && 85 === t.keyCode) {
        if (1 != confirm("Tempalte by Bảo Trọng?")) return alert("Địt mẹ mày =))"), !1;
        alert("OK, Người ta cho đằng ấy copy đấy nha. Ahihi!!!")
    }
}, console.log("%cDeveloped by Nguyễn Tỉnh 😎=> https://fb.com/StarTinhITMua template liên hệ mình nhé!", "font:2.5em Roboto;color:#ff0000"), $.getScript("https://www.gstatic.com/firebasejs/5.7.2/firebase.js").done(function() {
    function t(t, e, a, o) {
        var n, s = o.find(t).eq(0),
            l = s.attr(a);
        if (null !== localStorage.getItem(e)) {
            var r = JSON.parse(localStorage[e]);
            for (i = 0; i < r.length; i++) r[i] === l && s.addClass(e)
        }
        firebase.database().ref(e + "/" + l + "/total").on("value", function(t) {
            n = t.val() || 0, s.find(".total").eq(0).html(n)
        }), s.on("click", function(t) {
            if (t.preventDefault(), $(this).toggleClass(e), $(this).hasClass(e)) {
                if (null === localStorage.getItem(e)) localStorage.setItem(e, JSON.stringify([l]));
                else {
                    var a = JSON.parse(localStorage[e]);
                    a.filter(function(t) {
                        return t == l
                    }).length || (a.push(l), localStorage.setItem(e, JSON.stringify(a)))
                }
                n++
            } else {
                for (var o = JSON.parse(localStorage[e]), i = 0; i < o.length; i++) o[i] === l && o.splice(i, 1);
                localStorage.setItem(e, JSON.stringify(o)), n--
            }
            firebase.database().ref(e + "/" + l + "/total").set(n)
        })
    }
    firebase.initializeApp({
        apiKey: "AIzaSyDEb0x2A0lG-wmWWfrmbWAvEpY34vRWI6k",
        authDomain: "nguyen-tinh.firebaseapp.com",
        databaseURL: "https://nguyen-tinh.firebaseio.com",
        projectId: "nguyen-tinh",
        storageBucket: "nguyen-tinh.appspot.com",
        messagingSenderId: "509791360495"
    }), $(".post-reaction").each(function() {
        t(".like-button", "like", "data-post-id", $(this)), t(".love-button", "love", "data-post-id", $(this)), t(".haha-button", "haha", "data-post-id", $(this)), t(".wow-button", "wow", "data-post-id", $(this)), t(".sad-button", "sad", "data-post-id", $(this)), t(".angry-button", "angry", "data-post-id", $(this))
    })
});
