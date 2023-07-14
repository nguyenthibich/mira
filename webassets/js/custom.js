var loadingPage =false;
function loading_show(){
    // $('.loader').addClass('is-active');
    $('.loader').show();
    $('.layout_side_background').show();
}

function loading_hide(){
    setTimeout(function(){$('.loader').removeClass('is-active'); $('.layout_side_background').hide();$('.loader').hide();},200)

}
function showModalPopup(id){
    if (id!=undefined && id!=''){
        if ($("#"+id).length>0 && !$("#"+id).hasClass('show')){
            $("#"+id).addClass('show');
        }
    }
}
function removeCartItemHadler(){
    $('.btn-remove-from-cart').on('click',function(){
        id = $(this).data('rel');
        if (id>0){
            $('.cart-item-qty-'+id).val(0);
            $('.cart-item-qty-'+id).trigger('change');
        }
        return false;
    })
}
function cartQtyUpdateHanlder(){
    $('.cart-item-qty').on('change',function(){
        id = $(this).data('rel');
        qty = $(this).val();
        if (id>0){
            loading_show()
            $.ajax({
                url: addToCartUrl,
                type: 'post',
                dataType: 'json',
                data:{id:id,qty:qty,'cmd':'updatecard'},
                success: function (data) {
                    if(data.status == 'success'){
                        $('.popup-cart-list').html(data.html);
                        $('.header-cart-number').html(data.total);
                        $('.totalcartamout').html(data.amount_format);

                    }else{
                    }
                    cartQtyUpdateHanlder();
                    removeCartItemHadler();
                    loading_hide();
                }
            });
        }
    });
}

function changeProductSetHandler(){
    let selectedvalueArray = new Array;
    let selectedImg = new Array;
    let thumblisttemp = '<div class="buy__thumbs--block position-relative animation-footer-thumbnail-enter-done">[html]</div>';
    let thumbtexttemp = '<div class="buy__thumbs--message text-uppercase d-none d-md-block">Hãy chọn các tuỳ chọn cho sản phẩm của bạn</div>';
    $('.dropdown-selected').each(function (e){
        if (!$(this).hasClass('notselected')){
            selectedvalue = $(this).attr('data-selectedvalue');
            if (selectedvalue!=undefined && selectedvalue!=''){
                selectedvalueArray.push(selectedvalue);
                img = $('.buy__image img',this);
                if (img!=undefined){
                    selectedImg.push(img.get( 0 ).outerHTML);
                }
            }
        }

    });
    $('.footer_cart .buy__thumbs .buy__thumbs--list').html('');
    if (selectedImg.length>0){
        $('.footer_cart .buy__thumbs .buy__thumbs--message').removeClass('d-md-block');
        selectedImg.forEach(function(value,index,array){
            value  = thumblisttemp.replace('[html]',value);
            $('.footer_cart .buy__thumbs .buy__thumbs--list').append(value);
        })
    }else{

    }
    url = window.addToWishlistUrl;
    cmd = 'calculateCart';
    qty = $('#qty').val();
    id = $('#recordId').val();
    loading_show();
    $.ajax({
        url:url,
        type:'post',
        dataType: 'json',
        data:{cmd:cmd, selectedvalue:selectedvalueArray, qty:qty,id:id},
        success:function(data){
            loading_hide()
            if (data.status && data.status=='success'){
                $('.cart-total-amount').html(data.totalAmountFormat);
                $('.cart-total-product').html(data.total);
            }
        }
    });
}
$(document).ready(function () {
    $('.content-product-detail #qty').on('change',function(){
        changeProductSetHandler();
    });
    $('.btn-add-to-cart').on('click',function(){

        url = window.addToCartUrl;
        cmd = '';
        qty = $('#qty').val();
        id = $('#recordId').val();
        let selectedvalueArray = new Array;
        $('.dropdown-selected').each(function (e){
            if (!$(this).hasClass('notselected')){
                selectedvalue = $(this).attr('data-selectedvalue');
                if (selectedvalue!=undefined && selectedvalue!=''){
                    selectedvalueArray.push(selectedvalue);
                }
            }

        });
        loading_show();
        $.ajax({
            url:url,
            data:{id:id,selectedvalueArray:selectedvalueArray,qty:qty},
            type: 'post',
            dataType: 'json',
            success:function(){
                loading_hide();
                Swal.fire(
                    'Thành công',
                    'Bạn đã thêm vào giỏ hàng thành công!',
                    'success'
                );
            }
        });
    });

    $('.dropdown-select-child').on('click',function(){
        groupalias = $(this).data('rel');
        itemalias = $(this).data('selectedvalue');
        if (itemalias==undefined) itemalias='';
        parent = $(this).parent().parent();
        image = $(this).data('image');
        title = $(this).data('title');
        value = $(this).data('value');
        console.log(groupalias,image,title,value);
        if ($('.sub-option-'+groupalias).length>0){
            if (value==1){
                $('.sub-option-'+groupalias).show();
                $('.sub-option-'+groupalias+' .dropdown-selected').removeClass('notselected');
            }else{
                $('.sub-option-'+groupalias).hide();
                $('.sub-option-'+groupalias+' .dropdown-selected').addClass('notselected');
            }
        }
        if (groupalias!=undefined){
            $('.buy__image',parent).removeClass('active');
            $('.buy__image',$(this)).addClass('active');
            $('.dropdown-ignore-'+groupalias+' .buy__image img').attr('src',image);
            $('.dropdown-ignore-'+groupalias+' .dropdown-ignore-title').html(title);
            $('.dropdown-ignore-'+groupalias).attr('data-selectedvalue',itemalias);
            changeProductSetHandler();
        }
    });
});

// function setWish(item){
//     console.log(item);
//     return false;
// }
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}


document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.js-splide-product')) {
        loadSplideProduct();
    }
});
