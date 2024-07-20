export class Matrix {
  constructor(string) {
    this.rows = string
      .split('\n')
      .map(rowString =>
        rowString.split(' ').map(elementString => Number(elementString)),
      )

    this.columns = []
    if (this.rows.length !== 0) {
      for (let j = 0; j < this.rows[0].length; j++) {
        const col = []
        for (let i = 0; i < this.rows.length; i++) {
          col.push(this.rows[i][j])
        }
        this.columns.push(col)
      }
    }
  }
}
