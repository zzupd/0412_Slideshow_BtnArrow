$(function () {


    $("#btnArrowPrev").click(function () {

        $("#shuttleFrame").css({"margin-left": "-310px"});
        $("#shuttleFrame table:last-child").insertBefore("#shuttleFrame table:first-child");

        $("#shuttleFrame").animate({
                "margin-left": "0"
            },
            800,
            "swing"
        );
    });



    $("#btnArrowNext").click(function () {
        $("#shuttleFrame").animate({
                "margin-left": "-310px"
            },
            800,
            "swing",
            function() {
                $("#shuttleFrame table:first-child").insertAfter("#shuttleFrame table:last-child");
                $("#shuttleFrame").css({"margin-left": "0"});
            }

        );
    });


});
