/**
* name
*/
var ctrl;
(function (ctrl) {
    var UICtrl = /** @class */ (function () {
        function UICtrl() {
            this._ctrlID = 0;
            //监听事件ID
            this.eventID = 0;
            //事件Map
            this.eventMap = {};
            ++UICtrl.ctrlID;
            this._ctrlID = UICtrl.ctrlID;
        }
        UICtrl.prototype.getCurTime = function () {
            var date = new Date();
            var curTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            return curTime;
        };
        UICtrl.prototype.getEventID = function () {
            var eventID = this._ctrlID + "_" + (++this.eventID);
            return eventID;
        };
        /**
         * 注册对管理器的监听
         * @param eventName 事件
         * @param caller 	监听者caller
         * @param callBack  监听者callBack
         */
        UICtrl.prototype.addListener = function (eventName, caller, callBack) {
            if (callBack == null)
                return;
            var eventID = callBack.__eventID = callBack.__eventID ? callBack.__eventID : this.getEventID();
            this.eventMap[eventName] = this.eventMap[eventName] || {};
            this.eventMap[eventName][eventID] = this.eventMap[eventName][eventID] || {};
            this.eventMap[eventName][eventID] = { "c": caller, "f": callBack };
        };
        /**
         * 移除对管理器的监听
         * @param eventName
         * @param caller
         * @param callBack
         */
        UICtrl.prototype.removeListener = function (eventName, caller, callBack) {
            if (callBack == null || callBack.__eventID == null)
                return;
            if (this.eventMap[eventName]) {
                var events = this.eventMap[eventName];
                delete events[callBack.__eventID];
            }
            ;
        };
        /**
         * 管理器广播消息
         * @param eventName
         * @param args
         */
        UICtrl.prototype.broadcast = function (eventName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (this.eventMap[eventName]) {
                var events = this.eventMap[eventName];
                for (var eventID in events) {
                    var eventObj = events[eventID];
                    eventObj.f.apply(eventObj.c, args);
                }
            }
        };
        UICtrl.prototype.clearAllListener = function () {
            this.eventID = 0;
            this.eventMap = {};
        };
        //管理器ID
        UICtrl.ctrlID = 0;
        return UICtrl;
    }());
    ctrl.UICtrl = UICtrl;
})(ctrl || (ctrl = {}));
//# sourceMappingURL=UICtrl.js.map