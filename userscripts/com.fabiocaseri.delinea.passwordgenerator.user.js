// ==UserScript==
// @name         Delinea Password Generator Presets
// @namespace    com.fabiocaseri.delinea.passwordgenerator
// @version      0.1
// @description  Set FC presets on Delinea Password Generator
// @author       Fabio Caseri
// @match        https://delinea.com/resources/password-generator-it-tool
// @icon         https://www.google.com/s2/favicons?sz=64&domain=delinea.com
// @grant        none
// @downloadURL  https://fabiocaseri.com/userscripts/com.fabiocaseri.delinea.passwordgenerator.user.js
// @updateURL    https://fabiocaseri.com/userscripts/com.fabiocaseri.delinea.passwordgenerator.user.js
// ==/UserScript==

(function() {
  'use strict';
  const PASSWORD_SYMBOLS = '@#$-!%&';

  document.getElementById('include-symbol-checkbox').checked = false;
  document.getElementById('exclude-duplicates-checkbox').checked = true;
  document.getElementById('include-specific-textbox').value = PASSWORD_SYMBOLS;
})();
