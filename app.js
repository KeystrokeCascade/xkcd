//fetches the latest xkcd comic
fetch("https://xkcd.now.sh/?comic=latest")
	.then(response => {
		return response.json()
	})
	.then(data => {

		//checks current xkcd against browser storage
		var current = data.num;
		var lastXKCD = localStorage.getItem("current_xkcd")
		if (lastXKCD != current) {
		
			//sets latest xkcd
			setXKCD(data, current);
		} else {
			
			//generates a random xkcd number
			var rand = Math.ceil(Math.random() * Math.floor(current));
			
			//fetches a random xkcd comic
			fetch("https://xkcd.now.sh/?comic=" + rand)
				.then(response => {
					return response.json()
				})
				.then(data => {
					
					//sets random xkcd
					setXKCD(data, current);
				})
		}
		
		localStorage.setItem("current_xkcd", current)
	})

function setXKCD(data, current) {

	//creates image element and assigns the comic to it
	var img = document.createElement("img");
	img.src = data.img;
	img.title = data.alt;
	img.alt = data.title;
	
	//creates anchor element and assigns a link to it
	var a = document.createElement("a");
	a.href = "https://xkcd.com/" + data.num;

	//attaches the image to the id
	document.getElementById("img").appendChild(a);
	document.querySelector("a").appendChild(img);
	
	//sets search bar placeholder to comic number
	var input = document.querySelector("form input");
	if (current == data.num) {
		input.placeholder = "New xkcd " + data.num;
	} else {
		input.placeholder = "xkcd " + data.num;
	}
}

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