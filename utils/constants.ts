import { PORTFOLIO_ROUTES } from '../components/StaticInfo/ProjectItems';

export enum InputTypes {
  BUTTONS_PAGE = 'buttonsPage',
  BUTTON = 'button',
  FIELDS_PAGE = 'fieldsPage',
  LABEL = 'label',
  FILE_INPUT = 'fileInput',
}

export enum SimpleImages {
  ARROW = '/icons/Arrow.svg',
  LONG_ARROW = '/icons/LongArrowToRight.svg',
  BACK_ARRORW = './icons/ServicesBackArrow.svg',
  ATTACH = '/icons/Attach.svg',
  CLOSE = '/icons/Close.svg',
  SHORT_GREY_ARROW = '/icons/short-grey-arrow.svg',
}

export enum WhatWeDoImages {
  MOBILE_WOW = '/icons/MobileWow_2.svg',
}

export enum AchievementsImages {
  ACHIEVEMENTS_MAIN_ARROW = 'icons/AchievementsMainArrow.svg',
  ACHIEVEMENTS_ARROW_RED = '/icons/AchievementsArrowRed.svg',
  ACHIEVEMENTS_ARROW = '/icons/AchievementsArrow.svg',
}

export enum PortfolioSliderImages {
  SLIDER_CIRCLE = '/sliderCircle/SliderCircle.svg',
  ONFIRE_IMG = '/img/sliderImg/OnFireSlide.webp',
  GOHEJA_IMG = '/img/sliderImg/GoHejaSlide.png',
  TRUEVO_IMG = '/img/sliderImg/NdPaySlide.png',
  BEAT_THE_MARKET_IMG_WEB = '/img/sliderImg/BeatTheMarketSlideWeb.png',
  BEAT_THE_MARKET_IMG_MOB = '/img/sliderImg/BeatTheMarketSlideMob.png',
  CRED_WALLET_IMG = '/img/sliderImg/CredWalletSlide.png',
  TIMEON_IMG = '/img/sliderImg/TimeOnSlide.webp',
  CAIDR_IMG = '/img/sliderImg/CaidrSlide.png',
  STRATTYX_IMG = '/img/sliderImg/StrattyXSlide.png',
  LOOP = '/img/sliderImg/LoopSlide.png',
  NEWTON = '/img/sliderImg/NewtonSlide.png',
  KEYRI = '/img/sliderImg/slider-keyri.png',
  PANDA = '/img/sliderImg/slider-panda.png',
  CRED_WALLET = '/img/sliderImg/slider-cred_wallet.png',
  PICKLES = '/img/sliderImg/slider-pickles.png',
  STRATTYX = '/img/sliderImg/slider-strattyx.png',
}

export const CLIENTS_ITEMS = [
  {
    image: '/logo/KeyriLogo.svg',
    route: PORTFOLIO_ROUTES.keyri,
  },

  {
    image: '/logo/MirLogo.svg',
    route: PORTFOLIO_ROUTES['cred-wallet'],
  },

  {
    image: '/logo/GoogleLogo.svg',
    route: PORTFOLIO_ROUTES.newton,
  },

  {
    image: '/logo/LoopLogo.svg',
    route: PORTFOLIO_ROUTES.loop,
  },

  {
    image: '/logo/master-health-logo.svg',
  },

  {
    image: '/logo/truevo-logo.svg',
    route: PORTFOLIO_ROUTES.truevo,
  },
];

export enum OurTeamImages {
  GREY_BG = '/img/OurTeamGreyBG.png',
  RED_BG = '/img/OurTeamRedBG.png',
  TEAM_PHOTO = '/img/OurTeamMainPage.png',
}

export enum OurTeamPhotos {
  ARTEM = '/ourTeam/artem.jpg',
  DENYS = '/ourTeam/denys.jpg',
  KATE = '/ourTeam/kate.jpg',
  LISA = '/ourTeam/lisa.jpg',
  MARIA = '/ourTeam/maria.jpg',
  RUSLAN = '/ourTeam/ruslan.jpg',
  SASHA = '/ourTeam/oleksandra.jpg',
  VIKA = '/ourTeam/victoria.jpg',
  DENYS_2 = '/ourTeam/denys2.jpg',
}

export enum FeedbackImages {
  GREY_STAR = 'icons/FeedbackGreyStar.svg',
  YELLOW_STAR = 'icons/FeedbackYellowStar.svg',
  AVATAR_PLACEHOLDER = 'img/FeedbackAvatar.png',
  FEEDBACK_ARROW = 'icons/FeedbackArrow.svg',
}

export enum FeedbackFoto {
  FLORIAN = 'img/FeedbackFoto/Florian.jpg',
  HANNIGAN = 'img/FeedbackFoto/Hannigan.jpg',
  PODBREZSKY = 'img/FeedbackFoto/Podbrezsky.jpg',
  SAGIV = 'img/FeedbackFoto/Sagiv.jpg',
  TOMIWA = 'img/FeedbackFoto/Tomiwa.jpg',
  TOSQUES = 'img/FeedbackFoto/Tosques.jpg',
  WASHINGTON = 'img/FeedbackFoto/Washington.jpg',
  ZEIN = 'img/FeedbackFoto/Zein.jpg',
}

