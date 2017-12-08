const nav = $('#nav');
var a = $('#intro').height() * 0.75;
console.log("height: " + a);

window.onscroll = () => {
  	if(this.scrollY <= a) {
  		nav.addClass('scroll'); 
  	} else {
  		nav.removeClass('scroll');
  	}
};

const video_link = $('#video_link');
const popup = $("#dialog_popup");
const video = $("#dialog_video");


video_link.click(function() {
	console.log("clicked outside");
});

popup.dialog({
    zIndex: 999,
    autoOpen: false,
    modal: true,
    width:'auto',
    "X": function () {
        $(this).dialog("close");
    },
    open: function (event, ui) {
        $('.ui-widget-overlay').addClass('override');
        $("body").css("overflow", "hidden");
        $(".ui-button").removeClass("ui-state-hover");
        video[0].load();
    },
    close: function (event, ui) {
    	$("body").css("overflow", "auto");
    	video[0].pause();
    }
});


video_link.click(function() {
	console.log("clicked inside");
    popup.dialog("open");
    return false;
});
