var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lobby;
(function (lobby) {
    var asset;
    (function (asset) {
        /** 资源实际加载配置 */
        var AssetConfig = /** @class */ (function (_super) {
            __extends(AssetConfig, _super);
            function AssetConfig() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 游戏大厅资源列表 */
            AssetConfig.LobbyPanel = [
                //图集
                asset.AssetConfigBase.LobbyAtlasPath + "common.atlas",
                asset.AssetConfigBase.LobbyAtlasPath + "lobbyPanel.atlas",
                asset.AssetConfigBase.LobbyAtlasPath + "lobbyRoomList.atlas",
                //
                "res/atlas/trendRes.atlas",
            ];
            /** 游戏战绩界面资源 */
            AssetConfig.GameHistoryPanel = [
                //图集
                asset.AssetConfigBase.LobbyAtlasPath + "common.atlas",
                asset.AssetConfigBase.LobbyAtlasPath + "gameHistory.atlas",
                //没打包
                asset.AssetConfigBase.LobbyAssetsDir + "/gameHistory/history_title.png",
            ];
            /** 游戏规则界面资源 */
            AssetConfig.GameRulePanel = [
                //图集
                asset.AssetConfigBase.LobbyAtlasPath + "common.atlas",
                asset.AssetConfigBase.LobbyAtlasPath + "gameRule.atlas",
                //没打包
                asset.AssetConfigBase.LobbyAssetsDir + "/gameRule/img_baijiale_guize_bupai.png",
            ];
            /** 游戏设置界面资源 */
            AssetConfig.GameSettingPanel = [
                //图集
                asset.AssetConfigBase.LobbyAtlasPath + "common.atlas",
                asset.AssetConfigBase.LobbyAtlasPath + "gameSetting.atlas",
            ];
            return AssetConfig;
        }(asset.AssetConfigBase));
        asset.AssetConfig = AssetConfig;
    })(asset = lobby.asset || (lobby.asset = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=AssetConfig.js.map