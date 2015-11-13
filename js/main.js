$(document).ready(function () {

    $(".fancybox").fancybox();

    $("#save").click(function () {
        setTimeout(function () {
            $.fancybox.close();
        }, 1000);
    })

});
