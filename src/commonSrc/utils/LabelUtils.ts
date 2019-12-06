

module util{
    export class LabelUtils{

        protected static getAdaptationScale(sprite : Laya.Sprite , limitWith : number){
            var scaleValue = 1;
            if(sprite.width > limitWith) {
                scaleValue = limitWith / sprite.width;
            }
            return scaleValue;
        }
        /**
         * 适配Sprite大小
         * @param fontCilp 
         * @param limitWith 宽度限制
         */
        public static setAdaptation(sprite : Laya.Sprite , limitWith : number ){
            var scaleValue = this.getAdaptationScale(sprite,limitWith);
            sprite.scale(scaleValue,scaleValue);
            return scaleValue;
        }

        /**
         * 适配多个Sprite大小,取最小的显示
         * @param fontCilps 
         * @param limitWith 宽度限制
         */
        public static setAdaptationList(sprites : Laya.Sprite[] , limitWith : number ){
            var scaleValue = 1;
            for (let index = 0; index < sprites.length; index++) {
                const fontCilp = sprites[index];
                scaleValue = Math.min(scaleValue,this.getAdaptationScale(fontCilp,limitWith));
            }
            for (let index = 0; index < sprites.length; index++) {
                const fontCilp = sprites[index];
                fontCilp.scale(scaleValue,scaleValue);
            }
        }
    }
}