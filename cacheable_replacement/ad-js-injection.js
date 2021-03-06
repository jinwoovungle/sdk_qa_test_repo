//ad-js-injection.js file from cacheable replacement
// Legacy IEC v1 Event
window.callSDK = function(action) {
    parent.postMessage(action, '*');
};

// Legacy IEC v2 Event
window.actionClicked = function(action) {
    parent.postMessage(action, '*');
};

// Adwords Open Event
window.open = function() {
	//Open should always redirect to CTA Download
    parent.postMessage('download', '*');
};

window.addEventListener('touchstart', function() {
    parent.postMessage('interacted', '*');
});

// Disable Event Propagation for touchstart event listeners
Event.prototype.stopPropagation = function() {}