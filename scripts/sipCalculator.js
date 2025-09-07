const _0x424a6c = _0x3476;
(function (_0x4dd4a9, _0x1f4a1a) {
  const _0x535979 = _0x3476,
    _0x4e04d8 = _0x4dd4a9();
  while (!![]) {
    try {
      const _0x55f6d8 =
        (-parseInt(_0x535979(0x18a)) / 0x1) *
          (-parseInt(_0x535979(0x1be)) / 0x2) +
        parseInt(_0x535979(0x1a8)) / 0x3 +
        (-parseInt(_0x535979(0x1a1)) / 0x4) *
          (parseInt(_0x535979(0x1a2)) / 0x5) +
        (-parseInt(_0x535979(0x1a4)) / 0x6) *
          (parseInt(_0x535979(0x1a5)) / 0x7) +
        parseInt(_0x535979(0x1ad)) / 0x8 +
        (-parseInt(_0x535979(0x1ac)) / 0x9) *
          (-parseInt(_0x535979(0x185)) / 0xa) +
        -parseInt(_0x535979(0x182)) / 0xb;
      if (_0x55f6d8 === _0x1f4a1a) break;
      else _0x4e04d8["push"](_0x4e04d8["shift"]());
    } catch (_0x33ac01) {
      _0x4e04d8["push"](_0x4e04d8["shift"]());
    }
  }
})(_0xa25f, 0x5f7f7);
let fundHouse = document["getElementById"]("fundHouse"),
  datePicker = document["getElementById"](_0x424a6c(0x1b9)),
  schemeList = document[_0x424a6c(0x1a7)](_0x424a6c(0x1c8)),
  modalBtn = document[_0x424a6c(0x1a7)](_0x424a6c(0x1cb)),
  explainPara = document[_0x424a6c(0x1a7)]("explainPara"),
  selectSchemes = document["getElementById"]("selectScheme"),
  gridMargin = document[_0x424a6c(0x1a7)](_0x424a6c(0x189)),
  searchBtn = document[_0x424a6c(0x1a7)](_0x424a6c(0x187)),
  schemeListName = document[_0x424a6c(0x1a7)]("schemeList"),
  emailForm = document[_0x424a6c(0x1a7)](_0x424a6c(0x199)),
  resultHeader = document[_0x424a6c(0x1a7)](_0x424a6c(0x1c0)),
  schemeType = document["getElementById"]("schemeType"),
  lumpsumInput = document[_0x424a6c(0x1a7)](_0x424a6c(0x1ba)),
  outputTbl = document[_0x424a6c(0x1a7)]("outputTbl");
