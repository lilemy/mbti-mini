import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";

/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <View className="at-article__h2 subTitle">
        只需 2 分钟，就能描述出你的性格特点。
      </View>
      <AtButton
        className="enterBtn"
        type="primary"
        circle
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        开始测试
      </AtButton>
      <GlobalFooter />
    </View>
  );
};
