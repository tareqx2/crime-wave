$( document ).ready(function() {
	$('button').on("click",function(event){
		$.get(
		    "/getCrimes",
		    {
		    	lat : map.center.k,
		    	lon: map.center.D,
		    	radius: 100
		    },
		    function(data) {
				heatMapper(data);	    	
		    });
	});
});




