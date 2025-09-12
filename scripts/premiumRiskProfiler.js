const _0xdeb722 = _0x3226;
(function (_0xb2d7f1, _0x5c37d0) {
  const _0x55c340 = _0x3226,
    _0x280c5e = _0xb2d7f1();
  while (!![]) {
    try {
      const _0x28b071 =
        (-parseInt(_0x55c340(0x1c4)) / 0x1) *
          (-parseInt(_0x55c340(0x16a)) / 0x2) +
        parseInt(_0x55c340(0x1b7)) / 0x3 +
        parseInt(_0x55c340(0x16f)) / 0x4 +
        parseInt(_0x55c340(0x1a7)) / 0x5 +
        parseInt(_0x55c340(0x19a)) / 0x6 +
        parseInt(_0x55c340(0x163)) / 0x7 +
        -parseInt(_0x55c340(0x173)) / 0x8;
      if (_0x28b071 === _0x5c37d0) break;
      else _0x280c5e["push"](_0x280c5e["shift"]());
    } catch (_0x3e2a36) {
      _0x280c5e["push"](_0x280c5e["shift"]());
    }
  }
})(_0x1e01, 0x42a8a);
const scrollToElement = (_0x3366bb) => {
  const _0x525074 = _0x3226,
    _0x3121f7 = document[_0x525074(0x15d)](_0x3366bb);
  if (_0x3121f7) {
    const _0x1e7b07 = _0x3121f7[_0x525074(0x1c1)](),
      _0x516d0e = window["pageYOffset"] + _0x1e7b07[_0x525074(0x191)] - 0x64;
    window[_0x525074(0x1b3)]({ top: _0x516d0e, behavior: _0x525074(0x168) });
  }
};
function dataURLtoBlob(_0x21f2cf) {
  const _0x3f8967 = _0x3226;
  let _0x11d9bf = _0x21f2cf[_0x3f8967(0x1be)](","),
    _0x407c00 = _0x11d9bf[0x0]["match"](/:(.*?);/)[0x1],
    _0x4047ef = atob(_0x11d9bf[0x1]),
    _0x110b0b = _0x4047ef["length"],
    _0x28e01c = new Uint8Array(_0x110b0b);
  while (_0x110b0b--) {
    _0x28e01c[_0x110b0b] = _0x4047ef[_0x3f8967(0x177)](_0x110b0b);
  }
  return new Blob([_0x28e01c], { type: _0x407c00 });
}
function _0x3226(_0x32e087, _0x1c849f) {
  const _0x1e01b4 = _0x1e01();
  return (
    (_0x3226 = function (_0x322679, _0x20bd9b) {
      _0x322679 = _0x322679 - 0x153;
      let _0x573461 = _0x1e01b4[_0x322679];
      return _0x573461;
    }),
    _0x3226(_0x32e087, _0x1c849f)
  );
}
const calculateRiskScore = (
  _0x92c290,
  _0x588919,
  _0x240442,
  _0x27cf47,
  _0xb8e8c5,
  _0x6dab9,
  _0x504945,
  _0x14fe5f,
  _0x58e6c4,
  _0x52e4e6
) => {
  const _0x4d6a61 = _0x3226;
  console[_0x4d6a61(0x1c3)]({
    age: _0x92c290,
    investment: _0x588919,
    horizon: _0x240442,
    tolerance: _0x27cf47,
    react: _0xb8e8c5,
    experience: _0x6dab9,
    comfort: _0x504945,
    financialSituation: _0x14fe5f,
    lossReaction: _0x58e6c4,
    investmentReliance: _0x52e4e6,
  });
  let _0x509081 = 0x0;
  switch (_0x92c290) {
    case _0x4d6a61(0x181):
      _0x509081 += 0x1;
      break;
    case "Less\x20Than\x2060\x20Years":
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x153):
      _0x509081 += 0x3;
      break;
    case _0x4d6a61(0x19f):
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x588919) {
    case _0x4d6a61(0x1aa):
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x19b):
      _0x509081 += 0x2;
      break;
    case "Capital\x20Appreciation":
      _0x509081 += 0x3;
      break;
    case _0x4d6a61(0x1c2):
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x240442) {
    case _0x4d6a61(0x1af):
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x16e):
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x1b8):
      _0x509081 += 0x3;
      break;
    case _0x4d6a61(0x1a2):
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x27cf47) {
    case "Very\x20Low\x20(Cannot\x20Tolerate\x20Any\x20Loss)":
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x159):
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x198):
      _0x509081 += 0x3;
      break;
    case "High\x20(Comfortable\x20With\x20Significant\x20Loss)":
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0xb8e8c5) {
    case _0x4d6a61(0x18c):
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x1b0):
      _0x509081 += 0x2;
      break;
    case "Hold\x20And\x20Wait\x20For\x20Recovery":
      _0x509081 += 0x3;
      break;
    case "See\x20It\x20As\x20A\x20Buying\x20Opportunity":
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x6dab9) {
    case _0x4d6a61(0x156):
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x167):
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x1a0):
      _0x509081 += 0x3;
      break;
    case _0x4d6a61(0x1b4):
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x504945) {
    case "Less\x20Than\x2020%":
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x1a8):
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x164):
      _0x509081 += 0x3;
      break;
    case _0x4d6a61(0x180):
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x14fe5f) {
    case _0x4d6a61(0x157):
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x199):
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x18e):
      _0x509081 += 0x3;
      break;
    case "Stable\x20With\x20Secure\x20Income":
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x58e6c4) {
    case _0x4d6a61(0x189):
      _0x509081 += 0x1;
      break;
    case _0x4d6a61(0x1bb):
      _0x509081 += 0x2;
      break;
    case _0x4d6a61(0x19d):
      _0x509081 += 0x3;
      break;
    case _0x4d6a61(0x19e):
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  switch (_0x52e4e6) {
    case _0x4d6a61(0x1bf):
      _0x509081 += 0x1;
      break;
    case "A\x20Mix\x20Of\x20Income\x20And\x20Growth":
      _0x509081 += 0x2;
      break;
    case "Rely\x20On\x20Deferred\x20Regular\x20Income":
      _0x509081 += 0x3;
      break;
    case "Purely\x20For\x20Long-Term\x20Growth":
      _0x509081 += 0x4;
      break;
    default:
      break;
  }
  return _0x509081;
};
function _0x1e01() {
  const _0x40db18 = [
    "Unstable\x20With\x20Potential\x20Financial\x20Risks",
    "input[name=\x22financialSituation\x22]:checked",
    "Low\x20(Uncomfortable\x20With\x20Loss)",
    "Risk\x20Profiling\x20Analysis",
    "readyState",
    "drawImage",
    "getElementById",
    "createElement",
    "open",
    "sender",
    "width",
    "status",
    "1602062BMWbkP",
    "40%\x20-\x2060%",
    "Apex\x20Capital\x20Trust",
    "Please\x20select\x20your\x20Investment\x20Time\x20Horizon\x20!",
    "Some\x20Experience",
    "smooth",
    "Please\x20select\x20your\x20Tolerance\x20Category\x20For\x20Investment\x20Losses\x20!",
    "2YXNvxh",
    "height",
    "getContext",
    "style",
    "3\x20-\x205\x20Years",
    "1912652uRrIZL",
    "Please\x20select\x20your\x20level\x20of\x20experience\x20in\x20stock\x20market\x20!",
    "image/jpeg",
    "input[name=\x22horizon\x22]:checked",
    "7039744BgplzC",
    "</th></tr></thead></table></div>",
    "responseText",
    "<thead\x20class=\x22text-md\x20text-gray-700\x20bg-gray-50\x20\x20\x22>",
    "charCodeAt",
    "input[name=\x22comfort\x22]:checked",
    "<table\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20\x22>",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20",
    "DONE",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20\x20pb-1\x22>Risk\x20Profile\x20Score</h5>",
    "type",
    "Please\x20select\x20what\x20your\x20reaction\x20if\x20your\x20portfolio\x20lost\x2020%\x20of\x20its\x20values\x20in\x20a\x20short\x20period\x20!",
    "email",
    "More\x20Than\x2060%",
    "More\x20Than\x2060\x20Years",
    "Please\x20Enter\x20Valid\x20Email\x20Address\x20to\x20get\x20the\x20Risk\x20Profiling\x20Report\x20!",
    "Please\x20check\x20your\x20email\x20for\x20your\x20Risk\x20Profiler\x20Information\x20!",
    "canvas",
    "showOutput",
    "image.jpeg",
    "input[name=\x22investment\x22]:checked",
    "Please\x20select\x20your\x20primary\x20investment\x20goal\x20!",
    "Sell\x20To\x20Avoid\x20Further\x20Losses",
    "querySelector",
    "submit",
    "Sell\x20Immediately\x20To\x20Prevent\x20Further\x20Losses",
    "Please\x20select\x20how\x20much\x20you\x20would\x20rely\x20on\x20your\x20investment\x20for\x20income\x20or\x20growth\x20!",
    "Moderate\x20Income\x20With\x20Occasional\x20Fluctuations",
    "riskProfilerForm",
    "modalBtn",
    "top",
    "innerText",
    "input[name=\x22lossReaction\x22]:checked",
    "Error:\x20Something\x20went\x20wrong.",
    "error",
    "catch",
    "value",
    "Moderate\x20(Can\x20Tolerate\x20Some\x20Loss)",
    "Low\x20But\x20Stable\x20Income",
    "337836FKPXlS",
    "Income\x20Generation",
    "Please\x20select\x20how\x20you\x20would\x20react\x20to\x20Stock\x20Market\x20Decline\x20!",
    "Will\x20Do\x20Asset\x20Rebalancing",
    "Buy\x20More\x20To\x20Capitalize\x20On\x20Lower\x20Prices",
    "Less\x20than\x2030\x20Years",
    "Experienced",
    "Please\x20select\x20what\x20your\x20current\x20financial\x20situation\x20is\x20!",
    "More\x20Than\x2010\x20Years",
    "input[name=\x22react\x22]:checked",
    "addEventListener",
    "margin-top:1.5rem;display:flex;justify-content:center;align-items:center;",
    "input[name=\x22age\x22]:checked",
    "751750yCYjEA",
    "20%\x20-\x2040%",
    "Please\x20select\x20your\x20age\x20category\x20!",
    "Capital\x20preservation",
    "file",
    "input[name=\x22tolerance\x22]:checked",
    "action",
    "click",
    "Less\x20Than\x203\x20Years",
    "Consider\x20Selling\x20But\x20Prefer\x20To\x20Hold",
    "toDataURL",
    "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>",
    "scrollTo",
    "Very\x20Experienced",
    "\x20/\x2040",
    "then",
    "58554LlCWob",
    "5\x20-\x2010\x20Years",
    "append",
    "onreadystatechange",
    "Hold\x20And\x20Wait\x20For\x20Recovery",
    "explainImg",
    "preventDefault",
    "split",
    "Rely\x20On\x20Them\x20For\x20Regular\x20Income",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Final\x20Risk\x20Profile\x20Score",
    "getBoundingClientRect",
    "Speculative\x20Growth",
    "log",
    "219799QELCqy",
    "Please\x20select\x20how\x20much\x20you\x20would\x20be\x20comfortable\x20investing\x20in\x20equity\x20!",
    "Less\x20Than\x2045\x20Years",
    "innerHTML",
    "name",
    "No\x20Experience",
  ];
  _0x1e01 = function () {
    return _0x40db18;
  };
  return _0x1e01();
}
document[_0xdeb722(0x15d)](_0xdeb722(0x18f))[_0xdeb722(0x1a4)](
  _0xdeb722(0x18b),
  (_0x3030a1) => {
    const _0x11fb85 = _0xdeb722;
    _0x3030a1[_0x11fb85(0x1bd)]();
    let _0x40c6a5 = document[_0x11fb85(0x18a)](_0x11fb85(0x1a6)),
      _0x3d6d31 = document[_0x11fb85(0x18a)](_0x11fb85(0x187)),
      _0x4c3956 = document["querySelector"](_0x11fb85(0x172)),
      _0x49f6f6 = document["querySelector"](_0x11fb85(0x1ac)),
      _0x52d8fc = document[_0x11fb85(0x18a)](_0x11fb85(0x1a3)),
      _0x5ab861 = document[_0x11fb85(0x18a)](
        "input[name=\x22experience\x22]:checked"
      ),
      _0x75410c = document["querySelector"](_0x11fb85(0x178)),
      _0x2f1b55 = document[_0x11fb85(0x18a)](_0x11fb85(0x158)),
      _0x151fc2 = document["querySelector"](_0x11fb85(0x193)),
      _0x41b8e9 = document["querySelector"](
        "input[name=\x22investmentReliance\x22]:checked"
      ),
      _0x4f1d25 = document[_0x11fb85(0x15d)](_0x11fb85(0x155)),
      _0x13d3bb = document["getElementById"](_0x11fb85(0x1bc)),
      _0x4acdfd = document[_0x11fb85(0x15d)](_0x11fb85(0x190)),
      _0x2f2d14 = document[_0x11fb85(0x15d)]("modalBody"),
      _0x18d301 = document[_0x11fb85(0x15d)](_0x11fb85(0x17f))[
        _0x11fb85(0x197)
      ];
    const _0x15ac74 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (_0x40c6a5 == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x1a9)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x3d6d31 == null) {
      (_0x2f2d14["innerText"] = _0x11fb85(0x188)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x4c3956 == null) {
      (_0x2f2d14["innerText"] = _0x11fb85(0x166)), _0x4acdfd["click"]();
      return;
    }
    if (_0x49f6f6 == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x169)), _0x4acdfd["click"]();
      return;
    }
    if (_0x52d8fc == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x19c)), _0x4acdfd["click"]();
      return;
    }
    if (_0x5ab861 == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x170)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x75410c == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x1c5)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x2f1b55 == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x1a1)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x151fc2 == null) {
      (_0x2f2d14["innerText"] = _0x11fb85(0x17e)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x41b8e9 == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = _0x11fb85(0x18d)),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x4f1d25["value"] == "" || _0x4f1d25["value"] == null) {
      (_0x2f2d14[_0x11fb85(0x192)] = "Please\x20enter\x20your\x20name\x20!"),
        _0x4acdfd[_0x11fb85(0x1ae)]();
      return;
    }
    if (_0x18d301 == "" || !_0x15ac74["test"](_0x18d301)) {
      (_0x2f2d14["innerText"] = _0x11fb85(0x182)), _0x4acdfd["click"]();
      return;
    }
    let _0x1ef5de = calculateRiskScore(
      _0x40c6a5[_0x11fb85(0x197)],
      _0x3d6d31[_0x11fb85(0x197)],
      _0x4c3956[_0x11fb85(0x197)],
      _0x49f6f6[_0x11fb85(0x197)],
      _0x52d8fc[_0x11fb85(0x197)],
      _0x5ab861["value"],
      _0x75410c[_0x11fb85(0x197)],
      _0x2f1b55[_0x11fb85(0x197)],
      _0x151fc2["value"],
      _0x41b8e9["value"]
    );
    (resultHeader = document[_0x11fb85(0x15d)]("resultHeader")),
      (resultHeader[_0x11fb85(0x154)] = _0x11fb85(0x17c)),
      (showOutput = document[_0x11fb85(0x15d)](_0x11fb85(0x185))),
      (showOutput[_0x11fb85(0x154)] =
        _0x11fb85(0x1b2) +
        _0x11fb85(0x179) +
        _0x11fb85(0x176) +
        _0x11fb85(0x1c0) +
        "</th>" +
        _0x11fb85(0x17a) +
        _0x1ef5de +
        _0x11fb85(0x1b5) +
        _0x11fb85(0x174)),
      (_0x13d3bb[_0x11fb85(0x16d)] = _0x11fb85(0x1a5)),
      scrollToElement("resultHeader");
    var _0x1838ac = _0x3030a1["target"],
      _0x42b4fc = new XMLHttpRequest();
    _0x42b4fc[_0x11fb85(0x15f)]("POST", _0x1838ac[_0x11fb85(0x1ad)]),
      (_0x42b4fc[_0x11fb85(0x1ba)] = function () {
        const _0x3f4615 = _0x11fb85;
        if (_0x42b4fc[_0x3f4615(0x15b)] === XMLHttpRequest[_0x3f4615(0x17b)]) {
          if (_0x42b4fc[_0x3f4615(0x162)] === 0xc8) {
            var _0x370cec = _0x42b4fc[_0x3f4615(0x175)];
            html2canvas(document["querySelector"]("#resultContainer"), {
              scale: 0x3,
              useCORS: !![],
              scrollY: 0x0,
              scrollX: 0x0,
            })["then"]((_0xf26e0b) => {
              const _0x24c8a2 = _0x3f4615;
              let _0x33b8b7 = _0xf26e0b[_0x24c8a2(0x16c)]("2d"),
                _0x511e61 = document[_0x24c8a2(0x15e)](_0x24c8a2(0x184)),
                _0x9561b1 = _0x511e61[_0x24c8a2(0x16c)]("2d");
              (_0x511e61[_0x24c8a2(0x161)] = _0xf26e0b["width"]),
                (_0x511e61[_0x24c8a2(0x16b)] =
                  _0xf26e0b[_0x24c8a2(0x16b)] - 0xa),
                _0x9561b1[_0x24c8a2(0x15c)](
                  _0xf26e0b,
                  0x0,
                  0xa,
                  _0xf26e0b[_0x24c8a2(0x161)],
                  _0xf26e0b[_0x24c8a2(0x16b)] - 0xa,
                  0x0,
                  0x0,
                  _0xf26e0b["width"],
                  _0xf26e0b[_0x24c8a2(0x16b)] - 0xa
                );
              let _0x25beb9 = _0x511e61[_0x24c8a2(0x1b1)](_0x24c8a2(0x171)),
                _0x303dc1 = dataURLtoBlob(_0x25beb9);
              const _0x24bae7 = new FormData();
              _0x24bae7["append"](
                _0x24c8a2(0x1ab),
                _0x303dc1,
                _0x24c8a2(0x186)
              ),
                _0x24bae7[_0x24c8a2(0x1b9)](_0x24c8a2(0x17f), _0x18d301),
                _0x24bae7[_0x24c8a2(0x1b9)](_0x24c8a2(0x17d), _0x24c8a2(0x15a)),
                _0x24bae7[_0x24c8a2(0x1b9)](_0x24c8a2(0x160), _0x24c8a2(0x165)),
                fetch(
                  "https://operations.webclass.in/api/navCalculator/emailAnalysisReport",
                  { method: "POST", body: _0x24bae7 }
                )
                  [_0x24c8a2(0x1b6)](() => {
                    const _0x214838 = _0x24c8a2;
                    (_0x2f2d14[_0x214838(0x192)] = _0x214838(0x183)),
                      _0x4acdfd[_0x214838(0x1ae)]();
                  })
                  [_0x24c8a2(0x196)]((_0x4d5a24) => {
                    const _0x27ba17 = _0x24c8a2;
                    console[_0x27ba17(0x195)]("Error:", _0x4d5a24);
                  });
            });
          } else console[_0x3f4615(0x1c3)](_0x3f4615(0x194));
        }
      }),
      _0x42b4fc["send"](new FormData(_0x1838ac));
  }
);
