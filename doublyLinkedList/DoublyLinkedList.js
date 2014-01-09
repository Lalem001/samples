/*
 * Author: Luis Aleman
 */

/**
 * @method node
 * @constructor
 * @param content {*}
 * @param [next] {Node|undefined} Next node reference, or null
 * @param [prev] {Node|undefined} Previous node reference, or null
 * @returns {Node}
 */
function Node (content, next, prev) {
    'use strict';
    this.content = content;
    this.next = next;
    this.prev = prev;
    return this;
}

/**
 * @method DoublyLinkedList
 * @returns {DoublyLinkedList}
 * @constructor
 */
function DoublyLinkedList() {
    'use strict';
    /**
     * Count of nodes in list
     * @property _length
     * @type {number}
     * @private
     */
    this._length = 0;

    /**
     * Reference to the head node
     * @property _head
     * @type {null}
     * @private
     */
    this._head = undefined;

    /**
     * reference to the tail node
     * @property _tail
     * @type {null}
     * @private
     */
    this._tail = undefined;

    return this;
}

DoublyLinkedList.prototype = {
    /**
     * Add a new Node at the end of the DoublyLinkedList.
     * @method push
     * @param content
     * @returns {DoublyLinkedList}
     * @chainable
     */
    push: function (content) {
        'use strict';
        // Create new node, where next is undefined, and previous is _tail
        var node = new Node(content, undefined, this._tail);

        if (this._length === 0) {
            this._head = this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }

        // No matter the content, this method will always add a Node
        this._length += 1;

        return this;
    },

    /**
     * Add a new Node at the beginning of the DoublyLinkedList.
     * @method unshift
     * @param content
     * @returns {DoublyLinkedList}
     * @chainable
     */
    unshift: function (content) {
        'use strict';
        // Create new node, where next is _head, and previous is undefined
        var node = new Node(content, this._head, undefined);

        if (this._length === 0) {
            this._head = this._tail = node;
        } else {
            this._head.prev = node;
            this._head = node;
        }

        // No matter the content, this method will always add a Node
        this._length += 1;

        return this;
    },

    /**
     * Remove the last Node of the DoublyLinkedList, and return that Node.
     * @method pop
     * @returns {Node|undefined}
     */
    pop: function () {
        'use strict';
        if (this._length === 0) {
            // Empty list, short circuit
            return undefined;
        } else {
            var node = this._tail;

            this._tail = node.prev;
            this._length -= 1;

            if (this._length === 0) {
                this._head = this._tail;
            }

            return node.content;
        }
    },

    /**
     * Remove the first Node of the DoublyLinkedList, and return that Node.
     * @method shift
     * @returns {Node|undefined}
     */
    shift: function () {
        'use strict';
        if (this._length === 0) {
            // Empty list, short circuit
            return undefined;
        } else {
            var node = this._head;

            this._head = node.next;
            this._length -= 1;

            if (this._length === 0) {
                this._tail = this._head;
            }

            return node.content;
        }
    },

    /**
     * Execute the provided callback for each node in this DoublyLinkedList
     * @method forEach
     * @param callback {function}
     * @param [thisArg]
     */
    forEach: function (callback, thisArg) {
        'use strict';
        if (this._length > 0) {
            var index = 0,
                length = this._length,
                breaker = false,
                node = this._head;
            while (index < length) {
                if (callback.call(thisArg, node.content, index, this) === breaker) { break; }
                node = node.next;
                index += 1;
            }
        }
    },

    /**
     * Execute the provided callback for each node in this DoublyLinkedList, starting from the tail
     * @method forEach
     * @param callback {function}
     * @param [thisArg]
     */
    forEachRight: function (callback, thisArg) {
        'use strict';
        if (this._length > 0) {
            var breaker = false,
                length = this._length,
                node = this._tail;
            while (length) {
                if (callback.call(thisArg, node.content, length, this) === breaker) { break; }
                node = node.prev;
                length -= 1;
            }
        }
    }
};
