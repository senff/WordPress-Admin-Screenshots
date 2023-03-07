<?php
	if ( !defined( 'WP_UNINSTALL_PLUGIN' ) )
	exit;
	if ( get_option( 'admin_screenshot_options' ) != false ) {
		delete_option( 'admin_screenshot_options' );
	}
?>