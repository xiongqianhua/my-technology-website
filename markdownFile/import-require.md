# import和require的区别？

* 参考https://www.cnblogs.com/wenxuehai/p/14246989.html

在es6中import 引入export导出的模块
在node模块中使用moudle.export导出的模块，用require去导入


两者区别
require在运行时调用，理论上可以放在代码的任何地方，例如react中可以用require去图片引入的方式

import在编译时调用，所有只能在文件开头调用

require 是赋值过程，通过require引入基础数据类型时，属于复制该变量。通过require引入复杂数据类型时，属于浅拷贝该对象。
import 是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require
