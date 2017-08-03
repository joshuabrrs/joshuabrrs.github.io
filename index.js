$( document ).ready(function() {
    var heights = $(".row").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".row").height(maxHeight);
});