datePicker["addEventListener"](_0x424a6c(0x1b1), () => {
  const _0x1ba9ad = _0x424a6c,
    [_0x386885, _0x2f9fc3, _0xd7e7d2] =
      datePicker["value"][_0x1ba9ad(0x17c)]("/");
  let _0x48da65 = new Date(_0xd7e7d2 + "-" + _0x2f9fc3 + "-" + _0x386885);
  _0x48da65 > new Date()
    ? ((explainPara[_0x1ba9ad(0x1c4)] = _0x1ba9ad(0x183)),
      modalBtn[_0x1ba9ad(0x1aa)](),
      (datePicker[_0x1ba9ad(0x1bc)] = ""))
    : fundHouse[_0x1ba9ad(0x1bc)] !== "" &&
      schemeType[_0x1ba9ad(0x1bc)] !== "" &&
      ((gridMargin[_0x1ba9ad(0x17a)] = _0x1ba9ad(0x1a0)),
      (selectSchemes[_0x1ba9ad(0x1c6)] = "text-align:\x20center;display:none;"),
      fetchSchemeList(
        schemeType[_0x1ba9ad(0x1bc)],
        fundHouse[_0x1ba9ad(0x1bc)]
      ));
});
function _0xa25f() {
  const _0x5aebef = [
    "json",
    "\x22\x20type=\x22radio\x22\x20name=\x22schemes\x22\x20value=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20p-2\x20rounded\x20hover:bg-gray-100\x20dark:hover:bg-gray-600\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22checkbox-item-17\x22\x20class=\x22w-full\x20text-sm\x20font-medium\x20text-gray-900\x20rounded\x20dark:text-gray-300\x22>Select\x20Scheme</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "NumberFormat",
    "https://operations.webclass.in/api/navCalculator/getSchemeListForSIP",
    "Please\x20input\x20Date\x20Of\x20Investment\x20Date\x20Before\x20Selecting\x20Scheme",
    "\x22\x20class=\x22w-4\x20h-4\x20border-gray-300\x20focus:ring-2\x20focus:ring-blue-300\x20dark:focus:ring-blue-600\x20dark:focus:bg-blue-600\x20dark:bg-gray-700\x20dark:border-gray-600\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22scheme-option-",
    "Please\x20select\x20scheme\x20in\x20order\x20to\x20calculate\x20SIP",
    "%</th>",
    "emailForm",
    "</th>",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Total\x20Amount\x20of\x20SIP\x20Contribution\x20",
    "short",
    "numeric",
    "log",
    "replace",
    "gridMargin\x20grid\x20md:grid-cols-2\x20md:gap-6",
    "1424044PWPVCz",
    "10MaiRMN",
    "<div\x20class=\x22max-w-full\x20relative\x20overflow-x-auto\x20shadow-md\x20sm:rounded-lg\x22>",
    "1614OBDpEa",
    "1113ELYbMe",
    "POST",
    "getElementById",
    "1248225EnLCUl",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹",
    "click",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20p-2\x20rounded\x20hover:bg-gray-100\x20dark:hover:bg-gray-600\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22scheme-option-",
    "9rIBrzZ",
    "3394368aIhDdS",
    "format",
    "<h5\x20class=\x22leading-none\x20text-center\x20text-3xl\x20mb-4\x20font-extrabold\x20text-gray-900\x20dark:text-white\x20pb-1\x22>SIP\x20Calculation\x20Details</h5>\x20<h5\x20class=\x22text-center\x20text-lg\x20font-semibold\x22>",
    "en-IN",
    "changeDate",
    "length",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Monthly\x20SIP\x20Investment\x20",
    "display:none",
    "Please\x20",
    "application/json",
    "</tr></thead></table></div>",
    "<tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Present\x20Value\x20Of\x20Investment\x20",
    "datepicker-custom",
    "lumpsum-input",
    "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>",
    "value",
    "text-align:\x20center;display:none;",
    "15526PtjxXv",
    "innerHTML",
    "resultHeader",
    "pageYOffset",
    "totalSIPAmt",
    "\x20to\x20Today</h5>",
    "innerText",
    "monthlySIP",
    "style",
    "presentInvestValue",
    "schemeList",
    "addEventListener",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20p-2\x20rounded\x20hover:bg-gray-100\x20dark:hover:bg-gray-600\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22checkbox-item-17\x22\x20class=\x22w-full\x20text-sm\x20font-medium\x20text-gray-900\x20rounded\x20dark:text-gray-300\x22>No\x20Schemes\x20Available</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>",
    "modalBtn",
    "className",
    "<blockquote\x20class=\x22text-xl\x20text-center\x20italic\x20font-semibold\x20text-gray-900\x20dark:text-white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Oops\x20!\x20There\x20was\x20an\x20error\x20in\x20the\x20calculation\x20!</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</blockquote>",
    "split",
    "gridMargin\x20grid\x20md:grid-cols-3\x20md:gap-6",
    "</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "display:\x22block\x22",
    "</h5><h5\x20class=\x22text-center\x20text-lg\x20font-semibold\x22>From\x20",
    "\x22\x20class=\x22w-4\x20h-4\x20border-gray-300\x20focus:ring-2\x20focus:ring-blue-300\x20dark:focus:ring-blue-600\x20dark:focus:bg-blue-600\x20dark:bg-gray-700\x20dark:border-gray-600\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22scheme-option-",
    "2567213OxqcOu",
    "Please\x20select\x20Past\x20Dates\x20for\x20SIP\x20Calculator",
    "sipCagr",
    "2362070xifLZY",
    "</tr>",
    "searchBtn",
    "stringify",
    "gridMargin",
    "39NxahbG",
    "forEach",
    "smooth",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</blockquote>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>",
    "scrollTo",
    "\x20<div\x20role=\x22status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22grid\x20items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin:\x200.5%\x2050%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-hidden=\x22true\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22mr-2\x20w-8\x20h-8\x20text-gray-200\x20animate-spin\x20dark:text-gray-600\x20fill-blue-600\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewBox=\x220\x200\x20100\x20101\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22none\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M100\x2050.5908C100\x2078.2051\x2077.6142\x20100.591\x2050\x20100.591C22.3858\x20100.591\x200\x2078.2051\x200\x2050.5908C0\x2022.9766\x2022.3858\x200.59082\x2050\x200.59082C77.6142\x200.59082\x20100\x2022.9766\x20100\x2050.5908ZM9.08144\x2050.5908C9.08144\x2073.1895\x2027.4013\x2091.5094\x2050\x2091.5094C72.5987\x2091.5094\x2090.9186\x2073.1895\x2090.9186\x2050.5908C90.9186\x2027.9921\x2072.5987\x209.67226\x2050\x209.67226C27.4013\x209.67226\x209.08144\x2027.9921\x209.08144\x2050.5908Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22currentColor\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M93.9676\x2039.0409C96.393\x2038.4038\x2097.8624\x2035.9116\x2097.0079\x2033.5539C95.2932\x2028.8227\x2092.871\x2024.3692\x2089.8167\x2020.348C85.8452\x2015.1192\x2080.8826\x2010.7238\x2075.2124\x207.41289C69.5422\x204.10194\x2063.2754\x201.94025\x2056.7698\x201.05124C51.7666\x200.367541\x2046.6976\x200.446843\x2041.7345\x201.27873C39.2613\x201.69328\x2037.813\x204.19778\x2038.4501\x206.62326C39.0873\x209.04874\x2041.5694\x2010.4717\x2044.0505\x2010.1071C47.8511\x209.54855\x2051.7191\x209.52689\x2055.5402\x2010.0491C60.8642\x2010.7766\x2065.9928\x2012.5457\x2070.6331\x2015.2552C75.2735\x2017.9648\x2079.3347\x2021.5619\x2082.5849\x2025.841C84.9175\x2028.9121\x2086.7997\x2032.2913\x2088.1811\x2035.8758C89.083\x2038.2158\x2091.5421\x2039.6781\x2093.9676\x2039.0409Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22currentFill\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<blockquote\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22text-md\x20text-center\x20italic\x20font-semibold\x20text-gray-900\x20dark:text-white\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Fetching\x20Schemes\x20For\x20Data\x20From\x20Investment\x20Date\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20And\x20",
  ];
  _0xa25f = function () {
    return _0x5aebef;
  };
  return _0xa25f();
}
const scrollToElement = (_0x4f5134) => {
    const _0x68fa2d = _0x424a6c,
      _0x14d6e2 = document[_0x68fa2d(0x1a7)](_0x4f5134);
    if (_0x14d6e2) {
      const _0x2c1246 = _0x14d6e2["getBoundingClientRect"](),
        _0x86a879 = window[_0x68fa2d(0x1c1)] + _0x2c1246["top"] - 0x82;
      window[_0x68fa2d(0x18e)]({ top: _0x86a879, behavior: _0x68fa2d(0x18c) });
    }
  },
  fetchSchemeList = async (_0xdc87b3, _0xe82ce3, _0x4ec7e2 = ![]) => {
    const _0x1770da = _0x424a6c;
    (resultHeader[_0x1770da(0x1bf)] = ""),
      (outputTbl[_0x1770da(0x1bf)] = ""),
      (emailForm[_0x1770da(0x1c6)] = "display:none");
    if (datePicker[_0x1770da(0x1bc)] == "")
      (explainPara[_0x1770da(0x1c4)] = _0x1770da(0x195)),
        modalBtn[_0x1770da(0x1aa)]();
    else {
      if (
        _0xe82ce3 == undefined ||
        _0xdc87b3 == undefined ||
        _0xe82ce3 == "" ||
        _0xdc87b3 == ""
      )
        (explainPara["innerText"] = _0x1770da(0x1b5)),
          modalBtn[_0x1770da(0x1aa)]();
      else {
        const [_0x467cc9, _0x3888b2, _0x366d20] =
          datePicker[_0x1770da(0x1bc)]["split"]("/");
        let _0x2b1ec4 = new Date(_0x366d20 + "-" + _0x3888b2 + "-" + _0x467cc9);
        (_0x2b1ec4 = _0x366d20 + "-" + _0x3888b2 + "-" + _0x467cc9),
          (outputTbl["innerHTML"] =
            _0x1770da(0x18f) + _0xe82ce3 + _0x1770da(0x18d));
        let _0x4dff4d = await fetch(_0x1770da(0x194), {
          method: _0x1770da(0x1a6),
          headers: { "Content-Type": _0x1770da(0x1b6) },
          body: JSON[_0x1770da(0x188)]({
            fundHouse: _0xe82ce3,
            investDate: _0x2b1ec4,
            schemeType: _0xdc87b3,
          }),
        });
        schemeList[_0x1770da(0x1bf)] = "";
        if (_0x4dff4d["ok"]) {
          let _0xe6b0b0 = await _0x4dff4d[_0x1770da(0x190)]();
          console[_0x1770da(0x19e)](_0xe6b0b0);
          if (_0xe6b0b0[_0x1770da(0x1c8)][_0x1770da(0x1b2)] > 0x0) {
            schemeList[_0x1770da(0x1bf)] += _0x1770da(0x192);
            let _0x5f2201 = 0x1;
            _0xe6b0b0[_0x1770da(0x1c8)][_0x1770da(0x18b)]((_0x16b265) => {
              const _0x384f65 = _0x1770da;
              _0x4ec7e2
                ? (schemeList["innerHTML"] +=
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20p-2\x20rounded\x20hover:bg-gray-100\x20dark:hover:bg-gray-600\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22scheme-option-" +
                    _0x5f2201 +
                    _0x384f65(0x191) +
                    _0x16b265 +
                    _0x384f65(0x196) +
                    _0x5f2201 +
                    "\x22\x20class=\x22w-full\x20text-sm\x20font-medium\x20text-gray-900\x20rounded\x20dark:text-gray-300\x22>" +
                    _0x16b265 +
                    _0x384f65(0x17e))
                : (schemeList[_0x384f65(0x1bf)] +=
                    _0x384f65(0x1ab) +
                    _0x5f2201 +
                    _0x384f65(0x191) +
                    _0x16b265 +
                    _0x384f65(0x181) +
                    _0x5f2201 +
                    "\x22\x20class=\x22w-full\x20text-sm\x20font-medium\x20text-gray-900\x20rounded\x20dark:text-gray-300\x22>" +
                    _0x16b265 +
                    "</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"),
                (_0x5f2201 += 0x1);
            });
          } else schemeList[_0x1770da(0x1bf)] = _0x1770da(0x1ca);
        }
        (gridMargin[_0x1770da(0x17a)] = _0x1770da(0x17d)),
          (selectSchemes[_0x1770da(0x1c6)] = "text-align:\x20center;"),
          (outputTbl[_0x1770da(0x1bf)] = "");
      }
    }
  },
  calculateSIP = async (_0x2bc872, _0x3a121a, _0x12dcdf) => {
    const _0xdb23b4 = _0x424a6c;
    (emailForm[_0xdb23b4(0x1c6)] = _0xdb23b4(0x1b4)),
      (resultHeader[_0xdb23b4(0x1bf)] = ""),
      (outputTbl[_0xdb23b4(0x1bf)] =
        "\x20<div\x20role=\x22status\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22grid\x20items-center\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin:\x201%\x2050%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-hidden=\x22true\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22mr-2\x20w-8\x20h-8\x20text-gray-200\x20animate-spin\x20dark:text-gray-600\x20fill-blue-600\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewBox=\x220\x200\x20100\x20101\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22none\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M100\x2050.5908C100\x2078.2051\x2077.6142\x20100.591\x2050\x20100.591C22.3858\x20100.591\x200\x2078.2051\x200\x2050.5908C0\x2022.9766\x2022.3858\x200.59082\x2050\x200.59082C77.6142\x200.59082\x20100\x2022.9766\x20100\x2050.5908ZM9.08144\x2050.5908C9.08144\x2073.1895\x2027.4013\x2091.5094\x2050\x2091.5094C72.5987\x2091.5094\x2090.9186\x2073.1895\x2090.9186\x2050.5908C90.9186\x2027.9921\x2072.5987\x209.67226\x2050\x209.67226C27.4013\x209.67226\x209.08144\x2027.9921\x209.08144\x2050.5908Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22currentColor\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M93.9676\x2039.0409C96.393\x2038.4038\x2097.8624\x2035.9116\x2097.0079\x2033.5539C95.2932\x2028.8227\x2092.871\x2024.3692\x2089.8167\x2020.348C85.8452\x2015.1192\x2080.8826\x2010.7238\x2075.2124\x207.41289C69.5422\x204.10194\x2063.2754\x201.94025\x2056.7698\x201.05124C51.7666\x200.367541\x2046.6976\x200.446843\x2041.7345\x201.27873C39.2613\x201.69328\x2037.813\x204.19778\x2038.4501\x206.62326C39.0873\x209.04874\x2041.5694\x2010.4717\x2044.0505\x2010.1071C47.8511\x209.54855\x2051.7191\x209.52689\x2055.5402\x2010.0491C60.8642\x2010.7766\x2065.9928\x2012.5457\x2070.6331\x2015.2552C75.2735\x2017.9648\x2079.3347\x2021.5619\x2082.5849\x2025.841C84.9175\x2028.9121\x2086.7997\x2032.2913\x2088.1811\x2035.8758C89.083\x2038.2158\x2091.5421\x2039.6781\x2093.9676\x2039.0409Z\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fill=\x22currentFill\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<blockquote\x0a\x20\x20\x20\x20\x20\x20\x20\x20class=\x22text-md\x20text-center\x20italic\x20font-semibold\x20text-gray-900\x20dark:text-white\x22\x0a\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Calculation\x20\x20Might\x20Take\x20Some\x20Time\x20!\x20Please\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20wait\x20for\x205-10\x20seconds\x20!\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20</blockquote>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>");
    let _0x5e34e9 = await fetch(
      "https://operations.webclass.in/api/navCalculator/calculateSIP",
      {
        method: _0xdb23b4(0x1a6),
        headers: { "Content-Type": "application/json" },
        body: JSON[_0xdb23b4(0x188)]({
          lumpsum: _0x2bc872,
          investDate: _0x3a121a,
          schemeName: _0x12dcdf,
        }),
      }
    );
    if (_0x5e34e9["ok"]) {
      let _0x49cbde = await _0x5e34e9[_0xdb23b4(0x190)]();
      emailForm[_0xdb23b4(0x1c6)] = _0xdb23b4(0x17f);
      const _0x38c36d = {
        day: "numeric",
        month: _0xdb23b4(0x19c),
        year: _0xdb23b4(0x19d),
      };
      let _0x91c972 = new Date(_0x3a121a)["toLocaleDateString"](
        "en-GB",
        _0x38c36d
      );
      (resultHeader[_0xdb23b4(0x1bf)] =
        _0xdb23b4(0x1af) +
        _0x12dcdf +
        _0xdb23b4(0x180) +
        _0x91c972 +
        _0xdb23b4(0x1c3)),
        (outputTbl[_0xdb23b4(0x1bf)] =
          _0xdb23b4(0x1a3) +
          "<table\x20id=\x22firstTbl\x22\x20class=\x22w-full\x20text-lg\x20text-left\x20rtl:text-right\x20text-gray-500\x20dark:text-gray-400\x22>" +
          "<thead\x20class=\x22text-md\x20text-gray-700\x20bg-gray-50\x20dark:bg-gray-700\x20dark:text-gray-400\x22>" +
          _0xdb23b4(0x1b3) +
          _0xdb23b4(0x19a) +
          _0xdb23b4(0x1a9) +
          Intl[_0xdb23b4(0x193)](_0xdb23b4(0x1b0))[_0xdb23b4(0x1ae)](
            _0x49cbde[_0xdb23b4(0x1c5)]
          ) +
          _0xdb23b4(0x19a) +
          _0xdb23b4(0x186) +
          _0xdb23b4(0x19b) +
          _0xdb23b4(0x19a) +
          "<th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>\x20₹" +
          Intl[_0xdb23b4(0x193)](_0xdb23b4(0x1b0))["format"](
            _0x49cbde[_0xdb23b4(0x1c2)]
          ) +
          "</th>" +
          "</tr>" +
          _0xdb23b4(0x1b8) +
          _0xdb23b4(0x19a) +
          _0xdb23b4(0x1a9) +
          Intl["NumberFormat"](_0xdb23b4(0x1b0))[_0xdb23b4(0x1ae)](
            _0x49cbde[_0xdb23b4(0x1c7)]
          ) +
          _0xdb23b4(0x19a) +
          "</tr><tr><th\x20scope=\x22col\x22\x20class=\x22px-6\x20py-3\x22>Total\x20SIP\x20CAGR</th>" +
          _0xdb23b4(0x1bb) +
          Intl[_0xdb23b4(0x193)]("en-IN")[_0xdb23b4(0x1ae)](
            _0x49cbde[_0xdb23b4(0x184)]
          ) +
          _0xdb23b4(0x198) +
          _0xdb23b4(0x1b7)),
        scrollToElement(_0xdb23b4(0x1c0));
    } else {
      let _0x14f991 = _0xdb23b4(0x17b);
      outputTbl["innerHTML"] = _0x14f991;
    }
  };
