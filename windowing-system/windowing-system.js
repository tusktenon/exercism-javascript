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
  programWindow.size.width = 400
  programWindow.size.height = 300
  programWindow.position.x = 100
  programWindow.position.y = 150
  return programWindow
}
