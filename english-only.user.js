// ==UserScript==
// @id           subscene-english-only
// @name         Subscene English Only
// @version      0.1
// @description  Only english subs appear in the list
// @author       L1lith
// @include      http*://subscene.com/subtitles/*
// @grant        none
// @namespace    https://github.com/L1lith/Subscene.com-User-Scripts
// @run-at document-end
// ==/UserScript==

(()=>{
  [...document.querySelectorAll('.a1 .l')].filter(node => !((node.textContent || "").toLowerCase().includes("english"))).map(node => node.parentNode.parentNode.parentNode).forEach(node => node.parentNode.removeChild(node))
})()