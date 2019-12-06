module trend.asset {

    /** 资源实际加载配置 */
    export class AssetConfig {
        /** 游戏资源目录 */
        public static readonly TrendAssetsDir = "trendRes";


        /** 游戏资源图集目录路径 */
        public static readonly TrendAtlasPath = "res/atlas/" + AssetConfig.TrendAssetsDir + "/";

        /************************************************ 资源路径配置表 *******************************************/

        /** 大路途 和牌 位图文字 */
        public static readonly heFont = {
            "1": AssetConfig.TrendAssetsDir + "/img_baijiale_litu_1.png",
            "2": AssetConfig.TrendAssetsDir + "/img_baijiale_litu_2.png",
            "3": AssetConfig.TrendAssetsDir + "/img_baijiale_litu_3.png",
        };
        
    }

}