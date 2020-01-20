import Entity from '../Entity';
import Box from '../Box';
import Game from '../Game';
// NOT USED
export default class Obstacle extends Entity {
  render() {}

  tick() {}

  static fromBox(game: Game, box: Box) {
    return new Obstacle(game, box.position, box.size);
  }
}
