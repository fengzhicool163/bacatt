var trend;
(function (trend) {
    /** 1和 2庄 4闲 8庄对 16闲对 */
    var TrendItemType;
    (function (TrendItemType) {
        TrendItemType[TrendItemType["He"] = 1] = "He";
        TrendItemType[TrendItemType["Zhuang"] = 2] = "Zhuang";
        TrendItemType[TrendItemType["Xian"] = 4] = "Xian";
        TrendItemType[TrendItemType["ZhuangDui"] = 8] = "ZhuangDui";
        TrendItemType[TrendItemType["XianDui"] = 16] = "XianDui";
    })(TrendItemType = trend.TrendItemType || (trend.TrendItemType = {}));
})(trend || (trend = {}));
//# sourceMappingURL=TrendEnum.js.map