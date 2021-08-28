$(document).ready(function(){
            $("#search").keyup(function(){
            $("#search").css("background-color", "pink");
            var searchfild=$("#search").val();
            var myexp=new RegExp(searchfild,"i");
        $.getJSON("data.json",
            function (data) {
                var output='<ul class="searchresult">';
                $.each(data, function (key, value) { 
                    if((value.name.search(myexp) !=-1)||
                    (value.bio.search(myexp) !=-1)
                    ){

                   
                    output += '<li>';
                    output += '<h2>' + value.name +'</h2>';
                    output += '<img src="images/' +value.shortname +'_tn.jpg" alt="'+value.name +'"/>';
                    output +='<p>'+value.bio+'</p>';
                    output +='</li>';


                }
                });
                output+='</ul>';
            $('#update').html(output);
            });
         });
  });