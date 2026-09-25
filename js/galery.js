// ==========================================
// 1. KÉPLISTÁK ÉS FELIRATOK SZÉTVÁLASZTÁSA
// ==========================================

// --- UTCAFRONTI HÁZ ÉS KERT GALÉRIÁJA ---
const utcafrontiKepek = [
    "kert/muholdaskep.jpg", "kert/utcafrontj.jpg", "kert/utcafrontb.jpg", "kert/nhkiskapu.jpg", 
    "kert/fedettterasz.jpg", "parkolo.jpg", "kert/kukatarolo.jpg", "kert/kukatarolokerttol.jpg", 
    "kert/kukataroloutcarol.jpg", "kert/elokertb.jpg", "kert/elokertb1.jpg", "kert/teraszhkiskerth.jpg", 
    "kert/teraszkiskerte.jpg", "nagyhaz/nhalarajzmeretnelkul.jpg", "nagyhaz/nhalarajzmeret.jpg",
    "nagyhaz/nh-a_parkolof.jpg", "nagyhaz/nh-bejarat.jpg", "nagyhaz/nh-eloszoba.jpg", 
    "nagyhaz/nh-furdosz.jpg", "nagyhaz/nh-furdosz1.jpg", "nagyhaz/nh-furdosz2.jpg", 
    "nagyhaz/nh-furdosz3.jpg", "nagyhaz/nh-furdosz4.jpg", "nagyhaz/nh-gepeszeti.jpg", 
    "nagyhaz/nh-kis_telepcsohf.jpg", "nagyhaz/nh-kis_terasz.jpg", "nagyhaz/nh-kis_terasz1.jpg", 
    "nagyhaz/nh-kis-furdo.jpg", "nagyhaz/nh-kis-furdo1.jpg", "nagyhaz/nh-kiskapu.jpg",
    "nagyhaz/nh-konyha.jpg", "nagyhaz/nh-konyha1.jpg", "nagyhaz/nh-konyha2.jpg", 
    "nagyhaz/nh-konyha3.jpg", "nagyhaz/nh-konyha4.jpg", "nagyhaz/nh-nappali.jpg", 
    "nagyhaz/nh-nappali1.jpg", "nagyhaz/nh-nappali2.jpg", "nagyhaz/nh-nappali3.jpg", 
    "nagyhaz/nh-oldalról.jpg", "nagyhaz/nh-szoba.jpg", "nagyhaz/nh-szoba1.jpg", 
    "nagyhaz/nh-szoba2.jpg", "nagyhaz/nh-szoba3.jpg", "nagyhaz/nh-teraszlepcso.jpg",
    "nagyhaz/nh-uj.jpg", "nagyhaz/nh-utcaf-j.jpg"
];

const utcafrontiFeliratok = [
    "Műholdas felvétel a telekről", "Utcafronti nézet jobb oldal", "Utcafronti nézet bal oldal", "Nagy ház kiskapu", 
    "Fedett terasz részlet", "Kialakított parkoló", "Kukatároló", "Kukatároló a kert felől", 
    "Kukatároló az utca felől", "Előkert bal oldali nézet", "Előkert bal oldali nézet részlet", "Terasz melletti kiskert hátulról", 
    "Terasz melletti kiskert szemből", "Nagy ház alaprajza méretek nélkül", "Nagy ház alaprajza méretekkel",
    "Nagy ház autóparkoló felőli nézet", "Nagy ház főbejárat", "Nagy ház előszoba", 
    "Nagy ház fürdőszoba", "Nagy ház fürdőszoba sarokkád", "Nagy ház fürdőszoba bútor", 
    "Nagy ház fürdőszoba részlet", "Nagy ház fürdő szekrény", "Nagy ház gépészeti helyiség", 
    "Nagy ház kis lépcsőfok a terasznál", "Nagy ház kis terasz", "Nagy ház kis terasz korláttal", 
    "Nagy ház kisebbik fürdőszoba", "Nagy ház kis fürdő zuhanyzó", "Nagy ház kiskapu",
    "Nagy ház modern konyha", "Nagy ház konyhabútor", "Nagy ház konyha gépesítve", 
    "Nagy ház konyha és étkező", "Nagy ház konyha részlet", "Nagy ház tágas nappali", 
    "Nagy ház nappali ablakok", "Nagy ház nappali sarok", "Nagy ház nappali a folyosóról", 
    "Nagy ház oldalsó homlokzat", "Nagy ház szoba 1", "Nagy ház szoba 2", 
    "Nagy ház szoba 3", "Nagy ház hálószoba", "Nagy ház teraszlépcső",
    "Nagy ház új homlokzati rész", "Nagy ház utcafronti kép"
];

