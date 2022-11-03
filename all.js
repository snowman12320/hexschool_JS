// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
let base_data = [];
//當下資料庫
let now_data = [];

function getData() {
  axios.get(url).then(function (response) {
    ////不用重組物件 不用push 直接用=
    base_data = response.data;
    //迴圈出item才有值
    // console.log(base_data.上價);
    now_data = base_data;
    renderData(base_data);
  });
}
getData();

//渲染
function renderData(showData) {
  let str = "";
  showData.forEach((item) => {
    str += `<tr>
        <td>${item.作物名稱}</td>
        <td>${item.上價}</td>
        <td>${item.中價}</td>
        <td>${item.下價}</td>
        <td>${item.平均價}</td>
        <td>${item.交易量}</td>
        </tr>`;
  });
  let show_list = document.querySelector("#show_list");
  show_list.innerHTML = str;
}

//換頁
const buttonGroup = document.querySelector(".button-group");
buttonGroup.addEventListener("click", (e) => {
  //透過底下判斷式，確認點擊到的是否為 BUTTON
  // 也可以用tagName
  // console.log(e.target.nodeName);
  if (e.target.nodeName === "BUTTON") {
    //變數命名 注意不能重複
    //記得用querySelectorAll 有All
    const tabs = document.querySelectorAll(".button-group button");
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    // 已不須判斷 直接加上
    e.target.classList.add("active");
    //請取出埋藏於 HTML button 上的 data-type 屬性值
    //將該值賦予到 type 變數上
    let type = e.target.dataset.type;
    let filter_data = [];
    // 切換篩選種類時，可以將 crop_input.value 清空。
    crop_input.value = "";

    ////極簡寫法
    filter_data = base_data.filter((item) => item.種類代碼 === type);
    // or
    // filter_Data = base_data.filter((item) => item.種類代碼.match(type));

    ////另兩種寫法
    // 第一種
    // if (type === 'N04') {
    // filterData = data.filter((item) => item.種類代碼 === type);
    // 第二種 邏輯包起來
    // changeType(type);
    // } else if (e.target.dataset.type === 'N05') {
    // filterData = data.filter((item) => item.種類代碼 === 'N05');
    // changeType(type);
    // } else if (e.target.dataset.type === 'N06') {
    // filterData = data.filter((item) => item.種類代碼 === 'N06');
    // changeType(type);
    // }
    //呼叫 renderData 並傳入參數 filterData
    ////判斷式若用邏輯包渲染 就不用再渲染 不然會空值
    now_data = filter_data;
    renderData(filter_data);
  }
});
////同樣邏輯包成函式
// function changeType(type){
//     //函式雖在判斷式內 但讀不到 需重新定義並傳入 >>> 後來發現也不需要@@
//     // let filterData = [];
//     filterData = data.filter((item) => item.種類代碼 === type);
//     renderData(filterData);
// };

//搜尋
let search_data = [];
const search = document.querySelector("#search");
search.addEventListener("click", searchData);
const crop_input = document.querySelector("#crop");
crop_input.addEventListener("keyup", (e) => {
  // console.log(e.key);
  if (e.key === "Enter") {
    searchData(e);
  }
});
function searchData(e) {
  if (e.target.nodeName === "BUTTON" || e.target.nodeName === "INPUT") {
    //刪除篩選的記號
    const tabs = document.querySelectorAll(".button-group button");
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    //記得加value取值
    if (crop_input.value.trim() == "") {
      alert("請輸入作物名稱 !");
      return;
    } else {
      let crop_input_value = crop_input.value;
      //item記得選要用什麼key比對
      search_data = base_data.filter((item) =>
        item.作物名稱.match(crop_input_value)
      );
      let search_data_length = search_data.length;
      if (search_data_length === 0) {
        // const show_list = document.querySelector("#show_list");
        show_list.innerHTML =
          '<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>';
      } else {
        //紀錄當下使用此資料
        now_data = search_data;
        renderData(search_data);
      }
    }
  }
}

//品項排序
const sort_select = document.querySelector("#sort_select");
sort_select.addEventListener("change", (e) => {
  //用於選項少比對
  switch (e.target.value) {
    case "依上價排序":
      selectChange("上價");
      //記得每個 case 後方需透過 break; 終止
      break;
    case "依中價排序":
      selectChange("中價");
      break;
    case "依下價排序":
      selectChange("下價");
      break;
    case "依平均價排序":
      selectChange("平均價");
      break;
    case "依交易量排序":
      selectChange("交易量");
      break;
  }
});

//篩選或搜尋時 執行此排序函式
function selectChange(value) {
  //帶入 compareFunction 函式，並於函式內帶入 a 、 b 兩參數
  now_data.sort(function (a, b) {
    return a[value] - b[value];
  });
  renderData(now_data);
}

//大小排序
////要選取按鈕父層再逐一比對是否為<i> 才能每個按鈕都有效果 (<thead class="js-sort-advanced">)
const sort_btn = document.querySelector(".js-sort-advanced");
sort_btn.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    //將點擊時取出埋藏於 i 標籤的 data-price 值
    //取點擊的選項名稱 如:上價
    let sortPrice = e.target.dataset.price;
    //將點擊時取出埋藏於 i 標籤的 data-sort 值
    //取點擊的排序 如:up
    let sortCaret = e.target.dataset.sort;
    if (sortCaret === "up") {
      //取出a和b的sortPrice的值 並以b-a排序(大到小)
      now_data.sort((a, b) => b[sortPrice] - a[sortPrice]);
    } else {
      now_data.sort((a, b) => a[sortPrice] - b[sortPrice]);
    }
    renderData(now_data);
  }
});
