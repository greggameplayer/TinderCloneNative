import Frame1 from "./screens/Frame1";
import Frame2 from "./screens/Frame2";
import FramePhone from "./screens/framePhone";
import Frame4 from "./screens/Frame4";
import Frame5 from "./screens/Frame5";
import Frame6 from "./screens/Frame6";
import Frame7 from "./screens/Frame7";
import Frame8 from "./screens/Frame8";
import Frame9 from "./screens/Frame9";
import FrameRegistration from "./screens/frameRegistration";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TopTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export const SignUpScreens = {
  Frame1: Frame1,
  Frame2: Frame2,
  FramePhone : FramePhone,
  Frame4: Frame4,
  Frame5: Frame5,
  Frame6: Frame6,
  Frame7: Frame7,
  Frame8: Frame8,
  Frame9: Frame9,
  FrameRegistration : FrameRegistration,

}

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};
