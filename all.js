//變數用小地蛇(捕獲DOM用id)(注意大小寫) /  函式小駝峰(動詞前)  / 類別大駝峰(名詞前)

//新增 (熟悉)
//哪裡使用 哪裡捕獲
const input_txt = document.querySelector("#input_txt");
const add_btn = document.querySelector("#add_btn");
//用let 會去改變值
let base_data = [];
add_btn.addEventListener("click", addTodo);
input_txt.addEventListener("keyup", (e) => {
  //Enter 要大寫
  if (e.key === "Enter") {
    addTodo();
  }
});
//可應用在 帳密登入
// localStorage.setItem("content", input_txt.value);
// input_txt_local = localStorage.getItem("content");
function addTodo() {
  //先存輸入值
  let obj = {
    content: input_txt.value,
    id: new Date().getTime() /**/,
    checked: "",
  };
  if (obj.content.trim() == "") {
    // alert("please fill in it !");
    Swal.fire({
      title: " Please fill in it ! ",
      icon: "warning",
      confirmButtonColor: "#1d4289",
    });
    return;
  } else {
    base_data.unshift(obj);
    localStorage.setItem("content", base_data);
    // base_data = localStorage.getItem("content");

    input_txt.value = "";
    //把外層的base_data傳入
    //重新渲染 > 改篩選後再渲染
    // renderList(base_data);
    filterList(); /**/
  }
}

//渲染
const inner_list = document.querySelector("#inner_list");
/** renderList(arr)*/
function renderList(base_data) {
  let str = "";
  base_data.forEach((i) => {
    /** */
    str += `<li data-id="${i.id}">
          <label class="checkbox" for="">
            <input type="checkbox" ${i.checked}/>
            <span>${i.content}</span>
          </label>
          <a href="#" class="delete" id="btn_del"></a>
     </li>`;
  });
  inner_list.innerHTML = str;
  // console.log(btn_del);
}

//刪除 / 打勾 (認識)
inner_list.addEventListener("click", (e) => {
  // console.log(parseInt(e.target.closest("li").dataset.id));
  //取出來的 id 會是字串型別記得幫它轉型成數字型別
  /***parseInt***/
  let todo_id = parseInt(e.target.closest("li").dataset.id); /*****記得先取id */
  /***contains("delete")***/
  /**或 e.target.classList.value === 'delete' */
  if (e.target.classList.contains("delete")) {
    //取消 a 標籤預設行為
    e.preventDefault();
    //如何選取span標籤的文字內容 並帶入alert???
    let del_content = e.target.closest("li").querySelector("span").textContent;
    // 不用加引號 直接用反引號 即可印出變數
    // let confirm_action = confirm(`Confirm delete "${del_content}" ? `);
    // if (confirm_action) {
    //   /** 或 篩出要刪的以外留著 base_data = base_data.filter((i => item.id !== todo_id); */
    //   let data_index = base_data.findIndex((item) => item.id === todo_id); /**/
    //   base_data.splice(data_index, 1);
    // } else {
    //   return;
    // }
    Swal.fire({
      title: " Are you sure ",
      text: ` Confirm delete "${del_content}" ? `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1d4289",
      cancelButtonColor: "#c9082a",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        base_data = base_data.filter((item) => item.id !== todo_id);
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        filterList();
      }
    });
  } else {
    base_data.forEach((item) => {
      if (item.id === todo_id) {
        if (item.checked === "") {
          item.checked = "checked";
        } else {
          item.checked = "";
        }
      }
    });
  }
  //重新渲染 > 改篩選後
  // render(todoData);
  filterList();
});

//換頁 (認識)
let tab_status = "all"; /*****記得先取 */
//事件參數e 監聽不用放
tab_list.addEventListener("click", changeTab);
/** */
function changeTab(e) {
  tab_status = e.target.dataset.tab;
  ////透過 querySelectorAll 選取 tab 標籤底下的 li
  let tabs_list = document.querySelectorAll("#tab_list li");
  tabs_list.forEach((item) => {
    if (item.dataset.tab === tab_status) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
    //以上也可透過forEach classList.remove 的方式先移除全部的 class active 樣式
    //再用當下有被點擊到的才加 class 樣式 e.target.classList.add("active");
  });
  //再篩選 並渲染
  filterList();
}

