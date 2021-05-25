=== RcVCite ===
Contributors: RcVCite
Donate link: NA
Tags: Bible verse, verse lookup, verse reference
Requires at least: 3.0
Tested up to: 4.8
Stable tag: trunk
License: MIT
License URI: http://opensource.org/licenses/MIT

RcVCite displays the content of a verse when you click on a reference or your
mouse moves over the reference.

== Description ==

[RcVCite Homepage.](http://rcvcite.net)

RcVCite makes looking up bible verses on a website or blog fast and easy. It is
a Bible verse reference processor that locates verse references on any webpage.
It displays the content of that verse when you click on a reference or your
mouse moves over the reference.

RcVCite retrieves verses by accessing a public API for the Text Only Edition of
the Holy Bible Recovery Version published by Living Stream Ministry, Anaheim,
CA;

RcVCite is in public beta which means it still may have problems to be worked
out, but it is available for anyone to use.

== Installation ==

To install this plugin:

1. Copy the rcvcite folder to the `/wp-content/plugins/` directory.
1. Activate RcVCite through the 'Plugins' menu in WordPress.
1. Configure the RcVCite settings through the Wordpress administrative interface.

== Frequently Asked Questions ==

= Where can I find more information about RcVCite? =

RcVCite's homepage is [http://rcvcite.net](http://rcvcite.net).
You can find more information about this plugin and the RcVCite browser
extensions there.

== Screenshots ==

1. An example of RcVCite.
1. The RcVCite Settings page.

== Changelog ==

= 0.4.17.720.11 =
Fixed a bug related to the ignoreFilter jQuery selector feature.

= 0.4.17.719.18 =
Fixed a bug related to properly encoding settings.

= 0.4.17.716.18 =
* Verse references which use Roman numerals for the book now work (e.g. II Cor. 3:18).
* Support was added for ranges of the format verses 17 to 18.
* An additional filter was added to prevent pp. 17-18 from being recognized as a verse range or p. 1 as a verse.
* The undocumented feature "ignoreFilter" has been inverted to be more intuitive and documentation has been added to rcvcite.net. Also, options dialog entries were added for "ignoreFilter" to the extensions and Wordpress plugin.
* Tests were written for the book detection and parsing resulting in a bug fix for cases where Philm. 1 was being improperly recognized as being Philippians 1.

= 0.3.15.731.17 =
* Added support for HTTPS.

= 0.3.14.501.22 =
* There were several under-the-hood changes to make the Mozilla reviewers happy.
  Also, the book name matching was changed back to case sensitive and new
  matching rules were added for all caps.
* This was necessary because with all lowercase there were too many false
  positives.
* An error message was added for the case when the text-only Online Recovery
  Version API is unreachable.

= 0.3.14.421.16 =
* First published release

== Upgrade Notice ==

= 0.3.14.501.22 =
This update fixes several bugs, updating is recommended. See the changelog for
details.

= 0.3.14.412.16 =
This is the first version of RcVCite for Wordpress.
