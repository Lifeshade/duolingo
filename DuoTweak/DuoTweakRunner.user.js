// ==UserScript==
// @name			DuoTweak
// @namespace		duolingo
// @description		Useful add-on for Duolingo | visit https://www.duolingo.com/comment/7619770 | (c) Lifeshade aka HeadwayCourse, 2015
// @version			1.1.0
// @author			Lifeshade aka HeadwayCourse, (c) 2015
// @include			https://www.duolingo.com/*
// @updateURL		https://rawgit.com/Lifeshade/duolingo/master/DuoTweak/DuoTweakRunner.meta.js
// @downloadURL		https://rawgit.com/Lifeshade/duolingo/master/DuoTweak/DuoTweakRunner.user.js
// @grant			none
// ==/UserScript==

var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "https://rawgit.com/Lifeshade/duolingo/master/DuoTweak/DuoTweak.js");
document.head.appendChild(script);

setTimeout(function () {
	if (!window.duotweak_works && duo.user !== undefined) {
		$("head").append('<style type="text/css">#dt-duotweak_lost {display: block; margin: 33px 0 0 10px; color: white; white-space: nowrap;} #dt-duotweak_lost:hover {text-decoration: underline;}</style>');
		$(".topbar-brand").removeAttr("href").css({textIndent: "0"}).append('<a id="dt-duotweak_lost" href="/comment/7619770">Where is DuoTweak?</a>');
	}
}, 10000);

