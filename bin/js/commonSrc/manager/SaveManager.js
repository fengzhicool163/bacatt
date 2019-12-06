/** 缓存固化数据管理器 */
var SaveManager = /** @class */ (function () {
    /** 构造函数初始化管理器数据 */
    function SaveManager() {
        /** 大厅本地缓存对象 */
        this.lobbyJosnObj = null;
        /** 通用本地缓存对象 */
        this.commonJosnObj = null;
        this.refreshSaveObj();
    }
    /***************************************** 管理器属性与实例 *********************************************/
    /** 获取管理器实例 */
    SaveManager.getObj = function () {
        if (!SaveManager.obj) {
            SaveManager.obj = new SaveManager();
        }
        return SaveManager.obj;
    };
    /** 重新读取本地本地缓存中的文件 */
    SaveManager.prototype.refreshSaveObj = function () {
        this.commonJosnObj = this.getObjTotal(SaveManager.SAVE_KEY_NN, {});
    };
    /**
     * 保存对象Json到本地缓存
     * @param key 键值
     * @param obj 对象
     */
    SaveManager.prototype.saveObjTotal = function (key, obj) {
        Laya.LocalStorage.setJSON(key, obj);
    };
    /**
     * 从本地缓存获取对象Json
     * @param key 键值
     * @param def 对象默认值
     */
    SaveManager.prototype.getObjTotal = function (key, def) {
        var a = Laya.LocalStorage.getJSON(key);
        if (a) {
            return a;
        }
        return def;
    };
    /**
     * 只设置数据,但是暂时不保存到本地缓存
     * @param key 键值
     * @param v 数据
     */
    SaveManager.prototype.set = function (key, v) {
        this.commonJosnObj[key] = v;
    };
    /**
     * 保存数据到本地缓存
     * @param key 键值
     * @param v 数据
     */
    SaveManager.prototype.save = function (key, v) {
        this.commonJosnObj[key] = v;
        this.saveObjTotal(SaveManager.SAVE_KEY_NN, this.commonJosnObj);
    };
    /**
     * 获取本地缓存的数据
     * @param key 数据key值
     * @param def 默认值
     */
    SaveManager.prototype.get = function (key, def) {
        if (this.commonJosnObj[key] != null && this.commonJosnObj[key] != undefined) {
            return this.commonJosnObj[key];
        }
        this.save(key, def);
        return def;
    };
    /**
     * 设置公用数据
     * @param token
     * @param rooturl
     */
    SaveManager.prototype.initCommon = function (token, rooturl) {
        var token = this.get(SaveManager.KEY_TOKEN, token);
        var httpUrl = this.get(SaveManager.KEY_API_URL, rooturl);
    };
    SaveManager.prototype.saveData = function () {
        this.saveObjTotal(SaveManager.SAVE_KEY_NN, this.commonJosnObj);
    };
    /***************************************** 公用本地缓存(游戏与大厅通用)键值命名 PS:存在被游戏使用者不小心清空的不安全性) *********************************************/
    /** 公用Json键值命名 */
    SaveManager.SAVE_KEY_NN = "MT-Card";
    /** 音乐音量值 0...1 */
    SaveManager.KEY_MUSIC_VL = "music";
    /** 音乐开关 0、1 */
    SaveManager.KEY_MUSIC_SWITCH = "music_switch";
    /** 音效音量值 0...1 */
    SaveManager.KEY_SFX_VL = "sound";
    /** 音效开关 0、1 */
    SaveManager.KEY_SFX_SWITCH = "sound_switch";
    /** 头像ID "01"..."08"头像 */
    SaveManager.KEY_AVATOR_ID = "avator_id";
    /** 玩家token */
    SaveManager.KEY_TOKEN = "token";
    /** "xxxxxx" */
    SaveManager.KEY_API_URL = "httpUrl";
    return SaveManager;
}());
//# sourceMappingURL=SaveManager.js.map