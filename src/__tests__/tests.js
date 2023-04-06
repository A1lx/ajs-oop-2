import Character from '../Character';

test('create class Character', () => {
  const expected = {
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Character('Robin', 'Bowman', 100, 25, 25)).toEqual(expected);
});

test('testing name error', () => {
  expect(() => { new Character('Ro', 'Bowman', 25, 25); }).toThrow(new Error('Длина имени должна быть от 3 до 10 символов'));
});

test('testing type error', () => {
  expect(() => { new Character('Hero', 'Knight', 25, 25); }).toThrow(new Error('Неизвестный класс персонажа'));
});

test('levelUp test', () => {
  const char = new Character('Robin', 'Bowman', 35, 25, 25);
  char.levelUp();
  const expected = {
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(char).toEqual(expected);
});

test('corpse level up test', () => {
  expect(() => {
    const char = new Character('Robin', 'Bowman', 0, 25, 25);
    char.levelUp();
  }).toThrow(new Error('Нельзя повысить уровень. Персонаж погиб!'));
});

test('damage test', () => {
  const char = new Character('Robin', 'Bowman', 100, 25, 25);
  char.damage(30);
  const expected = {
    name: 'Robin',
    type: 'Bowman',
    health: 77.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(char).toEqual(expected);
});
