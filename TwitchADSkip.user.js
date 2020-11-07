// ==UserScript==
// @name         Twitch AD Skip
// @namespace    Invertex
// @icon 	 https://i.imgur.com/3hWqlpx.png
// @updateURL    https://github.com/Invertex/TwitchADSkip/raw/main/TwitchADSkip.user.js
// @downloadURL  https://github.com/Invertex/TwitchADSkip/raw/main/TwitchADSkip.user.js
// @version      0.2
// @description  Skip Twitch ADs
// @author       Invertex
// @match        *://*.twitch.tv/*
// @match        *://*.twitchcdn.net/*
// @run-at document-start
// ==/UserScript==

(function() {
	var realFetch = window.fetch;
	window.fetch = function(input, init) {
		if ( arguments.length >= 2 && typeof input === 'string' && input.includes('/access_token') ) {
			var url = new URL(arguments[0]);
                        url.searchParams.forEach(function(value, key) {
                            url.searchParams.delete(key);
                        });
			arguments[0] = url.href;
		}
		return realFetch.apply(this, arguments);
	};
})();
