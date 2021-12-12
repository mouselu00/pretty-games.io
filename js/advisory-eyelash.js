var customer = sessionStorage.name;

const data = [
  { EyelashID: "0001000000", LV: 1, Img: "../images/eye/1-0-1單眼皮.png" },
  { EyelashID: "0001010000", LV: 2, Img: "../images/eye/1-1稀疏.png" },
  { EyelashID: "0001020000", LV: 2, Img: "../images/eye/1-2空洞.png" },
  { EyelashID: "0001030000", LV: 2, Img: "../images/eye/1-3濃密.png" },
  { EyelashID: "0001040000", LV: 2, Img: "../images/eye/1-4健康.png" },
  { EyelashID: "0001050000", LV: 2, Img: "../images/eye/1-5受損.png" },
  { EyelashID: "0001060000", LV: 2, Img: "../images/eye/1-6細毛.png" },
  { EyelashID: "0001070000", LV: 2, Img: "../images/eye/1-7短毛.png" },
  { EyelashID: "0002000000", LV: 1, Img: "../images/eye/1-0-2雙眼皮.png" },
  { EyelashID: "0002010000", LV: 2, Img: "../images/eye/1-1稀疏.png" },
  { EyelashID: "0002020000", LV: 2, Img: "../images/eye/1-2空洞.png" },
  { EyelashID: "0002030000", LV: 2, Img: "../images/eye/1-3濃密.png" },
  { EyelashID: "0002040000", LV: 2, Img: "../images/eye/1-4健康.png" },
  { EyelashID: "0002050000", LV: 2, Img: "../images/eye/1-5受損.png" },
  { EyelashID: "0002060000", LV: 2, Img: "../images/eye/1-6細毛.png" },
  { EyelashID: "0002070000", LV: 2, Img: "../images/eye/1-7短毛.png" },
  { EyelashID: "0003000000", LV: 1, Img: "../images/eye/1-0-3內雙.png" },
  { EyelashID: "0003010000", LV: 2, Img: "../images/eye/1-1稀疏.png" },
  { EyelashID: "0003020000", LV: 2, Img: "../images/eye/1-2空洞.png" },
  { EyelashID: "0003030000", LV: 2, Img: "../images/eye/1-3濃密.png" },
  { EyelashID: "0003040000", LV: 2, Img: "../images/eye/1-4健康.png" },
  { EyelashID: "0003050000", LV: 2, Img: "../images/eye/1-5受損.png" },
  { EyelashID: "0003060000", LV: 2, Img: "../images/eye/1-6細毛.png" },
  { EyelashID: "0003070000", LV: 2, Img: "../images/eye/1-7短毛.png" },
  { EyelashID: "0004000000", LV: 1, Img: "../images/eye/1-0-4深陷型.png" },
  { EyelashID: "0004010000", LV: 2, Img: "../images/eye/1-1稀疏.png" },
  { EyelashID: "0004020000", LV: 2, Img: "../images/eye/1-2空洞.png" },
  { EyelashID: "0004030000", LV: 2, Img: "../images/eye/1-3濃密.png" },
  { EyelashID: "0004040000", LV: 2, Img: "../images/eye/1-4健康.png" },
  { EyelashID: "0004050000", LV: 2, Img: "../images/eye/1-5受損.png" },
  { EyelashID: "0004060000", LV: 2, Img: "../images/eye/1-6細毛.png" },
  { EyelashID: "0004070000", LV: 2, Img: "../images/eye/1-7短毛.png" },
  { EyelashID: "0005000000", LV: 1, Img: "../images/eye/1-0-5左單右雙.png" },
  { EyelashID: "0005010000", LV: 2, Img: "../images/eye/1-1稀疏.png" },
  { EyelashID: "0005020000", LV: 2, Img: "../images/eye/1-2空洞.png" },
  { EyelashID: "0005030000", LV: 2, Img: "../images/eye/1-3濃密.png" },
  { EyelashID: "0005040000", LV: 2, Img: "../images/eye/1-4健康.png" },
  { EyelashID: "0005050000", LV: 2, Img: "../images/eye/1-5受損.png" },
  { EyelashID: "0005060000", LV: 2, Img: "../images/eye/1-6細毛.png" },
  { EyelashID: "0005070000", LV: 2, Img: "../images/eye/1-7短毛.png" },
  { EyelashID: "0006000000", LV: 1, Img: "../images/eye/1-0-6左雙右單.png" },
  { EyelashID: "0006010000", LV: 2, Img: "../images/eye/1-1稀疏.png" },
  { EyelashID: "0006020000", LV: 2, Img: "../images/eye/1-2空洞.png" },
  { EyelashID: "0006030000", LV: 2, Img: "../images/eye/1-3濃密.png" },
  { EyelashID: "0006040000", LV: 2, Img: "../images/eye/1-4健康.png" },
  { EyelashID: "0006050000", LV: 2, Img: "../images/eye/1-5受損.png" },
  { EyelashID: "0006060000", LV: 2, Img: "../images/eye/1-6細毛.png" },
  { EyelashID: "0006070000", LV: 2, Img: "../images/eye/1-7短毛.png" },
  { EyelashID: "0007000000", LV: 1, Img: "../images/eye/2-0丹鳳眼.png" },
  { EyelashID: "0007010000", LV: 2, Img: "../images/eye/2-1稀疏.png" },
  { EyelashID: "0007020000", LV: 2, Img: "../images/eye/2-2空洞.png" },
  { EyelashID: "0007030000", LV: 2, Img: "../images/eye/2-3濃密.png" },
  { EyelashID: "0007040000", LV: 2, Img: "../images/eye/2-4健康.png" },
  { EyelashID: "0007050000", LV: 2, Img: "../images/eye/2-5受損.png" },
  { EyelashID: "0007060000", LV: 2, Img: "../images/eye/2-6細毛.png" },
  { EyelashID: "0007070000", LV: 2, Img: "../images/eye/2-7短毛.png" },
  { EyelashID: "0008010000", LV: 2, Img: "../images/eye/3-1稀疏.png" },
  { EyelashID: "0008020000", LV: 2, Img: "../images/eye/3-2空洞.png" },
  { EyelashID: "0008030000", LV: 2, Img: "../images/eye/3-3濃密.png" },
  { EyelashID: "0008040000", LV: 2, Img: "../images/eye/3-4健康.png" },
  { EyelashID: "0008050000", LV: 2, Img: "../images/eye/3-5受損.png" },
  { EyelashID: "0008060000", LV: 2, Img: "../images/eye/3-6細毛.png" },
  { EyelashID: "0008070000", LV: 2, Img: "../images/eye/3-7短毛.png" },
  { EyelashID: "0009010000", LV: 2, Img: "../images/eye/4-1稀疏.png" },
  { EyelashID: "0009020000", LV: 2, Img: "../images/eye/4-2空洞.png" },
  { EyelashID: "0009030000", LV: 2, Img: "../images/eye/4-3濃密.png" },
  { EyelashID: "0009040000", LV: 2, Img: "../images/eye/4-4健康.png" },
  { EyelashID: "0009050000", LV: 2, Img: "../images/eye/4-5受損.png" },
  { EyelashID: "0009060000", LV: 2, Img: "../images/eye/4-6細毛.png" },
  { EyelashID: "0009070000", LV: 2, Img: "../images/eye/4-7短毛.png" },
  { EyelashID: "0010000000", LV: 1, Img: "../images/eye/5-0細長型.png" },
  { EyelashID: "0010010000", LV: 2, Img: "../images/eye/5-1稀疏.png" },
  { EyelashID: "0010020000", LV: 2, Img: "../images/eye/5-2空洞.png" },
  { EyelashID: "0010030000", LV: 2, Img: "../images/eye/5-3濃密.png" },
  { EyelashID: "0010040000", LV: 2, Img: "../images/eye/5-4健康.png" },
  { EyelashID: "0010050000", LV: 2, Img: "../images/eye/5-5受損.png" },
  { EyelashID: "0010060000", LV: 2, Img: "../images/eye/5-6細毛.png" },
  { EyelashID: "0010070000", LV: 2, Img: "../images/eye/5-7短毛.png" },
  { EyelashID: "0011000000", LV: 1, Img: "../images/eye/6-0杏仁眼.png" },
  { EyelashID: "0011010000", LV: 2, Img: "../images/eye/6-1稀疏.png" },
  { EyelashID: "0011020000", LV: 2, Img: "../images/eye/6-2空洞.png" },
  { EyelashID: "0011030000", LV: 2, Img: "../images/eye/6-3濃密.png" },
  { EyelashID: "0011040000", LV: 2, Img: "../images/eye/6-4健康.png" },
  { EyelashID: "0011050000", LV: 2, Img: "../images/eye/6-5受損.png" },
  { EyelashID: "0011060000", LV: 2, Img: "../images/eye/6-6細毛.png" },
  { EyelashID: "0011070000", LV: 2, Img: "../images/eye/6-7短毛.png" },
];

