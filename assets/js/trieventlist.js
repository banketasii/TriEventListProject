/* Tri Event List Project JS */
var ul = $("ul");
var delBtns = $(".del-btn");
var lis = $("li");
var txtbx = $("#txtbx-event");
var openLI = '<li><span class="del-btn"><i class="fas fa-trash-alt"></i></span> ';
var closeLI = '</li>';
var addBtn = $(".add-btn");
//Delete specific exercises when the <span> is clicked
//Adds eventListener to current and future <span> tags
ul.on("click", ".del-btn", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
//Add new <li> tags
txtbx.on("keypress", function (event) {
    if (event.which === 13) {
        var txtInput = $(this).val().toString();
        ul.append(openLI + txtInput + closeLI);
        $(this).val("");
    }
});
addBtn.on("click", function () {
    txtbx.fadeToggle();
});
