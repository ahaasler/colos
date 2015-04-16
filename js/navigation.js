jQuery(document).ready(function() {
	var siteUrl = 'http://' + (document.location.hostname || document.location.host);

	// Catch all internally-focused links and push a new state.
	$(document).delegate('a[href^="/"],a[href^="' + siteUrl + '"]', "click", function(e) {
		e.preventDefault();
		History.pushState({}, "", this.pathname);
	});

	History.Adapter.bind(window, 'statechange', function(){
		var state = History.getState();
		// Get link content
		$.get(state.url, function(data) {
			// Update html language tag
			$('html').attr({'lang':data.match(/<html lang=\"(.*?)\">/)[1]});
			// Update html title
			document.title = data.match(/<title>(.*?)<\/title>/)[1];
			// Update canonical link
			$('link[rel=canonical]').attr({'href':data.match(/<link rel=\"canonical\" href=\"(.*?)\">/)[1]});
			// Update alternate language links (remove and add because the number of links may be different)
			$('link[rel="alternate"]').remove();
			var alternates = data.match(/(<link rel=\"alternate\" [^>]*?\/>)/g);
			if (alternates) {
				for (var i = alternates.length - 1; i >= 0; i--) {
					$('link[rel="canonical"]').after(alternates[i]);
				}
			}
			// Update body class (colors)
			document.body.className = data.match(/<body class=\"(.*?)\"/)[1];
			// Update content
			$('.content').html($(data).find('.content'));
			// Update header title
			$('.header div').html($(data).find('.header div'));
			// Update language links
			$('.header .menu').html($(data).find('.header .menu'));
			// Update drawer links
			$('[drawer] core-menu').html($(data).find('[drawer] core-menu'));
		});
	});
});
