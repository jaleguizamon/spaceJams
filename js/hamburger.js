$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$(".hvr-pulse-grow").css("visibility", "hidden");
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$(".hvr-pulse-grow").css("visibility", "visible");
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
