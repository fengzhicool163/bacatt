
/** 缓存固化数据管理器 */
class SaveManager {

    /***************************************** 公用本地缓存(游戏与大厅通用)键值命名 PS:存在被游戏使用者不小心清空的不安全性) *********************************************/
    /** 公用Json键值命名 */
    public static SAVE_KEY_NN: string = "MT-Card";
    /** 音乐音量值 0...1 */
    public static KEY_MUSIC_VL: string = "music";
    /** 音乐开关 0、1 */
    public static KEY_MUSIC_SWITCH: string = "music_switch";
    /** 音效音量值 0...1 */
    public static KEY_SFX_VL: string = "sound";
    /** 音效开关 0、1 */
    public static KEY_SFX_SWITCH: string = "sound_switch";
    /** 头像ID "01"..."08"头像 */
    public static KEY_AVATOR_ID: string = "avator_id";
    /** 玩家token */
    public static KEY_TOKEN: string = "token";
    /** "xxxxxx" */
    public static KEY_API_URL: string = "httpUrl";

    /***************************************** 管理器属性与实例 *********************************************/
    /** 获取管理器实例 */
    public static getObj(): SaveManager {
        if (!SaveManager.obj) {
            SaveManager.obj = new SaveManager();
        }
        return SaveManager.obj;
    }
    public static obj: SaveManager;

    /** 大厅本地缓存对象 */
    public lobbyJosnObj: any = null;
    /** 通用本地缓存对象 */
    public commonJosnObj: any = null;

    /** 构造函数初始化管理器数据 */
    constructor() {
        this.refreshSaveObj();
    }

    /** 重新读取本地本地缓存中的文件 */
    public refreshSaveObj(): void {
        this.commonJosnObj = this.getObjTotal(SaveManager.SAVE_KEY_NN, {});
    }

    /**
     * 保存对象Json到本地缓存
     * @param key 键值
     * @param obj 对象
     */
    public saveObjTotal(key: string, obj: any): void {
        Laya.LocalStorage.setJSON(key, obj);
    }

    /**
     * 从本地缓存获取对象Json
     * @param key 键值
     * @param def 对象默认值
     */
    public getObjTotal(key: string, def: any): any {
        var a = Laya.LocalStorage.getJSON(key);
        if (a) {
            return a;
        }
        return def;
    }

    /**
     * 只设置数据,但是暂时不保存到本地缓存
     * @param key 键值
     * @param v 数据
     */
    public set(key: string, v: any): any {
        this.commonJosnObj[key] = v;
    }

    /**
     * 保存数据到本地缓存
     * @param key 键值
     * @param v 数据
     */
    public save(key: string, v: any): any {
        this.commonJosnObj[key] = v;
        this.saveObjTotal(SaveManager.SAVE_KEY_NN, this.commonJosnObj);
    }

    /**
     * 获取本地缓存的数据
     * @param key 数据key值
     * @param def 默认值
     */
    public get(key: string, def: any): any {
        if (this.commonJosnObj[key] != null && this.commonJosnObj[key] != undefined) {
            return this.commonJosnObj[key];
        }
        this.save(key, def);
        return def;
    }

    /**
     * 设置公用数据
     * @param token 
     * @param rooturl 
     */
    public initCommon(token: any, rooturl: any): void {
        var token = this.get(SaveManager.KEY_TOKEN, token);
        var httpUrl = this.get(SaveManager.KEY_API_URL, rooturl);
    }

    public saveData() {
        this.saveObjTotal(SaveManager.SAVE_KEY_NN, this.commonJosnObj);
    }
}