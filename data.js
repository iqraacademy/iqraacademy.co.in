/**
 * PVT. IQRA ACADEMY (ইকরা অ্যাকাডেমি) - Central Configuration & Fallback Store
 * Connected to Firebase Project: iqra-academy-210a5
 */

window.IQRA_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCYA3UgOGX1WQ1YwzYl5_pvDeC6fsAxU3A",
  authDomain: "iqra-academy-210a5.firebaseapp.com",
  projectId: "iqra-academy-210a5",
  storageBucket: "iqra-academy-210a5.firebasestorage.app",
  messagingSenderId: "130128878522",
  appId: "1:130128878522:web:dd85b76426218a42479b83",
  measurementId: "G-NGTB86KHFL"
};

window.IQRA_DEFAULT_DATA = {
  marquee: "২০২৭ শিক্ষাবর্ষে প্রি-নার্সারি থেকে নবম শ্রেণি পর্যন্ত অনাবাসিক, ডে-বোর্ডিং ও আবাসিক বালিকা বিভাগে (Class V-IX) ভর্তি চলছে! আসন সংখ্যা সীমিত। যোগাযোগ: 9775123096 / 9647109481",
  phone1: "9775123096",
  phone2: "9647109481",
  email: "iqra.ac100@gmail.com",
  address: "Dakshin Shibpur, Jadurhati, Baduria, North 24 Parganas, PIN-743293",
  udise: "19111008505",
  stats: {
    estd: "২০১৫",
    students: "৫০০+",
    teachers: "২৫+",
    passRate: "১০০%"
  },
  banners: [
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792326600/iqra_1.jpg", caption: "ইকরা অ্যাকাডেমি মূল প্রাঙ্গণ" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792326600/iqra_4.jpg", caption: "শ্রেণিকক্ষে পাঠদান" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792326600/iqra_3.jpg", caption: "সুশৃঙ্খল প্রাত্যহিক সমাবেশ" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792326600/iqra_5.jpg", caption: "আবাসিক গার্লস মিশন" },
    { url: "https://res.cloudinary.com/u0z4riei/image/upload/v1792326601/iqra_2.jpg", caption: "সহশিক্ষা ও সাংস্কৃতিক অনুষ্ঠান" }
  ]
};


/**
 * Helper: Safely parse text containing [Link Text](https://example.com) into clickable links,
 * plus append optional standalone button { linkUrl, linkText }.
 */
window.formatIqraTextWithLinks = function(rawText, linkUrl, linkText, isMarquee) {
  if (!rawText) return "";
  // 1. Escape HTML special chars to prevent XSS
  let safe = String(rawText)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  // 2. Convert [Label](URL) into clickable anchor tags
  safe = safe.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(_, label, url) {
    const cleanUrl = url.trim();
    const isExternal = /^https?:\/\//i.test(cleanUrl);
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    if (isMarquee) {
      return `<a href="${cleanUrl}"${targetAttr} class="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full mx-1.5 shadow-sm underline-offset-2 transition">${label} <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i></a>`;
    }
    return `<a href="${cleanUrl}"${targetAttr} class="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-extrabold underline decoration-2 underline-offset-2 mx-1">${label} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a>`;
  });

  // 3. If a dedicated linkUrl is also provided (and not already embedded), append a prominent badge
  if (linkUrl && String(linkUrl).trim() !== "") {
    const cleanUrl = String(linkUrl).trim();
    const btnLabel = (linkText && String(linkText).trim() !== "") ? String(linkText).trim() : "Click Here";
    const isExternal = /^https?:\/\//i.test(cleanUrl);
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    if (isMarquee) {
      safe += ` <a href="${cleanUrl}"${targetAttr} class="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ml-2 shadow-sm transition"><i class="fa-solid fa-link text-[9px]"></i> <span>${btnLabel}</span></a>`;
    } else {
      safe += ` <a href="${cleanUrl}"${targetAttr} class="inline-flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-extrabold px-3 py-1 rounded-lg ml-1.5 shadow-sm transition"><i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> <span>${btnLabel}</span></a>`;
    }
  }

  return safe;
};
