import SButton from "./Button/button";
import './index.css'
import Form from './FormSystem/component/Form'
import FormItem from './FormSystem/component/FormItem'
import Input from './FormSystem/component/Input'
import Select from './FormSystem/component/Select'
import AsyncComponent from './AsyncComponent/asyncComponent'
import AsyncDemo from './AsyncComponent/asyncDemo'
import {
    KeepaliveItem,
    KeepaliveScope,
    useCacheDestroy
  } from "./KeepAlive/index";

Form.FormItem = FormItem

export {
    Form,
    Select,
    Input,
    FormItem,
    SButton,
    AsyncComponent,
    AsyncDemo,
    KeepaliveItem,
    KeepaliveScope,
    useCacheDestroy
}

