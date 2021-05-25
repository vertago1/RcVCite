<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <title><?php echo isset($PAGE_TITLE)?$PAGE_TITLE:"RcVCite"; ?></title>
    <link rel="icon" type="image/svg+xml" href="./img/icon.svg"/>
    <link rel="alternate icon" type="image/png" href="./img/icon.png"/>
<script type="text/javascript" src="./jquery.js"></script>
    
<!-- Bootstrap -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap-theme.min.css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="./site-style.css"/>
<script type="text/javascript" src="./versification.js"></script>
<script type="text/javascript" src="./RcVCite_<?= $RCVCITE_VERSION ?? 'v00_04' ?>.js"></script>
<link rel="stylesheet" type="text/css" href="./RcVCite.css" id="rcvcite_styletag_old"/>
<style type='text/css' id="rcvcite_styletag_new"></style>
<script type="text/javascript">
RcVCite.horzPad=15;
RcVCite.looseContext=true;
RcVCite.citeChapters=true;
RcVCite.cite();
</script>
  </head>
  <body>
  <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container starter-template">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="./#">RcVCite<sup>&beta;&epsilon;&tau;&alpha;</sup></a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
<?php
$menu_items=array('Home'=>'.',
  'For Websites'=>'for_websites.'.rcvcite::$FILE_EXT.'#',
  'For Browsers'=>'for_browsers.'.rcvcite::$FILE_EXT.'#',
  'Updates'=>'updates.'.rcvcite::$FILE_EXT.'#',
  'Contact Us'=>'contact_us.'.rcvcite::$FILE_EXT.'#');
  foreach($menu_items as $key => $value){ ?>
        <li<?php if($PAGE_SHORT===$key){echo ' class="active"';} ?>><a href="<?php echo "$value"; ?>"><?php echo "$key"; ?></a></li>
<?php } ?>
      </ul>
    </div><!--/.nav-collapse -->
    </div>
  </div>
  <div class="container" style="padding: 0px;">
    <table id="OuterTable" class="starter-template" cellspacing="0" border="0">
      <tr><td class="border_nw"></td><td class="border_n"></td><td class="border_ne"></td></tr>
      <tr><td class="border_w"></td><td id="Content">