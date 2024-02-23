var stuff = {
  "backgrounds": [
    "assets/crylaugh.png"
  ]
}



for (i in stuff["backgrounds"]) {
  var node = document.querySelector("img.bg-choose").cloneNode(true);
  node.setAttribute("src", `${stuff["backgrounds"][i]}`);
  node.setAttribute("onclick", `change_background(${i})`);
  node.classList.remove("template");
  document.querySelector(".background-choose").appendChild(node);
}

function on_text_change() {
  document.querySelector(".funny h2").innerHTML = document.querySelector("input.inputtext").value;
  
}

function change_background(id) {
  document.querySelector(".funny img").setAttribute("src", `${stuff["backgrounds"][id]}`);
}


function download_image()
{
    var c = document.querySelector('.funny');
    var t = c.getContext('2d');
    window.location.href = image;

    window.open('', document.querySelector('.funny').toDataURL());
}