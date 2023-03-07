import React,{ ReactElement } from "react";
import '../../public/iconfont/iconfont.css'

interface iconProps{
    iconName:string | undefined;
    customClassName?:string;
    onIconClick?:()=>void;
}

function Icon(props:iconProps):ReactElement {
    const {iconName,customClassName,onIconClick}=props;

    const handleIcon=()=> onIconClick?.();

    return (
        <span className={customClassName}>
            <i className={`iconfont icon-${iconName}`} onClick={handleIcon}></i>
        </span>
    );
}

export default Icon;