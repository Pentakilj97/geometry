class Triangle {

    constructor(pointA, pointB, pointC) {
        this.pointA = pointA
        this.pointB = pointB
        this.pointC = pointC

        this.segmentAB = new Segment(this.pointA, this.pointB);
        this.segmentBC = new Segment(this.pointB, this.pointC);
        this.segmentCA = new Segment(this.pointC, this.pointA);
    }

    calculatePerimeter(){
        return this.segmentAB.calculateLength()+this.segmentBC.calculateLength()+this.segmentCA.calculateLength()

    }
    calculateSemiPerimeter(){
        return this.calculatePerimeter()/2;
    }

    calculateArea(){
        const semiPerimenterMinusSegmentAB=this.calculateSemiPerimeter()- this.segmentAB.calculateLength();
        const semiPerimenterMinusSegmentBC=this.calculateSemiPerimeter()- this.segmentBC.calculateLength();
        const semiPerimenterMinusSegmentCA=this.calculateSemiPerimeter()- this.segmentCA.calculateLength();

        const product=this.calculateSemiPerimeter()*
                      semiPerimenterMinusSegmentAB*
                      semiPerimenterMinusSegmentBC*
                      semiPerimenterMinusSegmentCA;
                                              
        const area=Math.sqrt(product);
        return area

    }
}



// class Triangle2 {

//     constructor(pointA, pointB, pointC) {
//         this.segmentAB = new Segment(pointA, pointB);
//         this.segmentBC = new Segment(pointB, pointC);
//         this.segmentCA = new Segment(pointC, pointA);
//     }

//     get pointA() {
//         return this.segmentAB.pointA;
//     }

//     get pointB() {
//         return this.segmentAB.pointB;
//     }

//     get pointC() {
//         return this.segmentBC.pointC;
//     }
// }


// class Triangle3 {

//     constructor(pointA, pointB, pointC) {
//         this.pointA = pointA;
//         this.pointB = pointB;
//         this.pointC = pointC;
//     }

//     get segmentAB() {
//         return new Segment(this.pointA, this.pointB);
//     }
//     get segmentAB() {
//         return new Segment(this.pointB, this.pointC);
//     }
//     get segmentAB() {
//         return new Segment(this.pointC, this.pointA);
//     }
// }

