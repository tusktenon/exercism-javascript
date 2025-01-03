export class GradeSchool {
  #students = {}

  roster() {
    const r = {}
    for (const [s, y] of Object.entries(this.#students)) {
      r[y] = r[y] ?? []
      r[y].push(s)
    }
    for (const grade of Object.values(r)) {
      grade.sort()
    }
    return r
  }

  add(student, year) {
    this.#students[student] = year
  }

  grade(year) {
    return Object.entries(this.#students)
      .flatMap(([s, y]) => (y === year ? [s] : []))
      .sort()
  }

  // An imperative (loop-based) implementation of grade, for comparison.
  gradeAlt(year) {
    const g = []
    for (const [s, y] of Object.entries(this.#students)) {
      if (y === year) {
        g.push(s)
      }
    }
    return g.sort()
  }
}
