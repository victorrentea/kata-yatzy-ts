class DieCount {
    constructor(public readonly die: number,
                public readonly count: number = 0) {
    }
}

export default class YatzyReference {

    private static sum(arr: number[]) {
        return arr.reduce((acc, e) => acc + e, 0);
    }

    static ones(...dice: number[]): number {
        return this.sum(dice.filter(die => die == 1));
    }

    static twos(...dice: number[]): number {
        return this.sum(dice.filter(die => die == 2));
    }

    static threes(...dice: number[]): number {
        return this.sum(dice.filter(die => die == 3));
    }

    static fours(...dice: number[]): number {
        return this.sum(dice.filter(die => die == 4));
    }

    static fives(...dice: number[]): number {
        return this.sum(dice.filter(die => die == 5));
    }

    static sixes(...dice: number[]): number {
        return this.sum(dice.filter(die => die == 6));
    }

    static chance(...dice: number[]): number {
        return this.sum(dice);
    }

    static onePair(...dice: number[]): number {
        const die2 = this.repeatingDice(dice, 2);
        if (die2.length > 0) {
            const biggestDie = die2.sort().reverse()[0];
            return 2 * biggestDie;
        }
        return 0;
    }

    static twoPairs(...dice: number[]): number {
        const die2 = this.repeatingDice(dice, 2);
        if (die2.length == 2) return 2 * this.sum(die2);
        return 0;
    }

    static threeOfAKind(...dice: number[]): number {
        const die3 = this.repeatingDice(dice, 3);
        if (die3.length > 0) return die3[0] * 3;
        return 0;
    }

    static fourOfAKind(...dice: number[]): number {
        const die4 = this.repeatingDice(dice, 4);
        if (die4.length > 0) return die4[0] * 4;
        return 0;
    }

    static smallStraight(...dice: number[]): number {
        const unique = this.repeatingDice(dice, 1);
        if (unique.length == 5 && !unique.includes(6)) return 15;
        return 0;
    }

    static largeStraight(...dice: number[]): number {
        const unique = this.repeatingDice(dice, 1);
        if (unique.length == 5 && !unique.includes(1)) return 20;
        return 0;
    }

    static fullHouse(...dice: number[]): number {
        const dieCounts = this.countValues(dice);
        const die2 = dieCounts.find(dc => dc.count == 2);
        const die3 = dieCounts.find(dc => dc.count == 3);
        if (die3 && die2) {
            return die3.die * 3 + die2.die * 2;
        }
        return 0;
    }

    static yatzy(...dice: number[]): number {
        const counts = this.countValues(dice);
        if (counts.find(dc => dc.count == 5)) {
            return 50;
        }
        return 0;
    }

    private static repeatingDice(dice: number[], minOccurrences: number) {
        return this.countValues(dice).filter(dc => dc.count >= minOccurrences).map(dc => dc.die);
    }

    private static countValues(dice: number[]) {
        const counts = new Map<number, number>();
        for (const die of dice) {
            const old = counts.get(die) || 0;
            counts.set(die, old + 1);
        }
        return Array.from(counts.entries()).map(e => new DieCount(e[0], e[1]));
    }

}
