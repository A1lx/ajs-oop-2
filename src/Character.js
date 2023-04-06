export default class Character {
  constructor(name, type, health, attack, defence) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === 'string' && name.length > 2 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 3 до 10 символов');
    }

    if (typeArr.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неизвестный класс персонажа');
    }

    this.health = health;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень. Персонаж погиб!');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
