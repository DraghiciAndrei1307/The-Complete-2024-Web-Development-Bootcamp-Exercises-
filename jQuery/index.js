 $(document).ready(function(){
    $("h1").css("color", "red");

    $(document).keydown(function(event){
        $("h1").text(event.key);
    });

    $("h1").on("mouseover", function(){
        $("h1").css("color", "purple");
    });
    
    $("h1").before("<button>New</button>");

    $("h1").prepend("<em>Hello</em>");

});


