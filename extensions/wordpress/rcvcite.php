<?php
/**
 * @package RcVCite
 */
/*
Plugin Name: RcVCite
Plugin URI: http://pcajc.homelinux.com/test/RcVCite
Automatic bible verse overlays for Wordpress.
Version: 0.4.17.716.16
Author: support@rcvcite.net
Author URI: http://rcvcite.net
License: MIT
*/
//Copyright (c) 2013-2014 RcVCite
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

/** This class is used to separate the functions in this plugin so that there are
 * not naming conflicts resulting in php fatal errors */
class rcvcite_plugin {
  public $path = WP_PLUGIN_URL;
  
  public function __construct() {
    if(function_exists('add_action')){
      add_action('wp_enqueue_scripts', array($this,'enqueue_scripts'));
      add_action('wp_print_footer_scripts', array($this,'footer_scripts'));
      if ( is_admin() ){
        add_action( 'admin_menu', array( $this, 'add_settings_link' ) );
        add_action( 'admin_init', array( $this, 'settings_page_init' ) );
      }
    }
  }
  
  public function add_settings_link(){
    // This page will be under "Settings"
    add_options_page( 'Settings Admin', 'RcVCite', 'manage_options',
        'RcVCite-admin', array( $this, 'create_admin_page' ) );
  }

  public function create_admin_page() {
    ?>
	<div class="wrap">
	  <?php screen_icon(); ?>
	  <h2>RcVCite</h2>			
	  <form method="post" action="options.php">
	    <?php
      // This prints out all hidden setting fields
		  settings_fields( 'RcVCite_option_group' );	
		  do_settings_sections( 'RcVCite-admin' );
      ?>
	    <?php submit_button(); ?>
	  </form>
	</div>
	<?php
  }

  public function settings_page_init() {

    add_settings_section(
        'RcVCite_jscript_section', 'JavaScript Settings',
        array($this, 'print_section_info'), 'RcVCite-admin'
    );

    $name='citeChapters';
    register_setting('RcVCite_option_group', $name, array($this, 'check_yn'));
    add_settings_field(
        $name, '<a href="http://rcvcite.net/#citeChapters" target="_blank">Cite Chapters</a>',
        array($this, 'create_yn_field'),
        'RcVCite-admin', 'RcVCite_jscript_section',
        array('id' => $name, 'name' => $name, 'default' => 'false')
    );

    $name='hoverDelay';
    register_setting('RcVCite_option_group', $name, array($this, 'check_numeric'));
    add_settings_field(
        $name, '<a href="http://rcvcite.net/#hoverDelay" target="_blank">Hover Delay (ms)</a>',
        array($this, 'create_numeric_field'),
        'RcVCite-admin', 'RcVCite_jscript_section',
        array('id' => $name, 'name' => $name, 'default' => '400')
    );

    $name='horzPad';
    register_setting('RcVCite_option_group', $name, array($this, 'check_numeric'));
    add_settings_field(
        $name, '<a href="http://rcvcite.net/#horzPad" target="_blank">Horizontal Padding (px)</a>',
        array($this, 'create_numeric_field'),
        'RcVCite-admin', 'RcVCite_jscript_section',
        array('id' => $name, 'name' => $name, 'default' => '10')
    );

    $name='looseContext';
    register_setting('RcVCite_option_group', $name, array($this, 'check_yn'));
    add_settings_field(
        $name, '<a href="http://rcvcite.net/#looseContext" target="_blank">Use Loose Context</a>',
        array($this, 'create_yn_field'),
        'RcVCite-admin', 'RcVCite_jscript_section',
        array('id' => $name, 'name' => $name, 'default' => 'true')
    );

    $name='listInvalid';
    register_setting('RcVCite_option_group', $name, array($this, 'check_yn'));
    add_settings_field(
        $name, '<a href="http://rcvcite.net/#listInvalid" target="_blank">List Invalid Verse References in the Javascript Console</a>',
        array($this, 'create_yn_field'),
        'RcVCite-admin', 'RcVCite_jscript_section',
        array('id' => $name, 'name' => $name, 'default' => 'false')
    );

    $name='ignoreFilter';
    register_setting('RcVCite_option_group', $name, array());
    add_settings_field(
        $name, '<a href="http://rcvcite.net/#ignoreFilter" target="_blank">JQuery Selector for Elements to Ignore</a>',
        array($this, 'create_text_field'),
        'RcVCite-admin', 'RcVCite_jscript_section',
        array('id' => $name, 'name' => $name, 'default' => '')
    );
  }

  public function check_yn($input) {
    if ( get_option( 'test_some_id' ) === FALSE ) {
      add_option( 'test_some_id', $mid );
    } else {
      update_option( 'test_some_id', $mid );
    }
    if ($input==='true') { return 'true'; }
    return 'false';
  }

  public function check_numeric($input) {
    if (is_numeric($input)) { return $input; }
    return '';
  }

  public function print_section_info() {
    print 'These are the javascript settings for RcVCite:';
  }

  public function create_yn_field($args) {
    $selected=(($value=get_option($args['id']))?$value:$args['default'])=='true';
    ?><select id="<?php echo $args['id']; ?>" name="<?php echo $args['name']; ?>">
      <option value="true"<?php if($selected){ echo ' selected';} ?>>Yes</option>
      <option value="false"<?php if(!$selected){ echo ' selected';} ?>>No</option>
    </select><?php
  }

  public function create_numeric_field($args) {
    ?><input type="text" id="<?php echo $args['id']; ?>" name="<?php echo $args['name']; ?>" value="<?php echo (($value=get_option($args['id']))?$value:$args['default']); ?>" /><?php
  }

  public function create_text_field($args) {
    ?><input type="text" id="<?php echo $args['id']; ?>" name="<?php echo $args['name']; ?>" value="<?php echo (($value=get_option($args['id']))?$value:$args['default']); ?>" /><?php
  }
  
  /** Attaches to "wp_enqueue_scripts" to specify what scripts and styles need to be included. */
  function enqueue_scripts() {
    wp_enqueue_script( "versification", plugins_url("versification.js", __FILE__));
    wp_enqueue_script( "RcVCite", plugins_url("RcVCite_v00_04.js", __FILE__), array( 'jquery', 'versification' ));
    wp_enqueue_style( "RcVCite", plugins_url("RcVCite.css", __FILE__));
    wp_enqueue_style( "RcVCite-extra-themes", plugins_url("RcVCite-extra-themes.css", __FILE__), array('RcVCite'));
  }
  
  function footer_scripts(){
?>
<script type="text/javascript">
if(typeof RcVCite === 'object'){
  jQuery(document).ready(function(){
    var limitTo=document;
    RcVCite.citeChapters=<?php echo json_encode(($value=get_option('citeChapters'))?true:false); ?>;
    RcVCite.hoverDelay=<?php echo json_encode(($value=get_option('hoverDelay'))?intval($value):400); ?>;
    RcVCite.horzPad=<?php echo json_encode(($value=get_option('horzPad'))?intval($value):10); ?>;
    RcVCite.looseContext=<?php echo json_encode(!is_null($value=get_option('looseContext'))?$value==='true':true); ?>;
    RcVCite.listInvalid=<?php echo json_encode(($value=get_option('listInvalid'))?true:false); ?>;
    RcVCite.ignoreFilter=<?php echo json_encode(($value=get_option('ignoreFilter'))?$value:''); ?>;
    RcVCite.cite(limitTo);
  });
} else {
  console.log('RcVCite not defined!');
}
</script>
<?php
  }
}

if(!isset($rcvcite_plugin)) { $rcvcite_plugin = new rcvcite_plugin(); }
