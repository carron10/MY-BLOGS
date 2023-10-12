$(function () {
    var cc = '';
    $("#search").click(function () {
        if ($(this).hasClass("hi")) {
            $(this).removeClass("hi");
            $(this).html(cc);
            $("#search_form").hide();
        } else {
            $("#search_form").show();
            $(this).addClass("hi");
            cc = $(this).html();
            $(this).html("hide");
        }
    });
    $("#contact").click(function () {
        $.get("/contact.html").done(function (data) {
            $("body").append(data);
        });
    });
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    var btn = $('#go_up');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.show();
        } else {
            btn.hide();
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});
function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}