var util;
(function (util) {
    var GameUtils = /** @class */ (function () {
        function GameUtils() {
        }
        Object.defineProperty(GameUtils, "posOffset", {
            /**
             * 获取位置偏移量
             */
            get: function () {
                var width = 0;
                //获得屏幕的长宽比
                var bi = Laya.stage.width / Laya.stage.height;
                if (bi < 1.777778) {
                    width = this.minGap;
                }
                else if (bi > 2.165333) {
                    width = this.maxGap;
                }
                else {
                    width = (bi - 1.777778) * (this.maxGap - this.minGap) / (2.165333 - 1.777778) + this.minGap;
                }
                return width;
            },
            enumerable: true,
            configurable: true
        });
        /**
     * 获取不同手机端分辨率的位置偏移量(后续将废弃posOffset)
     * @param min
     * @param max
     */
        GameUtils.getScreencOffset = function (min, max) {
            var width = 0;
            //获得屏幕的长宽比
            var scl = Laya.stage.width / Laya.stage.height;
            var minScl = 1.778666;
            var maxScl = 2.165333;
            if (scl <= minScl) {
                width = min;
            }
            else if (scl >= maxScl) {
                width = max;
            }
            else {
                width = (scl - minScl) * (max - min) / (maxScl - minScl) + min;
            }
            return width;
        };
        //最小和最大间隔(用于需要全屏适配的ui)
        GameUtils.minGap = 28;
        GameUtils.maxGap = 78;
        return GameUtils;
    }());
    util.GameUtils = GameUtils;
})(util || (util = {}));
//# sourceMappingURL=GameUtils.js.map