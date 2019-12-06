
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.commonUI.Boxs {
    export class MarqueeBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public noticeGroup:Laya.Image;
		public noticeSp:Laya.Sprite;
		public msgTxt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":580,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":580,"var":"noticeGroup","skin":"commonRes/common/img_dating_gonggaodi.png","height":69},"compId":2,"child":[{"type":"Sprite","props":{"y":14,"x":110,"width":400,"var":"noticeSp","height":40},"child":[{"type":"Label","props":{"y":0,"x":0,"width":155,"var":"msgTxt","valign":"middle","text":"111","staticCache":true,"height":40,"fontSize":26,"color":"#efe8cd","cacheAs":"normal","align":"left"}}]}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Boxs.MarqueeBoxUI.uiView);

        }

    }
}

module ui.commonUI.Components {
    export class HSliderPlusUI extends View {
		public bgFrame:Laya.Image;
		public sliderBar:Laya.Image;
		public ctrlPoint:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":336,"height":33},"child":[{"type":"Image","props":{"y":17,"x":168,"var":"bgFrame","centerY":0,"centerX":0}},{"type":"Image","props":{"y":17,"x":0,"width":0,"var":"sliderBar","sizeGrid":"0,6,0,6","left":0,"centerY":0}},{"type":"Image","props":{"y":17,"x":0,"var":"ctrlPoint","centerY":0,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Components.HSliderPlusUI.uiView);

        }

    }
}

module ui.commonUI.Panels {
    export class LoadingPanelUI extends Laya.UIPanel {
		public loadingAnim:Laya.FrameAnimation;
		public bgMask:Laya.Image;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"var":"bgMask","top":0,"skin":"commonRes/common/black_mask.png","right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"y":375,"x":667,"skin":"commonRes/common/local_Loading.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":24}]}}],"name":"loadingAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Panels.LoadingPanelUI.uiView);

        }

    }
}

