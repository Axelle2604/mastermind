import { changeColorTab, changeAuditorsTab } from './MastermindRow';

test('Should return a new colors tab.', () => {
  expect(
    changeColorTab(1)({
      tabColors: ['white', 'white', 'white', 'white', 'white'],
    })
  ).toEqual({
    tabColors: ['white', '#3498db', 'white', 'white', 'white'],
  });
});

test('Should return a new auditors tab.', () => {
  expect(
    changeAuditorsTab(1, 'green')({
      tabAuditors: ['white', 'white', 'white', 'white', 'white'],
    })
  ).toEqual({
    tabAuditors: ['white', 'green', 'white', 'white', 'white'],
  });
});
