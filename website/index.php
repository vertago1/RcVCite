<?php
require_once './includes/functions.php';

$PAGE_TITLE='RcVCite - Pop-up Bible Verses on Mouse-over';
$PAGE_SHORT='Home';

require_once './includes/head.php';
?>
<div class="subtitle">Pop-up Bible verses on mouse-over.</div>
<div style="text-align: center; padding: .4em 0 0 0;"><img src="img/example.png" alt="Example of RcVCite" /></div>
<br>
<h2><a name="what_is_rcvcite"></a>What is it?</h2>
<p>RcVCite makes looking up bible verses on a website or blog fast and easy.
It is a Bible verse reference processor that locates verse references on any webpage.
It displays the content of that verse when you click on a reference or your mouse moves over the reference.
Move your mouse over this verse (or click it), John 3:16 for an example.
<p>RcVCite retrieves verses by accessing a public API for the Text Only Edition of the Holy Bible Recovery Version published by Living Stream Ministry, Anaheim, CA;
the terms of use for this API may be viewed <a href="http://api.lsm.org/recver.php#tos">here</a>.</p>
<p>RcVCite is in public beta which means it still may have problems to be worked out, but it is available for anyone to use.
If you do try it and notice a problem, please consider <a href="contact_us.<?php echo rcvcite::$FILE_EXT; ?>">writing the developer</a>.</p>

<h2><a name="how_to"></a>How to use it</h2>
<ul class="list-group">
  <li class="list-group-item"><a href="for_websites.<?php echo rcvcite::$FILE_EXT; ?>#add_rcvcite" class="btn btn-xs btn-primary">Add it</a> to your blog or webpage for your viewers to use.</li>
  <li class="list-group-item"><a href="for_browsers.<?php echo rcvcite::$FILE_EXT; ?>#extension" class="btn btn-xs btn-primary">Get</a> the browser extension or bookmarklet.</li>
</ul>
<br>

<h2><a name="features"></a>Features and limitations</h2>
<p>RcVCite was written to have some degree of flexibility.
For verse references that have the book chapter and verse it works well.
If your references depend on context, it may or may not get it correct because it may pickup.
Verses that do not exist in the bible such as Philemon 2:1 will not be cited </p>

<h3>Reference format</h3>
<p>Verse references with the following formats will be recognized.
Note that all the numbers use Arabic numerals (1,2,...,9,10,...).
Roman numerals (I,II,III,...) and written numbers (one,two,three,...) are not supported at this time.</p>
<ul class="list-group">
  <li class="list-group-item"><i>Book or abbreviation followed by verse numbers:</i><br>
Matthew 1:1; 8:1-13:52; 1 Jn. 1:2-3; Phil. 1:1-2:1</li>
  <li class="list-group-item"><i>v. or vv. followed by the verse number(s) (with a previously mentioned book and chapter):</i><br>
(John 1) ... v. 1; vv. 1-3; v. 3:1; vv. 3:16-17;</li>
  <li class="list-group-item"><i>Chapter, chap. or chapters followed by the verse numbers</i><br>
John chap. 1 ... chapters 2 and 3</li>
  <li class="list-group-item"><i>Verse or verses followed by the verse numbers</i><br>
Verse 4, verses 15, 16 and 17, verses 15 through 17</li>
  <li class="list-group-item"><i>References with a chapter colon and verses</i><br>
1:1; 3:16,17</li>
</ul>
<p>Some book abbreviations are accepted.
You can test out abbreviations, verse references, and portions of text with RcVCite using the <i>RcVCite Live Preview Tool</i> below.</p>
<?php rcvcite::make_button("RcVCite Live Preview Tool",array('color'=>'blue','onclick'=>'$(\'#rcvcite_citepreview\').slideToggle();')); ?>
<div id='rcvcite_citepreview' class="panel panel-primary" style='display:none;'>
  <div class="panel-heading">
    <h3 class="panel-title">RcVCite Live Preview Tool</h3>
  </div>
  <div class="panel-body"><script type="text/javascript">
function dopreview_cite(){
  var preview=document.getElementById("rcvcite_preview");
  preview.innerHTML=document.getElementById("rcvcite_testtext").value;
  RcVCite.cite(preview);
}
</script>
<form action="javascript:void(0);" onsubmit="dopreview_cite();">
<textarea id="rcvcite_testtext" style="width:100%; height: 3em;" placeholder="Text with verse reference you want to test..."></textarea>
<input type="submit" value="Preview"/>
</form><div id="rcvcite_preview" style="background-color:white; border: inset; min-height: 2em;"></div></div>
</div>

