function AddItem() {

	var url = document.getElementById("url").value;
	var song = document.getElementById("songName").value;
	var item = document.createElement("div");

	item.className = 'item';

    item.innerHTML =
        "<img src="+url+"><p class='SongName'>"+song+"</p><span onclick='DeleteItem(this)' class='deleteItem'>X</span>";

    document.getElementById('main').appendChild(item);

}

function DeleteItem(e) {
	e.parentNode.id= 'remove'
    var item = document.getElementById('remove');
    item.parentNode.removeChild(item);
}

$.getJSON('lista.json', function(data) {

	for (var i = 0; i < data.items.length; i++) {

		var item = document.createElement("div");

		item.className = 'item';

    	item.innerHTML = "<img src="+data.items[i].url+"><p class='SongName'>"+data.items[i].song+"</p><span onclick='DeleteItem(this)' class='deleteItem'>X</span>";

   		 document.getElementById('main').appendChild(item);
	}
});