

module trend.component {
    export abstract class GameAskBox extends common.component.UIComponent {

        gameTrendChildBoxItems: GameTrendItemBase[] = [];

        protected setItemData(item: GameTrendItemBase, data: any) {
            if (data) {
                item.clear();
                item.setItemView(data);
                item.bindObj.visible = true;
            } else {
                item.bindObj.visible = false;
            }
        }

        public UpdateBoxView(askDatas: any) {
            for (let index = 0; index < this.gameTrendChildBoxItems.length; index++) {
                const item = this.gameTrendChildBoxItems[index];
                var askData = askDatas[index];
                this.setItemData(item, askData);
            }
        }

        public clear() {
            for (let index = 0; index < this.gameTrendChildBoxItems.length; index++) {
                const item = this.gameTrendChildBoxItems[index];
                item.bindObj.visible = false;
            }
        }


    }
}
