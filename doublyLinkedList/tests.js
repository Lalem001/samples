/*global DoublyLinkedList:false */
$(document).ready(function () {
    'use strict';
    test('Node Constructor', function () {
        var node = new Node('content', 'next', 'prev');

        strictEqual(node.content, 'content');
        strictEqual(node.next, 'next');
        strictEqual(node.prev, 'prev');
    });

    test('DoublyLinkedList Constructor', function () {
        var list = new DoublyLinkedList();

        strictEqual(list._length, 0);
        strictEqual(list._head, undefined);
        strictEqual(list._tail, undefined);
    });

    test('DoublyLinkedList Push', function () {
        var list = new DoublyLinkedList();

        list.push(1);
        strictEqual(list._length, 1);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 1);
        strictEqual(list._head.next, undefined);

        strictEqual(list._tail.prev, undefined);
        strictEqual(list._tail.content, 1);
        strictEqual(list._tail.next, undefined);

        list.push(2);
        strictEqual(list._length, 2);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 1);
        strictEqual(list._head.next.content, 2);

        strictEqual(list._tail.prev.content, 1);
        strictEqual(list._tail.content, 2);
        strictEqual(list._tail.next, undefined);

        list.push(3);
        strictEqual(list._length, 3);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 1);
        strictEqual(list._head.next.content, 2);

        strictEqual(list._tail.prev.content, 2);
        strictEqual(list._tail.content, 3);
        strictEqual(list._tail.next, undefined);
    });

    test('DoublyLinkedList chain Push', function () {
        var list = new DoublyLinkedList();

        list.push(1).push(2).push(3);
        strictEqual(list._length, 3);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 1);
        strictEqual(list._head.next.content, 2);

        strictEqual(list._tail.prev.content, 2);
        strictEqual(list._tail.content, 3);
        strictEqual(list._tail.next, undefined);
    });

    test('DoublyLinkedList Pop', function () {
        var list = new DoublyLinkedList(),
            result;

        list.push(1).push(2).push(3);
        result = list.pop();
        strictEqual(list._length, 2);
        strictEqual(result, 3);

        result = list.pop();
        strictEqual(list._length, 1);
        strictEqual(result, 2);

        result = list.pop();
        strictEqual(list._length, 0);
        strictEqual(result, 1);
        strictEqual(list._head, undefined);
        strictEqual(list._tail, undefined);

        result = list.pop();
        strictEqual(list._length, 0);
        strictEqual(result, undefined);
        strictEqual(list._head, undefined);
        strictEqual(list._tail, undefined);
    });

    test('DoublyLinkedList Shift', function () {
        var list = new DoublyLinkedList(),
            result;

        list.push(4).push(5).push(6);

        result = list.shift();
        strictEqual(list._length, 2);
        strictEqual(result, 4);

        result = list.shift();
        strictEqual(list._length, 1);
        strictEqual(result, 5);

        result = list.shift();
        strictEqual(list._length, 0);
        strictEqual(result, 6);
        strictEqual(list._head, undefined);
        strictEqual(list._tail, undefined);

        result = list.shift();
        strictEqual(list._length, 0);
        strictEqual(result, undefined);
        strictEqual(list._head, undefined);
        strictEqual(list._tail, undefined);
    });

    test('DoublyLinkedList Unshift', function () {
        var list = new DoublyLinkedList();

        list.unshift(7);
        strictEqual(list._length, 1);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 7);
        strictEqual(list._head.next, undefined);

        strictEqual(list._tail.prev, undefined);
        strictEqual(list._tail.content, 7);
        strictEqual(list._tail.next, undefined);

        list.unshift(8);
        strictEqual(list._length, 2);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 8);
        strictEqual(list._head.next.content, 7);

        strictEqual(list._tail.prev.content, 8);
        strictEqual(list._tail.content, 7);
        strictEqual(list._tail.next, undefined);

        list.unshift(9);
        strictEqual(list._length, 3);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 9);
        strictEqual(list._head.next.content, 8);

        strictEqual(list._tail.prev.content, 8);
        strictEqual(list._tail.content, 7);
        strictEqual(list._tail.next, undefined);
    });

    test('DoublyLinkedList chain Unshift', function () {
        var list = new DoublyLinkedList();

        list.unshift(7).unshift(8).unshift(9);
        strictEqual(list._length, 3);

        strictEqual(list._head.prev, undefined);
        strictEqual(list._head.content, 9);
        strictEqual(list._head.next.content, 8);

        strictEqual(list._tail.prev.content, 8);
        strictEqual(list._tail.content, 7);
        strictEqual(list._tail.next, undefined);
    });

    test('DoublyLinkedList forEach', function () {
        var list = new DoublyLinkedList(),
            result = [];

        list.unshift(7).unshift(8).unshift(9);
        list.forEach(function (content) {
            result.push(content);
        });
        strictEqual(result.length, 3);
        strictEqual(result[0], 9);
        strictEqual(result[1], 8);
        strictEqual(result[2], 7);
    });

    test('DoublyLinkedList forEachRight', function () {
        var list = new DoublyLinkedList(),
            result = [];

        list.unshift(7).unshift(8).unshift(9);
        list.forEachRight(function (content) {
            result.push(content);
        });
        strictEqual(result.length, 3);
        strictEqual(result[0], 7);
        strictEqual(result[1], 8);
        strictEqual(result[2], 9);
    });
});
