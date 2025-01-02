/**
 * My interpretation of a very elegant solution (using sentinel nodes) by
 * [jchunky](https://exercism.org/tracks/javascript/exercises/linked-list/solutions/jchunky).
 */
'use strict'

export class LinkedList {
  #head = {}
  #tail = {}
  #length = 0

  constructor() {
    this.#head.next = this.#tail
    this.#tail.prev = this.#head
  }

  /**
   * Inserts a new node containing the given value into the list, following
   * the given node, and returns the new length of the list.
   */
  #insert(value, atNode) {
    const newNode = { data: value, prev: atNode, next: atNode.next }
    atNode.next.prev = newNode
    atNode.next = newNode
    return ++this.#length
  }

  /**
   * Removes the given node from the list and returns its stored value.
   * If the list is empty, undefined is returned and the list is not modified.
   */
  #remove(node) {
    if (this.#length === 0) return undefined
    const val = node.data
    node.prev.next = node.next
    node.next.prev = node.prev
    this.#length--
    return val
  }

  /** Adds the specified value at the end of a list and returns the new length of the list. */
  push(value) {
    return this.#insert(value, this.#tail.prev)
  }

  /** Removes the last entry in a list and returns it. If the list is empty, undefined is returned. */
  pop() {
    return this.#remove(this.#tail.prev)
  }

  /** Adds the specified value at the front of a list and returns the new length of the list. */
  unshift(value) {
    return this.#insert(value, this.#head)
  }

  /** Removes the first entry in a list and returns it. If the list is empty, undefined is returned. */
  shift() {
    return this.#remove(this.#head.next)
  }

  /**
   * Removes the fist occurrence of the specified value from a list.
   * Returns true if the value was found and removed, false otherwise.
   */
  delete(value) {
    for (let curr = this.#head.next; curr !== this.#tail; curr = curr.next) {
      if (curr.data === value) {
        this.#remove(curr)
        return true
      }
    }
    return false
  }

  /** Returns the number of elements in a list. */
  count() {
    return this.#length
  }
}
