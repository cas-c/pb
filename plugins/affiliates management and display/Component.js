this_site_url = "your site url"
this_site_name = "the display name you'll use"
alt_banner_1 = "your first alternate"
alt_banner_2 = "your second alternate"
custom_aff_container_id = "the div you are appending the banners to's id"
number_of_colums = 7 // The number of columns you'll be using in your banner table

function getFromSettings() {
	var bannerBank = pb.plugin.get('affiliates').settings.aff;
	var banners = bannerBank.length;
	var remainder = (banners % number_of_colums);
	var defaults = 0;
	if (remainder != 0) {
		defaults = number_of_colums - remainder;
	}
	var defaultBanner = banner(alt_banner_1, this_site_url, this_site_name);
	var defaultBanner2 = banner(alt_banner_2, this_site_url, this_site_name);
                                
	var bannerBankArrayHtml = "<tr>";
	for(var i = 0; i < banners; i++) {
		if(i%number_of_columns==0){
			bannerBankArrayHtml += "</tr><tr>";
		}
		bannerBankArrayHtml += banner(bannerBank[i].img, bannerBank[i].url, bannerBank[i].name);
	}
	if (defaults != 0) {
		for (var j = 0; j < defaults; j++) {
            if (j % 2 == 0) {
             bannerBankArrayHtml += defaultBanner2;   
            }
            else {
             bannerBankArrayHtml += defaultBanner;
            }
		}
	}
	bannerBankArrayHtml += "</tr>";
    $(custom_aff_container_id).append(bannerBankArrayHtml);	
}

function banner(img, url, name) {
	var styles = "";
	if (name != this_site_name) {
		styles = 'style="height:31px; width: 88px; opacity: 0.4;" onmouseover="this.style.opacity=1;this.filters.alpha.opacity=80" onmouseout="this.style.opacity=0.4;this.filters.alpha.opacity=40"';
	}
    return '<td width="100%" class="windowbg" valign="top" align="center" ><a title=\"'+name+'\" target="_blank" href=\"'+url+'\"><img src=\"'+img+'\" border="0"'+ styles + '  \/><\/a></td>';
}