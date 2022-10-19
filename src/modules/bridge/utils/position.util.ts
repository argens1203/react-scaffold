import { Position } from '../enums';

export function getShortForm(pos: Position) {
    switch (pos) {
        case Position.NORTH:
            return 'N';
        case Position.EAST:
            return 'E';
        case Position.SOUTH:
            return 'S';
        case Position.WEST:
            return 'W';
        default:
            throw Error;
    }
}
