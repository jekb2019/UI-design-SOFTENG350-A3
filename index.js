// Share Function
const shareButton = document.querySelector(".share-btn");
const sharePopup = document.querySelector("#share-popup");
const successPopup = document.querySelector("#share-succeeded");
const advancedShare = document.querySelector(".advanced span");

shareButton.addEventListener('click',openSharePopup);
document.querySelector(".buttons__share").addEventListener('click',()=>{
    closeSharePopup();
    openSuccessPopup();
});
document.querySelector(".buttons__cancel").addEventListener('click',closeSharePopup);
document.querySelector(".x").addEventListener('click',closeSharePopup);
document.querySelector(".ok").addEventListener('click',closeSuccessPopup);
advancedShare.addEventListener('click',()=>{
    alert("hi");
});

function closeSuccessPopup(){
    successPopup.style.display = "none";
}
function openSuccessPopup(){
    successPopup.style.display = "flex";
}
function closeSharePopup(){
    sharePopup.style.display = "none";
};
function openSharePopup(){
    sharePopup.style.display = "flex";
};