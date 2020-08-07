/** 
 * @flow strict
 * @generated from VariantsWithPayload.re
 * @nolint
 */
/* eslint-disable */
// $FlowExpectedError: Reason checked type sufficiently
type $any = any;

const $$toJS13337556 = {"0": "ARenamed"};

const $$toRE13337556 = {"ARenamed": 0};

const $$toJS346759412 = {"0": "A", "1": "B", "2": "C"};

const $$toRE346759412 = {"A": 0, "B": 1, "C": 2};

// $FlowExpectedError: Reason checked type sufficiently
import * as VariantsWithPayloadBS from './VariantsWithPayload.bs';

export type payload = {| +x: number, +y?: string |};

export type withPayload = 
    "a"
  | "b"
  | "True"
  | "Twenty"
  | "Half"
  | {| NAME: "c", VAL: payload |};

export type manyPayloads = 
    {| NAME: "one", VAL: number |}
  | {| NAME: "two", VAL: [string, string] |}
  | {| NAME: "three", VAL: payload |};

export type simpleVariant = "A" | "B" | "C";

export type variantWithPayloads = 
    "ARenamed"
  | {| tag: "B", value: number |}
  | {| tag: "C", value: [number, number] |}
  | {| tag: "D", value: [number, number] |}
  | {| tag: "E", value: [number, string, number] |};

export type variant1Int = {| tag: "R", value: number |};

export type variant1Object = payload;

export const testWithPayload: (withPayload) => withPayload = VariantsWithPayloadBS.testWithPayload;

export const printVariantWithPayload: (withPayload) => void = VariantsWithPayloadBS.printVariantWithPayload;

export const testManyPayloads: (manyPayloads) => manyPayloads = VariantsWithPayloadBS.testManyPayloads;

export const printManyPayloads: (manyPayloads) => void = VariantsWithPayloadBS.printManyPayloads;

export const testSimpleVariant: (simpleVariant) => simpleVariant = function (Arg1: $any) {
  const result = VariantsWithPayloadBS.testSimpleVariant($$toRE346759412[Arg1]);
  return $$toJS346759412[result]
};

export const testVariantWithPayloads: (variantWithPayloads) => variantWithPayloads = function (Arg1: $any) {
  const result = VariantsWithPayloadBS.testVariantWithPayloads(typeof(Arg1) === 'object'
    ? Arg1.tag==="B"
      ? {TAG: 0, _0:Arg1.value}
      : Arg1.tag==="C"
      ? {TAG: 1, _0:Arg1.value[0], _1:Arg1.value[1]}
      : Arg1.tag==="D"
      ? {TAG: 2, _0:Arg1.value}
      : {TAG: 3, _0:Arg1.value[0], _1:Arg1.value[1], _2:Arg1.value[2]}
    : $$toRE13337556[Arg1]);
  return typeof(result) === 'object'
    ? result.TAG===0
      ? {tag:"B", value:result._0}
      : result.TAG===1
      ? {tag:"C", value:[result._0, result._1]}
      : result.TAG===2
      ? {tag:"D", value:result._0}
      : {tag:"E", value:[result._0, result._1, result._2]}
    : $$toJS13337556[result]
};

export const printVariantWithPayloads: (variantWithPayloads) => void = function (Arg1: $any) {
  const result = VariantsWithPayloadBS.printVariantWithPayloads(typeof(Arg1) === 'object'
    ? Arg1.tag==="B"
      ? {TAG: 0, _0:Arg1.value}
      : Arg1.tag==="C"
      ? {TAG: 1, _0:Arg1.value[0], _1:Arg1.value[1]}
      : Arg1.tag==="D"
      ? {TAG: 2, _0:Arg1.value}
      : {TAG: 3, _0:Arg1.value[0], _1:Arg1.value[1], _2:Arg1.value[2]}
    : $$toRE13337556[Arg1]);
  return result
};

export const testVariant1Int: (variant1Int) => variant1Int = function (Arg1: $any) {
  const result = VariantsWithPayloadBS.testVariant1Int({TAG: 0, _0:Arg1.value});
  return {tag:"R", value:result._0}
};

export const testVariant1Object: (variant1Object) => variant1Object = function (Arg1: $any) {
  const result = VariantsWithPayloadBS.testVariant1Object({TAG: 0, _0:Arg1});
  return result._0
};
