// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function computeArea(param) {
  return Caml_int32.imul(Caml_int32.imul(param[/* x */0], param[/* y */1]), Belt_Option.mapWithDefault(param[/* z */2], 1, (function (n) {
                    return n;
                  })));
}

function coord2d(x, y) {
  return /* record */[
          /* x */x,
          /* y */y,
          /* z */undefined
        ];
}

var getOpt = Belt_Option.mapWithDefault;

function findAddress(business) {
  return Belt_Option.mapWithDefault(business[/* address */2], /* [] */0, (function (a) {
                return /* :: */[
                        a,
                        /* [] */0
                      ];
              }));
}

function findAllAddresses(businesses) {
  return Belt_List.toArray(Belt_List.flatten(Belt_List.fromArray(Belt_Array.map(businesses, (function (business) {
                            return Pervasives.$at(Belt_Option.mapWithDefault(business[/* address */2], /* [] */0, (function (a) {
                                              return /* :: */[
                                                      a,
                                                      /* [] */0
                                                    ];
                                            })), Belt_Option.mapWithDefault(business[/* owner */1], /* [] */0, (function (p) {
                                              return Belt_Option.mapWithDefault(p[/* address */2], /* [] */0, (function (a) {
                                                            return /* :: */[
                                                                    a,
                                                                    /* [] */0
                                                                  ];
                                                          }));
                                            })));
                          })))));
}

function getPayload(param) {
  return param[/* payload */1];
}

function getPayloadRecord(param) {
  return param[/* payload */1];
}

var recordValue = /* record */[
  /* v */1,
  /* w */1
];

var payloadValue = /* record */[
  /* num */1,
  /* payload */recordValue
];

function getPayloadRecordPlusOne(param) {
  var payload = param[/* payload */1];
  return /* record */[
          /* v */payload[/* v */0] + 1 | 0,
          /* w */payload[/* w */1]
        ];
}

function findAddress2(business) {
  return Belt_Option.mapWithDefault(Caml_option.nullable_to_opt(business[/* address2 */2]), /* [] */0, (function (a) {
                return /* :: */[
                        a,
                        /* [] */0
                      ];
              }));
}

var someBusiness2_001 = /* owner */null;

var someBusiness2_002 = /* address2 */null;

var someBusiness2 = /* record */[
  /* name */"SomeBusiness",
  someBusiness2_001,
  someBusiness2_002
];

function computeArea3(o) {
  return Caml_int32.imul(Caml_int32.imul(o.x, o.y), Belt_Option.mapWithDefault(Caml_option.nullable_to_opt(o.z), 1, (function (n) {
                    return n;
                  })));
}

function computeArea4(o) {
  return Caml_int32.imul(Caml_int32.imul(o.x, o.y), Belt_Option.mapWithDefault(o.z, 1, (function (n) {
                    return n;
                  })));
}

var origin = /* record */[
  /* x */0,
  /* y */0,
  /* z */0
];

var someBusiness = /* record */[
  /* name */"SomeBusiness",
  /* owner */undefined,
  /* address */undefined
];

export {
  origin ,
  computeArea ,
  coord2d ,
  getOpt ,
  findAddress ,
  someBusiness ,
  findAllAddresses ,
  getPayload ,
  getPayloadRecord ,
  recordValue ,
  payloadValue ,
  getPayloadRecordPlusOne ,
  findAddress2 ,
  someBusiness2 ,
  computeArea3 ,
  computeArea4 ,
  
}
/* No side effect */
