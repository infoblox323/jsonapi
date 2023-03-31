$(document).ready(function() {
	loadSupportContacts();
	loadResource();
	loadConnectDetails();
	loadERGDetails();
	loadWelcomevideos();
	loadESGPolicy() ;
	load_DEI();
	load_HistoryINFBLOX();
	loadCoreValues();
// hide tabs
	$("#_welcomevideos").hide();
	$("#_infobloxhistory").hide();

});


//_welcomevideos
$("#_tabresourcesLink").on("click", function(){
      
	  // hide other tabs 
	   $("#_helpfulResourceLink").show();
	   $("#_welcomevideos").hide();
	   $("#_infobloxhistory").hide();
	   
	   $("#_tabresourcesLink").addClass('active');
	   $("#_tabwelcomevideoLink").removeClass('active');
	   $("#_tababoutInfobloxLink").removeClass('active');

//	   $(this).attr("color","#fff");

	  //background-color: #f5a623;
  //color: #fff;

	  
    });
	
$("#_tabwelcomevideoLink").on("click", function(){
	
	
	   $("#_tabwelcomevideoLink").addClass('active');
	   $("#_tabresourcesLink").removeClass('active');
	   $("#_tababoutInfobloxLink").removeClass('active');
       $("#_welcomevideos").show();
	   $("#_helpfulResourceLink").hide();
	   $("#_infobloxhistory").hide();
	   
	  
	   
    });
	
	//About Infoblox
	
$("#_tababoutInfobloxLink").on("click", function(){
      
	  // hide other tabs 
	   $("#_helpfulResourceLink").hide();
	   $("#_welcomevideos").hide();
	   $("#_infobloxhistory").show();
	   
	   $("#_tabresourcesLink").removeClass('active');
	   $("#_tabwelcomevideoLink").removeClass('active');
	   $("#_tababoutInfobloxLink").addClass('active');

//	   $(this).attr("color","#fff");

	  //background-color: #f5a623;
  //color: #fff;

	  
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
						/*
						<div class='media tm-notification-item'>
                                <div class='tm-gray-circle'><img src="img/notification-01.jpg" alt="Avatar Image" class="rounded-circle"></div>
                                <div class="media-body">
                                    <p class="mb-2"><b>Jessica</b> and <b>6 others</b> sent you new <a href="#"
                                            class="tm-notification-link">product updates</a>. Check new orders.</p>
                                    <span class="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
							var liAdd = "<div class='media tm-notification-item'><div class='tm-gray-circle'><img src='"+ obj[i].Icon + "'alt='Avatar Image' class='rounded-circle'></div><div class='media-body'><div><p class='mb-2'><b>"+ obj[i].Title + "</b> </div>"+" + obj[i].Desc"			
						
						<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p></div></div></li>"
						
						*/
						
						var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p></div></div></li>";
				
						if (liAdd != "") {
							$("#_supportContacts").append(liAdd);
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
							$("#_resources").append(liAdd);
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
							$("#_connectwithUs").append(liAdd);
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
							$("#_erGroups").append(liAdd);
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
							}).appendTo('#_welcomeVideoList');
					
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
									  //  class: 'mb-0 text-muted',
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
							$("#_erGroups").append(liAdd);
						}
					}
				}
			}
		}
	});

}



function loadCoreValues() {
	var url = "https://infoblox323.github.io/jsonapi/coreValues.json";
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
							$("#_coreValues").append(liAdd);
						}
					}
				}
			}
		}
	});

}


function loadESGPolicy() {
	var url = "https://infoblox323.github.io/jsonapi/ESGPolicy.json";
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
						
						jQuery('<li>', {
    								id: '_ESG'+i,
								    class:'list-group-item'
								}).appendTo('#_ESG');
						
								jQuery('<div>', {
									id: '_ESGlist-group-item'+i,
									    class: 'd-flex align-items-center',
									}).appendTo('#_ESG'+i);

									jQuery('<div>', {
	    								id: '_ESGavatar'+i,
									    class: 'flex-shrink-0 me-3',
									}).appendTo('#_ESGlist-group-item'+i);
									
										var img = $('<img />', { 
												  id: '_ESGMyid'+i,
												  src: obj[i].Icon,
												  alt: obj[i].Title
												});
												//img.appendTo($('#YourDiv'));
												img.appendTo('#_ESGavatar'+i);
						
									jQuery('<div>', {
	    								id: '_ESGtileContent'+i,
									    class: 'flex-grow-1',
									}).appendTo('#_ESGlist-group-item'+i);
										
										jQuery('<h5>', {
	    								id: 'name'+i,
									    class: 'mb-0',
									    text: obj[i].Name 
									}).appendTo('#_ESGtileContent'+i);
									
									jQuery('<h6>', {
	    								id: '_ESGtitle'+i,
									  //  class: 'mb-0 text-muted',
									    text: obj[i].Title
									}).appendTo('#_ESGtileContent'+i);
									
										
									jQuery('<a>', {
	    								id: '_ESGtitle'+i,
									    class: 'mb-0',
									    text: obj[i].Desc,
									    target:'_blank',
									    href:obj[i].URL
									}).appendTo('#_ESGtileContent'+i);
					
					}
				}
			}
		}
	});

}

