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
		img.alt = data.title;
		
		//creates anchor element and assigns a link to it
		var a = document.createElement("a")
		a.href = "https://xkcd.com/" + data.num

		//attaches the image to the id
		document.getElementById("img").appendChild(a);
		document.querySelector("a").appendChild(img);
	})

//settings menu
function settings() {
	document.getElementById("dropdown").classList.toggle("show");
}

//gets search engine
function getSearch() {
	var search = document.getElementById("search").value;
	if (search == "google") {
		search = "https://www.google.com/search"
	} else if (search == "duckduckgo") {
		search = "https://duckduckgo.com/"
	} else {
		search = "https://bing.com"
	}
	//sets form
	var form = document.querySelector("form");
	form.action = search;
}

getSearch();