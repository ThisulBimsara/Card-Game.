function main() {
  let confrim = document.getElementById("mainresult").innerHTML;
  if (confrim == "පැන්චෝ... ඔයා පැරදී , තව පාරක් උත්සහ කරන්න...!") {
    alert("Game over!please restart the game");
  } else {
    let x;
    do {
      x = Math.floor(Math.random() * (100 / 7.6));
    } while (x === 0);

    // Get the current value from 'result' element and parse it as an integer
    let currentII = parseInt(document.getElementById("result").innerHTML) || 0;
    let total = currentII + x;

    // Update the 'result' element with the new total
    document.getElementById("result").innerHTML = total;

    if (total < 21) {
      document.getElementById("mainresult").innerHTML = "තව කොලයක් බලන්න";
    } else if (total == 21) {
      document.getElementById("mainresult").innerHTML =
        "දිනන එක දින්නා ලොවෙත් නැති වෙන්න...!";
      alert("ගැම්මක් තමා cuddh");
    } else if (total > 21) {
      document.getElementById("mainresult").innerHTML =
        "පැන්චෝ... ඔයා පැරදී , තව පාරක් උත්සහ කරන්න...!";
      alert("කෑවද බන් ,ඉතිම්...");
    }

    // Create and configure the image element
    var img = document.createElement("img");
    img.src = "photo/" + x + ".png";
    img.height = 250;

    // Append the image to the document body
    document.body.appendChild(img);
  }
}
function restart() {
  location.reload();
}
