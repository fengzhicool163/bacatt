module game.asset {

    /** 资源加载模板配置 */
    export class AssetConfigBase {

        /** 游戏资源目录 */
        public static readonly GameAssetsDir = "gameRes";

        /** 游戏界面资源目录 */
        public static readonly GamePanelDir = "lobbyPanel";

        /** 游戏界面资源目录路径 */
        public static readonly GamePanelAssetsPath = AssetConfigBase.GameAssetsDir + "/" + AssetConfigBase.GamePanelDir + "/";

        /** 游戏资源图集目录路径 */
        public static readonly GameAtlasPath = "res/atlas/" + AssetConfigBase.GameAssetsDir + "/";

        /** 头像资源地址 */
        public static GetHeadAsset(avatar: string) {
            var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
            var url = this.GamePanelAssetsPath + "room_img_touxiang_" + newavatar + ".jpg";
            return url;
        }

        /************************************************ 资源路径配置表 *******************************************/

        /** 大路途 和牌 位图文字 */
        public static readonly heFont = {
            "1": AssetConfigBase.GameAssetsDir + "/roomList/img_baijiale_litu_1.png",
            "2": AssetConfigBase.GameAssetsDir + "/roomList/img_baijiale_litu_2.png",
            "3": AssetConfigBase.GameAssetsDir + "/roomList/img_baijiale_litu_3.png",
        };
        
    }

}