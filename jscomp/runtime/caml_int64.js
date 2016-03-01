// Generated CODE, PLEASE EDIT WITH CARE
'use strict';


var min_int = /* record */[
  0,
  2147483648
];

var one = /* record */[
  1,
  0
];

function not(param) {
  return /* record */[
          param[0] ^ -1,
          param[1] ^ -1
        ];
}

function of_int32(lo) {
  if (lo < 0) {
    return /* record */[
            lo,
            -1
          ];
  }
  else {
    return /* record */[
            lo,
            0
          ];
  }
}

function add(param, param$1) {
  var other_high_ = param$1[1];
  var other_low_ = param$1[0];
  var this_high_ = param[1];
  var this_low_ = param[0];
  var a48 = (this_high_ >> 16);
  var a32 = this_high_ & 65535;
  var a16 = (this_low_ >> 16);
  var a00 = this_low_ & 65535;
  var b48 = (other_high_ >> 16);
  var b32 = other_high_ & 65535;
  var b16 = (other_low_ >> 16);
  var b00 = other_low_ & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = a00 + b00;
  c16 = (c00 >> 16);
  c00 = c00 & 65535;
  c16 = c16 + a16 + b16;
  c32 = (c16 >> 16);
  c16 = c16 & 65535;
  c32 = c32 + a32 + b32;
  c48 = (c32 >> 16);
  c32 = c32 & 65535;
  c48 = c48 + a48 + b48;
  c48 = c48 & 65535;
  return /* record */[
          (c16 << 16) | c00,
          (c48 << 16) | c32
        ];
}

function neg(x) {
  if (x === min_int) {
    return min_int;
  }
  else {
    return add(not(x), one);
  }
}

exports.min_int  = min_int;
exports.one      = one;
exports.not      = not;
exports.of_int32 = of_int32;
exports.add      = add;
exports.neg      = neg;
/* No side effect */