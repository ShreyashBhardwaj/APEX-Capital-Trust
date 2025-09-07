function _0x5c03(_0x39ea0c, _0x314f38) {
  const _0x448abf = _0x448a();
  return (
    (_0x5c03 = function (_0x5c03ba, _0x37cd2c) {
      _0x5c03ba = _0x5c03ba - 0xa4;
      let _0x357088 = _0x448abf[_0x5c03ba];
      return _0x357088;
    }),
    _0x5c03(_0x39ea0c, _0x314f38)
  );
}
(function (_0x5a2296, _0x3f7a1c) {
  const _0x3aca78 = _0x5c03,
    _0x2d6e7b = _0x5a2296();
  while (!![]) {
    try {
      const _0x393c6a =
        (-parseInt(_0x3aca78(0xcd)) / 0x1) *
          (-parseInt(_0x3aca78(0xb2)) / 0x2) +
        parseInt(_0x3aca78(0xb1)) / 0x3 +
        -parseInt(_0x3aca78(0xc2)) / 0x4 +
        -parseInt(_0x3aca78(0xd4)) / 0x5 +
        -parseInt(_0x3aca78(0xb3)) / 0x6 +
        parseInt(_0x3aca78(0xd0)) / 0x7 +
        (-parseInt(_0x3aca78(0xd6)) / 0x8) * (parseInt(_0x3aca78(0xde)) / 0x9);
      if (_0x393c6a === _0x3f7a1c) break;
      else _0x2d6e7b["push"](_0x2d6e7b["shift"]());
    } catch (_0x5a0a65) {
      _0x2d6e7b["push"](_0x2d6e7b["shift"]());
    }
  }
})(_0x448a, 0x50ee6);
const isNumeric = (_0x4c2701) => {
    return /^[+-]?(\d+(\.\d*)?|\.\d+)$/["test"](_0x4c2701);
  },
  toFixed = (_0x1a5e26) => {
    const _0x2995e3 = _0x5c03;
    if (Math[_0x2995e3(0xd3)](_0x1a5e26) < 0x1) {
      var _0x1f73e5 = parseInt(
        _0x1a5e26[_0x2995e3(0xaf)]()[_0x2995e3(0xc7)]("e-")[0x1]
      );
      _0x1f73e5 &&
        ((_0x1a5e26 *= Math[_0x2995e3(0xd7)](0xa, _0x1f73e5 - 0x1)),
        (_0x1a5e26 =
          "0." +
          new Array(_0x1f73e5)[_0x2995e3(0xd9)]("0") +
          _0x1a5e26[_0x2995e3(0xaf)]()["substring"](0x2)));
    } else {
      var _0x1f73e5 = parseInt(
        _0x1a5e26[_0x2995e3(0xaf)]()[_0x2995e3(0xc7)]("+")[0x1]
      );
      _0x1f73e5 > 0x14 &&
        ((_0x1f73e5 -= 0x14),
        (_0x1a5e26 /= Math[_0x2995e3(0xd7)](0xa, _0x1f73e5)),
        (_0x1a5e26 += new Array(_0x1f73e5 + 0x1)[_0x2995e3(0xd9)]("0")));
    }
    return _0x1a5e26;
  },
  calculateFV = async (_0x169b5f, _0x56df2d, _0x18d4f7, _0x2bb0e9) => {
    const _0x1fa961 = _0x5c03;
    try {
      const _0x355dcc = new AbortController(),
        _0x3ace91 = setTimeout(() => _0x355dcc["abort"](), 0x1388),
        _0x413cb9 = await fetch(
          "https://operations.webclass.in/api/mfTools/calculateFutureValue",
          {
            method: _0x1fa961(0xdd),
            headers: { "Content-Type": _0x1fa961(0xbb) },
            body: JSON[_0x1fa961(0xc3)]({
              rate: _0x169b5f,
              nper: _0x56df2d,
              pmt: _0x18d4f7,
              pv: _0x2bb0e9,
            }),
            signal: _0x355dcc[_0x1fa961(0xe4)],
          }
        );
      clearTimeout(_0x3ace91);
      !_0x413cb9["ok"] &&
        ((explainPara[_0x1fa961(0xdb)] = _0x1fa961(0xe7)),
        modalBtn[_0x1fa961(0xb0)]());
      const _0x173c8a = await _0x413cb9[_0x1fa961(0xd1)]();
      !_0x173c8a?.[_0x1fa961(0xd2)] &&
        ((explainPara[_0x1fa961(0xdb)] = _0x1fa961(0xe7)),
        modalBtn[_0x1fa961(0xb0)]());
      let { futureValue: _0x3e9404 } = _0x173c8a;
      return { futureValue: _0x3e9404 };
    } catch (_0x55dfd3) {
      (explainPara[_0x1fa961(0xdb)] = _0x1fa961(0xe7)),
        modalBtn[_0x1fa961(0xb0)]();
    }
  },
  calculatePv = async (_0x145674, _0x4c1b4c, _0x35d0b5, _0x31eff8 = 0x0) => {
    const _0x2a33fe = _0x5c03;
    try {
      const _0x4f2976 = new AbortController(),
        _0x499d4d = setTimeout(() => _0x4f2976["abort"](), 0x1388),
        _0x5ab569 = await fetch(_0x2a33fe(0xec), {
          method: _0x2a33fe(0xdd),
          headers: { "Content-Type": _0x2a33fe(0xbb) },
          body: JSON["stringify"]({
            rate: _0x145674,
            nper: _0x4c1b4c,
            pmt: _0x35d0b5,
            fv: _0x31eff8,
          }),
          signal: _0x4f2976["signal"],
        });
      clearTimeout(_0x499d4d);
      !_0x5ab569["ok"] &&
        ((explainPara[_0x2a33fe(0xdb)] = _0x2a33fe(0xe7)),
        modalBtn[_0x2a33fe(0xb0)]());
      const _0x130a65 = await _0x5ab569["json"]();
      !_0x130a65?.["presentValue"] &&
        ((explainPara[_0x2a33fe(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn["click"]());
      let { presentValue: _0x3d1350 } = _0x130a65;
      return { presentValue: _0x3d1350 };
    } catch (_0x16e739) {
      (explainPara[_0x2a33fe(0xdb)] = _0x2a33fe(0xe7)),
        modalBtn[_0x2a33fe(0xb0)]();
    }
  },
  calculateExcelPmt = async (
    _0xf972e0,
    _0x4cfb1d,
    _0x172857,
    _0x4d89fa = 0x0
  ) => {
    const _0x5f26c2 = _0x5c03;
    try {
      const _0x256226 = new AbortController(),
        _0x5702cd = setTimeout(() => _0x256226["abort"](), 0x1388),
        _0x260ec8 = await fetch(_0x5f26c2(0xec), {
          method: _0x5f26c2(0xdd),
          headers: { "Content-Type": _0x5f26c2(0xbb) },
          body: JSON[_0x5f26c2(0xc3)]({
            rate: _0xf972e0,
            nper: _0x4cfb1d,
            pmt: pmt,
            fv: _0x4d89fa,
          }),
          signal: _0x256226[_0x5f26c2(0xe4)],
        });
      clearTimeout(_0x5702cd);
      !_0x260ec8["ok"] &&
        ((explainPara[_0x5f26c2(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x5f26c2(0xb0)]());
      const _0x450635 = await _0x260ec8[_0x5f26c2(0xd1)]();
      !_0x450635?.[_0x5f26c2(0xbf)] &&
        ((explainPara[_0x5f26c2(0xdb)] = _0x5f26c2(0xe7)),
        modalBtn[_0x5f26c2(0xb0)]());
      let { excelPmt: _0x55af0f } = _0x450635,
        _0x4b58df = _0x55af0f;
      return { presentValue: _0x4b58df };
    } catch (_0x281583) {
      (explainPara["innerText"] =
        "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x5f26c2(0xb0)]();
    }
  },
  calculatePmt = async (_0x471f29, _0x54db1e, _0x5d412a, _0x53a660 = 0x0) => {
    const _0x33fe52 = _0x5c03;
    try {
      const _0x2105fc = new AbortController(),
        _0x185f9c = setTimeout(() => _0x2105fc["abort"](), 0x1388),
        _0xe80e59 = await fetch(_0x33fe52(0xb8), {
          method: _0x33fe52(0xdd),
          headers: { "Content-Type": _0x33fe52(0xbb) },
          body: JSON[_0x33fe52(0xc3)]({
            rate: _0x471f29,
            nper: _0x54db1e,
            pv: _0x5d412a,
            fv: _0x53a660,
          }),
          signal: _0x2105fc[_0x33fe52(0xe4)],
        });
      clearTimeout(_0x185f9c);
      !_0xe80e59["ok"] &&
        ((explainPara[_0x33fe52(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn["click"]());
      const _0x5eb9db = await _0xe80e59["json"]();
      !_0x5eb9db?.["pmt"] &&
        ((explainPara[_0x33fe52(0xdb)] = _0x33fe52(0xe7)), modalBtn["click"]());
      let { pmt: _0x53b918 } = _0x5eb9db;
      return { pmt: _0x53b918 };
    } catch (_0x4b0ac3) {
      (explainPara[_0x33fe52(0xdb)] = _0x33fe52(0xe7)), modalBtn["click"]();
    }
  },
  calculateGoalInvestBtn = async (
    _0x473c18,
    _0x52f115,
    _0x5ddcad,
    _0x5aced1,
    _0x2fd81a,
    _0x1ebf71
  ) => {
    const _0x2eb3ba = _0x5c03;
    try {
      const _0x316694 = new AbortController(),
        _0x2108d0 = setTimeout(() => _0x316694[_0x2eb3ba(0xe3)](), 0x1388),
        _0x105c1c = await fetch(
          "https://operations.webclass.in/api/mfTools/calculateGoalInvestPlan",
          {
            method: _0x2eb3ba(0xdd),
            headers: { "Content-Type": _0x2eb3ba(0xbb) },
            body: JSON[_0x2eb3ba(0xc3)]({
              currentAge: _0x473c18,
              destinationAge: _0x52f115,
              corpus: _0x5ddcad,
              rate: _0x5aced1,
              inflation: _0x2fd81a,
              amountInvest: _0x1ebf71,
            }),
            signal: _0x316694[_0x2eb3ba(0xe4)],
          }
        );
      clearTimeout(_0x2108d0);
      !_0x105c1c["ok"] &&
        ((explainPara[_0x2eb3ba(0xdb)] = _0x2eb3ba(0xe7)),
        modalBtn[_0x2eb3ba(0xb0)]());
      const _0x1534cf = await _0x105c1c["json"]();
      (!_0x1534cf?.[_0x2eb3ba(0xab)] ||
        !_0x1534cf?.[_0x2eb3ba(0xd5)] ||
        !_0x1534cf?.[_0x2eb3ba(0xdc)] ||
        !_0x1534cf?.[_0x2eb3ba(0xbd)] ||
        !_0x1534cf?.[_0x2eb3ba(0xc4)]) &&
        ((explainPara[_0x2eb3ba(0xdb)] = _0x2eb3ba(0xe7)),
        modalBtn[_0x2eb3ba(0xb0)]());
      let {
        futureCost: _0x3371e9,
        investAppAmt: _0x194302,
        deficitCorpus: _0x375820,
        lumpsumAmt: _0x47b638,
        monthlyInvestReqd: _0xb42798,
      } = _0x1534cf;
      return (
        console[_0x2eb3ba(0xb9)](_0x1534cf),
        {
          futureCost: _0x3371e9,
          investAppAmt: _0x194302,
          deficitCorpus: _0x375820,
          lumpsumAmt: _0x47b638,
          monthlyInvestReqd: _0xb42798,
        }
      );
    } catch (_0xdeadc2) {
      (explainPara["innerText"] = _0x2eb3ba(0xe7)), modalBtn[_0x2eb3ba(0xb0)]();
    }
  },
  calculateRetirementGoal = async (
    _0x16690d,
    _0x845b2b,
    _0xff2c14,
    _0x53337e,
    _0x4d3204,
    _0xe45a7d,
    _0x5150b5
  ) => {
    const _0x44de0e = _0x5c03;
    try {
      const _0xd6af8a = new AbortController(),
        _0x46b980 = setTimeout(() => _0xd6af8a[_0x44de0e(0xe3)](), 0x1388),
        _0xc6d525 = await fetch(_0x44de0e(0xe9), {
          method: _0x44de0e(0xdd),
          headers: { "Content-Type": _0x44de0e(0xbb) },
          body: JSON["stringify"]({
            currentAge: _0x16690d,
            retirementAge: _0x845b2b,
            monthlyExpense: _0x53337e,
            preRetirementReturn: _0x4d3204,
            postRetirementReturn: _0xe45a7d,
            lifeExpectancy: _0x5150b5,
            inflation: _0xff2c14,
          }),
          signal: _0xd6af8a[_0x44de0e(0xe4)],
        });
      clearTimeout(_0x46b980);
      !_0xc6d525["ok"] &&
        ((explainPara[_0x44de0e(0xdb)] = _0x44de0e(0xe7)), modalBtn["click"]());
      const _0x4b3195 = await _0xc6d525[_0x44de0e(0xd1)]();
      (!_0x4b3195?.[_0x44de0e(0xed)] ||
        !_0x4b3195?.[_0x44de0e(0xa4)] ||
        !_0x4b3195?.[_0x44de0e(0xba)]) &&
        ((explainPara[_0x44de0e(0xdb)] = _0x44de0e(0xe7)),
        modalBtn[_0x44de0e(0xb0)]());
      let {
        monthlyRequirementAtRetirement: _0x2f4693,
        corpusAtRetirement: _0x3ddb29,
        monthlySIPAmtForInvestment: _0x309a36,
      } = _0x4b3195;
      return (
        console[_0x44de0e(0xb9)](_0x4b3195),
        {
          monthlyRequirementAtRetirement: _0x2f4693,
          corpusAtRetirement: _0x3ddb29,
          monthlySIPAmtForInvestment: _0x309a36,
        }
      );
    } catch (_0x3279d4) {
      (explainPara[_0x44de0e(0xdb)] = _0x44de0e(0xe7)),
        modalBtn[_0x44de0e(0xb0)]();
    }
  },
  calculateSIPReturn = async (
    _0xe7fbcb,
    _0x3c4c30,
    _0x2b81e6,
    _0x7709dc = 0x0,
    _0x4918b9 = 0x0,
    _0x5596da = ![],
    _0x2b62e9 = ![],
    _0x3ce245 = ![]
  ) => {
    const _0x5b8444 = _0x5c03;
    try {
      const _0x328d51 = new AbortController(),
        _0x54797e = setTimeout(() => _0x328d51[_0x5b8444(0xe3)](), 0x1388),
        _0xb08bfa = await fetch(_0x5b8444(0xa7), {
          method: _0x5b8444(0xdd),
          headers: { "Content-Type": "application/json" },
          body: JSON["stringify"]({
            rate: _0xe7fbcb,
            principal: _0x3c4c30,
            years: _0x2b81e6,
            stepUp: _0x7709dc,
            inflation: _0x4918b9,
            lumpSum: _0x5596da,
            percentMode: _0x3ce245,
          }),
          signal: _0x328d51[_0x5b8444(0xe4)],
        });
      clearTimeout(_0x54797e);
      !_0xb08bfa["ok"] &&
        ((explainPara[_0x5b8444(0xdb)] = _0x5b8444(0xe7)), modalBtn["click"]());
      const _0x3d2866 = await _0xb08bfa["json"]();
      return (
        !_0x3d2866?.[_0x5b8444(0xe5)] &&
          ((explainPara[_0x5b8444(0xdb)] = _0x5b8444(0xe7)),
          modalBtn[_0x5b8444(0xb0)]()),
        _0x3ce245 ? _0x3d2866 : _0x3d2866[_0x5b8444(0xe5)]
      );
    } catch (_0x43f267) {
      !_0x2b62e9 &&
        ((explainPara[_0x5b8444(0xdb)] = _0x5b8444(0xe7)),
        modalBtn[_0x5b8444(0xb0)]());
    }
  },
  calculateTotalReturnWithLumpSumAndSIP = async (
    _0x491a88,
    _0x1bb8a4,
    _0x1d86f5,
    _0x313e3e,
    _0x1bd2c8 = 0x0,
    _0x2843e2 = ![]
  ) => {
    const _0x4cb01b = _0x5c03;
    try {
      const _0x4410c6 = new AbortController(),
        _0x266785 = setTimeout(() => _0x4410c6["abort"](), 0x1388),
        _0x3b24cd = await fetch(_0x4cb01b(0xbe), {
          method: "POST",
          headers: { "Content-Type": _0x4cb01b(0xbb) },
          body: JSON[_0x4cb01b(0xc3)]({
            rate: _0x1d86f5,
            principal: _0x1bb8a4,
            years: _0x313e3e,
            inflation: _0x1bd2c8,
            initialLumpsum: _0x491a88,
          }),
          signal: _0x4410c6[_0x4cb01b(0xe4)],
        });
      clearTimeout(_0x266785);
      !_0x3b24cd["ok"] &&
        ((explainPara[_0x4cb01b(0xdb)] = _0x4cb01b(0xe7)), modalBtn["click"]());
      const _0x15c408 = await _0x3b24cd["json"]();
      return (
        !_0x15c408?.[_0x4cb01b(0xe8)] &&
          ((explainPara[_0x4cb01b(0xdb)] = _0x4cb01b(0xe7)),
          modalBtn[_0x4cb01b(0xb0)]()),
        console[_0x4cb01b(0xb9)](_0x15c408[_0x4cb01b(0xe8)]),
        _0x15c408[_0x4cb01b(0xe8)]
      );
    } catch (_0x3b941c) {
      !_0x2843e2 &&
        ((explainPara[_0x4cb01b(0xdb)] = _0x4cb01b(0xe7)), modalBtn["click"]());
    }
  },
  calculateRequiredSipAmt = (
    _0x5c644c,
    _0x457050,
    _0x17f961,
    _0x18ffe3,
    _0x2c66da,
    _0x27c35a,
    _0x1699fc,
    _0x3099ed
  ) => {
    let _0x4b354c = calculateFV(
        _0x18ffe3,
        _0x457050 - _0x5c644c,
        0x0,
        _0x2c66da
      ),
      _0x27c21c = calculatePv(
        (_0x27c35a - _0x1699fc) / 0xc,
        0xc * (0x5a - _0x457050),
        _0x4b354c,
        _0x3099ed
      ),
      _0x10491f = calculatePmt(
        (_0x17f961 - _0x18ffe3) / 0xc,
        0xc * (_0x457050 - _0x5c644c),
        0x0,
        _0x27c21c
      );
    return {
      amountReqdMonthly: _0x4b354c,
      reqdCapital: _0x27c21c,
      reqdSIPAmt: _0x10491f,
    };
  },
  calculateDifferentialReturnsByAge = async (
    _0x10ad97,
    _0x4eda03,
    _0x5247ef,
    _0x10d694,
    _0x1b5383 = 0x0,
    _0x3676d2 = ![]
  ) => {
    const _0x3b5e63 = _0x5c03;
    try {
      const _0x53fce4 = new AbortController(),
        _0x30119f = setTimeout(() => _0x53fce4["abort"](), 0x1388),
        _0x8a9eea = await fetch(_0x3b5e63(0xaa), {
          method: _0x3b5e63(0xdd),
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x3b5e63(0xc3)]({
            currentAge: _0x10ad97,
            retirementAge: _0x4eda03,
            corpus: _0x5247ef,
            inflation: _0x1b5383,
            rate: _0x10d694,
          }),
          signal: _0x53fce4[_0x3b5e63(0xe4)],
        });
      clearTimeout(_0x30119f);
      !_0x8a9eea["ok"] &&
        ((explainPara[_0x3b5e63(0xdb)] = _0x3b5e63(0xe7)),
        modalBtn[_0x3b5e63(0xb0)]());
      const _0x2c6fbe = await _0x8a9eea[_0x3b5e63(0xd1)]();
      (!_0x2c6fbe?.[_0x3b5e63(0xb7)] ||
        !_0x2c6fbe?.[_0x3b5e63(0xa8)] ||
        !_0x2c6fbe?.["nextTenYr"]) &&
        ((explainPara["innerText"] = _0x3b5e63(0xe7)),
        modalBtn[_0x3b5e63(0xb0)]());
      let {
        currentYr: _0x1fee13,
        prevTenYr: _0x50ab3a,
        nextTenYr: _0x1709ac,
      } = _0x2c6fbe;
      return {
        currentYr: _0x1fee13,
        prevTenYr: _0x50ab3a,
        nextTenYr: _0x1709ac,
      };
    } catch (_0xcc8a06) {
      !_0x3676d2 &&
        ((explainPara[_0x3b5e63(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x3b5e63(0xb0)]());
    }
  },
  calculateRetirementPortfolio = (
    _0x56c3b2,
    _0x5905b7,
    _0x16a17c,
    _0x220dd7,
    _0x43bc2a,
    _0x3d34ee,
    _0x440aa8,
    _0x1cfeac,
    _0x45d705,
    _0x5b99a1,
    _0x27f189,
    _0x2dabb3,
    _0x33d53c,
    _0x1f5f52,
    _0x110599,
    _0x1aa7ea,
    _0x1b385f,
    _0x49899c,
    _0x23a1f5,
    _0x3f055a,
    _0x533ee6,
    _0xa68436,
    _0x513992,
    _0x45cce8
  ) => {
    const _0x161d32 = _0x5c03;
    let _0x497b42 = 0x0,
      _0x322eb9 = 0x0,
      _0x3b2043 = {};
    for (let _0x387a17 = 0x0; _0x387a17 < _0x513992 - _0x533ee6; _0x387a17++) {
      _0x387a17 == 0x0
        ? ((_0x3b2043[_0x161d32(0xc8)] = [
            calculateFV(_0x5905b7 - _0x45cce8, 0x1, 0x0, _0x56c3b2),
          ]),
          (_0x3b2043["pf"] = [
            calculateFV(_0x220dd7 - _0x45cce8, 0x1, 0x0, _0x16a17c),
          ]),
          (_0x3b2043[_0x161d32(0xb6)] = [
            calculateFV(_0x3d34ee - _0x45cce8, 0x1, 0x0, _0x43bc2a),
          ]),
          (_0x3b2043[_0x161d32(0xdf)] = [
            calculateFV(_0x1cfeac - _0x45cce8, 0x1, 0x0, _0x440aa8),
          ]),
          (_0x3b2043["cd"] = [
            calculateFV(_0x5b99a1 - _0x45cce8, 0x1, 0x0, _0x45d705),
          ]),
          (_0x3b2043[_0x161d32(0xac)] = [
            calculateFV(_0x2dabb3 - _0x45cce8, 0x1, 0x0, _0x27f189),
          ]),
          (_0x3b2043[_0x161d32(0xd8)] = [
            calculateFV(_0x1f5f52 - _0x45cce8, 0x1, 0x0, _0x33d53c),
          ]),
          (_0x3b2043["debt"] = [
            calculateFV(_0x1aa7ea - _0x45cce8, 0x1, 0x0, _0x110599),
          ]),
          (_0x3b2043[_0x161d32(0xeb)] = [
            calculateFV(
              (_0x49899c - _0x45cce8) / 0xc,
              (_0x387a17 + 0x1) * 0xc,
              _0x1b385f,
              0x0
            ),
          ]),
          (_0x3b2043["rd"] = [
            calculateFV(
              (_0x3f055a - _0x45cce8) / 0xc,
              (_0x387a17 + 0x1) * 0xc,
              _0x23a1f5,
              0x0
            ),
          ]))
        : (_0x3b2043[_0x161d32(0xc8)][_0x161d32(0xad)](
            calculateFV(
              _0x5905b7 - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043["ppf"][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043["pf"][_0x161d32(0xad)](
            calculateFV(
              _0x220dd7 - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043["pf"][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043[_0x161d32(0xb6)]["push"](
            calculateFV(
              _0x3d34ee - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043["postal"][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043["bank"][_0x161d32(0xad)](
            calculateFV(
              _0x1cfeac - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043[_0x161d32(0xdf)][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043["cd"]["push"](
            calculateFV(
              _0x5b99a1 - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043["cd"][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043[_0x161d32(0xac)]["push"](
            calculateFV(
              _0x2dabb3 - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043[_0x161d32(0xac)][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043[_0x161d32(0xd8)][_0x161d32(0xad)](
            calculateFV(
              _0x1f5f52 - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043[_0x161d32(0xd8)][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043[_0x161d32(0xce)][_0x161d32(0xad)](
            calculateFV(
              _0x1aa7ea - _0x45cce8,
              0x1,
              0x0,
              _0x3b2043[_0x161d32(0xce)][_0x387a17 - 0x1]
            )
          ),
          _0x3b2043[_0x161d32(0xeb)][_0x161d32(0xad)](
            calculateFV(
              (_0x49899c - _0x45cce8) / 0xc,
              (_0x387a17 + 0x1) * 0xc,
              _0x1b385f,
              0x0
            )
          ),
          _0x3b2043["rd"]["push"](
            calculateFV(
              (_0x3f055a - _0x45cce8) / 0xc,
              (_0x387a17 + 0x1) * 0xc,
              _0x23a1f5,
              0x0
            )
          ));
    }
    for (let _0x13bf34 in _0x3b2043) {
      _0x497b42 += _0x3b2043[_0x13bf34][_0x513992 - _0x533ee6 - 0x1];
    }
    return (
      (_0x322eb9 = (_0xa68436 * _0x497b42) / 0xc),
      { finalVal: _0x497b42, finalSWP: _0x322eb9 }
    );
  },
  distributorCommissionCalc = async (
    _0x436672,
    _0x4a40e2,
    _0x3f2fdf,
    _0x70ff2e
  ) => {
    const _0x356be1 = _0x5c03;
    try {
      const _0x17fb5a = new AbortController(),
        _0x492eef = setTimeout(() => _0x17fb5a[_0x356be1(0xe3)](), 0x1388),
        _0x24f9fe = await fetch(_0x356be1(0xb4), {
          method: _0x356be1(0xdd),
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x356be1(0xc3)]({
            sipAmt: _0x436672,
            sipRate: _0x4a40e2,
            commissionRate: _0x3f2fdf,
            time: _0x70ff2e,
          }),
          signal: _0x17fb5a[_0x356be1(0xe4)],
        });
      clearTimeout(_0x492eef);
      !_0x24f9fe["ok"] &&
        ((explainPara[_0x356be1(0xdb)] = _0x356be1(0xe7)),
        modalBtn[_0x356be1(0xb0)]());
      const _0x8c67e = await _0x24f9fe[_0x356be1(0xd1)]();
      !_0x8c67e?.[_0x356be1(0xe2)] &&
        ((explainPara["innerText"] = _0x356be1(0xe7)),
        modalBtn[_0x356be1(0xb0)]());
      let { totalCommission: _0x23aedf } = _0x8c67e;
      return { totalCommission: _0x23aedf };
    } catch (_0x1d9f73) {
      console[_0x356be1(0xb9)](_0x1d9f73),
        (explainPara[_0x356be1(0xdb)] = _0x356be1(0xe7)),
        modalBtn[_0x356be1(0xb0)]();
    }
  },
  diffBetweenInsuranceAndSIPCommission = async (
    _0x3cf724,
    _0x162498,
    _0x227f8c,
    _0x5b987e,
    _0x59b3c7
  ) => {
    const _0x1f9de8 = _0x5c03;
    try {
      const _0x7106ec = new AbortController(),
        _0x45d0f8 = setTimeout(() => _0x7106ec[_0x1f9de8(0xe3)](), 0x1388),
        _0x2d61b4 = await fetch(_0x1f9de8(0xa9), {
          method: _0x1f9de8(0xdd),
          headers: { "Content-Type": _0x1f9de8(0xbb) },
          body: JSON[_0x1f9de8(0xc3)]({
            investAmt: _0x3cf724,
            avgInsureCommission: _0x162498,
            capApprRate: _0x227f8c,
            trail: _0x5b987e,
            time: _0x59b3c7,
          }),
          signal: _0x7106ec[_0x1f9de8(0xe4)],
        });
      clearTimeout(_0x45d0f8);
      !_0x2d61b4["ok"] &&
        ((explainPara["innerText"] = _0x1f9de8(0xe7)), modalBtn["click"]());
      const _0x195889 = await _0x2d61b4[_0x1f9de8(0xd1)]();
      (!_0x195889?.[_0x1f9de8(0xcf)] || !_0x195889?.[_0x1f9de8(0xa6)]) &&
        ((explainPara[_0x1f9de8(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x1f9de8(0xb0)]());
      let { totalInsureCommission: _0x5700d0, totalUpfrontTrail: _0x44da0a } =
        _0x195889;
      return { totalInsureCommission: _0x5700d0, totalUpfrontTrail: _0x44da0a };
    } catch (_0x7fa01a) {
      (explainPara[_0x1f9de8(0xdb)] =
        "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x1f9de8(0xb0)]();
    }
  },
  revenueModelSIPAndOneTimeBookSize = async (
    _0xe002d4,
    _0x3c234b,
    _0x31f51d,
    _0x125bcc,
    _0x1d931d
  ) => {
    const _0x47650d = _0x5c03;
    try {
      const _0x22b414 = new AbortController(),
        _0x8240da = setTimeout(() => _0x22b414[_0x47650d(0xe3)](), 0x1388),
        _0x29c30a = await fetch(_0x47650d(0xc0), {
          method: _0x47650d(0xdd),
          headers: { "Content-Type": "application/json" },
          body: JSON["stringify"]({
            sipBookSize: _0xe002d4,
            investRate: _0x3c234b,
            commissionRate: _0x31f51d,
            equityAum: _0x125bcc,
            time: _0x1d931d,
          }),
          signal: _0x22b414[_0x47650d(0xe4)],
        });
      clearTimeout(_0x8240da);
      !_0x29c30a["ok"] &&
        ((explainPara[_0x47650d(0xdb)] = _0x47650d(0xe7)), modalBtn["click"]());
      const _0x39ed66 = await _0x29c30a[_0x47650d(0xd1)]();
      !_0x39ed66?.[_0x47650d(0xc9)] &&
        ((explainPara[_0x47650d(0xdb)] = _0x47650d(0xe7)),
        modalBtn[_0x47650d(0xb0)]());
      let { grossCommission: _0x351f98 } = _0x39ed66;
      return { grossCommission: _0x351f98 };
    } catch (_0x157eb8) {
      (explainPara[_0x47650d(0xdb)] = _0x47650d(0xe7)),
        modalBtn[_0x47650d(0xb0)]();
    }
  },
  calculateEMIVersusSIP = async (
    _0x595a13,
    _0x18dc8a,
    _0x275cc8,
    _0x5a8844,
    _0x32a69f,
    _0xb4697,
    _0x4852d6 = 0.12
  ) => {
    const _0x25ef06 = _0x5c03;
    try {
      let _0x3194b0 = _0xb4697 ?? (0.03 / 0xc) * _0x595a13;
      const _0x49f448 = new AbortController(),
        _0x33953b = setTimeout(() => _0x49f448[_0x25ef06(0xe3)](), 0x1388),
        _0x45f0cf = await fetch(
          "https://operations.webclass.in/api/mfTools/calculateEMIVersusSIP",
          {
            method: "POST",
            headers: { "Content-Type": _0x25ef06(0xbb) },
            body: JSON["stringify"]({
              houseValue: _0x595a13,
              selfFunding: _0x18dc8a,
              loanRate: _0x275cc8,
              loanPeriod: _0x5a8844,
              housingInflation: _0x32a69f,
              monthlyRent: _0x3194b0,
              sipGrowthRate: _0x4852d6,
            }),
            signal: _0x49f448[_0x25ef06(0xe4)],
          }
        );
      clearTimeout(_0x33953b);
      !_0x45f0cf["ok"] &&
        (console[_0x25ef06(0xb9)](_0x25ef06(0xb5)),
        (explainPara["innerText"] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x25ef06(0xb0)]());
      const _0x28eaaf = await _0x45f0cf[_0x25ef06(0xd1)]();
      (!_0x28eaaf?.["bankFunding"] ||
        !_0x28eaaf?.[_0x25ef06(0xca)] ||
        !_0x28eaaf?.["totalLoanPayment"] ||
        !_0x28eaaf?.[_0x25ef06(0xc6)] ||
        !_0x28eaaf?.[_0x25ef06(0xcb)] ||
        !_0x28eaaf?.[_0x25ef06(0xe0)] ||
        !_0x28eaaf?.["houseCostFV"] ||
        !_0x28eaaf?.["profitSIPInvest"]) &&
        (console[_0x25ef06(0xb9)](_0x25ef06(0xa5)),
        (explainPara[_0x25ef06(0xdb)] = _0x25ef06(0xe7)),
        modalBtn[_0x25ef06(0xb0)]());
      let {
        bankFunding: _0x4e61e1,
        emiAmt: _0x1bc254,
        totalLoanPayment: _0x5367e9,
        loanInterestPaid: _0x2ac928,
        emiPaymentBalance: _0x2c42fd,
        sipInvestFV: _0x3d9635,
        houseCostFV: _0x53afd3,
        profitSIPInvest: _0x57b56c,
      } = _0x28eaaf;
      return {
        bankFunding: _0x4e61e1,
        emiAmt: _0x1bc254,
        totalLoanPayment: _0x5367e9,
        loanInterestPaid: _0x2ac928,
        emiPaymentBalance: _0x2c42fd,
        sipInvestFV: _0x3d9635,
        houseCostFV: _0x53afd3,
        profitSIPInvest: _0x57b56c,
        monthlyRent: _0x3194b0,
      };
    } catch (_0x3be3ae) {
      console[_0x25ef06(0xb9)](_0x3be3ae),
        (explainPara[_0x25ef06(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x25ef06(0xb0)]();
    }
  },
  humanLifeMethod = async (_0x54dc2d, _0xd5ee6d, _0x4c8c16, _0x1fb2d5) => {
    const _0x5ef18d = _0x5c03;
    try {
      const _0x8c9316 = new AbortController(),
        _0x127a22 = setTimeout(() => _0x8c9316[_0x5ef18d(0xe3)](), 0x1388),
        _0x917686 = await fetch(
          "https://operations.webclass.in/api/mfTools/humanLifeMethod",
          {
            method: _0x5ef18d(0xdd),
            headers: { "Content-Type": "application/json" },
            body: JSON[_0x5ef18d(0xc3)]({
              currentIncome: _0x54dc2d,
              investGrowthRate: _0xd5ee6d,
              incomeIncrementRate: _0x4c8c16,
              timePeriod: _0x1fb2d5,
            }),
            signal: _0x8c9316[_0x5ef18d(0xe4)],
          }
        );
      clearTimeout(_0x127a22);
      !_0x917686["ok"] &&
        ((explainPara[_0x5ef18d(0xdb)] = _0x5ef18d(0xe7)),
        modalBtn[_0x5ef18d(0xb0)]());
      const _0x580f76 = await _0x917686[_0x5ef18d(0xd1)]();
      !_0x580f76?.["reqdCorpus"] &&
        ((explainPara[_0x5ef18d(0xdb)] = _0x5ef18d(0xe7)),
        modalBtn[_0x5ef18d(0xb0)]());
      let { reqdCorpus: _0x57062b } = _0x580f76;
      return { reqdCorpus: _0x57062b };
    } catch (_0x36f042) {
      console[_0x5ef18d(0xb9)](_0x36f042),
        (explainPara[_0x5ef18d(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x5ef18d(0xb0)]();
    }
  },
  needBasedApproach = async (
    _0x5a5dec,
    _0x3a1403,
    _0x5c67de,
    _0x4c8f36,
    _0x4e816b,
    _0x100cb8,
    _0x2c1e78,
    _0xe88761,
    _0x5cd11f
  ) => {
    const _0xb2289f = _0x5c03;
    try {
      const _0x1dadbc = new AbortController(),
        _0x269462 = setTimeout(() => _0x1dadbc["abort"](), 0x1388),
        _0x1fe075 = await fetch(_0xb2289f(0xbc), {
          method: _0xb2289f(0xdd),
          headers: { "Content-Type": _0xb2289f(0xbb) },
          body: JSON[_0xb2289f(0xc3)]({
            currentIncome: _0x5a5dec,
            investGrowthRate: _0x3a1403,
            incomeIncrementRate: _0x5c67de,
            timePeriod: _0x4c8f36,
            outstandingLoanAmt: _0x4e816b,
            childEducationLiability: _0x100cb8,
            incidentalMarriageLiability: _0x2c1e78,
            availableInsuranceDeduct: _0xe88761,
            investmentBalance: _0x5cd11f,
          }),
          signal: _0x1dadbc[_0xb2289f(0xe4)],
        });
      clearTimeout(_0x269462);
      !_0x1fe075["ok"] &&
        (console["log"](_0xb2289f(0xb5)),
        (explainPara[_0xb2289f(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0xb2289f(0xb0)]());
      const _0x13b4e1 = await _0x1fe075[_0xb2289f(0xd1)]();
      (!_0x13b4e1?.["reqdCorpus"] || !_0x13b4e1?.[_0xb2289f(0xea)]) &&
        ((explainPara[_0xb2289f(0xdb)] = _0xb2289f(0xe7)),
        modalBtn[_0xb2289f(0xb0)]());
      let { reqdCorpus: _0x4b57bc, additionalReqdCorpus: _0x4d2e7d } =
        _0x13b4e1;
      return { reqdCorpus: _0x4b57bc, additionalReqdCorpus: _0x4d2e7d };
    } catch (_0x351d01) {
      console[_0xb2289f(0xb9)](_0x351d01),
        (explainPara[_0xb2289f(0xdb)] = _0xb2289f(0xe7)),
        modalBtn[_0xb2289f(0xb0)]();
    }
  },
  limitedPeriodSip = async (_0x20c4c2, _0x4ead76, _0x41562a, _0xdfb434) => {
    const _0x2b852d = _0x5c03;
    try {
      const _0x3aa9c7 = new AbortController(),
        _0x14799e = setTimeout(() => _0x3aa9c7[_0x2b852d(0xe3)](), 0x1388),
        _0x31d425 = await fetch(_0x2b852d(0xda), {
          method: _0x2b852d(0xdd),
          headers: { "Content-Type": _0x2b852d(0xbb) },
          body: JSON["stringify"]({
            sipAmt: _0x20c4c2,
            sipInvestPeriod: _0x4ead76,
            totalInvestPeriod: _0x41562a,
            growthRate: _0xdfb434,
          }),
          signal: _0x3aa9c7[_0x2b852d(0xe4)],
        });
      clearTimeout(_0x14799e);
      !_0x31d425["ok"] &&
        ((explainPara[_0x2b852d(0xdb)] = _0x2b852d(0xe7)),
        modalBtn[_0x2b852d(0xb0)]());
      const _0xb245a2 = await _0x31d425[_0x2b852d(0xd1)]();
      (!_0xb245a2?.["result"] || !_0xb245a2?.[_0x2b852d(0xe1)]) &&
        ((explainPara[_0x2b852d(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn[_0x2b852d(0xb0)]());
      let { result: _0x506c22, returnArr: _0x2f7c9f } = _0xb245a2;
      return { result: _0x506c22, returnArr: _0x2f7c9f };
    } catch (_0x395359) {
      console[_0x2b852d(0xb9)](_0x395359),
        (explainPara[_0x2b852d(0xdb)] = _0x2b852d(0xe7)),
        modalBtn[_0x2b852d(0xb0)]();
    }
  },
  calculatePreRetirementSWPReturn = async (
    _0x549a19,
    _0x1233eb,
    _0x67bc93,
    _0x5e660e,
    _0x316b14,
    _0xd28a13
  ) => {
    const _0x3a4943 = _0x5c03;
    try {
      const _0x2eeba1 = new AbortController(),
        _0x3e6fa5 = setTimeout(() => _0x2eeba1[_0x3a4943(0xe3)](), 0x1388),
        _0x584675 = await fetch(_0x3a4943(0xe6), {
          method: _0x3a4943(0xdd),
          headers: { "Content-Type": _0x3a4943(0xbb) },
          body: JSON[_0x3a4943(0xc3)]({
            currentAge: _0x549a19,
            retirementAge: _0x1233eb,
            currentSIPInvestment: _0x67bc93,
            currentLumpsumInvestment: _0x5e660e,
            investmentPortfolioRate: _0x316b14,
            swpRate: _0xd28a13,
          }),
          signal: _0x2eeba1[_0x3a4943(0xe4)],
        });
      clearTimeout(_0x3e6fa5);
      !_0x584675["ok"] &&
        ((explainPara[_0x3a4943(0xdb)] = _0x3a4943(0xe7)),
        modalBtn[_0x3a4943(0xb0)]());
      const _0x55cb80 = await _0x584675[_0x3a4943(0xd1)]();
      (!_0x55cb80?.["totalReturn"] || !_0x55cb80?.[_0x3a4943(0xae)]) &&
        ((explainPara["innerText"] = _0x3a4943(0xe7)),
        modalBtn[_0x3a4943(0xb0)]());
      let { totalReturn: _0x77e78c, swpReturn: _0x11f27e } = _0x55cb80;
      return { totalReturn: _0x77e78c, swpReturn: _0x11f27e };
    } catch (_0x2804bf) {
      console[_0x3a4943(0xb9)](_0x2804bf),
        (explainPara["innerText"] = _0x3a4943(0xe7)),
        modalBtn[_0x3a4943(0xb0)]();
    }
  },
  calculatePostRetirementSWPReturn = async (
    _0x3853db,
    _0x324e35,
    _0x28f894,
    _0x36961b
  ) => {
    const _0x4e08f0 = _0x5c03;
    try {
      const _0x29d6b8 = new AbortController(),
        _0x519ee9 = setTimeout(() => _0x29d6b8[_0x4e08f0(0xe3)](), 0x1388),
        _0x470596 = await fetch(_0x4e08f0(0xc1), {
          method: "POST",
          headers: { "Content-Type": _0x4e08f0(0xbb) },
          body: JSON[_0x4e08f0(0xc3)]({
            retirementCorpus: _0x3853db,
            investGrowthRate: _0x324e35,
            swpReturnRate: _0x28f894,
            corpusLeft: _0x36961b,
          }),
          signal: _0x29d6b8["signal"],
        });
      clearTimeout(_0x519ee9);
      !_0x470596["ok"] &&
        ((explainPara[_0x4e08f0(0xdb)] = _0x4e08f0(0xe7)),
        modalBtn[_0x4e08f0(0xb0)]());
      const _0x13c06a = await _0x470596[_0x4e08f0(0xd1)]();
      (!_0x13c06a?.["swpAmt"] || !_0x13c06a?.[_0x4e08f0(0xcc)]) &&
        ((explainPara["innerText"] = _0x4e08f0(0xe7)),
        modalBtn[_0x4e08f0(0xb0)]());
      let { swpAmt: _0x4e4733, maturityCorpusAmt: _0x270754 } = _0x13c06a;
      return { swpAmt: _0x4e4733, maturityCorpusAmt: _0x270754 };
    } catch (_0x38adf0) {
      console[_0x4e08f0(0xb9)](_0x38adf0),
        (explainPara[_0x4e08f0(0xdb)] = _0x4e08f0(0xe7)),
        modalBtn["click"]();
    }
  },
  calculateModelFinancialPortfolio = async (
    _0x494267,
    _0x3e5e3a,
    _0xacd524,
    _0x25f75e,
    _0x977613,
    _0xaf5a5b,
    _0x10b768,
    _0x5638fa,
    _0x299a3d,
    _0x33bb3c,
    _0x4c894d,
    _0x270e9b,
    _0x569496,
    _0x1a3bfd,
    _0x4bdbe9,
    _0x4d5d44,
    _0x49b72c,
    _0xd81964,
    _0xa985ca,
    _0x15f4bb,
    _0x4c2452,
    _0x2dfdc1,
    _0x353e27,
    _0x2a5256,
    _0x565559,
    _0x2b6484
  ) => {
    const _0x29fcae = _0x5c03;
    try {
      const _0x2aa18c = new AbortController(),
        _0x1cdb89 = setTimeout(() => _0x2aa18c[_0x29fcae(0xe3)](), 0x1388),
        _0x5c61bf = await fetch(_0x29fcae(0xc5), {
          method: _0x29fcae(0xdd),
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x29fcae(0xc3)]({
            ppfAmt: _0x494267,
            ppfRate: _0x3e5e3a,
            pfAmt: _0xacd524,
            pfRate: _0x25f75e,
            nscAmt: _0x977613,
            nscRate: _0xaf5a5b,
            postalAmt: _0x10b768,
            postalRate: _0x5638fa,
            bankAmt: _0x299a3d,
            bankRate: _0x33bb3c,
            companyAmt: _0x4c894d,
            companyRate: _0x270e9b,
            insuranceAmt: _0x569496,
            insuranceRate: _0x1a3bfd,
            equityAmt: _0x4bdbe9,
            equityRate: _0x4d5d44,
            balancedAmt: _0x49b72c,
            balancedRate: _0xd81964,
            nonLiquidDebtAmt: _0xa985ca,
            nonLiquidDebtRate: _0x15f4bb,
            liquidDebtAmt: _0x4c2452,
            liquidDebtRate: _0x2dfdc1,
            sipAmt: _0x353e27,
            sipRate: _0x2a5256,
            rdAmt: _0x565559,
            rdRate: _0x2b6484,
          }),
          signal: _0x2aa18c[_0x29fcae(0xe4)],
        });
      clearTimeout(_0x1cdb89);
      !_0x5c61bf["ok"] &&
        ((explainPara["innerText"] = _0x29fcae(0xe7)),
        modalBtn[_0x29fcae(0xb0)]());
      const _0x1dc790 = await _0x5c61bf[_0x29fcae(0xd1)]();
      !_0x1dc790?.["outputPortfolio"] &&
        ((explainPara["innerText"] = _0x29fcae(0xe7)),
        modalBtn[_0x29fcae(0xb0)]());
      let { outputPortfolio: _0x2e02dc } = _0x1dc790;
      return { outputPortfolio: _0x2e02dc };
    } catch (_0x366f54) {
      console[_0x29fcae(0xb9)](_0x366f54),
        (explainPara[_0x29fcae(0xdb)] =
          "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later."),
        modalBtn["click"]();
    }
  };
function _0x448a() {
  const _0x1e8ea9 = [
    "emiAmt",
    "emiPaymentBalance",
    "maturityCorpusAmt",
    "28gZDkBE",
    "debt",
    "totalInsureCommission",
    "4296152EgrWjZ",
    "json",
    "futureValue",
    "abs",
    "3209615fFPzxB",
    "investAppAmt",
    "1313960CNiMOf",
    "pow",
    "equity",
    "join",
    "https://operations.webclass.in/api/mfTools/limitedPeriodSIP",
    "innerText",
    "deficitCorpus",
    "POST",
    "18RVdNwK",
    "bank",
    "sipInvestFV",
    "returnArr",
    "totalCommission",
    "abort",
    "signal",
    "sipReturnList",
    "https://operations.webclass.in/api/mfTools/calculatePreRetirementSWPReturn",
    "Sorry!\x20We\x20couldn\x27t\x20calculate\x20your\x20returns\x20right\x20now.\x20Please\x20try\x20again\x20later.",
    "totalReturnList",
    "https://operations.webclass.in/api/mfTools/calculateRetirementGoal",
    "additionalReqdCorpus",
    "sip",
    "https://operations.webclass.in/api/mfTools/calculatePresentValue",
    "monthlyRequirementAtRetirement",
    "corpusAtRetirement",
    "690",
    "totalUpfrontTrail",
    "https://operations.webclass.in/api/mfTools/calculateSIPReturn",
    "prevTenYr",
    "https://operations.webclass.in/api/mfTools/diffBetweenInsuranceAndSIPCommission",
    "https://operations.webclass.in/api/mfTools/calculateDifferentialReturns",
    "futureCost",
    "insure",
    "push",
    "swpReturn",
    "toString",
    "click",
    "967887VUpEwR",
    "40056rqPnMX",
    "712062LSmvrj",
    "https://operations.webclass.in/api/mfTools/distributorCommissionCalc",
    "triggered",
    "postal",
    "currentYr",
    "https://operations.webclass.in/api/mfTools/calculatePmtValue",
    "log",
    "monthlySIPAmtForInvestment",
    "application/json",
    "https://operations.webclass.in/api/mfTools/needBasedApproach",
    "lumpsumAmt",
    "https://operations.webclass.in/api/mfTools/calculateTotalReturnWithLumpSumAndSIP",
    "excelPmt",
    "https://operations.webclass.in/api/mfTools/revenueModelSIPAndOneTimeBookSize",
    "https://operations.webclass.in/api/mfTools/calculatePostRetirementSWPReturn",
    "306260sriQYa",
    "stringify",
    "monthlyInvestReqd",
    "https://operations.webclass.in/api/mfTools/calculateModelFinancialPortfolio",
    "loanInterestPaid",
    "split",
    "ppf",
    "grossCommission",
  ];
  _0x448a = function () {
    return _0x1e8ea9;
  };
  return _0x448a();
}
