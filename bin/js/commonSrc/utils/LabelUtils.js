var util;
(function (util) {
    var LabelUtils = /** @class */ (function () {
        function LabelUtils() {
        }
        LabelUtils.getAdaptationScale = function (sprite, limitWith) {
            var scaleValue = 1;
            if (sprite.width > limitWith) {
                scaleValue = limitWith / sprite.width;
            }
            return scaleValue;
        };
        /**
         * 适配Sprite大小
         * @param fontCilp
         * @param limitWith 宽度限制
         */
        LabelUtils.setAdaptation = function (sprite, limitWith) {
            var scaleValue = this.getAdaptationScale(sprite, limitWith);
            sprite.scale(scaleValue, scaleValue);
            return scaleValue;
        };
        /**
         * 适配多个Sprite大小,取最小的显示
         * @param fontCilps
         * @param limitWith 宽度限制
         */
        LabelUtils.setAdaptationList = function (sprites, limitWith) {
            var scaleValue = 1;
            for (var index = 0; index < sprites.length; index++) {
                var fontCilp = sprites[index];
                scaleValue = Math.min(scaleValue, this.getAdaptationScale(fontCilp, limitWith));
            }
            for (var index = 0; index < sprites.length; index++) {
                var fontCilp = sprites[index];
                fontCilp.scale(scaleValue, scaleValue);
            }
        };
        return LabelUtils;
    }());
    util.LabelUtils = LabelUtils;
})(util || (util = {}));
//# sourceMappingURL=LabelUtils.js.map