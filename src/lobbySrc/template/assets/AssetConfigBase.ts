module lobby.asset {

    /** 资源加载模板配置 */
    export class AssetConfigBase {

        /** 大厅资源目录 */
        public static readonly LobbyAssetsDir = "lobbyRes";

        /** 大厅界面资源目录 */
        public static readonly LobbyPanelDir = "lobbyPanel";

        /** 大厅界面资源目录路径 */
        public static readonly LobbyPanelAssetsPath = AssetConfigBase.LobbyAssetsDir + "/" + AssetConfigBase.LobbyPanelDir + "/";

        /** 大厅资源图集目录路径 */
        public static readonly LobbyAtlasPath = "res/atlas/" + AssetConfigBase.LobbyAssetsDir + "/";

        /** 头像资源地址 */
        public static GetHeadAsset(avatar: string) {
            var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
            var url = this.LobbyPanelAssetsPath + "room_img_touxiang_" + newavatar + ".jpg";
            return url;
        }

        /************************************************ 资源路径配置表 *******************************************/

        public static readonly MatchPanel = [
            AssetConfigBase.LobbyPanelAssetsPath + "anim/zzpp.png",
            AssetConfigBase.LobbyPanelAssetsPath + "anim/zzpp.sk"
        ];

        public static readonly playerMoneyCommonFont = {
            "0": AssetConfigBase.LobbyPanelAssetsPath + "gtxt01.png",
            "1": AssetConfigBase.LobbyPanelAssetsPath + "gtxt02.png",
            "2": AssetConfigBase.LobbyPanelAssetsPath + "gtxt03.png",
            "3": AssetConfigBase.LobbyPanelAssetsPath + "gtxt04.png",
            "4": AssetConfigBase.LobbyPanelAssetsPath + "gtxt05.png",
            "5": AssetConfigBase.LobbyPanelAssetsPath + "gtxt06.png",
            "6": AssetConfigBase.LobbyPanelAssetsPath + "gtxt07.png",
            "7": AssetConfigBase.LobbyPanelAssetsPath + "gtxt08.png",
            "8": AssetConfigBase.LobbyPanelAssetsPath + "gtxt09.png",
            "9": AssetConfigBase.LobbyPanelAssetsPath + "gtxt10.png",
            ".": AssetConfigBase.LobbyPanelAssetsPath + "gtxt11.png",
            ",": AssetConfigBase.LobbyPanelAssetsPath + "gtxt12.png",
            "万": AssetConfigBase.LobbyPanelAssetsPath + "gtxt13.png"
        };
        
    }

}