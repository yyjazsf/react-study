/**
 * 
 */

// 1. 只能返回一个根节点
// 2. 不能指定 inline CSS   只能style={变量}
// 3. 保留关键字和 className  break, case, class, catch, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield
// https://facebook.github.io/react/docs/tags-and-attributes.html
// 4.  {/* I am a child comment */}  {// I am a child comment }  如果你指定一个注释作为一个标记的子节点，那么你必须用 { 和 } 把注释包起来
// 5.  JSX 不是 HTML

document.getElementById('main').innerText ='看 7.jsx 的注释';
