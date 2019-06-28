export default class Node {
	data: any;
	prev: Node;
	next: Node;

	constructor(data, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}
