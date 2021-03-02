// https://observablehq.com/@mootari/mutable-forms@610
import define1 from "./e93997d5089d7165@2303.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Mutable Forms

Mutate form widgets from the [Inputs notebook](https://beta.observablehq.com/@jashkenas/inputs) by Jeremy Ashkenas.
`
)});
  main.variable(observer("mutableForm")).define("mutableForm", ["html","linkProperties","HTMLInputElement","RadioNodeList","Event"], function(html,linkProperties,HTMLInputElement,RadioNodeList,Event){return(
function mutableForm(form) {
  const view = html`<div>${form}`;
  linkProperties(form, view, ['output'], ['value']);
  view.form = form;
  const input = form.input;
  const setBoxes = (n, v) => {
    const checked = new Set(v);
    n.forEach(n => n.checked = checked.has(n.value));
  };
  
  const inputType = input instanceof HTMLInputElement ? input.type : null;
  const eventName = input instanceof RadioNodeList || inputType === 'checkbox' ? 'change' : 'input';
  const setValue = input instanceof RadioNodeList && input[0].type === 'checkbox'
    ? setBoxes
    : inputType === 'checkbox'
      ? (n, v) => {n.checked = !!v}
      : (n, v) => {n.value = v};
  
  Object.defineProperty(view, 'value', {
    enumerable: true,
    get: () => form.value,
    set: v => {
      setValue(input, v);
      form.dispatchEvent(new Event(eventName, {bubbles: true}));
    }
  });
  
  return view;
}
)});
  main.variable(observer("linkProperties")).define("linkProperties", function(){return(
function linkProperties(source, target, attribs = [], exclude = []) {
  const props = Object.keys(source).filter(k => !exclude.includes(k));
  for(let k of attribs) if(source.hasAttribute(k) && !props.includes(k)) props.push(k);
  for(let k of props) {
    Object.defineProperty(target, k, {
      enumerable: true,
      get: () => source[k],
      set: v => source[k] = v
    });
  }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Checkbox
Note: Mutating cells must pass an array of **all** checked values.
`
)});
  main.variable(observer("viewof test_checkbox")).define("viewof test_checkbox", ["mutableForm","checkbox"], function(mutableForm,checkbox){return(
mutableForm(checkbox({options:['a', 'b', 'c'],value:['a']}))
)});
  main.variable(observer("test_checkbox")).define("test_checkbox", ["Generators", "viewof test_checkbox"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_checkbox"], function(test_checkbox){return(
test_checkbox
)});
  main.variable(observer("test_checkbox_mutate")).define("test_checkbox_mutate", ["viewof test_checkbox"], function($0){return(
$0.value = ['b', 'c']
)});
  main.variable(observer()).define(["assert","test_checkbox","test_checkbox_mutate"], function(assert,test_checkbox,test_checkbox_mutate){return(
assert(test_checkbox, test_checkbox_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Special case: single checkbox.`
)});
  main.variable(observer("viewof test_checkbox_single")).define("viewof test_checkbox_single", ["mutableForm","checkbox"], function(mutableForm,checkbox){return(
mutableForm(checkbox({options:['a']}))
)});
  main.variable(observer("test_checkbox_single")).define("test_checkbox_single", ["Generators", "viewof test_checkbox_single"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_checkbox_single"], function(test_checkbox_single){return(
test_checkbox_single
)});
  main.variable(observer("test_checkbox_single_mutate")).define("test_checkbox_single_mutate", ["viewof test_checkbox_single"], function($0){return(
$0.value = true, $0.value
)});
  main.variable(observer()).define(["assert","test_checkbox_single","test_checkbox_single_mutate"], function(assert,test_checkbox_single,test_checkbox_single_mutate){return(
assert(test_checkbox_single, test_checkbox_single_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Color
`
)});
  main.variable(observer("viewof test_color")).define("viewof test_color", ["mutableForm","color"], function(mutableForm,color){return(
mutableForm(color('#555555'))
)});
  main.variable(observer("test_color")).define("test_color", ["Generators", "viewof test_color"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_color"], function(test_color){return(
test_color
)});
  main.variable(observer("test_color_mutate")).define("test_color_mutate", ["viewof test_color"], function($0){return(
$0.value = '#ffffff'
)});
  main.variable(observer()).define(["assert","test_color","test_color_mutate"], function(assert,test_color,test_color_mutate){return(
assert(test_color, test_color_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Date
`
)});
  main.variable(observer("viewof test_date")).define("viewof test_date", ["mutableForm","date"], function(mutableForm,date){return(
mutableForm(date('1990-12-31'))
)});
  main.variable(observer("test_date")).define("test_date", ["Generators", "viewof test_date"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_date"], function(test_date){return(
test_date
)});
  main.variable(observer("test_date_mutate")).define("test_date_mutate", ["viewof test_date"], function($0){return(
$0.value = '2000-01-01'
)});
  main.variable(observer()).define(["assert","test_date","test_date_mutate"], function(assert,test_date,test_date_mutate){return(
assert(test_date, test_date_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Number
`
)});
  main.variable(observer("viewof test_number")).define("viewof test_number", ["mutableForm","number"], function(mutableForm,number){return(
mutableForm(number({min:0,max:10,step:'any',value:5}))
)});
  main.variable(observer("test_number")).define("test_number", ["Generators", "viewof test_number"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_number"], function(test_number){return(
test_number
)});
  main.variable(observer("test_number_mutate")).define("test_number_mutate", ["viewof test_number"], function($0){return(
$0.value = 9.5
)});
  main.variable(observer()).define(["assert","test_number","test_number_mutate"], function(assert,test_number,test_number_mutate){return(
assert(test_number, test_number_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Radio
`
)});
  main.variable(observer("viewof test_radio")).define("viewof test_radio", ["mutableForm","radio"], function(mutableForm,radio){return(
mutableForm(radio({options:['a', 'b', 'c'], value:'a'}))
)});
  main.variable(observer("test_radio")).define("test_radio", ["Generators", "viewof test_radio"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_radio"], function(test_radio){return(
test_radio
)});
  main.variable(observer("test_radio_mutate")).define("test_radio_mutate", ["viewof test_radio"], function($0){return(
$0.value = 'b'
)});
  main.variable(observer()).define(["assert","test_radio","test_radio_mutate"], function(assert,test_radio,test_radio_mutate){return(
assert(test_radio, test_radio_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Select
`
)});
  main.variable(observer("viewof test_select")).define("viewof test_select", ["mutableForm","select"], function(mutableForm,select){return(
mutableForm(select({
  options: ['a', {value:'b', label:'B'}, 'c'],
  value: 'a'
}))
)});
  main.variable(observer("test_select")).define("test_select", ["Generators", "viewof test_select"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_select"], function(test_select){return(
test_select
)});
  main.variable(observer("test_select_mutate")).define("test_select_mutate", ["viewof test_select"], function($0){return(
$0.value = 'b'
)});
  main.variable(observer()).define(["assert","test_select","test_select_mutate"], function(assert,test_select,test_select_mutate){return(
assert(test_select, test_select_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Slider
`
)});
  main.variable(observer("viewof test_slider")).define("viewof test_slider", ["mutableForm","slider"], function(mutableForm,slider){return(
mutableForm(slider({min:0,max:10,step:'any',value:5}))
)});
  main.variable(observer("test_slider")).define("test_slider", ["Generators", "viewof test_slider"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_slider"], function(test_slider){return(
test_slider
)});
  main.variable(observer("test_slider_mutate")).define("test_slider_mutate", ["viewof test_slider"], function($0){return(
$0.value = 9.5
)});
  main.variable(observer()).define(["assert","test_slider","test_slider_mutate"], function(assert,test_slider,test_slider_mutate){return(
assert(test_slider, test_slider_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Text
`
)});
  main.variable(observer("viewof test_text")).define("viewof test_text", ["mutableForm","text"], function(mutableForm,text){return(
mutableForm(text({value:'foo'}))
)});
  main.variable(observer("test_text")).define("test_text", ["Generators", "viewof test_text"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_text"], function(test_text){return(
test_text
)});
  main.variable(observer("test_text_mutate")).define("test_text_mutate", ["viewof test_text"], function($0){return(
$0.value = 'bar'
)});
  main.variable(observer()).define(["assert","test_text","test_text_mutate"], function(assert,test_text,test_text_mutate){return(
assert(test_text, test_text_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Textarea
`
)});
  main.variable(observer("viewof test_textarea")).define("viewof test_textarea", ["mutableForm","textarea"], function(mutableForm,textarea){return(
mutableForm(textarea('foo\nfoo'))
)});
  main.variable(observer("test_textarea")).define("test_textarea", ["Generators", "viewof test_textarea"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_textarea"], function(test_textarea){return(
test_textarea
)});
  main.variable(observer("test_textarea_mutate")).define("test_textarea_mutate", ["viewof test_textarea"], function($0){return(
$0.value = 'bar\nbar'
)});
  main.variable(observer()).define(["assert","test_textarea","test_textarea_mutate"], function(assert,test_textarea,test_textarea_mutate){return(
assert(test_textarea, test_textarea_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Autoselects (unsupported)
`
)});
  main.variable(observer("viewof test_autoSelect")).define("viewof test_autoSelect", ["mutableForm","autoSelect"], function(mutableForm,autoSelect){return(
mutableForm(autoSelect({options: ['foo', 'bar', 'baz'], value: 'foo'}))
)});
  main.variable(observer("test_autoSelect")).define("test_autoSelect", ["Generators", "viewof test_autoSelect"], (G, _) => G.input(_));
  main.variable(observer()).define(["test_autoSelect"], function(test_autoSelect){return(
test_autoSelect
)});
  main.variable(observer("test_autoSelect_mutate")).define("test_autoSelect_mutate", ["viewof test_autoSelect"], function($0){return(
$0.value = 'baz'
)});
  main.variable(observer()).define(["assert","test_autoSelect","test_autoSelect_mutate"], function(assert,test_autoSelect,test_autoSelect_mutate){return(
assert(test_autoSelect, test_autoSelect_mutate)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---`
)});
  main.variable(observer("assert")).define("assert", ["html"], function(html){return(
function assert(a, b) {
  const match = JSON.stringify(a) === JSON.stringify(b);
  const out = html`<div style="border-left:4px solid currentColor;padding-left:.5em;font-family:monospace">`;
  out.textContent = 'Test ' + (match ? 'passed' : 'failed');
  out.style.color = match ? 'green' : 'red';
  return out;
}
)});
  const child1 = runtime.module(define1);
  main.import("checkbox", child1);
  main.import("color", child1);
  main.import("date", child1);
  main.import("number", child1);
  main.import("radio", child1);
  main.import("select", child1);
  main.import("slider", child1);
  main.import("text", child1);
  main.import("textarea", child1);
  main.import("autoSelect", child1);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Changelog

- **2020-11-30:** Bugfix: Dispatched events don't bubble.
`
)});
  return main;
}
