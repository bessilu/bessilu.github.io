$(document).ready(function() {
    $('#covers_tab').load('../pages/ability.html');
    $('#profile_tab').load('../pages/kamrun.html');
    $('#covers_tab').hide();
    
    
    $(".slider_button").click(function () {
        $(".slide").toggleClass("hide");
    });
    
    $("#video_trigger").click(function () {
        $("#video_canvas").toggleClass("off").toggleClass("on");
    });
    $("#video_canvas").click(function () {
        $("#video_canvas").toggleClass("off").toggleClass("on");
    });
});