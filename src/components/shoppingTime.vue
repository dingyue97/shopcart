<template>
  <div>
    <div
      style="font-size: 65px; color: #000000; font-weight: 700; margin-top: 20%"
    >
      {{ hou }}小时{{ min }}分钟{{ sec }}秒{{ ssec }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hou: 0,
      min: 0,
      sec: 0,
      ssec: 0,
      endTime: "",
      disprArr: [],
      Times: [],
      dateTime: [
        { createTime: "2020-12-10 15:11:38", 
        endTime: "2020-12-10 21:11:38" },
        {
          createTime: "2020-12-09 14:31:28",
          endTime: "2020-12-10 20:31:28",
        },
        {
          createTime: "2020-12-09 13:38:25",
          endTime: "2020-12-10 19:38:25",
        },
      ],
    };
  },
  created() {
    this.time();
  },
  methods: {
    time() {
      let that = this;
      for (let i = 0; i < that.dateTime.length; i++) {
        that.Times.push(that.dateTime[i].endTime);
      }
              console.log(that.Times);
      let interval = setInterval(function timestampToTime() {
        let date = new Date(that.dateTime[0].endTime) - new Date();
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          that.ssec =
            parseInt(((date % (60 * 60 * 24)) % 3600) / 60)< 10
              ? "0" + (parseInt(((date % (60 * 60 * 24)) % 3600) / 60) )
              : parseInt(((date % (60 * 60 * 24)) % 3600) / 60) ;
        } else {
          //活动已结束，全部设置为'00'
          // console.log("aaa")
          (that.day = "00"),
            (that.hou = "00"),
            (that.min = "00"),
            (that.sec = "00");
        }
        //new Date当前的时间戳，也可以换成自定义的时间戳
      }, 100);
    },
  },
};
</script>
<style >
</style>