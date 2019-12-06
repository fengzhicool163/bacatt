var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lobby;
(function (lobby) {
    var component;
    (function (component) {
        var BaccaratStatisticsBox = /** @class */ (function (_super) {
            __extends(BaccaratStatisticsBox, _super);
            function BaccaratStatisticsBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // @property(cc.Label)
                // heCountLabel: cc.Label = null;          // 和局数
                // @property(cc.Label)
                // zhuangDuiCountLabel: cc.Label = null;   // 庄对局数
                // @property(cc.Label)
                // xianDuiCountLabel: cc.Label = null;     // 闲对局数
                // @property(cc.Label)
                // bigDianCountLabel: cc.Label = null;     // 8/9局数
                _this.heCount = 0; // 和局数
                _this.zhuangDuiCount = 0; // 庄对局数
                _this.xianDuiCount = 0; // 闲对局数
                _this.bigDianCount = 0; // 8/9局数
                return _this;
            }
            BaccaratStatisticsBox.prototype.initComponents = function () {
                throw new Error("Method not implemented.");
            };
            BaccaratStatisticsBox.prototype.updateView = function () {
                _super.prototype.updateView.call(this);
                // this.heCountLabel.string = this.heCount.toString();
                // this.zhuangDuiCountLabel.string = this.zhuangDuiCount.toString();
                // this.xianDuiCountLabel.string = this.xianDuiCount.toString();
                // this.bigDianCountLabel.string = this.bigDianCount.toString();
            };
            BaccaratStatisticsBox.prototype.getHitType = function (award) {
                var hit = award.hit;
                if (hit.b_mix > 0) {
                    return 0;
                }
                else if (hit.b_dealer_pair > 0 && hit.b_dealer) {
                    return 3;
                }
                else if (hit.b_player_pair > 0 && hit.b_player) {
                    return 4;
                }
                else if (hit.b_dealer > 0) {
                    return 1;
                }
                else if (hit.b_player > 0) {
                    return 2;
                }
                return -1;
            };
            BaccaratStatisticsBox.prototype.addItemData = function (award) {
                var hit = award.hit;
                if (hit.b_mix > 0) {
                    this.heCount++; // 和局数
                }
                if (hit.b_dealer_pair > 0) {
                    this.zhuangDuiCount++; // 庄对局数
                }
                if (hit.b_player_pair > 0) {
                    this.xianDuiCount++; // 庄对局数
                }
                if (hit.b_dealer > 0) {
                    this.zhuangCount++; // 庄对局数
                }
                if (hit.b_player > 0) {
                    this.xianCount++; // 庄对局数
                }
                this.betCount++;
                this.updateView();
            };
            BaccaratStatisticsBox.prototype.clear = function () {
                this.heCount = 0; // 和局数
                this.zhuangDuiCount = 0; // 庄对局数
                this.xianDuiCount = 0; // 闲对局数
                this.bigDianCount = 0; // 8/9局数
                _super.prototype.clear.call(this);
            };
            return BaccaratStatisticsBox;
        }(trend.component.GameStatisticsBox));
        component.BaccaratStatisticsBox = BaccaratStatisticsBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=BaccaratStatisticsBox.js.map