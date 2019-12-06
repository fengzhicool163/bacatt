
module common.font {
    /*
    * 位图字体
    *注意：素材要保持高度一致
    *要设置了text后才能正常获取宽和高
    */
    export class BitmapFont extends Laya.Box {

        private static _imagePool: util.PoolUtil<Laya.Image>;
        /** 公用缓存池 */
        protected static get imagePool() {
            if (!this._imagePool) this._imagePool = new util.PoolUtil<Laya.Image>(Laya.Image);
            return this._imagePool;
        }

        /** 字体资源配置 */
        protected config: { [key: string]: string };
        /** 字体显示内容 */
        protected _txt: string;
        /** 字体间距 */
        protected _spacing: number = 0;

        /** 字体图片列表 */
        protected bits: Laya.Image[] = [];

        constructor(config: { [key: string]: string }) {
            super();
            //设置缓存
            this.cacheAs = "normal";
            this.cacheAsBitmap = false;
            this.staticCache = true;
            //设置字体资源配置
            this.config = config;
        }

        public destroy() {
            this.reset();
            this.bits = null;
            super.destroy(false);
        }

        protected layoutBit() {
            let tox: number = 0; //起始位置
            let maxH: number = 0;
            for (let index = 0; index < this.bits.length; index++) {
                const bit = this.bits[index];
                bit.visible = true;
                bit.x = tox;
                bit.bottom = 0;

                tox += bit.width + this._spacing;
                if (bit.height > maxH) maxH = bit.height;
            }
            this.width = tox - this._spacing;
            this.height = maxH;
            this.reCache();
        }

        /** 回收 */
        protected reset() {
            for (let index = 0; index < this.bits.length; index++) {
                const bit = this.bits[index];
                BitmapFont.imagePool.recover(bit);
            }
            this.bits.length = 0;
        }

        /** 创建 */
        protected creatFont() {
            let strArr = this._txt.split(""); //
            for (let index = 0; index < strArr.length; index++) {
                const str = strArr[index];
                let url: string = this.config[str];
                if (!url) continue;
                var bit = BitmapFont.imagePool.getItem();
                bit.skin = url;
                this.addChild(bit);
                this.bits.push(bit);
            }
            this.layoutBit();
        }

        /**
         * 设置文本内容
         */
        public set text(value: string) {
            if (this._txt == value) return;
            this._txt = value;
            this.reset();
            this.creatFont();
        }

        /**
         * 文本内容
         */
        public get text() {
            return this._txt;
        }

        /**
         * 设置字间距(def=0)
         */
        public set spacing(value: number) {
            if (this._spacing == value) return;
            this._spacing = value;
            this.layoutBit();
        }

        /**
         * 更换字体
         * @param config 新字体配置表
         * @param spacing 新间距
         * @param isUpdate 是否更新文字到最新字体
         */
        public changeFont( config : { [key: string]: string } , spacing : number , isUpdate = true){
            this.config = config;
            this.spacing = spacing;
            if(isUpdate) {
                this.reset();
                this.creatFont();
            }
        }

    }
}