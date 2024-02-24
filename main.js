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
  ],
  "settings": {
    "text": "hello world",
    "colour": "#ffffff",
    "size": 50
  }
}



for (i in stuff["backgrounds"]) {
  var node = document.querySelector("img.bg-choose").cloneNode(true);
  node.setAttribute("src", `${stuff["backgrounds"][i]}`);
  node.setAttribute("onclick", `change_background(${i})`);
  node.classList.remove("template");
  document.querySelector(".background-choose").appendChild(node);
}

var update_interval = setInterval( () => {

  stuff["settings"]["text"] = document.querySelector("input.inputtext").value;
  stuff["settings"]["colour"] = document.querySelector(`input[type="color"]`).value;
  stuff["settings"]["size"] = `calc( 1.75em * ${parseInt(document.querySelector(`input[type="range"]`).value) / 50})`;

  if ( document.querySelector(".funny h2").innerHTML != stuff["settings"]["text"] ) {
    document.querySelector(".funny h2").innerHTML = stuff["settings"]["text"];
  }
  if ( document.querySelector(".funny h2").style.color != stuff["settings"]["colour"] ) {
    document.querySelector(".funny h2").style.color = stuff["settings"]["colour"];
  }
  if ( document.querySelector(".funny h2").style.fontSize != stuff["settings"]["size"] ) {
    document.querySelector(".funny h2").style.fontSize = stuff["settings"]["size"];
  }

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