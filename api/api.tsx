import axios from 'axios';
import { IValidateContactUs } from '../components/RequestForm';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const ReviewsApi = {
  async getReviews() {
    try {
      const Response = await instance.get(`reviews`);
      return Response.data;
    } catch (error) {
      return error;
    }
  },
};

export const CareersApi = {
  async getAllVacancyDyId(id: string) {
    try {
      const Response = await instance.get(`vacancies/${id}`);
      return Response.data;
    } catch (error) {
      return error;
    }
  },
  async getAllVacancies() {
    try {
      const Response = await instance.get(`vacancies`);
      return Response.data;
    } catch (error) {
      return error;
    }
  },
  async postUserChoices(userChoices: FormData) {
    const Response = await instance.post(`vacationResponds`, userChoices);
    return Response;
  },
};

export const BlogApi = {
  async getArticles(cursor: number, category: string) {
    try {
      const Response = await instance.get(`articles?cursor=${cursor}&category=${category}`);
      return Response.data;
    } catch (error) {
      return error;
    }
  },
  async getArticlesById(id: string) {
    try {
      const Response = await instance.get(`articles/${id}`);
      return Response.data;
    } catch (error) {
      return error;
    }
  },
  async getAllArticlesId() {
    try {
      const Response = await instance.get(`articles/info`);
      return Response.data;
    } catch (error) {
      return error;
    }
  },
  async postSubscribeBlog(email: string) {
    const Response = await instance.post(`subscribeBlog`, email);
    return Response;
  },
};

export const ContactUsApi = {
  async postContact(contactData: FormData | IValidateContactUs) {
    const Response = await instance.post('contactUs', contactData);
    return Response;
  },
};

export const VacanciesApi = {
  async postCv(contactData: FormData) {
    const Response = await instance.post('vacationResponds', contactData);
    return Response;
  },
};
