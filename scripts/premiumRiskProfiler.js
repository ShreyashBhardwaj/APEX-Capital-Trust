const _0x1b802a = _0x20e9;
function _0x20e9(_0x174dbf, _0x344bba) {
  const _0xdb494b = _0xdb49();
  return (
    (_0x20e9 = function (_0x20e924, _0x1967f6) {
      _0x20e924 = _0x20e924 - 0x158;
      let _0x506e34 = _0xdb494b[_0x20e924];
      return _0x506e34;
    }),
    _0x20e9(_0x174dbf, _0x344bba)
  );
}
(function (_0x3dfa68, _0x2db99c) {
  const _0x54c0c0 = _0x20e9,
    _0x45dab4 = _0x3dfa68();
  while (!![]) {
    try {
      const _0x2db62d =
        (parseInt(_0x54c0c0(0x1c6)) / 0x1) *
          (-parseInt(_0x54c0c0(0x1b3)) / 0x2) +
        -parseInt(_0x54c0c0(0x1a6)) / 0x3 +
        (parseInt(_0x54c0c0(0x1a9)) / 0x4) *
          (-parseInt(_0x54c0c0(0x184)) / 0x5) +
        (parseInt(_0x54c0c0(0x159)) / 0x6) *
          (parseInt(_0x54c0c0(0x160)) / 0x7) +
        parseInt(_0x54c0c0(0x16b)) / 0x8 +
        (-parseInt(_0x54c0c0(0x1c8)) / 0x9) *
          (-parseInt(_0x54c0c0(0x178)) / 0xa) +
        (parseInt(_0x54c0c0(0x1c0)) / 0xb) * (parseInt(_0x54c0c0(0x172)) / 0xc);
      if (_0x2db62d === _0x2db99c) break;
      else _0x45dab4["push"](_0x45dab4["shift"]());
    } catch (_0x580948) {
      _0x45dab4["push"](_0x45dab4["shift"]());
    }
  }
})(_0xdb49, 0x254b8);
const scrollToElement = (_0x3aad6e) => {
  const _0x250bfe = _0x20e9,
    _0x46abb5 = document[_0x250bfe(0x1a2)](_0x3aad6e);
  if (_0x46abb5) {
    const _0x17697a = _0x46abb5[_0x250bfe(0x1be)](),
      _0x789086 = window[_0x250bfe(0x1c3)] + _0x17697a[_0x250bfe(0x197)] - 0x64;
    window[_0x250bfe(0x17d)]({ top: _0x789086, behavior: _0x250bfe(0x1a8) });
  }
};
function dataURLtoBlob(_0xc4d9e1) {
  const _0x50451f = _0x20e9;
  let _0x59fc3d = _0xc4d9e1[_0x50451f(0x193)](","),
    _0x545f62 = _0x59fc3d[0x0][_0x50451f(0x1aa)](/:(.*?);/)[0x1],
    _0x486c5c = atob(_0x59fc3d[0x1]),
    _0x544151 = _0x486c5c[_0x50451f(0x179)],
    _0x423f65 = new Uint8Array(_0x544151);
  while (_0x544151--) {
    _0x423f65[_0x544151] = _0x486c5c["charCodeAt"](_0x544151);
  }
  return new Blob([_0x423f65], { type: _0x545f62 });
}
const calculateRiskScore = (
  _0x145a56,
  _0x7de39a,
  _0x12ddc6,
  _0x1f6a15,
  _0x3b02aa,
  _0x2f5204,
  _0x4a4782,
  _0x517ead,
  _0x3a8f6a,
  _0x498de7
) => {
  const _0x2c6805 = _0x20e9;
  console[_0x2c6805(0x188)]({
    age: _0x145a56,
    investment: _0x7de39a,
    horizon: _0x12ddc6,
    tolerance: _0x1f6a15,
    react: _0x3b02aa,
    experience: _0x2f5204,
    comfort: _0x4a4782,
    financialSituation: _0x517ead,
    lossReaction: _0x3a8f6a,
    investmentReliance: _0x498de7,
  });
  let _0x2ad15c = 0x0;
  switch (_0x145a56) {
    case "More\x20Than\x2060\x20Years":
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x1ac):
      _0x2ad15c += 0x2;
      break;
    case "Less\x20Than\x2045\x20Years":
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x1bf):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x7de39a) {
    case "Capital\x20preservation":
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x1bc):
      _0x2ad15c += 0x2;
      break;
    case _0x2c6805(0x169):
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x18c):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x12ddc6) {
    case _0x2c6805(0x161):
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x176):
      _0x2ad15c += 0x2;
      break;
    case _0x2c6805(0x1ae):
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x1b5):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x1f6a15) {
    case "Very\x20Low\x20(Cannot\x20Tolerate\x20Any\x20Loss)":
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x166):
      _0x2ad15c += 0x2;
      break;
    case "Moderate\x20(Can\x20Tolerate\x20Some\x20Loss)":
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x175):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x3b02aa) {
    case "Sell\x20Immediately\x20To\x20Prevent\x20Further\x20Losses":
      _0x2ad15c += 0x1;
      break;
    case "Consider\x20Selling\x20But\x20Prefer\x20To\x20Hold":
      _0x2ad15c += 0x2;
      break;
    case "Hold\x20And\x20Wait\x20For\x20Recovery":
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x158):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x2f5204) {
    case "No\x20Experience":
      _0x2ad15c += 0x1;
      break;
    case "Some\x20Experience":
      _0x2ad15c += 0x2;
      break;
    case "Experienced":
      _0x2ad15c += 0x3;
      break;
    case "Very\x20Experienced":
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x4a4782) {
    case "Less\x20Than\x2020%":
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x16d):
      _0x2ad15c += 0x2;
      break;
    case _0x2c6805(0x191):
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x162):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x517ead) {
    case _0x2c6805(0x174):
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x196):
      _0x2ad15c += 0x2;
      break;
    case _0x2c6805(0x1c2):
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x190):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x3a8f6a) {
    case _0x2c6805(0x181):
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x164):
      _0x2ad15c += 0x2;
      break;
    case _0x2c6805(0x170):
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x1c1):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  switch (_0x498de7) {
    case _0x2c6805(0x180):
      _0x2ad15c += 0x1;
      break;
    case _0x2c6805(0x187):
      _0x2ad15c += 0x2;
      break;
    case "Rely\x20On\x20Deferred\x20Regular\x20Income":
      _0x2ad15c += 0x3;
      break;
    case _0x2c6805(0x1a0):
      _0x2ad15c += 0x4;
      break;
    default:
      break;
  }
  return _0x2ad15c;
};
document[_0x1b802a(0x1a2)]("riskProfilerForm")[_0x1b802a(0x1b2)](
  "submit",
  (_0x4babe3) => {
    const _0x38cf43 = _0x1b802a;
    _0x4babe3[_0x38cf43(0x19a)]();
    let _0x5cdfed = document[_0x38cf43(0x15f)](_0x38cf43(0x19c)),
      _0x2c26a2 = document[_0x38cf43(0x15f)](
        "input[name=\x22investment\x22]:checked"
      ),
      _0x273e2d = document[_0x38cf43(0x15f)](
        "input[name=\x22horizon\x22]:checked"
      ),
      _0x44f9c5 = document[_0x38cf43(0x15f)](_0x38cf43(0x1b8)),
      _0x2a1879 = document[_0x38cf43(0x15f)](_0x38cf43(0x1c4)),
      _0x20f33b = document["querySelector"](_0x38cf43(0x1b1)),
      _0x5ce7ba = document[_0x38cf43(0x15f)](_0x38cf43(0x17a)),
      _0x62a428 = document[_0x38cf43(0x15f)](_0x38cf43(0x198)),
      _0x4d5921 = document[_0x38cf43(0x15f)](_0x38cf43(0x1ba)),
      _0x1e7398 = document[_0x38cf43(0x15f)](_0x38cf43(0x19d)),
      _0x8c2c92 = document[_0x38cf43(0x1a2)]("name"),
      _0x41253c = document[_0x38cf43(0x1a2)]("explainImg"),
      _0x2d0bc7 = document["getElementById"](_0x38cf43(0x182)),
      _0x30013e = document[_0x38cf43(0x1a2)](_0x38cf43(0x1ab)),
      _0x1ba122 = document[_0x38cf43(0x1a2)](_0x38cf43(0x1a5))[
        _0x38cf43(0x1c7)
      ];
    const _0xd30f18 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (_0x5cdfed == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x15b)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x2c26a2 == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x17c)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x273e2d == null) {
      (_0x30013e[_0x38cf43(0x18b)] =
        "Please\x20select\x20your\x20Investment\x20Time\x20Horizon\x20!"),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x44f9c5 == null) {
      (_0x30013e[_0x38cf43(0x18b)] =
        "Please\x20select\x20your\x20Tolerance\x20Category\x20For\x20Investment\x20Losses\x20!"),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x2a1879 == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x1c5)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x20f33b == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x16c)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x5ce7ba == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x18d)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x62a428 == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x1a1)), _0x2d0bc7["click"]();
      return;
    }
    if (_0x4d5921 == null) {
      (_0x30013e[_0x38cf43(0x18b)] = _0x38cf43(0x1b6)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x1e7398 == null) {
      (_0x30013e[_0x38cf43(0x18b)] =
        "Please\x20select\x20how\x20much\x20you\x20would\x20rely\x20on\x20your\x20investment\x20for\x20income\x20or\x20growth\x20!"),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (
      _0x8c2c92[_0x38cf43(0x1c7)] == "" ||
      _0x8c2c92[_0x38cf43(0x1c7)] == null
    ) {
      (_0x30013e["innerText"] = _0x38cf43(0x189)),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    if (_0x1ba122 == "" || !_0xd30f18[_0x38cf43(0x194)](_0x1ba122)) {
      (_0x30013e["innerText"] =
        "Please\x20Enter\x20Valid\x20Email\x20Address\x20to\x20get\x20the\x20Risk\x20Profiling\x20Report\x20!"),
        _0x2d0bc7[_0x38cf43(0x1bd)]();
      return;
    }
    let _0x24eaa7 = calculateRiskScore(
      _0x5cdfed[_0x38cf43(0x1c7)],
      _0x2c26a2[_0x38cf43(0x1c7)],
      _0x273e2d[_0x38cf43(0x1c7)],
      _0x44f9c5[_0x38cf43(0x1c7)],
      _0x2a1879[_0x38cf43(0x1c7)],
      _0x20f33b[_0x38cf43(0x1c7)],
      _0x5ce7ba[_0x38cf43(0x1c7)],
      _0x62a428[_0x38cf43(0x1c7)],
      _0x4d5921[_0x38cf43(0x1c7)],
      _0x1e7398[_0x38cf43(0x1c7)]
    );
    (resultHeader = document[_0x38cf43(0x1a2)](_0x38cf43(0x18f))),
      (resultHeader[_0x38cf43(0x1af)] =
        "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20dark:text-white\x20pb-1\x22>Risk\x20Profile\x20Score</h5>"),
      (showOutput = document[_0x38cf43(0x1a2)](_0x38cf43(0x167))),
      (showOutput["innerHTML"] =
        _0x38cf43(0x1bb) +
        _0x38cf43(0x19b) +
        _0x38cf43(0x183) +
        _0x38cf43(0x168) +
        _0x38cf43(0x15d) +
        _0x38cf43(0x17b) +
        _0x24eaa7 +
        _0x38cf43(0x1a4) +
        _0x38cf43(0x165)),
      (_0x41253c["style"] =
        "margin-top:1.5rem;display:flex;justify-content:center;align-items:center;"),
      scrollToElement(_0x38cf43(0x18f));
    var _0x52e660 = _0x4babe3[_0x38cf43(0x19f)],
      _0xf54897 = new XMLHttpRequest();
    _0xf54897[_0x38cf43(0x18e)](_0x38cf43(0x1b4), _0x52e660[_0x38cf43(0x199)]),
      (_0xf54897[_0x38cf43(0x195)] = function () {
        const _0x296e0c = _0x38cf43;
        if (_0xf54897[_0x296e0c(0x177)] === XMLHttpRequest[_0x296e0c(0x1b9)]) {
          if (_0xf54897[_0x296e0c(0x186)] === 0xc8) {
            var _0x15111d = _0xf54897[_0x296e0c(0x1b0)];
            html2canvas(document[_0x296e0c(0x15f)]("#resultContainer"), {
              scale: 0x3,
              useCORS: !![],
              scrollY: 0x0,
              scrollX: 0x0,
            })["then"]((_0x2fda3e) => {
              const _0x4830de = _0x296e0c;
              let _0x2067bc = _0x2fda3e["getContext"]("2d"),
                _0x56b183 = document[_0x4830de(0x192)](_0x4830de(0x15e)),
                _0x4f2d6b = _0x56b183[_0x4830de(0x185)]("2d");
              (_0x56b183[_0x4830de(0x171)] = _0x2fda3e[_0x4830de(0x171)]),
                (_0x56b183[_0x4830de(0x15a)] = _0x2fda3e["height"] - 0xa),
                _0x4f2d6b[_0x4830de(0x16a)](
                  _0x2fda3e,
                  0x0,
                  0xa,
                  _0x2fda3e["width"],
                  _0x2fda3e["height"] - 0xa,
                  0x0,
                  0x0,
                  _0x2fda3e[_0x4830de(0x171)],
                  _0x2fda3e[_0x4830de(0x15a)] - 0xa
                );
              let _0x32ab7f = _0x56b183["toDataURL"]("image/jpeg"),
                _0x7378d9 = dataURLtoBlob(_0x32ab7f);
              const _0x5b375f = new FormData();
              _0x5b375f["append"](_0x4830de(0x1a7), _0x7378d9, "image.jpeg"),
                _0x5b375f["append"](_0x4830de(0x1a5), _0x1ba122),
                _0x5b375f[_0x4830de(0x17e)](_0x4830de(0x163), _0x4830de(0x173)),
                _0x5b375f[_0x4830de(0x17e)](
                  _0x4830de(0x1a3),
                  "Apex\x20Capital\x20Trust"
                ),
                fetch(_0x4830de(0x19e), {
                  method: _0x4830de(0x1b4),
                  body: _0x5b375f,
                })
                  [_0x4830de(0x15c)]((_0x1cb85f) =>
                    _0x1cb85f[_0x4830de(0x1b7)]()
                  )
                  [_0x4830de(0x15c)]((_0x17afff) => {
                    const _0x36d834 = _0x4830de;
                    console[_0x36d834(0x188)](_0x36d834(0x18a), _0x17afff);
                  })
                  [_0x4830de(0x16f)]((_0x388fbe) => {
                    const _0x1efd16 = _0x4830de;
                    console[_0x1efd16(0x16e)](_0x1efd16(0x1ad), _0x388fbe);
                  });
            });
          } else console[_0x296e0c(0x188)](_0x296e0c(0x17f));
        }
      }),
      _0xf54897["send"](new FormData(_0x52e660));
  }
);
function _0xdb49() {
  const _0x5f2722 = [
    "36sprmzv",
    "match",
    "modalBody",
    "Less\x20Than\x2060\x20Years",
    "Error:",
    "5\x20-\x2010\x20Years",
    "innerHTML",
    "responseText",
    "input[name=\x22experience\x22]:checked",
    "addEventListener",
    "1934ACNBUN",
    "POST",
    "More\x20Than\x2010\x20Years",
    "Please\x20select\x20what\x20your\x20reaction\x20if\x20your\x20portfolio\x20lost\x2020%\x20of\x20its\x20values\x20in\x20a\x20short\x20period\x20!",
    "json",
    "input[name=\x22tolerance\x22]:checked",
    "DONE",
    "input[name=\x22lossReaction\x22]:checked",
    "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>",
    "Income\x20Generation",
    "click",
    "getBoundingClientRect",
    "Less\x20than\x2030\x20Years",
    "80333VQOPfH",
    "Buy\x20More\x20To\x20Capitalize\x20On\x20Lower\x20Prices",
    "Moderate\x20Income\x20With\x20Occasional\x20Fluctuations",
    "pageYOffset",
    "input[name=\x22react\x22]:checked",
    "Please\x20select\x20how\x20you\x20would\x20react\x20to\x20Stock\x20Market\x20Decline\x20!",
    "53OstxFq",
    "value",
    "176922ffhqXY",
    "See\x20It\x20As\x20A\x20Buying\x20Opportunity",
    "3846uBnECo",
    "height",
    "Please\x20select\x20your\x20age\x20category\x20!",
    "then",
    "</th>",
    "canvas",
    "querySelector",
    "3318grilcC",
    "Less\x20Than\x203\x20Years",
    "More\x20Than\x2060%",
    "type",
    "Hold\x20And\x20Wait\x20For\x20Recovery",
    "</th></tr></thead></table></div>",
    "Low\x20(Uncomfortable\x20With\x20Loss)",
    "showOutput",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Final\x20Risk\x20Profile\x20Score",
    "Capital\x20Appreciation",
    "drawImage",
    "697920gkxyiZ",
    "Please\x20select\x20your\x20level\x20of\x20experience\x20in\x20stock\x20market\x20!",
    "20%\x20-\x2040%",
    "error",
    "catch",
    "Will\x20Do\x20Asset\x20Rebalancing",
    "width",
    "372hbuaVz",
    "Risk\x20Profiling\x20Analysis",
    "Unstable\x20With\x20Potential\x20Financial\x20Risks",
    "High\x20(Comfortable\x20With\x20Significant\x20Loss)",
    "3\x20-\x205\x20Years",
    "readyState",
    "50yhgRaZ",
    "length",
    "input[name=\x22comfort\x22]:checked",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20",
    "Please\x20select\x20your\x20primary\x20investment\x20goal\x20!",
    "scrollTo",
    "append",
    "Error:\x20Something\x20went\x20wrong.",
    "Rely\x20On\x20Them\x20For\x20Regular\x20Income",
    "Sell\x20To\x20Avoid\x20Further\x20Losses",
    "toggleModal",
    "<thead\x20class=\x22text-md\x20text-gray-700\x20bg-gray-50\x20dark:bg-gray-700\x20dark:text-gray-400\x22>",
    "127035EOfMqR",
    "getContext",
    "status",
    "A\x20Mix\x20Of\x20Income\x20And\x20Growth",
    "log",
    "Please\x20enter\x20your\x20name\x20!",
    "Success:",
    "innerText",
    "Speculative\x20Growth",
    "Please\x20select\x20how\x20much\x20you\x20would\x20be\x20comfortable\x20investing\x20in\x20equity\x20!",
    "open",
    "resultHeader",
    "Stable\x20With\x20Secure\x20Income",
    "40%\x20-\x2060%",
    "createElement",
    "split",
    "test",
    "onreadystatechange",
    "Low\x20But\x20Stable\x20Income",
    "top",
    "input[name=\x22financialSituation\x22]:checked",
    "action",
    "preventDefault",
    "<table\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20dark:text-gray-400\x22>",
    "input[name=\x22age\x22]:checked",
    "input[name=\x22investmentReliance\x22]:checked",
    "https://operations.webclass.in/api/navCalculator/emailAnalysisReport",
    "target",
    "Purely\x20For\x20Long-Term\x20Growth",
    "Please\x20select\x20what\x20your\x20current\x20financial\x20situation\x20is\x20!",
    "getElementById",
    "sender",
    "\x20/\x2040",
    "email",
    "849249bJZJfh",
    "file",
    "smooth",
  ];
  _0xdb49 = function () {
    return _0x5f2722;
  };
  return _0xdb49();
}
