﻿'use strict';
//delete console.log

$(document).ready(() => {
    //chrome.runtime.sendMessage({ name: "ready" });

    Show();

    var observer = new MutationObserver(() => Show());
    observer.observe(document.getElementById("stream-items-id"), { childList: true });
});

function Show() {
    //console.log("Show called");
    $("div[data-has-native-media=true]").map(function () {
        var obj = $(this);
        if (obj.find(".details").length == 0) {
            return obj;
        }
    }).each(function () {
        var path = this.attr("data-permalink-path");
        this.find(".stream-item-footer")
            .prepend('<a class="details with-icn js-details" href="' + path + '"><span class="Icon Icon--summary"></span><b><span class="expand-stream-item js-view-details">画像を表示する</span><span class="collapse-stream-item js-hide-details">画像を非表示にする</span></b></a>');
    });
}