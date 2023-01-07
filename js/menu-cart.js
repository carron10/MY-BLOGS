
$(function () {
    $('.mini-cart-product-area .mini-cart-item-delete').click(function () {
        var item = $(this).parents('.mini-cart-item'),i=$('.mini-cart-sub-total .sub-total');
        $.ajax('/api/v1/cart/'+item.attr('id'),{method:'delete'}).done(function(data){
            $('.shopping-cart-total-products').text(data.total);
            i.text(data.total_cost);
            $('.mini-cart-icon.c').find('.total_cost').text('$'+data.total_cost);
            if(data.total==0){
                $('.mini-cart-product-area').find('.visually-hidden').removeClass('visually-hidden');
            }
            item.remove();
        });
    });
});