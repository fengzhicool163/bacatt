module lobby.component{

    /** 游戏房间牌桌列表页面盒子 */
    export class LobbyTabelPageBox extends common.component.UIBox{

        public bindObj : ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;

        protected barPool : util.PoolView;

        protected curShowTableBar : Array<LobbyTableBarBox>;

        protected initComponents() {
            //牌桌条缓存池
            this.barPool = new util.PoolView(LobbyTableBarBox,ui.lobbyUI.Boxs.LobbyTableBarBoxUI,4,4);
            //牌桌条
            this.curShowTableBar = [];
        }

        /** 重置页面回收牌桌条 */
        public resetBox() {
            for (let index = 0; index < this.curShowTableBar.length; index++) {
                const bar = this.curShowTableBar[index];
                bar.clearBox();
                this.barPool.recover(bar);
            }
            this.curShowTableBar.length = 0;
        }

        /** 重置页面并隐藏 */
        public clearBox() {
            this.resetBox();
            this.bindObj.visible = false;
        }

        /** 销毁页面 */
        public destroy(){
            this.clearBox();
            this.barPool.destroy();
            super.destroy();
        }

        /**
         * 设置页面数据
         * @param roomData 
         */
        public setData( roomData : net.protocol.lobby.RoomDataBean ) {
            //重置
            this.resetBox();
            //生成牌桌条
            for (let index = 0; index < roomData.tables.length; index++) {
                const tableData = roomData.tables[index];
                const tableBar = this.barPool.getComponent();// as LobbyTableBarBox;
                tableBar.setData(tableData);
                this.bindObj.barNode.addChild(tableBar.bindObj);
                tableBar.bindObj.y = index * 155;
                this.curShowTableBar.push(tableBar);
            }
            //刷新页面大小
            this.bindObj.barNode.width = 900;
            this.bindObj.barNode.height = roomData.tables.length * 155;
        }
        
    }
}