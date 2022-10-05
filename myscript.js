
function getAudienceById(idAudience){
	$.ajax({    
	    url : URL+'/'+idAudience,
	   // data : { id : 123 },
	    type : 'GET',
	    dataType : 'json',

	    success : function(qwe) {
	    	//console.log(rta);
	    	let item=qwe.items[0];
	    	$("#idAudience").val(item.id);
			$("#owner").val(item.owner);
			$("#name").val(item.name);
			$("#capacity").val(item.capacity);
			$("#category").val(item.category_id);
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});
}

function updateAudience(){
	let myData=getData();
	let dataToSend=JSON.stringify(myData);

	$.ajax({    
	    url : URL,
	   	data : dataToSend,
	    type : 'PUT',
//	    dataType : 'json',
		contentType:'application/json',
	    success : function(dg) {
	    	cleanData();
	    	getAudience();

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});
}

function deleteAudience(idToDelete){

	let data={
		id:idToDelete
	};
	let dataToSend=JSON.stringify(data);

	$.ajax({    
	    url : URL,
	   	data : dataToSend,
	    type : 'DELETE',
//	    dataType : 'json',
		contentType:'application/json',
	    success : function(dg) {
	    	cleanData();
	    	getAudience();

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});

}
