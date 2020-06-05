!(function($){
    $('[data-target="#showitem"]').click(function(){
        $('[name="aionId"]').val($(this).data('id'));

        var amount = $(this).data('set');
        
        if(amount == 1){
            $('#amount').show();
        }else{
            $('#amount').hide();
        }
    })

    $('[data-target="#vipMember"]').click(function(){
        $('[name="aionId"]').val($(this).data('id'));
        $('[name="msg"]').text('Voce está prestes a adquirir o pacote '+($(this).data('set'))+'. Você tem certeza que deseja realizar essa compra?');

        
    })

    $('[data-target="#editShopItem"]').click(function(){
        $('[name="id"]').val($(this).data('id'));
        var camount = $(this).data('set');
        
        if(camount == 1){
            $('#amount').show();
        }else{
            $('#amount').hide();
        }
    })

    $('[data-target="#editFeed"]').click(function(){
        $('[name="id"]').val($(this).data('id'));
        $('[name="direct"]').val($(this).data('direct'));
    })

    $('[data-target="#messageView"]').click(function(){
        $('[name="date"]').text($(this).data('time'));
        $('[name="title"]').text($(this).data('set'));
        $('[name="text"]').text($(this).data('text'));
    })

    $('[data-target="#feedReport"]').click(function(){
        $('[name="formreport"]').attr('action',$(this).data('url'));
        $('[name="direct"]').val($(this).data('direct'));
        $('[name="post"]').val($(this).data('post'));
    })

    $('[data-target="#editItem"]').click(function(){
        $('[name="id"]').val($(this).data('id'));
        $('[name="aion"]').text($(this).data('id'));
    })

    $('[data-target="#deleteItem"]').click(function(){
        $('[name="id"]').val($(this).data('id'));
        $('[name="aion"]').text($(this).data('name'));
    })

    $('[data-target="#editType"]').click(function(){
        $('[name="id"]').val($(this).data('id'));
    })

    $('[data-target="#deleteType"]').click(function(){
        $('[name="id"]').val($(this).data('id'));
        $('[name="aion"]').text($(this).data('name'));
    })

    $('#senha-submit').click(function(e){
        e.preventDefault();
        var pwd = $('#pwd').val();
        var cpwd = $('#cpwd').val();
        if(pwd != cpwd){
            $('#msg').text('As senhas estão diferentes.')
        }else{
            $('#form-redefinir').submit();
        }
    })



})(jQuery);