
module trend.component {

    export abstract class GameTrendItemBase extends common.component.UIComponent {

        public bindObj : any;

        /**
         * 刷新显示的数据
         */
        public data: any;

        /**
         * 当前所在列
         */
        public col: number;

        /**
         * 当前所在行
         */
        public row: number;

        /**
         * 当前所属列
         */
        public belongCol: number;


        protected initComponents() {
           
        }

        public pos(point : Laya.Point){
            this.bindObj.x = point.x;
            this.bindObj.y = point.y;
        }

        /**
         * 设置行列与坐标
         * @param col 
         * @param row 
         */
        public setRowCol(col: number, row: number, point: Laya.Point) {
            this.col = col;
            this.row = row;
            this.pos( point );
            this.bindObj.visible = true;
        }

        /**
         * 刷新Item默认显示 例如 庄闲
         * @param data 用于刷新显示的数据
         */
        public setItemView(data: trend.TrendItemType) {
            this.data = data;
        }

        /**
         * 刷新Item特殊显示 例如 和
         * @param data 
         */
        public setItemSpecial(data?: any) {

        }

        /**
        * 显示触底提示 
        */
        public abstract showTouchButtom();


        public clear() {
            this.data = null;
            this.col = -1;
            this.row = -1;
            this.bindObj.visible = false;
        }
    }
}
