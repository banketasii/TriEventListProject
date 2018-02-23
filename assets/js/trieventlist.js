"use strict";
/* Tri Event List Project JS */
let ul = $("ul");
let delBtns = $(".del-event-btn");
let lis = $("li");
let txtbx = $("#event-lstbox-txtbox");
let openLI = '<li><span class="del-event-btn"><i class="fas fa-trash-alt"></i></span> ';
let closeLIbeg = '<img class="event-icon" id="';
let closeLIend = '"></li>';
let addBtn = $(".add-event-btn");
/* @Incomplete - Needs refactoring!!!  Too much stuff happening
  in the event listeners
  ***Update - Refactored a bit.  Still more to come.
*/
//Gets the iconName for the <li> tag
function GetIconString(input) {
    let iconName;
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
    let txtInput;
    let icon;
    if (event.which === 13) {
        txtInput = txtbx.val().toString();
        icon = GetIconString(txtInput);
        ul.append(openLI + txtInput + closeLIbeg + icon + closeLIend);
        txtbx.val("");
    }
});
addBtn.on("click", function () {
    txtbx.fadeToggle();
});
