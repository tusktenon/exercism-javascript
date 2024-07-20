export class Matrix {
  constructor(string) {
    this.rows = string.split('\n').map(row => row.split(' ').map(Number))
    this.columns = this.rows[0].map((_, i) => this.rows.map(row => row[i]))
  }
}
