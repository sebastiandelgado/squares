var init = function() { 

	// set up the container
  var body = document.body;
  var container = document.createElement('div');
  container.className = 'container';
  body.appendChild(container)

  // add the rows + squares
  var rows = 20;
  var columns = 40;
  for (var i = 0; i < rows; i++) {
  	var row = document.createElement('div');
  	row.className = 'row';

  	for (var j = 0; j < columns; j++) {
	  	var square = document.createElement('div');
	  	square.className = 'square';
	  	square.style.backgroundColor =  "hsl(" + (((i*5) + j) * 360 / 25) + ", 100%, 50%)";
	  	row.appendChild(square);
  	}

  	container.appendChild(row);
  }
};