$(document).ready(function() {
	loadSupportContacts();
	loadResource();
	loadConnectDetails();
	loadERGDetails();
	$("a").on("click", function() {
		if ($(this).text() === 'Helpful Resources & Links') {
			loadSupportContacts();
			loadResource();
			loadConnectDetails();
			loadERGDetails();
			alert('Helpful Resources & Links');
		}
		else if ($(this).text() === 'Welcome to Infoblox') {
			alert('Welcome to Infoblox');
		}
		else if ($(this).text() === 'About Infoblox') {
			alert('About Infoblox');
		}

	});
});




function loadSupportContacts() {
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

function loadResource() {
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
			console.log('DATA' + obj);
			var len = obj.length;
			if (obj) {
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p><a href='" + obj[i].URL + "' target='_blank' >" + obj[i].Title + "</a></div></div></li>"
						if (liAdd != "") {
							$("#resourceList").append(liAdd);
						}
					}
				}
			}
		}
	});

}

function loadConnectDetails() {
	var url = "https://infoblox323.github.io/jsonapi/ConnectwithUs.json";
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
			var len = obj.length;
			if (obj) {
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p><a href='" + obj[i].URL + "' target='_blank' >" + obj[i].Title + "</a></div></div></li>"
						if (liAdd != "") {
							$("#connectList").append(liAdd);
						}
					}
				}
			}
		}
	});

}

function loadERGDetails() {
	var url = "https://infoblox323.github.io/jsonapi/EmployeeResourceGroups.json";
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
			var len = obj.length;
			if (obj) {
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p></a></div></div></li>"
						if (liAdd != "") {
							$("#ERGList").append(liAdd);
						}
					}
				}
			}
		}
	});

}
