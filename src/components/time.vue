<template>
  <div>
    <div
      style="font-size: 65px; color: #000000; font-weight: 700; margin-top: 20%"
    >
      {{ hour }}:{{ minute }}:{{ second }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hour: 6,
      minutes: 0,
      seconds: 0,
      createTimes: [],
      endTimes:[],
      dateTime: [
        { createTime: "2020-12-08 15:11:38", endTime: "2020-12-08 21:11:38" },
        {
          createTime: "2020-12-08 14:31:28",
          endTime: "2020-12-08 20:31:28",
        },
        {
          createTime: "2020-12-08 13:38:25",
          endTime: "2020-12-08 19:38:25",
        },
      ],
    };
  },
  mounted() {
    this.add();
    this.timer();
  },
  watch: {
    hour: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    second: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  computed: {
    hour: function () {
      return this.num(this.hours);
    },
    second: function () {
      return this.num(this.seconds);
    },
    minute: function () {
      return this.num(this.minutes);
    },
  },
  methods: {
    num: function (n) {
      return n < 10 ? "0" + n : "" + n;
    },
    timer() {
      this.createTimes.push(
        this.dateTime.map((item) => {
          return item.createTime;
        })
      );
      this.endTimes.push(this.dateTime.map((item)=>{
          return item.endTime;
      }))
    },
    add() {
      var _this = this;
      var time = window.setInterval(function () {
        if (_this.seconds === 0 && _this.minutes == 0 && _this.hours != 0) {
          _this.seconds = 59;
          _this.minutes = 59;
          _this.hours -= 1;
        } else if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (
          _this.minutes === 0 &&
          _this.seconds === 0 &&
          _this.hours == 0
        ) {
          _this.seconds = 0;
          _this.minutes = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
  },
};
</script>
<style >
</style>