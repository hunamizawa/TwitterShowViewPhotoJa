//delete console.log
$(document).ready(function () {
    //chrome.runtime.sendMessage({ name: "ready" });
    Show();
    var observer = new MutationObserver(function () { return Show(); });
    observer.observe(document.getElementById("stream-items-id"), { childList: true });
});
function Show() {
    $("div[data-has-native-media=true]").map(function () {
        var obj = $(this);
        if (obj.find(".details").length == 0) {
            return obj;
        }
    }).each(function () {
        var path = this.attr("data-permalink-path");
        this.find(".stream-item-footer")
            .prepend('<a class="details with-icn js-details" href="' + path + '"><span class="Icon Icon--summary"></span><b><span class="expand-stream-item js-view-details">写真を表示</span><span class="collapse-stream-item js-hide-details">写真を隠す</span></b></a>');
    });
}
