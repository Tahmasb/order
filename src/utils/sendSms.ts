import axios from "axios";

const sendSMS = async (phone: number, code: string) => {
  const formData = {
    mobile: phone,
    TemplateId: 133208,
    Parameters: [
      {
        name: "code",
        value: code,
      },
    ],
  };
  const url = "https://api.sms.ir/v1/send/verify";

  const request = await axios.post(url, formData, {
    headers: {
      ACCEPT: "application/json",
      "X-API-KEY": process.env.SMS_KEY,
      "Content-Type": "application/json",
    },
  });
  return request;
};

export default sendSMS;
