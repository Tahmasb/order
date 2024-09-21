const cities = [
  // آذربایجان شرقی
  { label: "تبريز", stateId: 1, id: 1 },
  { label: "مراغه", stateId: 1, id: 2 },
  { label: "ميانه", stateId: 1, id: 3 },
  { label: "شبستر", stateId: 1, id: 4 },
  { label: "مرند", stateId: 1, id: 5 },
  { label: "جلفا", stateId: 1, id: 6 },
  { label: "سراب", stateId: 1, id: 7 },
  { label: "هاديشهر", stateId: 1, id: 8 },
  { label: "بناب", stateId: 1, id: 9 },
  { label: "تسوج", stateId: 1, id: 10 },
  { label: "اهر", stateId: 1, id: 11 },
  { label: "هريس", stateId: 1, id: 12 },
  { label: "هشترود", stateId: 1, id: 13 },
  { label: "ملكان", stateId: 1, id: 14 },
  { label: "بستان آباد", stateId: 1, id: 15 },
  { label: "ورزقان", stateId: 1, id: 16 },
  { label: "اسكو", stateId: 1, id: 17 },
  { label: "ممقان", stateId: 1, id: 18 },
  { label: "صوفیان", stateId: 1, id: 19 },
  { label: "ایلخچی", stateId: 1, id: 20 },
  { label: "خسروشهر", stateId: 1, id: 21 },
  { label: "باسمنج", stateId: 1, id: 22 },
  { label: "سهند", stateId: 1, id: 23 },
  // آذربایجان غربی
  { label: "اروميه", stateId: 2, id: 1 },
  { label: "نقده", stateId: 2, id: 2 },
  { label: "ماكو", stateId: 2, id: 3 },
  { label: "تكاب", stateId: 2, id: 4 },
  { label: "خوي", stateId: 2, id: 5 },
  { label: "مهاباد", stateId: 2, id: 6 },
  { label: "سر دشت", stateId: 2, id: 7 },
  { label: "چالدران", stateId: 2, id: 8 },
  { label: "بوكان", stateId: 2, id: 9 },
  { label: "مياندوآب", stateId: 2, id: 10 },
  { label: "سلماس", stateId: 2, id: 11 },
  { label: "شاهين دژ", stateId: 2, id: 12 },
  { label: "پيرانشهر", stateId: 2, id: 13 },
  { label: "اشنويه", stateId: 2, id: 14 },
  { label: "پلدشت", stateId: 2, id: 15 },
  // اردبیل stateId:3,
  { label: "اردبيل", stateId: 3, id: 1 },
  { label: "پارس آباد", stateId: 3, id: 2 },
  { label: "خلخال", stateId: 3, id: 3 },
  { label: "مشگين شهر", stateId: 3, id: 4 },
  { label: "نمين", stateId: 3, id: 5 },
  { label: "نير", stateId: 3, id: 6 },
  { label: "گرمي", stateId: 3, id: 7 },
  // اصفهان
  { label: "اصفهان", stateId: 4, id: 1 },
  { label: "فلاورجان", stateId: 4, id: 2 },
  { label: "گلپايگان", stateId: 4, id: 3 },
  { label: "دهاقان", stateId: 4, id: 4 },
  { label: "نطنز", stateId: 4, id: 5 },
  { label: "تيران", stateId: 4, id: 6 },
  { label: "كاشان", stateId: 4, id: 7 },
  { label: "اردستان", stateId: 4, id: 8 },
  { label: "سميرم", stateId: 4, id: 9 },
  { label: "درچه", stateId: 4, id: 10 },
  { label: "کوهپایه", stateId: 4, id: 11 },
  { label: "مباركه", stateId: 4, id: 12 },
  { label: "شهرضا", stateId: 4, id: 13 },
  { label: "خميني شهر", stateId: 4, id: 14 },
  { label: "نجف آباد", stateId: 4, id: 15 },
  { label: "زرين شهر", stateId: 4, id: 16 },
  { label: "آران و بيدگل", stateId: 4, id: 17 },
  { label: "باغ بهادران", stateId: 4, id: 18 },
  { label: "خوانسار", stateId: 4, id: 19 },
  { label: "علويجه", stateId: 4, id: 20 },
  { label: "عسگران", stateId: 4, id: 21 },
  { label: "حاجي آباد", stateId: 4, id: 22 },
  { label: "تودشک", stateId: 4, id: 23 },
  { label: "ورزنه", stateId: 4, id: 24 },
  // ایلام
  { label: "ايلام", stateId: 5, id: 1 },
  { label: "مهران", stateId: 5, id: 2 },
  { label: "دهلران", stateId: 5, id: 3 },
  { label: "آبدانان", stateId: 5, id: 4 },
  { label: "دره شهر", stateId: 5, id: 5 },
  { label: "ايوان", stateId: 5, id: 6 },
  { label: "سرابله", stateId: 5, id: 7 },
  // بوشهر
  { label: "بوشهر", stateId: 6, id: 1 },
  { label: "دير", stateId: 6, id: 2 },
  { label: "كنگان", stateId: 6, id: 3 },
  { label: "گناوه", stateId: 6, id: 4 },
  { label: "خورموج", stateId: 6, id: 5 },
  { label: "اهرم", stateId: 6, id: 6 },
  { label: "برازجان", stateId: 6, id: 7 },
  { label: "جم", stateId: 6, id: 8 },
  { label: "کاکی", stateId: 6, id: 9 },
  { label: "عسلویه", stateId: 6, id: 10 },
  // تهران
  { label: "تهران", stateId: 7, id: 1 },
  { label: "ورامين", stateId: 7, id: 2 },
  { label: "فيروزكوه", stateId: 7, id: 3 },
  { label: "ري", stateId: 7, id: 4 },
  { label: "دماوند", stateId: 7, id: 5 },
  { label: "اسلامشهر", stateId: 7, id: 6 },
  { label: "رودهن", stateId: 7, id: 7 },
  { label: "لواسان", stateId: 7, id: 8 },
  { label: "بومهن", stateId: 7, id: 9 },
  { label: "تجريش", stateId: 7, id: 10 },
  { label: "فشم", stateId: 7, id: 11 },
  { label: "كهريزك", stateId: 7, id: 12 },
  { label: "پاكدشت", stateId: 7, id: 13 },
  { label: "چهاردانگه", stateId: 7, id: 14 },
  { label: "شريف آباد", stateId: 7, id: 15 },
  { label: "قرچك", stateId: 7, id: 16 },
  { label: "باقرشهر", stateId: 7, id: 17 },
  { label: "شهريار", stateId: 7, id: 18 },
  { label: "رباط كريم", stateId: 7, id: 19 },
  { label: "قدس", stateId: 7, id: 20 },
  { label: "ملارد", stateId: 7, id: 21 },
  // چهار محال بختیاری
  { label: "شهركرد", stateId: 8, id: 1 },
  { label: "فارسان", stateId: 8, id: 2 },
  { label: "بروجن", stateId: 8, id: 3 },
  { label: "چلگرد", stateId: 8, id: 4 },
  { label: "اردل", stateId: 8, id: 5 },
  { label: "لردگان", stateId: 8, id: 6 },
  // خراسان جنوبی
  { label: "قائن", stateId: 9, id: 1 },
  { label: "فردوس", stateId: 9, id: 2 },
  { label: "بيرجند", stateId: 9, id: 3 },
  { label: "نهبندان", stateId: 9, id: 4 },
  { label: "سربيشه", stateId: 9, id: 5 },
  { label: "طبس", stateId: 9, id: 6 },
  // خراسان رضوی
  { label: "مشهد", stateId: 10, id: 1 },
  { label: "نيشابور", stateId: 10, id: 2 },
  { label: "سبزوار", stateId: 10, id: 3 },
  { label: "كاشمر", stateId: 10, id: 4 },
  { label: "گناباد", stateId: 10, id: 5 },
  { label: "طبس", stateId: 10, id: 6 },
  { label: "تربت حيدريه", stateId: 10, id: 7 },
  { label: "خواف", stateId: 10, id: 8 },
  { label: "تربت جام", stateId: 10, id: 9 },
  { label: "تايباد", stateId: 10, id: 10 },
  { label: "قوچان", stateId: 10, id: 11 },
  { label: "سرخس", stateId: 10, id: 12 },
  { label: "فريمان", stateId: 10, id: 13 },
  { label: "چناران", stateId: 10, id: 14 },
  { label: "درگز", stateId: 10, id: 15 },
  { label: "طرقبه", stateId: 10, id: 16 },
  // خراسان شمالی
  { label: "بجنورد", stateId: 11, id: 1 },
  { label: "اسفراين", stateId: 11, id: 2 },
  { label: "جاجرم", stateId: 11, id: 3 },
  { label: "شيروان", stateId: 11, id: 4 },
  { label: "آشخانه", stateId: 11, id: 5 },
  // خوزستان
  { label: "اهواز", stateId: 12, id: 1 },
  { label: "ايرانشهر", stateId: 12, id: 2 },
  { label: "شوش", stateId: 12, id: 3 },
  { label: "آبادان", stateId: 12, id: 4 },
  { label: "خرمشهر", stateId: 12, id: 5 },
  { label: "مسجد سليمان", stateId: 12, id: 6 },
  { label: "ايذه", stateId: 12, id: 7 },
  { label: "شوشتر", stateId: 12, id: 8 },
  { label: "انديمشك", stateId: 12, id: 9 },
  { label: "سوسنگرد", stateId: 12, id: 10 },
  { label: "هويزه", stateId: 12, id: 11 },
  { label: "دزفول", stateId: 12, id: 12 },
  { label: "شادگان", stateId: 12, id: 13 },
  { label: "بندر ماهشهر", stateId: 12, id: 14 },
  { label: "بندر امام خميني", stateId: 12, id: 15 },
  { label: "بهبهان", stateId: 12, id: 16 },
  { label: "رامهرمز", stateId: 12, id: 17 },
  { label: "باغ ملك", stateId: 12, id: 18 },
  { label: "هنديجان", stateId: 12, id: 19 },
  { label: "لالي", stateId: 12, id: 20 },
  { label: "رامشیر", stateId: 12, id: 21 },
  { label: "حمیدیه", stateId: 12, id: 22 },
  { label: "ملاثانی", stateId: 12, id: 23 },
  { label: "شادگان", stateId: 12, id: 24 },
  // زنجان
  {
    label: "زنجان",
    stateId: 13,
    id: 1,
  },
  {
    label: "ابهر",
    stateId: 13,
    id: 2,
  },
  {
    label: "خدابنده",
    stateId: 13,
    id: 3,
  },
  {
    label: "ماهنشان",
    stateId: 13,
    id: 4,
  },
  {
    label: "خرمدره",
    stateId: 13,
    id: 5,
  },
  {
    label: "آب بر",
    stateId: 13,
    id: 6,
  },
  {
    label: "قيدار",
    stateId: 13,
    id: 7,
  },
  // سمنان
  {
    label: "سمنان",
    stateId: 14,
    id: 1,
  },
  {
    label: "شاهرود",
    stateId: 14,
    id: 2,
  },
  {
    label: "گرمسار",
    stateId: 14,
    id: 3,
  },
  {
    label: "ايوانكي",
    stateId: 14,
    id: 4,
  },
  {
    label: "دامغان",
    stateId: 14,
    id: 5,
  },
  {
    label: "بسطام",
    stateId: 14,
    id: 6,
  },
  // سیستان و بلوچستان
  {
    label: "زاهدان",
    stateId: 15,
    id: 1,
  },
  {
    label: "چابهار",
    stateId: 15,
    id: 2,
  },
  {
    label: "خاش",
    stateId: 15,
    id: 3,
  },
  {
    label: "سراوان",
    stateId: 15,
    id: 4,
  },
  {
    label: "زابل",
    stateId: 15,
    id: 5,
  },
  {
    label: "سرباز",
    stateId: 15,
    id: 6,
  },
  {
    label: "ايرانشهر",
    stateId: 15,
    id: 7,
  },
  {
    label: "ميرجاوه",
    stateId: 15,
    id: 8,
  },
  // فارس
  {
    label: "شيراز",
    stateId: 16,
    id: 1,
  },
  {
    label: "اقليد",
    stateId: 16,
    id: 2,
  },
  {
    label: "داراب",
    stateId: 16,
    id: 3,
  },
  {
    label: "فسا",
    stateId: 16,
    id: 4,
  },
  {
    label: "مرودشت",
    stateId: 16,
    id: 5,
  },
  {
    label: "آباده",
    stateId: 16,
    id: 6,
  },
  {
    label: "كازرون",
    stateId: 16,
    id: 7,
  },
  {
    label: "سپيدان",
    stateId: 16,
    id: 8,
  },
  {
    label: "لار",
    stateId: 16,
    id: 9,
  },
  {
    label: "فيروز آباد",
    stateId: 16,
    id: 10,
  },
  {
    label: "جهرم",
    stateId: 16,
    id: 11,
  },
  {
    label: "استهبان",
    stateId: 16,
    id: 12,
  },
  {
    label: "لامرد",
    stateId: 16,
    id: 13,
  },
  {
    label: "مهر",
    stateId: 16,
    id: 14,
  },
  {
    label: "حاجي آباد",
    stateId: 16,
    id: 15,
  },
  {
    label: "اردكان",
    stateId: 16,
    id: 16,
  },
  {
    label: "صفاشهر",
    stateId: 16,
    id: 17,
  },
  {
    label: "ارسنجان",
    stateId: 16,
    id: 18,
  },
  {
    label: "سوريان",
    stateId: 16,
    id: 19,
  },
  {
    label: "فراشبند",
    stateId: 16,
    id: 20,
  },
  {
    label: "سروستان",
    stateId: 16,
    id: 21,
  },
  {
    label: "زرقان",
    stateId: 16,
    id: 22,
  },
  {
    label: "کوار",
    stateId: 16,
    id: 23,
  },
  {
    label: "بوانات",
    stateId: 16,
    id: 24,
  },
  {
    label: "خرامه",
    stateId: 16,
    id: 25,
  },
  {
    label: "خنج",
    stateId: 16,
    id: 26,
  },
  // قزوین
  {
    label: "قزوين",
    stateId: 17,
    id: 1,
  },
  {
    label: "تاكستان",
    stateId: 17,
    id: 2,
  },
  {
    label: "آبيك",
    stateId: 17,
    id: 3,
  },
  {
    label: "بوئين زهرا",
    stateId: 17,
    id: 4,
  },
  // قم
  {
    label: "قم",
    stateId: 18,
    id: 1,
  },
  {
    label: "قنوات",
    stateId: 18,
    id: 2,
  },
  {
    label: "جعفریه",
    stateId: 18,
    id: 3,
  },
  {
    label: "کهک",
    stateId: 18,
    id: 4,
  },
  {
    label: "دستجرد",
    stateId: 18,
    id: 5,
  },
  {
    label: "سلفچگان",
    stateId: 18,
    id: 6,
  },
  // البرز
  {
    label: "کرج",
    stateId: 19,
    id: 1,
  },
  {
    label: "طالقان",
    stateId: 19,
    id: 2,
  },
  {
    label: "نظرآباد",
    stateId: 19,
    id: 3,
  },
  {
    label: "اشتهارد",
    stateId: 19,
    id: 4,
  },
  {
    label: "هشتگرد",
    stateId: 19,
    id: 5,
  },
  {
    label: "كرج",
    stateId: 19,
    id: 6,
  },
  {
    label: "ماهدشت",
    stateId: 19,
    id: 7,
  },
  // کردستان
  {
    label: "سنندج",
    stateId: 20,
    id: 1,
  },
  {
    label: "بانه",
    stateId: 20,
    id: 2,
  },
  {
    label: "بيجار",
    stateId: 20,
    id: 3,
  },
  {
    label: "سقز",
    stateId: 20,
    id: 4,
  },
  {
    label: "قروه",
    stateId: 20,
    id: 5,
  },
  {
    label: "مريوان",
    stateId: 20,
    id: 6,
  },
  {
    label: "صلوات آباد",
    stateId: 20,
    id: 7,
  },
  {
    label: "حسن آباد",
    stateId: 20,
    id: 8,
  },
  // کرمان
  {
    label: "کرمان",
    stateId: 21,
    id: 1,
  },
  {
    label: "راور",
    stateId: 21,
    id: 2,
  },
  {
    label: "انار",
    stateId: 21,
    id: 3,
  },
  {
    label: "کوهبنان",
    stateId: 21,
    id: 4,
  },
  {
    label: "رفسنجان",
    stateId: 21,
    id: 5,
  },
  {
    label: "بافت",
    stateId: 21,
    id: 6,
  },
  {
    label: "سيرجان",
    stateId: 21,
    id: 7,
  },
  {
    label: "كهنوج",
    stateId: 21,
    id: 8,
  },
  {
    label: "زرند",
    stateId: 21,
    id: 9,
  },
  {
    label: "بم",
    stateId: 21,
    id: 10,
  },
  {
    label: "جيرفت",
    stateId: 21,
    id: 11,
  },
  {
    label: "بردسير",
    stateId: 21,
    id: 12,
  },
  // کرمانشاه
  {
    label: "كرمانشاه",
    stateId: 22,
    id: 1,
  },
  {
    label: "اسلام آباد غرب",
    stateId: 22,
    id: 2,
  },
  {
    label: "كنگاور",
    stateId: 22,
    id: 3,
  },
  {
    label: "سنقر",
    stateId: 22,
    id: 4,
  },
  {
    label: "قصر شيرين",
    stateId: 22,
    id: 5,
  },
  {
    label: "هرسين",
    stateId: 22,
    id: 6,
  },
  {
    label: "صحنه",
    stateId: 22,
    id: 7,
  },
  {
    label: "پاوه",
    stateId: 22,
    id: 8,
  },
  {
    label: "جوانرود",
    stateId: 22,
    id: 9,
  },
  // کهکیوله و بویراحمد
  {
    label: "ياسوج",
    stateId: 23,
    id: 1,
  },
  {
    label: "گچساران",
    stateId: 23,
    id: 2,
  },
  {
    label: "دوگنبدان",
    stateId: 23,
    id: 3,
  },
  {
    label: "سي سخت",
    stateId: 23,
    id: 4,
  },
  {
    label: "دهدشت",
    stateId: 23,
    id: 5,
  },
  // گلستان
  {
    label: "گرگان",
    stateId: 24,
    id: 1,
  },
  {
    label: "آق قلا",
    stateId: 24,
    id: 2,
  },
  {
    label: "گنبد كاووس",
    stateId: 24,
    id: 3,
  },
  {
    label: "علي آباد كتول",
    stateId: 24,
    id: 4,
  },
  {
    label: "كردكوی",
    stateId: 24,
    id: 5,
  },
  {
    label: "كلاله",
    stateId: 24,
    id: 6,
  },
  {
    label: "آزاد شهر",
    stateId: 24,
    id: 7,
  },
  {
    label: "راميان",
    stateId: 24,
    id: 8,
  },
  // گیلان
  {
    label: "رشت",
    stateId: 25,
    id: 1,
  },
  {
    label: "منجيل",
    stateId: 25,
    id: 2,
  },
  {
    label: "لنگرود",
    stateId: 25,
    id: 3,
  },
  {
    label: "تالش",
    stateId: 25,
    id: 4,
  },
  {
    label: "آستارا",
    stateId: 25,
    id: 5,
  },
  {
    label: "ماسوله",
    stateId: 25,
    id: 6,
  },
  {
    label: "رودبار",
    stateId: 25,
    id: 7,
  },
  {
    label: "فومن",
    stateId: 25,
    id: 8,
  },
  {
    label: "صومعه سرا",
    stateId: 25,
    id: 9,
  },
  {
    label: "هشتپر",
    stateId: 25,
    id: 10,
  },
  {
    label: "ماسال",
    stateId: 25,
    id: 11,
  },
  {
    label: "شفت",
    stateId: 25,
    id: 12,
  },
  {
    label: "املش",
    stateId: 25,
    id: 13,
  },
  {
    label: "لاهیجان",
    stateId: 25,
    id: 14,
  },
  // لرستان
  {
    label: "خرم آباد",
    stateId: 26,
    id: 1,
  },
  {
    label: "ماهشهر",
    stateId: 26,
    id: 2,
  },
  {
    label: "دزفول",
    stateId: 26,
    id: 3,
  },
  {
    label: "بروجرد",
    stateId: 26,
    id: 4,
  },
  {
    label: "دورود",
    stateId: 26,
    id: 5,
  },
  {
    label: "اليگودرز",
    stateId: 26,
    id: 6,
  },
  {
    label: "ازنا",
    stateId: 26,
    id: 7,
  },
  {
    label: "نور آباد",
    stateId: 26,
    id: 8,
  },
  {
    label: "كوهدشت",
    stateId: 26,
    id: 9,
  },
  {
    label: "الشتر",
    stateId: 26,
    id: 10,
  },
  // مازندران
  {
    label: "ساري",
    stateId: 27,
    id: 1,
  },
  {
    label: "آمل",
    stateId: 27,
    id: 2,
  },
  {
    label: "بابل",
    stateId: 27,
    id: 3,
  },
  {
    label: "بابلسر",
    stateId: 27,
    id: 4,
  },
  {
    label: "بهشهر",
    stateId: 27,
    id: 5,
  },
  {
    label: "تنكابن",
    stateId: 27,
    id: 6,
  },
  {
    label: "جويبار",
    stateId: 27,
    id: 7,
  },
  {
    label: "چالوس",
    stateId: 27,
    id: 8,
  },
  {
    label: "رامسر",
    stateId: 27,
    id: 9,
  },
  {
    label: "قائم شهر",
    stateId: 27,
    id: 10,
  },
  {
    label: "نكا",
    stateId: 27,
    id: 11,
  },
  {
    label: "نور",
    stateId: 27,
    id: 12,
  },
  {
    label: "بلده",
    stateId: 27,
    id: 13,
  },
  {
    label: "نوشهر",
    stateId: 27,
    id: 14,
  },
  {
    label: "محمود آباد",
    stateId: 27,
    id: 15,
  },
  // مرکزی
  {
    label: "اراک",
    stateId: 28,
    id: 1,
  },
  {
    label: "آشتيان",
    stateId: 28,
    id: 2,
  },
  {
    label: "تفرش",
    stateId: 28,
    id: 3,
  },
  {
    label: "خمين",
    stateId: 28,
    id: 4,
  },
  {
    label: "دليجان",
    stateId: 28,
    id: 5,
  },
  {
    label: "ساوه",
    stateId: 28,
    id: 6,
  },
  {
    label: "محلات",
    stateId: 28,
    id: 7,
  },
  {
    label: "شازند",
    stateId: 28,
    id: 8,
  },
  // هرمزگان
  {
    label: "بندرعباس",
    stateId: 29,
    id: 1,
  },
  {
    label: "قشم",
    stateId: 29,
    id: 2,
  },
  {
    label: "كيش",
    stateId: 29,
    id: 3,
  },
  {
    label: "بندر لنگه",
    stateId: 29,
    id: 4,
  },
  {
    label: "بستك",
    stateId: 29,
    id: 5,
  },
  {
    label: "حاجي آباد",
    stateId: 29,
    id: 6,
  },
  {
    label: "دهبارز",
    stateId: 29,
    id: 7,
  },
  {
    label: "ميناب",
    stateId: 29,
    id: 8,
  },
  {
    label: "بندر جاسك",
    stateId: 29,
    id: 9,
  },
  {
    label: "بندر خمیر",
    stateId: 29,
    id: 10,
  },
  {
    label: "قشم",
    stateId: 29,
    id: 11,
  },
  // همدان
  {
    label: "همدان",
    stateId: 30,
    id: 1,
  },
  {
    label: "ملاير",
    stateId: 30,
    id: 2,
  },
  {
    label: "نهاوند",
    stateId: 30,
    id: 3,
  },
  {
    label: "رزن",
    stateId: 30,
    id: 4,
  },
  {
    label: "اسدآباد",
    stateId: 30,
    id: 5,
  },
  {
    label: "بهار",
    stateId: 30,
    id: 6,
  },
  // یزد
  {
    label: "يزد",
    stateId: 31,
    id: 1,
  },
  {
    label: "تفت",
    stateId: 31,
    id: 2,
  },
  {
    label: "اردكان",
    stateId: 31,
    id: 3,
  },
  {
    label: "ابركوه",
    stateId: 31,
    id: 4,
  },
  {
    label: "ميبد",
    stateId: 31,
    id: 5,
  },
  {
    label: "طبس",
    stateId: 31,
    id: 6,
  },
  {
    label: "بافق",
    stateId: 31,
    id: 7,
  },
  {
    label: "مهريز",
    stateId: 31,
    id: 8,
  },
  {
    label: "اشكذر",
    stateId: 31,
    id: 9,
  },
  {
    label: "هرات",
    stateId: 31,
    id: 10,
  },
  {
    label: "خضرآباد",
    stateId: 31,
    id: 11,
  },
  {
    label: "زارچ",
    stateId: 31,
    id: 12,
  },
];

