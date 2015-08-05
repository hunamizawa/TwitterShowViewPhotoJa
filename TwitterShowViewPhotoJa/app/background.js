chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.name) {
        case 'ready':
            chrome.pageAction.show(sender.tab.id);
            break;
    }
});
