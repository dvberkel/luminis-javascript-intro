(function($){
    $(function(){
        $("textarea.code").snippits({
            onFinish : function(){
		$.deck('.slide');
	    }
        })

	$("#toc").toc({
	    "selectors" : "h2",
	    "container" : "body",
	    "smoothScrolling" : false,
	    "prefix" : "toc",
	    "highlightOnScroll" : false,
	    "anchorName": function(i, heading, prefix) {
		var name = prefix + "-" + $(heading).parents("section").attr("id");
		return name;
	    }
	}).decktoc();

	new Tangle (document.getElementById("recipe"), {
	    initialize: function () {
		this.people = 4;
		this.butterPerPerson = 50;
		this.sugarPerPerson = 75;
		this.vanillaPerPerson = 4;
		this.eggsPerPerson = 1;
		this.flourPerPerson = 45;
		this.cocoaPerPerson = 17;
		this.chipsPerPerson = 45;
	    },
	    update: function () {
		this.butter = this.people * this.butterPerPerson;
		this.sugar = this.people * this.sugarPerPerson;
		this.vanilla = this.people * this.vanillaPerPerson;
		this.eggs = this.people * this.eggsPerPerson;
		this.flour = this.people * this.flourPerPerson;
		this.cocoa = this.people * this.cocoaPerPerson;
		this.chips = this.people * this.chipsPerPerson;
	    }
	});
    })
})(jQuery);