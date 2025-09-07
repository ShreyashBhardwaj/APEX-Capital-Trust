const _0x5a4ced = _0xb6ae;
(function (_0x25b2f9, _0x33c119) {
  const _0xe64d52 = _0xb6ae,
    _0x5a0e71 = _0x25b2f9();
  while (!![]) {
    try {
      const _0x8e46f6 =
        parseInt(_0xe64d52(0x1fb)) / 0x1 +
        (parseInt(_0xe64d52(0x1e8)) / 0x2) *
          (-parseInt(_0xe64d52(0x1de)) / 0x3) +
        -parseInt(_0xe64d52(0x1a8)) / 0x4 +
        -parseInt(_0xe64d52(0x197)) / 0x5 +
        -parseInt(_0xe64d52(0x17e)) / 0x6 +
        parseInt(_0xe64d52(0x1d3)) / 0x7 +
        parseInt(_0xe64d52(0x175)) / 0x8;
      if (_0x8e46f6 === _0x33c119) break;
      else _0x5a0e71["push"](_0x5a0e71["shift"]());
    } catch (_0x33ab41) {
      _0x5a0e71["push"](_0x5a0e71["shift"]());
    }
  }
})(_0x4bdf, 0x4f95a);
function _0xb6ae(_0x4681ff, _0x5b9366) {
  const _0x4bdf85 = _0x4bdf();
  return (
    (_0xb6ae = function (_0xb6aed4, _0x20c94d) {
      _0xb6aed4 = _0xb6aed4 - 0x170;
      let _0x443778 = _0x4bdf85[_0xb6aed4];
      return _0x443778;
    }),
    _0xb6ae(_0x4681ff, _0x5b9366)
  );
}
let explainPara = document[_0x5a4ced(0x18a)]("explainPara"),
  modalBtn = document[_0x5a4ced(0x18a)](_0x5a4ced(0x1e6));
