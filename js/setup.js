(function($){
    $(function(){
        $("textarea.code").snippits({
            onFinish : function(){
		$.deck('.slide');
	    }
        })
    })
})(jQuery);