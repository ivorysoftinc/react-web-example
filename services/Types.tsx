import { INITIAL_VALUES } from '../pages/vacancyStep';

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export interface IVacancy {
  vacancyId: number;
  vacancyCategory: string;
  vacancyMDText: string;
}

export enum ProjectType {
  WEB = 'Web',
  IOS = 'iOS',
  ANDROID = 'Android',
  UI = 'UI/UX',
  OTHER = 'Other',
}

export type TypeProject = {
  id: number;
  type: ProjectType;
  isSelect: boolean;
  isLBR: boolean;
  isRBR: boolean;
};

export interface INews {
  articlePictures: [];
  author: [];
  category: string;
  comments: [];
  createdAt: string;
  img: string;
  metaDescription: string;
  metaTitle: string;
  rating: {};
  shortDescription: string;
  title: string;
  updatedAt: string;
  url: string;
  readingTime: string;
  _id: string;
  createdDate: string;
}

export interface IArticleProps {
  blog: ArticleType;
  news: NewsType[];
}

export type ArticleType = {
  author: {
    avatar: string;
    name: string;
    role: string;
  }[];
  category: string;
  createdAt: string;
  fullText: string;
  img: string;
  readingTime: string;
  title: string;
  updatedAt: string;
  _id: string;
  url: string;
  metaTitle: string;
  metaDescription: string;
  createdDate: string;
};

export interface IBlogId {
  params: {
    id: string;
  };
}

export type NewsType = {
  _id: string;
  url: string;
  category: string;
  title: string;
  shortDescription: string;
  author: any;
  readingTime: string;
  img: string;
  createdDate: string;
};

export interface IValidate {
  aboutYourProject: string;
  acceptPrivacy: boolean;
  email: string;
  fileToUpload: string | Blob;
  fullName: string;
  projectTypes: string | Blob;
  yourBudget: string | Blob;
}

export interface IPageItem {
  index: number;
  title: string;
  type: string;
  isChosen?: boolean;
  key?: string;
}

export interface IStepData {
  id: string;
  pageType: string;
  gridColumns: number;
  stepDescription: string;
  pageItems: IPageItem[];
  currentStep: string;
  key?: keyof typeof INITIAL_VALUES;
}

export interface IStepItem {
  index: number;
  title: string;
  isChosen: boolean;
  type: string;
}

export interface IFileData {
  lastModified: number;
  name: string;
  readonly size: number;
  readonly type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream;
  text(): Promise<string>;
}

export interface IChosenItems {
  workType: string | Blob;
  englishLevel: string | Blob;
  expectedSalary: string | Blob;
  aboutYourself: string | Blob;
  cv: string | Blob;
  name: string | Blob;
  email: string | Blob;
  socialLink: string | Blob;
  phone: string | Blob;
}

export interface IField {
  aboutYourself?: string;
  CV?: string;
  name?: string;
  socialLink?: string;
  email?: string;
  phone?: string;
}
