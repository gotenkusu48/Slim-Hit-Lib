module SlimeHit.Vecter {
    // 二次元ベクトルのクラス
    export class Vector {
        // コンストラクター
        constructor(public x: number = 0.0, public y: number = 0.0) { }

        // プロパティ (C# のプロパティにあたる/型付き)
        get length(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }


        // メソッド (引数、戻り値ともに型付きにできる)
        add(vector: Vector): Vector {
            return new Vector(this.x + vector.x, this.y + vector.y);
        }

        //multiply(vector: Vector): Vector {
        //    return new Vector(this.x * vector.x, this.y * vector.y);
        //}

        get GetX(): number { return this.x; }
        get GetY(): number { return this.y; }        

    }
    export class Vector2D {
        // コンストラクタ
        constructor(public x: number = 0.0,public x2:number = 0.0, public y: number = 0.0,public y2 =0.0) { }

        // プロパティ (C# のプロパティにあたる/型付き)
        get length(): number {
            return Math.sqrt(this.x * this.x + this.x2 * this.x2 + this.y * this.y);
        }

        // メソッド (引数、戻り値ともに型付きにできる)
        add(vector: Vector2D): Vector2D {
            return new Vector2D(this.x + vector.x, this.x2 + vector.x2,this.y + vector.y,this.y2+vector.y2);
        }
    }
}
