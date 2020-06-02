// Share Function
const shareButton = document.querySelector(".share-btn");
const sharePopup = document.querySelector("#share-popup");
const successPopup = document.querySelector("#share-succeeded");
const advancedShare = document.querySelector(".advanced span");
const advancedSharePopup = document.querySelector("#advanced-share");
const advancedSharePopupOk = document.querySelector(".advanced-share__buttons__ok");
const advancedSharePopupCancel = document.querySelector(".advanced-share__buttons__cancel");

shareButton.addEventListener('click',openSharePopup);
document.querySelector(".buttons__share").addEventListener('click',()=>{
    closeSharePopup();
    openSuccessPopup();
});
document.querySelector(".buttons__cancel").addEventListener('click',closeSharePopup);
document.querySelector(".x").addEventListener('click',closeSharePopup);
document.querySelector(".ok").addEventListener('click',closeSuccessPopup);
advancedShare.addEventListener('click',openAdvancedSharePopup);
advancedSharePopupCancel.addEventListener('click', closeAdvancedSharePopup);
advancedSharePopupOk.addEventListener('click',closeAdvancedSharePopup);

function closeAdvancedSharePopup(){
    advancedSharePopup.style.display = "none";
    console.log("hi");
}
function openAdvancedSharePopup(){
    advancedSharePopup.style.display = "block";
}
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