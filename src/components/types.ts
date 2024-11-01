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
