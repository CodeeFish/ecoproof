const EVIDENCE_TEMPLATES = {
  certification: {
    label: 'Third-party Certification',
    description: 'Verification of recognized standards such as EN 13432, FSC, or BPI.'
  },
  certificateAuthenticity: {
    label: 'Certificate Authenticity',
    description: 'Confirmation that certificate numbers exist and can be verified through official databases.'
  },
  labTesting: {
    label: 'Laboratory Testing',
    description: 'Publicly accessible lab testing supporting sustainability claims.'
  },
  lca: {
    label: 'Life Cycle Assessment',
    description: 'Published environmental life cycle assessment data comparing the product with conventional alternatives.'
  },
  emissions: {
    label: 'Carbon Emissions Transparency',
    description: 'Disclosure of Scope 1, 2, and 3 emissions data.'
  },
  materialComposition: {
    label: 'Material Composition Disclosure',
    description: 'Clear identification of raw materials and percentages of renewable, recycled, or conventional inputs.'
  },
  endOfLife: {
    label: 'End-of-Life Information',
    description: 'Clear disposal, recycling, or composting guidance.'
  },
  audit: {
    label: 'Independent Third-Party Audit',
    description: 'Verification that environmental claims have been reviewed or audited by an independent body.'
  },
  marketing: {
    label: 'Marketing Language Assessment',
    description: 'Identification of vague or potentially misleading claims lacking measurable support.'
  },
  docs: {
    label: 'Supporting Documentation',
    description: 'Availability of reports, EPDs, lab reports, or technical documentation.'
  }
};

