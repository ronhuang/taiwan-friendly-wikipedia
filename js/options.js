/**
 * Copyright (c) 2011 Ron Huang. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

// Saves options to localStorage.
function save_options() {
  var checkbox = document.getElementById("automatic_redirect");
  localStorage["automatic_redirect"] = checkbox.checked;

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
  if (!ar)
    return;

  var checkbox = document.getElementById("automatic_redirect");
  checkbox.checked = true;
}

function init() {
  // i18n
  document.getElementById('optionsTitle').innerHTML = chrome.i18n.getMessage('optionsTitle');
  document.getElementById('optionsAutoRedirect').innerHTML = chrome.i18n.getMessage('optionsAutoRedirect');
  document.getElementById('optionsAutoRedirectDesc').innerHTML = chrome.i18n.getMessage('optionsAutoRedirectDesc');
  document.getElementById('optionsSave').innerHTML = chrome.i18n.getMessage('optionsSave');

  // Options
  restore_options();
}

//adding listener when body is loaded to call init function.
window.addEventListener('load', init, false);
