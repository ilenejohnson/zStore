jQuery(document).ready(function() {


if (typeof(zstorePHPvars) != "undefined"){
	var gridCellSize = zstorePHPvars.gridCellSize;
	var gridCellSpacing = zstorePHPvars.gridCellSpacing;
	var gridCellBackgroundColor = zstorePHPvars.gridCellBackgroundColor;
	var showZoom = zstorePHPvars.showZoom;
	
	jQuery(".gallery figure").css("width",gridCellSize);
	jQuery(".gallery figure").css("margin-right",gridCellSpacing + "px");
	jQuery("figure img").css("backgroundColor","#"+gridCellBackgroundColor);
}
	jQuery(".zStore_gallery figure").hover(
		function() {
			
			if (showZoom === "true" )
			{
			
				jQuery(this).css("webkitTransform","scale(1.2)");
				jQuery(this).css("msTransform","scale(1.2)");
				jQuery(this).css("transform","scale(1.2)");
				
			}
	
		},function (){	
			if (showZoom === "true" )
			{
				jQuery(this).css("webkitTransform","scale(1)");
				jQuery(this).css("msTransform","scale(1)");
				jQuery(this).css("transform","scale(1)");
			}
	
	
		}
	
	
	
	);
 


}); // end ready