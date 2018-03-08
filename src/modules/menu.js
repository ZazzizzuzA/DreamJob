var $ = require("jQuery");
$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
        // $(this).toggleClass('close');
    });
});