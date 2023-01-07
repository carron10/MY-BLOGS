$(function () {
    var u = location.pathname;
    $.get("chatsfly.co.zw/like", {url: u}).done(function (d) {
        $("#likee").html(d);
        $("#likee .btn").click(function () {
            var b = $(this), l = b.attr("id");
            $.ajax("/like", {method: "POST", data: {url: u, v: l}}).done(function (d) {
                var s = b.find("span");
                s.text(d);
            });
        });
    });
});



