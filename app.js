//fetches the latest xkcd comic
fetch('https://xkcd.now.sh/?comic=latest')
	.then(response => {
		return response.json()
	})
	.then(data => {

		//creates image element and assigns the comic to it
		var img = document.createElement("img");
		img.src = data.img;
		img.title = data.alt;
		
		//creates anchor element and assigns a link to it
		var a = document.createElement("A")
		a.href = "https://xkcd.com/" + data.num

		//attaches the image to the id
		document.getElementById("img").appendChild(a);
		document.querySelector("a").appendChild(img);
	})