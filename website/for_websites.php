<?php
require_once './includes/functions.php';

$PAGE_TITLE='RcVCite - For Your Website or Blog';
$PAGE_SHORT='For Websites';

require_once './includes/head.php';
?>
<div class="subtitle">For Your Website or Blog</div>

<h2><a name="add_rcvcite"></a>Adding RcVCite to a webpage or blog</h2>
<p>If you use Wordpress, get the RcVCite plugin: <a href="http://wordpress.org/plugins/rcvcite" class="btn btn-xs btn-primary">download</a></p>
<p>If you do not use Wordpress or do not want to use the plugin, you can add these files (<a href="./files/RcVCite.zip" class="btn btn-xs btn-primary">download</a>) and the following HTML to your webpage.</p>

<h3><a name="sample_html"></a>Sample HTML</h3>
Place the following sample HTML in the <span class="source">&lt;head></span> tag of the pages you want to convert the verse references.
<blockquote class="source">&lt;script type="text/javascript" src="./jquery.js">&lt;/script><br>
&lt;script type="text/javascript" src="./versification.js">&lt;/script><br>
&lt;script type="text/javascript" src="./RcVCite_v00_03.js">&lt;/script><br>
&lt;link rel="stylesheet" type="text/css" href="./RcVCite.css" /><br>
&lt;script type="text/javascript"><br>
RcVCite.cite();<br>
&lt;/script><br>
</blockquote>

<h3>Overlay styles</h3>
<p>RcVCite comes with a sample style, <span class="source">RcVCite.css</span>.
You can change it to make the verse overlays match the style of your website.
The <i>RcVCite CSS Style Tool</i> bellow allows you to preview changes to the styling.
Note that the changes will be applied to the entire page.
<?php rcvcite::make_button("RcVCite CSS Style Tool",array('color'=>'blue','onclick'=>'$(\'#rcvcite_stylepreview\').slideToggle(); checkStylePreview();')); ?>
<div id='rcvcite_stylepreview' class="offset" style='display:none;'>
<b><i>Any changes you do not save will be lost.</i></b><br>
Remember to copy and paste this into a text file to save it when you are done.
<script type="text/javascript">
$.ajax({'url':"./RcVCite.css",success:function(data){
  $(document).ready(function(){
    $('#rcvcite_styletext').val(data);
  });
},'dataType':'html'});
function checkStylePreview(){
  $(document).ready(function(){
    var overlay = $('#rcvcite_previewref .rcvc_verse_ref').mouseenter().unbind().find('.rcvc_verse_overlay');
    var handler = function(){
      if(overlay.css('display')=='none'){
        setTimeout(handler,50);
      } else {
        overlay.css({'position':'relative','left':''});
      }
    }
    handler();
  });
}
function dopreview_style(){
  var test=document.getElementById('rcvcite_styletext').value;
  if(test!==''){
    $('#rcvcite_styletag_old').remove();
    document.getElementById('rcvcite_styletag_new').innerHTML=test;
  }
}
</script>
<form action="javascript:void(0);" onsubmit="dopreview_style();">
<textarea id="rcvcite_styletext" style="width:100%; height: 16em;"></textarea>
<input type="submit" value="Preview"/>
</form>
<div id="rcvcite_previewref">Rev. 22:1</div>
</div>
</p>

<h3>Options</h3>
<p>These options are available in the settings for the Wordpress plugin or browser extension.
If you have added RcVCite to your website using HTML, then the following options can be set prior to invoking <span class="source">RcVCite.cite();</span></p>
<ul class="list-group">
  <li class="list-group-item"><span class="source">RcVCite.citeChapters=false;</span>
This is turned on by default.
When turned on, RcVCite will links chapters without a verse number such as 1 John 1.</li>
  <li class="list-group-item"><span class="source">RcVCite.hoverDelay=400;</span>
The hover delay sets how long the mouse must be over a verse reference before the text will appear and how long before the text it will be hidden once the mouse leaves the box.
The first time the mouse moves over a reference the text for the verse is fetched, so it may take longer than the hover delay before the text of the verse appears.</li>
  <li class="list-group-item"><span class="source">RcVCite.horzPad=5;</span>
This changes the minimum horizontal space on each side of the verse pop-ups.</li>
  <li class="list-group-item"><span class="source">RcVCite.looseContext=false;</span>
When turned on, book names will be identified even if they are not a part of a verse or chapter reference.
This option is set to false by default because RcVCite does not distinguish between brother John and the book of John.
On this page it is set to <span class="source">true</span> for demonstration purposes.</li>
</ul>

<h2><a name="troubleshooting"></a>Troubleshooting</h2>
<p><b>Is Javascript enabled?</b>
RcVCite runs using the Javascript, so if Javascript is disabled in your browser then RcVCite will not work.</p>
<p><b>Are there error messages in the Javascript console?</b>
Most modern web browsers have a Javascript console.
Any Javascript errors will be listed there along with any messages printed to the Javascript console (Usually accessible with <span class="source">Ctrl+Shift+J</span>).
If you see any errors listed for RcVCite.js, or versification.js please report them to <i>TODO: make support email address</i>.
to</p>

<br><a href="#top" class="btn btn-xs btn-primary">back to top</a>
<?php
require_once './includes/foot.php';
?>