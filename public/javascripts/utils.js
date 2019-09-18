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

function back_test() {
	history.back()
}

function is_home() {
	return document.URL.split('/')[3] == ""
}

function set_clicks() {
	//edit
var edits = document.getElementsByClassName("edit");

for(let i of edits) {
	i.addEventListener("click", edit_croppie);
}
	//save
var saves = document.getElementsByClassName("save");

for(let i of saves) {
	i.addEventListener("click", save_croppie);
}
	//back
	if (!is_home()) {
	var back = document.getElementById("volver");
	back.addEventListener("click", back_test)
	}

}


set_clicks()


