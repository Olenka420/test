export function closeBtnF(){
    closeBtn.addEventListener("click", function(event) {
        event.preventDefault();
        overlay.style.height = "0";
    });
}