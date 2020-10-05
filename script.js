var mailEntry = document.querySelector(".email");
var pasEntry = document.querySelector(".password");
var submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (mailEntry.textContent != null) {
        if (pasEntry.textContent != null) {
            alert(pasEntry.textContent);
        }
    }
});