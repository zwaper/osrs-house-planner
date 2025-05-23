import { Direction, rotateClockwise } from './Direction';
import type { Door } from './Door';
import type { Floor } from './Floor';
import type { FurnitureType } from './FurnitureType';
import type { RoomType } from './RoomType';

export interface Room {
	floor: Floor;
	x: number;
	y: number;
	type: RoomType;
	orientation: Direction;
	hotspots: (FurnitureType | null)[];
}

export const getRotatedDoors = (room: Room | null): Door[] => {
	return room?.type.doors.map((door) => rotateClockwise(door, room.orientation)) || [];
};

export const createRoom = (floor: Floor, x: number, y: number, type: RoomType): Room => {
    return {
        floor,
        x,
        y,
        type,
        orientation: Direction.North,
        hotspots: Array(type.hotspots.length).fill(null)
    };
};
