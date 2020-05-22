"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = convertir;

function convertir(peso, conversión) {
  if (conversión == "libras") {
    cálculo = peso * libra;
  } else {
    cálculo = peso * kilo;
  }

  console.log(cálculo);
}

var libra = 0.45359237;
var kilo = 2.20462;