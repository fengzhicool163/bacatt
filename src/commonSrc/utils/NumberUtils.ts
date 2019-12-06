
module util {
	
	/** 数字工具  */
	export class NumberUtils {

		constructor() {}

		/**
		 * 获得范围内随机数
		 * @param Min  最小值
		 * @param Max  最大值
		 */
		public static getRandomNum(min, max): number {
			var range = max - min;
			var rand = Math.random();
			return (min + Math.round(rand * range));
		}

	}
}