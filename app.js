function openProduct(productNumber){
    let popup = document.getElementById(`popup${productNumber}`);
    let background = document.getElementById("body");

    popup.classList.toggle("openProductPopup");
    background.classList.toggle("bodyPopup");
}

function closeProduct(productNumber){
    let popup = document.getElementById(`popup${productNumber}`);
    let background = document.getElementById("body");

    popup.classList.remove("openProductPopup");
    background.classList.remove("bodyPopup");
}