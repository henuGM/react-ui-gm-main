import React from "react";
import ReactDOM from "react-dom/client";
import SButton from "./Button/button";
// import "./index.css";
import '../public/iconfont/iconfont.css'
import FormDemo from "./FormSystem/index"
import AsyncDemo from "./AsyncComponent/asyncDemo";
import Index from "./KeepAlive/demo";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div> */}
      <Index></Index>
    {/* <AsyncDemo></AsyncDemo>
      <SButton color="blue"  plain>
        蓝色按钮
      </SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="green" round>
        灰色按钮
      </SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
    <div>
      <SButton icon="xunhuan" plain ></SButton>
      <SButton color="green"  icon="tishi"></SButton>
      <SButton color="gray"  icon="xiaoxi"></SButton>
      <SButton color="yellow"  plain icon="tishi"></SButton>
      <SButton color="red" round plain icon="tianjia2"></SButton>
    </div>
    <FormDemo></FormDemo> */}
  </React.StrictMode>
);
