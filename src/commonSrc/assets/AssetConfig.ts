module common.asset {

    /** 资源实际加载配置 */
    export class AssetConfig {

        /** 公用资源目录 */
        public static readonly CommonAssetsDir = "commonRes";

        /** 公用资源图集目录路径 */
        public static readonly CommonAtlasPath = "res/atlas/" + AssetConfig.CommonAssetsDir + "/";

        public static readonly CommonAtlasAssetPath = AssetConfig.CommonAtlasPath + "common.atlas";
        
        /** 消息弹窗列表 */
        public static readonly LoadingPanel = [
            //图集
            AssetConfig.CommonAtlasAssetPath,
        ]

        /** 消息弹窗列表 */
        public static readonly PopInfoPanel = [
            //图集
            AssetConfig.CommonAtlasAssetPath,
        ]

    }

}