//篩選 (認識)
function filterList() {
  let filter_data = []; /**或 let filter_data;*/
  if (tab_status === "all") {
    filter_data = base_data;
  } else if (tab_status === "work") {
    filter_data = base_data.filter((item) => item.checked === "");
  } else {
    filter_data = base_data.filter((item) => item.checked === "checked");
  }
  //統計
  const work_num = document.querySelector("#work_num");
  //length 拼錯字
  /** */
  work_num.textContent = base_data.filter((item) => item.checked === "").length;
  //增刪的渲染 都在篩選後才用
  renderList(filter_data); /**/
}
//初始化頁面
//雖然初始頁籤在全部頁 但內容不一定
// filterList();

//刪除已完成 (熟悉)
//無捕獲也可以監聽???
// const del_done = document.querySelector('#del_done');
del_done.addEventListener("click", (e) => {
  e.preventDefault();
  let done_num = base_data.filter((item) => item.checked === "checked");
  if (done_num.length > 0) {
    // let confirm_action = confirm("Confirm delete of all done ? ");
    // if (confirm_action) {
    //   // 直接將原始資料 篩選後取代
    //   base_data = base_data.filter((item) => item.checked === "");
    //   // 再次篩選渲染 刪除完的
    //   /** */
    //   filterList(base_data);

    // Swal.fire({
    //   title: " Confirm delete of all done ? ",
    //   icon: "question",
    //   showCancelButton: true,
    //   confirmButtonColor: "#1d4289",
    //   cancelButtonColor: "#c9082a",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     base_data = base_data.filter((item) => item.checked === "");
    //     Swal.fire("Deleted!", "Your all done has been deleted.", "success");
    //     filterList();
    //   } else {
    //     return;
    //   }
    // });
    // 需使用async() + await 不然會報錯
    (async () => {
      const { value: txt } = await Swal.fire({
        title: "Input delete validation",
        input: "text",
        inputPlaceholder: "Input delete",
        showCancelButton: true,
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value === "delete") {
              resolve();
            } else {
              resolve("You need to input delete :)");
            }
          });
        },
      });
      if (txt) {
        base_data = base_data.filter((item) => item.checked === "");
        filterList();
        Swal.fire("Your all done has been deleted.");
      }
    })();
    //
  } else {
    // alert("The done was empty. ");
    Swal.fire({
      title: "The done was empty.",
      icon: "info",
    });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////
//登入註冊相關
const change_a = document.querySelector("form+a");
const submitBTN = document.querySelector(".login button");
const form = document.querySelector("form");
//密碼確認
const PWD = document.querySelector("#PWD");
const PWDAgain = document.querySelector("#PWDAgain");
let sitePath = window.location.pathname;
const inputs = document.querySelectorAll("input");
//登出相關
const logoutBTN = document.querySelector("header button");
//API相關
let domain = "https://todoo.5xcamp.us";
let url = "";
let APIData = {};
let listData = [];
let tabStatus = "all";
//新增資料用
const addBTN = document.querySelector(".inputArea button");
const addInput = document.querySelector(".inputArea input");
//單筆資料更新(切換狀態/編輯修改/刪除)
const listContent = document.querySelector(".listContent .list");

//刪除全部用
const deleteAllBTN = document.querySelector(".listFooter button");
//切換tab(全部/待完成/已完成)用
const tabArea = document.querySelector(".listArea .tab");
function logout() {
  url = `${domain}/users/sign_out`;
  axios
    .delete(url, {
      //透過localStorage使用getItem將存在瀏覽器的資料取出
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      // console.log(res);
      Swal.fire({
        icon: "success",
        title: res.data.message,
      }).then(() => {
        //將storage 中的所有屬性移除。
        localStorage.clear();
        window.location = "./index.html";
      });
    })
    .catch((error) => {
      // console.log(error);
      // response.data.error沒有設定資料 為false，所以reason ="" 會等於空字串
      // console.log('data.message ',error.response.data.message);
      // console.log('reason ',reason);
      let reason = error.response.data.error ? error.response.data.error : "";
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        text: reason,
      });
    });
}
