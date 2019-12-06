


module lobby.font {
    /*
    * lobby.font.playerMoneyCommonFont
    *注意：素材要保持高度一致
    *要设置了text后才能正常获取宽和高
    */
    export class playerMoneyCommonFont extends common.font.BitmapFont {
        
        constructor() {
            super(asset.AssetConfig.playerMoneyCommonFont);
        }

    }
}