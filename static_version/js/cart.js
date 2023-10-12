$(function () {
    $('.liton__shoping-cart-area .cart-product-remove').click(function () {
        var item = $(this).parents('.cart-item'),mini_cart_item = $('.mini-cart-product-area .mini-cart-item-delete').parents('.mini-cart-item'), i = $('.mini-cart-sub-total .sub-total');
        $.ajax('/api/v1/cart/' + item.attr('id'), { method: 'delete' }).done(function (data) {
            $('.shopping-cart-total-products').text(data.total);
            i.text(data.total_cost);
            $('.mini-cart-icon.c').find('.total_cost').text('$' + data.total_cost);
            if (data.total == 0) {
                $('.mini-cart-product-area').find('.visually-hidden').removeClass('visually-hidden');
                $('.liton__shoping-cart-area').find('.visually-hidden').removeClass('visually-hidden');
            }
            $('.shoping-cart-total .sub_total').text('$' + (data.total_cost));
            $('.shoping-cart-total .shipping_cost').text('$' + (data.shipping_cost));
            $('.shoping-cart-total .vat').text('$' + (data.vat));
            $('.shoping-cart-total .total_cost').text('$' + (data.total_cost + data.vat + data.shipping_cost));
            item.remove();
            mini_cart_item.remove();
        });
    });
    function updateCart(item) {
        
        var q=item.find('[name="qtybutton"]').val(),mini_cart_item = $('.mini-cart-product-area .mini-cart-item-delete').parents('.mini-cart-item'), i = $('.mini-cart-sub-total .sub-total');
        $.ajax('/api/v1/cart/', { method: 'put',data:{'id': item.attr('id'),'quantity':q} }).done(function (data) {
            $('.shopping-cart-total-products').text(data.total);
            i.text(data.total_cost);
            $('.mini-cart-icon.c').find('.total_cost').text('$' + data.total_cost);
            if (data.total == 0) {
                $('.mini-cart-product-area').find('.visually-hidden').removeClass('visually-hidden');
                $('.liton__shoping-cart-area').find('.visually-hidden').removeClass('visually-hidden');
            }
            $('.shoping-cart-total .sub_total').text('$' + (data.total_cost));
            $('.shoping-cart-total .shipping_cost').text('$' + (data.shipping_cost));
            $('.shoping-cart-total .vat').text('$' + (data.vat));
            $('.shoping-cart-total .total_cost').text('$' + (data.total_cost + data.vat + data.shipping_cost));
            item.find('.cart-product-subtotal').text('$'+(q*Number(item.find('.cart-product-price span').text())));
        });
    }
    $('.liton__shoping-cart-area  .cart-plus-minus .dec').click(function () {
        updateCart($(this).parents('.cart-item'));
    });
    $('.liton__shoping-cart-area  .cart-plus-minus .inc').click(function () {
        updateCart($(this).parents('.cart-item'));
    });
    $('.liton__shoping-cart-area  .cart-plus-minus [name="qtybutton"]').change(function () {
        updateCart($(this).parents('.cart-item'));
    });
});