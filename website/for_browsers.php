<?php
require_once './includes/functions.php';

$PAGE_TITLE='RcVCite - For your Web Browser';
$PAGE_SHORT='For Browsers';

require_once './includes/head.php';
?>
<div class="subtitle">For Your Web Browser</div>
<br>
There are currently two ways to use RcVCite from your Web Browser.
<ul class="list-group">
  <li class="list-group-item">As a <a href="#extension">browser extension</a></li>
  <li class="list-group-item">As a <a href="#bookmarklet">bookmarklet</a> (<a href="http://en.wikipedia.org/wiki/Bookmarklet">Wikipedia article</a>)</li>
</ul>
The browser extensions allow you to configure RcVCite, while the bookmarklet currently uses the default options.
The bookmarklet only applies RcVCite to the page you currently have open when you click it, but the browser extension applies RcVCite to every page you visit while it is enabled.

<h2><a name="extension"></a>RcVCite browser extensions</h2>
<p>These browser extensions allow you to have the features of RcVCite on webpages which do not use it already.</p>
<ul class="list-group"><!--TODO Should probably recommend one based on user agent-->
  <li class="list-group-item">Internet Explorer (Not written yet)</li>
  <li class="list-group-item">Firefox (including Android): <a href="https://addons.mozilla.org/en-US/firefox/addon/rcvcite/" class="btn btn-xs btn-primary">download</a>.
  <li class="list-group-item">Google Chrome: <a href="https://chrome.google.com/webstore/detail/rcvcite-pop-up-bible-vers/deppdajlfhmmbomieepdeodnlmpebihg?hl=en&gl=US" class="btn btn-xs btn-primary">download</a></li>
</ul>
<p>To install the Chrome or Firefox extension:</p>
<ul class="list-group">
  <li class="list-group-item">Download the extension for your browser using one of the download links above.</li>
  <li class="list-group-item">Open up the extensions list on your browser.</li>
  <li class="list-group-item">Drag the extension file onto the extensions list and you should be prompted to install it.</li>
</ul>
<?php

//<p>Features unique to the browser extension.</p>

//<h2><a name="extension"></a>Options</h2>

?>

<h2><a name="bookmarklet"></a>RcVCite bookmarklet</h2>

<p>A bookmarklet is a bookmark that contains Javascript code instead of a URL for a webpage.
It is only executed when you click the bookmark, but it is supported by most web browsers.</p>

<h3><a name="bookmarklet"></a>Installation instructions</h3>
<center><p><a onclick="return false;"
   href='javascript:(function(){function a(f){if(!f.getElementById("RcVCite_bookmarklet")){var e="http:";if(window.location.protocol==="https:"){e="https:"}var c=f.getElementsByTagName("head")[0];var b=f.createElement("script");b.id="RcVCite_bookmarklet";b.src=e+"//rcvcite.net/boot.js";b.type="text/javascript";c.appendChild(b)}}a(document);for(i=0;i<frames.length;i++){a(frames[i].document)}})();'
   style="border: black dotted 3px; padding: 3px; cursor: move">
    RcVCite</a></p></center>
<ul class="list-group"><!--TODO Should probably recommend one based on user agent-->
  <li class="list-group-item"><b>Internet Explorer:</b> Right click the link above and select "Add to favorites...".
      You may need to show your favorites bar to click it.</li>
  <li class="list-group-item"><b>Firefox:</b> Right click the link above and select "Bookmark this link".
      You can also drag the link onto your bookmarks bar.</li>
  <li class="list-group-item"><b>Google Chrome:</b> Drag the link above to your bookmarks bar.</li>
</ul>
<p>You can also try adding RcVCite as a browser bookmarklet by creating a bookmark and pasting in the following in the URL field:</p>
<blockquote><div class="source" style="max-width: 300px;">
javascript:(function(){function a(f){if(!f.getElementById("RcVCite_bookmarklet")){var e="http:";if(window.location.protocol==="https:"){e="https:"}var c=f.getElementsByTagName("head")[0];var b=f.createElement("script");b.id="RcVCite_bookmarklet";b.src=e+"//rcvcite.net/boot.js";b.type="text/javascript";c.appendChild(b)}}a(document);for(i=0;i&lt;frames.length;i++){a(frames[i].document)}})();
</div></blockquote>

<a href="#top" class="btn btn-xs btn-primary">back to top</a>
<?php
require_once './includes/foot.php';
?>