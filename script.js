$.getJSON("data.json",
    function (data) {
       
        var output='<ul class="searchresult">';
        $.each(data, function (key, value) { 
             output += '<li>';
             output += '<h2>' + value.name +'</h2>';
             output += '<img src="images/' +value.shortname +'_tn.jpg" alt="'+value.name +'"/>';
             output +='<p>'+value.bio+'</p>';
             output +='</li>';
        });
        output+='</ul>';
       $('#update').html(output);
    }
);