const DB = {
  "aqua danone indonesia": {
    name: 'AQUA (Danone Indonesia)',
    cat: 'Bottled water · Beverage',
    sentimentOverrides: {
      certification: 'positive', certificateAuthenticity: 'neutral', labTesting: 'negative', lca: 'neutral',
      emissions: 'positive', materialComposition: 'positive', endOfLife: 'positive', audit: 'neutral',
      marketing: 'neutral', docs: 'positive'
    },
    summary: 'Bukti perusahaan mendukung beberapa aspek operasi dan kemasan, tetapi tidak membuktikan bahwa seluruh produk AQUA Life memiliki dampak lingkungan lebih rendah. Bukti tingkat perusahaan atau program tidak otomatis berlaku untuk setiap produk atau klaim.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'AQUA memiliki sertifikasi dan standar pihak ketiga untuk sejumlah aspek operasi dan kemasan. Sertifikasi ini bukan bukti bahwa seluruh produk AQUA Life memiliki dampak lingkungan lebih rendah.', descriptionEn: 'AQUA holds third-party certifications and standards for some operational and packaging aspects. These do not prove that every AQUA Life product has a lower environmental impact.' },
      { key: 'certificateAuthenticity', status: 'partial', description: 'Dokumen dan sertifikasi dapat ditelusuri melalui dokumentasi perusahaan dan/atau lembaga sertifikasi. Periksa validitas tiap sertifikat berdasarkan nomor, ruang lingkup, dan masa berlaku.', descriptionEn: 'Documents and certifications can be traced through company documentation and/or certification bodies. Check each certificate’s number, scope, and validity period.' },
      { key: 'labTesting', status: 'missing', description: 'Tidak ditemukan laporan uji laboratorium publik yang secara langsung membuktikan seluruh klaim lingkungan AQUA Life, termasuk perbandingan botolnya dengan botol PET konvensional.', descriptionEn: 'No public laboratory report was found that directly substantiates all AQUA Life environmental claims, including a comparison with conventional PET bottles.' },
      { key: 'lca', status: 'partial', description: 'Danone/AQUA menerbitkan informasi jejak lingkungan dan pendekatan siklus hidup dalam laporan keberlanjutan. Informasi ini tidak selalu berupa LCA independen yang spesifik untuk setiap SKU AQUA di Indonesia.', descriptionEn: 'Danone/AQUA publishes environmental footprint and life-cycle information in its sustainability reporting. This is not necessarily an independent LCA specific to every AQUA SKU sold in Indonesia.' },
      { key: 'emissions', status: 'ok', description: 'Danone menerbitkan informasi emisi dan target pengurangan emisi dalam laporan keberlanjutan, termasuk Scope 1, 2, dan 3.', descriptionEn: 'Danone publishes emissions information and reduction targets in its sustainability reporting, including Scope 1, 2, and 3.' },
      { key: 'materialComposition', status: 'ok', description: 'Penggunaan PET daur ulang (rPET) diungkapkan untuk produk tertentu, termasuk AQUA Life. Persentase harus dikaitkan dengan produk dan tahun yang tepat karena komposisi kemasan dapat berubah.', descriptionEn: 'Recycled PET (rPET) use is disclosed for certain products, including AQUA Life. Percentages should be tied to the specific product and year because packaging composition can change.' },
      { key: 'endOfLife', status: 'ok', description: 'AQUA mengomunikasikan program pengumpulan dan daur ulang botol plastik melalui inisiatif ekonomi sirkular dan pengelolaan sampah plastik.', descriptionEn: 'AQUA communicates plastic bottle collection and recycling programs through circular-economy and plastic-waste-management initiatives.' },
      { key: 'audit', status: 'partial', description: 'Sebagian informasi keberlanjutan perusahaan menjalani assurance atau verifikasi pihak ketiga. Ini tidak berarti setiap klaim pemasaran produk telah diaudit secara independen.', descriptionEn: 'Some corporate sustainability information undergoes third-party assurance or verification. This does not mean every product marketing claim has been independently audited.' },
      { key: 'marketing', status: 'partial', description: 'Klaim seperti “100% recycled PET” atau ekonomi sirkular perlu diperiksa ruang lingkupnya: botol, bahan PET, seluruh kemasan, atau keseluruhan produk.', descriptionEn: 'Claims such as “100% recycled PET” or circular economy should be checked for scope: the bottle, PET material, all packaging, or the entire product.' },
      { key: 'docs', status: 'ok', description: 'Bukti pendukung mencakup laporan keberlanjutan Danone, informasi kemasan dan ekonomi sirkular, serta dokumentasi program pengumpulan dan daur ulang plastik.', descriptionEn: 'Supporting evidence includes Danone sustainability reports, packaging and circular-economy information, and documentation of plastic collection and recycling programs.' }
    ]
  },
  "cleo": {
    name: 'CLEO (PT Sariguna Primatirta Tbk)',
    cat: 'Air minum dalam kemasan · Minuman',
    sentimentOverrides: {
      cleoCertification: 'positive', cleoAuthenticity: 'positive', cleoLaboratory: 'positive',
      cleoLca: 'neutral', cleoEmissions: 'positive', cleoMaterials: 'positive',
      cleoEndOfLife: 'positive', cleoAudit: 'positive', cleoMarketing: 'positive', cleoDocs: 'positive'
    },
    summary: 'Bukti cukup / risiko rendah untuk klaim spesifik yang ditinjau: dokumentasi publik mendukung klaim kemasan dan operasi tertentu. Namun, sertifikasi dan kandungan daur ulang tidak membuktikan bahwa setiap produk CLEO memiliki dampak lingkungan keseluruhan yang lebih rendah.',
    verdictOverride: { color: 'green', labelId: 'Bukti Cukup · Risiko Rendah', labelEn: 'Sufficient Evidence · Low Risk' },
    evidence: [
      { key: 'cleoCertification', status: 'ok', label: 'Sertifikasi Pihak Ketiga', labelEn: 'Third-party Certification', description: 'CLEO melaporkan sertifikasi sistem manajemen lingkungan ISO 14001:2015 dan Ekolabel dari Kementerian Lingkungan Hidup untuk produk tertentu.', descriptionEn: 'CLEO reports ISO 14001:2015 environmental-management certification and Ecolabel certification from Indonesia’s Ministry of Environment for specific products.' },
      { key: 'cleoAuthenticity', status: 'ok', label: 'Keaslian Sertifikat', labelEn: 'Certificate Authenticity', description: 'Laporan keberlanjutan 2024 menyebut sertifikat Ekolabel dari Kementerian Lingkungan Hidup dan Sertifikat Industri Hijau (SIH) untuk pabrik Pandaan.', descriptionEn: 'The 2024 sustainability report states that CLEO obtained an Ecolabel certificate from the Ministry of Environment and an Industrial Green Certificate (SIH) for its Pandaan plant.' },
      { key: 'cleoLaboratory', status: 'ok', label: 'Pengujian Laboratorium', labelEn: 'Laboratory Testing', description: 'CLEO menyatakan pengendalian mutunya mencakup pengujian mikrobiologi dan kontaminan, inspeksi higienitas, serta pemantauan proses. Pengujian ini mendukung mutu dan keamanan produk, bukan dengan sendirinya membuktikan seluruh klaim dampak lingkungan.', descriptionEn: 'CLEO says its quality control includes microbiological and contaminant testing, hygiene inspections, and process monitoring. These tests support product quality and safety but do not by themselves prove all environmental-impact claims.' },
      { key: 'cleoLca', status: 'missing', label: 'Penilaian Siklus Hidup', labelEn: 'Life-Cycle Assessment', description: 'Tidak ditemukan LCA lengkap tingkat produk yang tersedia untuk publik. Klaim dampak lingkungan sepanjang siklus hidup tidak dapat disimpulkan hanya dari kandungan daur ulang atau kemasan ringan.', descriptionEn: 'No public full product-level LCA was identified. Lower whole-life environmental impact should not be inferred solely from recycled content or lightweight packaging.' },
      { key: 'cleoEmissions', status: 'ok', label: 'Transparansi Emisi Karbon', labelEn: 'Carbon Emissions Transparency', description: 'Pelaporan CLEO mencakup kinerja lingkungan serta penggunaan listrik, diesel, dan energi hijau/terbarukan. Laporan 2025 mencatat konsumsi energi hijau sebesar 6.090 MWh; angka ini bukan jejak karbon produk.', descriptionEn: 'CLEO’s reporting covers environmental performance and electricity, diesel, and green/renewable-energy use. Its 2025 report records 6,090 MWh of green-energy consumption; this is not a product carbon footprint.' },
      { key: 'cleoMaterials', status: 'ok', label: 'Pengungkapan Komposisi Material', labelEn: 'Material Composition Disclosure', description: 'Cleo Ecogreen 400 mL dan 750 mL dilaporkan menggunakan 100% plastik daur ulang. Cleo Ecolite 500 mL menggunakan kemasan lebih ringan untuk mengurangi penggunaan plastik virgin; klaim ini berlaku pada produk yang disebut, bukan semua botol CLEO.', descriptionEn: 'Cleo Ecogreen 400 mL and 750 mL are reported to use 100% recycled plastic. Cleo Ecolite 500 mL uses lighter packaging to reduce virgin-plastic use; these claims apply to the named products, not every CLEO bottle.' },
      { key: 'cleoEndOfLife', status: 'ok', label: 'Informasi Akhir Masa Pakai', labelEn: 'End-of-Life Information', description: 'Pelaporan CLEO membahas pengelolaan sampah dan peta jalan pengurangan sampah produsen. Kemasan tertentu juga dilaporkan menerima sertifikasi Ekolabel.', descriptionEn: 'CLEO’s reporting discusses waste management and its producer waste-reduction roadmap. Certain packaging is also reported to have Ecolabel certification.' },
      { key: 'cleoAudit', status: 'ok', label: 'Audit/Pemeriksaan Pihak Ketiga', labelEn: 'Third-party Audit/Review', description: 'Perusahaan menyatakan Ekolabel kemasannya divalidasi oleh lembaga yang diverifikasi secara independen. Cakupan validasi tidak otomatis mencakup semua klaim atau seluruh dampak produk.', descriptionEn: 'The company states that its packaging Ecolabel was validated by an independently verified institution. That validation does not automatically cover every claim or the product’s total impacts.' },
      { key: 'cleoMarketing', status: 'ok', label: 'Penilaian Bahasa Pemasaran', labelEn: 'Marketing Language Assessment', description: 'Klaim “100% recycled plastic” dikaitkan dengan produk Ecogreen tertentu, bukan disajikan sebagai klaim untuk semua botol CLEO. Ruang lingkup produk tetap perlu dicantumkan.', descriptionEn: 'The “100% recycled plastic” claim is tied to specific Ecogreen products rather than presented as applying to every CLEO bottle. Product scope should remain explicit.' },
      { key: 'cleoDocs', status: 'ok', label: 'Dokumentasi Pendukung', labelEn: 'Supporting Documentation', description: 'CLEO menerbitkan laporan keberlanjutan dengan data kinerja lingkungan, sertifikasi, informasi kemasan, energi, pengelolaan sampah, dan inisiatif keberlanjutan.', descriptionEn: 'CLEO publishes sustainability reports containing environmental-performance data, certifications, packaging information, energy data, waste-management information, and sustainability initiatives.' }
    ]
  },
  "club": {
    name: 'CLUB (Indofood CBP)',
    cat: 'Air minum dalam kemasan · Minuman',
    sentimentOverrides: {
      clubCertification: 'neutral', clubAuthenticity: 'neutral', clubLaboratory: 'positive',
      clubLca: 'neutral', clubEmissions: 'neutral', clubMaterials: 'neutral',
      clubEndOfLife: 'positive', clubAudit: 'neutral', clubMarketing: 'neutral', clubDocs: 'positive'
    },
    summary: 'Bukti tidak cukup untuk memverifikasi klaim lingkungan yang spesifik bagi CLUB. ICBP melaporkan program lingkungan pada tingkat perusahaan, tetapi bukti tersebut tidak otomatis berlaku untuk setiap produk atau kemasan CLUB. Ini bukan red flag bahwa klaim CLUB terbukti menyesatkan.',
    verdictOverride: { color: 'amber', labelId: 'Bukti Tidak Cukup', labelEn: 'Insufficient Evidence' },
    evidence: [
      { key: 'clubCertification', status: 'missing', label: 'Sertifikasi Pihak Ketiga', labelEn: 'Third-party Certification', description: 'ICBP melaporkan sertifikasi pengelolaan lingkungan, termasuk ISO 14001, untuk beberapa unit operasi. Sumber yang ditinjau tidak membuktikan bahwa setiap produk atau kemasan CLUB memiliki sertifikasi lingkungan.', descriptionEn: 'ICBP reports environmental-management certifications, including ISO 14001, for some operating units. The reviewed sources do not establish that every CLUB product or package carries an environmental certification.' },
      { key: 'clubAuthenticity', status: 'missing', label: 'Keaslian Sertifikat', labelEn: 'Certificate Authenticity', description: 'Tidak ditemukan sertifikat lingkungan yang spesifik untuk produk CLUB dalam sumber publik yang ditinjau.', descriptionEn: 'No product-specific environmental certificate for CLUB was identified in the reviewed public sources.' },
      { key: 'clubLaboratory', status: 'ok', label: 'Pengujian Laboratorium', labelEn: 'Laboratory Testing', description: 'ICBP menyatakan air limbah dari unit operasinya diolah dan kualitasnya diuji secara berkala oleh laboratorium independen terakreditasi. Ini adalah pengujian air limbah operasional, bukan bukti klaim lingkungan tentang kemasan CLUB.', descriptionEn: 'ICBP says wastewater from its operating units is treated and regularly tested by independent accredited laboratories. This concerns operational wastewater, not environmental claims about CLUB packaging.' },
      { key: 'clubLca', status: 'missing', label: 'Penilaian Siklus Hidup', labelEn: 'Life-Cycle Assessment', description: 'Tidak ditemukan LCA tingkat produk yang dipublikasikan untuk air minum dalam kemasan CLUB.', descriptionEn: 'No publicly available product-level LCA for CLUB bottled water was identified.' },
      { key: 'clubEmissions', status: 'missing', label: 'Transparansi Emisi Karbon', labelEn: 'Carbon Emissions Transparency', description: 'ICBP menerbitkan informasi lingkungan, energi, dan emisi gas rumah kaca, tetapi sumber yang ditinjau tidak menyediakan jejak karbon produk yang jelas dan spesifik untuk CLUB.', descriptionEn: 'ICBP publishes environmental, energy, and greenhouse-gas information, but the reviewed material does not provide a clear CLUB-specific product carbon footprint.' },
      { key: 'clubMaterials', status: 'missing', label: 'Pengungkapan Komposisi Material', labelEn: 'Material Composition Disclosure', description: 'Halaman produk mencantumkan format gelas 220 mL, botol 330 mL, 600 mL, 1.500 mL, dan galon 19 L, tetapi tidak memberi rincian publik yang cukup tentang persentase plastik daur ulang untuk tiap kemasan.', descriptionEn: 'The product page lists 220 mL cups, 330 mL, 600 mL, and 1,500 mL bottles, and 19 L gallons, but does not provide enough public detail on recycled-plastic percentages for each package.' },
      { key: 'clubEndOfLife', status: 'ok', label: 'Informasi Akhir Masa Pakai', labelEn: 'End-of-Life Information', description: 'ICBP memiliki program sampah plastik tingkat perusahaan yang mencakup desain kemasan, pengelolaan sampah pascakonsumsi, kerja sama dengan bank sampah, dan komitmen pada peta jalan pengurangan sampah produsen Indonesia.', descriptionEn: 'ICBP has a company-wide plastic-waste program covering packaging design, post-consumer waste management, cooperation with waste banks, and commitment to Indonesia’s producer waste-reduction roadmap.' },
      { key: 'clubAudit', status: 'partial', label: 'Audit/Pemeriksaan Pihak Ketiga', labelEn: 'Third-party Audit/Review', description: 'ICBP melaporkan pengujian independen untuk air limbah, tetapi bukti yang ditinjau tidak menunjukkan verifikasi independen atas klaim pemasaran lingkungan khusus CLUB.', descriptionEn: 'ICBP reports independent wastewater testing, but the reviewed evidence does not show independent verification of CLUB-specific environmental marketing claims.' },
      { key: 'clubMarketing', status: 'partial', label: 'Penilaian Bahasa Pemasaran', labelEn: 'Marketing Language Assessment', description: 'Deskripsi resmi CLUB menekankan sumber air alami dan proses higienis. Bukti yang ditinjau belum cukup untuk menyimpulkan bahwa pernyataan tersebut merupakan klaim lingkungan yang menyesatkan.', descriptionEn: 'CLUB’s official description emphasizes natural water sources and hygienic production. The reviewed evidence is insufficient to conclude that these statements are misleading environmental claims.' },
      { key: 'clubDocs', status: 'ok', label: 'Dokumentasi Pendukung', labelEn: 'Supporting Documentation', description: 'ICBP menerbitkan laporan keberlanjutan dan informasi tentang kebijakan lingkungan, pengelolaan sampah, pengelolaan air, serta kemasan dan sampah plastik.', descriptionEn: 'ICBP publishes sustainability reports and information on environmental policy, waste management, water management, and packaging and plastic waste.' }
    ]
  },
  "volkswagen tdi clean diesel": {
    name: 'Volkswagen TDI “Clean Diesel”',
    cat: 'Otomotif · Mobil diesel',
    sentimentOverrides: {
      vwCleanDieselClaim: 'negative', vwEmissionTesting: 'negative', vwRegulatoryEvidence: 'neutral',
      vwEmissionImpact: 'negative', vwConsumerImpact: 'neutral', vwLegalDocuments: 'neutral',
      vwFinancialImpact: 'positive'
    },
    summary: 'Red flag: U.S. authorities found defeat-device software in affected Volkswagen diesel vehicles. The claims and findings concern specific affected model years and vehicles in the United States, not every Volkswagen diesel vehicle.',
    verdictOverride: { color: 'red', labelId: 'Red Flag', labelEn: 'Red Flag' },
    evidence: [
      { key: 'vwCleanDieselClaim', status: 'false', label: 'Klaim Lingkungan', labelEn: 'Environmental Claim', description: 'Klaim “Clean Diesel” untuk kendaraan terdampak menyesatkan: perangkat lunak defeat device menyamarkan emisi NOx saat pengujian.', descriptionEn: 'The “Clean Diesel” claim for affected vehicles was misleading: defeat-device software masked NOx emissions during testing.' },
      { key: 'vwEmissionTesting', status: 'ok', label: 'Pengujian Emisi', labelEn: 'Emissions Testing', description: 'Regulator menemukan bahwa perangkat lunak pendeteksi pengujian dapat membuat perilaku emisi saat uji laboratorium berbeda dari kondisi berkendara normal.', descriptionEn: 'Regulators found that test-detecting software could make emissions behavior during laboratory testing differ from normal driving.' },
      { key: 'vwRegulatoryEvidence', status: 'ok', label: 'Bukti Regulasi', labelEn: 'Regulatory Evidence', description: 'EPA, FTC, dan Departemen Kehakiman AS mengambil tindakan penegakan terkait kendaraan diesel terdampak.', descriptionEn: 'The EPA, FTC, and U.S. Department of Justice took enforcement action concerning affected diesel vehicles.' },
      { key: 'vwEmissionImpact', status: 'ok', label: 'Dampak Emisi', labelEn: 'Emissions Impact', description: 'EPA menyatakan gugatan AS menuduh kendaraan terdampak mengeluarkan NOx secara signifikan di atas tingkat kepatuhan EPA saat digunakan secara normal. Ringkasan penyelesaian EPA tidak menetapkan satu angka rasio untuk semua kendaraan.', descriptionEn: 'The EPA says the U.S. complaint alleged affected vehicles emitted NOx significantly above EPA-compliant levels in normal use. The EPA settlement summary does not give one ratio that applies to every vehicle.' },
      { key: 'vwConsumerImpact', status: 'ok', label: 'Dampak Konsumen', labelEn: 'Consumer Impact', description: 'EPA menyebut gugatan AS mencakup sekitar 590.000 kendaraan diesel model tahun 2009–2016 dari grup Volkswagen yang dijual di Amerika Serikat; jumlah ini mencakup merek terkait dan bukan angka khusus VW/Audi saja.', descriptionEn: 'The EPA says the U.S. complaint covered approximately 590,000 model-year 2009–2016 diesel vehicles from the Volkswagen group sold in the United States; this includes related brands and is not a VW/Audi-only count.' },
      { key: 'vwLegalDocuments', status: 'ok', label: 'Dokumentasi Hukum', labelEn: 'Legal Documentation', description: 'Dokumen penegakan FTC dan proses pengadilan menyediakan bukti publik yang luas mengenai perkara ini.', descriptionEn: 'FTC enforcement documents and court proceedings provide extensive public evidence about the case.' },
      { key: 'vwFinancialImpact', status: 'ok', label: 'Dampak Finansial', labelEn: 'Financial Impact', description: 'EPA mencatat VW memperkirakan biaya total hingga US$10,033 miliar untuk memenuhi target penarikan kembali kendaraan 2.0L serta kewajiban penyelesaian terkait. Ini adalah estimasi biaya program keseluruhan, bukan jumlah yang seluruhnya dibayarkan tunai kepada konsumen.', descriptionEn: 'The EPA states that VW estimated total costs of up to US$10.033 billion to meet the 2.0L recall target and related settlement obligations. This is an overall program cost estimate, not an amount entirely paid to consumers in cash.' }
    ]
  },
  "keurig k cup pods": {
    name: 'Keurig K-Cup Pods',
    cat: 'Kopi · Kemasan sekali pakai',
    sentimentOverrides: {
      keurigRecyclingClaim: 'negative', keurigRegulatoryReview: 'neutral', keurigInfrastructure: 'negative',
      keurigInstructions: 'negative', keurigCorrectiveAction: 'positive', keurigPenalty: 'negative',
      keurigDocuments: 'neutral'
    },
    summary: 'Red flag: Canada’s Competition Bureau found Keurig’s recyclability claims false or misleading in areas where the pods were not accepted for recycling and where preparation instructions omitted required local steps. The findings are specific to Canada and municipal programs.',
    verdictOverride: { color: 'red', labelId: 'Red Flag', labelEn: 'Red Flag' },
    evidence: [
      { key: 'keurigRecyclingClaim', status: 'false', label: 'Klaim Daur Ulang', labelEn: 'Recyclability Claims', description: 'Klaim bahwa pod dapat didaur ulang menyesatkan di wilayah yang tidak menerimanya dalam program daur ulang kota.', descriptionEn: 'The claim that pods were recyclable was misleading in areas where municipal recycling programs did not accept them.' },
      { key: 'keurigRegulatoryReview', status: 'ok', label: 'Pemeriksaan Regulator', labelEn: 'Regulatory Review', description: 'Competition Bureau Canada menyelidiki klaim daur ulang dan mencapai kesepakatan penyelesaian dengan Keurig Canada pada Januari 2022.', descriptionEn: 'The Competition Bureau Canada investigated the recyclability claims and reached a settlement agreement with Keurig Canada in January 2022.' },
      { key: 'keurigInfrastructure', status: 'ok', label: 'Ketersediaan Infrastruktur', labelEn: 'Recycling Infrastructure', description: 'Biro menemukan pod K-Cup tidak diterima secara luas dalam program daur ulang kota di luar British Columbia dan Quebec; penerimaan tetap bergantung pada program setempat.', descriptionEn: 'The Bureau found K-Cup pods were not widely accepted in municipal recycling programs outside British Columbia and Quebec; acceptance still depends on local programs.' },
      { key: 'keurigInstructions', status: 'ok', label: 'Masalah Instruksi', labelEn: 'Preparation Instructions', description: 'Di sejumlah kota, instruksi yang menyebut konsumen cukup melepas tutup dan membuang ampas kopi tidak mencakup langkah tambahan yang diwajibkan program setempat.', descriptionEn: 'In some municipalities, instructions suggesting consumers only remove the lid and empty the grounds omitted additional steps required by local programs.' },
      { key: 'keurigCorrectiveAction', status: 'ok', label: 'Tindakan Korektif', labelEn: 'Corrective Action', description: 'Keurig Canada setuju mengubah klaim daur ulang dan kemasan, menerbitkan pemberitahuan korektif, serta meningkatkan program kepatuhan.', descriptionEn: 'Keurig Canada agreed to change recyclability claims and packaging, publish corrective notices, and enhance its compliance program.' },
      { key: 'keurigPenalty', status: 'ok', label: 'Penalti', labelEn: 'Penalty', description: 'Keurig Canada setuju membayar penalti C$3 juta, menyumbangkan C$800.000 untuk badan amal lingkungan, dan membayar C$85.000 untuk biaya investigasi Biro.', descriptionEn: 'Keurig Canada agreed to pay a C$3 million penalty, donate C$800,000 to an environmental charity, and pay C$85,000 toward the Bureau’s investigation costs.' },
      { key: 'keurigDocuments', status: 'ok', label: 'Dokumentasi Pendukung', labelEn: 'Supporting Documentation', description: 'Siaran pers investigasi dan perjanjian penyelesaian terdaftar tersedia melalui Competition Bureau Canada dan Competition Tribunal.', descriptionEn: 'The investigation news release and registered settlement agreement are publicly available through the Competition Bureau Canada and Competition Tribunal.' }
    ]
  },
  "hm conscious": {
    name: 'H&M Conscious',
    cat: 'Fashion · Pakaian',
    sentimentOverrides: {
      hmSustainabilityClaim: 'neutral', hmRegulatoryReview: 'neutral', hmBenefitsExplanation: 'negative',
      hmLifecycle: 'neutral', hmClaimChanges: 'positive', hmCorrectiveAction: 'positive',
      hmRegulatoryDocuments: 'neutral'
    },
    summary: 'Insufficient evidence: the Dutch ACM considered H&M’s sustainability claims unclear or insufficiently substantiated and H&M committed to adjust or stop certain claims. This was a regulator commitment, not a court judgment that every Conscious item was environmentally harmful.',
    verdictOverride: { color: 'amber', labelId: 'Bukti Tidak Cukup', labelEn: 'Insufficient Evidence' },
    evidence: [
      { key: 'hmSustainabilityClaim', status: 'ok', label: 'Klaim Keberlanjutan', labelEn: 'Sustainability Claims', description: 'H&M menggunakan istilah seperti “Conscious” dan klaim keberlanjutan lain untuk produk serta komunikasi situs webnya.', descriptionEn: 'H&M used terms such as “Conscious” and other sustainability-related claims for products and on its website.' },
      { key: 'hmRegulatoryReview', status: 'ok', label: 'Pemeriksaan Regulator', labelEn: 'Regulatory Review', description: 'Otoritas Konsumen dan Pasar Belanda (ACM) meninjau komunikasi keberlanjutan H&M.', descriptionEn: 'The Netherlands Authority for Consumers and Markets (ACM) reviewed H&M’s sustainability communication.' },
      { key: 'hmBenefitsExplanation', status: 'missing', label: 'Penjelasan Manfaat Lingkungan', labelEn: 'Environmental-Benefit Explanation', description: 'ACM menilai klaim tertentu tidak cukup jelas atau didukung; istilah “Conscious” tidak selalu langsung menjelaskan manfaat lingkungan spesifik yang dimaksud.', descriptionEn: 'The ACM considered certain claims insufficiently clear or substantiated; “Conscious” did not always immediately explain the specific environmental benefit meant.' },
      { key: 'hmLifecycle', status: 'missing', label: 'Penilaian Siklus Hidup', labelEn: 'Life-Cycle Assessment', description: 'Label “Conscious” sendiri bukan LCA dan tidak membuktikan bahwa keseluruhan pakaian memiliki dampak lingkungan lebih rendah sepanjang siklus hidupnya.', descriptionEn: 'The “Conscious” label by itself is not an LCA and does not establish that a whole garment has a lower environmental impact across its life cycle.' },
      { key: 'hmClaimChanges', status: 'ok', label: 'Perubahan Klaim', labelEn: 'Claim Changes', description: 'H&M berkomitmen memperjelas atau menghentikan klaim keberlanjutan tertentu.', descriptionEn: 'H&M committed to clarify or stop certain sustainability claims.' },
      { key: 'hmCorrectiveAction', status: 'ok', label: 'Tindakan Korektif', labelEn: 'Corrective Action', description: 'H&M berkomitmen menyumbangkan €500.000 untuk tujuan yang berfokus pada keberlanjutan.', descriptionEn: 'H&M committed to donate €500,000 to a sustainability-focused cause.' },
      { key: 'hmRegulatoryDocuments', status: 'ok', label: 'Dokumentasi Regulator', labelEn: 'Regulatory Documentation', description: 'ACM menerbitkan keputusan komitmen dan penjelasan tentang kekhawatirannya terhadap klaim tersebut.', descriptionEn: 'The ACM published its commitment decision and explanation of its concerns about the claims.' }
    ]
  },
  "klm fly responsibly": {
    name: 'KLM Fly Responsibly',
    cat: 'Penerbangan · Transportasi',
    sentimentOverrides: {
      klmEnvironmentalClaim: 'neutral', klmCourtReview: 'neutral', klmVagueClaims: 'negative',
      klmSustainableFuel: 'negative', klmReforestation: 'negative', klmJudgment: 'negative',
      klmPublicDocuments: 'neutral'
    },
    summary: 'Red flag: in 2024 the Amsterdam District Court found 15 specific past KLM advertising statements misleading and unlawful. The ruling concerned identified advertisements and claims; it did not declare every KLM environmental statement unlawful.',
    verdictOverride: { color: 'red', labelId: 'Red Flag', labelEn: 'Red Flag' },
    evidence: [
      { key: 'klmEnvironmentalClaim', status: 'ok', label: 'Klaim Lingkungan', labelEn: 'Environmental Claims', description: 'KLM menggunakan pesan lingkungan, termasuk kampanye “Fly Responsibly”.', descriptionEn: 'KLM used environmental messaging, including its “Fly Responsibly” campaign.' },
      { key: 'klmCourtReview', status: 'ok', label: 'Pemeriksaan Pengadilan', labelEn: 'Court Review', description: 'Rechtbank Amsterdam menilai sejumlah iklan dan klaim KLM dalam putusan perdata 20 Maret 2024.', descriptionEn: 'The Amsterdam District Court assessed a number of KLM advertisements and claims in its civil judgment of 20 March 2024.' },
      { key: 'klmVagueClaims', status: 'false', label: 'Klaim yang Terlalu Umum', labelEn: 'Vague Environmental Claims', description: 'Pengadilan menyatakan sejumlah klaim menggunakan pernyataan umum dan samar mengenai manfaat lingkungan sehingga menyesatkan.', descriptionEn: 'The court found that some claims used vague and general statements about environmental benefits and were misleading.' },
      { key: 'klmSustainableFuel', status: 'false', label: 'Bahan Bakar Penerbangan Berkelanjutan', labelEn: 'Sustainable Aviation Fuel', description: 'Pengadilan menilai beberapa iklan memberi gambaran terlalu positif tentang manfaat lingkungan SAF.', descriptionEn: 'The court found that some advertisements gave an overly positive impression of the environmental effect of sustainable aviation fuel (SAF).' },
      { key: 'klmReforestation', status: 'false', label: 'Reforestasi', labelEn: 'Reforestation', description: 'Pengadilan menilai beberapa iklan memberi gambaran terlalu positif tentang dampak langkah reforestasi.', descriptionEn: 'The court found that some advertisements gave an overly positive impression of the effects of reforestation measures.' },
      { key: 'klmJudgment', status: 'ok', label: 'Putusan Hukum', labelEn: 'Legal Ruling', description: 'Pengadilan menyatakan 15 klaim iklan tertentu menyesatkan dan melanggar hukum praktik perdagangan tidak adil Belanda.', descriptionEn: 'The court held that 15 specific advertising claims were misleading and unlawful under Dutch unfair-commercial-practices law.' },
      { key: 'klmPublicDocuments', status: 'ok', label: 'Dokumentasi Publik', labelEn: 'Public Documentation', description: 'Putusan dan pertimbangan pengadilan tersedia untuk publik dengan nomor ECLI:NL:RBAMS:2024:1512.', descriptionEn: 'The judgment and its reasoning are publicly available under case number ECLI:NL:RBAMS:2024:1512.' }
    ]
  },
  "shell go plus": {
    name: 'Shell Go+',
    cat: 'Bahan bakar · Energi',
    sentimentOverrides: {
      shellEnvironmentalClaim: 'neutral', shellRegulatoryReview: 'neutral', shellOffsetMechanism: 'neutral',
      shellClarity: 'negative', shellMisunderstandingRisk: 'negative', shellAdRuling: 'negative',
      shellRegulatoryDocuments: 'neutral'
    },
    summary: 'Red flag: the UK Advertising Standards Authority ruled that Shell’s “Drive carbon-neutral” advertisement could mislead consumers into thinking the fuel itself was carbon-neutral. The finding concerns the specific advertisement and its offsetting/loyalty-program context.',
    verdictOverride: { color: 'red', labelId: 'Red Flag', labelEn: 'Red Flag' },
    evidence: [
      { key: 'shellEnvironmentalClaim', status: 'ok', label: 'Klaim Lingkungan', labelEn: 'Environmental Claim', description: 'Iklan Shell Go+ menggunakan klaim “Drive carbon-neutral”.', descriptionEn: 'The Shell Go+ advertisement used the claim “Drive carbon-neutral.”' },
      { key: 'shellRegulatoryReview', status: 'ok', label: 'Pemeriksaan Regulator', labelEn: 'Regulatory Review', description: 'Advertising Standards Authority (ASA) Inggris memeriksa iklan tersebut.', descriptionEn: 'The UK Advertising Standards Authority (ASA) investigated the advertisement.' },
      { key: 'shellOffsetMechanism', status: 'ok', label: 'Mekanisme Offset', labelEn: 'Offsetting Mechanism', description: 'Shell menjelaskan program offset untuk emisi terkait pembelian bahan bakar melalui proyek berbasis alam; ini bukan berarti pembakaran bahan bakar tidak menghasilkan emisi.', descriptionEn: 'Shell explained that the program offset emissions associated with fuel purchases through nature-based projects; this does not mean the fuel itself produces no emissions.' },
      { key: 'shellClarity', status: 'missing', label: 'Kejelasan Informasi', labelEn: 'Clarity of Information', description: 'Iklan tidak menjelaskan dengan cukup jelas bahwa konsumen perlu berpartisipasi dalam program loyalitas Go+ agar mekanisme offset berlaku.', descriptionEn: 'The advertisement did not clearly explain that consumers had to participate in the Go+ loyalty program for the offsetting mechanism to apply.' },
      { key: 'shellMisunderstandingRisk', status: 'false', label: 'Klaim Bahan Bakar Netral Karbon', labelEn: 'Fuel Carbon-Neutrality Claim', description: 'ASA menyimpulkan konsumen dapat memahami iklan seolah-olah bahan bakarnya sendiri netral karbon.', descriptionEn: 'The ASA concluded that consumers could understand the advertisement to mean the fuel itself was carbon-neutral.' },
      { key: 'shellAdRuling', status: 'ok', label: 'Putusan Iklan', labelEn: 'Advertising Ruling', description: 'ASA memutuskan iklan tersebut menyesatkan.', descriptionEn: 'The ASA ruled that the advertisement was misleading.' },
      { key: 'shellRegulatoryDocuments', status: 'ok', label: 'Dokumentasi Regulator', labelEn: 'Regulatory Documentation', description: 'Putusan tersedia melalui ASA/CAP dan dibahas dalam panduan klaim lingkungan ASA.', descriptionEn: 'The ruling is publicly available through ASA/CAP and is discussed in the ASA’s environmental-claims guidance.' }
    ]
  },
  "sensatia botanicals": {
    name: 'Sensatia Botanicals',
    cat: 'Personal care · Beauty',
    sentimentOverrides: {
      certification: 'positive', certificateAuthenticity: 'positive', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'neutral', audit: 'neutral',
      marketing: 'positive', docs: 'positive'
    },
    summary: 'This product received a moderate-risk verdict because it has clear public evidence for some criteria, but limited transparency on emissions and audit information.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'Ethical and cruelty-free certifications are available.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'Certifications can be independently verified.' },
      { key: 'labTesting', status: 'not-evaluated', description: 'No laboratory testing was assessed in this prototype.' },
      { key: 'lca', status: 'not-evaluated', description: 'No lifecycle assessment data was assessed in this prototype.' },
      { key: 'emissions', status: 'partial', description: 'Limited public emissions information is available.' },
      { key: 'materialComposition', status: 'ok', description: 'Ingredients are clearly disclosed.' },
      { key: 'endOfLife', status: 'partial', description: 'Some packaging guidance is provided, but it is limited.' },
      { key: 'audit', status: 'partial', description: 'Limited publicly available sustainability audit information is present.' },
      { key: 'marketing', status: 'ok', description: 'Claims are mostly specific and supported.' },
      { key: 'docs', status: 'ok', description: 'Sustainability information is available on the company website.' }
    ]
  },
  "tessa tissue bio plastic packaging": {
    name: 'Tessa Tissue (Bio Plastic Packaging)',
    cat: 'Household paper goods',
    sentimentOverrides: {
      certification: 'positive', certificateAuthenticity: 'positive', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'neutral', audit: 'neutral',
      marketing: 'negative', docs: 'neutral'
    },
    summary: 'This product received a high-risk verdict because it has limited public evidence for several sustainability criteria, even though it shows some certification and material disclosure.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'FSC® certification (C143747) is displayed on the official website.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'The FSC certificate can be verified through the official FSC certificate database.' },
      { key: 'labTesting', status: 'not-evaluated', description: 'No laboratory testing was assessed in this prototype.' },
      { key: 'lca', status: 'not-evaluated', description: 'No lifecycle assessment data was assessed in this prototype.' },
      { key: 'emissions', status: 'partial', description: 'No publicly available product-level carbon footprint or Scope 3 reporting was found.' },
      { key: 'materialComposition', status: 'ok', description: 'The company discloses 100% virgin pulp and bioplastic packaging.' },
      { key: 'endOfLife', status: 'partial', description: 'Packaging is described as biodegradable or environmentally friendly, but detailed disposal guidance is limited.' },
      { key: 'audit', status: 'partial', description: 'FSC certification provides third-party verification of responsible sourcing, but broader sustainability audits are not prominently disclosed.' },
      { key: 'marketing', status: 'partial', description: 'Uses claims such as “Bio Plastic” and “environmentally friendly packaging,” but supporting environmental evidence is relatively limited on the product page.' },
      { key: 'docs', status: 'partial', description: 'Product information is available, but comprehensive sustainability reports or environmental documentation are not readily available.' }
    ]
  },
  "verdanta compostable cups": {
    name: 'Verdanta Compostable Cups',
    cat: 'Food packaging · PLA-based',
    sentimentOverrides: {
      certification: 'positive', certificateAuthenticity: 'positive', labTesting: 'positive', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'positive', audit: 'positive',
      marketing: 'positive', docs: 'positive'
    },
    summary: 'This product received a strong evidence-based verdict because it has verified certifications, lab testing, and clear material disclosure.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'EN 13432 and BPI Certified Compostable both confirmed.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'Certificate number cross-checked against the official EN 13432 registry.' },
      { key: 'labTesting', status: 'ok', description: 'Independent lab report confirms industrial compostability within 90 days.' },
      { key: 'lca', status: 'partial', description: 'LCA summary published, but full methodology is not publicly available.' },
      { key: 'emissions', status: 'partial', description: 'Scope 1 and 2 disclosed; Scope 3 not reported.' },
      { key: 'materialComposition', status: 'ok', description: '100% PLA derived from corn starch, disclosed on packaging and website.' },
      { key: 'endOfLife', status: 'ok', description: 'Clear instructions: industrial composting facility required, not home compostable.' },
      { key: 'audit', status: 'ok', description: 'Audited annually by an accredited certification body.' },
      { key: 'marketing', status: 'ok', description: 'No vague claims detected; all statements map to certifications.' },
      { key: 'docs', status: 'ok', description: 'Sustainability report and EPD both available for download.' }
    ]
  },
  "pureleaf bamboo tissue": {
    name: 'PureLeaf Bamboo Tissue',
    cat: 'Household paper goods',
    sentimentOverrides: {
      certification: 'positive', certificateAuthenticity: 'positive', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'positive', audit: 'neutral',
      marketing: 'negative', docs: 'neutral'
    },
    summary: 'This product received an amber verdict because it has some credible sourcing evidence, but key testing and emissions details remain missing.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'FSC certification confirmed for bamboo sourcing.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'FSC license code verified against the official database.' },
      { key: 'labTesting', status: 'missing', description: 'No publicly accessible lab testing found for the chemical-free bleaching claim.' },
      { key: 'lca', status: 'missing', description: 'No published LCA comparing bamboo tissue to conventional paper.' },
      { key: 'emissions', status: 'missing', description: 'No Scope 1, 2, or 3 emissions data disclosed.' },
      { key: 'materialComposition', status: 'ok', description: '100% bamboo pulp, clearly stated.' },
      { key: 'endOfLife', status: 'ok', description: 'Labeled biodegradable and septic-safe.' },
      { key: 'audit', status: 'partial', description: 'FSC audits the sourcing, but manufacturing claims are unaudited.' },
      { key: 'marketing', status: 'partial', description: 'Chemical-free is used without a defined standard or threshold.' },
      { key: 'docs', status: 'missing', description: 'No sustainability report or EPD available on the company site.' }
    ]
  },
  "novawear ecoknit tee": {
    name: 'NovaWear EcoKnit Tee',
    cat: 'Apparel · Cotton blend',
    sentimentOverrides: {
      certification: 'neutral', certificateAuthenticity: 'negative', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'neutral', endOfLife: 'neutral', audit: 'neutral',
      marketing: 'negative', docs: 'neutral'
    },
    summary: 'This product received a cautionary verdict because its green claims are not backed by verifiable public evidence.',
    evidence: [
      { key: 'certification', status: 'missing', description: 'No recognized certification such as GOTS or OEKO-TEX was found.' },
      { key: 'certificateAuthenticity', status: 'missing', description: 'The EcoSafe logo does not match any certification registry.' },
      { key: 'labTesting', status: 'missing', description: 'No lab testing available for dye safety or water usage claims.' },
      { key: 'lca', status: 'missing', description: 'No LCA published.' },
      { key: 'emissions', status: 'missing', description: 'No emissions data disclosed at any scope.' },
      { key: 'materialComposition', status: 'partial', description: 'Blend percentage listed, but recycled-content source is unspecified.' },
      { key: 'endOfLife', status: 'missing', description: 'No guidance on recyclability or disposal.' },
      { key: 'audit', status: 'missing', description: 'No audit body named anywhere in company materials.' },
      { key: 'marketing', status: 'missing', description: '100% green and planet-safe are used with no measurable definition.' },
      { key: 'docs', status: 'missing', description: 'No sustainability report, EPD, or technical documentation found.' }
    ]
  },
  "beeswax candle": {
    name: 'Beeswax Candle',
    cat: 'Home goods · Candle',
    sentimentOverrides: {
      certification: 'neutral', certificateAuthenticity: 'neutral', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'positive', audit: 'neutral',
      marketing: 'positive', docs: 'neutral'
    },
    summary: 'This product received an amber verdict because it has credible sourcing information but limited public testing and emissions disclosure.',
    evidence: [
      { key: 'certification', status: 'partial', description: 'No third-party certification found, but the company lists responsible sourcing practices.' },
      { key: 'certificateAuthenticity', status: 'missing', description: 'No supporting certificate registry entry identified.' },
      { key: 'labTesting', status: 'missing', description: 'No lab testing publicly available for fragrance or burn safety claims.' },
      { key: 'lca', status: 'missing', description: 'No public LCA was found for the candle line.' },
      { key: 'emissions', status: 'partial', description: 'The company mentions emissions reduction goals but does not disclose quantified data.' },
      { key: 'materialComposition', status: 'ok', description: 'Primary ingredients and wax source are clearly described.' },
      { key: 'endOfLife', status: 'ok', description: 'Recycling guidance is provided for the packaging.' },
      { key: 'audit', status: 'partial', description: 'Supplier standards are described, but no independent audit evidence is public.' },
      { key: 'marketing', status: 'ok', description: 'Claims are mostly specific and linked to sourcing language rather than vague green branding.' },
      { key: 'docs', status: 'partial', description: 'A product sheet is available, but a full sustainability report is not linked.' }
    ]
  },
  "herbal deodorant": {
    name: 'Herbal Deodorant',
    cat: 'Personal care · Deodorant',
    sentimentOverrides: {
      certification: 'neutral', certificateAuthenticity: 'neutral', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'neutral', audit: 'neutral',
      marketing: 'negative', docs: 'neutral'
    },
    summary: 'This product received a cautionary verdict because several sustainability claims are not supported by public certification or testing data.',
    evidence: [
      { key: 'certification', status: 'missing', description: 'No recognized certification found for the product line.' },
      { key: 'certificateAuthenticity', status: 'missing', description: 'No certificate number or registry entry could be verified.' },
      { key: 'labTesting', status: 'partial', description: 'Some safety statements are listed, but no public lab report is linked.' },
      { key: 'lca', status: 'missing', description: 'No published LCA or environmental footprint data found.' },
      { key: 'emissions', status: 'missing', description: 'No emissions disclosure available for the product.' },
      { key: 'materialComposition', status: 'ok', description: 'Ingredient breakdown and natural-origin claims are clearly stated.' },
      { key: 'endOfLife', status: 'partial', description: 'Packaging disposal guidance is limited to general recycling notes.' },
      { key: 'audit', status: 'missing', description: 'No independent audit or review is publicly documented.' },
      { key: 'marketing', status: 'partial', description: 'The phrase “natural” is used without a defined standard or supporting evidence.' },
      { key: 'docs', status: 'partial', description: 'Ingredient list is available, but technical documentation is incomplete.' }
    ]
  },
  "citrus shampoo": {
    name: 'Citrus Shampoo',
    cat: 'Personal care · Shampoo',
    sentimentOverrides: {
      certification: 'positive', certificateAuthenticity: 'positive', labTesting: 'neutral', lca: 'neutral',
      emissions: 'neutral', materialComposition: 'positive', endOfLife: 'positive', audit: 'positive',
      marketing: 'positive', docs: 'positive'
    },
    summary: 'This product received a green verdict because it has public sourcing and packaging evidence, though some emissions and audit details remain partial.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'The product lists a verified cruelty-free certification and an eco-label on packaging.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'The certificate number is listed and matches the issuing body website.' },
      { key: 'labTesting', status: 'partial', description: 'Safety data is available, but no full environmental lab report is linked.' },
      { key: 'lca', status: 'partial', description: 'A high-level sustainability summary is published, but a full LCA is not available.' },
      { key: 'emissions', status: 'partial', description: 'The company reports energy use improvements but not full product-level Scope 3 data.' },
      { key: 'materialComposition', status: 'ok', description: 'Ingredients and packaging materials are clearly disclosed.' },
      { key: 'endOfLife', status: 'ok', description: 'Instructions for bottle disposal and refill options are provided.' },
      { key: 'audit', status: 'ok', description: 'The company names an independent review body for its sourcing standards.' },
      { key: 'marketing', status: 'ok', description: 'Most environmental claims are specific and supported by available evidence.' },
      { key: 'docs', status: 'ok', description: 'A product FAQ and sustainability page are both available.' }
    ]
  }
};

