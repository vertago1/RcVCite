<?php

date_default_timezone_set('America/Los_Angeles');

$UPDATES=array(
  strtotime('2021-05-15 7:30')=>array('title'=>'Pre-release version available',
    'description'=>'Fixed a bug in "See More" links for Song of Songs. '
    . 'Changed the target of "See More" links to <a href="https://text.recoveryversion.bible/">https://text.recoveryversion.bible/</a>.'
    . 'The preview of the pre-release version can be found <a href="https://rcvcite.net/preview.html">here</a>.'),
  strtotime('2017-07-20 11:00')=>array('title'=>'ignoreFilter Bugfixes',
    'description'=>'Fixed a bug related to ignoreFilter. '
    . 'Added textarea to the list of ignored DOM elements.'),
  strtotime('2017-07-15 18:00')=>array('title'=>'Verse Recognition Improvements',
    'description'=>'Verse references which use Roman numerals for the book now work (e.g. II Cor. 3:18). '
    . 'Support was added for ranges of the format verses 17 to 18. '
    . 'An additional filter was added to prevent pp. 17-18 from being recognized as a verse range or p. 1 as a verse. '
    . 'The undocumented feature "ignoreFilter" has been inverted to be more intuitive and documentation has been added to this website. '
    . 'Also, options dialog entries were added for <a href="./#ignoreFilter">"ignoreFilter"</a> to the extensions and Wordpress plugin. '
    . 'Tests were written for the book detection and parsing resulting in a bug fix for cases where Philm. 1 was being improperly recognized as being Philippians 1.'),
  strtotime('2015-07-31 18:17')=>array('title'=>'HTTPS Support for Wordpress and Firefox',
    'description'=>'HTTPS support has been added to the Wordpress plugin, '
    . 'and the Firefox extension. The Firefox extension is pending review, '
    . 'and will become available after the review process. A styling bug '
    . 'was fixed where specific pages styled spans to be "display:block".'),
  strtotime('2015-07-30 20:31')=>array('title'=>'HTTPS Support for Chrome Extension',
    'description'=>'HTTPS support has been added to the chrome extension.'),
  strtotime('2015-07-30 19:34')=>array('title'=>'HTTPS Support',
    'description'=>'An SSL certificate was added to https://rcvcite.net to allow for https access. '
    . 'This was a follow up to to the Recovery Version API supporting HTTPS. '
    . 'Also changes were made to bookmarklet to add HTTPS support. '
    . 'To benefit from these changes the old bookmarklet must be replaced by the new bookmarklet in your browser. '
    . 'HTTPS support will be added to the browser extensions in a later update after more testing.'),
  strtotime('2014-05-01 22:47')=>array('title'=>'Bug fixes',
    'description'=>'There were several under-the-hood changes to make the Mozilla reviewers happy. '
    . 'Also, the book name matching was changed back to case sensitive and new matching rules were added for all caps. '
    . 'This was necessary because with all lowercase there were too many false positives. '
    . 'An error message was added for the case when the text-only Online Recovery Version API is unreachable.'),
  strtotime('2014-04-12 17:01')=>array('title'=>'Several Updates',
    'description'=>'The period after book abbreviations is no longer optional. '
    . 'This change was necessary because of the change to case insensitive book names. '
    . 'Time ranges followed by AM or PM are now excluded from being tagged for example 1:15-2:15 PM.'),
  strtotime('2014-03-20 17:13')=>array('title'=>'Fixed S. S. Bug',
    'description'=>'Fixed a bug preventing references such as S. S. 1:1 from being cited correctly.'),
  strtotime('2014-03-20 16:40')=>array('title'=>'Support for Firefox on Android',
    'description'=>'Fixed problems which prevented the Firefox extension from'
    . ' being installed on Android.'),
  strtotime('2014-03-19 17:39')=>array('title'=>'Fix Book name Search Bug',
    'description'=>'Changed the book name search regex to be case insensitive.'
    . ' For example, LUKE 1:1 will now be tagged.'),
  strtotime('2014-01-06 17:59')=>array('title'=>'Added Themes to Chrome and Firefox Extensions',
    'description'=>'Added themes to the Chrome and Firefox extensions.'
    . ' The themes can be selected through the add-on/extension preferences.'),
  strtotime('2013-12-31 20:44')=>array('title'=>'Added Firefox Addon-bar Button and Fixed Verse Range Tagging Bug',
    'description'=>'Added a button to the Firefox extension addon-bar which when clicked disables / enables RcVCite for future browsing.'
    . ' Fixed a bug where verses of the form Matthew 10:5b-15 were not being tagged properly.'),
  strtotime('2013-12-29')=>array('title'=>'Added Click Toggle and "through" and Fixed Bug',
    'description'=>'Clicking a tagged verse will now toggle displaying or hiding the overlay.'
    . ' References separated by through will now be interpreted (Matthew chapter 13  verses 50 through 52).'
    . ' Fixed a bug with the way stray chapters were being handled.'),
  strtotime('2013-12-27')=>array('title'=>'Fixed Verse Range Tagging Bug',
    'description'=>'Fixed a bug where verses of the form Matthew 1:1; 8:1-13:52 were not being tagged properly.'),
  strtotime('2013-12-14')=>array('title'=>'Added Bookmarklet Instructions',
    'description'=>'Updated instructions for installing the bookmarklet to different browsers.'),
  strtotime('2013-12-09')=>array('title'=>'Fixed Bug and Added RSS',
    'description'=>'Fixed a bug with the "looseContext" option, and created a simplified bookmarklet script.'
    . ' Also, added the RSS feed.'),
  strtotime('2013-12-08')=>array('title'=>'Added Boomarklets',
    'description'=>'Added RcVCite bookmarklet.'),
  strtotime('2013-12-07')=>array('title'=>'Added Preferences for the Firefox Extension',
    'description'=>'Added preferences to the Firefox extension, and updated is sources.')
  );

?>