function _0x3476(_0x3dfabc, _0x7cff5a) {
  const _0xa25f70 = _0xa25f();
  return (
    (_0x3476 = function (_0x3476f6, _0x50588b) {
      _0x3476f6 = _0x3476f6 - 0x17a;
      let _0xf22d03 = _0xa25f70[_0x3476f6];
      return _0xf22d03;
    }),
    _0x3476(_0x3dfabc, _0x7cff5a)
  );
}
fundHouse[_0x424a6c(0x1c9)]("input", () => {
  const _0x36c4bb = _0x424a6c;
  schemeType["value"] != undefined &&
    schemeType["value"] != "" &&
    datePicker[_0x36c4bb(0x1bc)] !== "" &&
    ((gridMargin[_0x36c4bb(0x17a)] = _0x36c4bb(0x1a0)),
    (selectSchemes[_0x36c4bb(0x1c6)] = "text-align:\x20center;display:none;"),
    fetchSchemeList(schemeType[_0x36c4bb(0x1bc)], fundHouse["value"]));
}),
  schemeType["addEventListener"]("input", () => {
    const _0x45965c = _0x424a6c;
    fundHouse[_0x45965c(0x1bc)] != undefined &&
      fundHouse[_0x45965c(0x1bc)] != "" &&
      datePicker[_0x45965c(0x1bc)] !== "" &&
      ((gridMargin["className"] = _0x45965c(0x1a0)),
      (selectSchemes[_0x45965c(0x1c6)] = _0x45965c(0x1bd)),
      fetchSchemeList(schemeType["value"], fundHouse["value"]));
  }),
  searchBtn[_0x424a6c(0x1c9)](_0x424a6c(0x1aa), () => {
    const _0x5bee16 = _0x424a6c;
    let _0x1d6243 = document["querySelector"](
        "input[name=\x22schemes\x22]:checked"
      ),
      _0x4f8742 = null;
    if (_0x1d6243) {
      _0x4f8742 = _0x1d6243[_0x5bee16(0x1bc)];
      if (lumpsumInput[_0x5bee16(0x1bc)] !== "") {
        let _0x59063f = lumpsumInput[_0x5bee16(0x1bc)][_0x5bee16(0x19f)](
          /,/g,
          ""
        );
        const [_0x4861b4, _0x4f344e, _0x294792] =
          datePicker[_0x5bee16(0x1bc)][_0x5bee16(0x17c)]("/");
        let _0xf39e8c = _0x294792 + "-" + _0x4f344e + "-" + _0x4861b4;
        calculateSIP(_0x59063f, _0xf39e8c, _0x4f8742);
      } else
        (explainPara[_0x5bee16(0x1c4)] =
          "Please\x20enter\x20SIP\x20Investment\x20Amount\x20in\x20order\x20to\x20calculate\x20SIP"),
          modalBtn[_0x5bee16(0x1aa)]();
    } else
      (explainPara["innerText"] = _0x5bee16(0x197)),
        modalBtn[_0x5bee16(0x1aa)]();
  });
