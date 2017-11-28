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


