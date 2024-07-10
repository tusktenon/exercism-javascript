// @ts-check

// Define `Size` using prototype syntax
export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

// Define `Position` using prototype syntax
export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function (newX, newY) {
  this.x = newX
  this.y = newY
}

// Define `ProgramWindow` using class syntax
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    const newWidth = Math.min(
      Math.max(newSize.width, 1),
      this.screenSize.width - this.position.x,
    )
    const newHeight = Math.min(
      Math.max(newSize.height, 1),
      this.screenSize.height - this.position.y,
    )
    this.size.resize(newWidth, newHeight)
  }

  move(newPosition) {
    const newX = Math.min(
      Math.max(newPosition.x, 0),
      this.screenSize.width - this.size.width,
    )
    const newY = Math.min(
      Math.max(newPosition.y, 0),
      this.screenSize.height - this.size.height,
    )
    this.position.move(newX, newY)
  }
}

export function changeWindow(programWindow) {
  // Select an implementation:
  return changeWindowDirect(programWindow)
  // return changeWindowChecked(programWindow)
}

// This implementation does no bounds checking and so runs slightly faster.
// It relies on public access to `programWindow`'s fields; in production code,
// a better design would be to make the `ProgramWindow` fields private and have
// `changeWindow` as a static method of the class.
function changeWindowDirect(programWindow) {
  programWindow.size.width = 400
  programWindow.size.height = 300
  programWindow.position.x = 100
  programWindow.position.y = 150
  return programWindow
}

// This implementation reuses the `resize` and `move` methods.
// For a fixed screen size, it does several unnecessary comparisons and
// assignments, making it a little slower than the direct implementation.
function changeWindowChecked(programWindow) {
  // Move to the top-left corner first so it can always resize
  programWindow.move(new Position())

  // Now resize, then reposition
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))

  return programWindow
}
