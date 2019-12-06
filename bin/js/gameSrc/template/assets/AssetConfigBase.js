var game;
(function (game) {
    var asset;
    (function (asset) {
        /** 资源加载模板配置 */
        var AssetConfigBase = /** @class */ (function () {
            function AssetConfigBase() {
            }
            /** 头像资源地址 */
            AssetConfigBase.GetHeadAsset = function (avatar) {
                var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
                var url = this.GamePanelAssetsPath + "room_img_touxiang_" + newavatar + ".jpg";
                return url;
            };
            /** 游戏资源目录 */
            AssetConfigBase.GameAssetsDir = "gameRes";
            /** 游戏界面资源目录 */
            AssetConfigBase.GamePanelDir = "lobbyPanel";
            /** 游戏界面资源目录路径 */
            AssetConfigBase.GamePanelAssetsPath = AssetConfigBase.GameAssetsDir + "/" + AssetConfigBase.GamePanelDir + "/";
            /** 游戏资源图集目录路径 */
            AssetConfigBase.GameAtlasPath = "res/atlas/" + AssetConfigBase.GameAssetsDir + "/";
            /************************************************ 资源路径配置表 *******************************************/
            /** 大路途 和牌 位图文字 */
            AssetConfigBase.heFont = {
                "1": AssetConfigBase.GameAssetsDir + "/roomList/img_baijiale_litu_1.png",
                "2": AssetConfigBase.GameAssetsDir + "/roomList/img_baijiale_litu_2.png",
                "3": AssetConfigBase.GameAssetsDir + "/roomList/img_baijiale_litu_3.png",
            };
            return AssetConfigBase;
        }());
        asset.AssetConfigBase = AssetConfigBase;
    })(asset = game.asset || (game.asset = {}));
})(game || (game = {}));
//# sourceMappingURL=AssetConfigBase.js.map