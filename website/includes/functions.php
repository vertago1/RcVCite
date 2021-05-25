<?php
class rcvcite{
  public static $FILE_EXT;

  public static function do_title(){
?>
<h1><a href="index.<?php echo rcvcite::$FILE_EXT; ?>">RcVCite<sup>&beta;&epsilon;&tau;&alpha;</sup></a></h1>
<?php
  }

  public static function make_button($text,$args=array()){
    if(isset($args['href'])){
      ?><a href="<?php echo $args['href'];?>"><?php
    }
?>
<div class="btn btn-primary"<?php if(isset($args['onclick'])){ echo ' onclick="'.$args['onclick'].'"';} ?>><?php echo $text;?></div><?php
    if(isset($args['href'])){
      ?></a><?php
    }
  }
}

rcvcite::$FILE_EXT=((php_sapi_name()=='cli')?'html':'php');
?>