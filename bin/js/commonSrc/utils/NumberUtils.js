var util;
(function (util) {
    /** 数字工具  */
    var NumberUtils = /** @class */ (function () {
        function NumberUtils() {
        }
        /**
         * 获得范围内随机数
         * @param Min  最小值
         * @param Max  最大值
         */
        NumberUtils.getRandomNum = function (min, max) {
            var range = max - min;
            var rand = Math.random();
            return (min + Math.round(rand * range));
        };
        return NumberUtils;
    }());
    util.NumberUtils = NumberUtils;
})(util || (util = {}));
//# sourceMappingURL=NumberUtils.js.map