/*
 * Author: Luis Aleman
 */

/**
 * @method Node
 * @param content
 * @param next
 * @constructor
 */
function Node(content, next) {
    'use strict';
    this.content = content;
    this.next = next;
}

/**
 * A linked list, also known as a stack
 * @returns {LinkedList}
 * @constructor
 */
function LinkedList() {
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
    this._top = undefined;

    return this;
}

LinkedList.prototype = {
    /**
     * Add a new Node at the top of the LinkedList.
     * @method push
     * @param content
     * @returns {LinkedList}
     * @chainable
     */
    push: function (content) {
        'use strict';
        // Create new node, where next is undefined, and previous is _tail
        this._top = new Node(content, this._top);

        // No matter the content, this method will always add a Node
        this._length += 1;

        return this;
    },

    /**
     * Returns the content at the top of the LinkedList without removing it.
     * @method peek
     * @returns {Node|undefined}
     */
    peek: function () {
        'use strict';
        return this._top.content;
    },

    /**
     * Remove the top Node of the LinkedList, and return that Node.
     * @method pop
     * @returns {Node|undefined}
     */
    pop: function () {
        'use strict';
        if (this._length === 0) {
            // Empty list, short circuit
            return undefined;
        } else {
            var node = this._top;
            this._top = node.next;
            this._length -= 1;
            return node.content;
        }
    }
};