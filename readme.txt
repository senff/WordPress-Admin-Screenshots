=== Admin Screenshots ===
Contributors: senff
Donate link: https://donate.senff.com
Tags: screenshot, share, debug, admin
Plugin URI: https://wordpress.org/plugins/admin-screenshots/
Requires at least: 5.0
Tested up to: 6.7
Stable tag: 1.0.5
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Want to take a screenshot of any page in your admin Dashboard and share it with someone else? It couldn't be easier with Admin Screenshots!

== Description ==

= Summary =

Admin Screenshots for WordPress will add a button to every page in the admin Dashboard, allowing you to take a screenshot of the page you're on. The screenshot will be saved in your Media Library, and you will get a direct link to it to share. This will let you show how certain settings are, without giving them access to your backend.

If you're on the other end (like a support agent) and you need to know how someone's site settings without having to log in, tell your customer to install the plugin, take a screenshot of the page that you want to see, and send you the link. 

= Features = 

* **Saves screenshots in Media Library**: every image is saved in the /admin-screenshots/ subdirectory under /uploads.
* **Gives you direct link to images**: immediately after taking the screenshot, you get the link to it, easy to copy to your clipboard and share with others.


== Installation ==

1. Upload the "admin-screenshot" directory to your "wp-content/plugins" directory.
2. In your WordPress admin, go to PLUGINS and activate "Admin Screenshot".
3. Go to any page in your admin Dashboard.
4. Select the "TAKE SCREENSHOT" button.
5. Copy the link to the screenshot and share it with anyone.
6. Party!


== Frequently Asked Questions ==

= Some images are not showing, and some of the styles seem to be a bit off in the screenshots, esp. form elements (input fields, dropdowns, etc.) =
This is a known issue and is likely a bug in the original HTML2Canvas library that this plugin is built on. You can read a bit more about this library here: https://github.com/niklasvh/html2canvas

Relevant examples: https://github.com/niklasvh/html2canvas/issues/2958 / https://github.com/niklasvh/html2canvas/issues/2937

While the screenshots aren't perfect, they should be sufficient for most cases where you're just trying to share the settings on a page.

= Is it possible to make a screenshot of the entire page, and not just the visible part? =
Working on it. Next version.

= Is it possible to delete all the screenshots that were created with this plugin all at once? =
Hopefully in a future version. 

= The screenshot is not saving. Is there a debugging feature to see what might be wrong here?
Not yet, but hopefully in a future version.

= I'll need more help please! =
Please go to the plugin's [WordPress.org support forum](https://wordpress.org/support/plugin/admin-screenshots) and let me know.

= I've noticed that something doesn't work right, or I have an idea for improvement. How can I report this? =
It's very possible, or even likely, that something's not right; I can only do so much testing and it's impossible to test the plugin with every single setup out there, so there's a good chance that it will have some issues. Please report any bugs on the plugin's [WordPress.org support forum](https://wordpress.org/support/plugin/admin-screenshots).


== Screenshots ==

1. Screenshot Button
2. Popup with links


== Changelog ==

= 1.0.5 =
* Adjusted some code to better adhere to plugin standards.

= 1.0.4 =
* Fix for a bug in HTML2CANVAS library that rendered text with wrong spacing: https://github.com/niklasvh/html2canvas/issues/3037

= 1.0.3 =
* Small bugfixes, typos, cleanup

= 1.0 =
* First public release


== Upgrade Notice ==

= 1.0.5 =
* Code updates

= 1.0.4 =
* Minor bugfix

= 1.0.3 =
* Pre-release fixes

= 1.0 =
* First public release
