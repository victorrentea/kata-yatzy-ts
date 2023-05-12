class DieCount {
    constructor(public readonly die: number,
                public readonly count: number = 0) {
    }
}

export default class YatzyReference {

    static ones(...dice: number[]): number {
        return dice.filter(die => die == 1).reduce((acc, e) => acc + e, 0);
    }

    static twos(...dice: number[]): number {
        return dice.filter(die => die == 2).reduce((acc, e) => acc + e, 0);
    }

    static threes(...dice: number[]): number {
        return dice.filter(die => die == 3).reduce((acc, e) => acc + e, 0);
    }

    static fours(...dice: number[]): number {
        return dice.filter(die => die == 4).reduce((acc, e) => acc + e, 0);
    }

    static fives(...dice: number[]): number {
        return dice.filter(die => die == 5).reduce((acc, e) => acc + e, 0);
    }

    static sixes(...dice: number[]): number {
        return dice.filter(die => die == 6).reduce((acc, e) => acc + e, 0);
    }

    static chance(...dice: number[]): number {
        return dice.reduce((acc, e) => acc + e, 0);
    }

    static onePair(...dice: number[]): number {
        let die2 = this.repeatingDice(dice, 2);
        if (die2.length > 0) {
            let biggestDie = die2.sort().reverse()[0];
            return 2 * biggestDie;
        }
        return 0;
    }

    static twoPairs(...dice: number[]): number {
        let die2 = this.repeatingDice(dice, 2);
        if (die2.length == 2) return 2 * die2.reduce((acc, e) => acc + e, 0);
        return 0;
    }

    static threeOfAKind(...dice: number[]): number {
        let die3 = this.repeatingDice(dice, 3);
        if (die3.length > 0) {
            return die3[0] * 3;
        }
        return 0;
    }

    static fourOfAKind(...dice: number[]): number {
        let die4 = this.repeatingDice(dice, 4);
        if (die4.length > 0) {
            return die4[0] * 4;
        }
        return 0;
    }

    static smallStraight(...dice: number[]): number {
        let unique = this.repeatingDice(dice, 1);
        if (unique.length == 5 && !unique.includes(6)) return 15;
        return 0;
    }

    static largeStraight(...dice: number[]): number {
        let unique = this.repeatingDice(dice, 1);
        if (unique.length == 5 && !unique.includes(1)) return 20;
        return 0;
    }

    static fullHouse(...dice: number[]): number {
        let dieCounts = this.countValues(dice);
        let die2 = dieCounts.find(dc => dc.count == 2);
        let die3 = dieCounts.find(dc => dc.count == 3);
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
            let old = counts.get(die) || 0;
            counts.set(die, old + 1);
        }
        return Array.from(counts.entries()).map(e => new DieCount(e[0], e[1]));
    }

}
