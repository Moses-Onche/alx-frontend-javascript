import ClassRoom from './0-classroom';

function initializeRooms() {
  const classList = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return classList;
}

export default initializeRooms;
