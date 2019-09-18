import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { getTabFromDefinedTabList } from '@/utils/utils';
import { addTabAction } from '@/actions/operateTab';
class Device extends Component {

  to404Page = () => {
    const { addTab } = this.props;
    let tab = getTabFromDefinedTabList('/home/group');
    addTab({
      ...tab
    });
  }

  toDetailPage = () => {
    const { addTab } = this.props;
    let tab = getTabFromDefinedTabList('/home/devicedetail');
    addTab({
      ...tab,
      path: `/home/devicedetail?id=${Math.random(100)}`
    });
  }


  render() {
    return (
      <div>
        <p> Analysis</p>
        <Button onClick={this.to404Page}> 跳转404页面 </Button><br /><br />
        <Button onClick={this.toDetailPage}> 跳转至URL参数不同的Detail页面 </Button>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTab: (values) => {
      dispatch(addTabAction(values))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Device);
