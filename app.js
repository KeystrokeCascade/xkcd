fetch('https://xkcd.now.sh/?comic=latest')
	.then(response => {
		return response.json()
	})
	.then(data => {
		console.log(JSON.stringify(data))
		
		var img = document.createElement("img");
		img.src = data.img;
		//img.width = width;
		//img.height = height;
		img.alt = data.alt;

		// This next line will just add it to the <body> tag
		document.body.appendChild(img);
	})