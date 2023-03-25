$('#Maincontainer').load('#Maincontainer > *')


	loadSupportContacts(); 
	loadResource();

function loadSupportContacts(){
	alert('inside loadSupportContacts');
	var url = "https://infoblox323.github.io/jsonapi/supportContacts.json";
	$.ajax({
	url: url,
	type: "get",
	dataType: 'text',
	error: function(data) {
		//debugger;
		alert('err');
	},
	success: function(data) {
		const obj = JSON.parse(data);
		console.log('DATA'+obj);
		var len = obj.length;
		if (obj) {
			var txt = "";
			if (len > 0) {
				for (var i = 0; i < len; i++) {
					var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p></div></div></li>"
					if (liAdd != "") {
						$("#ContactsList").append(liAdd);
					}
				}
			}
		}
	}
});

}

function loadResource(){
	alert('inside loadSupportContacts');
	var url = "https://infoblox323.github.io/jsonapi/Resources.json";
	$.ajax({
	url: url,
	type: "get",
	dataType: 'text',
	error: function(data) {
		//debugger;
		alert('err');
	},
	success: function(data) {
		const obj = JSON.parse(data);
		console.log('DATA'+obj);
		var len = obj.length;
		if (obj) {
			var txt = "";
			if (len > 0) {
				for (var i = 0; i < len; i++) {
					console.log('DATA'+obj[i].Name);
					var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p><a href='"+obj[i].URL+"' target='_blank' >"+obj[i].Title+"</a></div></div></li>"
					if (liAdd != "") {
					$("#resourceList").append(liAdd);
					}
				}
			}
		}
	}
});

}

function loadcolumn1(){
	loadSupportContacts();
	loadResource();
}



