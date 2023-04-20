let region;

   $("#_onboardingInstructions").change(function(){
		region = $( "#_onboardingInstructions option:selected" ).text();
	   alert(region);
		if(region !='Select Region'){
		loadContent();
		console.log(region)
		}
		
    });


//_welcomevideos
$("#_tabresourcesLink").on("click", function(){
      
	  // hide other tabs 
	   $("#_helpfulResourceLink").show();
	   $("#_welcomevideos").hide();
	   $("#_infobloxhistory").hide();
	   $("#__onboardingInstructionsLink").hide();
	   

	   
	   $("#_tabresourcesLink").addClass('active');
	   $("#_tabwelcomevideoLink").removeClass('active');
	   $("#_tababoutInfobloxLink").removeClass('active');
	   $("#_tabInstructionsLink").removeClass('active');
	   	  
    });
	
$("#_tabwelcomevideoLink").on("click", function(){
	
	   $("#_tabwelcomevideoLink").addClass('active');
	   $("#_tabresourcesLink").removeClass('active');
	   $("#_tababoutInfobloxLink").removeClass('active');
   	   $("#_tabInstructionsLink").removeClass('active');
       $("#_welcomevideos").show();
	   $("#_helpfulResourceLink").hide();
	   $("#_infobloxhistory").hide();
	   $("#__onboardingInstructionsLink").hide();
 
	  
	   
    });
	
	//About Infoblox
	
$("#_tababoutInfobloxLink").on("click", function(){
      
	  // hide other tabs 
	   $("#_helpfulResourceLink").hide();
	   $("#_welcomevideos").hide();
	   $("#_infobloxhistory").show();
       $("#__onboardingInstructionsLink").hide();
	   
	   $("#_tabresourcesLink").removeClass('active');
	   $("#_tabwelcomevideoLink").removeClass('active');
	   $("#_tabInstructionsLink").removeClass('active');
	   $("#_tababoutInfobloxLink").addClass('active');
  
    });	
	
	
$("#_tabInstructionsLink").on("click", function(){
      
	  // hide other tabs 
	   $("#_helpfulResourceLink").hide();
	   $("#_welcomevideos").hide();
	   $("#_infobloxhistory").hide();
       $("#__onboardingInstructionsLink").show();	   
	   $("#_tabresourcesLink").removeClass('active');
	   $("#_tabwelcomevideoLink").removeClass('active');
	   $("#_tabInstructionsLink").addClass('active');
	   $("#_tababoutInfobloxLink").removeClass('active');
	  
    });	


function loadOnboardingDetails(){
	
		//_onboardingInstructions
		/*
		{
      "Title": "Workday Onboarding Instructions",
      "Name":"Workday Onboarding Instructions - INT",
      "Desc": "Please see attachment for Workday onboarding instructions.",
	  "Region": "INT",
      "Icon": "https://infoblox323.github.io/jsonapi/images/PNG/Laptop.png",
      "URL": "https://drive.google.com/file/d/1yZev_A1B2FslDYImo6VcWnsrhrYde90Z/view"
    }
	*/
		
		var url = "https://infoblox323.github.io/jsonapi/useronboardingsection.json";
	$.ajax({
		url: url,
		type: "get",
		dataType: 'text',
		error: function(data) {
			//debugger;
			alert('err'+data);
		},
		success: function(data) {
			const obj = JSON.parse(data);
			var len = obj.length;
			if (obj) {
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						
				if(region==obj[i].Region || obj[i].Region=== 'ALL'){
						
						var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-1'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p><a href='" + obj[i].URL + "' target='_blank' >" + obj[i].Name + "</a></div></div></li>";
				
						if (liAdd != "") {
							$("#_onboardingInstructionsItems").append(liAdd);
								console.log("loadOnboardingDetails  "+region);
		
						}
				}
					}
				}
			}
		}
	});
	
}

