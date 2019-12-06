
module lobby.component {
	
	/** 游戏大厅牌桌条 */
	export class LobbyTableBarBox extends common.component.UIBox {
		
        public bindObj : ui.lobbyUI.Boxs.LobbyTableBarBoxUI;
        
        /** 牌桌大路图 */
        protected trendBox : LobbyTableTrendBox;

        protected data : net.protocol.lobby.TableDataBean;

        protected stateList : Array<net.protocol.lobby.TableStateConfigBean>;

        protected curCountDownNum : number;
        protected curStateName : string;

		public initComponents(){
            //大路途盒子
            this.trendBox = this.bindScript(LobbyTableTrendBox,this.bindObj.lobbyTableTrendBoxObj);
            //状态列表
            this.stateList = [];
        }
        
        /** 重置盒子清空大路图与状态队列 */
        public resetBox(){
            //
            this.data = null;
            //
            this.trendBox.clear();
            //
            Laya.timer.clear(this,this.updateState);
        }

        /** 销毁盒子清空大路图与状态队列 */
        public clearBox(){
            this.resetBox();
            this.bindObj.visible = false;

        }

        /** 销毁 */
        public destroy(){
            this.resetBox();
            super.destroy();
        }

        /** 更新状态文字 */
        protected updateCDText(){
            var curCountDown = Math.max(0,this.curCountDownNum);
            curCountDown = Math.floor(curCountDown);
            var str = this.curStateName + " " + curCountDown + this.data.tableinfo.status.timeName;
            this.bindObj.stateCDLabel.text = str;
        }

        /** 更新状态倒计时文字 */
        protected updateCountDown( changeValue : number ){
            this.curCountDownNum += changeValue;
        }

        /** 更新状态倒计时 */
        protected updateState(){
            this.updateCountDown(-0.5);
            this.updateCDText();
            if(this.curCountDownNum <= 0){
                this.nextState();
            }
        }

        /** 下一个状态显示 */
        protected nextState(){
            var curState = this.stateList.shift();
            this.stateList.push(curState);
            this.curStateName = curState.statusName;
            this.updateCountDown(curState.remainTime);
            this.updateCDText();
        }

        /** 开始状态队列 */
        protected startState( data : net.protocol.lobby.TableSateBean ){
            //倒计时刷新
            Laya.timer.loop(500,this,this.updateState);
            this.curCountDownNum = 0;
            /** 牌桌状态
                0: {statusName: "准备中", remainTime: 2, id: 1}
                1: {statusName: "下注中", remainTime: 15, id: 2}
                2: {statusName: "开牌中", remainTime: 3, id: 3}
                3: {statusName: "结算中", remainTime: 12, id: 4}
            */
            //重排序执行队列
            this.stateList.length = 0;
            var configs = [].concat(data.config);
            var curState : net.protocol.lobby.TableStateConfigBean;
            do{
                curState = configs.pop();
                this.stateList.unshift(curState);
                if(curState.id == data.id) {
                    curState.remainTime = data.remainTime;
                    curState.statusName = data.name;
                    break;
                }
            }while(configs.length > 0);
            //
            this.stateList = this.stateList.concat(configs);
            //开始循环播放状态
            this.nextState();
        }

        /**
         * 设置牌桌条数据
         * @param data 
         */
        public setData( data : net.protocol.lobby.TableDataBean ){
            //
            this.resetBox();
            this.data = data;
            //牌桌信息
            this.bindObj.tableName.text = data.tableinfo.name;
            this.bindObj.zhunRuLabel.text = data.tableinfo.betamount;
            this.bindObj.betLimitLabel.text = "";
            //棋盘
            this.trendBox.setItemDatas( data.originalList );
            //
            this.startState(data.tableinfo.status);
            //
            this.bindObj.visible = true;
        }

	}
}