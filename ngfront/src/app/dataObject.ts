export class Variable {
    id: number;
    name: string;
    unit: string;

    constructor(id: number, name: string, unit: string) {
        this.id = id;
        this.name = name;
        this.unit = unit;
    }
}

export class Station {
    id: number;
    name: string;
    longtitude: number;
    latitude: number;
}

export class Pair {
    id: number;
    value: string;
    constructor(id: number, value: string) {
        this.id = id;
        this.value = value;
    }
}
export class IData {
    idStation: number;
    date: string;
    variables: Array<Pair>;
    constructor(id: number, date: string, arrVar: Array<Pair>) {
        this.idStation = id;
        this.date = date;
        this.variables = [];
        for (const i of arrVar) {
            this.variables.push(i);
        }
        // console.log(this.variables);
    }
}
