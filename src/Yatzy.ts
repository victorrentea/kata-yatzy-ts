export default class Yatzy {

  static chance(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var total = 0;
    total += d1;
    total += d2;
    total += d3;
    total += d4;
    total += d5;
    return total;
  }

  static yatzy(...args: number[]): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i != args.length; ++i) {
      var die = args[i];
      counts[die - 1]++;
    }
    for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
    return 0;
  }

  static ones(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var sum = 0;
    if (d1 == 1) sum++;
    if (d2 == 1) sum++;
    if (d3 == 1) sum++;
    if (d4 == 1) sum++;
    if (d5 == 1) sum++;

    return sum;
  }

  static twos(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var sum = 0;
    if (d1 == 2) sum += 2;
    if (d2 == 2) sum += 2;
    if (d3 == 2) sum += 2;
    if (d4 == 2) sum += 2;
    if (d5 == 2) sum += 2;
    return sum;
  }

  static threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var s;
    s = 0;
    if (d1 == 3) s += 3;
    if (d2 == 3) s += 3;
    if (d3 == 3) s += 3;
    if (d4 == 3) s += 3;
    if (d5 == 3) s += 3;
    return s;
  }

  static onePair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;
    var at;
    for (at = 0; at != 6; at++) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
    return 0;
  }

  static twoPairs(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1 - 1]++;
    counts[d2 - 1]++;
    counts[d3 - 1]++;
    counts[d4 - 1]++;
    counts[d5 - 1]++;
    var n = 0;
    var score = 0;
    for (let i = 0; i < 6; i += 1)
      if (counts[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    if (n == 2) return score * 2;
    else return 0;
  }

  static fourOfAKind(_1: number, _2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[_1 - 1]++;
    tallies[_2 - 1]++;
    tallies[d3 - 1]++;
    tallies[d4 - 1]++;
    tallies[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (tallies[i] >= 4) return (i + 1) * 4;
    return 0;
  }

  static threeOfAKind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var t;
    t = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t[d1 - 1]++;
    t[d2 - 1]++;
    t[d3 - 1]++;
    t[d4 - 1]++;
    t[d5 - 1]++;
    for (let i = 0; i < 6; i++) if (t[i] >= 3) return (i + 1) * 3;
    return 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    return 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }

  static fours(...p: number[]): number {
    var sum;
    sum = 0;
    for (let at = 0; at != 5; at++) {
      if (p[at] == 4) {
        sum += 4;
      }
    }
    return sum;
  }

  static fives(...dice: number[]): number {
    let s = 0;
    var i;
    for (i = 0; i < dice.length; i++) if (dice[i] == 5) s = s + 5;
    return s;
  }

  static sixes(...dice: number[]): number {
    let sum = 0;
    for (var at = 0; at < dice.length; at++) if (dice[at] == 6) sum = sum + 6;
    return sum;
  }
}
