<?php
require_once './includes/updates.php';

header('Content-Disposition: attachment; filename="rss.xml"');
header('Content-Type: application/rss+xml');

echo '<?xml version="1.0" encoding="utf-8"?>';
?>

<rss version="2.0">
<channel>
<title>RcVCite Updates</title>
<link>http://rcvcite.net</link>
<description>Receive updates on changes to RcVCite.</description>
<language>en-us</language>
<webMaster>support@rcvcite.net</webMaster>
<lastBuildDate><?php echo date(DATE_RSS); ?></lastBuildDate>
<category>changelog</category>
<ttl>720</ttl>
<?php

foreach($UPDATES as $time => $details){
  $title=$details['title'];
  $link=isset($details['link'])?$details['link']:('http://rcvcite.net/updates.html#'.$time);
  $pubDate=date(DATE_RSS,$time);
  $guid=$time;
  $description=$details['description'];
?>
<item>
<title><?php echo $title; ?></title>
<link><?php echo $link; ?></link>
<guid><?php echo $guid; ?></guid>
<pubDate><?php echo $pubDate; ?></pubDate>
<description><?php echo $description; ?></description>
</item>
<?php
}
?>
</channel>
</rss>