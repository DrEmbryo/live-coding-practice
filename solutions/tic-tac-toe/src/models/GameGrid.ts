type Row = [string | undefined];
type Grid = Row[];

export class GameGrid {
  public grid: Grid;

  constructor(size: [number, number]) {
    const grid: Grid = [];
    for (let index = 0; index < size[0]; index++) {
      grid.push([...Array(size[0])] as Row);
    }

    this.grid = grid;
  }

  public updateGrid(x: number, y: number, player: string) {
    if (this.grid[x][y] === undefined) {
      this.grid[x][y] = player;
      return true;
    } else return false;
  }

  public checkWinCon() {
    return (
      this.checkVertical() || this.checkHorizontal() || this.checkDiagonal()
    );
  }

  public resetGrid() {
    this.grid = this.grid.map((row) => row.map(() => undefined)) as Grid;
  }

  private checkHorizontal() {
    for (let i = 0; i < this.grid.length; i++) {
      const tmp = [];
      for (let j = 0; j < this.grid.length; j++) {
        if (this.grid[i][j] !== undefined) {
          tmp.push(this.grid[i][j]);
        }
      }
      if (tmp.length === this.grid.length && new Set(tmp).size === 1)
        return tmp[0] as string;
    }
    return null;
  }

  private checkVertical() {
    for (let j = 0; j < this.grid.length; j++) {
      const tmp = [];
      for (let i = 0; i < this.grid.length; i++) {
        if (this.grid[i][j] !== undefined) {
          tmp.push(this.grid[i][j]);
        }
      }
      if (tmp.length === this.grid.length && new Set(tmp).size === 1)
        return tmp[0] as string;
    }
    return null;
  }

  private checkDiagonal() {
    const tmp = [];
    const tmp1 = [];
    for (let left = 0; left < this.grid.length; left++) {
      const right = this.grid.length - 1 - left;
      if (this.grid[left][left] !== undefined) {
        tmp.push(this.grid[left][left]);
      }
      if (this.grid[left][right] !== undefined) {
        tmp1.push(this.grid[left][right]);
      }
    }

    if (tmp.length === this.grid.length && new Set(tmp).size === 1)
      return tmp[0] as string;
    if (tmp1.length === this.grid.length && new Set(tmp1).size === 1)
      return tmp1[0] as string;
    return null;
  }
}
