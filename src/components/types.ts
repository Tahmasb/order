export type OptionItemType = {
  id: string | number;
  label: string | number;
  isDefault?: boolean;
};

export interface ErrorResponse {
  response: {
    statusCode: number;
    message: string;
    data?: {
      message: string;
    };
  };
}

export type Context = {
  params: {
    blogId: string;
  };
};

export type BlogDataProps = {
  _id: string;
  title: string;
  href: string;
  metaDescription: string;
  image: string;
  main: string;
  category: {
    label: string;
    href: string;
  };
  redirect: string;
  createdAt: string;
};
