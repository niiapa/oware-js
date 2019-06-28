import Node from './Node';

describe('Node', () => {
	it('can be created with only data', () => {
		const node = new Node(1);

		expect(node.data).toBe(1);
		expect(node.prev).toBeNull();
		expect(node.next).toBeNull();
	});

	it('can be created with data and prev', () => {
		const head = new Node(1);
		const node = new Node(2, head);

		expect(node.data).toBe(2);
		expect(node.prev).toBe(head);
		expect(node.next).toBeNull();
	});

	it('can be created with data and next', () => {
		const head = new Node(1);
		const node = new Node(2, null, head);

		expect(node.data).toBe(2);
		expect(node.prev).toBeNull();
		expect(node.next).toBe(head);
	});

	it('can be created with data, next, and prev', () => {
		const head = new Node(1);
		const node = new Node(2, head, head);

		expect(node.data).toBe(2);
		expect(node.prev).toBe(head);
		expect(node.next).toBe(head);
	});
});
