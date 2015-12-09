import Ember from 'ember';

export function mathCalc (params/*, hash*/) {
  let lvalue = parseFloat(params[0]);
  let operator = params[1];
  let rvalue = parseFloat(params[2]);


  return {
    "+": lvalue + rvalue,
    "-": lvalue - rvalue,
    "*": lvalue * rvalue,
    "/": lvalue / rvalue,
    "%": lvalue % rvalue
  }[operator];
}

export default Ember.Helper.helper(mathCalc);
