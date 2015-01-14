module SlimeHit.slimehit {
    class SlimeHit {
        HitCheckPoint2Point(x: Vecter.Vector, y: Vecter.Vector): boolean {
            var ary = new Array;
            var Xx: number = x.GetX;
            var Xy: number = x.GetY;
            var Yx: number = y.GetX;
            var Yy: number = y.GetY;
            if (Xx == Yy && Xy == Yy) {
                return true;
            }
            return false;
        }
    }
}