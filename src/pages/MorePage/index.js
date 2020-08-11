import React, { Component } from 'react';
import { connect } from 'umi';

class MorePage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  clickHandle = () => {
    this.props.dispatch({
      type: 'more/getProductList',
      payload: {
        name: 'A',
        property: 'B',
      },
    });
  };

  render() {
    return (
      <div>
        <button type={'button'} onClick={this.clickHandle}>
          获取
        </button>
        <p>名字：{this.props.more.name}</p>
        <p>属性：{this.props.more.property}</p>
      </div>
    );
  }
}

export default connect(({ more }) => ({ more }))(MorePage);
