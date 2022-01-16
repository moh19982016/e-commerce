
$('.nav-item').hover(function () {
        // over
        $(this).children('.sous-cat').slideDown();
    }, function () {
        // out
        $(this).children('.sous-cat').slideUp();
    }
);