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
				mapData(data);	    	
		    });
	});
});

function mapData(data){
	var mappedData,i,
		max_length=data.length;

	for(i=0;i<max_length;i++)
	{

	}
}




