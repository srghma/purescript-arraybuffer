"use strict";

// module Data.ArrayBuffer.DataView


exports.whole = function whole (b) {
    return new DataView(b);
};

exports.partImpl = function partImpl (b,i,j) {
    return new DataView(b,i,j);
};

exports.buffer = function buffer (v) {
    return v.buffer;
};

exports.byteOffset = function byteOffset (v) {
    return v.byteOffset;
};

exports.byteLength = function byteLength (v) {
    return v.byteLength;
};

exports.getterImpl = function getterImpl (s, l, e, v, o) {
    return v[s].call(v,o,e);
};

exports.setterImpl = function setterImpl (s,e,v,n,o) {
    var f = v[s];
    f.call(v,o,n,e);
};
