var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var node = new ListNode(value);
        if (!this.rear) {
            this.front = node;
            this.rear = node;
        }
        else {
            this.rear.next = node;
            this.rear = node;
        }
        return ++this.size;
    };
    Queue.prototype.dequeue = function () {
        if (this.front === null)
            return null;
        var temp = this.front;
        if (this.front === this.rear) {
            this.rear = null;
        }
        this.front = this.front.next;
        this.size--;
        return temp.value;
    };
    Queue.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Queue.prototype.print = function () {
        var elements = [];
        var current = this.front;
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" "));
    };
    return Queue;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        var newNode = new ListNode(value);
        newNode.next = this.top;
        this.top = newNode;
        return ++this.size;
    };
    Stack.prototype.pop = function () {
        if (this.top === null)
            return null;
        var poppedItem = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedItem;
    };
    Stack.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return Stack;
}());
function reverseQueue(queue) {
    var stack = new Stack();
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }
    while (!stack.isEmpty()) {
        queue.enqueue(stack.pop());
    }
    return queue;
}
// main program
function main() {
    var readline = require("readline");
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter space-separated integers representing the elements of the queue: ", function (input) {
        var arr = input.trim().split(" ").map(Number);
        var queue = new Queue();
        arr.forEach(function (element) { return queue.enqueue(element); });
        var reversedQueue = reverseQueue(queue);
        console.log('Reversed Queue:');
        reversedQueue.print();
        rl.close();
    });
}
main();
