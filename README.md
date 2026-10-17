# PVT. IQRA ACADEMY (ইকরা অ্যাকাডেমি) - World-Class School Website & Admin System

## 🌟 ওভারভিউ (Overview)
এটি **ইকরা অ্যাকাডেমি (আবাসিক গার্লস মিশন)**-এর একটি আধুনিক, রেসপনসিভ এবং পূর্ণাঙ্গ ওয়েবসাইট ও অ্যাডমিন ডেটা এন্ট্রি পোর্টাল। প্রতিষ্ঠানটি ২০১৫ সালে প্রতিষ্ঠিত (UDISE Code: 19111008505), যা দক্ষিণ শিবপুর, যদুরহাটি, বাদুড়িয়া, উত্তর ২৪ পরগণায় অবস্থিত।

## 📁 ফাইল স্ট্রাকচার (File Structure)
```
iqra_project/
├── index.html       # প্রধান ওয়েবসাইট (হোম, পরিচিতি, পঠন-পাঠন, পরিচালনা, গ্যালারি, ভর্তি আবেদন ও যোগাযোগ)
├── admin.html       # ডেটা এন্ট্রি পোর্টাল (স্ক্রলিং ঘোষণা, নোটিশ, অনলাইন ভর্তি আবেদন, ব্যানার স্লাইডার ও পরিসংখ্যান ব্যবস্থাপনা)
├── header.js        # পৃথক হেডার কম্পোনেন্ট (সহজেই যেকোনো নতুন পেজে ইমপোর্ট করা যায়)
├── footer.js        # পৃথক ফুটার কম্পোনেন্ট (সহজেই যেকোনো নতুন পেজে ইমপোর্ট করা যায়)
├── data.js          # ডিফল্ট ডেটাস্টোর ও লোকালস্টোরেজ সিনক্রোনাইজেশন লজিক
├── style.css        # কাস্টম ফন্ট ও অ্যানিমেশন স্টাইলশীট
└── README.md        # ডকুমেন্টেশন ও ব্যবহার নির্দেশিকা
```

## 🚀 কীভাবে যেকোনো নতুন পেজ যোগ করবেন (How to add a new page)
আপনি খুব সহজেই যেকোনো নতুন পেজ (যেমন `gallery.html`, `teachers.html`, `results.html`) তৈরি করতে পারেন। শুধু `header.js` এবং `footer.js` ইমপোর্ট করুন:

```html
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>নতুন পেজ | ইকরা অ্যাকাডেমি</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-slate-50 text-slate-800">

  <!-- হেডার ইমপোর্ট -->
  <iqra-header active="home"></iqra-header>

  <!-- আপনার পেজের মূল কন্টেন্ট -->
  <main class="max-w-7xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold text-emerald-900">পেজের শিরোনাম</h1>
    <p class="mt-4">এখানে আপনার কন্টেন্ট লিখুন...</p>
  </main>

  <!-- ফুটার ইমপোর্ট -->
  <iqra-footer></iqra-footer>

  <!-- স্ক্রিপ্ট ফাইল -->
  <script src="data.js"></script>
  <script src="header.js"></script>
  <script src="footer.js"></script>
</body>
</html>
```

## ⚙️ অ্যাডমিন ডেটা এন্ট্রি পোর্টাল ফিচার (Admin Portal Features)
1. **স্ক্রলিং ঘোষণা (Marquee Ticker Editor):** সরাসরি হেডারের চলমান নোটিশ পরিবর্তন করুন।
2. **ভর্তি আবেদন রেজিস্টার (Admission Applications):** ওয়েবসাইট থেকে জমা পড়া সকল ছাত্রীদের আবেদন দেখুন, শ্রেণি বা বিভাগ অনুযায়ী ফিল্টার করুন, স্ট্যাটাস পরিবর্তন করুন (নতুন, যাচাইকৃত, ভর্তি নিশ্চিত), এক্সেল/CSV আকারে ডাউনলোড করুন।
3. **নোটিশ বোর্ড ব্যবস্থাপনা:** নতুন নোটিশ বা সার্কুলার যোগ ও ডিলিট করুন।
4. **ব্যানার ও ফটো স্লাইডার:** ৫টি প্রধান ব্যানার ছবির লিংক ও ক্যাপশন আপডেট করুন।
5. **প্রতিষ্ঠান পরিসংখ্যান:** মোট শিক্ষার্থী, শিক্ষক ও হেল্পলাইন নাম্বার পরিবর্তন করুন।
6. **ডেটা ব্যাকআপ:** সমস্ত ডেটা এক ক্লিকে JSON ফাইলে ব্যাকআপ বা রিস্টোর করুন।

---
**যোগাযোগ:** 9775123096 / 9647109481 | **ইমেল:** iqra.ac100@gmail.com | **ঠিকানা:** Dakshin Shibpur, Jadurhati, Baduria, North 24 Parganas, PIN-743293
