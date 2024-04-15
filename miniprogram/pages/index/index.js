// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  onLoad() {
    wx.login({
      success: function (res) {
          if (res.code) {
              //发起网络请求
              console.log(111, res.code)
          } else {
              console.log('获取用户登录态失败！' + res.errMsg)
          }
      }
  });
  },
go() {
  wx.request({
    url: 'https://test.erlou.love/',
    method: 'get',
    complete(e) {
      console.log(3,e)
    }
  })
},
getPhoneNumber: function(e) {

  console.log(e.detail) 
  console.log(e.detail.iv) 
  console.log(e.detail.encryptedData) 
  if (e.detail.errMsg == 'getPhoneNumber:fail user deny'){
    wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',
        success: function (res) { }
    })
  } else {
    wx.showModal({
        title: '提示',
        showCancel: false,
        content: '同意授权',
        success: function (res) { }
    })
  }
},
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