// --- MÁSODIK (KIS) HÁZ GALÉRIÁJA ---
const masodikHazKepek = [
    "kishaz/khalaprajz.jpg", "kishaz/kheloszoba.jpg", "kishaz/kheloszobaj.jpg", "kishaz/khelszekr.jpg", 
    "kishaz/khelszekrb.jpg", "kishaz/khelszekrj.jpg", "kishaz/khkfurdo.jpg", "kishaz/khkfurdob.jpg",
    "kishaz/khkfurdoh.jpg", "kishaz/khnappalibejarat.jpg", "kishaz/khnappalikonyha.jpg", "kishaz/khnappalikonyhab.jpg", 
    "kishaz/kkhnappalikonyhaj.jpg", "kishaz/khnfurdob.jpg", "kishaz/khkfurdoj.jpg", "kishaz/khnfurdomosdo.jpg",      
    "kishaz/khszoba.jpg", "kishaz/khszoba2b.jpg", "kishaz/khszoba2h.jpg", "kishaz/khszoba2szekreny.jpg", 
    "kishaz/khszoba2szekrenyny.jpg", "kishaz/khszobaabejarattol.jpg", "kishaz/khszobabejarat.jpg"
];

const masodikHazFeliratok = [
    "Kis ház alaprajz", "Kis ház előszoba", "Kis ház előszoba jobb oldal", "Kis ház előszoba szekrény", 
    "Kis ház előszoba szekrény baloldal", "Kis ház előszoba szekrény jobb oldala", "Kis ház kis fürdőszoba", "Kis ház kis fürdőszoba baloldal",     
    "Kis ház kis fürdőszoba hátolda", "Kis ház nappali bejárat", "Kis ház nappali konyha", "Kis ház nappali konyha baloldal", 
    "Kis ház nappali konyha jobb oldala", "Kis ház fürdőszoba baloldal", "Kis ház 1-es szoba", "Kis ház fürdőszobai mosdó",
    "Kis ház szoba", "Kis ház szoba részlet", "Kis ház hálószoba ablak felől", "Beépített szekrény", 
    "Beépített szekrény nyitott állapotban", "Kis ház szobabejárat a folyosóról", "Kis ház szobabejárat"
];

// Indexek nyomon követése külön a két galériához
let slideIndex1 = 1;
let slideIndex2 = 1;

// ==========================================
// 2. DINAMIKUS GENERÁLÁS INDÍTÁSA
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // 1. galéria felépítése
    generalGaleria("utcafrontiContainer", utcafrontiKepek, utcafrontiFeliratok, "utcafronti-slide");
    showSlidesGeneric("utcafronti-slide", slideIndex1);

    // 2. galéria felépítése
    generalGaleria("masodikContainer", masodikHazKepek, masodikHazFeliratok, "masodik-slide");
    showSlidesGeneric("masodik-slide", slideIndex2);
});

// Segédfüggvény a HTML legenerálásához
function generalGaleria(containerId, kepek, feliratok, egyediOsztaly) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let htmlContent = "";
    kepek.forEach((image, index) => {
        let caption = feliratok[index] || "";
        htmlContent += `
            <div class="gallery-slides ${egyediOsztaly}">
                <img src="img/${image}" alt="${caption}" loading="lazy">
                <div class="caption-container">${caption}</div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// ==========================================
// 3. FÜGGETLEN LAPOZÓ FUNKCIÓK
// ==========================================

function changeSlide1(n) {
    let slides = document.getElementsByClassName("utcafronti-slide");
    slideIndex1 += n;
    if (slideIndex1 > slides.length) { slideIndex1 = 1; }
    if (slideIndex1 < 1) { slideIndex1 = slides.length; }
    showSlidesGeneric("utcafronti-slide", slideIndex1);
}

function changeSlide2(n) {
    let slides = document.getElementsByClassName("masodik-slide");
    slideIndex2 += n;
    if (slideIndex2 > slides.length) { slideIndex2 = 1; }
    if (slideIndex2 < 1) { slideIndex2 = slides.length; }
    showSlidesGeneric("masodik-slide", slideIndex2);
}

function showSlidesGeneric(osztalyNev, aktualisIndex) {
    let slides = document.getElementsByClassName(osztalyNev);
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[aktualisIndex - 1].style.display = "block";
}
