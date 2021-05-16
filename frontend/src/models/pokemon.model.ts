interface PokemonBase {
    HP: number;
    Attack: number;
    Defense: number;
    'Sp. Attack': number;
    'Sp. Defense': number;
    'Speed': number;
}

export class Pokemon {
    public id: number;
    public name: string;
    public type: string[];
    public base: PokemonBase;

    constructor(id: number, name: string, type: string[], base: PokemonBase) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.base = base;
    }

    static getColorType(type: string): string {
        switch(type) {
            case "Normal":
                return "#aa9";
            case "Fire":
                return "#f42";
            case "Water": 
                return "#39f";
            case "Electric":
                return "#fc3";
            case "Grass":
                return "#7c5";
            case "Ice":
                return "#6cf";
            case "Fighting":
                return "#b54";
            case "Poison":
                return "#a59";
            case "Ground":
                return "#db5";
            case "Flying":
                return "#89f";
            case "Psychic":
                return "#f59";
            case "Bug": 
                return "#ab2";
            case "Rock":
                return "#ba6";
            case "Ghost":
                return "#66b";
            case "Dragon": 
                return "#76e";
            case "Steel":
                return "#aab";
            case "Fairy":
                return "#FFB6C1"
            default:
                return "black";
        }
    }
}