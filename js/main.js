// The value of items in cart
var cart = 0;

function addItem(name, description, price, moreIfo){
    let html= '';
   html += '<div class="item">';
   html += '<div class="name">'+ name +'</div>';
   html += '<img src="assets/drum.jpg"></img>';
   html += '<div class="description">Kumasi is beatiful city with diverse people from different cultural background </div>';
   html += '<div class="price">499</div>';
   html += '<button class="item-add">Add to cart</button>';
   html += '<button class="item-remove">Remove</button>';
   html += '<br/>';
   html += '<a class="more-info-link" href="#">Moreinfo</a>';
   html += '<div class="more-info">Visit kumasi '
   html += 'amet</div>';
   html += '</div>';

   /*Inserting or attching the string html to the
     container on the index page. Use prepend to insert at the begining*/
   $('#container').prepend(html);
}
$(document).ready(function(){ 
    // handling the click event
   $('#button-create-item').on('click',function(
   ){
     let name=$('#input-create-item').val(); //Save the input text as name
       console.log(name);
       $('#input-create-item').val(''); //Clear the textbox after saving input
   
   

    
    
  });

  /*Animating the more info button. sliding, toggling and opacity*/
  $('#container').on('click','.more-info-link', function(event){
    event.preventDefault();
    $(this).parent().find('.more-info').slideToggle('slow');

    $(this) 
    .animate({"opacity": 0.5, 'margin-left': 10}, 'fast')
    .animate({"opacity": 1.0, 'margin-left': 0}, 'slow')
  });

  
/*Removing the item when the remove button is clicked*/
  $('#container').on('click','.item-remove',function(){
    $(this).parent().remove();
  });

/*Performing Ajax operation */
$.ajax('data/item.json', {
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  })
  .done(function(response){
    let items = response.items;
    items.forEach(function(item){
      addItem(item.id, item.name, item.description, item.price, item.moreInfo);
    });
  })
  .fail(function(request, errorType, errorMessage){
    console.log(errorMessage);
  })
  .always(function(){

  });

});

/*Most of this code was adopted from 
https://www.udemy.com/course/complete-jquery-and-ajax-programming-curriculum/learn/lecture/10717820#overview
*/