module ui.commonUI.Panels {
    export class PopInfoPanelUI extends Laya.UIPanel {
		public background:Laya.Image;
		public closeBtn:Laya.Image;
		public confirmBtn:Laya.Image;
		public confirmBtn1:Laya.Image;
		public cancelBtn:Laya.Image;
		public contentLabel:Laya.Label;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1625,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"commonRes/common/mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":752,"skin":"commonRes/common/img_zhajinhua_xiaokuang.png","height":469,"centerY":-15,"centerX":0},"child":[{"type":"Image","props":{"y":50,"x":703,"var":"closeBtn","skin":"commonRes/common/img_zhajinhua_guanbi.png","name":"closeBtn","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":5,"x":301,"skin":"commonRes/common/img_sangong_zi_tips.png"}},{"type":"Image","props":{"y":95,"x":14,"width":725,"skin":"commonRes/common/img_zjh_wenzidi.png","sizeGrid":"20,20,20,20","height":270}},{"type":"Image","props":{"y":415,"x":165,"var":"confirmBtn","skin":"commonRes/common/btn_zjh_queren.png","pivotY":34,"pivotX":95.5,"name":"confirmBtn"}},{"type":"Image","props":{"y":415,"var":"confirmBtn1","skin":"commonRes/common/btn_zjh_queren.png","pivotY":34,"pivotX":95.5,"name":"confirmBtn1","centerX":0}},{"type":"Image","props":{"y":415,"x":585,"var":"cancelBtn","skin":"commonRes/common/btn_zjh_quxiao.png","pivotY":34,"pivotX":95.5,"name":"cancelBtn"}},{"type":"Label","props":{"y":138,"x":63,"wordWrap":true,"width":625,"var":"contentLabel","valign":"middle","name":"contentLabel","height":200,"fontSize":28,"color":"#9cc5d8","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Panels.PopInfoPanelUI.uiView);

        }

    }
}

module ui.commonUI {
    export class UIManagerUI extends Laya.UIPanel {
		public uiNode:Laya.Box;
		public popNode:Laya.Box;
		public maskNode:Laya.Box;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"top":0,"right":0,"left":0,"height":750,"bottom":0},"child":[{"type":"Box","props":{"var":"uiNode","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Box","props":{"var":"popNode","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Box","props":{"var":"maskNode","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.UIManagerUI.uiView);

        }

    }
}

module ui.gameTrend.Boxs {
    export class LobbyTableTrendBoxUI extends View {
		public itemListNode:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":711,"height":116},"child":[{"type":"Image","props":{"var":"itemListNode","staticCache":true,"skin":"trendRes/img_com_fangjian_tiao_gezi.png","cacheAsBitmap":true,"cacheAs":"bitmap"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameTrend.Boxs.LobbyTableTrendBoxUI.uiView);

        }

    }
}

module ui.gameTrend.Items {
    export class LobbyTableTrendItemUI extends View {
		public type1:Laya.Image;
		public type2:Laya.Image;
		public type0:trend.font.heFont;
		public touchButtomIcon:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":16,"height":16},"child":[{"type":"Image","props":{"y":8,"x":8,"width":13,"var":"type1","skin":"trendRes/img_baijiale_litu_hongdian1.png","height":13,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":8,"width":13,"var":"type2","skin":"trendRes/img_baijiale_litu_landian1.png","height":13,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":22,"var":"type0","scaleY":0.6,"scaleX":0.6,"runtime":"trend.font.heFont","height":22,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":16,"var":"touchButtomIcon","height":2,"bottom":-2},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":16,"lineWidth":1,"height":2,"fillColor":"#00ff00"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("trend.font.heFont",trend.font.heFont);

            super.createChildren();
            this.createView(ui.gameTrend.Items.LobbyTableTrendItemUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyBtnBarBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public historyBtn:Laya.Image;
		public ruleBtn:Laya.Image;
		public settingBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":200},"child":[{"type":"Image","props":{"y":139,"x":0,"visible":true,"name":"buttons"},"compId":2,"child":[{"type":"Image","props":{"y":13,"x":164,"var":"historyBtn","skin":"lobbyRes/lobbyPanel/btn_baijiale_zhanji.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":301,"var":"ruleBtn","skin":"lobbyRes/lobbyPanel/btn_baijiale_guize.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":435,"var":"settingBtn","skin":"lobbyRes/lobbyPanel/btn_baijiale_shezhi.png","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":202,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":139,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.LobbyBtnBarBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyRoomBoxUI extends View {
		public checkGroupObj:Laya.Box;
		public lobbyTabelPageBoxObj0:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;
		public lobbyTabelPageBoxObj1:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;
		public lobbyTabelPageBoxObj2:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;
		public lobbyTabelPageBoxObj3:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;

        public static  uiView:any ={"type":"View","props":{"width":908,"height":514},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"lobbyRes/lobbyRoomList/btn_com_fangjian_biaoge_hx524.png"}},{"type":"Box","props":{"y":4,"x":2,"var":"checkGroupObj","mouseEnabled":true},"child":[{"type":"CheckBox","props":{"y":0,"x":1,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu1.png","selected":true}},{"type":"CheckBox","props":{"y":0,"x":227,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu2.png","selected":false}},{"type":"CheckBox","props":{"y":0,"x":452,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu3.png","selected":false}},{"type":"CheckBox","props":{"y":0,"x":677,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu4.png","selected":false}}]},{"type":"LobbyTabelPageBox","props":{"y":93,"x":4,"width":900,"var":"lobbyTabelPageBoxObj0","height":395,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}},{"type":"LobbyTabelPageBox","props":{"y":93,"x":4,"width":900,"var":"lobbyTabelPageBoxObj1","height":395,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}},{"type":"LobbyTabelPageBox","props":{"y":93,"x":4,"width":900,"var":"lobbyTabelPageBoxObj2","height":395,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}},{"type":"LobbyTabelPageBox","props":{"y":93,"x":4,"width":900,"var":"lobbyTabelPageBoxObj3","height":395,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.lobbyUI.Boxs.LobbyTabelPageBoxUI",ui.lobbyUI.Boxs.LobbyTabelPageBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.LobbyRoomBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyTabelPageBoxUI extends Laya.Panel {
		public barNode:Laya.Box;

        public static  uiView:any ={"type":"Panel","props":{"y":0,"x":0,"width":900,"vScrollBarSkin":"lobbyRes/lobbyRoomList/mask.png","height":395},"child":[{"type":"Box","props":{"y":0,"x":0,"width":900,"var":"barNode"}}]};
        constructor(){ super();this.createUI(ui.lobbyUI.Boxs.LobbyTabelPageBoxUI.uiView);}
        createUI(uiData:any):void {
        
            laya.utils.ClassUtils.createByJson(uiData, this, this);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyTableBarBoxUI extends View {
		public lobbyTableTrendBoxObj:ui.gameTrend.Boxs.LobbyTableTrendBoxUI;
		public btnEnterRoom:Laya.Image;
		public tableName:Laya.Label;
		public zhunRuLabel:Laya.Label;
		public betLimitLabel:Laya.Label;
		public stateCDLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":900,"height":155},"child":[{"type":"Box","props":{"y":0,"x":0,"width":900,"height":155,"cacheAs":"normal"},"child":[{"type":"LobbyTableTrendBox","props":{"y":31,"x":25,"var":"lobbyTableTrendBoxObj","runtime":"ui.gameTrend.Boxs.LobbyTableTrendBoxUI"}},{"type":"Image","props":{"y":87,"x":808,"var":"btnEnterRoom","skin":"lobbyRes/lobbyPanel/btn_com_fangjian_jingru.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":3,"x":29,"var":"tableName","text":"A 001","left":29,"fontSize":24,"font":"Microsoft YaHei","color":"#2afcff","align":"left"}},{"type":"Label","props":{"y":3,"x":278,"var":"zhunRuLabel","text":"准入:1000","left":278,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":3,"x":561,"var":"betLimitLabel","valign":"bottom","text":"押注限额 : 1000","left":561,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}}]},{"type":"Label","props":{"y":3,"x":747,"var":"stateCDLabel","valign":"bottom","text":"下注中 12S","left":747,"fontSize":20,"font":"Microsoft YaHei","color":"#fcd367","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameTrend.Boxs.LobbyTableTrendBoxUI",ui.gameTrend.Boxs.LobbyTableTrendBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.LobbyTableBarBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class MainPlayerInfoBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public frameNode:Laya.Image;
		public header:Laya.Image;
		public headFrame:Laya.Image;
		public nameLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":681,"height":107},"child":[{"type":"Box","props":{"y":0,"x":0,"width":681,"staticCache":true,"sizeGrid":"48,534,23,20","height":107,"cacheAsBitmap":false,"cacheAs":"normal","alpha":1},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"width":681,"var":"frameNode","skin":"lobbyRes/lobbyPanel/img_touxaingdi.png","sizeGrid":"48,534,23,20","height":107,"cacheAsBitmap":false,"cacheAs":"normal","alpha":1},"child":[{"type":"Image","props":{"y":10,"x":280,"skin":"lobbyRes/lobbyPanel/img_dating_zhanghaozi.png"}},{"type":"Image","props":{"y":8,"x":172,"width":90,"var":"header","skin":"lobbyRes/lobbyPanel/room_img_touxiang_01.jpg","height":90}},{"type":"Image","props":{"y":3,"x":167,"width":100,"var":"headFrame","skin":"lobbyRes/lobbyPanel/avatorFrame.png","scaleY":1,"scaleX":1,"height":100}},{"type":"Label","props":{"y":58,"x":286,"width":234,"var":"nameLabel","fontSize":26,"color":"#ffe996","align":"left"}}]},{"type":"SkeletonPlayer","props":{"y":58,"x":350,"url":"lobbyRes/anim/liangguang.sk","name":"liangguang"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-100,"tweenMethod":"circOut","tween":true,"target":2,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.MainPlayerInfoBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class MainPlayerWalletBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public frameNode:Laya.Image;
		public rechargeBtn:Laya.Image;
		public moneyLabel:lobby.font.playerMoneyCommonFont;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":335,"height":76},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":1},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"frameNode","skin":"lobbyRes/lobbyPanel/img_dating_qian_di.png","alpha":1},"child":[{"type":"Image","props":{"y":47,"x":312,"var":"rechargeBtn","skin":"lobbyRes/lobbyPanel/btn_dating_zengjia.png","pivotY":35.5,"pivotX":35.5}},{"type":"Box","props":{"y":20,"x":70,"var":"moneyLabel","runtime":"lobby.font.playerMoneyCommonFont","height":40}}]},{"type":"SkeletonPlayer","props":{"y":39,"x":30,"url":"lobbyRes/anim/money_icon.sk","name":"money_icon"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":-87,"tweenMethod":"circOut","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15}],"alpha":[{"value":0,"tweenMethod":"cubicOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("lobby.font.playerMoneyCommonFont",lobby.font.playerMoneyCommonFont);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.MainPlayerWalletBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Components {
    export class GameSettingSliderUI extends View {
		public bgFrame:Laya.Image;
		public sliderBar:Laya.Image;
		public ctrlPoint:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":336,"height":33},"child":[{"type":"Image","props":{"y":17,"x":168,"var":"bgFrame","skin":"lobbyRes/gameSetting/img_sangong_jdt01.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":17,"x":0,"width":0,"var":"sliderBar","skin":"lobbyRes/gameSetting/img_sangong_jdt02.png","sizeGrid":"0,6,0,6","left":0,"centerY":0}},{"type":"Image","props":{"y":17,"x":0,"var":"ctrlPoint","skin":"lobbyRes/gameSetting/btn_sangong_jdt.png","centerY":0,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Components.GameSettingSliderUI.uiView);

        }

    }
}

module ui.lobbyUI.Items {
    export class GameHistoryItemUI extends View {
		public indexLabel:Laya.Label;
		public numberLabel:Laya.Label;
		public roomLabel:Laya.Label;
		public beniftLabel:Laya.Label;
		public endTimeLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":971,"height":40},"child":[{"type":"Label","props":{"y":0,"x":2,"width":76,"var":"indexLabel","valign":"middle","text":"1","name":"indexLabel","height":24,"fontSize":30,"color":"#9cc5d8","bold":true,"align":"center"}},{"type":"Label","props":{"y":2,"x":76,"width":300,"var":"numberLabel","valign":"middle","text":"18111510100053111","name":"numberLabel","height":24,"fontSize":30,"color":"#efe8cd","bold":true,"align":"center"}},{"type":"Label","props":{"y":4,"x":373,"width":126,"var":"roomLabel","valign":"top","text":"土豪房","name":"roomLabel","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#9cc5d8","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":495,"width":150,"var":"beniftLabel","valign":"top","text":"-7250.00","name":"beniftLabel","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#df4218","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":645,"width":320,"var":"endTimeLabel","valign":"top","text":"2018/11/15 18:29:48","name":"endTimeLabel","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#9cc5d8","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Items.GameHistoryItemUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class GameHistoryPanelUI extends Laya.UIPanel {
		public background:Laya.Image;
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public itemPanel:Laya.Panel;
		public container:Laya.Box;
		public noData:Laya.Label;

        public static  uiView:any ={"type":"UIPanel","props":{"y":375,"x":667,"width":1334,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":1036,"var":"bgFrame","skin":"lobbyRes/common/img_com_tanchuangdi2(1030).png","height":626,"centerY":11,"centerX":0,"sizeGrid":"20,27,20,27"},"child":[{"type":"Image","props":{"y":-41,"x":9,"skin":"lobbyRes/common/img_com_tanchuangtou2.png"}},{"type":"Image","props":{"y":69,"x":967,"width":76,"var":"closeBtn","skin":"lobbyRes/common/btn_com_guibi.png","name":"closeBtn","height":81,"gray":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-7,"x":460,"skin":"lobbyRes/gameHistory/img_com_biaotou_zhanji.png","name":"title"}},{"type":"Image","props":{"y":107,"width":973,"skin":"lobbyRes/gameHistory/history_title.png","sizeGrid":"60,10,20,10","name":"msgBar","height":477,"centerX":0}},{"type":"Panel","props":{"y":381,"width":971,"var":"itemPanel","vScrollBarSkin":"lobbyRes/common/mask.png","top":184,"name":"itemPanel","height":400,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"container","staticCache":true,"cacheAs":"normal"}}]},{"type":"Label","props":{"y":587,"valign":"top","text":"显示最新10条战绩, 点击牌局编号可以复制","height":40,"fontSize":18,"font":"Microsoft YaHei","color":"#7b73b3","centerX":0,"bold":true}},{"type":"Label","props":{"y":335,"var":"noData","valign":"top","text":"无记录","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#7b73b3","centerX":0,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Panels.GameHistoryPanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class GameRulePanelUI extends Laya.UIPanel {
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public checkGroupObj:Laya.Box;
		public content4:Laya.Image;
		public content1:Laya.Image;
		public content3:Laya.Image;
		public content2:Laya.Panel;

        public static  uiView:any ={"type":"UIPanel","props":{"y":375,"x":667,"width":1334,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":1035,"var":"bgFrame","skin":"lobbyRes/common/img_com_tanchuangdi2(1030).png","name":"bg","height":627,"centerY":10,"centerX":0,"sizeGrid":"20,27,20,27"},"child":[{"type":"Image","props":{"y":-39,"x":9,"skin":"lobbyRes/common/img_com_tanchuangtou2.png"}},{"type":"Image","props":{"y":70,"x":967,"width":76,"var":"closeBtn","skin":"lobbyRes/common/btn_com_guibi.png","name":"closeBtn","height":81,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":110,"x":29,"width":973,"skin":"lobbyRes/gameRule/menu_bar.png","sizeGrid":"60,10,20,10","name":"menuBar","height":492}},{"type":"Image","props":{"y":-5,"x":457,"skin":"lobbyRes/gameRule/img_com_biaotou_guize.png","name":"title"}},{"type":"Box","props":{"y":106,"x":-16,"var":"checkGroupObj"},"child":[{"type":"CheckBox","props":{"y":1,"x":45,"width":240,"stateNum":2,"skin":"lobbyRes/gameRule/menu1.png","selected":false,"scaleX":1,"name":"menu1"}},{"type":"CheckBox","props":{"y":1,"x":290,"stateNum":2,"skin":"lobbyRes/gameRule/menu2.png","selected":false,"scaleX":1,"name":"menu2"}},{"type":"CheckBox","props":{"y":1,"x":534,"stateNum":2,"skin":"lobbyRes/gameRule/menu3.png","selected":false,"scaleX":1,"name":"menu3"}},{"type":"CheckBox","props":{"y":1,"x":777,"stateNum":2,"skin":"lobbyRes/gameRule/menu4.png","selected":false,"scaleX":1,"name":"menu4"}}]},{"type":"Image","props":{"y":253,"x":266,"visible":false,"var":"content4","skin":"lobbyRes/gameRule/img_baijiale_guize_guanyuwomen.png","name":"content4"}},{"type":"Image","props":{"y":190,"x":57,"width":844,"var":"content1","skin":"lobbyRes/gameRule/img_baijiale_guize_wanfa.png","height":223}},{"type":"Image","props":{"y":199,"x":53,"width":928,"var":"content3","skin":"lobbyRes/gameRule/img_baijiale_guize_peilv.png","name":"content3","height":325}},{"type":"Panel","props":{"y":168,"x":31,"width":967,"var":"content2","vScrollBarSkin":"lobbyRes/common/mask.png","name":"content2","height":432},"child":[{"type":"Image","props":{"y":3,"x":22,"width":928,"skin":"lobbyRes/gameRule/img_baijiale_guize_bupai.png","height":943}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Panels.GameRulePanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class GameSettingPanelUI extends Laya.UIPanel {
		public background:Laya.Image;
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public musicSliverObj:ui.lobbyUI.Components.GameSettingSliderUI;
		public soundSliverObj:ui.lobbyUI.Components.GameSettingSliderUI;
		public tgMusic:Laya.CheckBox;
		public tgSound:Laya.CheckBox;

        public static  uiView:any ={"type":"UIPanel","props":{"top":0,"right":0,"left":0,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","left":0,"bottom":0}},{"type":"Image","props":{"width":758,"var":"bgFrame","skin":"lobbyRes/common/img_com_tanchuangdi1(752).png","height":474,"centerY":0,"centerX":0,"sizeGrid":"10,28,10,28"},"child":[{"type":"Image","props":{"y":-41,"x":9,"skin":"lobbyRes/common/img_com_tanchuangtou1.png"}},{"type":"Image","props":{"y":68,"x":686,"width":76,"var":"closeBtn","skin":"lobbyRes/common/btn_com_guibi.png","height":81,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-7,"x":323,"skin":"lobbyRes/gameSetting/img_com_biaotou_shezhi.png","name":"title"}},{"type":"Image","props":{"y":295,"x":32,"skin":"lobbyRes/gameSetting/icon_com_shezhi3.png","name":"soundIcon"}},{"type":"Image","props":{"y":307,"x":110,"skin":"lobbyRes/gameSetting/img_sangong_zi_yingxiao.png","name":"soundTip"}},{"type":"Image","props":{"y":158,"x":32,"skin":"lobbyRes/gameSetting/icon_com_shezhi4.png","name":"musicIcon"}},{"type":"Image","props":{"y":170,"x":109,"skin":"lobbyRes/gameSetting/img_sangong_zi_yingyue.png","name":"musicTip"}},{"type":"GameSettingSlider","props":{"y":181,"x":246,"var":"musicSliverObj","runtime":"ui.lobbyUI.Components.GameSettingSliderUI"}},{"type":"GameSettingSlider","props":{"y":316,"x":246,"var":"soundSliverObj","runtime":"ui.lobbyUI.Components.GameSettingSliderUI"}},{"type":"CheckBox","props":{"y":175,"x":617,"var":"tgMusic","stateNum":2,"skin":"lobbyRes/gameSetting/switch_btn.png"}},{"type":"CheckBox","props":{"y":309,"x":617,"var":"tgSound","stateNum":2,"skin":"lobbyRes/gameSetting/switch_btn.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.lobbyUI.Components.GameSettingSliderUI",ui.lobbyUI.Components.GameSettingSliderUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Panels.GameSettingPanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class LobbyPanelUI extends Laya.UIPanel {
		public startAnim:Laya.FrameAnimation;
		public exitBtn:Laya.Image;
		public playerInfoBoxObj:ui.lobbyUI.Boxs.MainPlayerInfoBoxUI;
		public supermodel:Laya.Box;
		public centerNode:Laya.Box;
		public logo:Laya.Image;
		public playerWalletBoxObj:ui.lobbyUI.Boxs.MainPlayerWalletBoxUI;
		public btnBarObj:ui.lobbyUI.Boxs.LobbyBtnBarBoxUI;
		public lobbyRoomBoxObj:ui.lobbyUI.Boxs.LobbyRoomBoxUI;
		public marqueeBoxObj:ui.commonUI.Boxs.MarqueeBoxUI;
		public versionLabel:Laya.Label;

        public static  uiView:any ={"type":"UIPanel","props":{"y":0,"width":1624,"height":750},"child":[{"type":"Image","props":{"visible":true,"skin":"lobbyRes/lobbyBG/hall_background_baijiale.jpg","name":"bg","mouseThrough":false,"mouseEnabled":true,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":66,"x":1237,"width":94,"var":"exitBtn","skin":"lobbyRes/lobbyPanel/btn_sanggong_fanhui.png","right":50,"height":104,"anchorY":0.5,"anchorX":0.5}},{"type":"MainPlayerInfoBox","props":{"x":-165,"var":"playerInfoBoxObj","runtime":"ui.lobbyUI.Boxs.MainPlayerInfoBoxUI"}},{"type":"Box","props":{"y":74,"x":118,"width":342,"var":"supermodel","height":677},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"lobbyRes/lobbyPanel/img_com_fangjian_baijiale_juese.png"},"compId":101}]},{"type":"Box","props":{"width":1334,"var":"centerNode","mouseEnabled":true,"height":750,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":10,"x":976,"var":"logo","skin":"lobbyRes/lobbyPanel/lb_bjl.png"},"compId":104},{"type":"MainPlayerWalletBox","props":{"y":10,"x":555,"var":"playerWalletBoxObj","runtime":"ui.lobbyUI.Boxs.MainPlayerWalletBoxUI"}},{"type":"LobbyBtnBarBox","props":{"y":550,"x":367,"var":"btnBarObj","runtime":"ui.lobbyUI.Boxs.LobbyBtnBarBoxUI"}},{"type":"LobbyRoomBox","props":{"y":141,"x":367,"var":"lobbyRoomBoxObj","mouseEnabled":true,"runtime":"ui.lobbyUI.Boxs.LobbyRoomBoxUI"},"compId":102}]},{"type":"MarqueeBox","props":{"var":"marqueeBoxObj","top":78,"centerX":116,"runtime":"ui.commonUI.Boxs.MarqueeBoxUI"}},{"type":"Label","props":{"y":711,"x":36,"var":"versionLabel","text":"版本号:1.0.0.01","stroke":1,"fontSize":26,"font":"Microsoft YaHei","color":"#94b9d6","bold":true}}],"animations":[{"nodes":[{"target":104,"keyframes":{"y":[{"value":-77,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":0},{"value":10,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":15}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":104,"key":"visible","index":0}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":15}]}},{"target":101,"keyframes":{"x":[{"value":-150,"tweenMethod":"linearNone","tween":true,"target":101,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":101,"key":"x","index":15}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":101,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":101,"key":"alpha","index":15}]}},{"target":102,"keyframes":{"x":[{"value":517,"tweenMethod":"linearNone","tween":true,"target":102,"key":"x","index":0},{"value":367,"tweenMethod":"linearNone","tween":true,"target":102,"key":"x","index":15}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":102,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":102,"key":"alpha","index":15}]}}],"name":"startAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.lobbyUI.Boxs.MainPlayerInfoBoxUI",ui.lobbyUI.Boxs.MainPlayerInfoBoxUI);
			View.regComponent("ui.lobbyUI.Boxs.MainPlayerWalletBoxUI",ui.lobbyUI.Boxs.MainPlayerWalletBoxUI);
			View.regComponent("ui.lobbyUI.Boxs.LobbyBtnBarBoxUI",ui.lobbyUI.Boxs.LobbyBtnBarBoxUI);
			View.regComponent("ui.lobbyUI.Boxs.LobbyRoomBoxUI",ui.lobbyUI.Boxs.LobbyRoomBoxUI);
			View.regComponent("ui.commonUI.Boxs.MarqueeBoxUI",ui.commonUI.Boxs.MarqueeBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Panels.LobbyPanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class MatchPanelUI extends Laya.UIPanel {
		public bgMask:Laya.Image;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"var":"bgMask","top":0,"skin":"commonRes/common/black_mask.png","right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Box","props":{"width":1,"height":1,"centerY":0,"centerX":0},"child":[{"type":"SkeletonPlayer","props":{"y":2,"x":2,"url":"lobbyRes/anim/zzpp.sk"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.lobbyUI.Panels.MatchPanelUI.uiView);

        }

    }
}
