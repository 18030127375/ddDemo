Page({
  data: {
    list: [{
      num: 1,
      text:'第一个'
    },{
      num: 2,
      text:'第二个'
    },{
      num: 3,
      text:'第三个'
    },{
      num: 4,
      text:'第四个'
    }]
  },
  onLoad() { },
  del(e) {
    this.$spliceData({
      list: [e.target.dataset.index, 1]
    })
  },
  onSubmit(e){
    console.log(e)
  }
});