function loadSupportContacts() {
	var url = "https://infoblox323.github.io/jsonapi/supportContacts.json";
	$.ajax({
		url: url,
		type: "get",
		dataType: 'text',
		error: function(data) {
			//debugger;
			alert('err'+data);
		},
		success: function(data) {
			const obj = JSON.parse(data);
			var len = obj.length;
			if (obj) {
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						
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
			alert('err'+data);
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


function loadWelcomeVdo() {
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
					for (var i = 0; i < len; i++) {
						
			//var liAdd = "<div class='media tm-notification-item'><img src='" + obj[i].Icon + "' alt='Avatar Image' class='rounded-circle flex-shrink-0'></div><div class='media-body'><p class='mb-2'><b>"+obj[i].Name+"</b><div> <h6>"+obj[i].Title+"<h6><a href='#' class='tm-notification-link'>"+obj[i].URL+"</a>.</p></div></div>";
			
			var liAdd = "<div class='media tm-notification-item tm-block-overflow'><div class='tm-gray-circle'><img src='" + obj[i].Icon + "' alt='Avatar Image' class='rounded-circle'></div><div class='media-body'><p id='_welcomeVideo"+i +"' class='mb-2'><b>"+obj[i].Name+"</b></br>"+obj[i].Title+"<br></p></div></div>"

				
						
						if (liAdd != "") {
							$("#_welcomeVideoList").append(liAdd);
						}
						
						jQuery('<a>', {
	    								id: '_welcomeVideoLink'+i,
									    class: 'mb-0',
									    text: obj[i].Desc,
										css: {
											   color: '#F0EAD6'											   
											   },
									    href:'#'
									   
						}).appendTo('#_welcomeVideo'+i).click({param1: obj[i]},videoView);

					}
				}
			}
		}
	});

}

// NOT USED
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
									
										
									jQuery('<a/>', {
	    								id: '_DEIURL'+i,
									    class: 'mb-0',
									    target: '_blank',
									    href: obj[i].URL,										
									    text: obj[i].Desc,
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


function load_Messages() {
	var url = "https://infoblox323.github.io/jsonapi/Messages.json";
	
	
	/*
	
	'<section class="mx-auto my-3" style="max-width: 25rem;">   
    <div class="card testimonial-card mt-2 mb-3">
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img src="https://infoblox323.github.io/jsonapi/images/Scott-Headshot.jpg" class="rounded-circle img-fluid"
          alt="woman avatar">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title font-weight-bold">Scott Harrell</h5>
        <hr>
        <p><i class="fas fa-quote-left"></i> You're joining Infoblox at a time of incredible growth and opportunity, as we continue to disrupt -- and simplify -- networking and security.</p>
		  <a href="#"> A Message From Scott Harrell </a>
      </div>
    </div> 
  </section>
  
  
	*/
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
						
						<section class='mx-auto my-3' style='max-width: 25rem;'>   
    <div class='card testimonial-card mt-2 mb-3'>
      <div class='card-up aqua-gradient'></div>
      <div class='avatar mx-auto white'>
        <img src="https://infoblox323.github.io/jsonapi/images/Scott-Headshot.jpg" class="rounded-circle img-fluid"
          alt="woman avatar">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title font-weight-bold">Scott Harrell</h5>
        <hr>
        <p><i class="fas fa-quote-left"></i> You're joining Infoblox at a time of incredible growth and opportunity, as we continue to disrupt -- and simplify -- networking and security.</p>
		  <a href="#"> A Message From Scott Harrell </a>
      </div>
    </div> 
  </section>
						
						
						var liAdd = "<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='" + obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> " + obj[i].Title + " </h6> <p class='mb-0 text-muted'>" + obj[i].Desc + " </p></a></div></div></li>"
						
						{param1: "Hello", param2: "World"}, cool_function
						
						if (liAdd != "") {
							$("#_coreValues").append(liAdd);
						}
						*/
						
						var _msgContent = " <section class='mx-auto my-3' style='max-width: 25rem;'>   <div class='card testimonial-card mt-2 mb-3'><div class='card-up aqua-gradient'></div><div class='avatar mx-auto white'><img src='"+obj[i].Icon +"' class='rounded-circle img-fluid' alt='woman avatar'> </div> <div class='card-body text-center' id='_body"+i+"'><h6 class='card-title font-weight-bold'>"+ obj[i].Name +"</h6> <hr><i class='fas fa-quote-left'></i> "+obj[i].short_Desc+"</br></div></div></section>";
						
						if (_msgContent != "") {
							$("#_msgbox").append(_msgContent);
						}
						
					jQuery('<a>', {
	    								id: 'msgView'+i,
									    class: 'mb-0',
									    text: obj[i].Desc,
										'data-toggle':"modal",
										'data-target': obj[i].Name,
									    href:'#'
									   
						}).appendTo('#_body'+i).click({param1: obj[i]},msgView);

// modal-dialog modal-dialog-centered modal-dialog-scrollable  modal-dialog
						//var _popupcontent = " <div class='modal' tabindex='-1' id="+obj[i].Title+"><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body'><section class='mx-auto my-3' style='max-width: 25rem;'><div class='card testimonial-card mt-2 mb-3'><div class='card-up aqua-gradient'></div> <div class='avatar mx-auto white'><img src='"+obj[i].Icon +"' class='rounded-circle img-fluid' alt='woman avatar'></div><div class='card-body text-center'><h5 class='card-title font-weight-bold'>"+obj[i].Name+"</h5><hr>"+ obj[i].msg+"</div></div> </section></div></div></div></div>";
						
					var _popupcontent = "<div class='modal fade' id='"+obj[i].Title+"' tabindex='-1' aria-labelledby='"+obj[i].Title+"' aria-hidden='true'><div class='modal-dialog modal-dialog-centered '><div class='modal-content'><div class='modal-body'><section class='mx-auto my-3' style='max-width: 25rem;'><div class='card testimonial-card mt-2 mb-3'><div class='card-up aqua-gradient'></div> <div class='avatar mx-auto white'><img src='"+obj[i].Icon +"' class='rounded-circle img-fluid' alt='woman avatar'></div><div class='card-body text-center'><h5 class='card-title font-weight-bold'>"+obj[i].Name+"</h5><hr>"+ obj[i].msg+"</div></div> </section></div></div></div></div>";

						if (_popupcontent != "") {
							$("#_msgboxpopup").append(_popupcontent);
						}
						



/*

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



						<section class='mx-auto my-3' style='max-width: 25rem;'>   
    <div class='card testimonial-card mt-2 mb-3'>
      <div class='card-up aqua-gradient'></div>
      <div class='avatar mx-auto white'>
        <img src="https://infoblox323.github.io/jsonapi/images/Scott-Headshot.jpg" class="rounded-circle img-fluid"
          alt="woman avatar">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title font-weight-bold">Scott Harrell</h5>
        <hr>
        <p><i class="fas fa-quote-left"></i> You're joining Infoblox at a time of incredible growth and opportunity, as we continue to disrupt -- and simplify -- networking and security.</p>
		  <a href="#"> A Message From Scott Harrell </a>
      </div>
    </div> 
  </section>


<div class="modal" tabindex="-1">
<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
	  
	  
	  <section class='mx-auto my-3' style='max-width: 25rem;'>   
    <div class='card testimonial-card mt-2 mb-3'>
      <div class='card-up aqua-gradient'></div>
      <div class='avatar mx-auto white'>
        <img src="https://infoblox323.github.io/jsonapi/images/Scott-Headshot.jpg" class="rounded-circle img-fluid"
          alt="woman avatar">
      </div>
      <div class="card-body text-center">
        <h5 class="card-title font-weight-bold">Scott Harrell</h5>
        <hr>
        <p><i class="fas fa-quote-left"></i> You're joining Infoblox at a time of incredible growth and opportunity, as we continue to disrupt -- and simplify -- networking and security.</p>
		  <a href="#"> A Message From Scott Harrell </a>
      </div>
    </div> 
  </section>
	  
      </div>
      
    </div>
  </div>
</div>


*/

					}
				}
			}
		}
	});

}

