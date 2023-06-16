class DieCount {
    constructor(
        public readonly die: number,
        public readonly count: number
    ) {
    }
}

declare global {

    export interface Array<T> {
        sum(): number
    }
}

Array.prototype.sum = function () {
    return this.reduce((acc, v) => acc + v, 0);
}



export default class Yatzy {


    static chance(...dice: number[]): number {
        return dice.sum();
    }

    static ones(...dice: number[]): number {
        return this.addAll(dice, 1)
    }

    static twos(...dice: number[]): number {
        return this.addAll(dice, 2)
    }

    static threes(...dice: number[]): number {
        return this.addAll(dice, 3)
    }

    static fours(...dice: number[]): number {
        return this.addAll(dice, 4)
    }

    static fives(...dice: number[]): number {
        return this.addAll(dice, 5)
    }

    static sixes(...dice: number[]): number {
        return this.addAll(dice, 6)
    }

    private static addAll(dice: number[], value: any) {
        return dice.filter(v => v === value).sum();
    }

    static yatzy(...args: number[]): number {
        const counts = this.countOccurrences(args);
        if (counts.find(dc => dc.count == 5)) {
            return 50;
        } else {
            return 0;
        }
    }

    static onePair(...args: number[]): number {
        let maxDie = this.countOccurrences(args)
            .filter(dc => dc.count >= 2)
            .map(dc => dc.die)
            .reverse()[0] || 0;
        // dream: what if I could filter the dice that have >=2 and then take the max
        return maxDie * 2;
    }

    static twoPairs(...args: number[]): number {
        let diceWithPair = this.countOccurrences(args)
            .filter(dc => dc.count >= 2)
            .map(dc => dc.die);
        if (diceWithPair.length != 2) {
            return 0;
        } else {
            return 2 * diceWithPair[0] + 2 * diceWithPair[1];
        }
    }

    static threeOfAKind(...args: number[]): number {
        let d = this.countOccurrences(args)
            .filter(dc => dc.count >= 3)
            .map(dc => dc.die)
            [0] || 0;
        return d * 3;
    }

    // TODO vrentea MON: fix it: inroduce a Hand class as param

    static fourOfAKind(...args: number[]): number {
        let d = this.countOccurrences(args)
            .filter(dc => dc.count >= 4)
            .map(dc => dc.die)
            [0] || 0;
        return d * 4;
    }
    // 2 3 4 5 6 big straight

    static smallStraight(...args: number[]): number {
        let match = JSON.stringify(args.sort()) === JSON.stringify([1, 2, 3, 4, 5]);
        return match ? 15 : 0;
    }
    static largeStraight(...args: number[]): number {
        const match = JSON.stringify(args.sort()) === JSON.stringify([2, 3, 4, 5, 6]);
        return match ? 20 : 0;
    }

    static fullHouse(...args: number[]): number {
        const occ = this.countOccurrences(args);
        const has3 = occ.some(dc => dc.count == 3)
        const has2 = occ.some(dc => dc.count == 2)

        if (has3 && has2) {
            return args.sum();
        } else {
            return 0;
        }
    }

    private static countOccurrences(args: number[]) {
        const counts = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 5; ++i) {
            counts[args[i]]++;
        }
        const result = [];
        for (let i = 0; i < counts.length; i++) {
            if (counts[i]) {
                result.push(new DieCount(i, counts[i]));
            }
        }
        return result;
    }
}
