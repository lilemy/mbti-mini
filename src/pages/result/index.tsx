import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入

import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
import { getBestQuestionResult } from "../../../utils/bizUtils";

/**
 * 结果页面
 */
export default () => {
  // 获取结果
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "请先答题",
      icon: "error",
      duration: 3000,
    });
  }
  // 计算结果
  const result = getBestQuestionResult(answerList, questions, questionResults);
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <GlobalFooter />
    </View>
  );
};
