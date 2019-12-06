module lobby.component {

    export class BaccaratStatisticsBox extends trend.component.GameStatisticsBox {
        protected initComponents() {
            throw new Error("Method not implemented.");
        }

        // @property(cc.Label)
        // heCountLabel: cc.Label = null;          // 和局数

        // @property(cc.Label)
        // zhuangDuiCountLabel: cc.Label = null;   // 庄对局数

        // @property(cc.Label)
        // xianDuiCountLabel: cc.Label = null;     // 闲对局数

        // @property(cc.Label)
        // bigDianCountLabel: cc.Label = null;     // 8/9局数

        heCount = 0;          // 和局数
        zhuangDuiCount = 0;   // 庄对局数
        xianDuiCount = 0;     // 闲对局数
        bigDianCount = 0;     // 8/9局数

        protected updateView() {
            super.updateView();
            // this.heCountLabel.string = this.heCount.toString();
            // this.zhuangDuiCountLabel.string = this.zhuangDuiCount.toString();
            // this.xianDuiCountLabel.string = this.xianDuiCount.toString();
            // this.bigDianCountLabel.string = this.bigDianCount.toString();
        }

        protected getHitType(award: any) {
            var hit = award.hit;
            if (hit.b_mix > 0) {
                return 0;
            } else if (hit.b_dealer_pair > 0 && hit.b_dealer) {
                return 3;
            } else if (hit.b_player_pair > 0 && hit.b_player) {
                return 4;
            } else if (hit.b_dealer > 0) {
                return 1;
            } else if (hit.b_player > 0) {
                return 2;
            }
            return -1;
        }

        public addItemData(award: any) {
            var hit = award.hit;
            if (hit.b_mix > 0) {
                this.heCount++;          // 和局数
            }
            if (hit.b_dealer_pair > 0) {
                this.zhuangDuiCount++;   // 庄对局数
            }
            if (hit.b_player_pair > 0) {
                this.xianDuiCount++;   // 庄对局数
            }
            if (hit.b_dealer > 0) {
                this.zhuangCount++;   // 庄对局数
            }
            if (hit.b_player > 0) {
                this.xianCount++;   // 庄对局数
            }
            this.betCount++;
            this.updateView();
        }

        public clear() {
            this.heCount = 0;          // 和局数
            this.zhuangDuiCount = 0;   // 庄对局数
            this.xianDuiCount = 0;     // 闲对局数
            this.bigDianCount = 0;     // 8/9局数
            super.clear();
        }
    }
}
