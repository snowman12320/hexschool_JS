//刪除已完成 (熟悉)
//無捕獲也可以監聽
// const del_done = document.querySelector('#del_done');

// 這邊本來不是函式 為了匯出故意打包成一個函式 
export function delDone() {
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
}
