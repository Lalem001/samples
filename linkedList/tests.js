/*global LinkedList:false */
$(document).ready(function () {
    'use strict';
    test('Node Constructor', function () {
        var node = new Node('content', 'next');

        strictEqual(node.content, 'content');
        strictEqual(node.next, 'next');
    });

    test('LinkedList Constructor', function () {
        var list = new LinkedList();

        strictEqual(list._length, 0);
        strictEqual(list._top, undefined);
    });

    test('LinkedList Push', function () {
        var list = new LinkedList();

        list.push(1);
        strictEqual(list._length, 1);
        strictEqual(list._top.content, 1);
        strictEqual(list._top.next, undefined);

        list.push(2);
        strictEqual(list._length, 2);
        strictEqual(list._top.content, 2);
        strictEqual(list._top.next.content, 1);

        list.push(3);
        strictEqual(list._length, 3);
        strictEqual(list._top.content, 3);
        strictEqual(list._top.next.content, 2);
    });

    test('LinkedList chain Push', function () {
        var list = new LinkedList();

        list.push(1).push(2).push(3);
        strictEqual(list._length, 3);
        strictEqual(list._top.content, 3);
        strictEqual(list._top.next.content, 2);
        strictEqual(list._top.next.next.content, 1);
    });

    test('linkedList Peek', function () {
        var list = new LinkedList(),
            result;

        list.push(1);
        result = list.peek();
        strictEqual(list._length, 1);
        strictEqual(result, 1);
    });

    test('LinkedList Pop', function () {
        var list = new LinkedList(),
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
        strictEqual(list._top, undefined);

        result = list.pop();
        strictEqual(list._length, 0);
        strictEqual(result, undefined);
        strictEqual(list._top, undefined);
    });
});
