//元交换函数,逆转指向关系
function reverse(a) {
    if(a.next) {a.next.next = a;
    a.next = null;}
}
//实现一个表节点
class ListNode {
    constructor(data){
        this.val = data;//数据区域
        this.next = null;//指针区域
    }
}

//实现一个链表的初始
class LinkedList {
    //构造函数（如果没有传入头节点，置空）
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
    //实现链表的一些方法
    //添加一个节点到表的末尾
    append(data) {
        let node = new ListNode(data);
        if(this.head == null) {
            this.head = node;
        }else {
            let cur = this.head
            //找到最后一个节点，并将新节点添到其末尾
            while(cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
        return true;
    }
    //计算节点个数的方法（但一般用size属性）
    tol(){
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    //没人指向的node1 node2 会被当成垃圾回收
    clear() {
        this.head = null
        return true;
    }
    //返回头节点引用
    getFirst() {
        return this.head;
    }
    //返回尾节点引用
    getLast() {
        let lastNode = this.head;
        if(lastNode){
            while(lastNode.next) {
            lastNode = lastNode.next; 
            }
        }
        return lastNode;
    }
    //删除特定值节点
    delete(data) {
        if(this.head == null) return false;
        // 如果头节点就是要删除的节点
        if (this.head.data === data) {
            this.head = this.head.next; // 更新头节点
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; // 跳过要删除的节点
                this.size--;
                return true;
            }
            current = current.next; // 继续遍历
        }
        return false;
    }
    print() {
        let node = this.head;
        if(node == null) return;
        while (node) {
            console.log(node.data);
            node = node.next
        }
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let head = new LinkedList(1,2,3,4)
var swapPairs = function(head) {
    if(head == null) return []
    if(head.next == null) return[head.val]//特判
    let node = []//node[0]是当前操作组的头节点，node[1]是下一组节点的引用
    node.push(head)
    //交换过程
    while(node[0].next) {
        //reverse之前保存下一组节点的位置
        node.push(node[0].next)
        reverse(node[0]);
        node.shift()
    }
};
swapPairs(head) 