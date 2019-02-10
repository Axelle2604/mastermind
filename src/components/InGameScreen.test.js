import { incrementIndexRowToGuess } from './InGameScreen.js';

test('Should increment a value.', () => {
  expect(
    incrementIndexRowToGuess({
      indexRowToGuess: 1,
    })
  ).toEqual({
    indexRowToGuess: 2,
  });
});
