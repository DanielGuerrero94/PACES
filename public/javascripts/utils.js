var croppie 
function edit_croppie() {
  image = document.getElementById('my-image');
  croppie = new Croppie(image, {
    enableExif: true,
    viewport: {
      width: 200,
      height: 200,
      type: 'circle'
    },
    boundary: {
      width: 300,
      height: 300
    }
  })

}

function save_croppie() {
  croppie.result('blob').then(function(blob) {
    // do something with cropped blob
    console.log('asd')
    console.log(blob)
  });
}

var edits = document.getElementsByClassName("edit");

for(let i of edits) {
	i.addEventListener("click", edit_croppie);
}

var saves = document.getElementsByClassName("save");

for(let i of saves) {
	i.addEventListener("click", save_croppie);
}


