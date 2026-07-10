import {
  CaptureIllustration,
  ReliveIllustration,
  StoryIllustration,
} from "../screens/illustrations/index";

import { WelcomeSlideData } from "../screens/welcome/types";

export const slides: WelcomeSlideData[] = [

  {
    id: 1,

    title: "Capture Every Moment",

    description:
      "Save photos, videos and locations from your most meaningful experiences.",

    illustration: CaptureIllustration,
  },

  {
    id: 2,

    title: "Relive Beautiful Memories",

    description:
      "Revisit your favorite moments anytime with an elegant timeline of your life.",

    illustration: ReliveIllustration,
  },

  {
    id: 3,

    title: "Build Your Story",

    description:
      "Turn every memory into a timeless story you'll always cherish.",

    illustration: StoryIllustration,
  },

];