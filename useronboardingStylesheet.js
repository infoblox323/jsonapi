var url ="https://infoblox323.github.io/jsonapi/supportContacts.json";
 $.ajax({
       url: url,
        type:"get",
        dataType: 'text',  
        error: function(data){
        //debugger;
          alert('err');
        },
        success:function(data) {
         
         		const obj = JSON.parse(data);
				
                var len = obj.length;
                console.log(len);
                
                          
                      if(obj){
                var txt = "";
                if(len > 0){
                    for(var i=0;i<len;i++){
 							console.log("obj[i].Icon="+ obj[i].Icon); 
                     
 var liAdd ="<li class='list-group-item'><div class='d-flex align-items-center'><div class='flex-shrink-0 me-3'><img src='"+ obj[i].Icon + "' class='avatar rounded-circle' /></div><div class='flex-grow-1'><h6 class='mb-0'> "+ obj[i].Title +" </h6> <p class='mb-0 text-muted'>"+ obj[i].Desc +" </p></div></div></li>"
                 
                     
                         if(liAdd != ""){
                        $("#ContactsList").append(liAdd);
                    }
                    }
                   
                }
            }
          
          
        }
    });
