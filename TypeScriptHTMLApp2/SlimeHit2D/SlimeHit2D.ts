module SlimeHit2D {
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
    }
}
