/**
 * PVT. IQRA ACADEMY (ইকরা অ্যাকাডেমি) - Reusable Header Component
 * Usage:
 * <script src="data.js"></script>
 * <script src="header.js"></script>
 * <iqra-header active="home"></iqra-header>
 */

(function() {
  const DEFAULT_ANNOUNCEMENT = (window.IQRA_DEFAULT_DATA && window.IQRA_DEFAULT_DATA.marquee) ||
    "📢 ভর্তি চলছে ২০২৭ শিক্ষাবর্ষে! Pre-Nursery থেকে Class IX পর্যন্ত অনাবাসিক, ডে-বোর্ডিং ও আবাসিক বালিকা বিভাগে (Class V-IX) সীমিত আসনে ভর্তি চলছে। যোগাযোগ: ৯৭৭৫১২৩০৯৬ / ৯৬৪৭১০৯৪৮১";

  function getCachedData() {
    try {
      const raw = localStorage.getItem('iqra_cloud_cache');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {};
  }

  class IqraHeader extends HTMLElement {
    connectedCallback() {
      const active = this.getAttribute('active') || 'home';
      const cached = getCachedData();
      const rawAnnouncement = cached.marquee || DEFAULT_ANNOUNCEMENT;
      const announcement = window.formatIqraTextWithLinks
        ? window.formatIqraTextWithLinks(rawAnnouncement, cached.marqueeLinkUrl, cached.marqueeLinkText, true)
        : rawAnnouncement;
      const phone1 = cached.phone1 || '9775123096';
      const phone2 = cached.phone2 || '9647109481';

      this.innerHTML = `
        <!-- Top Info Bar -->
        <div class="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800 sticky top-0 z-50 shadow-md">
          <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1.5 font-medium">
                <i class="fa-solid fa-graduation-cap text-amber-400"></i>
                <span>UDISE Code:</span>
                <span class="font-mono text-amber-300 font-bold bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">19111008505</span>
              </span>
              <span class="hidden sm:inline text-slate-600">|</span>
              <span class="hidden sm:flex items-center gap-1 text-slate-300">
                <i class="fa-solid fa-calendar-check text-emerald-400"></i>
                <span>প্রতিষ্ঠিত: <b>২০১৫</b></span>
              </span>
            </div>

            <div class="flex items-center gap-2">
              <span class="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>লাইভ</span>
              </span>
              <a href="admin.html" class="px-3 py-1 rounded font-bold text-xs transition flex items-center gap-1.5 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-400/30">
                <i class="fa-solid fa-lock text-amber-400"></i>
                <span>অ্যাডমিন পোর্টাল</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Secondary Contact Bar -->
        <div class="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
          <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1.5">
                <i class="fa-solid fa-location-dot text-amber-400"></i>
                <span>Dakshin Shibpur, Jadurhati, Baduria, North 24 Parganas, PIN-743293</span>
              </span>
            </div>
            <div class="flex items-center gap-3">
              <a href="tel:${phone1}" class="flex items-center gap-1 text-emerald-200 hover:text-white transition font-semibold">
                <i class="fa-solid fa-phone text-amber-400"></i>
                <span>${phone1}</span>
              </a>
              <span class="text-emerald-700">/</span>
              <a href="tel:${phone2}" class="hidden sm:inline-block text-emerald-200 hover:text-white transition font-semibold">
                <span>${phone2}</span>
              </a>
              <a href="https://wa.me/91${phone1.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener" class="bg-green-600 hover:bg-green-500 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold transition ml-1 shadow-sm">
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Main Branding Header -->
        <header class="bg-white text-slate-800 shadow-sm border-b border-slate-100">
          <div class="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
            <a href="index.html" class="flex items-center gap-3.5 md:gap-5 group">
              <img 
                src="https://res.cloudinary.com/u0z4riei/image/upload/v1792241337/WhatsApp_Image_2026-10-17_at_6.14.01_PM.jpg" 
                alt="PVT. IQRA ACADEMY LOGO" 
                class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-emerald-600 shadow-md object-cover group-hover:scale-105 transition duration-300"
              />
              <div>
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded tracking-wider uppercase border border-emerald-200">PVT.</span>
                  <span class="text-xs font-bold text-amber-700 tracking-wider">ESTD: 2015</span>
                  <span class="hidden md:inline-block text-slate-300">•</span>
                  <span class="hidden md:inline-block text-xs font-semibold text-slate-500 font-mono">UDISE: 19111008505</span>
                </div>
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight">
                  ইকরা অ্যাকাডেমি <span class="text-amber-600 text-lg md:text-2xl font-bold font-serif">(IQRA ACADEMY)</span>
                </h1>
                <p class="text-sm md:text-base font-bold text-emerald-800 flex items-center gap-2 mt-0.5">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  আবাসিক গার্লস মিশন <span class="text-slate-300 font-normal">|</span> <span class="text-xs md:text-sm font-medium text-slate-600">Residential Girls' Mission</span>
                </p>
              </div>
            </a>

            <div class="hidden lg:flex items-center gap-3">
              <div class="text-right border-r border-slate-200 pr-4">
                <span class="text-[11px] text-slate-500 uppercase font-bold block">২০২৭ শিক্ষাবর্ষ</span>
                <span class="text-sm font-extrabold text-amber-700">ভর্তি চলছে (Pre-Nursery - IX)</span>
              </div>
              <a href="index.html#admissions" class="bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 text-sm">
                <i class="fa-solid fa-file-pen text-amber-300"></i>
                <span>অনলাইনে ভর্তি আবেদন</span>
              </a>
            </div>

            <button id="comp-mobile-menu-toggle" aria-label="Toggle Navigation Menu" class="lg:hidden text-emerald-900 hover:text-emerald-700 p-2.5 rounded-xl border border-emerald-100 bg-emerald-50 focus:outline-none cursor-pointer">
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </header>

        <!-- Navigation Bar -->
        <nav class="bg-emerald-900 text-white sticky top-7 z-40 shadow-md">
          <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div class="hidden lg:flex items-center gap-1 py-1">
              <a href="index.html#home" class="${active === 'home' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-house text-xs"></i> <span>হোম</span>
              </a>
              <a href="index.html#about" class="${active === 'about' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-school text-xs"></i> <span>পরিচিতি</span>
              </a>
              <a href="index.html#streams" class="${active === 'streams' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-book-open text-xs"></i> <span>পঠন-পাঠন</span>
              </a>
              <a href="index.html#residential" class="${active === 'residential' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-hotel text-xs"></i> <span>আবাসিক মিশন</span>
              </a>
              <a href="index.html#management" class="${active === 'management' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-users-gear text-xs"></i> <span>পরিচালনা</span>
              </a>
              <a href="index.html#admissions" class="${active === 'admissions' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-id-card text-xs"></i> <span>ভর্তি নির্দেশিকা</span>
              </a>
              <a href="index.html#notices" class="${active === 'notices' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-bullhorn text-xs"></i> <span>নোটিশ বোর্ড</span>
              </a>
              <a href="index.html#gallery" class="${active === 'gallery' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-images text-xs"></i> <span>গ্যালারি</span>
              </a>
              <a href="index.html#contact" class="${active === 'contact' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-1.5">
                <i class="fa-solid fa-envelope text-xs"></i> <span>যোগাযোগ</span>
              </a>
            </div>

            <div class="hidden lg:flex items-center gap-2">
              <a href="admin.html" class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-amber-500 text-slate-950 hover:bg-amber-400 shadow">
                <i class="fa-solid fa-lock text-xs"></i>
                <span>অ্যাডমিন পোর্টাল</span>
              </a>
            </div>
          </div>

          <div id="comp-mobile-menu" class="hidden lg:hidden bg-emerald-950 border-t border-emerald-800 px-4 py-3 space-y-1">
            <a href="index.html#home" class="block px-3 py-2 rounded text-sm text-amber-300 font-semibold hover:bg-emerald-800">হোম</a>
            <a href="index.html#about" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">পরিচিতি</a>
            <a href="index.html#streams" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">পঠন-পাঠন (৪টি শিক্ষাধারা)</a>
            <a href="index.html#residential" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">আবাসিক গার্লস মিশন</a>
            <a href="index.html#management" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">পরিচালনা</a>
            <a href="index.html#admissions" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">ভর্তি নির্দেশিকা ২০২৭</a>
            <a href="index.html#notices" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">নোটিশ বোর্ড</a>
            <a href="index.html#gallery" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">গ্যালারি</a>
            <a href="index.html#contact" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800">যোগাযোগ</a>
            <div class="pt-2 border-t border-emerald-800">
              <a href="admin.html" class="block px-3 py-2.5 rounded-lg text-sm bg-amber-500 text-slate-900 font-bold text-center">
                <i class="fa-solid fa-lock mr-1"></i> অ্যাডমিন পোর্টাল
              </a>
            </div>
          </div>
        </nav>

        <!-- Dynamic Announcement Marquee -->
        <div class="bg-amber-50 border-y border-amber-200 py-2 px-4 overflow-hidden flex items-center shadow-inner">
          <div class="max-w-7xl mx-auto w-full flex items-center">
            <div class="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5 uppercase tracking-wider shrink-0 shadow-sm mr-3">
              <i class="fa-solid fa-bullhorn animate-bounce text-amber-200"></i>
              <span>ঘোষণা</span>
            </div>
            <div class="overflow-hidden relative flex-1 text-xs md:text-sm text-slate-800 font-bold">
              <div class="animate-marquee hover:pause">
                📢 <span id="comp-marquee-text">${announcement}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const toggle = this.querySelector('#comp-mobile-menu-toggle');
      const menu = this.querySelector('#comp-mobile-menu');
      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
      }
    }
  }

  if (!customElements.get('iqra-header')) {
    customElements.define('iqra-header', IqraHeader);
  }
})();
