// ==UserScript==
// @name        Gocomics Depaywall
// @description Bypasses the Gocomics Paywall and Removes Ads
// @icon        https://github.com/CookieCarter/Gocomics-Depaywall/raw/refs/heads/master/Extension/icons/border-48.png
// @match       *://*.gocomics.com/*
// @grant       none
// @version     3.0
// @author      Idiot01, CookieCarter
// @compatible  chrome
// @compatible  firefox
// @compatible  opera
// @compatible  safari
// @compatible  edge
// @downloadURL https://github.com/CookieCarter/Gocomics-Depaywall/raw/master/Userscript/gocomics.user.js
// @updateURL   https://github.com/CookieCarter/Gocomics-Depaywall/raw/master/Userscript/gocomics.user.js
// @run-at      document-end
// ==/UserScript==

// Note: any JS manipulation seems to be detected by website scripts, revert to pure CSS style injection
(function () {
  'use strict';

  // Hide ad elements, set overflow:auto to allow scroll
  // Random class is some ad thing, probably going to change
  const css = `
  .harzsgqwhvvy73igflnyivy7,
  div[class*="AdDisplay"],
  div[class*="HeaderAd"],
  div[class*="UpsellSectionBreak"],
  div[class*="RollUpUpsell"] {
    display: none !important;
  }
  html, body {
    overflow: auto !important;
  }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Cheesey solution to variable loading times and fake links
  setInterval(function() {
    var el = document.querySelector(".ShowComicViewer-module-scss-module__q5dCdq__showComicViewer__skeleton");
    if (el != null) {
      var url = document.querySelector("meta[property='og:image']").content;
      el.innerHTML = `<img src="${url}?optimizer=image&width=2800&quality=85" style="width: ${el.offsetWidth}px">`;
    }
  }, 100);
})();
