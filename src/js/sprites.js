jQuery(document).ready(function($) {

	function svg_debug(thenode){
		console.log('symbols:');
			$(thenode).find("symbol").each(function(){
				console.log("<svg class='' width='" + this.viewBox.baseVal.width + "' height='" + this.viewBox.baseVal.height + "'><use xlink:href='#" + this.id + "'/></svg>");
				$("#sprites").append('<svg class="icon outline" width="' + this.viewBox.baseVal.width + '" height="' + this.viewBox.baseVal.height + '"><title>'+this.id+'</title><use xlink:href="#' + this.id + '" /></svg>');
				$("#sprites").append('<svg class="icon outline" width="100" height="100"><title>'+this.id+'</title><use xlink:href="#' + this.id + '" /></svg>');
			});
	}

	$.get( (typeof themepath === 'undefined' ? "." : themepath) + "/img/sprites.svg", function(data) {
		$("body").prepend("<div id='svg-inject' style='height: 0; width: 0; position: absolute; visibility: hidden'>" + new XMLSerializer().serializeToString(data.documentElement) + "</div>")
	})
		.done(function(){ svg_debug('#svg-inject') })
	;

});