 function findNoParse(){
	$('code').each(function(){
		if($(this).attr('tagchecked') != 'true'){ //checks if already changed tag
			$(this).text($(this).html()); //makes the html into plaintext
			$(this).attr('tagchecked', 'true'); //says that tag has been checked
		}
	});
}
$(document).ready(function(){
    findNoParse();
    setInterval(findNoParse, 100); //constantly check for new tag, just in case a new element is put in.
});
