let deltem = [];
const deleupdate = () => {
  if (localStorage.getItem("Deletedata") === null) {
    localStorage.setItem("Deletedata", JSON.stringify(deltem));
  } else {
    dete = localStorage.getItem("Deletedata");
    deltem = JSON.parse(dete);
    localStorage.setItem("Deletedata", JSON.stringify(deltem));
  }
  let data = "";
  deltem.forEach((element, index) => {
    data += `
    <tr>
    <td>${index + 1}</td>
    <td>${element[0]}</td>
    <td>
    <input type="button" id="del" value="X"  onclick=(delcomplitetask(${index})) ></input>
    </td>
    </tr> 
    `;
    document.getElementById("deleentry").innerHTML = data;
  });
  console.log("deleupdate");
};
deleupdate();

const getupdate = () => {
  if (localStorage.getItem("TODO") === null) {
    if (!(Text === " ")) {
      info = [];
      localStorage.setItem("TODO", JSON.stringify(info));
    }
  } else {
    if (!(Text === "")) {
      infostr = localStorage.getItem("TODO");
      info = JSON.parse(infostr);
      localStorage.setItem("TODO", JSON.stringify(info));
    }
  }
  str = "";
  info.forEach((element, index) => {
    str += `
  <tr>
    <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>
          <input type="button" id="del" value="☑" onclick=(del(${index}))></input>
        </td>
      </tr>
  `;
  });
  document.getElementById("entry").innerHTML = str;
  console.log("update call");
};
getupdate();


const update = () => {
  Text = document.getElementById("task").value;
  if (localStorage.getItem("TODO") === null) {
    info = [];
    if (!(Text === " ")) {
      info.push([Text]);
      localStorage.setItem("TODO", JSON.stringify(info));
    }
  } else {
    if (!(Text === "")) {
      infostr = localStorage.getItem("TODO");
      info = JSON.parse(infostr);
      info.push([Text]);
      localStorage.setItem("TODO", JSON.stringify(info));
    }
  }
  getupdate();
  deleupdate();
};


const del = (idx) => {
  let deltem = [];
  console.log("delete call", idx);
  delitem = localStorage.getItem("TODO");
  item = JSON.parse(delitem);
  if (localStorage.getItem("Deletedata") === null) {
    deltem.push([item[idx]]);
    localStorage.setItem("Deletedata", JSON.stringify(deltem));
  } else {
    deta = localStorage.getItem("Deletedata");
    deltem = JSON.parse(deta);
    deltem.push([item[idx]]);
    localStorage.setItem("Deletedata", JSON.stringify(deltem));
  }
  item.splice(idx, 1);
  deleupdate();
  localStorage.setItem("TODO", JSON.stringify(item));
  getupdate();
};
const delcomplitetask = (index) => {
  if (localStorage.getItem("Deletedata") === null) {
    let arr = [];
    localStorage.setItem("Deletedata", JSON.stringify(arr));
    console.log("null");
  } else {
    datastr = localStorage.getItem("Deletedata");
    arr = JSON.parse(datastr);
    console.log("present");
    arr.splice(index, 1);
    localStorage.setItem("Deletedata", JSON.stringify(arr));
    console.log("delecomplited call ",arr)
  }
  deleupdate();
};

reset.addEventListener("click", () => {
  if (confirm("U really want to clear all entries ? ") === true) {
    localStorage.clear();
    getupdate();
    localStorage.clear();
    deleupdate();
  }
});
