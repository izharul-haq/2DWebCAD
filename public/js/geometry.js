export class Geometry {
    constructor(type = "", coorData = [], indexData = [], colorData = []) {
        this.type = type;
        this.coorData = [...coorData];
        this.indexData = [...indexData];
        this.colorData = [...colorData];
    }
    setType(type) {
        this.type = type;
    }
    setCoorData(coorData) {
        this.coorData = [...coorData];
    }
    setIndexData(indexData) {
        this.indexData = [...indexData];
    }
    setColorData(colorData) {
        this.colorData = [...colorData];
    }
}