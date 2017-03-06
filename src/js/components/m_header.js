import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane =Tabs.TabPane;

class MHeader extends React.Component {
  constructor() {
      super();
      this.state = {
          current: 'top',
          modalVisible: false,
          action: 'login',
          hasLogined: false,
          userNickName: '',
          userId: 0
      }
  }
  setModalVisible(value){
    this.setState({modalVisible:value});
  }
  handleClick(e){
    if(e.key=="register"){
      this.setState({current:'register'});
      this.setModalVisible(true);
    }else {
      {
        this.setState({current:e.key});
      }
    }
  }
  handleSubmit(e){
      e.preventDefault();
      var myFetchOptions = {
        method:"GET"
      }
      var formData=this.props.form.getFieldsValue();
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
  + "&username="+formData.userName+"&password="+formData.password
  +"&r_userName=" + formData.r_userName + "&r_password="
  + formData.r_password + "&r_confirmPassword="
  + formData.r_confirmPassword, myFetchOptions)
  .then(response=>response.json())
  .then(json=>{
    this.setState(userNickName:json.NickUserName,userId:json.UserId)

  })
  message.success("请求成功");
  this.setModalVisible(false);
  }
  login(){
    this.setModalVisible(true);
  }
  render(){
    let {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined ?
    <Link>
      <Icon type="inbox"/>
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)}/>;
    return(
        <div id="mobileheader">
          <header>
            <img src="./src/images/logo.png" ale="logo"/>
            <span>news</span>
            {userShow}
          </header>
          <Modal title="用户中心" wrapClassName="vertiacal=center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} onText = "关闭">
            <Tabs type="card">
            <TabPane tab="注册" key="2">
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  <Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
                </FormItem>
                <FormItem label="密码">
                  <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
                </FormItem>
                <FormItem label="确认密码">
                  <Input type="password" placeholder="请再次输入密码" {...getFieldDecorator('r_password')}/>
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
          </Modal>
        </div>
    )
  }
}
export default MHeader = Form.create({})(MHeader)
