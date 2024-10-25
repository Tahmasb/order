import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/User";
import { connectDB, verifyPassword } from "./backFuncs";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const { phone, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          console.log(error);
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!phone || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await User.findOne({ phone: phone });

        if (!user) {
          throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          throw new Error("رمز عبور اشتباه است");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          phone: user.phone,
        };
      },
    }),
  ],
};

export default authOptions;
