import * as fs from 'fs';
import * as path from 'path';
import { isWinner, run } from '../run';

const inputPath = path.resolve(__dirname, '../content/input_test.txt');
const input = fs.readFileSync(inputPath, 'utf8');

describe('parts', () => {
  it('isWinner', () => {
    const board1 = [
      [1, 1, 1],
      ['x', 'x', 'x'],
      [1, 1, 1],
    ];

    expect(isWinner(board1)).toBe(true);

    const board2 = [
      [1, 'x', 1],
      [1, 'x', 1],
      [1, 'x', 1],
    ];

    expect(isWinner(board2)).toBe(true);

  });

  it('part-1', () => {
    const parts = run(input);
    const result = parts.part1();
    console.log('resultPart1:', result);
    expect(result).toBe(4512);
  });

  it('part-2', () => {
    const parts = run(input);
    const result = parts.part2();
    console.log('resultPart2:', result);
    expect(result).toBe(1924);
  });
});
