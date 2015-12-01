$(document).ready(function(){

    $('.styles a').click(function(){
        $('.drop').hide();
        $('.drop.styles').show();
        $('li.styles').siblings().removeClass('active');
        if($('li.styles').hasClass('active')){
            $('#slide-down').slideUp('800');
            $('li.styles').removeClass('active');    
        } else {
            $('#slide-down').slideDown('800');
            $('li.styles').addClass('active');
        }
        return false;
    });

    $('.newstyles a').click(function(){
        $('.drop').hide();
        $('.drop.newstyles').show();
        $('li.newstyles').siblings().removeClass('active');
        if($('li.newstyles').hasClass('active')){
            $('#slide-down').slideUp('800');
            $('li.newstyles').removeClass('active');    
        } else {
            $('#slide-down').slideDown('800');
            $('li.newstyles').addClass('active');
        }
        return false;
    });

    $('.newplugins a').click(function(){
        $('.drop').hide();
        $('.drop.newplugins').show();
        $('li.newplugins').siblings().removeClass('active');
        if($('li.newplugins').hasClass('active')){
            $('#slide-down').slideUp('800');
            $('li.newplugins').removeClass('active');    
        } else {
            $('#slide-down').slideDown('800');
            $('li.newplugins').addClass('active');
        }
        return false;
    });


});