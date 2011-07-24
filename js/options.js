/**
 * Copyright (c) 2011 Ron Huang. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

// Saves options to localStorage.
function save_options() {
  var radio = document.getElementById("auto_redirect_1");
  localStorage["automatic_redirect"] = radio.checked;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = chrome.i18n.getMessage('optionsSaved');
  status.style.display = 'block';
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var ar = JSON.parse(localStorage["automatic_redirect"] || true);
  var radio;
  if (ar) {
    radio = document.getElementById("auto_redirect_1");
  }
  else {
    radio = document.getElementById("auto_redirect_0");
  }
  radio.checked = true;
}

function init() {
  // i18n
  document.getElementById('extName').innerHTML = chrome.i18n.getMessage('extName');
  document.getElementById('extDesc').innerHTML = chrome.i18n.getMessage('extDesc');
  document.getElementById('optionsTitle').innerHTML = chrome.i18n.getMessage('optionsTitle');
  document.getElementById('optionsAutoRedirect').innerHTML = chrome.i18n.getMessage('optionsAutoRedirect');
  document.getElementById('optionsAutoRedirectDesc').innerHTML = chrome.i18n.getMessage('optionsAutoRedirectDesc');
  document.getElementById('optionsSave').value = chrome.i18n.getMessage('optionsSave');
  document.getElementById('optionsEnable').innerHTML = chrome.i18n.getMessage('optionsEnable');
  document.getElementById('optionsDisable').innerHTML = chrome.i18n.getMessage('optionsDisable');

  // Options
  restore_options();
}

//adding listener when body is loaded to call init function.
window.addEventListener('load', init, false);
