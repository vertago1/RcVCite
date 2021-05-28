<?php
require_once './includes/functions.php';
require_once './includes/updates.php';

$PAGE_TITLE='RcVCite - Updates';
$PAGE_SHORT='Updates';

require_once './includes/head.php';
?>
<div class="subtitle">Keep Track of Changes and Updates to RcVCite.</div>
<h2>Change log</h2>
<p>RSS feed: <a href="rss.<?= rcvcite::$RSS_EXT; ?>"><img height="28" width="28" src="img/feed-icon-28x28.png" style="vertical-align: middle; padding-bottom: 0.05em;"> subscribe</a></p>
<?php

foreach($UPDATES as $time => $details){
  $header=date('F jS, Y',$time).' - '.$details['title'];
  $description=$details['description'];
?>
<h3><a name="<?= $time; ?>"></a><?= $header; ?></h3>
<p><?= $description; ?></p>

<?php } ?>
<br><br>
<a href="#top" class="btn btn-xs btn-primary">back to top</a>
<?php
require_once './includes/foot.php';