function videoView(event){
//_welcomeVideoLink'+i,
/*
    {
      "Title": "People & Places SVP",
      "Name":"Carolyn Gracey",
      "Desc": "Click here to watch a welcome video from Carolyn.",
      "Icon": "https://infoblox323.github.io/jsonapi/images/Cgrace (1).jpg",
      "URL": "https://drive.google.com/file/d/1yZev_A1B2FslDYImo6VcWnsrhrYde90Z/view"
    },  

 
	*/
  $.fn.SimpleModal({
            hideFooter: true,
            width: 710,
            title: '<b>'+event.data.param1.Name+"</b><br>"+event.data.param1.Title,
            model: 'modal',
            contents: '<iframe src="'+ event.data.param1.URL+'" width="680" height="382" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>'
        }).showModal();	
		
		
     

}

function msgView(event){
	//alert(JSON.stringify(event.data.param1.Name));
	$('#'+event.data.param1.Title).modal('show');
//$('#myModal').modal('show');
//$('#myModal').modal('hide');
	

	
}


function loadContent(){
	loadSupportContacts();
	loadResource();
	loadConnectDetails();
	loadERGDetails();
	loadOnboardingDetails();
	
	loadWelcomeVdo();
	
	//loadWelcomevideos();
	loadESGPolicy() ;
	load_DEI();
	load_HistoryINFBLOX();
	loadCoreValues();
	load_Messages();
	
// hide tabs

	$("#_welcomevideos").hide();
	$("#_infobloxhistory").hide();
	$("#_contentHome").hide();;
	$("li").removeClass('hide-display');
	$("#_regionSelect").hide();
    $("#_helpfulResourceLink").hide();
	$("#_welcomevideos").hide();
	$("#_infobloxhistory").hide();
	
	
	$("#_contentHome").show();
	$("#_msgSection").show();
	$("#__onboardingInstructionsLink").show();
	$("#_navbarTop").show();


	
}


