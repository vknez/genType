// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ImportHooks from "./ImportHooks.bs.js";
import * as ImportHookDefault from "./ImportHookDefault.bs.js";

function Hooks(Props) {
  var vehicle = Props.vehicle;
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var count = match[0];
  return React.createElement("div", undefined, React.createElement("p", undefined, "Hooks example " + (vehicle[/* name */0] + (" clicked " + (String(count) + " times")))), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setCount, (function (param) {
                                    return count + 1 | 0;
                                  }));
                    })
                }, "Click me"), React.createElement(ImportHooks.make, {
                  person: /* record */[
                    /* name */"Mary",
                    /* age */71
                  ],
                  children: null,
                  renderMe: (function (x) {
                      return x.randomString;
                    })
                }, "child1", "child2"), React.createElement(ImportHookDefault.make, {
                  person: /* record */[
                    /* name */"DefaultImport",
                    /* age */42
                  ],
                  children: null,
                  renderMe: (function (x) {
                      return x.randomString;
                    })
                }, "child1", "child2"));
}

function Hooks$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  var callback = Props.callback;
  Curry._1(callback, /* () */0);
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner$Inner2(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

function Hooks$Inner$Inner2$anotherComponent(Props) {
  var vehicle = Props.vehicle;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0]);
}

var Inner2 = /* module */[
  /* make */Hooks$Inner$Inner2,
  /* anotherComponent */Hooks$Inner$Inner2$anotherComponent
];

var Inner = /* module */[
  /* make */Hooks$Inner,
  /* anotherComponent */Hooks$Inner$anotherComponent,
  /* Inner2 */Inner2
];

function Hooks$NoProps(Props) {
  return React.createElement("div", undefined, null);
}

var NoProps = /* module */[/* make */Hooks$NoProps];

function functionWithRenamedArgs(_to, _Type, cb) {
  Curry._1(cb, _to);
  return _to[/* name */0] + _Type[/* name */0];
}

function Hooks$componentWithRenamedArgs(Props) {
  var _to = Props.to;
  var _Type = Props.Type;
  var cb = Props.cb;
  Curry._1(cb, _to);
  return _to[/* name */0] + _Type[/* name */0];
}

function Hooks$makeWithRef(Props, ref) {
  var vehicle = Props.vehicle;
  if (ref == null) {
    return null;
  } else {
    return React.createElement("button", {
                ref: ref
              }, vehicle[/* name */0]);
  }
}

var testForwardRef = React.forwardRef(Hooks$makeWithRef);

var input = React.forwardRef((function (Props, param) {
        var r = Props.r;
        return (function (ref) {
                    return React.createElement("div", {
                                ref: ref
                              }, r[/* x */0]);
                  })(param);
      }));

function Hooks$polymorphicComponent(Props) {
  var match = Props.p;
  return match[0][/* name */0];
}

function Hooks$functionReturningReactElement(Props) {
  return Props.name;
}

function Hooks$RenderPropRequiresConversion(Props) {
  var renderVehicle = Props.renderVehicle;
  return Curry._1(renderVehicle, {
              vehicle: /* record */[/* name */"Car"],
              number: 42
            });
}

var RenderPropRequiresConversion = /* module */[/* make */Hooks$RenderPropRequiresConversion];

function Hooks$aComponentWithChildren(Props) {
  var vehicle = Props.vehicle;
  var children = Props.children;
  return React.createElement("div", undefined, "Another Hook " + vehicle[/* name */0], React.createElement("div", undefined, children));
}

var make = Hooks;

var $$default = Hooks;

var anotherComponent = Hooks$anotherComponent;

var componentWithRenamedArgs = Hooks$componentWithRenamedArgs;

var makeWithRef = Hooks$makeWithRef;

var polymorphicComponent = Hooks$polymorphicComponent;

var functionReturningReactElement = Hooks$functionReturningReactElement;

var aComponentWithChildren = Hooks$aComponentWithChildren;

export {
  make ,
  $$default ,
  $$default as default,
  anotherComponent ,
  Inner ,
  NoProps ,
  functionWithRenamedArgs ,
  componentWithRenamedArgs ,
  makeWithRef ,
  testForwardRef ,
  input ,
  polymorphicComponent ,
  functionReturningReactElement ,
  RenderPropRequiresConversion ,
  aComponentWithChildren ,
  
}
/* testForwardRef Not a pure module */
