/**
 * Created by guangqiang on 2017/10/12.
 */
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from 'react-native'
import {connect} from 'react-redux'
import Action from '../../../actions'
import {BaseComponent} from '../../base/baseComponent'
import {commonStyle} from '../../../utils/commonStyle'
import {Actions} from 'react-native-router-flux'
const data = [
  {
    key: 'testAntdMobile',
    scene: 'antd-mobile'
  },
  {
    key: 'blur',
    scene: 'TestBlurComponent'
  },
  {
    key: 'imgZoom',
    scene: 'TestImageZoomComponent'
  },
  {
    key: 'testMessageBar',
    scene: 'TestMessageBar'
  },
  {
    key: 'testOrientation',
    scene: 'TestOrientation'
  },
  {
    key: 'loading',
    scene: 'Loading'
  },
  {
    key: 'launch',
    scene: 'ReactNativeRouterFluxDemo'
  },
  {
    key: 'testScrollableTabView',
    scene: 'scrollable-tab-view'
  },
  {
    key: 'SwiperComp',
    scene: 'TestSwiperComponent'
  },
  {
    key: 'testIcon',
    scene: 'TestIcon'
  },
  {
    key: 'testViewPager',
    scene: 'viewPager'
  },
  {
    key: 'enhancedListView',
    scene: 'EnhancedListViewDemo'
  },
  {
    key: 'webView',
    scene: 'WebView'
  },

  {
    key: 'network',
    scene: 'Network'
  },
  {
    key: 'testLogDot',
    scene: '日志埋点'
  },
  {
    key: 'testRedux',
    scene: 'TestRedux'
  },
  {
    key: 'customComp',
    scene: '包装原生组件'
  }
]

class Me extends BaseComponent {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !==r2 })
    }
  }

  navigationBarProps() {
    return {
      title: '我的',
      hiddenLeftItem: true,
      rightTitle: '个人'
    }
  }

  onRightPress() {
    return Actions.author()
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <TouchableOpacity
        style={styles.cellStyle}
        onPress={() => Actions[rowData.key]()}
      >
        <Text style={{flex: 1, textAlign: commonStyle.center}}>{rowData.scene}</Text>
        <Image style={{width: 20, height: 20}} source={require('../../../assets/images/forward.png')}/>
      </TouchableOpacity>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerStyle}>
        <Text>项目中使用到的功能集合</Text>
      </View>
    )
  }

  _render() {
    const dataSource = this.state.dataSource.cloneWithRows(data)
    return (
      <View style={styles.container}>
        <ListView
          style={{flex: 1}}
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.bgColor,
  },
  cellStyle: {
    justifyContent: commonStyle.center,
    alignItems: commonStyle.center,
    flexDirection: 'row',
    backgroundColor: commonStyle.white,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  headerStyle: {
    height: 40,
    alignItems: commonStyle.center,
    justifyContent: commonStyle.center,
    backgroundColor: commonStyle.bgColor,
  }
})

const _Me = connect(
  state => state.me.me,
  Action.dispatch('me')
)(Me)

export default _Me