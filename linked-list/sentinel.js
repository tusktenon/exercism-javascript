/**
 * An implementation using sentinel nodes.
 * Based on a very nice solution by [Mic75](https://exercism.org/tracks/javascript/exercises/linked-list/solutions/Mic75).
 */
'use strict'

class Node {
  constructor({ data = null, prev = null, next = null } = {}) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

export class LinkedList {
  #head = new Node()
  #tail = new Node()
  #length = 0
  constructor() {
    this.#head.next = this.#tail
    this.#tail.prev = this.#head
  }

  push(value) {
    const newTail = new Node({
      data: value,
      prev: this.#tail.prev,
      next: this.#tail,
    })
    this.#tail.prev.next = newTail
    this.#tail.prev = newTail
    return ++this.#length
  }

  pop() {
    const val = this.#tail.prev.data
    if (this.#length > 0) {
      this.#tail.prev.prev.next = this.#tail
      this.#tail.prev = this.#tail.prev.prev
      this.#length--
    }
    return val
  }

  shift() {
    const val = this.#head.next.data
    if (this.#length > 0) {
      this.#head.next.next.prev = this.#head
      this.#head.next = this.#head.next.next
      this.#length--
    }
    return val
  }

  unshift(value) {
    const newHead = new Node({
      data: value,
      prev: this.#head,
      next: this.#head.next,
    })
    this.#head.next.prev = newHead
    this.#head.next = newHead
    return ++this.#length
  }

  delete(value) {
    for (let curr = this.#head.next; curr.next !== null; curr = curr.next) {
      if (curr.data === value) {
        curr.next.prev = curr.prev
        curr.prev.next = curr.next
        this.#length--
        return true
      }
    }
    return false
  }

  count() {
    return this.#length
  }
}
