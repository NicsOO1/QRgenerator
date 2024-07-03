const input = document.getElementById("inputfield");
const qrImage = document.getElementById("qrImage");
const qrBox = document.getElementById("qrBox");
const btn = document.getElementById("btn")

function generateQR() {

  if(input.value==""){
    window.alert("Enter any text/Paste URL");
  }
else{
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;

  // Add a class to animate the QR code
  qrImage.classList.add("animate-qr");

  qrImage.style.display = "inline-block";
}

}

// Listen for the animation end event to remove the class
qrImage.addEventListener("animationend", () => {
  qrImage.classList.remove("animate-qr");
});
