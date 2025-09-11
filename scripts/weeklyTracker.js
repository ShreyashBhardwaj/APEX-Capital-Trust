const _0x426470 = _0x18ac;
(function (_0x36d54b, _0x172cec) {
  const _0x180ebd = _0x18ac,
    _0x1e87a0 = _0x36d54b();
  while (!![]) {
    try {
      const _0x152afb =
        parseInt(_0x180ebd(0x8b)) / 0x1 +
        parseInt(_0x180ebd(0x94)) / 0x2 +
        parseInt(_0x180ebd(0x8a)) / 0x3 +
        parseInt(_0x180ebd(0x8f)) / 0x4 +
        (parseInt(_0x180ebd(0x68)) / 0x5) * (-parseInt(_0x180ebd(0x6e)) / 0x6) +
        parseInt(_0x180ebd(0x8c)) / 0x7 +
        (-parseInt(_0x180ebd(0x77)) / 0x8) * (parseInt(_0x180ebd(0x67)) / 0x9);
      if (_0x152afb === _0x172cec) break;
      else _0x1e87a0["push"](_0x1e87a0["shift"]());
    } catch (_0x524c16) {
      _0x1e87a0["push"](_0x1e87a0["shift"]());
    }
  }
})(_0x4f89, 0xa01c2);
function _0x4f89() {
  const _0x1d8e5f = [
    "1100631mnAClo",
    "571744MosPuu",
    "9082556MnUzPP",
    "Show\x20Top",
    "hover:bg-red-600",
    "3164508iLrUJl",
    "text-red-600",
    "querySelectorAll",
    "scheme",
    "</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22py-2\x20pr-2\x20text-right\x20font-medium\x20",
    "68224duxuvD",
    "dataset",
    "remove",
    "21409245GswVJV",
    "5tgYIxH",
    "bg-red-500",
    "includes",
    "API\x20call\x20failed",
    "growth",
    "forEach",
    "160518AYUdaU",
    "bg-green-500",
    "getElementById",
    "innerText",
    "weeklySchemeTrackerTitle",
    "innerHTML",
    "Worst",
    "addEventListener",
    ".toggle-btn",
    "8GssARX",
    "Error\x20fetching\x20data:",
    "textContent",
    "\x0a\x20\x20\x20\x20\x20\x20<tr\x20class=\x22border-b\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22py-2\x20pl-2\x22>",
    "classList",
    "top",
    "No\x20tbody\x20element\x20found\x20for\x20id:\x20",
    "worst",
    "https://operations.webclass.in/api/navCalculator/getWeeklyBestAndWorstMFSchemePerformers",
    "week_one_date",
    "json",
    "target",
    "warn",
    "hover:bg-green-600",
    "\x20to\x20",
    "week_two_date",
    "add",
    "POST",
    "No\x20data\x20for\x20category:\x20",
  ];
  _0x4f89 = function () {
    return _0x1d8e5f;
  };
  return _0x4f89();
}
const fetchWeeklyTrackerData = async () => {
    const _0x438dc9 = _0x18ac;
    try {
      let _0x57efac = await fetch(_0x438dc9(0x7f), { method: _0x438dc9(0x88) });
      if (!_0x57efac["ok"]) throw new Error(_0x438dc9(0x6b));
      return await _0x57efac[_0x438dc9(0x81)]();
    } catch (_0x10685b) {
      return console["error"](_0x438dc9(0x78), _0x10685b), {};
    }
  },
  renderTable = async (_0x5ba4e1, _0x472206) => {
    const _0xc4553d = _0x18ac;
    let _0x1530c4 = await fetchWeeklyTrackerData();
    if (!_0x1530c4[_0x5ba4e1]) {
      console[_0xc4553d(0x83)](_0xc4553d(0x89) + _0x5ba4e1);
      return;
    }
    const _0x4b9804 = document[_0xc4553d(0x70)](_0xc4553d(0x72));
    _0x4b9804[_0xc4553d(0x71)] =
      "From\x20" +
      _0x1530c4[_0xc4553d(0x86)] +
      _0xc4553d(0x85) +
      _0x1530c4[_0xc4553d(0x80)];
    const _0x201f8c = document[_0xc4553d(0x70)](_0x5ba4e1);
    if (!_0x201f8c) {
      console[_0xc4553d(0x83)](_0xc4553d(0x7d) + _0x5ba4e1);
      return;
    }
    (_0x201f8c[_0xc4553d(0x73)] = ""),
      _0x1530c4[_0x5ba4e1][_0x472206][_0xc4553d(0x6d)]((_0x5f2e3a) => {
        const _0x11fbc6 = _0xc4553d,
          _0x3b621c =
            _0x472206 === _0x11fbc6(0x7c) ? "text-green-600" : _0x11fbc6(0x90);
        _0x201f8c[_0x11fbc6(0x73)] +=
          _0x11fbc6(0x7a) +
          _0x5f2e3a[_0x11fbc6(0x92)] +
          _0x11fbc6(0x93) +
          _0x3b621c +
          "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0x5f2e3a[_0x11fbc6(0x6c)] +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20";
      });
  };
function _0x18ac(_0x3ec1b0, _0xf88193) {
  const _0x4f897b = _0x4f89();
  return (
    (_0x18ac = function (_0x18ac3f, _0x527a20) {
      _0x18ac3f = _0x18ac3f - 0x67;
      let _0x1885c3 = _0x4f897b[_0x18ac3f];
      return _0x1885c3;
    }),
    _0x18ac(_0x3ec1b0, _0xf88193)
  );
}
(async () => {
  const _0xf58c8 = _0x18ac,
    _0x42c30a = await fetchWeeklyTrackerData();
  Object["keys"](_0x42c30a)["forEach"]((_0x15392d) =>
    renderTable(_0x15392d, _0xf58c8(0x7c))
  );
})(),
  document[_0x426470(0x91)](_0x426470(0x76))["forEach"]((_0x520c48) => {
    const _0x290ee0 = _0x426470;
    _0x520c48[_0x290ee0(0x75)]("click", async () => {
      const _0x5cc1ea = _0x290ee0,
        _0x5d2ad9 = _0x520c48[_0x5cc1ea(0x95)][_0x5cc1ea(0x82)],
        _0x30a8ad = _0x520c48[_0x5cc1ea(0x79)][_0x5cc1ea(0x6a)](
          _0x5cc1ea(0x74)
        );
      _0x30a8ad
        ? (await renderTable(_0x5d2ad9, _0x5cc1ea(0x7e)),
          (_0x520c48[_0x5cc1ea(0x79)] = _0x5cc1ea(0x8d)),
          _0x520c48["classList"][_0x5cc1ea(0x96)](
            _0x5cc1ea(0x69),
            _0x5cc1ea(0x8e)
          ),
          _0x520c48["classList"][_0x5cc1ea(0x87)](
            _0x5cc1ea(0x6f),
            "hover:bg-green-600"
          ))
        : (await renderTable(_0x5d2ad9, _0x5cc1ea(0x7c)),
          (_0x520c48[_0x5cc1ea(0x79)] = "Show\x20Worst"),
          _0x520c48[_0x5cc1ea(0x7b)][_0x5cc1ea(0x96)](
            _0x5cc1ea(0x6f),
            _0x5cc1ea(0x84)
          ),
          _0x520c48[_0x5cc1ea(0x7b)]["add"](
            _0x5cc1ea(0x69),
            "hover:bg-red-600"
          ));
    });
  });