export enum HeaderImages {
  WHITE_LOGO = '/logo/IvorysoftLogoWhite.svg',
  BLACK_LOGO = '/logo/IvorysoftLogo.svg',
  OPENED_BURGER = '/icons/OpenedBurger.svg',
  BURGER = '/icons/BurgerIcon.svg',
  BURGER_WHITE = '/icons/BurgerIconWhite.svg',
  OPENED_LIGHT_BURGER = '/icons/OpenedBurgerGrey.svg',
  NAVBAR_ACTIVE_VECTOR = '/icons/NavbarActiveVector.svg',
  NAVBAR_ACTIVE_VECTOR_ORANGE = '/icons/NavbarActiveOrangeVector.svg',
  NAVBAR_VECTOR = '/icons/NavbarVector.svg',
  TRIANGLE_VECTOR = '/icons/TriangleVector.svg',
  BACK_BUTTON_ICON = '/icons/BackButtonIcon.svg',
  BACK_BUTTON_ARROW_ICON = '/icons/BackArrowButtonIcon.svg',
}

export enum BlogImages {
  CHECKBOX = '/icons/CheckboxIcon.svg',
  CHECKED_CHECKBOX = '/icons/CheckedCkeckbox.svg',
  UKRAINE_HEART = '/icons/UkraineHeart.svg',
}

export enum ContactUsImages {
  CLIP = '/icons/contactClip.svg',
  CLIP_ACTIVE = '/icons/contactClipActive.svg',
}

export enum SocialNetworksImages {
  LINKEDIN = '/socialNetwork/LinkedWhite.svg',
  INSTAGRAM = '/socialNetwork/instagramWhite.svg',
  CLUTCH = '/socialNetwork/ClutchWhite.svg',
  UPWORK = '/socialNetwork/UpWhite.svg',
  TWITTER = '/socialNetwork/TwitterWhite.svg',
  FACEBOOK = '/socialNetwork/FbWhite.svg',
  YOUTUBE = '/socialNetwork/ytWhite.svg',
  DRIBBBLE = '/socialNetwork/drWhite.svg',
  BEHANCE = '/socialNetwork/bhWhite.svg',
}
export enum SocialNetworksBlackImages {
  LINKEDIN = '/socialNetwork/linkedBlack.svg',
  INSTAGRAM = '/socialNetwork/instagramBlack.svg',
  CLUTCH = '/socialNetwork/clutchBlack.svg',
  UPWORK = '/socialNetwork/upBlack.svg',
  TWITTER = '/socialNetwork/twitterBlack.svg',
  FACEBOOK = '/socialNetwork/fbBlack.svg',
  YOUTUBE = '/socialNetwork/ytBlack.svg',
  DRIBBBLE = '/socialNetwork/drBlack.svg',
  BEHANCE = '/socialNetwork/bhBlack.svg',
}
export enum SocialNetworksGreyImages {
  LINKEDIN = '/socialNetwork/linkedGrey.svg',
  INSTAGRAM = '/socialNetwork/instagramGrey.svg',
  CLUTCH = '/socialNetwork/clutchGrey.svg',
  UPWORK = '/socialNetwork/upGrey.svg',
  TWITTER = '/socialNetwork/twitterGrey.svg',
  FACEBOOK = '/socialNetwork/fbGrey.svg',
  YOUTUBE = '/socialNetwork/ytGrey.svg',
  DRIBBBLE = '/socialNetwork/drGrey.svg',
  BEHANCE = '/socialNetwork/bhGrey.svg',
}

export enum VacancyImages {
  ARROW = '/icons/VacancyArrow.svg',
}

export enum ReviewsWidgetImages {
  UPWORK_MOB = '/logo/UpworkMob.svg',
  UPWORK_WEB = '/logo/UpworkWeb.svg',
  CLUTCH_MOB = '/logo/ClutchMob.svg',
  CLUTCH_WEB = '/logo/ClutchWeb.svg',
  TOP_RATED_MOB = '/logo/TopRatedMob.svg',
  TOP_RATED_WEB = '/logo/TopRatedWeb.svg',
}

export enum ProjectsInfoImages {
  GO_HEJA_LOGO = '/logo/GO_HEJA.svg',
  ND_PAY_LOGO = '/logo/NDPAY.svg',
  TIMEON_LOGO = '/logo/TIMEON.svg',
  STORICA_LOGO = '/logo/STORICA.svg',
  CAIDR_LOGO = '/logo/CAIDR.svg',
  STRATTYX_LOGO = '/logo/STRATTYX.svg',
  KEYRI_LOGO = '/logo/KEYRI.svg',
  CRED_WALLET_LOGO = '/logo/CRED_WALLET.svg',
  BTM_LOGO = '/logo/BEAT_THE_MARKET.svg',
  ONFIRE_LOGO = '/logo/ONFIRE.svg',
}

export enum ValidationSmilesImage {
  IS_ERROR = '/icons/validation/IsError.svg',
  IN_PROGRESS = '/icons/validation/InProgress.svg',
  IS_OK = '/icons/validation/IsOk.svg',
}

export enum FieldActivitiesNames {
  Fintech = 'fintech',
  Cybersecurity = 'cybersecurity',
  Healthcare = 'healthcare',
  Retail = 'retail',
  Messaging = 'messaging',
  HR = 'hr',
}

export enum ComingSoonImages {
  BACKGROUND = '/img/comingSoon.png',
}

export enum Float {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum Transitions {
  COLOR = '0.4s ease-in-out',
  POSITION = '0.6s ease-in-out',
}
