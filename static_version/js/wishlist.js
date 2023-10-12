$(function () {
    $('.add-product-to-cart2').click(function (){
        var item=$(this).parents('.wishlist-item');
        $.ajax('/api/v1/cart/',{method:'post',data:{quantity:1,id:item.attr('id')}}).done(function(data, textStatus, jqXHR) {
           var img=item.find('.product-image').attr('src'),name=item.find('.product-name').text(),link=item.find('.product-link').attr('href'),modal= $('#add_to_cart_modal');
           modal.find('.product-link').attr('href',link);
           modal.find('.product-img').attr('src',img);
           modal.find('.product-name').text(name);
            modal.modal('show');
        }).fail(function(data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
    $('.remove-product-from-wishlist').click(function (){
        var item=$(this).parents('.wishlist-item');
        $.ajax('/api/v1/wishlist/'+item.attr('id'),{method:'delete'}).done(function(data, textStatus, jqXHR) {
          item.remove();
        }).fail(function(data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
});