/* HAYOT CHIPS — umumiy SVG belgilar kutubxonasi: gradientlar, bezak belgilari va 6 panel dizayni.
   Ushbu faylni vacrispud-qadoq-uz.html va vacrispud-panellar-uz.html yuklaydi —
   panel dizaynini shu yerda tahrirlang, ikkala sahifa ham yangilanadi. */
document.body.insertAdjacentHTML('afterbegin', `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<defs>
  <!-- gradients -->
  <linearGradient id="gChip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#F6D07C"/><stop offset=".55" stop-color="#E8A93C"/><stop offset="1" stop-color="#D3902F"/>
  </linearGradient>
  <linearGradient id="gPotato" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#D9B072"/><stop offset="1" stop-color="#B4834A"/>
  </linearGradient>
  <linearGradient id="gBody" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#EFBE68"/><stop offset="1" stop-color="#CE9440"/>
  </linearGradient>
  <linearGradient id="gFrontBG" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#FFFDF6"/><stop offset="1" stop-color="#FBF3E2"/>
  </linearGradient>
  <radialGradient id="gTopBG" cx=".5" cy=".42" r=".75">
    <stop offset="0" stop-color="#FFFEFA"/><stop offset=".7" stop-color="#FCF5E6"/><stop offset="1" stop-color="#F6E9CE"/>
  </radialGradient>
  <linearGradient id="gKraft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#CFAE7E"/><stop offset="1" stop-color="#BC975F"/>
  </linearGradient>
  <radialGradient id="gOil" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#F9DE9C" stop-opacity=".55"/><stop offset="1" stop-color="#F9DE9C" stop-opacity="0"/>
  </radialGradient>
  <filter id="board" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 .45  0 0 0 0 .36  0 0 0 0 .24  0 0 0 .05 0"/>
    <feComposite operator="over" in2="SourceGraphic"/>
  </filter>
  <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0 0 L10 5 L0 10 z" fill="#6b6152"/>
  </marker>

  <!-- ── pufakcha ── -->
  <symbol id="sBubble" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#FFFFFF" fill-opacity=".18" stroke="#9CC4DE" stroke-opacity=".65" stroke-width="1.4"/>
    <path d="M6.5 9.5 A6.5 6.5 0 0 1 10 5.6" fill="none" stroke="#FFFFFF" stroke-opacity=".9" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>

  <!-- ── qarsildoq chips ── -->
  <symbol id="sChip" viewBox="0 0 60 42">
    <path d="M6 22 C4 12 14 4 30 4 C46 4 56 12 54 22 C56 30 47 38 30 38 C13 38 4 30 6 22 Z"
          fill="url(#gChip)" stroke="#B67A26" stroke-width="1.6"/>
    <path d="M12 20 C12 13 20 9 30 9" fill="none" stroke="#FBE3A4" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>
    <circle cx="22" cy="24" r="1.5" fill="#B67A26" opacity=".5"/>
    <circle cx="36" cy="18" r="1.3" fill="#B67A26" opacity=".5"/>
    <circle cx="41" cy="27" r="1.2" fill="#B67A26" opacity=".45"/>
  </symbol>

  <!-- ── kartoshka + barglar ── -->
  <symbol id="sPotato" viewBox="0 0 64 48">
    <ellipse cx="32" cy="27" rx="26" ry="18" fill="url(#gPotato)" stroke="#8A5A28" stroke-width="1.6"/>
    <ellipse cx="22" cy="22" rx="3" ry="2" fill="#8A5A28" opacity=".35"/>
    <ellipse cx="40" cy="31" rx="2.6" ry="1.8" fill="#8A5A28" opacity=".35"/>
    <ellipse cx="33" cy="20" rx="2" ry="1.4" fill="#8A5A28" opacity=".3"/>
    <path d="M38 12 C42 4 52 2 56 6 C52 12 44 14 38 12 Z" fill="#7BAE4E" stroke="#4F7A32" stroke-width="1.2"/>
    <path d="M36 12 C32 4 24 2 19 5 C22 12 30 14 36 12 Z" fill="#8FBF5A" stroke="#4F7A32" stroke-width="1.2"/>
  </symbol>

  <!-- ── ko'kat novdasi ── -->
  <symbol id="sHerb" viewBox="0 0 30 52">
    <path d="M15 50 C15 34 15 18 15 4" fill="none" stroke="#4F7A32" stroke-width="2" stroke-linecap="round"/>
    <g fill="#7BAE4E" stroke="#4F7A32" stroke-width=".9">
      <path d="M15 10 C10 8 6 10 5 15 C10 16 14 14 15 10Z"/>
      <path d="M15 10 C20 8 24 10 25 15 C20 16 16 14 15 10Z"/>
      <path d="M15 22 C10 20 6 22 5 27 C10 28 14 26 15 22Z"/>
      <path d="M15 22 C20 20 24 22 25 27 C20 28 16 26 15 22Z"/>
      <path d="M15 34 C10 32 6 34 5 39 C10 40 14 38 15 34Z"/>
      <path d="M15 34 C20 32 24 34 25 39 C20 40 16 38 15 34Z"/>
    </g>
  </symbol>

  <!-- ── paprika qalampiri ── -->
  <symbol id="sChili" viewBox="0 0 34 60">
    <path d="M17 10 C28 12 26 34 20 48 C17 54 12 56 10 52 C6 44 4 20 12 11 Z" fill="#E0542E" stroke="#A93A1C" stroke-width="1.4"/>
    <path d="M14 10 C13 5 16 2 21 2 C20 6 18 9 14 10 Z" fill="#5C8A3A" stroke="#3F6626" stroke-width="1.2"/>
    <path d="M20 16 C22 22 22 32 19 42" fill="none" stroke="#F08A5C" stroke-width="2" stroke-linecap="round" opacity=".8"/>
  </symbol>

  <!-- ── qora murch donalari ── -->
  <symbol id="sPepper" viewBox="0 0 40 24">
    <circle cx="9" cy="14" r="6" fill="#3B2F28" stroke="#20180F" stroke-width="1"/>
    <circle cx="24" cy="9" r="5.4" fill="#4A3B31" stroke="#20180F" stroke-width="1"/>
    <circle cx="33" cy="17" r="4.6" fill="#3B2F28" stroke="#20180F" stroke-width="1"/>
    <circle cx="7.3" cy="12" r="1.4" fill="#7a6a5c"/>
    <circle cx="22.4" cy="7.4" r="1.2" fill="#7a6a5c"/>
  </symbol>

  <!-- ── dengiz tuzi kristallari ── -->
  <symbol id="sSalt" viewBox="0 0 40 26">
    <g fill="#FDFEFF" stroke="#B9CFDD" stroke-width="1" stroke-linejoin="round">
      <path d="M8 4 L14 8 L10 14 L4 10 Z"/>
      <path d="M22 10 L28 12 L26 19 L19 17 Z"/>
      <path d="M32 3 L37 6 L34 11 L29 8 Z"/>
    </g>
  </symbol>

  <!-- ── yengil yog' tomchisi ── -->
  <symbol id="sDrop" viewBox="0 0 24 32">
    <path d="M12 2 C16 10 21 15 21 21 A9 9 0 1 1 3 21 C3 15 8 10 12 2 Z" fill="#F6C445" fill-opacity=".85" stroke="#D3902F" stroke-width="1.4"/>
    <path d="M8 21 A4.5 4.5 0 0 0 11 25.6" fill="none" stroke="#FFF3CF" stroke-width="1.6" stroke-linecap="round"/>
  </symbol>

  <!-- ── maskot: oshpaz kartoshka ── -->
  <symbol id="sMascot" viewBox="0 0 150 150">
    <ellipse cx="65" cy="88" rx="58" ry="52" fill="url(#gOil)"/>
    <ellipse cx="48" cy="139" rx="13" ry="6.5" fill="#B4834A" stroke="#8A5A28" stroke-width="1.6"/>
    <ellipse cx="84" cy="139" rx="13" ry="6.5" fill="#B4834A" stroke="#8A5A28" stroke-width="1.6"/>
    <path d="M22 82 C10 74 6 62 12 52" fill="none" stroke="#8A5A28" stroke-width="7" stroke-linecap="round"/>
    <circle cx="12" cy="50" r="7" fill="#EFBE68" stroke="#8A5A28" stroke-width="1.8"/>
    <ellipse cx="66" cy="92" rx="46" ry="50" fill="url(#gBody)" stroke="#8A5A28" stroke-width="2.4"/>
    <ellipse cx="46" cy="112" rx="4.4" ry="3" fill="#8A5A28" opacity=".28"/>
    <ellipse cx="90" cy="104" rx="4" ry="2.6" fill="#8A5A28" opacity=".28"/>
    <ellipse cx="70" cy="126" rx="3.4" ry="2.2" fill="#8A5A28" opacity=".24"/>
    <path d="M108 92 C120 86 126 76 122 66" fill="none" stroke="#8A5A28" stroke-width="7" stroke-linecap="round"/>
    <circle cx="121" cy="64" r="7" fill="#EFBE68" stroke="#8A5A28" stroke-width="1.8"/>
    <use href="#sChip" x="102" y="38" width="36" height="25" transform="rotate(-18 120 50)"/>
    <ellipse cx="50" cy="80" rx="8.5" ry="10" fill="#fff" stroke="#5E3F22" stroke-width="1.8"/>
    <ellipse cx="80" cy="80" rx="8.5" ry="10" fill="#fff" stroke="#5E3F22" stroke-width="1.8"/>
    <circle cx="52" cy="82" r="3.8" fill="#3A2C1B"/><circle cx="53.4" cy="80.4" r="1.3" fill="#fff"/>
    <circle cx="78" cy="82" r="3.8" fill="#3A2C1B"/><circle cx="79.4" cy="80.4" r="1.3" fill="#fff"/>
    <circle cx="40" cy="97" r="6" fill="#F08A5C" opacity=".45"/>
    <circle cx="92" cy="97" r="6" fill="#F08A5C" opacity=".45"/>
    <path d="M50 102 C58 112 74 112 82 102" fill="#7A3A1E" stroke="#5E3F22" stroke-width="2"/>
    <path d="M58 107 C62 111 70 111 74 107 L74 105 C69 108 63 108 58 105 Z" fill="#F08A5C"/>
    <path d="M40 44 L92 44 L90 32 L42 32 Z" fill="#FFFFFF" stroke="#C9C2B4" stroke-width="1.8"/>
    <path d="M42 33 C30 32 26 20 36 14 C38 4 52 0 58 8 C62 -2 78 -2 82 8 C92 2 104 10 100 20 C104 28 96 34 90 33 Z"
          fill="#FFFFFF" stroke="#C9C2B4" stroke-width="1.8"/>
    <path d="M55 33 L56 44 M70 33 L70 44" stroke="#E6E1D6" stroke-width="1.6"/>
    <use href="#sBubble" x="2" y="18" width="13" height="13"/>
    <use href="#sBubble" x="112" y="104" width="16" height="16"/>
    <use href="#sBubble" x="10" y="112" width="10" height="10"/>
  </symbol>

  <!-- ── logo belgisi: yuklangan barg logotipi ── -->
  <symbol id="sMark" viewBox="0 0 48 48">
    <image href="data:image/png;base64,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" x="0" y="0" width="48" height="48"/>
  </symbol>

  <!-- ── to'liq logo lock-up ── -->
  <symbol id="sLogo" viewBox="0 0 252 52">
    <use href="#sMark" x="0" y="2" width="48" height="48"/>
    <text x="56" y="36" font-family="'Baloo 2',cursive" font-weight="800" font-size="32">
      <tspan fill="#5E3F22">HAYOT</tspan><tspan fill="#C8862E"> CHIPS</tspan></text>
    <text x="57" y="48" font-family="'Nunito Sans',sans-serif" font-weight="700" font-size="8" letter-spacing="1.8" fill="#3F5D28">PREMIUM KARTOSHKA SNEKLARI</text>
  </symbol>

  <!-- ── xususiyat ikonlari ── -->
  <symbol id="iVac" viewBox="0 0 32 32"><circle cx="16" cy="16" r="11" fill="none" stroke="#5C8A3A" stroke-width="2" stroke-dasharray="3 3"/><use href="#sChip" x="6" y="10" width="20" height="14"/></symbol>
  <symbol id="iTemp" viewBox="0 0 32 32"><rect x="13.5" y="4" width="5" height="16" rx="2.5" fill="none" stroke="#5C8A3A" stroke-width="2"/><circle cx="16" cy="24" r="5" fill="none" stroke="#5C8A3A" stroke-width="2"/><circle cx="16" cy="24" r="2.4" fill="#E0542E"/><path d="M16 21.5 V13" stroke="#E0542E" stroke-width="2.4" stroke-linecap="round"/></symbol>
  <symbol id="iOil" viewBox="0 0 32 32"><path d="M16 4 C19 9 23 13 23 18 A7 7 0 1 1 9 18 C9 13 13 9 16 4Z" fill="none" stroke="#5C8A3A" stroke-width="2"/><path d="M12 20 L20 20 M14 24 L18 24" stroke="#C8862E" stroke-width="2" stroke-linecap="round"/><path d="M22 8 L26 4 M26 8 L22 4" stroke="#E0542E" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="iCrisp" viewBox="0 0 32 32"><use href="#sChip" x="4" y="9" width="24" height="17"/><path d="M9 6 L11 3 M16 5 L16 2 M23 6 L21 3" stroke="#C8862E" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="iSpud" viewBox="0 0 32 32"><use href="#sPotato" x="2" y="4" width="28" height="22"/></symbol>
  <symbol id="iHerbs" viewBox="0 0 32 32"><use href="#sHerb" x="9" y="2" width="15" height="28"/></symbol>
  <symbol id="iNoCol" viewBox="0 0 32 32"><circle cx="12" cy="13" r="3.4" fill="none" stroke="#5C8A3A" stroke-width="2"/><circle cx="20" cy="13" r="3.4" fill="none" stroke="#C8862E" stroke-width="2"/><circle cx="16" cy="20" r="3.4" fill="none" stroke="#E0542E" stroke-width="2"/><line x1="5" y1="27" x2="27" y2="5" stroke="#A93A1C" stroke-width="2.4" stroke-linecap="round"/></symbol>
  <symbol id="iNoFlav" viewBox="0 0 32 32"><path d="M13 4 h6 M14.5 4 v8 L9 22 a4 4 0 0 0 3.6 6 h6.8 A4 4 0 0 0 23 22 L17.5 12 V4" fill="none" stroke="#5C8A3A" stroke-width="2" stroke-linejoin="round"/><line x1="5" y1="28" x2="27" y2="5" stroke="#A93A1C" stroke-width="2.4" stroke-linecap="round"/></symbol>
  <symbol id="iTex" viewBox="0 0 32 32"><path d="M5 12 L10 8 L15 12 L20 8 L25 12" fill="none" stroke="#5C8A3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 20 L10 16 L15 20 L20 16 L25 20" fill="none" stroke="#C8862E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 28 L10 24 L15 28 L20 24 L25 28" fill="none" stroke="#E8A93C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="iFlav" viewBox="0 0 32 32"><path d="M16 3 L19 10 L27 11 L21 16.5 L23 25 L16 21 L9 25 L11 16.5 L5 11 L13 10 Z" fill="none" stroke="#C8862E" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="15" r="2.2" fill="#5C8A3A"/></symbol>

  <!-- ── shtrix-kod va QR o'rinbosarlari ── -->
  <symbol id="sBarcode" viewBox="0 0 60 34">
    <rect width="60" height="34" fill="#fff" stroke="#B9B1A0" stroke-width=".8"/>
    <g fill="#2A2118">
      <rect x="5" y="4" width="1.6" height="21"/><rect x="8" y="4" width=".9" height="21"/><rect x="10.5" y="4" width="2.4" height="21"/>
      <rect x="14.5" y="4" width=".9" height="21"/><rect x="17" y="4" width="1.6" height="21"/><rect x="20" y="4" width="3" height="21"/>
      <rect x="24.5" y="4" width=".9" height="21"/><rect x="27" y="4" width="1.6" height="21"/><rect x="30" y="4" width=".9" height="21"/>
      <rect x="32.5" y="4" width="2.4" height="21"/><rect x="36.5" y="4" width=".9" height="21"/><rect x="39" y="4" width="1.6" height="21"/>
      <rect x="42" y="4" width="3" height="21"/><rect x="46.5" y="4" width=".9" height="21"/><rect x="49" y="4" width="1.6" height="21"/>
      <rect x="52" y="4" width="2.4" height="21"/>
    </g>
    <text x="30" y="31" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="4.6" fill="#2A2118">4 780123 456789</text>
  </symbol>
  <symbol id="sQR" viewBox="0 0 34 34">
    <rect width="34" height="34" fill="#fff" stroke="#B9B1A0" stroke-width=".8"/>
    <g fill="#2A2118">
      <path d="M4 4h9v9H4zM6 6h5v5H6z" fill-rule="evenodd"/>
      <path d="M21 4h9v9h-9zM23 6h5v5h-5z" fill-rule="evenodd"/>
      <path d="M4 21h9v9H4zM6 23h5v5H6z" fill-rule="evenodd"/>
      <rect x="16" y="5" width="2.4" height="2.4"/><rect x="16" y="10" width="2.4" height="2.4"/>
      <rect x="5" y="16" width="2.4" height="2.4"/><rect x="10" y="16" width="2.4" height="2.4"/>
      <rect x="16" y="16" width="2.4" height="2.4"/><rect x="21" y="16" width="2.4" height="2.4"/><rect x="26" y="16" width="2.4" height="2.4"/>
      <rect x="16" y="21" width="2.4" height="2.4"/><rect x="21" y="21" width="2.4" height="2.4"/>
      <rect x="26" y="22" width="2.4" height="2.4"/><rect x="16" y="26" width="2.4" height="2.4"/>
      <rect x="22" y="27" width="2.4" height="2.4"/><rect x="27" y="27" width="2.4" height="2.4"/>
    </g>
  </symbol>

  <!-- ── ta'm belgilash doirasi ── -->
  <symbol id="sFlavCircle" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="8" fill="#FFFFFF" stroke="#8A5A28" stroke-width="1.8"/>
    <circle cx="10" cy="10" r="5.2" fill="none" stroke="#E4DFD4" stroke-width=".8" stroke-dasharray="1.6 1.6"/>
  </symbol>

  <!-- ══════════ OLD PANEL · 400 × 150 mm ══════════ -->
  <symbol id="pFront" viewBox="0 0 400 150">
    <rect width="400" height="150" fill="url(#gFrontBG)"/>
    <rect width="400" height="150" fill="transparent" filter="url(#board)" opacity=".55"/>
    <use href="#sBubble" x="112" y="8" width="12" height="12" opacity=".4"/>
    <use href="#sBubble" x="300" y="10" width="9" height="9" opacity=".4"/>
    <use href="#sBubble" x="268" y="84" width="10" height="10" opacity=".35"/>
    <!-- ikonlar tasmasi -->
    <rect x="0" y="98" width="400" height="34" fill="#EFF6E4"/>
    <path d="M0 98 C70 93 330 103 400 97 L400 100 L0 100 Z" fill="#8FBF5A" opacity=".5"/>
    <!-- ta'm belgilash tasmasi -->
    <rect x="0" y="132" width="400" height="18" fill="#FFFFFF"/>
    <line x1="0" y1="132" x2="400" y2="132" stroke="#8FBF5A" stroke-width="1"/>
    <!-- maskot va uchayotgan chipslar -->
    <use href="#sMascot" x="6" y="5" width="90" height="90"/>
    <use href="#sChip" x="86" y="12" width="24" height="17" transform="rotate(-14 98 20)"/>
    <use href="#sChip" x="92" y="66" width="20" height="14" transform="rotate(20 102 73)"/>
    <path d="M90 34 C99 40 101 52 94 60" fill="none" stroke="#E8A93C" stroke-width="1.3" stroke-dasharray="3 3" opacity=".7"/>
    <!-- logo va sarlavhalar -->
    <use href="#sLogo" x="126" y="5" width="152" height="31"/>
    <text x="126" y="55" font-family="'Baloo 2',cursive" font-weight="800" font-size="18" fill="#5E3F22">Vakuumda Qovurilgan</text>
    <text x="126" y="75" font-family="'Baloo 2',cursive" font-weight="800" font-size="18" fill="#C8862E">Kartoshka Chipslari</text>
    <path d="M126 82 C170 87 230 87 288 81" fill="none" stroke="#8FBF5A" stroke-width="3" stroke-linecap="round"/>
    <text x="126" y="93" font-family="'Nunito Sans',sans-serif" font-style="italic" font-weight="600" font-size="8.6" fill="#3F5D28">Tabiiy qarsildoq. Yengil qovurilgan.</text>
    <!-- sof og'irlik doirasi -->
    <g transform="translate(348,45)">
      <circle r="26" fill="#E8A93C" stroke="#C8862E" stroke-width="2"/>
      <circle r="21" fill="none" stroke="#FFF6DF" stroke-width="1.5" stroke-dasharray="2.8 2.4"/>
      <text y="0" text-anchor="middle" dominant-baseline="central" font-family="'Baloo 2',cursive" font-weight="800" font-size="18" fill="#FFFFFF" stroke="#8A5A28" stroke-width=".5">2 kg</text>
    </g>
    <use href="#sSalt" x="298" y="80" width="20" height="13"/>
    <text x="396" y="95" text-anchor="end" font-family="'Nunito Sans',sans-serif" font-size="4.2" fill="#6b6152">*Oddiy usulda qovurilgan kartoshka chipslariga nisbatan.</text>
    <!-- 10 ta xususiyat belgisi -->
    <g font-family="'Nunito Sans',sans-serif" font-weight="700" font-size="4.9" fill="#3A2C1B" text-anchor="middle">
      <g transform="translate(20,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iVac" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Vakuumda</text><text x="9" y="28">qovurilgan</text></g>
      <g transform="translate(57,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iTemp" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Pishirish harorati</text><text x="9" y="28">115°C dan past</text></g>
      <g transform="translate(94,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iOil" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Kam yog'</text><text x="9" y="28">saqlaydi</text></g>
      <g transform="translate(131,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iCrisp" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Tabiiy</text><text x="9" y="28">qarsildoq</text></g>
      <g transform="translate(168,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iSpud" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Haqiqiy</text><text x="9" y="28">kartoshkadan</text></g>
      <g transform="translate(205,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iHerbs" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Tabiiy</text><text x="9" y="28">ziravorlar</text></g>
      <g transform="translate(242,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iNoCol" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Sun'iy</text><text x="9" y="28">bo'yoqlarsiz</text></g>
      <g transform="translate(279,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iNoFlav" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Sun'iy ta'm</text><text x="9" y="28">beruvchilarsiz</text></g>
      <g transform="translate(316,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iTex" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Yaxshi</text><text x="9" y="28">tekstura</text></g>
      <g transform="translate(353,100)"><circle cx="9" cy="8" r="8.4" fill="#fff" stroke="#8FBF5A" stroke-width="1.1"/><use href="#iFlav" x="2.5" y="1.5" width="13" height="13"/><text x="9" y="22">Tabiiy kartoshka</text><text x="9" y="28">ta'mli</text></g>
    </g>
    <!-- ta'm belgilash: 4 doira -->
    <g font-family="'Nunito Sans',sans-serif" fill="#3A2C1B">
      <text x="8" y="144" font-weight="800" font-size="6" fill="#5E3F22">TA'MI (belgilang):</text>
      <use href="#sFlavCircle" x="76" y="135" width="12" height="12"/>
      <text x="91" y="144" font-weight="700" font-size="6">Tuzli</text>
      <use href="#sFlavCircle" x="116" y="135" width="12" height="12"/>
      <text x="131" y="144" font-weight="700" font-size="6">Pishloqli</text>
      <use href="#sFlavCircle" x="170" y="135" width="12" height="12"/>
      <text x="185" y="144" font-weight="700" font-size="6">Tabiiy ziravorli</text>
      <use href="#sFlavCircle" x="248" y="135" width="12" height="12"/>
      <text x="263" y="144" font-weight="700" font-size="6">Kolbasali</text>
      <text x="396" y="144" text-anchor="end" font-size="4.4" fill="#9a9182">Qadoqlashda shtamp bilan belgilanadi</text>
    </g>
  </symbol>

  <!-- ══════════ ORQA PANEL · 400 × 150 mm ══════════ -->
  <symbol id="pBack" viewBox="0 0 400 150">
    <rect width="400" height="150" fill="#FCFAF3"/>
    <rect width="400" height="150" fill="transparent" filter="url(#board)" opacity=".5"/>
    <use href="#sLogo" x="10" y="6" width="104" height="21"/>
    <!-- Oziqaviy qiymati -->
    <g transform="translate(10,32)">
      <rect width="118" height="110" fill="#fff" stroke="#3A2C1B" stroke-width="1.4"/>
      <text x="6" y="13" font-family="'Baloo 2',cursive" font-weight="800" font-size="10.5" fill="#3A2C1B">Oziqaviy qiymati</text>
      <line x1="6" y1="17" x2="112" y2="17" stroke="#3A2C1B" stroke-width="2.4"/>
      <text x="6" y="24" font-size="5" font-weight="700" fill="#3A2C1B">Har 100 g da · Qutida 20 porsiya</text>
      <g stroke="#CFC8B8" stroke-width=".7">
        <line x1="6" y1="30" x2="112" y2="30"/><line x1="6" y1="41" x2="112" y2="41"/>
        <line x1="6" y1="52" x2="112" y2="52"/><line x1="6" y1="63" x2="112" y2="63"/>
        <line x1="6" y1="74" x2="112" y2="74"/><line x1="6" y1="85" x2="112" y2="85"/>
      </g>
      <g font-size="5.4" fill="#3A2C1B">
        <text x="6" y="38">Energetik qiymati</text><text x="112" y="38" text-anchor="end" font-weight="700">666 kJ</text>
        <text x="6" y="49">Kaloriyaligi</text><text x="112" y="49" text-anchor="end" font-weight="700">159 kkal</text>
        <text x="6" y="60">Yog'lar</text><text x="112" y="60" text-anchor="end" font-weight="700">9.6 g</text>
        <text x="6" y="71">Oqsillar</text><text x="112" y="71" text-anchor="end" font-weight="700">0.0 g</text>
        <text x="6" y="82">Tuz</text><text x="112" y="82" text-anchor="end" font-weight="700">1.6 g</text>
      </g>
    </g>
    <!-- Tarkibi + saqlash -->
    <g transform="translate(140,32)" font-size="5.4" fill="#3A2C1B">
      <text y="8" font-family="'Baloo 2',cursive" font-weight="700" font-size="8.5" fill="#5E3F22">Tarkibi</text>
      <g font-size="4.4" fill="#3A2C1B">
        <text y="15.5"><tspan font-weight="800">A)</tspan> Kartoshka, Semechka yog'i, tuz,</text>
        <text y="21.5"><tspan font-weight="800">B)</tspan> Kartoshka, Semechka yog'i, tuz,</text>
        <text y="27.5">tabiiy ziravorlar, <tspan font-weight="800">C)</tspan> Kartoshka,</text>
        <text y="33.5">Semechka yog'i, tuz, boshqa..., <tspan font-weight="800">D)</tspan></text>
        <text y="39.5">Kartoshka, Semechka yog'i, tuz, boshqa...</text>
      </g>
      <text y="60" font-family="'Baloo 2',cursive" font-weight="700" font-size="8.5" fill="#5E3F22">Saqlash shartlari</text>
      <g font-size="5" fill="#3A2C1B">
        <text y="70">Salqin va quruq joyda saqlang.</text>
        <text y="77">To'g'ridan-to'g'ri quyosh nuridan asrang.</text>
      </g>
    </g>
    <!-- Ishlab chiqaruvchi -->
    <g transform="translate(266,32)" font-size="5.4" fill="#3A2C1B">
      <text y="8" font-family="'Baloo 2',cursive" font-weight="700" font-size="7.8" fill="#5E3F22">Ishlab chiqaruvchi</text>
      <g font-size="4.8" fill="#3A2C1B">
        <text y="18">220204, Xorazm viloyati,</text>
        <text y="25">Bog'ot tumani,</text>
        <text y="32">O'zbekiston Respublikasi.</text>
      </g>
      <rect y="48" width="66" height="18" fill="none" stroke="#CFC8B8" stroke-width=".8" stroke-dasharray="2 2"/>
      <text x="4" y="56" font-family="'IBM Plex Mono',monospace" font-size="4.6" fill="#9a9182">PARTIYA / LOT №</text>
      <text x="4" y="62.5" font-family="'IBM Plex Mono',monospace" font-size="4.6" fill="#9a9182">MUDDATI: KK.OO.YYYY</text>
      <text y="80" font-size="4.8" fill="#6b6152">100% haqiqiy kartoshka bo'laklaridan.</text>
      <text y="87" font-size="4.8" fill="#6b6152">Savol bormi? QR kodni skanerlang →</text>
    </g>
    <!-- shtrix-kod + QR -->
    <use href="#sBarcode" x="340" y="34" width="52" height="30"/>
    <use href="#sQR" x="352" y="72" width="30" height="30"/>
    <text x="367" y="110" text-anchor="middle" font-size="4.4" fill="#9a9182">Retseptlar uchun skanerlang</text>
    <rect x="0" y="140" width="400" height="10" fill="#EFF6E4"/>
    <text x="200" y="147" text-anchor="middle" font-size="4.6" fill="#3F5D28" font-weight="700">HAYOT CHIPS · Tabiiy qarsildoq. Yengil qovurilgan. · www.bogotmaster.org</text>
  </symbol>

  <!-- ══════════ CHAP YON PANEL · 300 × 150 mm — jarayon infografikasi ══════════ -->
  <symbol id="pLeft" viewBox="0 0 300 150">
    <rect width="300" height="150" fill="#FBF6E9"/>
    <rect width="300" height="150" fill="transparent" filter="url(#board)" opacity=".5"/>
    <text x="150" y="24" text-anchor="middle" font-family="'Baloo 2',cursive" font-weight="800" font-size="14" fill="#5E3F22">Vakuumda Qovurish Qanday Ishlaydi</text>
    <path d="M60 29 C110 33 190 33 240 29" fill="none" stroke="#8FBF5A" stroke-width="2.4" stroke-linecap="round"/>
    <g text-anchor="middle" font-family="'Nunito Sans',sans-serif" font-weight="700" font-size="6.4" fill="#3A2C1B">
      <g transform="translate(34,70)">
        <circle r="17" fill="#fff" stroke="#C8862E" stroke-width="1.8"/>
        <use href="#sPotato" x="-13" y="-11" width="26" height="20"/>
        <text y="28">Sifatli</text><text y="36">kartoshka</text>
      </g>
      <path d="M55 70 H73" stroke="#8A5A28" stroke-width="2" marker-end="url(#arr)"/>
      <g transform="translate(92,70)">
        <circle r="17" fill="#fff" stroke="#5C8A3A" stroke-width="1.8"/>
        <circle r="12" fill="none" stroke="#9CC4DE" stroke-width="1.2" stroke-dasharray="2.6 2.6"/>
        <use href="#sChip" x="-10" y="-7" width="20" height="14"/>
        <text y="28">Vakuumda</text><text y="36">qovurish</text>
      </g>
      <path d="M113 70 H131" stroke="#8A5A28" stroke-width="2" marker-end="url(#arr)"/>
      <g transform="translate(150,70)">
        <circle r="17" fill="#fff" stroke="#E0542E" stroke-width="1.8"/>
        <use href="#iTemp" x="-8" y="-11" width="16" height="16"/>
        <text x="0" y="10" font-size="6" fill="#E0542E" font-weight="800">&lt;115°C</text>
        <text y="28">Past</text><text y="36">harorat</text>
      </g>
      <path d="M171 70 H189" stroke="#8A5A28" stroke-width="2" marker-end="url(#arr)"/>
      <g transform="translate(208,70)">
        <circle r="17" fill="#fff" stroke="#C8862E" stroke-width="1.8"/>
        <use href="#sDrop" x="-6" y="-12" width="12" height="16"/>
        <path d="M-1 7 L-1 13 M-4 10 L-1 13 L2 10" stroke="#5C8A3A" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <text y="28">Kam yog'</text><text y="36">shimiladi</text>
      </g>
      <path d="M229 70 H247" stroke="#8A5A28" stroke-width="2" marker-end="url(#arr)"/>
      <g transform="translate(266,70)">
        <circle r="17" fill="#fff" stroke="#5C8A3A" stroke-width="1.8"/>
        <use href="#iCrisp" x="-9" y="-9" width="18" height="18"/>
        <text y="28">Premium</text><text y="36">chips</text>
      </g>
    </g>
    <use href="#sBubble" x="16" y="116" width="12" height="12" opacity=".55"/>
    <use href="#sBubble" x="34" y="124" width="8" height="8" opacity=".5"/>
    <use href="#sBubble" x="268" y="118" width="10" height="10" opacity=".5"/>
    <text x="150" y="124" text-anchor="middle" font-size="6.4" font-style="italic" fill="#3F5D28" font-weight="600">Vakuum ostida yog' parchalanmaydi</text>
    <text x="150" y="133" text-anchor="middle" font-size="6.4" font-style="italic" fill="#3F5D28" font-weight="600">va oksidlanmaydi</text>
    <text x="150" y="144" text-anchor="middle" font-size="5" fill="#9a9182">*Oddiy usulda qovurilgan kartoshka chipslariga nisbatan.</text>
  </symbol>

  <!-- ══════════ O'NG YON PANEL · 300 × 150 mm — javon bildbordi ══════════ -->
  <symbol id="pRight" viewBox="0 0 300 150">
    <rect width="300" height="150" fill="url(#gFrontBG)"/>
    <rect width="300" height="150" fill="transparent" filter="url(#board)" opacity=".5"/>
    <use href="#sBubble" x="18" y="16" width="14" height="14" opacity=".5"/>
    <use href="#sBubble" x="262" y="24" width="11" height="11" opacity=".5"/>
    <use href="#sBubble" x="244" y="112" width="9" height="9" opacity=".4"/>
    <use href="#sLogo" x="52" y="14" width="196" height="40"/>
    <text x="150" y="76" text-anchor="middle" font-family="'Baloo 2',cursive" font-weight="800" font-size="14" fill="#5E3F22">Vakuumda Qovurilgan Kartoshka Chipslari</text>
    <text x="150" y="92" text-anchor="middle" font-family="'Nunito Sans',sans-serif" font-style="italic" font-weight="600" font-size="9" fill="#3F5D28">Tabiiy qarsildoq. Yengil qovurilgan.</text>
    <use href="#sChip" x="30" y="98" width="30" height="21" transform="rotate(-12 45 108)"/>
    <use href="#sHerb" x="66" y="96" width="14" height="26"/>
    <use href="#sSalt" x="86" y="106" width="24" height="15"/>
    <g transform="translate(150,118)">
      <circle r="20" fill="#E8A93C" stroke="#C8862E" stroke-width="1.6"/>
      <text y="0" text-anchor="middle" dominant-baseline="central" font-family="'Baloo 2',cursive" font-weight="800" font-size="14" fill="#fff" stroke="#8A5A28" stroke-width=".4">2 kg</text>
    </g>
    <use href="#sChili" x="192" y="94" width="15" height="27"/>
    <use href="#sPepper" x="212" y="108" width="24" height="14"/>
    <use href="#sPotato" x="240" y="98" width="34" height="26"/>
  </symbol>

  <!-- ══════════ USTKI PANEL · 400 × 300 mm — asosiy badiiy yuz ══════════ -->
  <symbol id="pTop" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="url(#gTopBG)"/>
    <rect width="400" height="300" fill="transparent" filter="url(#board)" opacity=".55"/>
    <ellipse cx="200" cy="170" rx="130" ry="95" fill="url(#gOil)"/>
    <path d="M96 128 C88 116 92 104 104 100 M310 132 C320 122 318 108 306 102" fill="none" stroke="#F6C445" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>
    <use href="#sDrop" x="88" y="86" width="10" height="14" opacity=".8"/>
    <use href="#sDrop" x="308" y="88" width="8" height="11" opacity=".8"/>
    <g opacity=".75">
      <use href="#sBubble" x="34" y="196" width="18" height="18"/>
      <use href="#sBubble" x="54" y="160" width="12" height="12"/>
      <use href="#sBubble" x="40" y="128" width="9" height="9"/>
      <use href="#sBubble" x="346" y="200" width="16" height="16"/>
      <use href="#sBubble" x="332" y="164" width="11" height="11"/>
      <use href="#sBubble" x="350" y="134" width="8" height="8"/>
      <path d="M46 226 C38 206 50 190 44 172" fill="none" stroke="#9CC4DE" stroke-width="1.4" stroke-dasharray="4 4" opacity=".7"/>
      <path d="M354 228 C362 208 350 192 356 174" fill="none" stroke="#9CC4DE" stroke-width="1.4" stroke-dasharray="4 4" opacity=".7"/>
    </g>
    <use href="#sLogo" x="85" y="16" width="230" height="47"/>
    <text x="200" y="86" text-anchor="middle" font-family="'Baloo 2',cursive" font-weight="800" font-size="17" fill="#5E3F22">Vakuumda Qovurilgan <tspan fill="#C8862E">Kartoshka Chipslari</tspan></text>
    <text x="200" y="100" text-anchor="middle" font-family="'Nunito Sans',sans-serif" font-style="italic" font-weight="600" font-size="9.6" fill="#3F5D28">Tabiiy qarsildoq. Yengil qovurilgan.</text>
    <use href="#sChip" x="86" y="126" width="40" height="28" transform="rotate(-24 106 140)"/>
    <use href="#sChip" x="118" y="98" width="34" height="24" transform="rotate(-10 135 110)"/>
    <use href="#sChip" x="250" y="98" width="34" height="24" transform="rotate(12 267 110)"/>
    <use href="#sChip" x="278" y="128" width="40" height="28" transform="rotate(26 298 142)"/>
    <use href="#sChip" x="132" y="222" width="34" height="24" transform="rotate(16 149 234)"/>
    <use href="#sChip" x="238" y="224" width="34" height="24" transform="rotate(-14 255 236)"/>
    <use href="#sMascot" x="132" y="106" width="157" height="157"/>
    <use href="#sPotato" x="14" y="236" width="66" height="50"/>
    <use href="#sPotato" x="64" y="254" width="50" height="38"/>
    <use href="#sHerb" x="112" y="252" width="18" height="34"/>
    <use href="#sChili" x="290" y="242" width="20" height="36"/>
    <use href="#sChili" x="308" y="250" width="16" height="30" transform="rotate(14 316 265)"/>
    <use href="#sPepper" x="330" y="266" width="30" height="18"/>
    <use href="#sHerb" x="270" y="248" width="17" height="32"/>
    <use href="#sSalt" x="352" y="242" width="32" height="20"/>
    <use href="#sSalt" x="166" y="270" width="24" height="15"/>
    <g fill="#3A2C1B" opacity=".7">
      <circle cx="226" cy="278" r="1.4"/><circle cx="234" cy="272" r="1.1"/><circle cx="220" cy="270" r="1"/>
    </g>
    <g transform="translate(360,42)">
      <circle r="26" fill="#E8A93C" stroke="#C8862E" stroke-width="2"/>
      <circle r="21" fill="none" stroke="#FFF6DF" stroke-width="1.4" stroke-dasharray="2.8 2.4"/>
      <text y="0" text-anchor="middle" dominant-baseline="central" font-family="'Baloo 2',cursive" font-weight="800" font-size="17" fill="#fff" stroke="#8A5A28" stroke-width=".5">2 kg</text>
    </g>
    <g transform="translate(40,42)">
      <circle r="26" fill="#5C8A3A"/>
      <circle r="21" fill="none" stroke="#DFF0CB" stroke-width="1.4" stroke-dasharray="2.8 2.4"/>
      <text y="-8" text-anchor="middle" font-size="6" font-weight="800" fill="#fff">HARORAT</text>
      <text y="4" text-anchor="middle" font-family="'Baloo 2',cursive" font-weight="800" font-size="11" fill="#F6C445">115°C</text>
      <text y="14" text-anchor="middle" font-size="6" font-weight="800" fill="#fff">DAN PAST</text>
    </g>
    <text x="200" y="295" text-anchor="middle" font-size="6.2" font-weight="700" fill="#8a7f6c">HAQIQIY KARTOSHKADAN · TABIIY ZIRAVORLAR · SUN'IY BO'YOQ VA TA'M BERUVCHILARSIZ</text>
  </symbol>

  <!-- ══════════ OSTKI PANEL · 400 × 300 mm — kraft xizmat yuzi ══════════ -->
  <symbol id="pBottom" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="url(#gKraft)"/>
    <rect width="400" height="300" fill="transparent" filter="url(#board)" opacity=".9"/>
    <!-- qayta ishlash bloki -->
    <g transform="translate(26,26)">
      <g transform="translate(18,18)" fill="#5E3F22">
        <path d="M-9 6 L6 6 L6 4 L12 7.5 L6 11 L6 9 L-9 9 Z"/>
        <path d="M-9 6 L6 6 L6 4 L12 7.5 L6 11 L6 9 L-9 9 Z" transform="rotate(120)"/>
        <path d="M-9 6 L6 6 L6 4 L12 7.5 L6 11 L6 9 L-9 9 Z" transform="rotate(240)"/>
      </g>
    </g>
    <g font-family="'IBM Plex Mono',monospace" fill="#5E3F22">
      <text x="26" y="78" font-size="8" font-weight="500">PAP 20 · GOFROKARTON</text>
      <text x="26" y="92" font-size="7">100% QAYTA ISHLANADI · TEKISLAB TOPSHIRING</text>
      <text x="26" y="106" font-size="7">FSC® SERTIFIKAT BELGISI [ O'RNI ]</text>
    </g>
    <rect x="272" y="26" width="102" height="54" fill="none" stroke="#5E3F22" stroke-width="1.4" stroke-dasharray="4 3"/>
    <g font-family="'IBM Plex Mono',monospace" font-size="7" fill="#5E3F22">
      <text x="280" y="44">ISHLAB CHIQ. LINIYA: __</text>
      <text x="280" y="57">SANA SHTAMPI JOYI</text>
      <text x="280" y="70">SMENA KODI: __</text>
    </g>
    <g opacity=".26"><use href="#sLogo" x="85" y="168" width="230" height="47"/></g>
    <g transform="translate(200,246)" text-anchor="middle" fill="#5E3F22">
      <path d="M0 8 L0 -14 M-8 -6 L0 -14 L8 -6" stroke="#5E3F22" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,-6)"/>
      <text y="18" font-family="'Nunito Sans',sans-serif" font-weight="800" font-size="9" letter-spacing="1.2">BU TOMONI PASTGA · USTKI PANELDAN OCHILADI</text>
      <text y="32" font-family="'IBM Plex Mono',monospace" font-size="6.6">EHTIYOT BO'LING · QURUQ SAQLANG · MAKS. TAXLAM: 6 QUTI</text>
    </g>
    <text x="200" y="292" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="6.4" fill="#5E3F22">KARTON REF: VS-VF-2KG-400300150 · DIZAYN KONSEPTI v2.0 (UZ)</text>
  </symbol>
</defs>
</svg>
`);
