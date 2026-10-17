/**
 * Default Institutional Data for PVT. IQRA ACADEMY
 */
const DEFAULT_IQRA_DATA = {
  adminPassword: "iqra2015",
  announcement: "📢 ভর্তি চলছে ২০২৭ শিক্ষাবর্ষে! Pre-Nursery থেকে Class IX পর্যন্ত অনাবাসic, ডে-বোর্ডিং ও আবাসিক বালিকা বিভাগে (Class V-IX) সীমিত আসনে ভর্তি চলছে। যোগাযোগ: ৯৭৭৫১২৩০৯৬ / ৯৬৪৭১০৯৪৮১",
  banners: [
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792240665/3.jpg", title: "ইকরা অ্যাকাডেমি আবাসিক ক্যাম্পাস", subtitle: "কন্যাশিশুদের জন্য সম্পূর্ণ সুরক্ষিত, আদর্শ ও স্নেহময় পরিবেশ" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792240666/2.jpg", title: "আধুনিক শ্রেণিকক্ষে শিক্ষাদান", subtitle: "WBBSE অনুমোদিত পাঠ্যক্রম ও যুগোপযোগী ডিজিটাল লার্নিং" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792240666/4.jpg", title: "সুপারভাইজড স্টাডি ও হোস্টেল কেয়ার", subtitle: "অভিজ্ঞ শিক্ষকমণ্ডলীর সার্বক্ষণিক তত্ত্বাবধানে পড়াশোনা ও রিভিশন" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792240666/1.jpg", title: "দ্বীনি ও নৈতিক মূল্যবোধের বিকাশ", subtitle: "কুরআন শিক্ষা, চরিত্র গঠন ও সুশৃঙ্খল জীবনযাপনের অনন্য চর্চা" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792240666/5.jpg", title: "ডে-বোর্ডিং ও সহশিক্ষা কার্যক্রম", subtitle: "সকাল ৮টা থেকে সন্ধ্যা ৬টা পর্যন্ত হোমওয়ার্ক সাপোর্ট ও খেলাধুলা" }
  ],
  notices: [
    { id: "not-1", date: "২০২৬-১০-১৫", category: "ভর্তি", title: "২০২৭ শিক্ষাবর্ষে নতুন ভর্তি ফরম বিতরণ চলছে (Pre-Nursery - Class IX)", priority: "উচ্চ" },
    { id: "not-2", date: "২০২৬-১০-১০", category: "আবাসিক", title: "আবাসিক বালিকা বিভাগের আসন সংরক্ষণ ও হোস্টেল নির্দেশিকা প্রকাশ", priority: "জরুরি" },
    { id: "not-3", date: "২০২৬-১০-০৫", category: "ডে-বোর্ডিং", title: "ডে-বোর্ডিং শিক্ষার্থীদের জন্য পুষ্টিকর খাদ্য তালিকা ও স্টাডি রুটিন হালনাগাদ", priority: "সাধারণ" },
    { id: "not-4", date: "২০২৬-০৯-২৮", category: "পরীক্ষা", title: "আসন্ন মূল্যায়নী পরীক্ষার সময়সূচি ও অভিভাবক সমন্বয় সভা", priority: "সাধারণ" }
  ],
  applications: [
    { id: "IQRA-2027-101", studentName: "আফরোজা খাতুন", guardianName: "মতিউর রহমান", stream: "আবাসিক (Residential Girls)", classApply: "Class VI", phone: "9832104567", status: "ভর্তি নিশ্চিত", date: "২০২৬-১০-১৪" },
    { id: "IQRA-2027-102", studentName: "সামিয়া পারভীন", guardianName: "রফিকুল ইসলাম", stream: "ডে-বোর্ডিং (Day Boarding)", classApply: "Class III", phone: "9733458912", status: "যাচাই চলছে", date: "২০২৬-১০-১৬" },
    { id: "IQRA-2027-103", studentName: "ফারহানা সুলতানা", guardianName: "আকবর আলী", stream: "অনাবাসিক (Day Scholar)", classApply: "Class I", phone: "9647890123", status: "নতুন আবেদন", date: "২০২৬-১০-১৭" }
  ],
  stats: {
    students: "৫০০+",
    teachers: "২৫+",
    passRate: "১০০%",
    estd: "২০১৫",
    helpline1: "9775123096",
    helpline2: "9647109481"
  }
};

function getIqraStore() {
  try {
    const raw = localStorage.getItem('iqra_academy_data');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  localStorage.setItem('iqra_academy_data', JSON.stringify(DEFAULT_IQRA_DATA));
  return DEFAULT_IQRA_DATA;
}

function saveIqraStore(data) {
  try {
    localStorage.setItem('iqra_academy_data', JSON.stringify(data));
  } catch(e) {}
}
