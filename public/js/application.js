$(document).ready(function() {
    $('form').on('submit', function(event){
      event.preventDefault();


      var data = $(this).serialize();
      
       $.ajax({
              type: this.method, //post or get
              url: this.action,
              data: data,
          }).done(function(response){
            console.log(response);
            $("#echo").html(response);

       });
    });

    $("#quote").on('click', function(event){
      event.preventDefault();
      console.log("just got clicked")
      $.ajax({
        type: $(this).attr('data-type'),
        url: '/click'
      }).done(function(response){
         console.log(response); 
        $("#show_quote").append("this is" +response.quote);
      
      })

    });
});



