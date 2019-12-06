/**
 * 事件管理器
 * 用于添加触摸缩放按钮效果和全局事件管理以及系统事件
 */
class EventManager {
    private static _inst: EventManager;
    private pool: Laya.Dictionary = new Laya.Dictionary();
    private poolThis: Laya.Dictionary = new Laya.Dictionary();
    private pushPool: Laya.Dictionary = new Laya.Dictionary();
    private downPos: Laya.Point = new Laya.Point();
    /**
     * 全局事件派发器
     */
    private static eventer: Laya.EventDispatcher = new Laya.EventDispatcher();
    /**
     * 防止按钮重复点击的时间间隔
     */
    public static delayClickTime: number = 500;

    public static get inst(): EventManager {
        if (!EventManager._inst) {
            EventManager._inst = new EventManager();
        }
        return EventManager._inst;
    }
    /**
     * 储存并监听laya引擎事件
     * @param vo 
     */
    public static pushEvent(target: Laya.Node, type: string, thisObj: any, callback: Function, args?: any[]) {
        let self = EventManager.inst;
        let arr: any[] = self.pushPool.get(thisObj);
        if (!arr) arr = [];
        target.on(type, thisObj, callback, args);
        arr.push({ target: target, type: type, thisobj: thisObj, callback: callback });
        self.pushPool.set(thisObj, arr);
    }
    /**
     * 派发全局事件
     * @param type 
     * @param data 
     */
    public static dispath(type: string, data?: any) {
        this.eventer.event(type, [data]);
    }
    /**
     * 注册全局事件
     * @param type 
     * @param caller 
     * @param callback 
     */
    public static register(type: string, caller: any, callback: Function) {
        this.eventer.on(type, caller, callback);
        EventManager.inst.registerInst(type, caller, callback);
    }
    private registerInst(type: string, caller: any, callback: Function) {
        let arr: CustomObj[] = this.pool.get(EventManager.eventer);
        if (!arr) arr = [];
        let callerList = arr.filter(value => value.thisobj == caller);
        let typeList = callerList ? callerList.filter(value => value.type == type) : null;
        if (!(typeList && typeList.length > 0)) {//避免重复添加
            let cobj = new CustomObj(EventManager.eventer, callback, caller, null, 1);
            cobj.type = type;
            arr.push(cobj);
            this.pool.set(EventManager.eventer, arr);
        }
    }

    /********************************************** 按钮点击事件辅助 *******************************************/
    private addScaleListener(target: Laya.Node, thisobj: any, listener: Function, params: any = null, scale: number = 1.05) {
        if (!target || !thisobj || !listener) return;

        //按钮注册点击事件
        if (scale == 1) {
            target.on(Laya.Event.CLICK, this, this.clickHandler);
        } else {
            target.on(Laya.Event.MOUSE_DOWN, this, this.onScaleTouch);
            target.on(Laya.Event.MOUSE_OUT, this, this.onScaleTouch);
            target.on(Laya.Event.MOUSE_UP, this, this.onScaleTouch);
        }

        //获取thisobj与target映射关系
        let arr: any[] = this.poolThis.get(thisobj);
        if (!arr) arr = [];
        if (arr.indexOf(target) == -1) arr.push(target);
        
        //保存点击事件数据
        this.pool.set(target, new CustomObj(target, listener, thisobj, params, scale));
        this.poolThis.set(thisobj, arr);
    }
    private removeEvent(target: Laya.Node) {
        if (!target) return;

        let obj: CustomObj = this.pool.get(target);
        if (obj) {
            let arr: any[] = this.poolThis.get(obj.thisobj);
            if (arr && arr.indexOf(target) != -1) {
                let id: number = arr.indexOf(target);
                arr.splice(id, 1);
                if (arr.length == 0) {
                    this.poolThis.remove(obj.thisobj);
                    arr = null;
                }
            }
            if (obj.sclNum == 1) target.off(Laya.Event.CLICK, this, this.clickHandler);
            else {
                target.off(Laya.Event.MOUSE_DOWN, this, this.onScaleTouch);
                target.off(Laya.Event.MOUSE_OUT, this, this.onScaleTouch);
                target.off(Laya.Event.MOUSE_UP, this, this.onScaleTouch);
            }
            this.pool.remove(obj);
            obj.dispose();
            obj = null;
        }
    }
    //删除全部事件
    private removeAllEvents(thisobj: any) {
        let arr: any[] = this.poolThis.get(thisobj);
        if (arr) {
            //删除按钮事件
            for (let i = 0; i < arr.length; i++) {
                this.removeEvent(arr[i]);
                i--;
            }
        }

        //删除对于的全局事件
        let events: CustomObj[] = this.pool.get(EventManager.eventer);
        if (events) {
            let evts = events.filter(value => value.thisobj == thisobj);
            let cobj: CustomObj;
            for (let j = 0; j < evts.length; j++) {
                cobj = evts[j];
                if (cobj.thisobj) {
                    EventManager.eventer.off(cobj.type, cobj.thisobj, cobj.listener);
                }
                let id = events.indexOf(cobj);
                events.splice(id, 1);
            }
        }

        //删除其他事件(laya系统事件)
        let pushEvts: PushEventVo[] = this.pushPool.get(thisobj);
        if (pushEvts) {
            pushEvts.forEach(vo => {
                vo.target.off(vo.type, vo.thisObj, vo.callback);
            });
            this.pushPool.remove(thisobj);
        }
    }

