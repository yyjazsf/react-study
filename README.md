# react-study
start react code


### 注意点

* JSX 不是 HTML
* 注释
```jsx
ReactDOM.render(
  <div class="slideIn">
    <p class="emphasis">Gabagool!</p>
    {/* I am a child comment */}
    <Label/>
  </div>,
  document.querySelector("#container")
);
```

```jsx
ReactDOM.render(
  <div class="slideIn">
    <p class="emphasis">Gabagool!</p>
    <Label
      /* This comment
         goes across
         multiple lines */
         className="colorCard" // end of line
    />
  </div>,
  document.querySelector("#container")
);
```

* 必须确保 HTML 标记是小写字母：
* JSX 可以出现在任何地方
```jsx
var swatchComponent = <Swatch color="#2F004F"></Swatch>;

ReactDOM.render(
  <div>
    {swatchComponent}
  </div>,
  document.querySelector("#container")
);
```

