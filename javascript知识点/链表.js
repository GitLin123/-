//实现一个表节点
class ListNode {
    constructor(data){
        this.val = data;//数据区域
        this.next = null;//指针区域
    }
}

let node = new ListNode('我是数据域');
console.log(node)//打印结果  ListNode { data: '我是数据域', next: null }
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

//创建两个节点
let node1 = new ListNode('我是节点1');
let node2 = new ListNode('我是节点2');
//链接两个节点
node1.next = node2;
//传入头节点的引用，初始化链表
let link = new LinkedList(node1)
//结果
console.log(link)
//测试链表的各个方法
console.log(link.tol())//结果为2

//新初始化链表的方法
let link1 = new LinkedList()//初始化一个空链表
link1.append('我是新方法的节点1')
link1.append('我是新方法的节点2')
console.log(link1)
//获取头尾节点
console.log(`头节点:${link1.getFirst().data}  尾节点:${link1.getLast().data}`);
link1.append('我是新方法的节点3')
link1.print()
//删除一个节点
link1.delete('我是新方法的节点3')
link1.print()

