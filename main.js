var stuff = {
  "backgrounds": [
    "assets/smiley.png",
    "assets/crylaugh.png",
    "assets/hearteyes.png",
    "assets/fire.png",
    "assets/hearts.png",
    "assets/roses.png",
    "assets/poop.png",
    "assets/stairs.png",
    "assets/rubberroom.png",
    "assets/tubefunny.png",
    "assets/blueandgreen.png"
  ]
}



for (i in stuff["backgrounds"]) {
  var node = document.querySelector("img.bg-choose").cloneNode(true);
  node.setAttribute("src", `${stuff["backgrounds"][i]}`);
  node.setAttribute("onclick", `change_background(${i})`);
  node.classList.remove("template");
  document.querySelector(".background-choose").appendChild(node);
}

var update_interval = setInterval( () => {
  document.querySelector(".funny h2").innerHTML = document.querySelector("input.inputtext").value;
  document.querySelector(".funny h2").style.color = document.querySelector(`input[type="color"]`).value
  document.querySelector(".funny h2").style.fontSize = ( parseInt(document.querySelector(`input[type="range"]`).value) * 2 )

}, 25);

function change_background(id) {
  document.querySelector(".funny img").setAttribute("src", `${stuff["backgrounds"][id]}`);
}

function download_image() {
  html2canvas(document.querySelector(".funny")).then(canvas => {
    canvas.toBlob(function(blob) { 
      saveAs(blob, "facebook.png");
    });
  });
}