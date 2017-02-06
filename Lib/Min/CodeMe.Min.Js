function findNoParse(){$("code").each(function(){"true"!=$(this).attr("tagchecked")&&($(this).text($(this).html()),$(this).attr("tagchecked","true"))})}
