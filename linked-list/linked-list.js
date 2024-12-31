'use strict'

/** A node in a doubly linked list. */
class Node {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

/** A doubly linked list. */
export class LinkedList {
  #head = null
  #tail = null
  #length = 0

  /** Adds the specified value at the end of a list and returns the new length of the list. */
  push(value) {
    const newTail = new Node(value)
    if (this.#length === 0) {
      this.#head = newTail
    } else {
      newTail.prev = this.#tail
      this.#tail.next = newTail
    }
    this.#tail = newTail
    return ++this.#length
  }

  /** Removes the last entry in a list and returns it. If the list is empty, undefined is returned. */
  pop() {
    if (this.#length === 0) return undefined
    const val = this.#tail.data
    this.#length--
    if (this.#length === 0) {
      this.#head = null
      this.#tail = null
    } else {
      this.#tail = this.#tail.prev
      this.#tail.next = null
    }
    return val
  }

  /** Removes the first entry in a list and returns it. If the list is empty, undefined is returned. */
  shift() {
    if (this.#length === 0) return undefined
    const val = this.#head.data
    this.#length--
    if (this.#length === 0) {
      this.#head = null
      this.#tail = null
    } else {
      this.#head = this.#head.next
      this.#head.prev = null
    }
    return val
  }

  /** Adds the specified value at the front of a list and returns the new length of the list. */
  unshift(value) {
    const newHead = new Node(value)
    if (this.#length === 0) {
      this.#tail = newHead
    } else {
      newHead.next = this.#head
      this.#head.prev = newHead
    }
    this.#head = newHead
    return ++this.#length
  }

  /**
   * Removes the fist occurrence of the specified value from a list.
   * Returns true if the value was found and removed, false otherwise.
   */
  delete(value) {
    for (let curr = this.#head; curr !== null; curr = curr.next) {
      if (curr.data !== value) continue
      if (curr.prev === null) this.#head = curr.next
      else curr.prev.next = curr.next
      if (curr.next === null) this.#tail = curr.prev
      else curr.next.prev = curr.prev
      this.#length--
      return true
    }
    return false
  }

  /** Returns the number of elements in a list. */
  count() {
    return this.#length
  }
}
