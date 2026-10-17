/**
 * PVT. IQRA ACADEMY (ইকরা অ্যাকাডেমি) - Reusable Header Component
 * Can be used in any page by adding:
 * <script src="header.js"></script>
 * <iqra-header active="home"></iqra-header>
 */

(function() {
  const DEFAULT_ANNOUNCEMENT = "📢 ভর্তি চলছে ২০২৭ শিক্ষাবর্ষে! Pre-Nursery থেকে Class IX পর্যন্ত অনাবাসিক, ডে-বোর্ডিং ও আবাসিক বালিকা বিভাগে (Class V-IX) সীমিত আসনে ভর্তি চলছে। যোগাযোগ: ৯৭৭৫১২৩০৯৬ / ৯৬৪৭১০৯৪৮১";

  function getAnnouncement() {
    try {
      const data = localStorage.getItem('iqra_academy_data');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.announcement) return parsed.announcement;
      }
    } catch(e) {}
    return DEFAULT_ANNOUNCEMENT;
  }

  class IqraHeader extends HTMLElement {
    connectedCallback() {
      const active = this.getAttribute('active') || 'home';
      const announcement = getAnnouncement();

      this.innerHTML = `
        <!-- Top Info Bar -->
        <div class="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
          <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex flex-wrap items-center gap-4">
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-graduation-cap text-amber-400"></i>
                <span class="font-medium">UDISE Code:</span> <span class="text-amber-300 font-mono">19111008505</span>
              </span>
              <span class="hidden sm:inline-block text-emerald-600">|</span>
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-calendar-check text-amber-400"></i>
                <span>প্রতিষ্ঠিত: <b>২০১৫</b></span>
              </span>
              <span class="hidden md:inline-block text-emerald-600">|</span>
              <span class="hidden md:flex items-center gap-1">
                <i class="fa-solid fa-location-dot text-amber-400"></i>
                <span>যদুরহাটি, বাদুড়িয়া, উত্তর ২৪ পরগণা</span>
              </span>
            </div>

            <div class="flex items-center gap-3">
              <a href="tel:9775123096" class="flex items-center gap-1 text-emerald-200 hover:text-white transition">
                <i class="fa-solid fa-phone text-amber-400"></i>
                <span class="font-semibold">9775123096</span>
              </a>
              <span class="text-emerald-700">/</span>
              <a href="tel:9647109481" class="hidden sm:inline-block text-emerald-200 hover:text-white transition font-semibold">
                9647109481
              </a>
              <a href="https://wa.me/919775123096" target="_blank" rel="noopener" class="bg-green-600 hover:bg-green-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-semibold transition ml-1">
                <i class="fa-brands fa-whatsapp"></i>
                <span class="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Main Branding Header -->
        <header class="bg-white text-slate-800 shadow-sm border-b border-slate-100">
          <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <!-- Logo & Title -->
            <a href="index.html" class="flex items-center gap-3 md:gap-4 group">
              <img 
                src="https://res.cloudinary.com/u0z4riei/image/upload/v1792241337/WhatsApp_Image_2026-10-17_at_6.14.01_PM.jpg" 
                alt="Iqra Academy Logo" 
                class="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-emerald-600 shadow-sm object-cover group-hover:scale-105 transition duration-300"
              />
              <div>
                <div class="flex items-center gap-2">
                  <span class="bg-emerald-100 text-emerald-800 text-[10px] md:text-xs font-bold px-2 py-0.5 rounded tracking-wide uppercase">PVT.</span>
                  <span class="text-xs font-semibold text-emerald-700 tracking-wider">ESTD. 2015</span>
                </div>
                <h1 class="text-xl md:text-2xl lg:text-3xl font-extrabold text-emerald-900 leading-tight">
                  ইকরা অ্যাকাডেমি <span class="text-amber-600 text-base md:text-xl font-bold font-serif">(IQRA ACADEMY)</span>
                </h1>
                <p class="text-xs md:text-sm font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span class="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  আবাসিক গার্লস মিশন <span class="text-slate-400 font-normal">|</span> Residential Girls' Mission
                </p>
                <p class="hidden sm:block text-[11px] text-slate-500 mt-0.5 font-medium">
                  শিক্ষা • শৃঙ্খলা • আত্মবিশ্বাস • উজ্জ্বল ভবিষ্যৎ
                </p>
              </div>
            </a>

            <!-- Quick Action Badges (Desktop) -->
            <div class="hidden lg:flex items-center gap-3">
              <div class="text-right border-r border-slate-200 pr-3">
                <span class="text-[11px] text-slate-500 uppercase font-semibold block">শিক্ষাবর্ষ ২০২৭</span>
                <span class="text-sm font-bold text-amber-700">ভর্তি চলছে (Pre-Nursery - IX)</span>
              </div>
              <a href="#admission-apply" class="btn-apply-header bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition flex items-center gap-2 text-sm">
                <i class="fa-solid fa-file-pen text-amber-300"></i>
                <span>ভর্তি আবেদন</span>
              </a>
            </div>

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-toggle" aria-label="Toggle Navigation Menu" class="lg:hidden text-emerald-900 hover:text-emerald-700 p-2 rounded-lg border border-emerald-100 focus:outline-none">
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </header>

        <!-- Navigation Bar -->
        <nav class="bg-emerald-900 text-white sticky top-0 z-40 shadow-md">
          <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <!-- Desktop Links -->
            <div class="hidden lg:flex items-center gap-1 py-1">
              <a href="index.html#home" class="nav-item ${active === 'home' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded text-sm transition flex items-center gap-1.5">
                <i class="fa-solid fa-house text-xs"></i>
                <span>হোম</span>
              </a>
              <a href="index.html#about" class="nav-item ${active === 'about' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded text-sm transition flex items-center gap-1.5">
                <i class="fa-solid fa-school text-xs"></i>
                <span>পরিচিতি</span>
              </a>
              <a href="index.html#academics" class="nav-item ${active === 'academics' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded text-sm transition flex items-center gap-1.5">
                <i class="fa-solid fa-book-open-reader text-xs"></i>
                <span>পঠন-পাঠন</span>
              </a>
              <a href="index.html#management" class="nav-item ${active === 'management' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded text-sm transition flex items-center gap-1.5">
                <i class="fa-solid fa-users-gear text-xs"></i>
                <span>পরিচালনা</span>
              </a>
              <a href="index.html#residential" class="nav-item ${active === 'residential' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded text-sm transition flex items-center gap-1.5">
                <i class="fa-solid fa-hotel text-xs"></i>
                <span>গার্লস মিশন হোস্টেল</span>
              </a>
              <a href="index.html#contact" class="nav-item ${active === 'contact' ? 'bg-emerald-800 text-amber-300 font-bold' : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'} px-4 py-2.5 rounded text-sm transition flex items-center gap-1.5">
                <i class="fa-solid fa-envelope text-xs"></i>
                <span>যোগাযোগ</span>
              </a>
            </div>

            <!-- Admin Portal Link (Right Side) -->
            <div class="hidden lg:flex items-center gap-2">
              <a href="admin.html" class="nav-item ${active === 'admin' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-emerald-950 hover:bg-amber-500 hover:text-slate-900 text-amber-300'} px-3 py-1.5 rounded text-xs font-bold transition flex items-center gap-1.5 border border-amber-400/40 shadow-inner">
                <i class="fa-solid fa-lock text-xs"></i>
                <span>অ্যাডমিন / ডেটা এন্ট্রি</span>
              </a>
            </div>
          </div>

          <!-- Mobile Dropdown Menu -->
          <div id="mobile-menu" class="hidden lg:hidden bg-emerald-950 border-t border-emerald-800 px-4 py-3 space-y-1">
            <a href="index.html#home" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-300">হোম</a>
            <a href="index.html#about" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-300">পরিচিতি</a>
            <a href="index.html#academics" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-300">পঠন-পাঠন (Day School & Boarding)</a>
            <a href="index.html#management" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-300">পরিচালনা (Director & Secretary)</a>
            <a href="index.html#residential" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-300">আবাসিক গার্লস মিশন</a>
            <a href="index.html#contact" class="block px-3 py-2 rounded text-sm text-emerald-100 hover:bg-emerald-800 hover:text-amber-300">যোগাযোগ</a>
            <div class="pt-2 border-t border-emerald-800 flex flex-col gap-2">
              <a href="admin.html" class="block px-3 py-2 rounded text-sm bg-amber-500 text-slate-900 font-bold text-center">
                <i class="fa-solid fa-lock mr-1"></i> অ্যাডমিন ডেটা এন্ট্রি পোর্টাল
              </a>
            </div>
          </div>
        </nav>

        <!-- Dynamic Announcement Marquee -->
        <div class="bg-amber-50 border-y border-amber-200 py-1.5 px-4 overflow-hidden flex items-center shadow-inner">
          <div class="max-w-7xl mx-auto w-full flex items-center">
            <div class="bg-red-600 text-white text-[11px] md:text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 uppercase tracking-wider shrink-0 shadow-sm mr-3">
              <i class="fa-solid fa-bullhorn animate-bounce text-amber-200"></i>
              <span>ঘোষণা</span>
            </div>
            <div class="overflow-hidden relative flex-1 text-xs md:text-sm text-slate-800 font-semibold">
              <div class="marquee-content whitespace-nowrap inline-block animate-marquee hover:pause">
                ${announcement}
              </div>
            </div>
          </div>
        </div>
      `;

      // Wire mobile menu toggle
      const toggle = this.querySelector('#mobile-menu-toggle');
      const menu = this.querySelector('#mobile-menu');
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
