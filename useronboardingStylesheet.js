$(document).ready(function() {
	
	loadSupportContacts();
	loadResource();
	loadConnectDetails();
	loadERGDetails();
	loadWelcomevideos();
	
	
	$("#containerVideosList").ready(
	
	
	   $('a').click(function(){
		   
		   window.location.reload(true);
		   console.log('hyperlink clicked');
		   if ($(this).text() === 'Helpful Resources & Links') {
			loadSupportContacts();
			loadResource();
			loadConnectDetails();
			loadERGDetails();
			console.log('Helpful Resources & Links');
		}
		else if ($(this).text() === 'Welcome to Infoblox') {
			loadWelcomevideos();
			console.log('Welcome to Infoblox');
		}
		else if ($(this).text() === 'About Infoblox') {
			console.log('About Infoblox');
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



function loadWelcomevideos() {
	var url = "https://infoblox323.github.io/jsonapi/WelcomeVideos.json";
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
					$("#VideoList").remove();
					
					jQuery('<div>', {
    							id: 'VideoList'
							}).appendTo('#welcomevideosList');
					
					for (var i = 0; i < len; i++) {
						
						jQuery('<li>', {
    								id: 'list'+i,
								    class:'list-group-item',
								}).appendTo('#VideoList');
						
								jQuery('<div>', {
									id: 'list-group-item'+i,
									    class: 'd-flex align-items-center',
									}).appendTo('#list'+i);

									jQuery('<div>', {
	    								id: 'avatar'+i,
									    class: 'flex-shrink-0 me-3',
									}).appendTo('#list-group-item'+i);
									
										var img = $('<img />', { 
												  id: 'Myid'+i,
												  src: obj[i].Icon,
												  alt: obj[i].Title
												});
												//img.appendTo($('#YourDiv'));
												img.appendTo('#avatar'+i);
						
									jQuery('<div>', {
	    								id: 'tileContent'+i,
									    class: 'flex-grow-1',
									}).appendTo('#list-group-item'+i);
										
										jQuery('<h5>', {
	    								id: 'name'+i,
									    class: 'mb-0',
									    text: obj[i].Name 
									}).appendTo('#tileContent'+i);
									
									jQuery('<h6>', {
	    								id: 'title'+i,
									    class: 'mb-0 text-muted',
									    text: obj[i].Title
									}).appendTo('#tileContent'+i);
									
										
									jQuery('<a>', {
	    								id: 'title'+i,
									    class: 'mb-0',
									    text: obj[i].Desc,
									    target:'_blank',
									    href:obj[i].URL
									}).appendTo('#tileContent'+i);
					
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
