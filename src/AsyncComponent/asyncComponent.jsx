import React, { Component } from "react";
/**
 * 
 * @param {*} Component  需要异步数据的component 
 * @param {*} api        请求数据接口,返回Promise，可以再then中获取与后端交互的数据
 * @returns 
 */
function AysncComponent(Component,api){
    const AysncComponentPromise = () => new Promise(async (resolve)=>{
          const data = await api()
          resolve({
              default: (props) => <Component rdata={data} { ...props}  />
          })
    })
    return React.lazy(AysncComponentPromise)
}
export default AysncComponent