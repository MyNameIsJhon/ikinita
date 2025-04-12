/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


// ----- Aglowid JS starts - 28-09-2022 ----- //

if ($(window).width() >= 1024) {
   $(".two .custom_shopLook .ShopTheLook__Dot").click(function() {
      $(".custom_shopLook .ShopTheLook__Dot").removeClass("is-active");
      setTimeout(function() {
        $(".one .custom_shopLook .ShopTheLook__Dot").removeClass("is-active");
      }, 1);
      $(this).addClass("is-active");
   });  
  $(".one .custom_shopLook .ShopTheLook__Dot").click(function() {
      $(".custom_shopLook .ShopTheLook__Dot").removeClass("is-active");
      $(".one .custom_shopLook .ShopTheLook__Dot").removeClass("is-active");
      $(this).addClass("is-active");
   });
}

// Product grid add to cart hide/show functionality starts
// function hashchanged() {
//   $(".variant-drop-down").hide();  
//   $(".cart_btns .addToCart").click(function(){
//     $(this).toggleClass("active");
//     $(this).parent().siblings().slideToggle(250);      
//     $(this).parent().parent().toggleClass("active_parent");      
//   }); 
// }
// $(document).ready(function(e){
//     hashchanged();    
// });
// let lastUrl = location.href; 
// new MutationObserver(() => {
//   const url = location.href;
//   if (url !== lastUrl) {
//     lastUrl = url;
//     hashchanged();
//   }
// }).observe(document, {subtree: true, childList: true});
// product grid add to cart hide/show functionality Ends



var elemSlider = document.querySelector('.custom_slider');
var flktySlider = new Flickity( elemSlider, {
  cellAlign: 'left',
  wrapAround: false,
  containt:true,
  groupCells: 1,
  pageDots: false,
  imagesLoaded: true
});

$(document).ready(function(){ 
  $(".cn_close-btn").click(function(){
      $(this).closest(".Cart__OffscreenNoteContainer").attr("aria-hidden", true);
  });
});
// document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
//  bubbles: true
// }));

// $('.QuantitySelector__Button').click(function(){
//   console.log('sadsadas')
//   $.ajax({
//       success: function(data){
//           var current_count = data.item_count;
//         console.log(current_count, "current_count")
//           $('.cart-item-count').html(current_count);
//       }
//   })
// });

