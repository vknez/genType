// Generated by BUCKLESCRIPT VERSION 4.0.11, PLEASE EDIT WITH CARE

import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";

function testTuple(param) {
  return param[0] + param[1] | 0;
}

function computeArea(param) {
  return Caml_int32.imul(Caml_int32.imul(param[0], param[1]), Belt_Option.mapWithDefault(param[2], 1, (function (n) {
                    return n;
                  })));
}

function computeAreaWithIdent(param) {
  return Caml_int32.imul(Caml_int32.imul(param[0], param[1]), Belt_Option.mapWithDefault(param[2], 1, (function (n) {
                    return n;
                  })));
}

function computeAreaNoConverters(param) {
  return Caml_int32.imul(param[0], param[1]);
}

function coord2d(x, y) {
  return /* tuple */[
          x,
          y,
          undefined
        ];
}

function getFirstName(param) {
  return param[0][/* name */0];
}

function marry(first, second) {
  return /* tuple */[
          first,
          second
        ];
}

function changeSecondAge(param) {
  var second = param[1];
  return /* tuple */[
          param[0],
          /* record */[
            /* name */second[/* name */0],
            /* age */second[/* age */1] + 1 | 0
          ]
        ];
}

var origin = /* tuple */[
  0,
  0,
  0
];

export {
  testTuple ,
  origin ,
  computeArea ,
  computeAreaWithIdent ,
  computeAreaNoConverters ,
  coord2d ,
  getFirstName ,
  marry ,
  changeSecondAge ,
  
}
/* No side effect */
