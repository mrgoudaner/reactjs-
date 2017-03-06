import React from 'react';
import MHeader from './m_header';
import MFooter from './m_footer';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
export default class MIndex extends React.Component {
    render() {
        return (
            <div>
                <MHeader></MHeader>
                <Tabs>
                    <TabPane tab="头条" key="1">qwe</TabPane>
                    <TabPane tab="社会" key="2">qwe</TabPane>
                    <TabPane tab="国内" key="3">qwe</TabPane>
                    <TabPane tab="国际" key="4">qwe</TabPane>
                    <TabPane tab="娱乐" key="5">qwe</TabPane>
                </Tabs>
                <MFooter></MFooter>
            </div>
        )
    }
}
