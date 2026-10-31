/**
 * PVT. IQRA ACADEMY (ইকরা অ্যাকাডেমি) - Reusable Footer Component
 * Usage:
 * <script src="footer.js"></script>
 * <iqra-footer></iqra-footer>
 */

(function() {
  class IqraFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-slate-950 text-slate-300 pt-12 pb-6 border-t-4 border-amber-500">
          <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <!-- Col 1: Brand & Intro -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/u0z4riei/image/upload/v1792241337/WhatsApp_Image_2026-10-17_at_6.14.01_PM.jpg" 
                  alt="Iqra Logo" 
                  class="w-12 h-12 rounded-full border border-amber-400 bg-white object-cover"
                />
                <div>
                  <h3 class="text-white font-bold text-lg leading-tight">ইকরা অ্যাকাডেমি</h3>
                  <p class="text-amber-400 text-xs font-semibold">আবাসিক গার্লস মিশন (Estd: 2015)</p>
                </div>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                ইসলামি আদর্শ, নৈতিক মূল্যবোধ ও আধুনিক শিক্ষার এক অনন্য শিক্ষাপ্রতিষ্ঠান। কন্যাশিক্ষার্থীদের জন্য সুশৃঙ্খল, নিরাপদ ও যত্নশীল আবাসিক এবং ডে-বোর্ডিং পরিবেশ।
              </p>
              <div class="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-xs">
                <div class="flex justify-between items-center text-slate-400 mb-1">
                  <span>UDISE কোড:</span>
                  <span class="text-amber-300 font-mono font-bold">19111008505</span>
                </div>
                <div class="flex justify-between items-center text-slate-400">
                  <span>শাখা সমূহ:</span>
                  <span class="text-emerald-400 font-medium">Day Scholar, Day Boarding, Hostel</span>
                </div>
              </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="space-y-3">
              <h4 class="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2 flex items-center gap-2">
                <i class="fa-solid fa-link text-amber-400"></i> দ্রুত লিংক
              </h4>
              <ul class="space-y-2 text-xs">
                <li><a href="index.html#home" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> হোম পেজ</a></li>
                <li><a href="index.html#about" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> আমাদের পরিচিতি ও আদর্শ</a></li>
                <li><a href="index.html#streams" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> ৪টি শিক্ষাধারা</a></li>
                <li><a href="index.html#residential" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> আবাসিক গার্লস মিশন</a></li>
                <li><a href="index.html#management" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> পরিচালনা (Director & Secretary)</a></li>
                <li><a href="index.html#admissions" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> ভর্তি নির্দেশিকা ২০২৭</a></li>
                <li><a href="index.html#notices" class="hover:text-amber-300 transition flex items-center gap-2"><i class="fa-solid fa-chevron-right text-[10px] text-emerald-500"></i> নোটিশ বোর্ড</a></li>
                <li><a href="admin.html" class="hover:text-amber-300 transition flex items-center gap-2 text-amber-400 font-semibold"><i class="fa-solid fa-lock text-[10px]"></i> অ্যাডমিন পোর্টাল</a></li>
              </ul>
            </div>

            <!-- Col 3: Admission & Highlights -->
            <div class="space-y-3">
              <h4 class="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2 flex items-center gap-2">
                <i class="fa-solid fa-graduation-cap text-amber-400"></i> ভর্তি তথ্য ২০২৭
              </h4>
              <p class="text-xs text-slate-400">
                Pre-Nursery থেকে Class IX পর্যন্ত সীমিত আসনে ভর্তি চলছে।
              </p>
              <div class="space-y-2 text-xs">
                <div class="p-2 bg-emerald-950/60 rounded border border-emerald-900">
                  <span class="text-emerald-300 font-semibold block">আবাসিক গার্লস মিশন:</span>
                  <span class="text-slate-300">Class V থেকে Class IX (ছাত্রীদের জন্য বিশেষ সুরক্ষিত হোস্টেল)</span>
                </div>
                <div class="p-2 bg-slate-900 rounded border border-slate-800">
                  <span class="text-amber-300 font-semibold block">অনাবাসিক ও ডে-বোর্ডিং:</span>
                  <span class="text-slate-300">Pre-Nursery থেকে Class IX (বালক ও বালিকা)</span>
                </div>
              </div>
            </div>

            <!-- Col 4: Contact & Location -->
            <div class="space-y-3">
              <h4 class="text-white font-bold text-sm uppercase tracking-wider border-b border-emerald-800 pb-2 flex items-center gap-2">
                <i class="fa-solid fa-location-dot text-amber-400"></i> যোগাযোগ ও ঠিকানা
              </h4>
              <ul class="space-y-2.5 text-xs">
                <li class="flex items-start gap-2.5">
                  <i class="fa-solid fa-map-pin text-amber-400 mt-0.5"></i>
                  <span>Dakshin Shibpur, Jadurhati, Baduria, North 24 Parganas, West Bengal, PIN-743293</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <i class="fa-solid fa-phone text-amber-400"></i>
                  <a href="tel:9775123096" class="hover:text-white font-semibold font-mono">9775123096</a>
                  <span>/</span>
                  <a href="tel:9647109481" class="hover:text-white font-semibold font-mono">9647109481</a>
                </li>
                <li class="flex items-center gap-2.5">
                  <i class="fa-solid fa-envelope text-amber-400"></i>
                  <a href="mailto:iqra.ac100@gmail.com" class="hover:text-white">iqra.ac100@gmail.com</a>
                </li>
              </ul>
              <div class="pt-2 flex items-center gap-2">
                <a href="https://wa.me/919775123096" target="_blank" rel="noopener" class="bg-green-700 hover:bg-green-600 text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition">
                  <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp চ্যাট
                </a>
                <button id="comp-btn-scroll-top" class="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded text-xs transition ml-auto cursor-pointer" title="উপরে যান">
                  <i class="fa-solid fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Bottom Copyright Bar -->
          <div class="border-t border-slate-800 pt-6 px-4">
            <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
              <p>© ২০২৬-২০২৭ <b>PVT. IQRA ACADEMY (ইকরা অ্যাকাডেমি)</b> | সর্বস্বত্ব সংরক্ষিত।</p>
              <div style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
                <span>Developed By</span>
                <a href="https://shmwb.in" target="_blank" rel="noopener noreferrer" style="color: #d4af37; font-weight: 700; text-decoration: none; animation: shmBlinkPulse 1.5s infinite ease-in-out;">
                  SHMspace
                </a>
              </div>
              <p class="flex items-center gap-1">
                <i class="fa-solid fa-heart text-red-500"></i> শিক্ষা • শৃঙ্খলা • আত্মবিশ্বাস • উজ্জ্বল ভবিষ্যৎ
              </p>
            </div>
          </div>
        </footer>
      `;

      const btnTop = this.querySelector('#comp-btn-scroll-top');
      if (btnTop) {
        btnTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    }
  }

  if (!customElements.get('iqra-footer')) {
    customElements.define('iqra-footer', IqraFooter);
  }
})();