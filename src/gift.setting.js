
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '付念念小宝贝的专属',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: ' hi 付念念同学', },
    { key: 's', wording: '这次的礼物，换个形式给你', },
    { key: 'd', wording: '然后，往下滑，选择权交给你', },
  ],
  // 最终解释权归属人
  owner: '房鹏',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '口红两支套装', alias: '双倍快乐', image: '/images/1.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'w', name: '6个月家务活套餐', alias: '家务活', image: '/images/2.png',  description: '“即日起为你承包六个月的全部家务活套餐”' },
  { key: 'e', name: '雅诗兰黛 第七代小棕瓶精华', alias: '小棕瓶精华', image: '/images/3.png',  description: '「维护加速度，年轻新维度」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '周六福 福星兔', alias: '黄金', image: '/images/5.png',  description: '「或者其它等价金饰，现在金价略贵呀」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'UR购物券：¥1,000', alias: 'UR', image: '/images/7.png',  description: '“UR！买！”' },
  { key: 'i', name: '2023年洗发会员卡', alias: '洗发', image: '/images/8.png',  description: '「不同造型需求，全面满足，全部免费」' },
];
