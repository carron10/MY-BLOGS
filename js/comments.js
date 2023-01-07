
$(function () {
    var url = location.pathname;
    $.get("/countcomments",{url: url}).done(function(d){
        $("#view_comments i").text(d);
    });
    function subl(){
        $(document.comment).submit(function (e) {
                e.preventDefault();
                var name = this.uname.value, msg = this.msg.value, id = this.id.value, email = this.email.value, btn = $(this.send);
                var a = $(this).find(".callback");
                if (this.checkValidity() === true) {
                    btn.attr("disabled", true);
                    btn.html(" <span class=\"spinner-grow spinner-grow-sm\" id=\"loader\" role=\"status\" aria-hidden=\"true\"></span>Sending....");
                    $.ajax({url: "/comments", method: "post", data: {
                            email: email, uname: name, msg: msg, id: id, url: url
                        }}).done(function (e) {
                        a.html(e);
                    }).fail(function (e) {
                        a.html("there is an error while trying to send data");
                    }).always(function () {
                        btn.attr("disabled", false);
                        a.show();
                        btn.html("Send");
                    });
                }
                $(this).addClass("was-validated");
            });
    }
    function show_comments() {
        var connect = '';
        function render(data) {
            $.each(data, function (k, v) {
                var user = v.user, msg = v.msg, reply_to = v.reply_to, date = v.date, id = v.id;
                var img = "<i class=\"p-1 bg-light mt-1 "+(reply_to === null?"mr-1":"ml-1")+"  align-self-start r1 fa fa-user-circle fa-2x\"></i>";
                connect += "<div class=\"media\">\n";
                connect = reply_to === null ? connect + img : connect + '';
                connect += "            <div class=\"media-body rounded-0 my-1\">\n" +
                        "                <div class=\"replying p-1 m-0\">\n";

                connect = reply_to === null ? connect + "<p><b>" + user + "</b><br>\n" : connect + "<p><b>" + user + "</b> Replied to <b>" + reply_to + "</b><br>\n";
                connect += "                        <b class=\"fa fa-calendar small\"><i> " + date + "</i></b><br>\n" +
                        "                        <i class=\"fa fa-comment fg-green\"></i>" + msg + "\n" +
                        "                    </p> \n" +
                        "                    <div class=\"text-left m-0 p-0\">\n" +
                        "                        <a class=\"btn btn-sm text-white btn-succes pr-2 bg-success\" data-toggle=\"collapse\" href=\"#n" + id + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"comm\" ><b>Reply</b></a>\n" +
                        "                    </div> \n" +
                        "                </div>\n" +
                        "                <div class=\"bg-white p-2 m-0 collapse\" id=\"n" + id + "\" data-parent=\"#comments\">\n" +
                        "                    <p class=\" text-center\">Reply to <b>" + user + "</b></p>\n" +
                        "                    <hr class=\"l-2\">\n" +
                        "                    <form name=\"comment\" class=\"needs-validation\" novalidate>\n" +
                        "<div class=\" callback alert alert-info\" style=\"display:none\"></div>" +
                        "<input style=\"display:none\" name=\"id\" value=\"" + id + "\">" +
                        "                        <label>Comments</label>\n" +
                        "                        <textarea class=\"form-control form-control-sm\" name=\"msg\" rows=\"5\" placeholder=\"Enter your Comment here\" required></textarea>\n" +
                        "<i class=\"small invalid-feedback\">Please enter your message!</i>" +
                        "                        <label>Your Name</label>\n" +
                        "                        <input type=\"text\" class=\" form-control form-control-sm\"  name=\"uname\" placeholder=\"Enter your username\" required>" +
                        "<i class=\"small invalid-feedback\">Enter valid username!</i>" +
                        "                        <label>Email</label>\n" +
                        "                        <input type=\"email\" class=\" form-control form-control-sm\" name=\"email\" placeholder=\"Enter your Email\" required>\n" +
                        "<i class=\"small invalid-feedback\">Enter valid Email!</i><br>" +
                        "                        <button name=\"send\" class=\"btn btn-sm btn-success\" type=\"submit\">Send</button>\n" +
                        "                    </form>\n" +
                        "                </div>\n" +
                        "            </div>\n";

                connect = reply_to === null ? connect + '' : connect + img;
                connect += "</div>";
                if (v.replies !== null) {
                    render(v.replies);
                }
            });
        }
        $.getJSON("/comments", {url: url}).done(function (data) {
            render(data);
            if (connect === '') {
                $("#comments .comment-section").html('<div class="text-center p-4">No comments so far, Be the first to comment <i class="fa  fa-frown-o"></i></div>');
            } else {
                $("#comments .comment-section").append(connect);
            }
            $("#comments").addClass("v");
            subl();
        });
    }

    $("#leave_comment").click(function () {
        $("#comments").hide();
        $("#view_comments span").text("View Comments");
        if ($(this).hasClass("v")) {
            $(this).text("Leave Comment");
            $(this).removeClass("v");
            $("#comment").hide();
            $("#c_card").hide();
        } else {
            $(this).addClass("v");
            $(this).text("Close Comment Form");
            $("#comment").show();
            $("#c_card").show();
        }
    });
    $("#view_comments").click(function () {
        $("#comment").hide();
        $("#leave_comment").text("Leave Comment");
        if ($(this).hasClass("v")) {
            $("#view_comments span").text("View Comments");
            $(this).removeClass("v");
            $("#comments").hide();
            $("#c_card").hide();
        } else {
            $(this).addClass("v");
            $("#view_comments span").text("Hide Comments");
            if (!$("#comments").hasClass("v")) {
                show_comments();
            }
            $("#comments").show();
            $("#c_card").show();
        }
    });
    subl();
});