function load_DEI() {
	var url = "https://infoblox323.github.io/jsonapi/DiversityEquityInclusion.json";
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
						
						jQuery('<li>', {
    								id: '_DEI'+i,
								    class:'list-group-item'
								}).appendTo('#_DEI');
						
								jQuery('<div>', {
									id: '_DEIlist-group-item'+i,
									    class: 'd-flex align-items-center',
									}).appendTo('#_DEI'+i);

									jQuery('<div>', {
	    								id: '_DEIavatar'+i,
									    class: 'flex-shrink-0 me-3',
									}).appendTo('#_DEIlist-group-item'+i);
									
										var img = $('<img />', { 
												  id: '_DEIMyid'+i,
												  src: obj[i].Icon,
												  alt: obj[i].Title
												});
												//img.appendTo($('#YourDiv'));
												img.appendTo('#_DEIavatar'+i);
						
									jQuery('<div>', {
	    								id: '_DEItileContent'+i,
									    class: 'flex-grow-1',
									}).appendTo('#_DEIlist-group-item'+i);
										
										jQuery('<h5>', {
	    								id: 'name'+i,
									    class: 'mb-0',
									    text: obj[i].Name 
									}).appendTo('#_DEItileContent'+i);
									
									jQuery('<h6>', {
	    								id: '_DEItitle'+i,
									  //  class: 'mb-0 text-muted',
									    text: obj[i].Title
									}).appendTo('#_DEItileContent'+i);
									
										
									jQuery('<a>', {
	    								id: '_DEItitle'+i,
									    class: 'mb-0',
									    text: obj[i].Desc,
									    target:'_blank',
									    href:obj[i].URL
									}).appendTo('#_DEItileContent'+i);
					
					}
				}
			}
		}
	});

}

function load_HistoryINFBLOX() {
	var url = "https://infoblox323.github.io/jsonapi/HistoryOfInfoblox.json";
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
						
						jQuery('<li>', {
    								id: '_HINFLX'+i,
								    class:'list-group-item'
								}).appendTo('#_historyOfInfoblox');
						
								jQuery('<div>', {
									id: '_HINFLXlist-group-item'+i,
									    class: 'd-flex align-items-center',
									}).appendTo('#_HINFLX'+i);

									jQuery('<div>', {
	    								id: '_HINFLXavatar'+i,
									    class: 'flex-shrink-0 me-3',
									}).appendTo('#_HINFLXlist-group-item'+i);
									
										var img = $('<img />', { 
												  id: '_HINFLXMyid'+i,
												  src: obj[i].Icon,
												  alt: obj[i].Title
												});
												//img.appendTo($('#YourDiv'));
												img.appendTo('#_HINFLXavatar'+i);
						
									jQuery('<div>', {
	    								id: '_HINFLXtileContent'+i,
									    class: 'flex-grow-1',
									}).appendTo('#_HINFLXlist-group-item'+i);
										
										jQuery('<h5>', {
	    								id: 'name'+i,
									    class: 'mb-0',
									    text: obj[i].Name 
									}).appendTo('#_HINFLXtileContent'+i);
									
									jQuery('<h6>', {
	    								id: '_HINFLXtitle'+i,
									  //  class: 'mb-0 text-muted',
									    text: obj[i].Title
									}).appendTo('#_HINFLXtileContent'+i);
									
										
									jQuery('<a>', {
	    								id: '_HINFLXtitle'+i,
									    class: 'mb-0',
									    text: obj[i].Desc,
									    target:'_blank',
									    href:obj[i].URL,
									}).appendTo('#_HINFLXtileContent'+i);
					
					}
				}
			}
		}
	});

}






