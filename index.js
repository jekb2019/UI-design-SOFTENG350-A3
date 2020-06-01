// Share Function
const shareButton = document.querySelector(".share-btn");
const sharePopup = document.querySelector("#share-popup");

shareButton.addEventListener('click',openSharePopup);
document.querySelector(".buttons__share").addEventListener('click',()=>{
    closeSharePopup();
    alert("Successfully Shared!");
});
document.querySelector(".buttons__cancel").addEventListener('click',closeSharePopup);
document.querySelector(".x").addEventListener('click',closeSharePopup);

function closeSharePopup(){
    sharePopup.style.display = "none";
};
function openSharePopup(){
    sharePopup.style.display = "flex";
};