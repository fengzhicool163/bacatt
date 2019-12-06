

module util{

    export class GameUtils {
        //最小和最大间隔(用于需要全屏适配的ui)
        public static minGap: number = 28;
        public static maxGap: number = 78;

        /**
         * 获取位置偏移量
         */
        public static get posOffset(): number {
            var width: number = 0;
            //获得屏幕的长宽比
            var bi = Laya.stage.width / Laya.stage.height;
            if (bi < 1.777778) {
                width = this.minGap;
            }
            else if (bi > 2.165333) {
                width = this.maxGap;
            }
            else {
                width = (bi - 1.777778) * (this.maxGap - this.minGap) / (2.165333 - 1.777778) + this.minGap;
            }
            return width;
        }

            /**
         * 获取不同手机端分辨率的位置偏移量(后续将废弃posOffset)
         * @param min 
         * @param max 
         */
        public static getScreencOffset(min: number, max: number): number {
            var width: number = 0;
            //获得屏幕的长宽比
            var scl = Laya.stage.width / Laya.stage.height;
            let minScl = 1.778666;
            let maxScl = 2.165333;
            if (scl <= minScl) {
                width = min;
            }
            else if (scl >= maxScl) {
                width = max;
            }
            else {
                width = (scl - minScl) * (max - min) / (maxScl - minScl) + min;
            }
            return width;
        }
    }
}