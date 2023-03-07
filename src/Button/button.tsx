import React, { Component } from "react";
import Icon from "../Icon";

type ISize = "small" | "medium" | "large";
type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "white";
type IIcon =
  | ""
  | "juzhongduiqi"
  | "zuuoduiqi"
  | "yiwen"
  | "xuanzewendnag"
  | "youduiqi"
  | "xunhuan"
  | "binaji"
  | "xiugai"
  | "xinhao"
  | "xiaoxi"
  | "xiazai2"
  | "tianjiawenjian"
  | "tianjiawendang"
  | "tianjia2"
  | "tianjia1"
  | "tixing"
  | "tishi"
  | "suoxiao"
  | "zhichuhetong";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined ;
  color?: IColor;
  icon?: IIcon;
  size?: ISize;
  round?: false | true;
  plain?: false | true;
  children?: string;
}

const SButton: React.FunctionComponent<ButtonProps> = (props) => {
  const sizeOptions: Record<string, Record<string, string>> = {
    small: {
      x: "1",
      y: "1",
      text: "sm",
    },
    medium: {
      x: "1.5",
      y: "2",
      text: "base",
    },
    large: {
      x: "2",
      y: "3",
      text: "lg",
    },
  };
  return (
    <button
      onChange={props.onChange}
      onClick={props.onClick}
      className={`
      mx-1
      ${
        props.size
          ? `px-${sizeOptions[props.size].y} py-${
              sizeOptions[props.size].x
            } text-${sizeOptions[props.size].text}`
          : ""
      }
      ${props.round ? "rounded-full" : "rounded-lg"}
      bg-${props.color}-${props.plain ? "100" : "500"}
      ${
        props.plain
          ? `border-2 border-${props.color}-400 hover:bg-white-200 hover:text-${props.color} text-${props.color}-500 border-solid`
          : `hover:bg-${props.color}-400 hover:text-white text-white`
      }
      cursor-pointer transition duration-300 ease-in-out transform hover:scale-105
    `}
    >
      {props.children ? props.children : ""}
      {props.icon!="" ? (
        <Icon
          iconName={props.icon}
          customClassName="p-1"
          onIconClick={() => {
            console.log("onClick 1");
          }}
        />
      ) : (
        ""
      )}
    </button>
  );
};

SButton.defaultProps = {
  color: "white",
  icon: "",
  size: "medium",
  round: false,
  plain: false,
};
export default SButton;
