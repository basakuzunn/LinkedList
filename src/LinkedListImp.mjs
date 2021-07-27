import LinkedList from "./LinkedList.mjs";
import Node from "./Node.mjs"

var data1 ="elma";
var data2 = "armut";
var data3 = "kiraz";
var data4 = "ayva";
var data5 ="ekmek";
var data6 = "kurabiye";
var data7 = "reçel";

var linkedList = new LinkedList();

linkedList.addFirst(data1);
linkedList.addFirst(data2);
linkedList.addLast(data3);



console.log( "current list is:" + linkedList.toArray())
console.log("index of 2:"+linkedList.indexOf(data2))
console.log("current size:"+linkedList.getSize(data2))
console.log(linkedList.contains(data4))
console.log(linkedList.reverse())

linkedList.removeFirst()
console.log("current list after remove:"+ linkedList.toArray())

linkedList.removeLast()
console.log("current list after remove:"+ linkedList.toArray())