const states = [
  { label: "آذربايجان شرقی", id: 1 },
  {
    label: "آذربايجان غربی",
    id: 2,
  },
  { label: "اردبيل", id: 3 },
  {
    label: "اصفهان",
    id: 4,
  },
  {
    label: "ايلام",
    id: 5,
  },
  {
    label: "بوشهر",
    id: 6,
  },
  {
    label: "تهران",
    id: 7,
  },
  {
    label: "چهارمحال بختیاری",
    id: 8,
  },
  {
    label: "خراسان جنوبی",
    id: 9,
  },
  {
    label: "خراسان رضوی",
    id: 10,
  },
  {
    label: "خراسان شمالی",
    id: 11,
  },
  {
    label: "خوزستان",
    id: 12,
  },
  {
    label: "زنجان",
    id: 13,
  },
  {
    label: "سمنان",
    id: 14,
  },
  {
    label: "سيستان و بلوچستان",
    id: 15,
  },
  {
    label: "فارس",
    id: 16,
  },
  {
    label: "قزوين",
    id: 17,
  },
  { label: "قم", id: 18 },
  {
    label: "البرز",
    id: 19,
  },
  {
    label: "كردستان",
    id: 20,
  },
  {
    label: "کرمان",
    id: 21,
  },
  {
    label: "كرمانشاه",
    id: 22,
  },
  {
    label: "كهكيلويه و بويراحمد",
    id: 23,
  },
  {
    label: "گلستان",
    id: 24,
  },
  {
    label: "گيلان",
    id: 25,
  },
  {
    label: "لرستان",
    id: 26,
  },
  {
    label: "مازندران",
    id: 27,
  },
  {
    label: "مرکزی",
    id: 28,
  },
  {
    label: "هرمزگان",
    id: 29,
  },
  {
    label: "همدان",
    id: 30,
  },
  {
    label: "يزد",
    id: 31,
  },
];

export { cities, states };
