<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <title><?php echo isset($PAGE_TITLE)?$PAGE_TITLE:"RcVCite"; ?></title>
    <link rel="icon" type="image/svg+xml" href="/img/icon.svg"/>
    <link rel="alternate icon" type="image/png" href="/img/icon.png"/>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha384-vtXRMe3mGCbOeY7l30aIg8H9p3GdeSe4IFlP6G8JMa7o7lXvnz3GFKzPxzJdPfGK" crossorigin="anonymous"></script>
<!-- Bootstrap -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="./site-style.css"/>
<script type="text/javascript" src="./core/versification.js"></script>
<script type="text/javascript" src="./core/RcVCite<?= $RCVCITE_VERSION ?? '' ?>.js"></script>
<link rel="stylesheet" type="text/css" href="./core/RcVCite.css" id="rcvcite_styletag_old"/>
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