$(function () {
  var customerChName = "";
  switch (sessionStorage.name) {
    case "nana":
      customerChName = "娜娜";
      break;
    case "nainai":
      customerChName = "奈奈";
      break;
    case "layla":
      customerChName = "蕾拉";
      break;
    case "wu":
      customerChName = "小舞";
      break;
  }
  document.getElementById("customer").innerText = "客戶-" + customerChName;
  document.getElementById("ClintName").innerText = customerChName;

  // 眼型選擇
  $("#nav_126ec5" + ">li>.nav-link").click(function () {
    var btn = $(this);
    $("#ctrl_126ec5")[0].value = btn[0].value;
    getEyeIamge();
  });

  // 真睫毛狀況
  $("#nav_5605cf" + ">li>.nav-link").click(function () {
    var btn = $(this);
    $("#ctrl_5605cf")[0].value = btn[0].value;
    getEyeIamge();
  });

  // 眼型選擇 active
  var val1 = "0001000000";
  if (val1.trim() != "") {
    $("#ctrl_126ec5")[0].value = val1;
    $(val1.split(",")).each(function (index, item) {
      var btn = $("#nav_126ec5" + ">li>button");
      $(btn).each(function (index2, item2) {
        if (item2.value == item) {
          $(item2).addClass("active");
        }
      });
    });
  }

  // 真睫毛狀況選擇 active
  var val2 = "0001010000";
  if (val2.trim() != "") {
    $("#ctrl_5605cf")[0].value = val2;
    $(val2.split(",")).each(function (index, item) {
      var btn = $("#nav_5605cf" + ">li>button");
      $(btn).each(function (index2, item2) {
        if (item2.value == item) {
          $(item2).addClass("active");
        }
      });
    });
  }

  getEyeIamge();
});
function isCorrect() {
  var boolGameWin = false;
  let eye = $("#ctrl_126ec5")[0].value;
  let eyelash = $("#ctrl_5605cf")[0].value;
  switch (customer) {
    case "nana":
      if (eye == "0010000000" && eyelash == "0001040000") {
        boolGameWin = true;
      }
      break;
    case "layla":
      if (eye == "0007000000" && eyelash == "0001070000") {
        boolGameWin = true;
      }
      break;
    case "nainai":
      if (eye == "0011000000" && eyelash == "0001030000") {
        boolGameWin = true;
      }
      break;
    case "wu":
      if (eye == "0001000000" && eyelash == "0001040000") {
        boolGameWin = true;
      }
      break;
  }

  boolGameWin == true
    ? (document.location.href = "success-" + customer + ".html")
    : (document.location.href = "fail-" + customer + ".html");
}

function getEyeIamge() {
  let eyeid = $('input[name="Eyelash.EyeStyle"]').val();
  let eyelashid = $('input[name="Eyelash.Hair"]').val();

  if (eyeid.trim() != "" || eyelashid.trim() != "") {
    let eyeimg = data.find((lv) => {
      return (lv.LV = 1 && lv.EyelashID === eyeid);
    });

    let eyelashimg = data.find((lv) => {
      return (lv.LV =
        2 &&
        lv.EyelashID === `${eyeid.substring(0, 4)}${eyelashid.substring(4)}`);
    });

    if (eyeimg && eyelashimg) {
      $("#img-eye")[0].src = eyeimg.Img;
      $("#img-eyelash")[0].src = eyelashimg.Img;
    }
  }
}
