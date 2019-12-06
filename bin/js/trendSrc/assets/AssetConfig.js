var trend;
(function (trend) {
    var asset;
    (function (asset) {
        /** 资源实际加载配置 */
        var AssetConfig = /** @class */ (function () {
            function AssetConfig() {
            }
            /** 游戏资源目录 */
            AssetConfig.TrendAssetsDir = "trendRes";
            /** 游戏资源图集目录路径 */
            AssetConfig.TrendAtlasPath = "res/atlas/" + AssetConfig.TrendAssetsDir + "/";
            /************************************************ 资源路径配置表 *******************************************/
            /** 大路途 和牌 位图文字 */
            AssetConfig.heFont = {
                "1": AssetConfig.TrendAssetsDir + "/img_baijiale_litu_1.png",
                "2": AssetConfig.TrendAssetsDir + "/img_baijiale_litu_2.png",
                "3": AssetConfig.TrendAssetsDir + "/img_baijiale_litu_3.png",
            };
            return AssetConfig;
        }());
        asset.AssetConfig = AssetConfig;
    })(asset = trend.asset || (trend.asset = {}));
})(trend || (trend = {}));
//# sourceMappingURL=AssetConfig.js.map