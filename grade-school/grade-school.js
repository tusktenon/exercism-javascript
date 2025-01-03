export class GradeSchool {
  #students = new Map()

  roster() {
    const r = {}
    for (const [s, y] of this.#students) {
      r[y] = r[y] ?? []
      r[y].push(s)
    }
    for (const grade in r) {
      r[grade].sort()
    }
    return r
  }

  add(student, year) {
    if (this.#students.has(student)) {
      console.log(`Student "${student}" already registered.`)
    }
    this.#students.set(student, year)
  }

  grade(year) {
    const g = []
    for (const [s, y] of this.#students) {
      if (y === year) {
        g.push(s)
      }
    }
    return g.sort()
  }
}
