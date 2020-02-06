fetch('https://xkcd.now.sh/?comic=latest')
	.then(response => {
		return response.json()
	})
	.then(data => {
		console.log(JSON.stringify(data))
	})