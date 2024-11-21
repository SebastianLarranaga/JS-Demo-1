console.log("Hello, World!");

console.log("later code");

$("#num-19").on("click", function () {
    console.log("You clicked on the 19th day of the month");
    $(this).append("<h2>World</h2>")
    $(this).append("<h2>Toilet Day</h2>")
    $(this).css("background-image", "url(imgs/wtd.webp)")
    $(this).css("background-size", "cover")
    $(this).css("color", "white")
    $(this).unbind("click");
});

$("#num-20").on("dblclick", function () {
    $(this).addClass("wcd");
    $(this).append("<h2>World Children's Day</h2>")
    $(this).unbind("dblclick");
});

$("#num-21").addClass("wtd");

$(".hide-days").on("click", function () {
    console.log("Clicked on title");
    $("#num-22, #num-23, #num-24").fadeToggle(2000)
});

$(document).on("keypress", function (e) {
    console.log("You pressed " + e.key);
    if (e.key == "v") {
        $("#num-21").html("November 21");
        $("#num-21").append("<h2>World Television Day</h2>")
    }
})



$("#num-25").addClass("idevaw");
$("#num-25").append("<h2>International Day for the Elimination of Violence agaist Women</h2>")

$("#num-26").addClass("wstd");
$("#num-26").append("<h2>World Sustainable Transport Day</h2>")