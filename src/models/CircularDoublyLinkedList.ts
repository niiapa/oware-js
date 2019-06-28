import Node from './Node';

export default class CircularDoublyLinkedList {
	head: Node | null = null;
	private _length: number = 0;

	constructor() {
		this.head = null;
	}

	// Add node to list
	add(node: Node): CircularDoublyLinkedList {
		// New/Empty Linked List
		if (this.head === null) {
			this.head = node;

			this.head.prev = node;
			this.head.next = node;
		} else {
			const tail = this.head.prev;

			node.prev = tail;
			node.next = this.head;
			tail.next = node;
			this.head.prev = node;
		}

		this._length++;

		return this;
	}

	// Get the node at an index
	get(index: number): Node {
		if (index >= 0 && index < this._length) {
			let node;
			let counter = 0;
			const iterator = this.values();

			while (counter <= index) {
				node = iterator.next().value;
				counter++;
			}

			return node;
		} else {
			throw RangeError('Index out of range!');
		}
	}

	// Remove node at index
	remove(index: number): CircularDoublyLinkedList {
		const node = this.get(index);

		if (this._length === 1) {
			this.head = null;
		} else {
			const prevNode = node.prev;
			const nextNode = node.next;

			prevNode.next = nextNode;
			nextNode.prev = prevNode;

			// Shift head to nextNode if it's being removed
			if (node === this.head) {
				this.head = nextNode;
			}
		}

		this._length--;

		return this;
	}

	// Values
	*values() {
		let node = this.head;

		do {
			yield node;
			node = node.next;
		} while (node !== this.head);
	}

	// Iterator
	[Symbol.iterator]() {
		return this.values();
	}

	// Length getter
	length() {
		return this._length;
	}
}
