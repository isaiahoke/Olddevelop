<?php
/**
 * Plugin Name: GutBlockDev
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: develop — is a Gutenberg plugin created via create-guten-block.
 * Author: Isaiah
 * Author URI: https://isaiahoke.co.uk
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
