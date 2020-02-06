var origin;

/**
 * @param {AugmentedWriting endpoint response} response
 * @param {HTMLElement} iframe
 * @return {boolean}
 */
function sendAugmentedWritingResult(response, iframe) {
  iframe.contentWindow.postMessage(response, origin);
}

/**
 * @param {function} callback
 * @return {boolean}
 */
function subscribeTextListener(callback) {
  window.addEventListener('message', function (e) {
    // Text from augmented writing is received

    // Set origin to have target for response
    origin = e.origin;
    
    // Analysis should happen in the callback. Parent window calls the 100 Worte endpoint internally
    callback(e.data.text);
  });
};