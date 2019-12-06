var util;
(function (util) {
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * 判断字符串是否为空
         * @param data
         */
        StringUtils.isEmpty = function (data) {
            if (data == undefined || data == null || data.length == 0) {
                return true;
            }
            return false;
        };
        /** 检查字符串是否存在 */
        StringUtils.isHaveString = function (str, instr) {
            var p = instr.indexOf(str);
            if (p >= 0) {
                return true;
            }
            return false;
        };
        /**
         * 格式化金币
         * @param num
         * @param len 保留小数位数
         */
        StringUtils.FormatMoney = function (num, len) {
            if (len === void 0) { len = 2; }
            var r = "";
            //通用逻辑
            if (num >= 10000 && num < 100000000) { //万
                var n = num / 10000;
                var tt = n.toFixed(len + 1);
                var pointPos = tt.indexOf("."); //点在字符串tt的哪里
                //点的后面截取len+1位
                r = tt.substring(0, pointPos + len + 1);
                return r + "万";
            }
            else if (num >= 100000000) { //亿
                var n2 = num / 100000000;
                var tt2 = n2.toFixed(len + 1);
                var pointPos2 = tt2.indexOf("."); //点在字符串tt的哪里
                //点的后面截取len+1位
                r = tt2.substring(0, pointPos2 + len + 1);
                return r + "亿";
            }
            else {
                return num.toFixed(len);
            }
        };
        /**
        * 获得格式化后的数值
        * @param value
        */
        StringUtils.FormatGameMoney = function (num, len) {
            if (len === void 0) { len = 2; }
            var r = this.FormatMoney(num, len);
            r = this.deleteZero(r);
            return r;
        };
        /**
         * 获得用户脱敏名称
         * @param username
         */
        //字符串中间部分用星号替代
        StringUtils.starString = function (str, rep) {
            var s = str;
            var len = str.length;
            var o1 = Math.floor(len / 3); //从1/3处开始替换为星星
            var o2 = o1 * 2;
            var s1 = s.substr(0, o1);
            var s3 = s.substr(o2, len);
            return s1 + rep + s3;
        };
        /**
         * 去掉浮点数后面无效的0
         * @param result
         */
        StringUtils.deleteZero = function (result) {
            var dotIndex = result.indexOf('.');
            var tmpIndex;
            if (dotIndex != -1) {
                tmpIndex = result.length - 1;
                while (tmpIndex > dotIndex) {
                    if (result[tmpIndex] == '0') {
                        --tmpIndex;
                    }
                    else {
                        break;
                    }
                }
                tmpIndex = tmpIndex == dotIndex ? tmpIndex : tmpIndex + 1;
                result = result.substr(0, tmpIndex);
            }
            return result;
        };
        /**
         * 获得请求过来的html参数
         * @param variable
         */
        StringUtils.getQueryVariable = function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
            //console.log('query variable %s not found', variable);patiention
            return undefined;
        };
        /**
         * 获得字符串的hash值
         * @param str 需要被hash的字符串
         */
        StringUtils.hash = function (str) {
            var hash = 0, i, chr;
            if (str.length === 0)
                return hash;
            for (i = 0; i < str.length; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        };
        /**
         * string to ArrayBuffer
         * @param str
         */
        StringUtils.stringToArrayBuffer = function (str) {
            if (this.isEmpty(str))
                return null;
            var buffer = new ArrayBuffer(str.length);
            for (var i = 0; i < str.length; ++i) {
                buffer[i] = str.charCodeAt(i);
            }
            return buffer;
        };
        /**
         * json object to ArrayBuffer
         * @param json
         */
        StringUtils.jsonObjectToArrayBuffer = function (json) {
            var jsonString = JSON.stringify(json);
            var buffer = this.stringToArrayBuffer(jsonString);
            return buffer;
        };
        StringUtils.getDate = function (time) {
            var date = new Date(time);
            var curTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            return curTime;
        };
        return StringUtils;
    }());
    util.StringUtils = StringUtils;
})(util || (util = {}));
//# sourceMappingURL=StringUtils.js.map