<h3>Context</h3>
<p>RcVCite will remember the last mentioned book and chapter.
Here is an example.</p>
<blockquote>Revelation 22 is the last chapter in the bible.
Verse 1 mentions a river of water of life.</blockquote>
<p>If you include <span class="source">RcVCite.looseContext=true;</span> RcVCite will recognize book names that are not a part of a verse reference.
A book name followed by a chapter does not need this option to be recognized.
Note RcVCite cannot distinguish between names of books and people.
For example:</p>
<blockquote>The book of Revelation was written by John.
We can see this from v. 1:1 (Note that it references John 1:1 instead of Rev. 1:1).</blockquote>

<h3>Overlay styles</h3>
<p>RcVCite comes with a sample style, <span class="source">RcVCite.css</span>.
You can change it to make the verse overlays match the style of your website.
<a href='javascript:void(0);' id='show_stylepreview' onclick='$("#rcvcite_stylepreview").slideToggle(); checkStylePreview();' class="btn btn-xs btn-primary">This tool</a> allows you to preview changes to the styling.
Note that it affects all the overlays on the page.
<div id='rcvcite_stylepreview' class="panel panel-primary" style='display:none;'>
  <div class="panel-heading">
    <h3 class="panel-title">Style Preview</h3>
  </div>
  <div class="panel-body">
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
</div>
</p>

<h3>Options</h3>
<p>These options are available in the settings for the Wordpress plugin or browser extension.
If you have added RcVCite to your website using HTML, then the following options can be set prior to invoking <span class="source">RcVCite.cite();</span></p>
<ul class="list-group">
  <li class="list-group-item"><a name="citeChapters"></a><span class="source">RcVCite.citeChapters=false;</span>
This is turned on by default.
When turned on, RcVCite will links chapters without a verse number such as 1 John 1.</span></li>
  <li class="list-group-item"><a name="hoverDelay"></a><span class="source">RcVCite.hoverDelay=400;</span>
The hover delay sets how long the mouse must be over a verse reference before the text will appear and how long before the text it will be hidden once the mouse leaves the box.
The first time the mouse moves over a reference the text for the verse is fetched, so it may take longer than the hover delay before the text of the verse appears.</span></li>
  <li class="list-group-item"><a name="horzPad"></a><span class="source">RcVCite.horzPad=5;</span>
This changes the minimum horizontal space on each side of the verse pop-ups.</span></li>
  <li class="list-group-item"><a name="looseContext"></a><span class="source">RcVCite.looseContext=true;</span>
When turned on, book names will be identified even if they are not a part of a verse or chapter reference.
Note that RcVCite does not distinguish between brother John and the book of John.</li>
  <li class="list-group-item"><a name="listInvalid"></a><span class="source">RcVCite.listInvalid=true;</span>
When <span class="source">true</span>, invalid verse references will be printed to the JavaScript console along with the reason.
A verse is considered invalid if the chapter, starting verse, or ending verse do not exist in the bible.</li>
  <li class="list-group-item"><a name="ignoreFilter"></a><span class="source">RcVCite.ignoreFilter=function(HTML_DOM_element){ return false; };</span>
This can be set to JQuery selector such as <span class="source">'.rcvcite-ignore'</span> or a JavaScript function which accepts a single parameter for the HTML node to test.
This function should return <span class="source">true</span> for nodes that should be ignored.
Nodes that are ignored will not be checked for books, chapters, or verses.</li>
</ul>

<h2><a name="troubleshooting"></a>Troubleshooting</h2>
<p><b>Is JavaScript enabled?</b>
RcVCite runs using the JavaScript, so if JavaScript is disabled in your browser then RcVCite will not work.</p>
<p><b>Are there error messages in the JavaScript console?</b>
Most modern web browsers have a JavaScript console.
Any JavaScript errors will be listed there along with any messages printed to the JavaScript console (Usually accessible with <span class="source">Ctrl+Shift+J</span>).
If you see any errors listed for RcVCite.js, or versification.js please report them to <i><a href="mailto:support@rcvcite.net">support@RcVCite.net</a></i>.
</p>

<h3><a name="troubleshooting"></a>Known issues</h3>
<ul class="list-group">
  <li class="list-group-item">Times of the format HH:MM may be interpreted as a verse reference.</li>
  <li class="list-group-item">Dynamically inserted content is not cited automatically (i.e. Facebook posts which are loaded by AJAX).</li>
  <li class="list-group-item">Verse ranges across chapters are not cited as a range.</li>
  <li class="list-group-item">Verse ranges that include more than 30 verses are capped to 30.</li>
  <li class="list-group-item">Verses that are detected as invalid are not tagged.
    A potential new feature is showing the message, "The verse couldn't be found."</li>
  <li class="list-group-item">Verse references which cross HTML tags may not be cited correctly.</li>
</ul>

<a href="#top" class="btn btn-xs btn-primary">back to top</a>
<?php
require_once './includes/foot.php';
?>
