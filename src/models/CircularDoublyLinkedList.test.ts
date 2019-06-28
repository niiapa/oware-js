import CircularDoublyLinkedList from './CircularDoublyLinkedList';
import Node from './Node';

describe('CircularDoublyLinkedList', () => {
	let list;

	describe('zero or one node', () => {
		beforeEach(() => {
			list = new CircularDoublyLinkedList();
		});

		test('can be created', () => {
			expect(list).toBeDefined();
		});

		test('can have one element wtesth prev and next pointing to each other', () => {
			const node = new Node(1);

			list.add(node);

			expect(list.head).toBe(node);
			expect(node.prev).toBe(node);
			expect(node.next).toBe(node);
			expect(list.length()).toEqual(1);
		});
	});

	describe('multiple nodes', () => {
		const nodeOne = new Node(1);
		const nodeTwo = new Node(2);
		const nodeThree = new Node(3);
		const nodeFour = new Node(4);

		beforeEach(() => {
			list = new CircularDoublyLinkedList();
			list.add(nodeOne)
				.add(nodeTwo)
				.add(nodeThree)
				.add(nodeFour);
		});

		test('gets the appropriate length', () => {
			expect(list.length()).toEqual(4);
		});

		test('can have four nodes', () => {
			expect(list.head).toBe(nodeOne);
			expect(list.head.prev).toBe(nodeFour);
			expect(list.head.next).toBe(nodeTwo);

			expect(nodeTwo.prev).toBe(nodeOne);
			expect(nodeTwo.next).toBe(nodeThree);

			expect(nodeThree.prev).toBe(nodeTwo);
			expect(nodeThree.next).toBe(nodeFour);

			expect(nodeFour.prev).toBe(nodeThree);
			expect(nodeFour.next).toBe(nodeOne);
		});

		test('can get a node at an index', () => {
			expect(list.get(0)).toBe(nodeOne);
			expect(list.get(2)).toBe(nodeThree);
			expect(() => list.get(-1)).toThrow();
			expect(() => list.get(4)).toThrow();
		});

		test('can remove a node from the list based on index', () => {
			list.remove(1);

			expect(list.head).toBe(nodeOne);
			expect(list.length()).toBe(3);

			expect(nodeOne.next).toBe(nodeThree);
			expect(nodeOne.prev).toBe(nodeFour);

			expect(nodeThree.prev).toBe(nodeOne);
			expect(nodeThree.next).toBe(nodeFour);

			expect(nodeFour.next).toBe(nodeOne);
			expect(nodeFour.prev).toBe(nodeThree);
		});

		test('can remove the head and have test re-assigned to the next node', () => {
			list.remove(0);

			expect(list.head).toBe(nodeTwo);
			expect(list.length()).toBe(3);

			expect(nodeTwo.next).toBe(nodeThree);
			expect(nodeTwo.prev).toBe(nodeFour);

			expect(nodeThree.prev).toBe(nodeTwo);
			expect(nodeThree.next).toBe(nodeFour);

			expect(nodeFour.next).toBe(nodeTwo);
			expect(nodeFour.prev).toBe(nodeThree);
		});
	});
});
