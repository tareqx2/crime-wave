$( document ).ready(function() {
	$('input').on("keydown",function(event){
		if(event.keyCode == 13){
			getCrimes();
		}
	});
});


function getCrimes(){
	$.get(
	    "/getCrimes",
	    {
	    	lat : map.center.k,
	    	lon: map.center.D,
	    	radius: 100
	    },
	    function(data) {
			heatMapper(data);	    	
	    }
	);
}

