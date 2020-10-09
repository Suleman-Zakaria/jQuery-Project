
$(document).ready(function(){
    // handling the click event
   $('#button-create-item').on('click',function(
   ){
     let name=$('#input-create-item').val(); //Save the input text as name
       console.log(name);
       $('#input-create-item').val(''); //Clear the textbox after saving input
   
   let html= '';
   html += '<div class="item">';
   html += '<div class="name">'+ name +'</div>';
   html += '<img src="assets/drum.jpg"></img>';
   html += '<div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi quo dolore </div>';
   html += '<div class="price">499</div>';
   html += '<button class="item-add">Add to cart</button>';
   html += '<button class="item-remove">Remove</button>';
   html += '<br/>';
   html += '<a href="#">Moreinfo</a>';
   html += '<div class="more-info">Lorem ipsum dolor sit '
   html += 'amet</div>';
   html += '</div>';

    /*Inserting or attching the string html to the
     container on the index page. Use prepend to insert at the begining*/
    $('#container').prepend(html);
  });

  $('#container').on('click','.item-remove',function(){
    $(this).parent().remove();
  });
});
