
jQuery(document).ready(function() {
	
	jQuery('.zstoreTabs a').click(function() {
		// save jQuery(this) in a variable for efficiency
		var jQuerythis = jQuery(this);
		
		// hide panels
		jQuery('.zstorePanelclass').hide();
		jQuery('.zstoreTabs a.active').removeClass('active');
		    
		// add active state to new tab
		jQuerythis.addClass('active').blur();	
		// retrieve href from link (is id of zstorePanelclass to display)
		var panel = jQuerythis.attr('href');
		// show panel
		jQuery(panel).fadeIn(250);
		
		// don't follow link down page
		return(false);
	}); // end click
	 
	// open first tab
	jQuery('.zstoreTabs li:first a').click();
}); // end ready
