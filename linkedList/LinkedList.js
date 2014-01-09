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
     * Add a new Node at the top of the list.
     * @method push
     * @param content
     * @returns {LinkedList}
     * @chainable
     */
    push: function (content) {
        'use strict';
        // Create new node, where next is undefined
        this._top = new Node(content, this._top);

        // No matter the content, this method will always add a Node
        this._length += 1;

        return this;
    },

    /**
     * Returns the content at the top of the list without removing it.
     * @method peek
     * @returns {Node|undefined}
     */
    peek: function () {
        'use strict';
        return this._top.content;
    },

    /**
     * Remove the top Node of the list, and return that Node.
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
    },

    /**
     * Execute the provided callback for each node in this list
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
                node = this._top;
            while (index < length) {
                if (callback.call(thisArg, node.content, index, this) === breaker) { break; }
                node = node.next;
                index += 1;
            }
        }
    },

    /**
     * Copy the list to a new array.
     * @method toArray
     * @returns {Array}
     */
    toArray: function () {
        'use strict';
        var arr = [];
        this.forEach(function (content) {
            arr.push(content);
        });
        return arr;
    },

    /**
     * Remove all nodes from the list
     * @method clear
     * @returns {LinkedList}
     * @chainable
     */
    clear: function () {
        'use strict';
        while(this._length) { this.pop(); }
        return this;
    }
};
