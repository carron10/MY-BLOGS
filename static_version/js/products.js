$(function () {
    $('.add-product-to-cart2').click(function () {
        var id = $(this).attr('data-product-id');
        $('[id="' + id + '"].ltn__product-item').first().find('.add-product-to-cart').click();
    });
    $('.add-product-to-cart').click(function () {
        var item = $(this).parents('.ltn__product-item');
        $.ajax('/api/v1/cart/', { method: 'post', data: { quantity: 1, id: item.attr('id') } }).done(function (data, textStatus, jqXHR) {
            var img = item.find('.product-image').attr('src'), name = item.find('.product-name').text(), link = item.find('.product-link').attr('href'), modal = $('#add_to_cart_modal');
            modal.find('.product-link').attr('href', link);
            modal.find('.product-img').attr('src', img);
            modal.find('.product-name').text(name);
            modal.modal('show');
        }).fail(function (data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
    $('.add-product-to-cart3').click(function () {
        var item= $(this).parents('.ltn__shop-details-area'),q=Number(item.find('[name="qtybutton"]').val());
        $.ajax('/api/v1/cart/', { method: 'post', data: { quantity: q, id: item.attr('id') } }).done(function (data, textStatus, jqXHR) {
            var img = item.find('.product-image').attr('src'), name = item.find('.product-name').text(), link = item.find('.product-link').attr('href'), modal = $('#add_to_cart_modal');
            modal.find('.product-link').attr('href', link);
            modal.find('.product-img').attr('src', img);
            modal.find('.product-name').text(name);
            modal.modal('show');
        }).fail(function (data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
    $('.view-product').click(function () {
        var item = $(this).parents('.ltn__product-item');
        $.ajax('/api/v1/category/p/' + item.attr('id')).done(function (data, textStatus, jqXHR) {
            var img = item.find('.product-image').attr('src'), price = item.find('.product_price').text(), name = item.find('.product-name').text(), link = item.find('.product-link').attr('href'), modal = $('#quick_view_modal');
            modal.find('.product-link').attr('href', link);
            modal.find('.product-img').attr('src', img);
            modal.find('.product-name').text(name);
            modal.find('.product_price').text('$' + price);
            modal.find('.add-product-to-cart2').attr('data-product-id', item.attr('id'));
            modal.find('.add-product-to-wishlist2').attr('data-product-id', item.attr('id'));
            $.each(data, function (i, item) {
                modal.find('.product-categories').append('<a href="/shop/c/' + item + '">' + item + '</a>');
            });
            modal.modal('show');
        }).fail(function (data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
    $('.add-product-to-wishlist2').click(function () {
        var id = $(this).attr('data-product-id');
        $('[id="' + id + '"].ltn__product-item').first().find('.add-product-to-wishlist').click();
    });
    $('.add-product-to-wishlist3').click(function () {
        var item= $(this).parents('.ltn__shop-details-area');
        $.ajax('/api/v1/wishlist/', { method: 'post', data: { id: item.attr('id') } }).done(function (data, textStatus, jqXHR) {
            var img = item.find('.product-image').first().attr('src'), name = item.find('.product-name').text(), link = item.find('.product-link').attr('href'), modal = $('#liton_wishlist_modal');

            modal.find('.product-link').attr('href', link);
            modal.find('.product-img').attr('src', img);
            modal.find('.product-name').text(name);
            modal.modal('show');
        }).fail(function (data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
    $('.add-product-to-wishlist').click(function () {
        var item = $(this).parents('.ltn__product-item');
        $.ajax('/api/v1/wishlist/', { method: 'post', data: { id: item.attr('id') } }).done(function (data, textStatus, jqXHR) {
            var img = item.find('.product-image').attr('src'), name = item.find('.product-name').text(), link = item.find('.product-link').attr('href'), modal = $('#liton_wishlist_modal');
            modal.find('.product-link').attr('href', link);
            modal.find('.product-img').attr('src', img);
            modal.find('.product-name').text(name);
            modal.modal('show');
        }).fail(function (data, textStatus, jqXHR) {
            $('#error_modal').modal('show');
        });
    });
});