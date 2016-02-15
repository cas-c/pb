// Example usage: 
// <img id="switchme" src="someimage.jpeg" />
// <button onclick="switch_map('example')">example</button>
// On button click, src will switch from 'someimage.jpeg'
// to the item in the 'srcs' object related to key 'example'.

srcs = {
	'example': 'the key you pass in will match the url here',
	'example2': 'feel free to put in as many as you want'
}

function switch_map(new_map) {
	$('#switchme')[0].src = srcs[new_map];
}