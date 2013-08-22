// 親からのメッセージイベントへのハンドラを設定
self.onmessage = function (e) {
    // 親から送られて来た命令を取得
    var command = e.data;
    if (command == "start") {
        self.postMessage("hogehogehoge");
    }
};