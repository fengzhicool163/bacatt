
module trend.component {
    export abstract class GameStatisticsBox extends common.component.UIComponent {

        // @property(cc.Label)
        // betCountLabel: cc.Label;    //总局数

        // @property(cc.Label)
        // zhuangCountLabel: cc.Label;    //庄局数

        // @property(cc.Label)
        // xianCountLabel: cc.Label;    //闲局数

        //数据统计
        protected betCount = 0;
        protected zhuangCount = 0;
        protected xianCount = 0;

        protected updateView() {
            // this.betCountLabel.string = this.betCount.toString();
            // this.zhuangCountLabel.string = this.zhuangCount.toString();
            // this.xianCountLabel.string = this.xianCount.toString();
        }

        public addItemData(dataType: any) {
            this.betCount++;
            if (dataType == 1) {
                this.zhuangCount++;
            } else if (dataType == 2) {
                this.xianCount++;
            }
            this.updateView();
        }

        public clear() {
            this.betCount = 0;
            this.zhuangCount = 0;
            this.xianCount = 0;
            this.updateView();
        }
    }
}
