// The code is from https://github.com/liamcain/obsidian-periodic-notes

export const wrapAround = (value: number, size: number): number => {
  return ((value % size) + size) % size;
};
