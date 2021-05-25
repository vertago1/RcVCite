<?php
require_once './includes/functions.php';

$PAGE_TITLE='RcVCite - Pop-up Bible Verses on Mouse-over';
$PAGE_SHORT='Preview';

$RCVCITE_VERSION='v00_05';

require_once './includes/head.php';
?>
<h2><a name="what_is_rcvcite"></a>Pre-release preview</h2>
<p>This page is for previewing pre-released versions of RcVCite.

<h3>Example Verse References for Testing</h3>
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
<div id='rcvcite_citepreview' class="panel panel-primary">
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

<?php
require_once './includes/foot.php';