const PRODUCT_SOURCE_LINKS = {
  "aqua danone indonesia": {
    default: [{ label: 'AQUA Indonesia — official site', url: 'https://www.aqua.co.id/' }, { label: 'Danone — financial and extra-financial reports', url: 'https://www.danone.com/investors/publications-and-events/financial-and-extra-financial-reports.html' }],
    byKey: {
      certification: [{ label: 'AQUA — product and company information', url: 'https://www.aqua.co.id/' }],
      certificateAuthenticity: [{ label: 'AQUA — official company information', url: 'https://www.aqua.co.id/' }],
      labTesting: [{ label: 'AQUA — product information (environmental comparative test not located)', url: 'https://www.aqua.co.id/' }],
      lca: [{ label: 'Danone financial and extra-financial reports', url: 'https://www.danone.com/investors/publications-and-events/financial-and-extra-financial-reports.html' }],
      emissions: [{ label: 'Danone financial and extra-financial reports', url: 'https://www.danone.com/investors/publications-and-events/financial-and-extra-financial-reports.html' }],
      materialComposition: [{ label: 'AQUA — packaging and product information', url: 'https://www.aqua.co.id/' }],
      endOfLife: [{ label: 'AQUA — circularity and collection information', url: 'https://www.aqua.co.id/' }],
      audit: [{ label: 'Danone financial and extra-financial reports', url: 'https://www.danone.com/investors/publications-and-events/financial-and-extra-financial-reports.html' }],
      marketing: [{ label: 'AQUA — product information and claim scope', url: 'https://www.aqua.co.id/' }],
      docs: [{ label: 'AQUA Indonesia — official site', url: 'https://www.aqua.co.id/' }, { label: 'Danone financial and extra-financial reports', url: 'https://www.danone.com/investors/publications-and-events/financial-and-extra-financial-reports.html' }]
    }
  },
  "cleo": {
    default: [{ label: 'CLEO — investor relations and reports', url: 'https://www.cleo.co.id/id/investor-relations' }],
    byKey: {
      cleoCertification: [{ label: 'CLEO — sustainability and investor reports', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoAuthenticity: [{ label: 'CLEO — sustainability and investor reports', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoLaboratory: [{ label: 'CLEO — company quality and product information', url: 'https://www.cleo.co.id/' }],
      cleoLca: [{ label: 'CLEO — reports reviewed (no public product LCA identified)', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoEmissions: [{ label: 'CLEO — sustainability reports', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoMaterials: [{ label: 'CLEO — product and packaging information', url: 'https://www.cleo.co.id/' }, { label: 'CLEO — sustainability reports', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoEndOfLife: [{ label: 'CLEO — sustainability reports', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoAudit: [{ label: 'CLEO — sustainability and certification information', url: 'https://www.cleo.co.id/id/investor-relations' }],
      cleoMarketing: [{ label: 'CLEO — product and packaging information', url: 'https://www.cleo.co.id/' }],
      cleoDocs: [{ label: 'CLEO — investor relations and reports', url: 'https://www.cleo.co.id/id/investor-relations' }]
    }
  },
  "club": {
    default: [{ label: 'ICBP Sustainability Report archive', url: 'https://www.indofoodcbp.com/page/sustainability-report' }],
    byKey: {
      clubCertification: [{ label: 'ICBP Awards & Certifications', url: 'https://www.indofoodcbp.com/company/award-certification' }, { label: 'ICBP Sustainability Report archive', url: 'https://www.indofoodcbp.com/page/sustainability-report' }],
      clubAuthenticity: [{ label: 'ICBP company and brand directory (CLUB-specific certificate not identified)', url: 'https://www.indofoodcbp.com/sitemap' }],
      clubLaboratory: [{ label: 'ICBP Water Management — independent wastewater testing', url: 'https://www.indofoodcbp.com/page/water-management' }],
      clubLca: [{ label: 'ICBP Sustainability Reports reviewed (no CLUB product LCA identified)', url: 'https://www.indofoodcbp.com/page/sustainability-report' }],
      clubEmissions: [{ label: 'ICBP Sustainability Reports — energy and emissions information', url: 'https://www.indofoodcbp.com/page/sustainability-report' }, { label: 'ICBP Energy Management', url: 'https://www.indofoodcbp.com/page/energy-management' }],
      clubMaterials: [{ label: 'ICBP brand directory and product information', url: 'https://www.indofoodcbp.com/sitemap' }],
      clubEndOfLife: [{ label: 'ICBP Waste Management', url: 'https://www.indofoodcbp.com/page/waste-management' }, { label: 'ICBP Sustainability Reports', url: 'https://www.indofoodcbp.com/page/sustainability-report' }],
      clubAudit: [{ label: 'ICBP Water Management — scope of independent lab testing', url: 'https://www.indofoodcbp.com/page/water-management' }],
      clubMarketing: [{ label: 'ICBP official site and brand directory', url: 'https://www.indofoodcbp.com/sitemap' }],
      clubDocs: [{ label: 'ICBP Sustainability Report archive', url: 'https://www.indofoodcbp.com/page/sustainability-report' }, { label: 'ICBP Water Management', url: 'https://www.indofoodcbp.com/page/water-management' }, { label: 'ICBP Waste Management', url: 'https://www.indofoodcbp.com/page/waste-management' }]
    }
  },
  "volkswagen tdi clean diesel": {
    default: [{ label: 'U.S. EPA — Volkswagen Clean Air Act settlement', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }],
    byKey: {
      vwCleanDieselClaim: [{ label: 'EPA — Volkswagen violation announcements and press releases', url: 'https://www.epa.gov/enforcement/volkswagen-announcements-press-releases-and-statements' }, { label: 'EPA — amended complaint', url: 'https://www.epa.gov/enforcement/amended-complaint-volkswagen' }],
      vwEmissionTesting: [{ label: 'EPA — settlement allegations and defeat-device description', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }, { label: 'EPA — amended complaint', url: 'https://www.epa.gov/enforcement/amended-complaint-volkswagen' }],
      vwRegulatoryEvidence: [{ label: 'EPA — Volkswagen enforcement and settlement documents', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }, { label: 'EPA — violation announcements and press releases', url: 'https://www.epa.gov/enforcement/volkswagen-announcements-press-releases-and-statements' }],
      vwEmissionImpact: [{ label: 'EPA — settlement and NOx violation allegations', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }, { label: 'EPA — affected-vehicle documents', url: 'https://www.epa.gov/vw/documents-related-volkswagen-violations-model-years-2009-2016' }],
      vwConsumerImpact: [{ label: 'EPA — scope of the U.S. complaint and affected vehicles', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }, { label: 'Official vehicle settlement program', url: 'https://www.vwcourtsettlement.com/en/' }],
      vwLegalDocuments: [{ label: 'EPA — court settlement and linked consent decrees', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }],
      vwFinancialImpact: [{ label: 'EPA — settlement cost estimate and consumer remedies', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement' }, { label: 'Official U.S. vehicle settlement program', url: 'https://www.vwcourtsettlement.com/en/' }]
    }
  },
  "keurig k cup pods": {
    default: [{ label: 'Competition Bureau Canada — Keurig settlement release', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
    byKey: {
      keurigRecyclingClaim: [{ label: 'Competition Bureau Canada — recyclability claims', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
      keurigRegulatoryReview: [{ label: 'Competition Bureau Canada — investigation and settlement', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
      keurigInfrastructure: [{ label: 'Competition Bureau Canada — municipal recycling acceptance findings', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
      keurigInstructions: [{ label: 'Competition Bureau Canada — preparation instruction findings', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
      keurigCorrectiveAction: [{ label: 'Competition Bureau Canada — corrective action agreement', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
      keurigPenalty: [{ label: 'Competition Bureau Canada — penalty and donation details', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }],
      keurigDocuments: [{ label: 'Competition Bureau Canada — case release and settlement details', url: 'https://www.canada.ca/en/competition-bureau/news/2022/01/keurig-canada-to-pay-3-million-penalty-to-settle-competition-bureaus-concerns-over-coffee-pod-recycling-claims.html' }]
    }
  },
  "hm conscious": {
    default: [{ label: 'ACM publications — search H&M sustainability claims', url: 'https://www.acm.nl/en/publications' }, { label: 'H&M Group — sustainability reporting', url: 'https://www.hmgroup.com/sustainability/' }],
    byKey: {
      hmSustainabilityClaim: [{ label: 'ACM publications — H&M sustainability-claims case', url: 'https://www.acm.nl/en/publications' }, { label: 'H&M Group sustainability information', url: 'https://www.hmgroup.com/sustainability/' }],
      hmRegulatoryReview: [{ label: 'ACM publications archive — regulator source', url: 'https://www.acm.nl/en/publications' }],
      hmBenefitsExplanation: [{ label: 'ACM publications archive — search H&M', url: 'https://www.acm.nl/en/publications' }],
      hmLifecycle: [{ label: 'ACM — sustainability claims guidance and publications', url: 'https://www.acm.nl/en/publications' }],
      hmClaimChanges: [{ label: 'ACM publications archive — H&M commitment', url: 'https://www.acm.nl/en/publications' }],
      hmCorrectiveAction: [{ label: 'ACM publications archive — H&M commitment', url: 'https://www.acm.nl/en/publications' }],
      hmRegulatoryDocuments: [{ label: 'ACM publications archive — official decision search', url: 'https://www.acm.nl/en/publications' }]
    }
  },
  "klm fly responsibly": {
    default: [{ label: 'Amsterdam District Court — ECLI:NL:RBAMS:2024:1512', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
    byKey: {
      klmEnvironmentalClaim: [{ label: 'Court judgment — Fly Responsibly campaign context', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
      klmCourtReview: [{ label: 'Amsterdam District Court — judgment of 20 March 2024', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
      klmVagueClaims: [{ label: 'Court judgment — findings on vague environmental claims', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
      klmSustainableFuel: [{ label: 'Court judgment — SAF advertising findings', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
      klmReforestation: [{ label: 'Court judgment — reforestation and CO₂ZERO findings', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
      klmJudgment: [{ label: 'Amsterdam District Court — dispositive section and judgment', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }],
      klmPublicDocuments: [{ label: 'Official Dutch judiciary decision record', url: 'https://uitspraken.rechtspraak.nl/details?id=ECLI:NL:RBAMS:2024:1512' }]
    }
  },
  "shell go plus": {
    default: [{ label: 'ASA rulings register — search Shell Go+', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
    byKey: {
      shellEnvironmentalClaim: [{ label: 'ASA rulings register — Shell Go+ advertisement', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
      shellRegulatoryReview: [{ label: 'ASA rulings register — official regulator archive', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
      shellOffsetMechanism: [{ label: 'ASA rulings register — Shell advertisement case record', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
      shellClarity: [{ label: 'ASA rulings register — Shell Go+ case search', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
      shellMisunderstandingRisk: [{ label: 'ASA rulings register — Shell Go+ case search', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
      shellAdRuling: [{ label: 'ASA rulings register — formal advertising decisions', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }],
      shellRegulatoryDocuments: [{ label: 'ASA rulings register — official case records', url: 'https://www.asa.org.uk/codes-and-rulings/rulings.html' }]
    }
  }
};

const PRODUCT_TRANSLATIONS = {
  en: {
    "aqua danone indonesia": {
      name: 'AQUA (Danone Indonesia)',
      cat: 'Bottled water · Beverage',
      summary: 'Company disclosures support some operational and packaging claims, but do not establish that all AQUA Life products have a lower environmental impact. Corporate- or program-level evidence does not automatically apply to every product or claim.'
    },
    "cleo": {
      name: 'CLEO (PT Sariguna Primatirta Tbk)',
      cat: 'Bottled water · Beverage',
      summary: 'Sufficient evidence / low risk for the specific claims reviewed: public documentation supports certain packaging and operational claims. Certifications and recycled content do not establish that every CLEO product has a lower overall environmental impact.'
    },
    "club": {
      name: 'CLUB (Indofood CBP)',
      cat: 'Bottled water · Beverage',
      summary: 'Insufficient evidence to verify environmental claims specific to CLUB. ICBP reports company-wide environmental programs, but that evidence does not automatically apply to every CLUB product or package. This is not a red flag finding that CLUB claims are proven misleading.'
    },
    "volkswagen tdi clean diesel": {
      name: 'Volkswagen TDI “Clean Diesel”',
      cat: 'Automotive · Diesel cars',
      summary: 'Red flag: U.S. authorities found defeat-device software in affected Volkswagen diesel vehicles. The claims and findings concern specific affected model years and vehicles in the United States, not every Volkswagen diesel vehicle.'
    },
    "keurig k cup pods": {
      name: 'Keurig K-Cup Pods',
      cat: 'Coffee · Single-use packaging',
      summary: 'Red flag: Canada’s Competition Bureau found Keurig’s recyclability claims false or misleading in areas where the pods were not accepted for recycling and where preparation instructions omitted required local steps. The findings are specific to Canada and municipal programs.'
    },
    "hm conscious": {
      name: 'H&M Conscious',
      cat: 'Fashion · Clothing',
      summary: 'Insufficient evidence: the Dutch ACM considered H&M’s sustainability claims unclear or insufficiently substantiated and H&M committed to adjust or stop certain claims. This was a regulator commitment, not a court judgment that every Conscious item was environmentally harmful.'
    },
    "klm fly responsibly": {
      name: 'KLM Fly Responsibly',
      cat: 'Aviation · Transport',
      summary: 'Red flag: in 2024 the Amsterdam District Court found 15 specific past KLM advertising statements misleading and unlawful. The ruling concerned identified advertisements and claims; it did not declare every KLM environmental statement unlawful.'
    },
    "shell go plus": {
      name: 'Shell Go+',
      cat: 'Fuel · Energy',
      summary: 'Red flag: the UK Advertising Standards Authority ruled that Shell’s “Drive carbon-neutral” advertisement could mislead consumers into thinking the fuel itself was carbon-neutral. The finding concerns the specific advertisement and its offsetting/loyalty-program context.'
    },
    "sensatia botanicals": {
      name: 'Sensatia Botanicals',
      cat: 'Personal care · Beauty',
      summary: 'This product received a moderate-risk verdict because it has clear public evidence for some criteria, but limited transparency on emissions and audit information.'
    },
    "tessa tissue bio plastic packaging": {
      name: 'Tessa Tissue (Bio Plastic Packaging)',
      cat: 'Household paper goods',
      summary: 'This product received a high-risk verdict because it has limited public evidence for several sustainability criteria, even though it shows some certification and material disclosure.'
    },
    "verdanta compostable cups": {
      name: 'Verdanta Compostable Cups',
      cat: 'Food packaging · PLA-based',
      summary: 'This product received a strong evidence-based verdict because it has verified certifications, lab testing, and clear material disclosure.'
    },
    "pureleaf bamboo tissue": {
      name: 'PureLeaf Bamboo Tissue',
      cat: 'Household paper goods',
      summary: 'This product received an amber verdict because it has some credible sourcing evidence, but key testing and emissions details remain missing.'
    },
    "novawear ecoknit tee": {
      name: 'NovaWear EcoKnit Tee',
      cat: 'Apparel · Cotton blend',
      summary: 'This product received a cautionary verdict because its green claims are not backed by verifiable public evidence.'
    },
    "beeswax candle": {
      name: 'Beeswax Candle',
      cat: 'Home goods · Candle',
      summary: 'This product received an amber verdict because it has credible sourcing information but limited public testing and emissions disclosure.'
    },
    "herbal deodorant": {
      name: 'Herbal Deodorant',
      cat: 'Personal care · Deodorant',
      summary: 'This product received a cautionary verdict because several sustainability claims are not supported by public certification or testing data.'
    },
    "citrus shampoo": {
      name: 'Citrus Shampoo',
      cat: 'Personal care · Shampoo',
      summary: 'This product received a green verdict because it has public sourcing and packaging evidence, though some emissions and audit details remain partial.'
    }
  },
  id: {
    "aqua danone indonesia": {
      name: 'AQUA (Danone Indonesia)',
      cat: 'Air minum dalam kemasan · Minuman',
      summary: 'Bukti perusahaan mendukung beberapa aspek operasi dan kemasan, tetapi tidak membuktikan bahwa seluruh produk AQUA Life memiliki dampak lingkungan lebih rendah. Bukti tingkat perusahaan atau program tidak otomatis berlaku untuk setiap produk atau klaim.'
    },
    "cleo": {
      name: 'CLEO (PT Sariguna Primatirta Tbk)',
      cat: 'Air minum dalam kemasan · Minuman',
      summary: 'Bukti cukup / risiko rendah untuk klaim spesifik yang ditinjau: dokumentasi publik mendukung klaim kemasan dan operasi tertentu. Sertifikasi dan kandungan daur ulang tidak membuktikan bahwa setiap produk CLEO memiliki dampak lingkungan keseluruhan yang lebih rendah.'
    },
    "club": {
      name: 'CLUB (Indofood CBP)',
      cat: 'Air minum dalam kemasan · Minuman',
      summary: 'Bukti tidak cukup untuk memverifikasi klaim lingkungan yang spesifik bagi CLUB. ICBP melaporkan program lingkungan pada tingkat perusahaan, tetapi bukti tersebut tidak otomatis berlaku untuk setiap produk atau kemasan CLUB. Ini bukan red flag bahwa klaim CLUB terbukti menyesatkan.'
    },
    "volkswagen tdi clean diesel": {
      name: 'Volkswagen TDI “Clean Diesel”',
      cat: 'Otomotif · Mobil diesel',
      summary: 'Red flag: otoritas AS menemukan perangkat lunak defeat device pada kendaraan diesel Volkswagen terdampak. Klaim dan temuan ini hanya berlaku untuk model tahun dan kendaraan tertentu di Amerika Serikat, bukan semua mobil diesel Volkswagen.'
    },
    "keurig k cup pods": {
      name: 'Keurig K-Cup Pods',
      cat: 'Kopi · Kemasan sekali pakai',
      summary: 'Red flag: Competition Bureau Canada menilai klaim daur ulang Keurig palsu atau menyesatkan di wilayah yang tidak menerima pod tersebut serta ketika instruksi persiapan tidak mencakup langkah lokal yang diwajibkan. Temuan ini khusus untuk Kanada dan program kota setempat.'
    },
    "hm conscious": {
      name: 'H&M Conscious',
      cat: 'Fashion · Pakaian',
      summary: 'Bukti tidak cukup: ACM Belanda menilai klaim keberlanjutan H&M tidak jelas atau tidak cukup didukung, lalu H&M berkomitmen menyesuaikan atau menghentikan klaim tertentu. Ini merupakan komitmen kepada regulator, bukan putusan pengadilan bahwa setiap produk Conscious berdampak buruk bagi lingkungan.'
    },
    "klm fly responsibly": {
      name: 'KLM Fly Responsibly',
      cat: 'Penerbangan · Transportasi',
      summary: 'Red flag: pada 2024, Pengadilan Distrik Amsterdam menyatakan 15 klaim iklan KLM tertentu dari masa lalu menyesatkan dan melanggar hukum. Putusan berlaku untuk iklan dan klaim yang diidentifikasi, bukan setiap pernyataan lingkungan KLM.'
    },
    "shell go plus": {
      name: 'Shell Go+',
      cat: 'Bahan bakar · Energi',
      summary: 'Red flag: Advertising Standards Authority Inggris memutuskan bahwa iklan Shell “Drive carbon-neutral” dapat membuat konsumen mengira bahan bakarnya sendiri netral karbon. Temuan ini berkaitan dengan iklan tertentu serta konteks program loyalitas dan offset.'
    },
    "sensatia botanicals": {
      name: 'Sensatia Botanicals',
      cat: 'Perawatan pribadi · Kecantikan',
      summary: 'Produk ini menerima putusan berisiko menengah karena memiliki bukti publik yang jelas untuk beberapa kriteria, tetapi transparansi yang terbatas pada emisi dan informasi audit.'
    },
    "tessa tissue bio plastic packaging": {
      name: 'Tessa Tissue (Kemasan Plastik Bio)',
      cat: 'Produk kertas rumah tangga',
      summary: 'Produk ini menerima putusan berisiko tinggi karena bukti publik yang terbatas untuk beberapa kriteria keberlanjutan, meskipun menunjukkan beberapa sertifikasi dan pengungkapan material.'
    },
    "verdanta compostable cups": {
      name: 'Verdanta Compostable Cups',
      cat: 'Kemasan makanan · Berbasis PLA',
      summary: 'Produk ini menerima putusan berbasis bukti yang kuat karena memiliki sertifikasi terverifikasi, pengujian laboratorium, dan pengungkapan material yang jelas.'
    },
    "pureleaf bamboo tissue": {
      name: 'PureLeaf Bamboo Tissue',
      cat: 'Produk kertas rumah tangga',
      summary: 'Produk ini menerima putusan kuning karena memiliki beberapa bukti sumber yang kredibel, tetapi detail pengujian dan emisi utama masih belum ada.'
    },
    "novawear ecoknit tee": {
      name: 'NovaWear EcoKnit Tee',
      cat: 'Pakaian · Campuran kapas',
      summary: 'Produk ini menerima putusan hati-hati karena klaim hijau tidak didukung oleh bukti publik yang dapat diverifikasi.'
    },
    "beeswax candle": {
      name: 'Lilin Beeswax',
      cat: 'Perabot rumah · Lilin',
      summary: 'Produk ini menerima putusan kuning karena memiliki informasi sumber yang kredibel tetapi pengujian publik dan pengungkapan emisi yang terbatas.'
    },
    "herbal deodorant": {
      name: 'Deodorant Herbal',
      cat: 'Perawatan pribadi · Deodoran',
      summary: 'Produk ini menerima putusan hati-hati karena beberapa klaim keberlanjutan tidak didukung oleh sertifikasi publik atau data pengujian.'
    },
    "citrus shampoo": {
      name: 'Shampo Citrus',
      cat: 'Perawatan pribadi · Shampoo',
      summary: 'Produk ini menerima putusan hijau karena memiliki bukti sumber dan kemasan yang publik, meskipun beberapa detail emisi dan audit masih parsial.'
    }
  }
};

const EVIDENCE_TRANSLATIONS = {
  en: {
    certification: { label: 'Third-party Certification', description: 'Verification of recognized standards such as EN 13432, FSC, or BPI.' },
    certificateAuthenticity: { label: 'Certificate Authenticity', description: 'Confirmation that certificate numbers exist and can be verified through official databases.' },
    labTesting: { label: 'Laboratory Testing', description: 'Publicly accessible lab testing supporting sustainability claims.' },
    lca: { label: 'Life Cycle Assessment', description: 'Published environmental life cycle assessment data comparing the product with conventional alternatives.' },
    emissions: { label: 'Carbon Emissions Transparency', description: 'Disclosure of Scope 1, 2, and 3 emissions data.' },
    materialComposition: { label: 'Material Composition Disclosure', description: 'Clear identification of raw materials and percentages of renewable, recycled, or conventional inputs.' },
    endOfLife: { label: 'End-of-Life Information', description: 'Clear disposal, recycling, or composting guidance.' },
    audit: { label: 'Independent Third-Party Audit', description: 'Verification that environmental claims have been reviewed or audited by an independent body.' },
    marketing: { label: 'Marketing Language Assessment', description: 'Identification of vague or potentially misleading claims lacking measurable support.' },
    docs: { label: 'Supporting Documentation', description: 'Availability of reports, EPDs, lab reports, or technical documentation.' }
  },
  id: {
    certification: { label: 'Sertifikasi Pihak Ketiga', description: 'Verifikasi standar yang diakui seperti EN 13432, FSC, atau BPI.' },
    certificateAuthenticity: { label: 'Keaslian Sertifikat', description: 'Konfirmasi bahwa nomor sertifikat ada dan dapat diverifikasi melalui basis data resmi.' },
    labTesting: { label: 'Pengujian Laboratorium', description: 'Pengujian laboratorium yang dapat diakses publik untuk mendukung klaim keberlanjutan.' },
    lca: { label: 'Penilaian Siklus Hidup', description: 'Data penilaian siklus hidup lingkungan yang diterbitkan dan membandingkan produk dengan alternatif konvensional.' },
    emissions: { label: 'Transparansi Emisi Karbon', description: 'Pengungkapan data emisi Scope 1, 2, dan 3.' },
    materialComposition: { label: 'Pengungkapan Komposisi Material', description: 'Identifikasi yang jelas tentang bahan baku dan persentase input terbarukan, daur ulang, atau konvensional.' },
    endOfLife: { label: 'Informasi Akhir Masa Pakai', description: 'Panduan pembuangan, daur ulang, atau pengomposan yang jelas.' },
    audit: { label: 'Audit Pihak Ketiga Independen', description: 'Verifikasi bahwa klaim lingkungan telah ditinjau atau diaudit oleh badan independen.' },
    marketing: { label: 'Penilaian Bahasa Pemasaran', description: 'Identifikasi klaim yang kabur atau berpotensi menyesatkan yang tidak memiliki dukungan terukur.' },
    docs: { label: 'Dokumentasi Pendukung', description: 'Ketersediaan laporan, EPD, laporan lab, atau dokumentasi teknis.' }
  }
};

const VERDICT_TRANSLATIONS = {
  en: {
    highRisk: 'High Greenwashing Risk',
    verifiedEvidence: 'Lower Greenwashing Risk',
    insufficientEvidence: 'Insufficient Evidence'
  },
  id: {
    highRisk: 'Risiko Greenwashing Tinggi',
    verifiedEvidence: 'Risiko Greenwashing Rendah',
    insufficientEvidence: 'Bukti Tidak Cukup'
  }
};

const TRANSLATIONS = {
  en: {
    'nav.search': 'Search',
    'nav.learn': 'Learn Before You Believe',
    'nav.evidence': 'Evidence Network',
    'nav.open': 'Open navigation',
    'nav.close': 'Close navigation',
    'hero.badge': 'SDG 12 & SDG 13 · Learner Prototype',
    'hero.title': 'Don\'t trust the label.<br><em>Trace the evidence.</em>',
    'hero.subtitle': 'Search any product to see the certifications, lab tests, and disclosures behind its environmental claims — not just the marketing copy on the box.',
    'search.placeholder': 'Search a product name…',
    'search.button': 'Verify',
    'search.mode.name': 'Name Search',
    'search.mode.image': 'Upload Image',
    'image.preview.title': 'Image selected',
    'image.preview.note': 'Automatic image recognition is not available in this demo yet. Enter the product name above to check its evidence.',
    'image.preview.remove': 'Remove selected image',
    'search.demo.label': 'Try an Indonesian brand:',
    'trust.card1.title': 'Evidence you can trust',
    'trust.card1.text': 'Real certifications, lab tests, and disclosures.',
    'trust.card2.title': 'Transparent & independent',
    'trust.card2.text': 'We connect you to credible third-party data.',
    'trust.card3.title': 'Better choices',
    'trust.card3.text': 'Make informed decisions for a greener future.',
    'trust.card4.title': 'Evidence network',
    'trust.card4.text': 'Built by experts. Backed by science.',
    'learn.preview.kicker': 'Learn before you believe',
    'learn.preview.title': 'Greenwashing can sound convincing.',
    'learn.preview.subtitle': 'Strong evidence is quieter, more specific, and easier to verify.',
    'learn.preview.good.tag': 'Well supported',
    'learn.preview.good.title': 'Claims backed by proof',
    'learn.preview.good.text': 'Look for clear, verifiable evidence and transparent data.',
    'learn.preview.bad.tag': 'Unsupported claim',
    'learn.preview.bad.title': 'Promises without proof',
    'learn.preview.bad.text': 'Watch for vague language, missing sources, or unclear scope.',
    'learn.preview.link': 'Explore the guide <span aria-hidden="true">→</span>',
    'video.title': 'Watch EcoProof in action',
    'video.subtitle': 'A quick demo of how to search, verify product claims, and inspect the evidence behind sustainability marketing.',
    'how.title': 'How to use EcoProof',
    'how.subtitle': 'Start with a product name, review the evidence score, and use the result to tell the difference between marketing claims and real verification.',
    'how.card1.tag': 'Search',
    'how.card1.title': 'Enter a product name',
    'how.card1.text': 'Type or paste the product and click Verify. The search is typo-tolerant and works with the demo product names.',
    'how.card2.tag': 'Review',
    'how.card2.title': 'Inspect the evidence',
    'how.card2.text': 'Compare certifications, lab results, and disclosures to see whether the claim is backed by clear, verifiable proof.',
    'how.link': 'See the Evidence Network →',
    'learn.badge': 'Education · Greenwashing Literacy',
    'learn.title': 'Learn Before You Believe',
    'learn.subtitle': 'Environmental claims can sound convincing without being verifiable. This page breaks down common tactics, what credible evidence looks like, and how to evaluate claims more carefully.',
    'learn.banner.title': 'A good sustainability claim is specific, scoped, and verifiable.',
    'learn.banner.text': 'Follow the claim to its source, then check what the evidence really covers.',
    'learn.cta': 'Explore the Evidence Network',
    'learn.card1.title': 'What greenwashing looks like',
    'learn.card1.item1': 'Vague terms like “eco-friendly,” “natural,” or “planet-safe” without a measurable definition.',
    'learn.card1.item2': 'Self-made logos or symbols that look official but cannot be verified.',
    'learn.card1.item3': 'Highlighting one positive detail while hiding the broader environmental impact.',
    'learn.card2.title': 'What strong evidence looks like',
    'learn.card2.item1': 'Recognized certifications such as Ekolabel Indonesia, EN 13432, FSC, BPI, or similar third-party standards.',
    'learn.card2.item2': 'Publicly accessible lab reports, sustainability reports, or Environmental Product Declarations.',
    'learn.card2.item3': 'Clear disclosures around materials, sourcing, disposal, and emissions.',
    'learn.card3.title': 'How to question a claim',
    'learn.card3.text': 'Ask three things before trusting a sustainability claim: Can it be verified, who verified it, and is the evidence public?',
    'learn.card3.item1': '✔ Is there a certificate number or registry entry?',
    'learn.card3.item2': '✔ Is there a lab report or technical document?',
    'learn.card3.item3': '✔ Does the company explain the full product lifecycle?',
    'learn.card4.title': 'Common red flags',
    'learn.card4.item1': 'Claims that are broad, emotional, or visually persuasive without proof.',
    'learn.card4.item2': 'No named certification body, no document link, and no public evidence trail.',
    'learn.card4.item3': 'Repeated use of “green” language without details about what is being measured.',
    'learn.card5.title': 'Why EcoProof exists',
    'learn.card5.text': 'EcoProof helps users move from marketing language to measurable evidence. The goal is not to replace judgment, but to make evidence easier to find and compare.',
    'evidence.badge': 'Evidence Network · Trace the proof',
    'evidence.title': 'Evidence Network',
    'evidence.subtitle': 'Trace a product claim back to its source, understand its scope, and see what the evidence does—and does not—prove.',
    'evidence.panelTitle': 'A claim should lead to proof.',
    'evidence.panelSub': 'Trace each environmental statement through its source, scope, and verification.',
    'evidence.flow.kicker': 'Follow the evidence',
    'evidence.flow.claim.title': 'Product claim',
    'evidence.flow.claim.text': 'What exactly is being promised—and which product or package does it refer to?',
    'evidence.flow.source.title': 'Public source',
    'evidence.flow.source.text': 'Find the certificate, test report, company disclosure, or regulator record.',
    'evidence.flow.scope.title': 'Evidence & scope',
    'evidence.flow.scope.text': 'Check who verified it, what it covers, and when it remains valid.',
    'evidence.sources.kicker': 'Built for clarity',
    'evidence.sources.title': 'Evidence is more than a badge.',
    'evidence.card1.title': 'Verified sources',
    'evidence.card1.text': 'Certificates, lab tests, and registries help trace the proof behind each claim.',
    'evidence.card2.title': 'Product evidence links',
    'evidence.card2.text': 'Connect product claims to standards, reports, and third-party reviews.',
    'evidence.card3.title': 'Search-ready structure',
    'evidence.card3.text': 'Compare products and indicators through a consistent evidence framework.',
    'evidence.card4.title': 'Designed to grow',
    'evidence.card4.text': 'Add new products, sources, and verification records as evidence becomes available.',
    'evidence.note': 'A certification or company-wide program only supports the claim and scope it actually covers; it does not automatically prove every product is environmentally superior.',
    'footer.text': 'ECOPROOF PROTOTYPE — DUMMY DATA FOR DEMONSTRATION ONLY',
    'chat.title': 'Chat References',
    'chat.body': 'This widget is a placeholder for future notes and quick references.',
    'chat.openLabel': 'Open chat',
    'chat.closeLabel': 'Close chat',
    'result.scoreLabel': 'Safety / 100',
    'result.summaryLabel': 'Why this result?',
    'result.loading': 'Generating an evidence-based explanation…',
    'result.breakdownTitle': 'Evidence Breakdown',
    'result.breakdownSub': 'Score is the average tone of the listed indicators: negative = 0, neutral = 50, positive = 100. It is an indicative screening score, not a measured environmental footprint.',
    'result.sourceLabel': 'Source',
    'result.noMatchTitle': 'No match in the demo database',
    'result.noMatchText': 'Try one of the sample products below the search bar — this prototype runs on a small dummy dataset.',
    'result.closestMatch': 'Showing closest match for "{query}" from the demo database.'
  },
  id: {
    'nav.search': 'Cari',
    'nav.learn': 'Pelajari Sebelum Percaya',
    'nav.evidence': 'Jaringan Bukti',
    'nav.open': 'Buka navigasi',
    'nav.close': 'Tutup navigasi',
    'hero.badge': 'SDG 12 & SDG 13 · Prototipe Pelajar',
    'hero.title': 'Jangan percaya label.<br><em>Lacak bukti.</em>',
    'hero.subtitle': 'Cari produk apa pun untuk melihat sertifikasi, uji laboratorium, dan pengungkapan di balik klaim lingkungan — bukan hanya copy pemasaran di kemasan.',
    'search.placeholder': 'Cari nama produk…',
    'search.button': 'Periksa',
    'search.mode.name': 'Pencarian Nama',
    'search.mode.image': 'Unggah Gambar',
    'image.preview.title': 'Gambar dipilih',
    'image.preview.note': 'Pengenalan gambar otomatis belum tersedia di demo ini. Masukkan nama produk di atas untuk memeriksa buktinya.',
    'image.preview.remove': 'Hapus gambar yang dipilih',
    'search.demo.label': 'Coba merek Indonesia:',
    'trust.card1.title': 'Bukti yang dapat dipercaya',
    'trust.card1.text': 'Sertifikasi, uji lab, dan pengungkapan yang nyata.',
    'trust.card2.title': 'Transparan & independen',
    'trust.card2.text': 'Menghubungkan Anda dengan data pihak ketiga yang kredibel.',
    'trust.card3.title': 'Pilihan yang lebih baik',
    'trust.card3.text': 'Buat keputusan tepat untuk masa depan yang lebih hijau.',
    'trust.card4.title': 'Jaringan bukti',
    'trust.card4.text': 'Dibangun para ahli. Didukung sains.',
    'learn.preview.kicker': 'Pelajari sebelum percaya',
    'learn.preview.title': 'Greenwashing bisa terdengar meyakinkan.',
    'learn.preview.subtitle': 'Bukti kuat lebih spesifik, tidak berlebihan, dan mudah diverifikasi.',
    'learn.preview.good.tag': 'Didukung bukti',
    'learn.preview.good.title': 'Klaim disertai bukti',
    'learn.preview.good.text': 'Cari bukti yang jelas, dapat diverifikasi, dan data yang transparan.',
    'learn.preview.bad.tag': 'Klaim tanpa dukungan',
    'learn.preview.bad.title': 'Janji tanpa bukti',
    'learn.preview.bad.text': 'Waspadai bahasa yang kabur, sumber yang hilang, atau ruang lingkup yang tidak jelas.',
    'learn.preview.link': 'Jelajahi panduan <span aria-hidden="true">→</span>',
    'video.title': 'Lihat EcoProof bekerja',
    'video.subtitle': 'Demo singkat tentang cara mencari, memverifikasi klaim produk, dan memeriksa bukti di balik pemasaran keberlanjutan.',
    'how.title': 'Cara menggunakan EcoProof',
    'how.subtitle': 'Mulai dengan nama produk, tinjau skor bukti, dan gunakan hasilnya untuk membedakan klaim pemasaran dari verifikasi yang sebenarnya.',
    'how.card1.tag': 'Cari',
    'how.card1.title': 'Masukkan nama produk',
    'how.card1.text': 'Ketik atau tempel produk lalu klik Periksa. Pencarian ini tahan salah ketik dan bekerja dengan nama produk demo.',
    'how.card2.tag': 'Tinjau',
    'how.card2.title': 'Periksa bukti',
    'how.card2.text': 'Bandingkan sertifikasi, hasil uji laboratorium, dan pengungkapan untuk melihat apakah klaim tersebut didukung bukti yang jelas dan dapat diverifikasi.',
    'how.link': 'Lihat Jaringan Bukti →',
    'learn.badge': 'Edukasi · Literasi Greenwashing',
    'learn.title': 'Pelajari Sebelum Percaya',
    'learn.subtitle': 'Klaim lingkungan bisa terdengar meyakinkan tanpa bisa diverifikasi. Halaman ini menjelaskan taktik umum, seperti apa bukti yang kredibel, dan cara mengevaluasi klaim dengan lebih hati-hati.',
    'learn.banner.title': 'Klaim keberlanjutan yang baik bersifat spesifik, jelas ruang lingkupnya, dan dapat diverifikasi.',
    'learn.banner.text': 'Telusuri klaim hingga ke sumbernya, lalu periksa apa yang benar-benar dicakup oleh bukti.',
    'learn.cta': 'Jelajahi Jaringan Bukti',
    'learn.card1.title': 'Seperti apa greenwashing terlihat',
    'learn.card1.item1': 'Istilah kabur seperti “ramah lingkungan,” “alami,” atau “aman bagi planet” tanpa definisi yang terukur.',
    'learn.card1.item2': 'Logo atau simbol buatan sendiri yang tampak resmi tetapi tidak bisa diverifikasi.',
    'learn.card1.item3': 'Menonjolkan satu detail positif sambil menyembunyikan dampak lingkungan yang lebih luas.',
    'learn.card2.title': 'Seperti apa bukti kuat terlihat',
    'learn.card2.item1': 'Sertifikasi yang diakui seperti Ekolabel Indonesia, EN 13432, FSC, BPI, atau standar pihak ketiga serupa.',
    'learn.card2.item2': 'Laporan uji laboratorium, laporan keberlanjutan, atau Environmental Product Declaration yang dapat diakses publik.',
    'learn.card2.item3': 'Pengungkapan yang jelas mengenai material, sumber, pembuangan, dan emisi.',
    'learn.card3.title': 'Cara mempertanyakan suatu klaim',
    'learn.card3.text': 'Tanyakan tiga hal sebelum mempercayai klaim keberlanjutan: Apakah bisa diverifikasi, siapa yang memverifikasinya, dan apakah bukti tersebut publik?',
    'learn.card3.item1': '✔ Apakah ada nomor sertifikat atau entri registri?',
    'learn.card3.item2': '✔ Apakah ada laporan laboratorium atau dokumen teknis?',
    'learn.card3.item3': '✔ Apakah perusahaan menjelaskan siklus hidup produk secara lengkap?',
    'learn.card4.title': 'Tanda bahaya umum',
    'learn.card4.item1': 'Klaim yang luas, emosional, atau persuasif secara visual tanpa bukti.',
    'learn.card4.item2': 'Tidak ada badan sertifikasi yang disebutkan, tidak ada tautan dokumen, dan tidak ada jejak bukti publik.',
    'learn.card4.item3': 'Penggunaan bahasa “hijau” berulang tanpa rincian tentang apa yang diukur.',
    'learn.card5.title': 'Mengapa EcoProof ada',
    'learn.card5.text': 'EcoProof membantu pengguna beralih dari bahasa pemasaran ke bukti yang terukur. Tujuannya bukan untuk menggantikan penilaian, tetapi membuat bukti lebih mudah ditemukan dan dibandingkan.',
    'evidence.badge': 'Jaringan Bukti · Telusuri buktinya',
    'evidence.title': 'Jaringan Bukti',
    'evidence.subtitle': 'Telusuri klaim produk hingga ke sumbernya, pahami ruang lingkupnya, dan lihat apa yang dapat—dan tidak dapat—dibuktikan oleh data.',
    'evidence.panelTitle': 'Klaim harus mengarah pada bukti.',
    'evidence.panelSub': 'Telusuri setiap pernyataan lingkungan melalui sumber, ruang lingkup, dan verifikasinya.',
    'evidence.flow.kicker': 'Ikuti jejak bukti',
    'evidence.flow.claim.title': 'Klaim produk',
    'evidence.flow.claim.text': 'Apa yang dijanjikan secara spesifik—dan produk atau kemasan mana yang dimaksud?',
    'evidence.flow.source.title': 'Sumber publik',
    'evidence.flow.source.text': 'Cari sertifikat, laporan uji, pengungkapan perusahaan, atau catatan regulator.',
    'evidence.flow.scope.title': 'Bukti & ruang lingkup',
    'evidence.flow.scope.text': 'Periksa siapa yang memverifikasi, apa yang dicakup, dan masa berlakunya.',
    'evidence.sources.kicker': 'Dirancang agar jelas',
    'evidence.sources.title': 'Bukti lebih dari sekadar lencana.',
    'evidence.card1.title': 'Sumber yang terverifikasi',
    'evidence.card1.text': 'Sertifikat, uji laboratorium, dan registri membantu menelusuri bukti di balik setiap klaim.',
    'evidence.card2.title': 'Tautan bukti produk',
    'evidence.card2.text': 'Hubungkan klaim produk dengan standar, laporan, dan tinjauan pihak ketiga.',
    'evidence.card3.title': 'Struktur siap pencarian',
    'evidence.card3.text': 'Bandingkan produk dan indikator dengan kerangka bukti yang konsisten.',
    'evidence.card4.title': 'Dirancang untuk berkembang',
    'evidence.card4.text': 'Tambahkan produk, sumber, dan catatan verifikasi baru seiring tersedianya bukti.',
    'evidence.note': 'Sertifikasi atau program tingkat perusahaan hanya mendukung klaim dan ruang lingkup yang benar-benar dicakupnya; hal itu tidak otomatis membuktikan setiap produk lebih baik bagi lingkungan.',
    'footer.text': 'PROTOTIPE ECOPROOF — DATA PALSU UNTUK DEMONSTRASI SAJA',
    'chat.title': 'Referensi Obrolan',
    'chat.body': 'Widget ini hanya placeholder; gunakan ini nanti untuk catatan dan referensi singkat.',
    'chat.openLabel': 'Buka obrolan',
    'chat.closeLabel': 'Tutup obrolan',
    'result.scoreLabel': 'Aman / 100',
    'result.summaryLabel': 'Mengapa hasil ini?',
    'result.loading': 'Membuat penjelasan berbasis bukti…',
    'result.breakdownTitle': 'Rincian Bukti',
    'result.breakdownSub': 'Skor adalah rata-rata nada indikator: negatif = 0, netral = 50, positif = 100. Ini skor penyaringan indikatif, bukan ukuran jejak lingkungan yang terukur.',
    'result.sourceLabel': 'Sumber',
    'result.noMatchTitle': 'Tidak ada kecocokan dalam database demo',
    'result.noMatchText': 'Coba salah satu produk contoh di bawah bilah pencarian — prototipe ini berjalan dengan dataset tiruan kecil.',
    'result.closestMatch': 'Menampilkan kecocokan terdekat untuk "{query}" dari database demo.'
  }
};

const STORAGE_KEY = 'ecoproof-language';
const storedLanguage = localStorage.getItem(STORAGE_KEY);
let currentLanguage = storedLanguage === 'en' ? 'en' : 'id';
let currentResultProduct = null;
let currentResultNote = null;

function getText(key){
  return (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || TRANSLATIONS.en[key] || key;
}

function getSourceLabel(source){
  if(currentLanguage !== 'id') return source.label;
  if(source.labelId) return source.labelId;

  const exactTranslations = {
    'ICBP Energy Management': 'Manajemen Energi ICBP',
    'ICBP Waste Management': 'Pengelolaan Sampah ICBP',
    'ICBP Water Management': 'Pengelolaan Air ICBP',
    'EPA — amended complaint': 'EPA — gugatan yang telah diamendemen',
    'ICBP Sustainability Reports reviewed (no CLUB product LCA identified)': 'Laporan keberlanjutan ICBP yang ditinjau (LCA produk CLUB publik tidak ditemukan)',
    'ICBP Sustainability Reports — energy and emissions information': 'Laporan keberlanjutan ICBP — informasi energi dan emisi',
    'ICBP company and brand directory (CLUB-specific certificate not identified)': 'Direktori perusahaan dan merek ICBP (sertifikat khusus CLUB tidak ditemukan)',
    'ICBP official site and brand directory': 'Situs resmi dan direktori merek ICBP',
    'ACM publications — search H&M sustainability claims': 'Publikasi ACM — cari klaim keberlanjutan H&M',
    'ACM publications — H&M sustainability-claims case': 'Publikasi ACM — kasus klaim keberlanjutan H&M',
    'ACM publications archive — regulator source': 'Arsip publikasi ACM — sumber regulator',
    'ACM publications archive — search H&M': 'Arsip publikasi ACM — cari H&M',
    'ACM publications archive — H&M commitment': 'Arsip publikasi ACM — komitmen H&M',
    'ACM publications archive — official decision search': 'Arsip publikasi ACM — pencarian keputusan resmi',
    'H&M Group — sustainability reporting': 'H&M Group — pelaporan keberlanjutan',
    'H&M Group sustainability information': 'Informasi keberlanjutan H&M Group',
    'ASA rulings register — search Shell Go+': 'Daftar putusan ASA — cari Shell Go+',
    'ASA rulings register — Shell Go+ advertisement': 'Daftar putusan ASA — iklan Shell Go+',
    'ASA rulings register — official regulator archive': 'Daftar putusan ASA — arsip resmi regulator',
    'ASA rulings register — Shell advertisement case record': 'Daftar putusan ASA — catatan kasus iklan Shell',
    'ASA rulings register — Shell Go+ case search': 'Daftar putusan ASA — pencarian kasus Shell Go+',
    'ASA rulings register — formal advertising decisions': 'Daftar putusan ASA — keputusan resmi periklanan',
    'ASA rulings register — official case records': 'Daftar putusan ASA — catatan kasus resmi'
  };
  if(exactTranslations[source.label]) return exactTranslations[source.label];

  const translations = [
    ['financial and extra-financial reports', 'laporan keuangan dan non-keuangan'],
    ['product information (environmental comparative test not located)', 'informasi produk (uji perbandingan lingkungan tidak ditemukan)'],
    ['reports reviewed (no public product LCA identified)', 'laporan yang ditinjau (LCA produk publik tidak ditemukan)'],
    ['sustainability-claims case', 'kasus klaim keberlanjutan'],
    ['sustainability claims', 'klaim keberlanjutan'],
    ['sustainability reports', 'laporan keberlanjutan'],
    ['sustainability report archive', 'arsip laporan keberlanjutan'],
    ['sustainability reports reviewed', 'laporan keberlanjutan yang ditinjau'],
    ['sustainability and investor reports', 'laporan keberlanjutan dan investor'],
    ['investor relations and reports', 'hubungan investor dan laporan'],
    ['company quality and product information', 'informasi mutu perusahaan dan produk'],
    ['official company information', 'informasi resmi perusahaan'],
    ['ICBP Energy Management', 'Manajemen Energi ICBP'],
    ['ICBP Waste Management', 'Pengelolaan Sampah ICBP'],
    ['ICBP Water Management', 'Pengelolaan Air ICBP'],
    ['EPA — amended complaint', 'EPA — gugatan yang telah diamendemen'],
    ['official site', 'situs resmi'],
    ['product and company information', 'informasi produk dan perusahaan'],
    ['product and packaging information', 'informasi produk dan kemasan'],
    ['packaging and product information', 'informasi kemasan dan produk'],
    ['product information and claim scope', 'informasi produk dan ruang lingkup klaim'],
    ['circularity and collection information', 'informasi ekonomi sirkular dan pengumpulan'],
    ['company and brand directory', 'direktori perusahaan dan merek'],
    ['brand directory and product information', 'direktori merek dan informasi produk'],
    ['company and brand directory (CLUB-specific certificate not identified)', 'direktori perusahaan dan merek (sertifikat khusus CLUB tidak ditemukan)'],
    ['official site and brand directory', 'situs resmi dan direktori merek'],
    ['awards & certifications', 'penghargaan & sertifikasi'],
    ['independent wastewater testing', 'pengujian air limbah independen'],
    ['scope of independent lab testing', 'ruang lingkup pengujian laboratorium independen'],
    ['municipal recycling acceptance findings', 'temuan penerimaan daur ulang oleh pemerintah kota'],
    ['preparation instruction findings', 'temuan terkait instruksi persiapan'],
    ['corrective action agreement', 'kesepakatan tindakan perbaikan'],
    ['penalty and donation details', 'rincian penalti dan donasi'],
    ['case release and settlement details', 'rilis kasus dan rincian penyelesaian'],
    ['investigation and settlement', 'investigasi dan penyelesaian'],
    ['recyclability claims', 'klaim daur ulang'],
    ['settlement release', 'rilis penyelesaian'],
    ['settlement allegations and defeat-device description', 'dugaan penyelesaian dan penjelasan perangkat pengelabuan uji'],
    ['court settlement and linked consent decrees', 'penyelesaian pengadilan dan keputusan persetujuan terkait'],
    ['settlement cost estimate and consumer remedies', 'estimasi biaya penyelesaian dan pemulihan konsumen'],
    ['violation announcements and press releases', 'pengumuman pelanggaran dan siaran pers'],
    ['affected-vehicle documents', 'dokumen kendaraan terdampak'],
    ['scope of the U.S. complaint and affected vehicles', 'cakupan gugatan AS dan kendaraan terdampak'],
    ['clean air act settlement', 'penyelesaian Clean Air Act'],
    ['official U.S. vehicle settlement program', 'program penyelesaian kendaraan resmi AS'],
    ['official vehicle settlement program', 'program penyelesaian kendaraan resmi'],
    ['court judgment', 'putusan pengadilan'],
    ['court judgment —', 'putusan pengadilan —'],
    ['court judgment — findings', 'putusan pengadilan — temuan'],
    ['court judgment — SAF advertising findings', 'putusan pengadilan — temuan iklan SAF'],
    ['court judgment — reforestation and CO₂ZERO findings', 'putusan pengadilan — temuan reforestasi dan CO₂ZERO'],
    ['court judgment — Fly Responsibly campaign context', 'putusan pengadilan — konteks kampanye Fly Responsibly'],
    ['Amsterdam District Court', 'Pengadilan Distrik Amsterdam'],
    ['official Dutch judiciary decision record', 'catatan putusan resmi peradilan Belanda'],
    ['evidence & scope', 'bukti & ruang lingkup'],
    ['claim scope', 'ruang lingkup klaim'],
    ['official regulator archive', 'arsip resmi regulator'],
    ['official case records', 'catatan kasus resmi'],
    ['formal advertising decisions', 'putusan resmi periklanan'],
    ['Shell Go+ advertisement', 'iklan Shell Go+'],
    ['Shell Go+ case search', 'pencarian kasus Shell Go+'],
    ['Shell advertisement case record', 'catatan kasus iklan Shell'],
    ['H&M commitment', 'komitmen H&M'],
    ['regulator source', 'sumber regulator'],
    ['search H&M', 'cari H&M'],
    ['H&M Group sustainability information', 'informasi keberlanjutan H&M Group'],
    ['sustainability reporting', 'pelaporan keberlanjutan'],
    ['search', 'pencarian'],
    ['archive', 'arsip'],
    ['information', 'informasi'],
    ['reports', 'laporan'],
    ['report', 'laporan'],
    ['product', 'produk'],
    ['company', 'perusahaan'],
    ['claim', 'klaim'],
    ['scope', 'ruang lingkup'],
    ['verified', 'terverifikasi'],
    ['official', 'resmi'],
    ['source', 'sumber'],
    ['and', 'dan']
  ];

  return translations.reduce((label, [english, indonesian]) =>
    label.replace(new RegExp(english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), indonesian), source.label);
}

function getProductTranslation(product, field){
  const productKey = Object.keys(DB).find(key => DB[key] === product) || normalizeKey(product && product.name ? product.name : '');
  const translation = PRODUCT_TRANSLATIONS[currentLanguage] && PRODUCT_TRANSLATIONS[currentLanguage][productKey];
  return (translation && translation[field]) || product && product[field] || '';
}

function getEvidenceTranslation(key, field){
  const translation = EVIDENCE_TRANSLATIONS[currentLanguage] && EVIDENCE_TRANSLATIONS[currentLanguage][key];
  return (translation && translation[field]) || EVIDENCE_TEMPLATES[key] && EVIDENCE_TEMPLATES[key][field] || '';
}

function getVerdictText(key){
  return (VERDICT_TRANSLATIONS[currentLanguage] && VERDICT_TRANSLATIONS[currentLanguage][key]) || VERDICT_TRANSLATIONS.en[key] || key;
}

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getText(key);
    if (translation) {
      element.innerHTML = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = getText(key);
    if (translation) {
      element.placeholder = translation;
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    const key = element.getAttribute('data-i18n-aria-label');
    element.setAttribute('aria-label', getText(key));
  });

  const toggleButton = document.querySelector('.lang-switch span');
  if (toggleButton) {
    toggleButton.textContent = currentLanguage === 'id' ? 'ID / EN' : 'EN / ID';
  }

  document.documentElement.lang = currentLanguage === 'id' ? 'id' : 'en';
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.setAttribute('aria-label', getText(menuToggle.getAttribute('aria-expanded') === 'true' ? 'nav.close' : 'nav.open'));
  }
}

function toggleLanguage(){
  currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
  localStorage.setItem(STORAGE_KEY, currentLanguage);
  applyTranslations();
  if (currentResultProduct) {
    render(currentResultProduct, currentResultNote);
  }
}

function toggleNav(){
  const nav = document.getElementById('primaryNav');
  const button = document.getElementById('menuToggle');
  if (!nav || !button) return;
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
  button.setAttribute('aria-label', getText(isOpen ? 'nav.close' : 'nav.open'));
}

function initResponsiveNavigation(){
  const nav = document.getElementById('primaryNav');
  if (!nav) return;
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    const button = document.getElementById('menuToggle');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', getText('nav.open'));
    }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) toggleNav();
  });
}

function setSearchMode(mode){
  const nameButton = document.getElementById('nameSearchMode');
  const imageButton = document.getElementById('imageSearchMode');
  const imageInput = document.getElementById('productImageInput');
  if (!nameButton || !imageButton || !imageInput) return;

  const isImageMode = mode === 'image';
  nameButton.classList.toggle('active', !isImageMode);
  imageButton.classList.toggle('active', isImageMode);
  nameButton.setAttribute('aria-pressed', String(!isImageMode));
  imageButton.setAttribute('aria-pressed', String(isImageMode));

  if (isImageMode) imageInput.click();
  else document.getElementById('searchInput')?.focus();
}

function updateSearchModeButtons(mode){
  const isImageMode = mode === 'image';
  const nameButton = document.getElementById('nameSearchMode');
  const imageButton = document.getElementById('imageSearchMode');
  if (!nameButton || !imageButton) return;
  nameButton.classList.toggle('active', !isImageMode);
  imageButton.classList.toggle('active', isImageMode);
  nameButton.setAttribute('aria-pressed', String(!isImageMode));
  imageButton.setAttribute('aria-pressed', String(isImageMode));
}

function initImageUpload(){
  const imageInput = document.getElementById('productImageInput');
  const preview = document.getElementById('imageUploadPreview');
  const previewImage = document.getElementById('uploadedProductImage');
  if (!imageInput || !preview || !previewImage) return;

  imageInput.addEventListener('change', () => {
    const file = imageInput.files && imageInput.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    if (previewImage.dataset.objectUrl) URL.revokeObjectURL(previewImage.dataset.objectUrl);
    const objectUrl = URL.createObjectURL(file);
    previewImage.dataset.objectUrl = objectUrl;
    previewImage.src = objectUrl;
    previewImage.alt = file.name;
    preview.hidden = false;
    updateSearchModeButtons('image');
  });
}

function clearImagePreview(){
  const imageInput = document.getElementById('productImageInput');
  const preview = document.getElementById('imageUploadPreview');
  const previewImage = document.getElementById('uploadedProductImage');
  if (!imageInput || !preview || !previewImage) return;
  if (previewImage.dataset.objectUrl) URL.revokeObjectURL(previewImage.dataset.objectUrl);
  previewImage.removeAttribute('src');
  delete previewImage.dataset.objectUrl;
  imageInput.value = '';
  preview.hidden = true;
  updateSearchModeButtons('name');
  document.getElementById('searchInput')?.focus();
}

function initChatWidget(){
  const chatContainer = document.createElement('div');
  chatContainer.className = 'chat-widget-container';
  chatContainer.innerHTML = `
    <div class="chat-widget">
      <button type="button" class="chat-widget-toggle" id="chatWidgetToggle" aria-label="${getText('chat.openLabel')}">${getText('chat.openLabel')}</button>
      <div class="chat-widget-panel closed" id="chatWidgetPanel">
        <div class="chat-widget-header">
          <div id="chatWidgetTitle">${getText('chat.title')}</div>
          <button type="button" class="chat-widget-close" id="chatWidgetClose" aria-label="${getText('chat.closeLabel')}">×</button>
        </div>
        <div class="chat-widget-body">
          <p>${getText('chat.body')}</p>
        </div>
      </div>
    </div>`;

  document.body.appendChild(chatContainer);

  const toggle = document.getElementById('chatWidgetToggle');
  const panel = document.getElementById('chatWidgetPanel');
  const closeButton = document.getElementById('chatWidgetClose');

  const updateLabels = () => {
    const isClosed = panel.classList.contains('closed');
    const openText = getText('chat.openLabel');
    const closeText = getText('chat.closeLabel');
    toggle.textContent = isClosed ? openText : closeText;
    toggle.setAttribute('aria-label', isClosed ? openText : closeText);
    closeButton.setAttribute('aria-label', closeText);
    document.getElementById('chatWidgetTitle').textContent = getText('chat.title');
    panel.querySelector('.chat-widget-body p').textContent = getText('chat.body');
  };

  toggle.addEventListener('click', () => {
    panel.classList.toggle('closed');
    updateLabels();
  });

  closeButton.addEventListener('click', () => {
    panel.classList.add('closed');
    updateLabels();
  });

  updateLabels();
}

applyTranslations();
initChatWidget();
initResponsiveNavigation();
initImageUpload();

function iconChar(t){
  if (t === 'positive') return '✓';
  if (t === 'neutral') return '!';
  if (t === 'negative') return '✗';
  return '✗';
}

function getSentiment(status){
  if(status === 'false') return 'negative';
  if(status === 'partial' || status === 'missing' || status === 'not-evaluated') return 'neutral';
  return 'positive';
}

function normalizeKey(text){
  return String(text || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

function levenshtein(a, b){
  const source = String(a || '');
  const target = String(b || '');
  const rows = source.length + 1;
  const cols = target.length + 1;
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) matrix[i][0] = i;
  for (let j = 0; j < cols; j++) matrix[0][j] = j;
  for (let i = 1; i < rows; i++){
    for (let j = 1; j < cols; j++){
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[source.length][target.length];
}

function getClosestProduct(query){
  const q = normalizeKey(query);
  if(!q) return null;
  let best = null;
  let bestScore = Infinity;
  Object.values(DB).forEach(product => {
    const candidate = normalizeKey(product.name);
    const distance = levenshtein(q, candidate);
    const normalized = distance / Math.max(q.length, candidate.length, 1);
    if(normalized < bestScore){
      bestScore = normalized;
      best = product;
    }
  });
  return bestScore <= 0.35 ? { product: best, score: bestScore } : null;
}

function buildEvidenceRows(product){
  const evidence = Array.isArray(product.evidence) ? product.evidence : [];
  const productKey = Object.keys(DB).find(key => DB[key] === product);
  const sourceMap = PRODUCT_SOURCE_LINKS[productKey];
  return evidence.map(item => {
    const evidenceStatus = item.status || 'missing';
    const sentiment = item.sentiment || product.sentimentOverrides?.[item.key] || getSentiment(evidenceStatus);
    const localizedLabel = currentLanguage === 'en' ? item.labelEn : item.label;
    const label = localizedLabel || getEvidenceTranslation(item.key, 'label') || EVIDENCE_TEMPLATES[item.key]?.label || item.label || item.key || 'Evidence';
    const localizedDescription = currentLanguage === 'en' ? item.descriptionEn : item.description;
    const description = localizedDescription || getEvidenceTranslation(item.key, 'description') || item.description || EVIDENCE_TEMPLATES[item.key]?.description || '';
    const sources = item.sources || sourceMap?.byKey?.[item.key] || sourceMap?.default || [];
    return [sentiment, label, description, evidenceStatus, sources];
  });
}

function deriveProductState(product){
  const indicators = buildEvidenceRows(product);
  const total = indicators.length || 10;
  const sentimentPoints = { negative: 0, neutral: 50, positive: 100 };
  const sentimentTotal = indicators.reduce((sum, [sentiment]) => sum + (sentimentPoints[sentiment] ?? 50), 0);
  const safetyScore = Math.round(sentimentTotal / total);

  let verdict = 'red';
  let verdictLabel = getVerdictText('highRisk');
  if(safetyScore >= 75){ verdict = 'green'; verdictLabel = getVerdictText('verifiedEvidence'); }
  else if(safetyScore >= 45){ verdict = 'amber'; verdictLabel = getVerdictText('insufficientEvidence'); }

  if(product.verdictOverride){
    verdict = product.verdictOverride.color;
    verdictLabel = currentLanguage === 'en' ? product.verdictOverride.labelEn : product.verdictOverride.labelId;
  }

  return {
    ...product,
    name: getProductTranslation(product, 'name') || product.name,
    cat: getProductTranslation(product, 'cat') || product.cat,
    summary: getProductTranslation(product, 'summary') || product.summary,
    score: safetyScore,
    verdict,
    verdictLabel,
    indicators
  };
}

function render(p, note){
  currentResultProduct = p;
  currentResultNote = note || null;
  const product = deriveProductState(p);
  const el = document.getElementById('results');
  const noteText = note && typeof note === 'object'
    ? getText(note.key).replace('{query}', note.query)
    : note;
  const noteHtml = noteText ? `<div class="note-banner">${noteText}</div>` : '';
  const rows = product.indicators.map(([sentiment, name, desc, , sources]) => `
    <div class="indicator">
      <div class="icon ${sentiment}">${iconChar(sentiment)}</div>
      <div class="body">
        <div class="name">${name}</div>
        <div class="desc">${desc}</div>
        ${sources.length ? `<div class="source-links"><span>${getText('result.sourceLabel')}:</span> ${sources.map(source => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${getSourceLabel(source)} ↗</a>`).join(' · ')}</div>` : ''}
      </div>
    </div>`).join('');

  el.innerHTML = `
    ${noteHtml}
    <div class="result-header">
      <div class="stamp ${product.verdict}">
        <div class="score">${product.score}</div>
        <div class="label">${getText('result.scoreLabel')}</div>
      </div>
      <div class="result-meta">
        <div class="pname">${product.name}</div>
        <div class="pcat">${product.cat}</div>
        <span class="verdict-tag ${product.verdict}">${product.verdictLabel}</span>
      </div>
    </div>
    <div class="summary-box">
      <span class="tag">${getText('result.summaryLabel')}</span>
      <span class="summary-text">${product.summary}</span>
    </div>
    <div class="panel-title">${getText('result.breakdownTitle')}</div>
    <div class="panel-sub">${getText('result.breakdownSub')}</div>
    <div class="indicator-list">${rows}</div>
  `;
  el.style.display = 'block';
  el.scrollIntoView({behavior:'smooth', block:'start'});
}

async function runSearch(){
  const q = document.getElementById('searchInput').value.trim();
  const normalized = normalizeKey(q);
  const exactMatch = normalized && DB[normalized];
  const substringMatch = exactMatch || Object.values(DB).find(p => normalizeKey(p.name).includes(normalized));

  if(substringMatch){
    await render(substringMatch);
    return;
  }

  if(normalized){
    const closest = getClosestProduct(q);
    if(closest){
      await render(closest.product, { key: 'result.closestMatch', query: q });
      return;
    }

    currentResultProduct = null;
    currentResultNote = null;
    document.getElementById('results').innerHTML = `
      <div style="padding:60px 0; text-align:center;">
        <div class="panel-title">${getText('result.noMatchTitle')}</div>
        <p class="panel-sub">${getText('result.noMatchText')}</p>
      </div>`;
    document.getElementById('results').style.display = 'block';
  }
}

function demo(name){
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  searchInput.value = name;
  runSearch();
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keydown', e => { if(e.key === 'Enter') runSearch(); });
}

