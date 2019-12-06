/*
* name;
*/
class UICtrlManager {
    //单例
    private static instance: UICtrlManager;
    public static getInstance() {
        if (!UICtrlManager.instance) {
            UICtrlManager.instance = new UICtrlManager();
        }
        return UICtrlManager.instance;
    }

    private constructor() {
        this.init();
    }

    //参数
    private ctrlMap: { [key: string]: ctrl.UICtrl };

    //初始化
    private init() {
        this.ctrlMap = {};
    }

    /**
	 * 获取UICtrlPanel控制脚本
	 * @param uiCtrlScript 
	 */
	public GetCtrl<T extends ctrl.UICtrl>(uiCtrlScript: { new (): T; }): T {
		var ctrlName = uiCtrlScript.toString();
        if(this.ctrlMap[ctrlName]) return this.ctrlMap[ctrlName] as T;
        this.ctrlMap[ctrlName] = new uiCtrlScript();
		return this.ctrlMap[ctrlName] as T;
	}
}