    private clickHandler(e: Laya.Event) {
        let btn: Laya.Node = e.currentTarget as Laya.Node;
        let obj: CustomObj = this.pool.get(btn);
        if (!obj) return;
        obj.docallback(e);
    }
    private onScaleTouch(e: Laya.Event) {
        let btn: Laya.Node = e.currentTarget as Laya.Node;
        let obj: CustomObj = this.pool.get(btn);
        if (!obj) return;
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN: {
                obj.isTapBegin = true;
                this.downPos.setTo(e.stageX, e.stageY);
                let scl: number = obj.sclNum;
                Laya.Tween.to(btn, { scaleX: scl, scaleY: scl }, 100);
                break;

            } case Laya.Event.MOUSE_OUT: {
                Laya.Tween.to(btn, { scaleX: 1, scaleY: 1 }, 100);
                obj.isTapBegin = false;
                break;

            } case Laya.Event.MOUSE_UP: {
                Laya.Tween.to(btn, { scaleX: 1, scaleY: 1 }, 100);
                let dist: number = this.downPos.distance(e.stageX, e.stageY);
                if (dist < 20 && obj.isTapBegin) {//触发点击事件
                    obj.docallback(e);
                }
                obj.isTapBegin = false;
                break;
            }
        }
    }

    /**
     * 添加带触摸缩放效果的点击事件
     * @param target 
     * @param thisObject 
     * @param listener 
     * @param scale 
     */
    public static addTouchScaleListener(target: Laya.Node, thisobj: any, listener: Function, params: any = null, scale: number = 1.05) {
        EventManager.inst.addScaleListener(target, thisobj, listener, params, scale);
    }
    /**
     * 删除按钮事件(建议统一调用removeAllEvents)
     * @param target 
     */
    public static removeBtnEvent(target: Laya.Node) {
        EventManager.inst.removeEvent(target);
    }
    /**
     * 删除thisobj关联的所以按钮事件
     * @param thisobj 
     */
    public static removeAllEvents(thisobj: any) {
        EventManager.inst.removeAllEvents(thisobj);
    }
}

class CustomObj {
    public isTapBegin: boolean = false;
    public target: Laya.EventDispatcher = null;
    public listener: Function = null;
    public thisobj: Laya.Node = null;
    public argObject: any = null
    public sclNum: number;
    public type: string = null;

    private isclick: boolean = true;

    constructor(target: Laya.EventDispatcher, listener: Function, thisobj: any, argObject?: any, sclNum?: number) {
        this.target = target;
        this.listener = listener;
        this.sclNum = sclNum;
        this.thisobj = thisobj;
        this.argObject = argObject;
    }
    public docallback(evt: Laya.Event) {
        if (!this.isclick) return;
        if (this.thisobj && this.listener) {
            this.listener.call(this.thisobj, evt, this.argObject);
            this.isclick = false;
            Laya.timer.once(EventManager.delayClickTime, this, this.resetState);
        }
    }
    private resetState() {
        this.isclick = true;
    }

    public dispose() {
        Laya.timer.clear(this, this.resetState);
        this.target = null;
        this.listener = null;
        this.thisobj = null;
        this.argObject = null;
    }
}

class EventType {
    public static RESIZE: string = "resize";
    public static FLUSH_USERINFO: string = "flushUserInfo";
    public static FLUSH_HEADICON: string = "flushHeadIcon";
    public static LIFE_CYCLE: string = "lifeCycle";//前后台切换
    public static GAMETOHALL: string = "gameToHall";//从游戏返回大厅
    public static HALLTOGAME: string = "hallToGame";//进入游戏
    /**
     * 失去焦点通知
     * 收到此通知后要将输入文本的焦点设为false,以解决ios系统点击键盘的Done按钮后界面收不回来
     */
    public static BLUR_NATIVE: string = "blurNative";
    /**
     * 游戏更新初始化
     */
    public static GAME_UPDATE_INIT: string = "gameUpdateInfo";
    /**
     * 游戏更新进度(百分比)
     */
    public static GAME_UPDATE_PROGRESS: string = "gameUpdateProgress";
    //绑定手机奖励领取成功
    public static GETBINDAWARD_SUCC: string = "getBindAwardSucc";
    public static GETUSER_CURRENT: string = "getUserCurrent";
    public static BINDPHONE_INFO: string = "bindPhoneInfo";
    public static GETUSERS_INFO: string = "getUsersInfo";
    public static GETAVATOR_INFO: string = "getAvatorInfo";
    public static FLUSH_MONEY: string = "flushMoney";//刷新money
    public static CHECK_UNREADMAIL: string = "checkUnreadMail";//检查是否有未读邮件
    public static GET_BACKCARD_DETAIL: string = "getBankCardDetail";//获取银行卡详细信息
    public static JUMP_GAME: string = "jumpGame";//轮播图跳转游戏
    public static FLUSH_YUEBAOINFO: string = "flushYuebaoInfo";//刷新余额宝信息
    //微信登录
    public static WeChatLogin: string = "WeChatLogin";
    //微信绑定
    public static WeChatBind: string = "WeChatBind";
    public static INIT_LOGINVIEW: string = "initLoginView";//初始化登录流程
}

interface PushEventVo {
    target: Laya.Node,
    type: string,
    thisObj: any,
    callback: Function,
}