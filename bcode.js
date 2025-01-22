<script type='text/javascript'>

//form tags to omit in NS6+:

var omitformtags=[&quot;input&quot;, &quot;textarea&quot;, &quot;select&quot;]

omitformtags=omitformtags.join(&quot;|&quot;)

function disableselect(e){

if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)

return false

}

function reEnable(){

return true

}

if (typeof document.onselectstart!=&quot;undefined&quot;)

document.onselectstart=new Function (&quot;return false&quot;)

else{

document.onmousedown=disableselect

document.onmouseup=reEnable

}

</script>