/* Tri Event List Project JS */
var ul = $("ul");
var delBtns = $(".del-event-btn");
var lis = $("li");
var txtbx = $("#event-lstbox-txtbox");
var openLI = '<li><span class="del-event-btn"><i class="fas fa-trash-alt"></i></span> ';
var closeLIbeg = '<img class="event-icon" id="';
var closeLIend = '"></li>';
var addBtn = $(".add-event-btn");
//Gets the iconName for the <li> tag
function GetIconString(input) {
    var iconName;
    input = input.toLowerCase();
    if (input.includes("swim")) {
        iconName = "swimIcon";
    }
    else if (input.includes("run") || input.includes("jog")) {
        iconName = "runIcon";
    }
    else if (input.includes("bike") || input.includes("cycle")) {
        iconName = "bikeIcon";
    }
    else {
        iconName = "finishIcon";
    }
    return iconName;
}
//Delete specific exercises when the <span> is clicked
//Adds eventListener to current and future <span> tags
ul.on("click", ".del-event-btn", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
//Add new <li> tags
txtbx.on("keypress", function (event) {
    if (event.which === 13) {
        var txtInput = $(this).val().toString();
        var icon = GetIconString(txtInput);
        ul.append(openLI + txtInput + closeLIbeg + icon + closeLIend);
        $(this).val("");
    }
});
addBtn.on("click", function () {
    txtbx.fadeToggle();
});