const scrollToElement = (_0x196d54) => {
  const _0x1ce17d = _0x5a4ced,
    _0x3174f0 = document[_0x1ce17d(0x18a)](_0x196d54);
  if (_0x3174f0) {
    const _0x3d3620 = _0x3174f0["getBoundingClientRect"](),
      _0x1195f9 = window[_0x1ce17d(0x1ca)] + _0x3d3620["top"] - 0x64;
    window[_0x1ce17d(0x1cf)]({ top: _0x1195f9, behavior: _0x1ce17d(0x1ce) });
  }
};
document[_0x5a4ced(0x18f)]("click", (_0x1be047) => {
  const _0x13e027 = _0x5a4ced;
  let _0x1694c2 = _0x1be047["target"]["id"],
    _0x437081,
    _0x2e1a11,
    _0x524ae4,
    _0xb009e1,
    _0x1e396f,
    _0x39e5cf,
    _0x2120f6,
    _0x18aebe,
    _0x359458,
    _0x3fd90b;
  switch (_0x1694c2) {
    case _0x13e027(0x21a):
      _0x1be047["preventDefault"](),
        (_0x437081 = document[_0x13e027(0x18a)](_0x13e027(0x17c))),
        (_0x2e1a11 = document[_0x13e027(0x18a)](_0x13e027(0x1bf))),
        (_0x524ae4 = document[_0x13e027(0x18a)](_0x13e027(0x1cb))),
        (_0xb009e1 = document[_0x13e027(0x18a)](_0x13e027(0x18d))),
        (_0x1e396f = document["getElementById"]("snapshotDiv"));
      let _0x2dde34 = document[_0x13e027(0x18a)]("selfFunding");
      setTimeout(async () => {
        const _0x36010f = _0x13e027;
        if (
          _0x437081[_0x36010f(0x18e)] !== "" &&
          _0x2e1a11[_0x36010f(0x18e)] !== "" &&
          _0x524ae4["value"] !== "" &&
          _0xb009e1[_0x36010f(0x18e)] !== "" &&
          _0x2dde34[_0x36010f(0x18e)] !== ""
        ) {
          let _0x2ebe6c = _0x437081[_0x36010f(0x18e)][_0x36010f(0x1dc)](
              /,/g,
              ""
            ),
            _0x114064 = _0x2dde34["value"][_0x36010f(0x1dc)](/,/g, "");
          if (
            !(
              isNumeric(_0x2ebe6c) &&
              isNumeric(_0x2e1a11["value"]) &&
              isNumeric(_0x524ae4[_0x36010f(0x18e)]) &&
              isNumeric(_0xb009e1["value"]) &&
              isNumeric(_0x114064)
            )
          )
            (explainPara[_0x36010f(0x1e4)] = _0x36010f(0x19b)),
              modalBtn["click"]();
          else {
            let {
              bankFunding: _0x4c0a6a,
              emiAmt: _0x34c804,
              totalLoanPayment: _0x30cdc1,
              loanInterestPaid: _0x796fe0,
              emiPaymentBalance: _0x541dfe,
              sipInvestFV: _0x44ba82,
              houseCostFV: _0x1a939a,
              profitSIPInvest: _0xdbc082,
              monthlyRent: _0x123ecb,
            } = await calculateEMIVersusSIP(
              Number(_0x2ebe6c),
              Number(_0x114064),
              Number(_0x524ae4[_0x36010f(0x18e)]) / 0x64,
              Number(_0xb009e1[_0x36010f(0x18e)]),
              Number(_0x2e1a11["value"]) / 0x64
            );
            (_0x1e396f[_0x36010f(0x1eb)] = _0x36010f(0x192)),
              (_0x39e5cf = document[_0x36010f(0x18a)](_0x36010f(0x17d))),
              (_0x39e5cf["innerHTML"] = _0x36010f(0x1c6)),
              (showOutput = document[_0x36010f(0x18a)](_0x36010f(0x1cc))),
              (showOutput[_0x36010f(0x19a)] =
                _0x36010f(0x201) +
                _0x36010f(0x215) +
                _0x36010f(0x173) +
                _0x36010f(0x179) +
                _0x36010f(0x1f7) +
                _0x36010f(0x1c2) +
                Intl[_0x36010f(0x1be)](_0x36010f(0x1e0))["format"](
                  Math[_0x36010f(0x1fe)](_0x34c804)
                ) +
                _0x36010f(0x1f7) +
                _0x36010f(0x1f1) +
                _0x36010f(0x1c2) +
                Intl[_0x36010f(0x1be)](_0x36010f(0x1e0))["format"](
                  Math[_0x36010f(0x1fe)](_0x30cdc1)
                ) +
                _0x36010f(0x1f7) +
                _0x36010f(0x1c5) +
                "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                Intl[_0x36010f(0x1be)](_0x36010f(0x1e0))[_0x36010f(0x187)](
                  Math["round"](_0x4c0a6a)
                ) +
                _0x36010f(0x1f7) +
                _0x36010f(0x1f3) +
                "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                Intl["NumberFormat"]("en-IN")["format"](_0x796fe0) +
                _0x36010f(0x1f7) +
                _0x36010f(0x1c1) +
                _0x36010f(0x1c2) +
                Intl[_0x36010f(0x1be)](_0x36010f(0x1e0))[_0x36010f(0x187)](
                  Math["round"](_0x2ebe6c)
                ) +
                _0x36010f(0x1f7) +
                "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>Monthly\x20Rent\x20At\x203%\x20Rental\x20Yield</th>" +
                _0x36010f(0x1c2) +
                Intl[_0x36010f(0x1be)]("en-IN")[_0x36010f(0x187)](
                  Math["round"](_0x123ecb)
                ) +
                _0x36010f(0x1f7) +
                _0x36010f(0x195) +
                "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                Intl[_0x36010f(0x1be)]("en-IN")[_0x36010f(0x187)](
                  Math["round"](_0x541dfe)
                ) +
                _0x36010f(0x1f7) +
                "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Assumed\x20SIP\x20Growth\x20Rate</th>" +
                _0x36010f(0x1f9) +
                _0x36010f(0x1d2) +
                _0x36010f(0x1c2) +
                Intl["NumberFormat"](_0x36010f(0x1e0))[_0x36010f(0x187)](
                  Math["round"](_0x44ba82)
                ) +
                _0x36010f(0x1f7) +
                _0x36010f(0x1b1) +
                _0x36010f(0x1c2) +
                Intl[_0x36010f(0x1be)](_0x36010f(0x1e0))["format"](
                  Math[_0x36010f(0x1fe)](_0x1a939a)
                ) +
                _0x36010f(0x1f7) +
                _0x36010f(0x20b) +
                _0x36010f(0x1c2) +
                Intl[_0x36010f(0x1be)]("en-IN")[_0x36010f(0x187)](
                  Math["round"](_0xdbc082)
                ) +
                "</th>" +
                "</tr></thead></table></div>"),
              scrollToElement("resultHeader");
          }
        } else
          (explainPara[_0x36010f(0x1e4)] = _0x36010f(0x21f)),
            modalBtn[_0x36010f(0x1b0)]();
      }, 0x0);
      break;
    case _0x13e027(0x1bc):
      _0x1be047[_0x13e027(0x176)](),
        (_0x2120f6 = document[_0x13e027(0x18a)](_0x13e027(0x1e3)));
      let _0x3d594c = document[_0x13e027(0x18a)](_0x13e027(0x1b6));
      (_0x18aebe = document[_0x13e027(0x18a)](_0x13e027(0x1df))),
        (_0xb009e1 = document[_0x13e027(0x18a)](_0x13e027(0x196))),
        (_0x1e396f = document[_0x13e027(0x18a)](_0x13e027(0x1d8))),
        setTimeout(async () => {
          const _0x514531 = _0x13e027;
          if (
            _0x2120f6[_0x514531(0x18e)] !== "" &&
            _0x3d594c[_0x514531(0x18e)] !== "" &&
            _0x18aebe["value"] !== "" &&
            _0xb009e1[_0x514531(0x18e)] !== ""
          ) {
            _0x3fd90b = _0x2120f6[_0x514531(0x18e)][_0x514531(0x1dc)](/,/g, "");
            if (
              !(
                isNumeric(_0x3fd90b) &&
                isNumeric(_0x3d594c["value"]) &&
                isNumeric(_0x18aebe["value"]) &&
                isNumeric(_0xb009e1[_0x514531(0x18e)])
              )
            )
              (explainPara[_0x514531(0x1e4)] =
                "Please\x20enter\x20only\x20numeric\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate\x20and\x20time\x20period\x20to\x20calculate\x20Human\x20Life\x20Value\x20For\x20Insurance"),
                modalBtn[_0x514531(0x1b0)]();
            else {
              let { reqdCorpus: _0x7d2758 } = await humanLifeMethod(
                Number(_0x3fd90b),
                Number(_0x3d594c[_0x514531(0x18e)]) / 0x64,
                Number(_0x18aebe["value"]) / 0x64,
                Number(_0xb009e1[_0x514531(0x18e)])
              );
              (_0x1e396f[_0x514531(0x1eb)] = _0x514531(0x192)),
                (_0x39e5cf = document[_0x514531(0x18a)]("resultHeader")),
                (_0x39e5cf[_0x514531(0x19a)] = _0x514531(0x19f)),
                (showOutput = document[_0x514531(0x18a)](_0x514531(0x1cc))),
                (showOutput["innerHTML"] =
                  _0x514531(0x201) +
                  _0x514531(0x215) +
                  _0x514531(0x173) +
                  "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Insurance\x20Corpus\x20Required" +
                  _0x514531(0x1f7) +
                  _0x514531(0x1c2) +
                  Intl[_0x514531(0x1be)](_0x514531(0x1e0))["format"](
                    Math[_0x514531(0x1fe)](_0x7d2758)
                  ) +
                  _0x514531(0x1f7) +
                  _0x514531(0x172)),
                scrollToElement("resultHeader");
            }
          } else
            (explainPara[_0x514531(0x1e4)] = _0x514531(0x219)),
              modalBtn[_0x514531(0x1b0)]();
        }, 0x0);
      break;
    case _0x13e027(0x218):
      _0x1be047["preventDefault"](),
        (_0x2120f6 = document["getElementById"](_0x13e027(0x1e3)));
      let _0x5aeea0 = document["getElementById"](_0x13e027(0x1b6));
      (_0x18aebe = document[_0x13e027(0x18a)](_0x13e027(0x1df))),
        (_0xb009e1 = document[_0x13e027(0x18a)]("timePeriod")),
        (_0x1e396f = document[_0x13e027(0x18a)](_0x13e027(0x1d8)));
      let _0x15cc8c = document["getElementById"](_0x13e027(0x20d)),
        _0x5d4088 = document[_0x13e027(0x18a)](_0x13e027(0x1ec)),
        _0x11e745 = document["getElementById"](_0x13e027(0x170)),
        _0x5dbbfa = document[_0x13e027(0x18a)](_0x13e027(0x1dd)),
        _0x30290c = document["getElementById"](_0x13e027(0x181));
      setTimeout(async () => {
        const _0xa21fa = _0x13e027;
        if (
          _0x2120f6["value"] !== "" &&
          _0x5aeea0[_0xa21fa(0x18e)] !== "" &&
          _0x18aebe[_0xa21fa(0x18e)] !== "" &&
          _0xb009e1[_0xa21fa(0x18e)] !== "" &&
          _0x15cc8c[_0xa21fa(0x18e)] !== "" &&
          _0x5d4088[_0xa21fa(0x18e)] !== "" &&
          _0x11e745[_0xa21fa(0x18e)] !== "" &&
          _0x5dbbfa[_0xa21fa(0x18e)] !== "" &&
          _0x30290c[_0xa21fa(0x18e)] !== ""
        ) {
          _0x3fd90b = _0x2120f6[_0xa21fa(0x18e)][_0xa21fa(0x1dc)](/,/g, "");
          let _0x38b8e4 = _0x15cc8c[_0xa21fa(0x18e)][_0xa21fa(0x1dc)](/,/g, ""),
            _0x456293 = _0x5d4088[_0xa21fa(0x18e)][_0xa21fa(0x1dc)](/,/g, ""),
            _0x84106a = _0x11e745[_0xa21fa(0x18e)][_0xa21fa(0x1dc)](/,/g, ""),
            _0x54d2a8 = _0x30290c["value"][_0xa21fa(0x1dc)](/,/g, ""),
            _0x19bd7c = _0x5dbbfa[_0xa21fa(0x18e)]["replace"](/,/g, "");
          if (
            !(
              isNumeric(_0x3fd90b) &&
              isNumeric(_0x5aeea0[_0xa21fa(0x18e)]) &&
              isNumeric(_0x18aebe[_0xa21fa(0x18e)]) &&
              isNumeric(_0xb009e1[_0xa21fa(0x18e)]) &&
              isNumeric(_0x38b8e4) &&
              isNumeric(_0x456293) &&
              isNumeric(_0x84106a) &&
              isNumeric(_0x19bd7c) &&
              isNumeric(_0x54d2a8)
            )
          )
            (explainPara[_0xa21fa(0x1e4)] = _0xa21fa(0x1ee)),
              modalBtn[_0xa21fa(0x1b0)]();
          else {
            let { reqdCorpus: _0xa6e208, additionalReqdCorpus: _0x5b5ac0 } =
              await needBasedApproach(
                Number(_0x3fd90b),
                Number(_0x5aeea0[_0xa21fa(0x18e)]) / 0x64,
                Number(_0x18aebe[_0xa21fa(0x18e)]) / 0x64,
                Number(_0xb009e1[_0xa21fa(0x18e)]),
                Number(_0x38b8e4),
                Number(_0x456293),
                Number(_0x84106a),
                Number(_0x19bd7c),
                Number(_0x54d2a8)
              );
            (_0x1e396f[_0xa21fa(0x1eb)] = _0xa21fa(0x192)),
              (_0x39e5cf = document[_0xa21fa(0x18a)]("resultHeader")),
              (_0x39e5cf[_0xa21fa(0x19a)] =
                "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Human\x20Life\x20Insurance\x20Amount\x20Results</h5>"),
              (showOutput = document[_0xa21fa(0x18a)]("showOutput")),
              (showOutput[_0xa21fa(0x19a)] =
                _0xa21fa(0x201) +
                _0xa21fa(0x215) +
                _0xa21fa(0x173) +
                "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Insurance\x20Corpus\x20Required\x20(As\x20Per\x20Human\x20Life\x20Value\x20Method)" +
                _0xa21fa(0x1f7) +
                _0xa21fa(0x1c2) +
                Intl["NumberFormat"](_0xa21fa(0x1e0))["format"](
                  Math[_0xa21fa(0x1fe)](_0xa6e208)
                ) +
                _0xa21fa(0x216) +
                "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Insurance\x20Corpus\x20Required\x20(As\x20Per\x20Needs-Based\x20Approach)" +
                "</th>" +
                "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                Intl[_0xa21fa(0x1be)](_0xa21fa(0x1e0))["format"](
                  Math["round"](_0x5b5ac0)
                ) +
                _0xa21fa(0x1f7) +
                _0xa21fa(0x172)),
              scrollToElement(_0xa21fa(0x17d));
          }
        } else
          (explainPara[_0xa21fa(0x1e4)] = _0xa21fa(0x1bb)), modalBtn["click"]();
      }, 0x0);
      break;
    case _0x13e027(0x1e2):
      _0x1be047[_0x13e027(0x176)](),
        (_0x524ae4 = document[_0x13e027(0x18a)](_0x13e027(0x1f2))),
        (_0xb009e1 = document["getElementById"](_0x13e027(0x196))),
        (_0x1e396f = document["getElementById"](_0x13e027(0x1d8))),
        (_0x359458 = document[_0x13e027(0x18a)](_0x13e027(0x1ab))),
        setTimeout(async () => {
          const _0x50efcf = _0x13e027;
          if (
            _0x524ae4["value"] !== "" &&
            _0xb009e1[_0x50efcf(0x18e)] !== "" &&
            _0x359458[_0x50efcf(0x18e)] !== ""
          ) {
            let _0x556d77 = _0x359458[_0x50efcf(0x18e)][_0x50efcf(0x1dc)](
              /,/g,
              ""
            );
            if (
              !(
                isNumeric(_0x524ae4[_0x50efcf(0x18e)]) &&
                isNumeric(_0x556d77) &&
                isNumeric(_0xb009e1[_0x50efcf(0x18e)])
              )
            )
              (explainPara["innerText"] = _0x50efcf(0x1b2)),
                modalBtn[_0x50efcf(0x1b0)]();
            else {
              let { pmt: _0x41de51 } = await calculatePmt(
                Number(_0x524ae4[_0x50efcf(0x18e)]) / 0x4b0,
                Number(_0xb009e1[_0x50efcf(0x18e)]) * 0xc,
                0x0,
                Number(_0x556d77)
              );
              (_0x1e396f["style"] = _0x50efcf(0x192)),
                (_0x39e5cf = document[_0x50efcf(0x18a)](_0x50efcf(0x17d))),
                (_0x39e5cf[_0x50efcf(0x19a)] = _0x50efcf(0x193)),
                (showOutput = document[_0x50efcf(0x18a)](_0x50efcf(0x1cc))),
                (showOutput[_0x50efcf(0x19a)] =
                  _0x50efcf(0x201) +
                  _0x50efcf(0x215) +
                  "<thead\x20class=\x22text-md\x20text-gray-700\x20bg-gray-50\x20\x20\x22>" +
                  _0x50efcf(0x1a4) +
                  _0x50efcf(0x1f7) +
                  _0x50efcf(0x1c2) +
                  Intl["NumberFormat"]("en-IN")[_0x50efcf(0x187)](
                    Math[_0x50efcf(0x1fe)](_0x41de51)
                  ) +
                  "</th></tr>" +
                  _0x50efcf(0x17b)),
                scrollToElement(_0x50efcf(0x17d));
            }
          } else
            (explainPara["innerText"] =
              "Please\x20fill\x20in\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate,\x20time\x20period,\x20outstanding\x20loan\x20amount,\x20children\x20education\x20liability,\x20marriage\x20incidental\x20liability,\x20available\x20insurance\x20deductible\x20and\x20current\x20investment\x20balance\x20to\x20calculate\x20Needs\x20Based\x20Value\x20For\x20Insurance"),
              modalBtn["click"]();
        }, 0x0);
      break;
    case "futureExpenseButton":
      _0x1be047[_0x13e027(0x176)](),
        (_0x524ae4 = document[_0x13e027(0x18a)]("rateOfReturn")),
        (_0xb009e1 = document["getElementById"](_0x13e027(0x196))),
        (_0x1e396f = document["getElementById"]("snapshotDiv")),
        (_0x437081 = document["getElementById"](_0x13e027(0x1db))),
        setTimeout(async () => {
          const _0x189680 = _0x13e027;
          if (
            _0x524ae4[_0x189680(0x18e)] !== "" &&
            _0xb009e1[_0x189680(0x18e)] !== "" &&
            _0x437081["value"] !== ""
          ) {
            let _0x3c80bc = _0x437081[_0x189680(0x18e)][_0x189680(0x1dc)](
              /,/g,
              ""
            );
            if (
              !(
                isNumeric(_0x524ae4[_0x189680(0x18e)]) &&
                isNumeric(_0x3c80bc) &&
                isNumeric(_0xb009e1[_0x189680(0x18e)])
              )
            )
              (explainPara[_0x189680(0x1e4)] = _0x189680(0x1e1)),
                modalBtn["click"]();
            else {
              let { futureValue: _0x48dd4b } = await calculateFV(
                Number(_0x524ae4[_0x189680(0x18e)]) / 0x64,
                Number(_0xb009e1["value"]),
                0x0,
                Number(_0x3c80bc)
              );
              const _0x26842a = {
                colors: ["#1A56DB", _0x189680(0x18b)],
                series: [
                  {
                    name: "Present\x20Value\x20of\x20Expense",
                    data: [Math[_0x189680(0x1fe)](_0x3c80bc), 0x0],
                  },
                  {
                    name: _0x189680(0x1c7),
                    data: [0x0, Math[_0x189680(0x1fe)](_0x48dd4b)],
                  },
                ],
                chart: {
                  type: _0x189680(0x1b9),
                  height: _0x189680(0x1aa),
                  width: _0x189680(0x1e7),
                  fontFamily: "Inter,\x20sans-serif",
                  toolbar: { show: ![] },
                },
                plotOptions: {
                  bar: {
                    horizontal: ![],
                    columnWidth: _0x189680(0x1ac),
                    borderRadius: 0x8,
                  },
                },
                tooltip: {
                  shared: !![],
                  intersect: ![],
                  style: { fontFamily: _0x189680(0x18c) },
                },
                states: {
                  hover: { filter: { type: _0x189680(0x1b7), value: 0x1 } },
                },
                stroke: { show: !![], width: 0x0, colors: [_0x189680(0x20c)] },
                grid: {
                  show: ![],
                  strokeDashArray: 0x4,
                  padding: { left: 0x2, right: 0x2, top: -0xe },
                },
                dataLabels: {
                  enabled: ![],
                  offsetY: -0x14,
                  style: {
                    fontSize: _0x189680(0x1ed),
                    fontWeight: _0x189680(0x217),
                    colors: ["#fff"],
                  },
                },
                legend: {
                  position: _0x189680(0x1c0),
                  offsetY: 0xa,
                  itemMargin: { horizontal: 0x5 },
                },
                xaxis: {
                  categories: [Number(_0x3c80bc) + "", Number(_0x48dd4b) + ""],
                  labels: {
                    show: ![],
                    style: {
                      fontFamily: _0x189680(0x18c),
                      cssClass: _0x189680(0x180),
                    },
                  },
                  axisBorder: { show: ![] },
                  axisTicks: { show: ![] },
                },
                yaxis: { show: ![] },
                fill: { opacity: 0x1 },
              };
              if (
                document[_0x189680(0x18a)](_0x189680(0x212)) &&
                typeof ApexCharts !== _0x189680(0x183)
              ) {
                const _0x1153ae = new ApexCharts(
                  document[_0x189680(0x18a)](_0x189680(0x212)),
                  _0x26842a
                );
                _0x1153ae["render"]();
              }
              (_0x39e5cf = document["getElementById"](_0x189680(0x17d))),
                (_0x39e5cf[_0x189680(0x19a)] = _0x189680(0x191)),
                (showOutput = document[_0x189680(0x18a)](_0x189680(0x1cc))),
                (showOutput[_0x189680(0x19a)] =
                  _0x189680(0x201) +
                  _0x189680(0x215) +
                  _0x189680(0x173) +
                  _0x189680(0x1d7) +
                  _0x189680(0x1f7) +
                  _0x189680(0x1c2) +
                  Intl[_0x189680(0x1be)]("en-IN")["format"](
                    Math[_0x189680(0x1fe)](_0x3c80bc)
                  ) +
                  _0x189680(0x216) +
                  _0x189680(0x211) +
                  _0x189680(0x1f7) +
                  _0x189680(0x1c2) +
                  Intl["NumberFormat"](_0x189680(0x1e0))[_0x189680(0x187)](
                    Math[_0x189680(0x1fe)](_0x48dd4b)
                  ) +
                  _0x189680(0x216) +
                  _0x189680(0x17b)),
                scrollToElement("resultHeader");
            }
          } else
            (explainPara["innerText"] = _0x189680(0x1bb)),
              modalBtn[_0x189680(0x1b0)]();
        }, 0x0);
      break;
    case _0x13e027(0x21c):
      _0x1be047[_0x13e027(0x176)](),
        (_0x524ae4 = document[_0x13e027(0x18a)](_0x13e027(0x1f2)));
      let _0x3fcd4c = document[_0x13e027(0x18a)](_0x13e027(0x1fc)),
        _0x1bcda0 = document[_0x13e027(0x18a)](_0x13e027(0x1d0));
      (_0x1e396f = document[_0x13e027(0x18a)](_0x13e027(0x1d8))),
        (_0x437081 = document["getElementById"](_0x13e027(0x185))),
        setTimeout(async () => {
          const _0x535157 = _0x13e027;
          if (
            _0x524ae4["value"] !== "" &&
            _0x3fcd4c[_0x535157(0x18e)] !== "" &&
            _0x1bcda0["value"] !== "" &&
            _0x437081[_0x535157(0x18e)] !== ""
          ) {
            let _0x36068a = _0x437081[_0x535157(0x18e)]["replace"](/,/g, "");
            if (
              !(
                isNumeric(_0x524ae4[_0x535157(0x18e)]) &&
                isNumeric(_0x36068a) &&
                isNumeric(_0x3fcd4c[_0x535157(0x18e)]) &&
                isNumeric(_0x1bcda0[_0x535157(0x18e)])
              )
            )
              (explainPara[_0x535157(0x1e4)] = _0x535157(0x209)),
                modalBtn[_0x535157(0x1b0)]();
            else {
              let { result: _0x4b311b, returnArr: _0x3b3e3e } =
                await limitedPeriodSip(
                  Number(_0x36068a),
                  Number(_0x1bcda0["value"]),
                  Number(_0x3fcd4c[_0x535157(0x18e)]),
                  Number(_0x524ae4[_0x535157(0x18e)]) / 0x64
                );
              const _0x5dde2e = () => {
                  const _0x3ee377 = _0x535157;
                  let _0x1b378c = new Date()["getFullYear"]();
                  const _0x21afb6 = [];
                  for (
                    let _0x3444bf = 0x0;
                    _0x3444bf < Number(_0x3fcd4c[_0x3ee377(0x18e)]);
                    _0x3444bf++
                  ) {
                    _0x21afb6["push"](_0x1b378c + _0x3444bf);
                  }
                  return _0x21afb6;
                },
                _0x15f9ca = {
                  chart: {
                    height: _0x535157(0x198),
                    width: "600px",
                    type: _0x535157(0x1d1),
                    fontFamily: _0x535157(0x18c),
                    dropShadow: { enabled: ![] },
                    toolbar: { show: ![] },
                  },
                  tooltip: { enabled: !![], x: { show: ![] } },
                  dataLabels: { enabled: ![] },
                  stroke: { width: 0x6 },
                  grid: {
                    show: !![],
                    strokeDashArray: 0x4,
                    padding: { left: 0x2, right: 0x2, top: -0x1a },
                  },
                  series: [
                    {
                      name: _0x535157(0x1d4),
                      data: _0x3b3e3e,
                      color: _0x535157(0x1b5),
                    },
                  ],
                  legend: { show: ![] },
                  stroke: { curve: "smooth" },
                  xaxis: {
                    categories: _0x5dde2e(),
                    labels: {
                      show: !![],
                      rotate: -0x2d,
                      style: {
                        fontFamily: _0x535157(0x18c),
                        cssClass: _0x535157(0x1c9),
                      },
                    },
                    axisBorder: { show: ![] },
                    axisTicks: { show: ![] },
                    tickAmount: _0x5dde2e()[_0x535157(0x1ad)] / 0x2,
                  },
                  yaxis: { show: ![] },
                };
              if (
                document["getElementById"]("line-chart") &&
                typeof ApexCharts !== _0x535157(0x183)
              ) {
                const _0x803752 = new ApexCharts(
                  document["getElementById"]("line-chart"),
                  _0x15f9ca
                );
                _0x803752[_0x535157(0x1e9)]();
              }
              (_0x1e396f[_0x535157(0x1eb)] = "display:\x22block\x22"),
                (_0x39e5cf = document[_0x535157(0x18a)]("resultHeader")),
                (_0x39e5cf["innerHTML"] =
                  "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Limited\x20Period\x20SIP\x20Maturity\x20Amount</h5>"),
                (showOutput = document[_0x535157(0x18a)](_0x535157(0x1cc))),
                (showOutput["innerHTML"] =
                  _0x535157(0x201) +
                  _0x535157(0x215) +
                  _0x535157(0x173) +
                  "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Total\x20SIP\x20Investment" +
                  _0x535157(0x1f7) +
                  _0x535157(0x1c2) +
                  Intl["NumberFormat"](_0x535157(0x1e0))[_0x535157(0x187)](
                    Math["round"](
                      Number(_0x36068a) *
                        Number(_0x1bcda0[_0x535157(0x18e)]) *
                        0xc
                    )
                  ) +
                  _0x535157(0x216) +
                  _0x535157(0x1f5) +
                  _0x535157(0x1f7) +
                  _0x535157(0x1c2) +
                  Intl[_0x535157(0x1be)](_0x535157(0x1e0))[_0x535157(0x187)](
                    Math[_0x535157(0x1fe)](_0x4b311b)
                  ) +
                  _0x535157(0x216) +
                  "</thead></table></div>"),
                scrollToElement(_0x535157(0x17d));
            }
          } else
            (explainPara["innerText"] = _0x535157(0x206)),
              modalBtn[_0x535157(0x1b0)]();
        }, 0x0);
      break;
    case _0x13e027(0x174):
      _0x1be047[_0x13e027(0x176)]();
      let _0x32b18d = document["getElementById"](_0x13e027(0x1ef)),
        _0x1259f1 = document[_0x13e027(0x18a)]("retirementAge"),
        _0x3b17c3 = document[_0x13e027(0x18a)](_0x13e027(0x1c3)),
        _0x5a3fa0 = document["getElementById"]("currentLumpsumInvest"),
        _0x1812c0 = document[_0x13e027(0x18a)](_0x13e027(0x1a9)),
        _0x5e9698 = document[_0x13e027(0x18a)](_0x13e027(0x194));
      _0x1e396f = document[_0x13e027(0x18a)](_0x13e027(0x1d8));
      let _0x1ea035 = document[_0x13e027(0x18a)](_0x13e027(0x1b4));
      setTimeout(async () => {
        const _0x5227b5 = _0x13e027;
        if (
          _0x32b18d[_0x5227b5(0x18e)] !== "" &&
          _0x1259f1[_0x5227b5(0x18e)] !== "" &&
          _0x3b17c3["value"] !== "" &&
          _0x5a3fa0[_0x5227b5(0x18e)] !== "" &&
          _0x1812c0["value"] !== "" &&
          _0x5e9698[_0x5227b5(0x18e)] !== ""
        ) {
          let _0xb12cb4 = _0x3b17c3[_0x5227b5(0x18e)][_0x5227b5(0x1dc)](
              /,/g,
              ""
            ),
            _0x1b5c47 = _0x5a3fa0[_0x5227b5(0x18e)]["replace"](/,/g, "");
          if (
            !(
              isNumeric(_0x32b18d[_0x5227b5(0x18e)]) &&
              isNumeric(_0x1259f1["value"]) &&
              isNumeric(_0xb12cb4) &&
              isNumeric(_0x1b5c47) &&
              isNumeric(_0x1812c0["value"]) &&
              isNumeric(_0x5e9698["value"])
            )
          )
            (explainPara[_0x5227b5(0x1e4)] =
              "Please\x20fill\x20only\x20numeric\x20values\x20for\x20Current\x20Age,\x20Retirment\x20Age,\x20Life\x20Expectancy,\x20Current\x20SIP\x20Investment,\x20Current\x20Lumpsum\x20Investment,\x20Investment\x20Portfolio\x20Return\x20and\x20SWP\x20Return\x20Rate\x20to\x20use\x20Pre-Retirement\x20SWP\x20Calculator"),
              modalBtn["click"]();
          else {
            let { totalReturn: _0xa292a7, swpReturn: _0x2a6865 } =
              await calculatePreRetirementSWPReturn(
                Number(_0x32b18d["value"]),
                Number(_0x1259f1["value"]),
                Number(_0xb12cb4),
                Number(_0x1b5c47),
                Number(_0x1812c0[_0x5227b5(0x18e)]) / 0x64,
                Number(_0x5e9698[_0x5227b5(0x18e)]) / 0x64
              );
            (_0x1e396f[_0x5227b5(0x1eb)] = _0x5227b5(0x192)),
              (_0x39e5cf = document[_0x5227b5(0x18a)](_0x5227b5(0x17d))),
              (_0x39e5cf["innerHTML"] =
                "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Pre-Retirement\x20SWP\x20Calculator\x20Maturity\x20Amount</h5>"),
              (showOutput = document["getElementById"]("showOutput")),
              (showOutput["innerHTML"] =
                "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>" +
                _0x5227b5(0x215) +
                _0x5227b5(0x173) +
                _0x5227b5(0x214) +
                _0x5227b5(0x1f7) +
                "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                Intl["NumberFormat"](_0x5227b5(0x1e0))[_0x5227b5(0x187)](
                  Math[_0x5227b5(0x1fe)](_0xa292a7)
                ) +
                "</th></tr>" +
                "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>SWP\x20After\x20" +
                _0x1259f1["value"] +
                "\x20Yrs\x20(₹)" +
                _0x5227b5(0x1f7) +
                _0x5227b5(0x1c2) +
                Intl["NumberFormat"]("en-IN")["format"](
                  Math["round"](_0x2a6865)
                ) +
                "</th></tr>" +
                "</thead></table></div>"),
              !_0x1ea035[_0x5227b5(0x19a)]["includes"](
                "<h5\x20style=\x22color:\x20#ba0713\x22\x20class=\x22leading-none\x20mt-5\x20mb-4\x20text-center\x20text-lg\x20mb-4\x20font-medium\x20\x20pb-1\x22>Note:\x20Your\x20Retirement\x20Corpus\x20remains\x20intact\x20throughout\x20your\x20retirement</h5>"
              ) &&
                (_0x1ea035["innerHTML"] =
                  _0x1ea035[_0x5227b5(0x19a)] + _0x5227b5(0x1d9)),
              scrollToElement("resultHeader");
          }
        } else
          (explainPara[_0x5227b5(0x1e4)] = _0x5227b5(0x19d)),
            modalBtn[_0x5227b5(0x1b0)]();
      }, 0x0);
      break;
    case _0x13e027(0x1a3):
      _0x1be047[_0x13e027(0x176)]();
      let _0x20a1a2 = document["getElementById"](_0x13e027(0x1ea)),
        _0x1af4b8 = document[_0x13e027(0x18a)](_0x13e027(0x1b6)),
        _0x55a2b4 = document["getElementById"]("swpReturnRate"),
        _0x24eb18 = document[_0x13e027(0x18a)](_0x13e027(0x1bd));
      (_0x1e396f = document["getElementById"](_0x13e027(0x1d8))),
        setTimeout(async () => {
          const _0x33c006 = _0x13e027;
          if (
            _0x20a1a2[_0x33c006(0x18e)] !== "" &&
            _0x1af4b8[_0x33c006(0x18e)] !== "" &&
            _0x55a2b4["value"] !== "" &&
            _0x24eb18["value"] !== ""
          ) {
            let _0x5bf8a6 = _0x20a1a2[_0x33c006(0x18e)][_0x33c006(0x1dc)](
              /,/g,
              ""
            );
            if (
              !(
                isNumeric(_0x5bf8a6) &&
                isNumeric(_0x1af4b8["value"]) &&
                isNumeric(_0x55a2b4[_0x33c006(0x18e)]) &&
                isNumeric(_0x24eb18[_0x33c006(0x18e)])
              )
            )
              (explainPara[_0x33c006(0x1e4)] = _0x33c006(0x188)),
                modalBtn["click"]();
            else {
              let { swpAmt: _0x4cf516, maturityCorpusAmt: _0x205c12 } =
                await calculatePostRetirementSWPReturn(
                  Number(_0x5bf8a6),
                  Number(_0x1af4b8[_0x33c006(0x18e)]) / 0x64,
                  Number(_0x55a2b4["value"]) / 0x64,
                  Number(_0x24eb18[_0x33c006(0x18e)])
                );
              (_0x1e396f["style"] = _0x33c006(0x192)),
                (_0x39e5cf = document[_0x33c006(0x18a)]("resultHeader")),
                (_0x39e5cf[_0x33c006(0x19a)] = _0x33c006(0x1ae)),
                (showOutput = document[_0x33c006(0x18a)]("showOutput")),
                (showOutput[_0x33c006(0x19a)] =
                  _0x33c006(0x201) +
                  "<table\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20\x22>" +
                  _0x33c006(0x173) +
                  "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>SWP\x20Amount\x20After\x20Retirement\x20(₹)" +
                  _0x33c006(0x1f7) +
                  "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                  Intl["NumberFormat"](_0x33c006(0x1e0))[_0x33c006(0x187)](
                    Math["round"](_0x4cf516)
                  ) +
                  _0x33c006(0x216) +
                  _0x33c006(0x21d) +
                  _0x33c006(0x1f7) +
                  "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
                  Intl[_0x33c006(0x1be)](_0x33c006(0x1e0))[_0x33c006(0x187)](
                    Math["round"](_0x205c12)
                  ) +
                  _0x33c006(0x216) +
                  _0x33c006(0x17b)),
                scrollToElement("resultHeader");
            }
          } else
            (explainPara["innerText"] =
              "Please\x20fill\x20in\x20values\x20for\x20\x20Retirement\x20Corpus,\x20Investment\x20Growth\x20Rate,\x20SWP\x20Return\x20Rate\x20and\x20Time\x20Left\x20Until\x20Corpus\x20Maturity\x20to\x20use\x20Post-Retirement\x20SWP\x20Calculator"),
              modalBtn[_0x33c006(0x1b0)]();
        }, 0x0);
      break;
    case "portfolioForecastingBtn":
      _0x1be047[_0x13e027(0x176)]();
      let _0x548b37 = document[_0x13e027(0x18a)](_0x13e027(0x177)),
        _0x16fde2 = document["getElementById"](_0x13e027(0x1af)),
        _0xe84bc6 = document["getElementById"](_0x13e027(0x1c8)),
        _0x47f29a = document[_0x13e027(0x18a)](_0x13e027(0x1d5)),
        _0x5643a1 = document[_0x13e027(0x18a)](_0x13e027(0x202)),
        _0x4811d2 = document["getElementById"](_0x13e027(0x213)),
        _0x4b686e = document[_0x13e027(0x18a)]("postalAmount"),
        _0x11b3ee = document[_0x13e027(0x18a)](_0x13e027(0x17f)),
        _0x4b3d51 = document["getElementById"](_0x13e027(0x17a)),
        _0x1c407a = document[_0x13e027(0x18a)](_0x13e027(0x1b3)),
        _0x224b45 = document[_0x13e027(0x18a)](_0x13e027(0x20e)),
        _0x136464 = document[_0x13e027(0x18a)](_0x13e027(0x1a2)),
        _0x124507 = document[_0x13e027(0x18a)](_0x13e027(0x19c)),
        _0x21eaf6 = document[_0x13e027(0x18a)](_0x13e027(0x1f0)),
        _0x1bdfec = document["getElementById"]("equityAmount"),
        _0x3d4432 = document[_0x13e027(0x18a)](_0x13e027(0x184)),
        _0x1db6e6 = document["getElementById"]("balancedAmount"),
        _0x13c2bd = document[_0x13e027(0x18a)](_0x13e027(0x200)),
        _0x743c7f = document[_0x13e027(0x18a)]("nonLiquidDebtAmount"),
        _0x324c79 = document[_0x13e027(0x18a)](_0x13e027(0x1a0)),
        _0x196c5e = document[_0x13e027(0x18a)](_0x13e027(0x20a)),
        _0x1b9489 = document[_0x13e027(0x18a)]("liquidDebtRate"),
        _0x388f93 = document[_0x13e027(0x18a)]("sipAmount"),
        _0x3cec33 = document[_0x13e027(0x18a)](_0x13e027(0x208)),
        _0x20f757 = document[_0x13e027(0x18a)]("rdAmount"),
        _0x8f5fab = document[_0x13e027(0x18a)]("rdRate");
      (_0x1e396f = document[_0x13e027(0x18a)](_0x13e027(0x1d8))),
        setTimeout(async () => {
          const _0x462c56 = _0x13e027;
          if (
            _0x548b37["value"] !== "" &&
            _0x16fde2[_0x462c56(0x18e)] !== "" &&
            _0xe84bc6[_0x462c56(0x18e)] !== "" &&
            _0x47f29a["value"] !== "" &&
            _0x5643a1["value"] !== "" &&
            _0x4811d2[_0x462c56(0x18e)] !== "" &&
            _0x4b686e[_0x462c56(0x18e)] !== "" &&
            _0x11b3ee[_0x462c56(0x18e)] !== "" &&
            _0x4b3d51[_0x462c56(0x18e)] !== "" &&
            _0x1c407a[_0x462c56(0x18e)] !== "" &&
            _0x224b45[_0x462c56(0x18e)] !== "" &&
            _0x136464[_0x462c56(0x18e)] !== "" &&
            _0x124507[_0x462c56(0x18e)] !== "" &&
            _0x21eaf6[_0x462c56(0x18e)] !== "" &&
            _0x1bdfec[_0x462c56(0x18e)] !== "" &&
            _0x3d4432["value"] !== "" &&
            _0x1db6e6[_0x462c56(0x18e)] !== "" &&
            _0x13c2bd[_0x462c56(0x18e)] !== "" &&
            _0x743c7f[_0x462c56(0x18e)] !== "" &&
            _0x324c79[_0x462c56(0x18e)] !== "" &&
            _0x196c5e[_0x462c56(0x18e)] !== "" &&
            _0x1b9489[_0x462c56(0x18e)] !== "" &&
            _0x388f93[_0x462c56(0x18e)] !== "" &&
            _0x3cec33[_0x462c56(0x18e)] !== "" &&
            _0x20f757["value"] !== "" &&
            _0x8f5fab["value"] !== ""
          ) {
            let _0x409e90 = _0x548b37[_0x462c56(0x18e)]["replace"](/,/g, ""),
              _0x400c08 = _0xe84bc6[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x2c3b83 = _0x5643a1[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x39e48b = _0x4b686e[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0xbe6d6 = _0x4b3d51["value"]["replace"](/,/g, ""),
              _0x14c1e1 = _0x224b45[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x7854ee = _0x124507[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x108dfb = _0x1bdfec[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x50ef29 = _0x1db6e6[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x5dd824 = _0x743c7f[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x478c5c = _0x196c5e[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x15cbd5 = _0x388f93[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              ),
              _0x1a2e50 = _0x20f757[_0x462c56(0x18e)][_0x462c56(0x1dc)](
                /,/g,
                ""
              );
            if (
              !(
                isNumeric(_0x409e90) &&
                isNumeric(_0x16fde2[_0x462c56(0x18e)]) &&
                isNumeric(_0x400c08) &&
                isNumeric(_0x47f29a["value"]) &&
                isNumeric(_0x2c3b83) &&
                isNumeric(_0x4811d2[_0x462c56(0x18e)]) &&
                isNumeric(_0x39e48b) &&
                isNumeric(_0x11b3ee[_0x462c56(0x18e)]) &&
                isNumeric(_0xbe6d6) &&
                isNumeric(_0x1c407a["value"]) &&
                isNumeric(_0x14c1e1) &&
                isNumeric(_0x136464["value"]) &&
                isNumeric(_0x7854ee) &&
                isNumeric(_0x21eaf6["value"]) &&
                isNumeric(_0x108dfb) &&
                isNumeric(_0x3d4432[_0x462c56(0x18e)]) &&
                isNumeric(_0x50ef29) &&
                isNumeric(_0x13c2bd[_0x462c56(0x18e)]) &&
                isNumeric(_0x5dd824) &&
                isNumeric(_0x324c79[_0x462c56(0x18e)]) &&
                isNumeric(_0x478c5c) &&
                isNumeric(_0x1b9489[_0x462c56(0x18e)]) &&
                isNumeric(_0x15cbd5) &&
                isNumeric(_0x3cec33[_0x462c56(0x18e)]) &&
                isNumeric(_0x1a2e50) &&
                isNumeric(_0x8f5fab[_0x462c56(0x18e)])
              )
            )
              (explainPara[_0x462c56(0x1e4)] = _0x462c56(0x205)),
                modalBtn[_0x462c56(0x1b0)]();
            else {
              let { outputPortfolio: _0x3cebcf } =
                await calculateModelFinancialPortfolio(
                  Number(_0x409e90),
                  Number(_0x16fde2["value"]) / 0x64,
                  Number(_0x400c08),
                  Number(_0x47f29a[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x2c3b83),
                  Number(_0x4811d2[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x39e48b),
                  Number(_0x11b3ee[_0x462c56(0x18e)]) / 0x64,
                  Number(_0xbe6d6),
                  Number(_0x1c407a[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x14c1e1),
                  Number(_0x136464[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x7854ee),
                  Number(_0x21eaf6["value"]) / 0x64,
                  Number(_0x108dfb),
                  Number(_0x3d4432[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x50ef29),
                  Number(_0x13c2bd[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x5dd824),
                  Number(_0x324c79[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x478c5c),
                  Number(_0x1b9489[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x15cbd5),
                  Number(_0x3cec33[_0x462c56(0x18e)]) / 0x64,
                  Number(_0x1a2e50),
                  Number(_0x8f5fab[_0x462c56(0x18e)]) / 0x64
                );
              console["log"](_0x3cebcf),
                (_0x1e396f[_0x462c56(0x1eb)] = _0x462c56(0x192)),
                (_0x39e5cf = document["getElementById"](_0x462c56(0x17d))),
                (_0x39e5cf[_0x462c56(0x19a)] = _0x462c56(0x1f4)),
                (showOutput = document["getElementById"]("showOutput")),
                (showOutput[_0x462c56(0x19a)] =
                  "<div\x20class=\x22relative\x20overflow-x-auto\x22>\x0a\x20\x20<table\x20id=\x22firstTbl\x22\x20class=\x22min-w-full\x20table-auto\x20text-sm\x20text-left\x20rtl:text-right\x20text-gray-500\x20\x22>\x0a\x20\x20\x20\x20<thead\x20class=\x22text-xs\x20text-gray-700\x20uppercase\x20bg-red-300\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-left\x20px-4\x20py-3\x22>Financial\x20Asset</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>5\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>10\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>15\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>20\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>25\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>30\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22col\x22\x20class=\x22text-center\x20px-4\x20py-3\x22>35\x20Yrs\x20Return\x20(₹)</th>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>PPF</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x21b)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x21b)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x21b)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"]("en-IN")["format"](
                    _0x3cebcf["20"]["ppf"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x21b)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x21b)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x21b)]
                  ) +
                  _0x462c56(0x1ba) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"]["pf"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"]["pf"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"]["pf"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")["format"](
                    _0x3cebcf["20"]["pf"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"]["pf"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"]["pf"]
                  ) +
                  _0x462c56(0x189) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"]["pf"]
                  ) +
                  _0x462c56(0x1f8) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x1d6)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"]["nsc"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"]["nsc"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))["format"](
                    _0x3cebcf["20"][_0x462c56(0x1d6)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x1d6)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x1d6)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x1d6)]
                  ) +
                  _0x462c56(0x1ff) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x1a6)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x1a6)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x1a6)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"]["postal"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x1a6)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x1a6)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))["format"](
                    _0x3cebcf["35"]["postal"]
                  ) +
                  _0x462c56(0x1b8) +
                  Intl[_0x462c56(0x1be)]("en-IN")["format"](
                    _0x3cebcf["5"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x210)]
                  ) +
                  _0x462c56(0x1c4) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x1a1)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x1a1)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"]["company"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["20"][_0x462c56(0x1a1)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"]["company"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x1a1)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x1a1)]
                  ) +
                  _0x462c56(0x1f6) +
                  Intl["NumberFormat"]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x178)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"]["insurance"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x178)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["20"]["insurance"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x178)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x178)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x178)]
                  ) +
                  _0x462c56(0x1fd) +
                  Intl[_0x462c56(0x1be)]("en-IN")["format"](
                    _0x3cebcf["5"][_0x462c56(0x199)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x199)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x199)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"]["equity"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x199)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"]["equity"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x199)]
                  ) +
                  _0x462c56(0x1e5) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"]["balancedPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"]["balancedPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x190)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["20"]["balancedPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x190)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x190)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x190)]
                  ) +
                  _0x462c56(0x20f) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x171)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x171)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x171)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"][_0x462c56(0x171)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))["format"](
                    _0x3cebcf["25"][_0x462c56(0x171)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["30"]["nonLiquidDebtPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x171)]
                  ) +
                  _0x462c56(0x182) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x203)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["10"]["liquidPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))["format"](
                    _0x3cebcf["15"]["liquidPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"]["liquidPortfolio"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")["format"](
                    _0x3cebcf["25"]["liquidPortfolio"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x203)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))["format"](
                    _0x3cebcf["35"][_0x462c56(0x203)]
                  ) +
                  _0x462c56(0x1da) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["5"]["sip"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["10"]["sip"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))["format"](
                    _0x3cebcf["15"][_0x462c56(0x207)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"][_0x462c56(0x207)]
                  ) +
                  _0x462c56(0x204) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x207)]
                  ) +
                  _0x462c56(0x204) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"]["sip"]
                  ) +
                  _0x462c56(0x204) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x207)]
                  ) +
                  _0x462c56(0x186) +
                  Intl["NumberFormat"]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["5"]["rd"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["10"]["rd"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["15"]["rd"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"]["rd"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"]["rd"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["30"]["rd"]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"]["rd"]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-green-300\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Portfolio\x20Balance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["5"][_0x462c56(0x19e)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x19e)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x19e)]
                  ) +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20" +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"][_0x462c56(0x19e)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x19e)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x19e)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x19e)]
                  ) +
                  _0x462c56(0x21e) +
                  Intl[_0x462c56(0x1be)]("en-IN")["format"](
                    _0x3cebcf["5"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)]("en-IN")[_0x462c56(0x187)](
                    _0x3cebcf["10"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl["NumberFormat"](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["15"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["20"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x1fa) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["25"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x204) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["30"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x204) +
                  Intl[_0x462c56(0x1be)](_0x462c56(0x1e0))[_0x462c56(0x187)](
                    _0x3cebcf["35"][_0x462c56(0x1cd)]
                  ) +
                  _0x462c56(0x1a7)),
                scrollToElement("resultHeader");
            }
          } else
            (explainPara[_0x462c56(0x1e4)] = _0x462c56(0x1a5)),
              modalBtn[_0x462c56(0x1b0)]();
        }, 0x0);
      break;
    default:
      break;
  }
});
function _0x4bdf() {
  const _0x1209f1 = [
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20investment\x20growth\x20rate,\x20target\x20amount,\x20and\x20time\x20period\x20\x20to\x20calculate\x20target\x20SIP\x20to\x20become\x20a\x20crorepati",
    "bankRate",
    "dataTable",
    "#1A56DB",
    "investGrowthRate",
    "darken",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Bank</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "bar",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>PF</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "Please\x20fill\x20in\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate,\x20time\x20period,\x20outstanding\x20loan\x20amount,\x20children\x20education\x20liability,\x20marriage\x20incidental\x20liability,\x20available\x20insurance\x20deductible\x20and\x20current\x20investment\x20balance\x20to\x20calculate\x20Needs\x20Based\x20Value\x20For\x20Insurance",
    "humanLifeBtn",
    "corpusLeft",
    "NumberFormat",
    "inflationRate",
    "bottom",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>Consider\x20Present\x20House\x20Value\x20For\x20Rent</th>",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹",
    "currentSIPInvest",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Company</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Capital\x20Paid\x20In\x20Loan</th>",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>House\x20Purchase\x20Vs\x20SIP\x20Investment</h5>",
    "Future\x20Value\x20of\x20Expense",
    "pfAmount",
    "text-xs\x20font-normal\x20fill-gray-500\x20",
    "pageYOffset",
    "loanRate",
    "showOutput",
    "swpReturn",
    "smooth",
    "scrollTo",
    "sipInvestPeriod",
    "line",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Future\x20Value\x20Of\x20SIP\x20Investment</th>",
    "372057LDupSo",
    "Limited\x20SIP\x20Calculator\x20Maturity\x20Amount\x20(₹)",
    "pfRate",
    "nsc",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Present\x20Value\x20of\x20Expense",
    "snapshotDiv",
    "<h5\x20style=\x22color:\x20#ba0713\x22\x20class=\x22leading-none\x20mt-5\x20mb-4\x20text-center\x20text-lg\x20mb-4\x20font-medium\x20\x20pb-1\x22>Note:\x20Your\x20Retirement\x20Corpus\x20remains\x20intact\x20throughout\x20your\x20retirement</h5>",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>SIP</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "amount",
    "replace",
    "deductInsurance",
    "1851651JyrPrD",
    "incomeIncrementRate",
    "en-IN",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20investment\x20growth\x20rate,\x20target\x20amount,\x20and\x20time\x20period\x20\x20to\x20calculate\x20target\x20Future\x20Value\x20of\x20Expense",
    "crorepatiClacBtn",
    "currentIncome",
    "innerText",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Balanced\x20Portfolio</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "modalBtn",
    "200px",
    "2JVXOhA",
    "render",
    "retirementCorpus",
    "style",
    "childEducationLiability",
    "12px",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate,\x20time\x20period,\x20outstanding\x20loan\x20amount,\x20children\x20education\x20liability,\x20marriage\x20incidental\x20liability,\x20available\x20insurance\x20deductible\x20and\x20current\x20investment\x20balance\x20to\x20calculate\x20Needs\x20Based\x20Value\x20For\x20Insurance",
    "currentAge",
    "insuranceRate",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Total\x20Loan\x20Payment\x20Amount</th>",
    "growthRate",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Interest\x20Paid\x20In\x20Loan</th>",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Portfolio\x20Forecast\x20Output</h5>",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Future\x20Value\x20of\x20Investment",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Insurance</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "</th>",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>NSC</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>12%</th>",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "70838uZdjJp",
    "totalInvestPeriod",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Equity\x20Portfolio</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "round",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Postal</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "balancedRate",
    "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>",
    "nscAmount",
    "liquidPortfolio",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "Please\x20fill\x20only\x20numeric\x20values\x20to\x20use\x20the\x20Portfolio\x20Forecasting\x20Calculator",
    "Please\x20fill\x20in\x20values\x20for\x20investment\x20growth\x20rate,\x20target\x20amount,\x20sip\x20time\x20period\x20and\x20total\x20time\x20period\x20to\x20calculate\x20Limited\x20Period\x20SIP\x20Future\x20Value",
    "sip",
    "sipRate",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20investment\x20growth\x20rate,\x20target\x20amount,\x20sip\x20time\x20period\x20and\x20total\x20time\x20period\x20to\x20calculate\x20Limited\x20Period\x20SIP\x20Future\x20Value",
    "liquidDebtAmount",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>Profit\x20In\x20SIP\x20Investment\x20Versus\x20EMI</th>",
    "transparent",
    "outstandingLoanAmt",
    "companyAmount",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Non-Liquid\x20Debt\x20Portfolio</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "bank",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Future\x20Value\x20of\x20Expense",
    "column-chart",
    "nscRate",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Retirement\x20Corpus\x20(₹)",
    "<table\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20\x22>",
    "</th></tr>",
    "bold",
    "needApproachBtn",
    "Please\x20fill\x20in\x20values\x20for\x20current\x20income,\x20investment\x20growth\x20rate,\x20income\x20increment\x20rate\x20and\x20time\x20period\x20to\x20calculate\x20Human\x20Life\x20Value\x20For\x20Insurance",
    "emiSipBtn",
    "ppf",
    "limitedPeriodSIPBtn",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Corpus\x20Maturity\x20Amount\x20(₹)\x20",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-green-300\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>SWP\x20@\x208%\x20(Monthly)</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "Please\x20fill\x20in\x20values\x20for\x20loan\x20rate,\x20loan\x20period,\x20housing\x20cost,\x20personal\x20contribution\x20and\x20inflation\x20rate\x20to\x20calculate\x20SIP\x20Versus\x20Housing\x20Return",
    "marriageIncidentalLiability",
    "nonLiquidDebtPortfolio",
    "</tr></thead></table></div>",
    "<thead\x20class=\x22text-md\x20text-gray-700\x20bg-gray-50\x20\x20\x22>",
    "swpCalculatorBtn",
    "13682256OdVybo",
    "preventDefault",
    "ppfAmount",
    "insurance",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Loan\x20EMI\x20Amount",
    "bankAmount",
    "</thead></table></div>",
    "houseCost",
    "resultHeader",
    "900666BBpzLX",
    "postalRate",
    "text-xs\x20font-normal\x20fill-gray-800\x20",
    "currentInvestBalance",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>Liquid\x20Debt\x20Portfolio</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "undefined",
    "equityRate",
    "sipAmt",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22bg-white\x20border-b\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<th\x20scope=\x22row\x22\x20class=\x22text-left\x20px-4\x20py-4\x20font-medium\x20text-gray-900\x20whitespace-normal\x20\x22>RD</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "format",
    "Please\x20fill\x20only\x20numeric\x20values\x20for\x20Retirement\x20Corpus,\x20Investment\x20Growth\x20Rate,\x20SWP\x20Return\x20Rate\x20and\x20Time\x20Left\x20Until\x20Corpus\x20Maturity\x20to\x20use\x20Post-Retirement\x20SWP\x20Calculator",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22font-bold\x20text-gray-900\x20text-center\x20px-4\x20py-4\x20border\x20\x22>\x20₹\x20",
    "getElementById",
    "#4CAF50",
    "Inter,\x20sans-serif",
    "loanPeriod",
    "value",
    "addEventListener",
    "balancedPortfolio",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Future\x20Value\x20of\x20Expense</h5>",
    "display:\x22block\x22",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Target\x20SIP\x20/\x20Plan\x20a\x20Crorepati\x20Target</h5>",
    "swpRate",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x20text-red-500\x22>SIP\x20Amount\x20After\x20EMI</th>",
    "timePeriod",
    "883870AenCVt",
    "300px",
    "equity",
    "innerHTML",
    "Please\x20enter\x20only\x20numeric\x20values\x20for\x20loan\x20rate,\x20loan\x20period,\x20housing\x20cost,\x20personal\x20contribution\x20and\x20inflation\x20rate\x20to\x20calculate\x20SIP\x20Versus\x20Housing\x20Return",
    "insuranceAmount",
    "Please\x20fill\x20in\x20values\x20for\x20Current\x20Age,\x20Retirment\x20Age,\x20Life\x20Expectancy,\x20Current\x20SIP\x20Investment,\x20Current\x20Lumpsum\x20Investment,\x20Investment\x20Portfolio\x20Return\x20and\x20SWP\x20Return\x20Rate\x20to\x20use\x20Pre-Retirement\x20SWP\x20Calculator",
    "balance",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Human\x20Life\x20Insurance\x20Amount\x20Results</h5>",
    "nonLiquidDebtRate",
    "company",
    "companyRate",
    "postRetirementswpCalculatorBtn",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Required\x20Target\x20SIP\x20To\x20Become\x20Crorepati",
    "Please\x20fill\x20in\x20numeric\x20values\x20to\x20use\x20the\x20Portfolio\x20Forecasting\x20Calculator",
    "postal",
    "</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20</tbody>\x0a\x20\x20</table>\x0a</div>\x0a",
    "2256764NJZGfa",
    "investPortfolioRate",
    "320px",
    "targetAmtReqd",
    "110%",
    "length",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Post-Retirement\x20SWP\x20Calculator\x20Maturity\x20Amount</h5>",
    "ppfRate",
    "click",
    "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Future\x20House\x20Valuation\x20With\x20Inflation</th>",
  ];
  _0x4bdf = function () {
    return _0x1209f1;
  };
  return _0x4bdf();
}
