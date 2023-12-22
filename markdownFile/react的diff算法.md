其实 diff 算法的核心就是复用节点，通过一一对比也好，通过 map 查找也好，都是为了找到可复用的节点，移动过来。然后剩下的该删删该增增。

在 16 之后，为了优化性能，会先把 vdom 转换成 fiber，也就是从树转换成链表，然后再渲染。整体渲染流程分成了两个阶段：

render 阶段：从 vdom 转换成 fiber，并且对需要 dom 操作的节点打上 effectTag 的标记
commit 阶段：对有 effectTag 标记的 fiber 节点进行 dom 操作，并执行所有的 effect 副作用函数。

从 vdom 转成 fiber 的过程叫做 reconcile（调和），这个过程是可以打断的，由 scheduler 调度执行。

第一次渲染不需要 diff，直接 vdom 转 fiber。

再次渲染的时候，会产生新的 vdom，这时候要和之前的 fiber 做下对比，决定怎么产生新的 fiber，对可复用的节点打上修改的标记，剩余的旧节点打上删除标记，新节点打上新增标记。

链接：https://juejin.cn/post/7131741751152214030
