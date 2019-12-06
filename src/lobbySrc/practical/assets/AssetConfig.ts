module lobby.asset {

    /** 资源实际加载配置 */
    export class AssetConfig extends AssetConfigBase {

        /** 游戏大厅资源列表 */
        public static readonly LobbyPanel: string[] = [
            //图集
            AssetConfigBase.LobbyAtlasPath + "common.atlas",
            AssetConfigBase.LobbyAtlasPath + "lobbyPanel.atlas",
            AssetConfigBase.LobbyAtlasPath + "lobbyRoomList.atlas",
            //
            "res/atlas/trendRes.atlas",
            //没打包 BG
            //AssetConfigBase.LobbyAssetsDir + "/lobbyBG/bg_sangong_fangjian.png",
        ];

        /** 游戏战绩界面资源 */
        public static GameHistoryPanel: string[] = [
            //图集
            AssetConfigBase.LobbyAtlasPath + "common.atlas",
            AssetConfigBase.LobbyAtlasPath + "gameHistory.atlas",
            //没打包
            AssetConfigBase.LobbyAssetsDir + "/gameHistory/history_title.png",
        ];

        /** 游戏规则界面资源 */
        public static readonly GameRulePanel: string[] = [
            //图集
            AssetConfigBase.LobbyAtlasPath + "common.atlas",
            AssetConfigBase.LobbyAtlasPath + "gameRule.atlas",
            //没打包
            AssetConfigBase.LobbyAssetsDir + "/gameRule/img_baijiale_guize_bupai.png",
        ];

        /** 游戏设置界面资源 */
        public static GameSettingPanel: string[] = [
            //图集
            AssetConfigBase.LobbyAtlasPath + "common.atlas",
            AssetConfigBase.LobbyAtlasPath + "gameSetting.atlas",
        ];

        
    }

}