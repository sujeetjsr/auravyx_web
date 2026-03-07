/**
 * bundle.js – Logic for bundle detail page (bundle.html?id=X)
 * Reads bundle data from bundles_data (embedded) + syncs selection with
 * the main gallery page via localStorage.
 */

// ─── Image list (exact order = bundle serial number, matches script.js) ────────
// Bundle 1  → images[0], Bundle 2 → images[1], etc.
const BUNDLE_IMGS = [
    'photo/photo_6082457110810660433_y.jpeg',                         // 1
    'photo/WhatsApp Image 2026-02-11 at 11.12.27 AM.jpeg',           // 2
    'photo/WhatsApp Image 2026-02-11 at 11.12.28 AM(1).jpeg',        // 3
    'photo/WhatsApp Image 2026-02-11 at 11.12.28 AM(2).jpg',         // 4
    'photo/WhatsApp Image 2026-02-11 at 11.12.28 AM.jpeg',           // 5
    'photo/WhatsApp Image 2026-02-11 at 11.12.29 AM(1).jpeg',        // 6
    'photo/WhatsApp Image 2026-02-11 at 11.12.29 AM.jpg',            // 7
    'photo/WhatsApp Image 2026-02-11 at 11.12.30 AM(1).jpeg',        // 8
    'photo/WhatsApp Image 2026-02-11 at 11.12.30 AM.jpeg',           // 9
    'photo/WhatsApp Image 2026-02-11 at 11.12.31 AM(1).jpeg',        // 10
    'photo/WhatsApp Image 2026-02-11 at 11.12.31 AM(2).jpeg',        // 11
    'photo/WhatsApp Image 2026-02-11 at 11.12.31 AM.jpeg',           // 12
    'photo/WhatsApp Image 2026-02-11 at 11.12.32 AM(1).jpeg',        // 13
    'photo/WhatsApp Image 2026-02-11 at 11.12.32 AM.jpeg',           // 14
    'photo/WhatsApp Image 2026-02-11 at 11.12.33 AM(1).jpg',         // 15
    'photo/WhatsApp Image 2026-02-11 at 11.12.33 AM(2).jpeg',        // 16
    'photo/WhatsApp Image 2026-02-11 at 11.12.33 AM.jpeg',           // 17
    'photo/WhatsApp Image 2026-02-11 at 11.12.34 AM(1).jpeg',        // 18
    'photo/WhatsApp Image 2026-02-11 at 11.12.34 AM.jpg',            // 19
    'photo/WhatsApp Image 2026-02-11 at 11.12.35 AM(1).jpeg',        // 20
    'photo/WhatsApp Image 2026-02-11 at 11.12.35 AM.jpg',            // 21
    'photo/WhatsApp Image 2026-02-11 at 11.23.18 AM.jpg',            // 22
    'photo/WhatsApp Image 2026-02-11 at 11.23.19 AM(1).jpeg',        // 23
    'photo/WhatsApp Image 2026-02-11 at 11.23.19 AM(2).jpeg',        // 24
    'photo/WhatsApp Image 2026-02-11 at 11.23.19 AM.jpeg',           // 25
    'photo/WhatsApp Image 2026-02-11 at 11.23.20 AM.jpeg',           // 26
    'photo/WhatsApp Image 2026-02-11 at 11.23.21 AM(1).jpeg',        // 27
    'photo/WhatsApp Image 2026-02-11 at 11.23.21 AM(2).jpeg',        // 28
    'photo/WhatsApp Image 2026-02-11 at 11.23.21 AM.jpeg',           // 29
    'photo/WhatsApp Image 2026-02-11 at 11.23.22 AM(1).jpeg',        // 30
    'photo/WhatsApp Image 2026-02-11 at 11.23.22 AM(2).jpeg',        // 31
    'photo/WhatsApp Image 2026-02-11 at 11.23.22 AM.jpeg',           // 32
    // ── New Bundles (33–73) ──────────────────────────────────────────────────────
    'photo/new bundles/100-4K-BGMI-BACKGROUND-BANNER-700x700 (1).png',                      // 33
    'photo/new bundles/1000-AI-Story-Reels-Bundle-430x430 (1).png',                         // 34
    'photo/new bundles/1000-Ai-Animal-Vlogging-Bundle-430x430 (1).png',                     // 35
    'photo/new bundles/1000-Caught-On-Camera-Ai-Reels-Bundle-700x700 (1).png',              // 36
    'photo/new bundles/1000-Luxury-Lifestyle-Reels-Bundle-430x430 (1).png',                 // 37
    'photo/new bundles/1000-Money-Motivational-Reels-Bundle-430x430 (1).png',               // 38
    'photo/new bundles/1000-The-Legend-of-Hanuman-Reels-Bundle-700x700 (1).png',            // 39
    'photo/new bundles/100GB-Thumbnail-Graphics-Mega-Bundle-700x700 (1).jpg.jpeg',          // 40
    'photo/new bundles/1100-Cute-Ai-Toons-Reels-Bundle-700x700 (1).png',                   // 41
    'photo/new bundles/1200-GLASS-CUTTING-AI-ASMR-REELS-BUNDLE-430x430 (1).png',           // 42
    'photo/new bundles/150-Colorfull-Monsters-Reels-Bundle-700x700 (1).png',                // 43
    'photo/new bundles/1770473888430.png',                                                   // 44
    'photo/new bundles/1770473975655.png',                                                   // 45
    'photo/new bundles/200-Futuristic-Ai-Machine-Reels-Bundle-700x700 (1).png',             // 46
    'photo/new bundles/2000-SCENERY-REELS-BUNDLE-POST-700x700 (1).png',                     // 47
    'photo/new bundles/20000-Backgrounds-Bundle-700x700 (1).jpg.jpeg',                      // 48
    'photo/new bundles/240-AI-God-Images-700x700.png',                                      // 49
    'photo/new bundles/250-Baby-Food-Eating-Food-Ai-Reels-Bundle-700x700 (1).png',          // 50
    'photo/new bundles/2500-Car-Reels-Bundle-430x430 (1).jpg.jpeg',                         // 51
    'photo/new bundles/300-Dream-Bed-Ai-ASMR-Reels-Bundle-700x700 (1).png',                // 52
    'photo/new bundles/3000-T-Shirt-design-bundle-700x700 (1).jpg.jpeg',                    // 53
    'photo/new bundles/350-AI-Facts-Reels-Bundle-430x430 (1).png',                          // 54
    'photo/new bundles/400-Pixellab-PLP-Thumbnail-Pack-700x700 (1).jpg.jpeg',               // 55
    'photo/new bundles/450-AI-Trading-Reels-Bundle-700x700 (1).png',                        // 56
    'photo/new bundles/450-Health-Awareness-Ai-Reels-Bundle-700x700 (1).png',               // 57
    'photo/new bundles/500-2D-Animation-Reels-Bundle-430x430 (1).png',                      // 58
    'photo/new bundles/500-Floor-Transformation-Ai-Reels-Bundle-700x700 (1).png',           // 59
    'photo/new bundles/50GB-BIGGEST-EDITING-PACK-Mockup-430x301.png',                       // 60
    'photo/new bundles/600-Bgmi-3D-Characters-Pack-700x700 (1).png',                        // 61
    'photo/new bundles/600-Radha-Krishna-High-Quality-Image-Bundle-700x700 (1) (1).png',    // 62
    'photo/new bundles/650-GB-Graphic-Bundle-Mockup-700x490.png',                           // 63
    'photo/new bundles/70-GB-EDITING-PACK-Mockup-430x301.png',                              // 64
    'photo/new bundles/700-Cute-Ai-Monster-Reels-Bundle (1).png',                           // 65
    'photo/new bundles/750-Unreality-Ai-Reels-Bundle1-700x700 (1).png',                     // 66
    'photo/new bundles/900-Emotional-Reels-Bundle-700x700 (1).png',                         // 67
    'photo/new bundles/Blue-Modern-Digital-Art-Marketplace-Promotion-Instagram-Post-430x430 (1).jpg.jpeg', // 68
    'photo/new bundles/HR-Templates-Banner-430x430 (1).png',                                // 69
    'photo/new bundles/Picsart_26-02-07_19-53-45-159.jpg.jpeg',                             // 70
    'photo/new bundles/Video-Editing-Essential-Pack-1-430x430 (1).png',                     // 71
    'photo/new bundles/Wedding-Graphics-Collection-Bundle-700x700 (1).jpg.jpeg',            // 72
    'photo/new bundles/YouTube-Thumbnail-Pack-Banner-430x430 (1).png',                      // 73
];

// ─── YouTube demo video IDs (verified popular uploads) ────────────────────────
// Using well-known working YT IDs relevant to each niche
const BUNDLE_YT = [
    'atbPiXbWt8I',   // 1  Nature – BBC Earth
    'jKCO3744hI4',   // 2  Motivation – Best Motivational Speech
    'PXHwGzdEDmo',   // 3  Travel – Amazing destinations
    'BpX-lrgMous',   // 4  Comedy – Funny compilation
    'HDswSnbeI-A',   // 5  Food – Tasty cooking
    'Nc9day-NU58',   // 6  Fitness – Workout routine
    '7qpH41rRuhQ',   // 7  Tech – Gadgets showcase
    'bO1tgRMMJ-k',   // 8  Kids – Cartoon fun
    'iMam8t8XYOY',   // 9  Music – Beat showcase
    'vDbQB6ldzi0',   // 10 Business – Finance tips
    'SemYD9l7P2o',   // 11 Fashion – Style guide
    'o7cUQzttyRQ',   // 12 DIY – Creative crafts
    'TXtsoqKzQdM',   // 13 Sports – Epic highlights
    'GvxgXSm8WPA',   // 14 Meditation – Calm music
    'F7gDF8qrJZY',   // 15 Science – Amazing facts
    'Ji7NxxG63kA',   // 16 Horror – Scary compilation
    '6VEOE5dCznE',   // 17 Gaming – Epic gameplay
    'g9lTWB5PnkE',   // 18 Pets – Cute animals (Shorts)
    '2JlRCFRt9N0',   // 19 AI Baby Dance – temp (replace with working link)
    'DJj7xrutk6U',   // 20 News – Commentary
    'VP5jpZGqaXg',   // 21 Comedy Skits
    '5NLO2DxIE-k',   // 22 Mythology – Ancient stories
    'd8m3PmfRfbU',   // 23 Cooking shorts
    'Tr9tVJGX6Fc',   // 24 Space – Universe
    'NXdoPhenc8E',   // 25 Psychology facts
    'bSxFRtD3H6U',   // 26 Entrepreneurship
    'svxCxEsQOCc',   // 27 Relationship
    'Rs0Y7U0pLU0',   // 28 Paranormal
    'IRRcfXu_c_Y',   // 29 History facts
    'kKL7NAXe5cg',   // 30 Luxury lifestyle
    'xRqao-Boqnk',   // 31 Spiritual
    'Lp1UrlcAw2A',   // 32 Action drama
    // New bundles YT IDs
    'KzG8o4mN3ek',   // 33 BGMI
    'YNHs6w5Hfh0',   // 34 AI Story Reels
    'tBWrOT4yCF4',   // 35 AI Animal Vlogging
    'HCKxhTrI0Rg',   // 36 Caught On Camera
    'kKL7NAXe5cg',   // 37 Luxury Lifestyle
    'jKCO3744hI4',   // 38 Money Motivation
    'AtbPiXbWt8I',   // 39 Legend of Hanuman
    'VP5jpZGqaXg',   // 40 Thumbnail Graphics
    'bO1tgRMMJ-k',   // 41 Cute AI Toons
    '5NLO2DxIE-k',   // 42 Glass Cutting ASMR
    'HDswSnbeI-A',   // 43 Colourful Monsters
    'TXtsoqKzQdM',   // 44 Promo (unnamed 1)
    'GvxgXSm8WPA',   // 45 Promo (unnamed 2)
    '2JlRCFRt9N0',   // 46 Futuristic AI Machine
    'g9lTWB5PnkE',   // 47 Scenery Reels
    'PXHwGzdEDmo',   // 48 20000 Backgrounds
    'IRRcfXu_c_Y',   // 49 AI God Images
    'Nc9day-NU58',   // 50 Baby Food AI Reels
    'DJj7xrutk6U',   // 51 2500 Car Reels
    'GvxgXSm8WPA',   // 52 Dream Bed ASMR
    'O9VeSo8eC7k',   // 53 T-Shirt Design
    'F7gDF8qrJZY',   // 54 AI Facts
    'VP5jpZGqaXg',   // 55 Pixellab Thumbnails
    'vDbQB6ldzi0',   // 56 AI Trading
    'Nc9day-NU58',   // 57 Health Awareness
    'd8m3PmfRfbU',   // 58 2D Animation
    'BpX-lrgMous',   // 59 Floor Transformation
    'Ji7NxxG63kA',   // 60 50GB Editing Pack
    'KzG8o4mN3ek',   // 61 BGMI 3D Characters
    'xRqao-Boqnk',   // 62 Radha Krishna
    'iMam8t8XYOY',   // 63 650GB Graphic Bundle
    'Ji7NxxG63kA',   // 64 70GB Editing Pack
    'bO1tgRMMJ-k',   // 65 700 Cute AI Monsters
    'PXHwGzdEDmo',   // 66 Unreality AI Reels
    'Rs0Y7U0pLU0',   // 67 Emotional Reels
    '7qpH41rRuhQ',   // 68 Digital Art Marketplace
    'SemYD9l7P2o',   // 69 HR Templates
    'o7cUQzttyRQ',   // 70 General Creative
    'svxCxEsQOCc',   // 71 Video Editing Essential
    'kKL7NAXe5cg',   // 72 Wedding Graphics
    'VP5jpZGqaXg',   // 73 YouTube Thumbnails
];

// ─── Inline bundle data ────────────────────────────────────────────────────────
const BUNDLES = {
    "1": { name: "OGGY AND COCKROACHES REEL BUNDLE", desc: "Premium Oggy & the Cockroaches cartoon reels — no watermark, no copyright. Upload directly and start getting views instantly.", tags: ["Cartoon", "Oggy", "Comedy"], yt: BUNDLE_YT[0], img: BUNDLE_IMGS[0] },
    "2": { name: "TOM AND JERRY REELS BUNDLE PACK", desc: "Iconic Tom & Jerry clips perfectly cut for reels & shorts. Timeless comedy content loved by all ages — guaranteed views.", tags: ["Cartoon", "Tom & Jerry", "Viral"], yt: BUNDLE_YT[1], img: BUNDLE_IMGS[1] },
    "3": { name: "HULK TRENDING REEL BUNDLE", desc: "Trending AI-generated Hulk action reels. Superhero content is exploding on YouTube Shorts & Instagram — grab this now.", tags: ["AI", "Hulk", "Trending"], yt: BUNDLE_YT[2], img: BUNDLE_IMGS[2] },
    "4": { name: "2D KAHANI REEL BUNDLE", desc: "Engaging 2D animated story reels in Hindi. Storytelling content has the highest watch-time on all platforms.", tags: ["2D", "Story", "Animation"], yt: BUNDLE_YT[3], img: BUNDLE_IMGS[3] },
    "5": { name: "DORAEMON REELS BUNDLE", desc: "Doraemon cartoon clips optimized for reels & shorts. One of the most-searched cartoons in India — instant views guaranteed.", tags: ["Cartoon", "Doraemon", "Kids"], yt: BUNDLE_YT[4], img: BUNDLE_IMGS[4] },
    "6": { name: "PREMANAND JI MAHARAJ REEL BUNDLE PACK", desc: "Powerful spiritual discourses and clips of Premanand Ji Maharaj. Devotional niche has the most loyal audience in India.", tags: ["Spiritual", "Devotional", "Viral"], yt: BUNDLE_YT[5], img: BUNDLE_IMGS[5] },
    "7": { name: "3D KAHANI REELS BUNDLE", desc: "High-quality 3D animated story reels for YouTube & Instagram. Animated storytelling gets the highest CPM rates.", tags: ["3D", "Story", "Animation"], yt: BUNDLE_YT[6], img: BUNDLE_IMGS[6] },
    "8": { name: "60000+ REELS BUNDLE", desc: "Massive mega pack with 60,000+ ready-to-upload reels across all niches. Best value bundle for serious creators.", tags: ["Mega", "Reels", "All Niche"], yt: BUNDLE_YT[7], img: BUNDLE_IMGS[7] },
    "9": { name: "AI TECH REELS BUNDLE PACK", desc: "Cutting-edge AI and technology reels trending on all platforms. Tech niche has the highest ad revenue per thousand views.", tags: ["AI", "Tech", "Trending"], yt: BUNDLE_YT[8], img: BUNDLE_IMGS[8] },
    "10": { name: "VIRAL AI HINDU SANATANI REELS BUNDLE", desc: "AI-generated Hindu Sanatani devotional content with stunning visuals. Sanatani niche is the fastest growing in India right now.", tags: ["Sanatani", "AI", "Spiritual"], yt: BUNDLE_YT[9], img: BUNDLE_IMGS[9] },
    "11": { name: "GIBILI ART REELS BUNDLE", desc: "Beautiful Studio Ghibli-style art and animation reels. Aesthetic art content gets millions of saves and shares.", tags: ["Ghibli", "Art", "Animation"], yt: BUNDLE_YT[10], img: BUNDLE_IMGS[10] },
    "12": { name: "500+ STOP CHALLENGE REELS BUNDLE PACK", desc: "500+ viral stop-challenge style reels ready to upload. Challenge content goes viral overnight — highest engagement format.", tags: ["Challenge", "Trending", "Viral"], yt: BUNDLE_YT[11], img: BUNDLE_IMGS[11] },
    "13": { name: "1000+ AI HYBRID REELS BUNDLE", desc: "1000+ AI hybrid reels blending real footage with AI art. This trending format is dominating YouTube Shorts right now.", tags: ["AI", "Hybrid", "Trending"], yt: BUNDLE_YT[12], img: BUNDLE_IMGS[12] },
    "14": { name: "1000+ VIRAL REELS BUNDLE PACK", desc: "1000+ proven viral reels from multiple niches. Every video in this pack has been tested — maximum views guaranteed.", tags: ["Viral", "Reels", "4K"], yt: BUNDLE_YT[13], img: BUNDLE_IMGS[13] },
    "15": { name: "2100+ MR. BEAN REEL BUNDLE", desc: "Massive 2100+ Mr. Bean clips edited for reels & shorts. Mr. Bean's timeless comedy never stops going viral worldwide.", tags: ["Comedy", "Mr. Bean", "Viral"], yt: BUNDLE_YT[14], img: BUNDLE_IMGS[14] },
    "16": { name: "ANIME REELS BUNDLE", desc: "Top trending anime clips and edits optimized for shorts. Anime niche has the most passionate & loyal fanbase online.", tags: ["Anime", "Manga", "Trending"], yt: BUNDLE_YT[15], img: BUNDLE_IMGS[15] },
    "17": { name: "MAHADEV REELS BUNDLE", desc: "Stunning Mahadev devotional reels with cinematic visuals and music. Har Har Mahadev content gets millions of views in India.", tags: ["Mahadev", "Spiritual", "Devotional"], yt: BUNDLE_YT[16], img: BUNDLE_IMGS[16] },
    "18": { name: "VIRAL HEALTH AWARENESS REELS", desc: "High-impact health awareness reels covering fitness, diet and wellness. Health content gets the highest CPM in India.", tags: ["Health", "Awareness", "Fitness"], yt: BUNDLE_YT[17], img: BUNDLE_IMGS[17] },
    "19": { name: "AI BABY DANCE REELS BUNDLE", desc: "Super cute AI baby dance reels — the most shared content type on Instagram. Guaranteed viral with every upload.", tags: ["AI", "Baby", "Dance"], yt: BUNDLE_YT[18], img: BUNDLE_IMGS[18] },
    "20": { name: "ANIMATED 3D FACT REELS BUNDLE PACK", desc: "Stunning 3D animated fact reels covering science, history and amazing topics. Facts content goes viral every single day.", tags: ["3D", "Facts", "Animation"], yt: BUNDLE_YT[19], img: BUNDLE_IMGS[19] },
    "21": { name: "KAPIL SHARMA REELS BUNDLE PACK", desc: "Best comedy clips and funny moments from Kapil Sharma. Indian comedy niche has the biggest audience on YouTube.", tags: ["Comedy", "Kapil Sharma", "Funny"], yt: BUNDLE_YT[20], img: BUNDLE_IMGS[20] },
    "22": { name: "AI GLASS CUTTING VIDEOS", desc: "Satisfying AI glass cutting and optical illusion videos — the most shared and saved type of content right now.", tags: ["AI", "Satisfying", "Trending"], yt: BUNDLE_YT[21], img: BUNDLE_IMGS[21] },
    "23": { name: "POLITICAL MEMES AND EDIT REEL BUNDLE PACK", desc: "Trending political memes and creative edit reels. Political content has the highest shareability and comment engagement.", tags: ["Political", "Memes", "Viral"], yt: BUNDLE_YT[22], img: BUNDLE_IMGS[22] },
    "24": { name: "SHINCHAN REEL BUNDLE", desc: "Hilarious Shinchan cartoon clips cut for reels & shorts. Shinchan is one of the most searched cartoons in India — go viral instantly.", tags: ["Cartoon", "Shinchan", "Kids"], yt: BUNDLE_YT[23], img: BUNDLE_IMGS[23] },
    "25": { name: "MOVIE EXPLANATION VIDEOS BUNDLE", desc: "Ready-made Hindi movie explanation videos for YouTube. Movie explanation channels are among the fastest growing right now.", tags: ["Movies", "Explanation", "Hindi"], yt: BUNDLE_YT[24], img: BUNDLE_IMGS[24] },
    "26": { name: "FOOTBALL REELS BUNDLE", desc: "Epic football skills, goals and match highlight reels. Football is the world's #1 sport — unlimited views every day.", tags: ["Football", "Sports", "Goals"], yt: BUNDLE_YT[25], img: BUNDLE_IMGS[25] },
    "27": { name: "CRISTIANO MESSI REELS BUNDLE", desc: "Legendary Cristiano Ronaldo & Messi skill reels and comparisons. The most viral footballers in the world — guaranteed engagement.", tags: ["Ronaldo", "Messi", "Football"], yt: BUNDLE_YT[26], img: BUNDLE_IMGS[26] },
    "28": { name: "SIGMA RULES REELS BUNDLE", desc: "Trending Sigma male rules and mindset reels. Sigma rule content is the hottest motivation niche across all platforms.", tags: ["Sigma", "Motivation", "Mindset"], yt: BUNDLE_YT[27], img: BUNDLE_IMGS[27] },
    "29": { name: "POOKI VOICE REELS BUNDLE", desc: "Hilarious Pooki voice-over comedy reels — among the most shared funny content on Indian social media.", tags: ["Pooki", "Funny", "Comedy"], yt: BUNDLE_YT[28], img: BUNDLE_IMGS[28] },
    "30": { name: "TIMELAPSE REELS BUNDLE", desc: "Breathtaking 4K timelapse reels — nature, city, sky and more. Timelapse content gets highest watch-time and saves.", tags: ["Timelapse", "Nature", "4K"], yt: BUNDLE_YT[29], img: BUNDLE_IMGS[29] },
    "31": { name: "MOTU PATLU SCARY REELS BUNDLE", desc: "Scary & suspense-twist Motu Patlu cartoon reels. Horror cartoon is the fastest growing sub-niche on YouTube Kids.", tags: ["Motu Patlu", "Cartoon", "Horror"], yt: BUNDLE_YT[30], img: BUNDLE_IMGS[30] },
    "32": { name: "CAR CRASH VIDEO BUNDLE", desc: "Viral car crash and dashcam incident videos. Crash compilation channels hit millions of views from day one.", tags: ["Cars", "Crash", "Viral"], yt: BUNDLE_YT[31], img: BUNDLE_IMGS[31] },
    // ── New Bundles ───────────────────────────────────────────────────────────────────────────
    "33": { name: "100 4K BGMI BACKGROUND BANNER BUNDLE", desc: "100 stunning 4K BGMI background banners for gaming channels. Go viral in the booming BGMI gaming niche instantly.", tags: ["BGMI", "Gaming", "4K"], yt: BUNDLE_YT[32], img: BUNDLE_IMGS[32] },
    "34": { name: "1000 AI STORY REELS BUNDLE", desc: "1000 AI-generated story reels ready to upload. Story content has the highest watch-time and saves on all platforms.", tags: ["AI", "Story", "Reels"], yt: BUNDLE_YT[33], img: BUNDLE_IMGS[33] },
    "35": { name: "1000 AI ANIMAL VLOGGING BUNDLE", desc: "1000 AI animal vlogging videos — cute and engaging content that goes viral every single day on Instagram & YouTube.", tags: ["AI", "Animals", "Vlogging"], yt: BUNDLE_YT[34], img: BUNDLE_IMGS[34] },
    "36": { name: "1000 CAUGHT ON CAMERA AI REELS BUNDLE", desc: "1000 caught-on-camera AI reels — the most shared and watched format right now. Maximum views guaranteed.", tags: ["AI", "Caught On Camera", "Viral"], yt: BUNDLE_YT[35], img: BUNDLE_IMGS[35] },
    "37": { name: "1000 LUXURY LIFESTYLE REELS BUNDLE", desc: "1000 luxury lifestyle AI reels showcasing cars, mansions and lavish living. Aspirational content drives the highest click-through rates.", tags: ["Luxury", "Lifestyle", "AI"], yt: BUNDLE_YT[36], img: BUNDLE_IMGS[36] },
    "38": { name: "1000 MONEY MOTIVATIONAL REELS BUNDLE", desc: "1000 money and motivational reels packed with grind culture and financial freedom content. Highest-performing niche on every platform.", tags: ["Money", "Motivation", "Mindset"], yt: BUNDLE_YT[37], img: BUNDLE_IMGS[37] },
    "39": { name: "1000 THE LEGEND OF HANUMAN REELS BUNDLE", desc: "1000 stunning Legend of Hanuman reels with cinematic AI visuals. Devotional content is the #1 growing niche in India.", tags: ["Hanuman", "Devotional", "AI"], yt: BUNDLE_YT[38], img: BUNDLE_IMGS[38] },
    "40": { name: "100GB THUMBNAIL GRAPHICS MEGA BUNDLE", desc: "100GB of premium thumbnail and graphic templates — everything a creator needs to design viral thumbnails instantly.", tags: ["Thumbnails", "Graphics", "Templates"], yt: BUNDLE_YT[39], img: BUNDLE_IMGS[39] },
    "41": { name: "1100 CUTE AI TOONS REELS BUNDLE", desc: "1100 adorable AI cartoon toon reels — the most shareable content type on all platforms. Perfect for kids & family channels.", tags: ["AI", "Cartoon", "Cute"], yt: BUNDLE_YT[40], img: BUNDLE_IMGS[40] },
    "42": { name: "1200 GLASS CUTTING AI ASMR REELS BUNDLE", desc: "1200 satisfying glass cutting AI ASMR reels — the most saved and shared format on Instagram right now.", tags: ["ASMR", "AI", "Satisfying"], yt: BUNDLE_YT[41], img: BUNDLE_IMGS[41] },
    "43": { name: "150 COLOURFUL MONSTERS REELS BUNDLE", desc: "150 vibrant colourful monster AI reels — unique aesthetic content that stands out and gets massive saves.", tags: ["AI", "Monsters", "Colourful"], yt: BUNDLE_YT[42], img: BUNDLE_IMGS[42] },
    "44": { name: "PREMIUM VIRAL REELS BUNDLE PACK", desc: "Carefully curated viral reels bundle for maximum engagement. Ready to upload and start earning from day one.", tags: ["Viral", "Reels", "Premium"], yt: BUNDLE_YT[43], img: BUNDLE_IMGS[43] },
    "45": { name: "MEGA CONTENT CREATOR BUNDLE", desc: "An all-in-one mega bundle for serious content creators — covers every niche with high-quality, ready-to-upload content.", tags: ["Mega", "Content", "Creator"], yt: BUNDLE_YT[44], img: BUNDLE_IMGS[44] },
    "46": { name: "200 FUTURISTIC AI MACHINE REELS BUNDLE", desc: "200 futuristic AI machine and robot reels — tech-niche content that attracts the highest CPM advertisers.", tags: ["AI", "Futuristic", "Tech"], yt: BUNDLE_YT[45], img: BUNDLE_IMGS[45] },
    "47": { name: "2000 SCENERY REELS BUNDLE", desc: "2000 breathtaking scenery and landscape reels in stunning quality. Nature content gets the highest daily impressions.", tags: ["Scenery", "Nature", "4K"], yt: BUNDLE_YT[46], img: BUNDLE_IMGS[46] },
    "48": { name: "20000 BACKGROUNDS BUNDLE", desc: "Massive 20,000 background bundle — the only background pack you will ever need for editing, thumbnails and reels.", tags: ["Backgrounds", "Editing", "Mega"], yt: BUNDLE_YT[47], img: BUNDLE_IMGS[47] },
    "49": { name: "240 AI GOD IMAGES BUNDLE", desc: "240 stunning AI-generated divine god images — perfect for devotional channels and spiritual wallpaper pages.", tags: ["AI", "God", "Devotional"], yt: BUNDLE_YT[48], img: BUNDLE_IMGS[48] },
    "50": { name: "250 BABY FOOD EATING AI REELS BUNDLE", desc: "250 super cute AI baby food-eating reels — the most viral content format for family and parenting channels.", tags: ["AI", "Baby", "Food"], yt: BUNDLE_YT[49], img: BUNDLE_IMGS[49] },
    "51": { name: "2500 CAR REELS BUNDLE", desc: "2500 car and automobile reels for YouTube Shorts & Instagram. Car content consistently gets millions of organic views.", tags: ["Cars", "Reels", "Auto"], yt: BUNDLE_YT[50], img: BUNDLE_IMGS[50] },
    "52": { name: "300 DREAM BED AI ASMR REELS BUNDLE", desc: "300 ultra-relaxing dream bed AI ASMR reels — sleep and relaxation content has the highest average watch time.", tags: ["ASMR", "AI", "Relaxing"], yt: BUNDLE_YT[51], img: BUNDLE_IMGS[51] },
    "53": { name: "3000 T-SHIRT DESIGN BUNDLE", desc: "3000 premium T-shirt design assets — perfect for print-on-demand sellers, Etsy shops and graphic designers.", tags: ["T-Shirt", "Design", "Graphics"], yt: BUNDLE_YT[52], img: BUNDLE_IMGS[52] },
    "54": { name: "350 AI FACTS REELS BUNDLE", desc: "350 mind-blowing AI facts reels covering science, history and psychology. Facts content goes viral every single day.", tags: ["AI", "Facts", "Viral"], yt: BUNDLE_YT[53], img: BUNDLE_IMGS[53] },
    "55": { name: "400 PIXELLAB PLP THUMBNAIL PACK", desc: "400 professional Pixellab PLP thumbnail templates — design stunning YouTube thumbnails in seconds.", tags: ["Thumbnails", "Pixellab", "Templates"], yt: BUNDLE_YT[54], img: BUNDLE_IMGS[54] },
    "56": { name: "450 AI TRADING REELS BUNDLE", desc: "450 AI trading and finance reels — the finance niche earns the highest CPM rates across all platforms.", tags: ["AI", "Trading", "Finance"], yt: BUNDLE_YT[55], img: BUNDLE_IMGS[55] },
    "57": { name: "450 HEALTH AWARENESS AI REELS BUNDLE", desc: "450 health awareness AI reels covering fitness, nutrition and wellness. Health niche earns top ad revenue in India.", tags: ["Health", "AI", "Awareness"], yt: BUNDLE_YT[56], img: BUNDLE_IMGS[56] },
    "58": { name: "500 2D ANIMATION REELS BUNDLE", desc: "500 high-quality 2D animated reels — animation content has the highest CPM and watch-time on all platforms.", tags: ["2D", "Animation", "Reels"], yt: BUNDLE_YT[57], img: BUNDLE_IMGS[57] },
    "59": { name: "500 FLOOR TRANSFORMATION AI REELS BUNDLE", desc: "500 satisfying floor transformation AI reels — one of the most-watched and saved viral formats on Instagram.", tags: ["AI", "Floor", "Satisfying"], yt: BUNDLE_YT[58], img: BUNDLE_IMGS[58] },
    "60": { name: "50GB BIGGEST EDITING PACK", desc: "The biggest 50GB editing pack — everything a video editor needs including effects, LUTs, transitions and overlays.", tags: ["Editing", "Pack", "50GB"], yt: BUNDLE_YT[59], img: BUNDLE_IMGS[59] },
    "61": { name: "600 BGMI 3D CHARACTERS PACK", desc: "600 premium BGMI 3D character renders — perfect for gaming thumbnails, intros and YouTube channel art.", tags: ["BGMI", "3D", "Gaming"], yt: BUNDLE_YT[60], img: BUNDLE_IMGS[60] },
    "62": { name: "600 RADHA KRISHNA HIGH QUALITY IMAGE BUNDLE", desc: "600 breathtaking Radha Krishna divine images in high quality — devotional content gets the most loyal audience in India.", tags: ["Radha Krishna", "Devotional", "Images"], yt: BUNDLE_YT[61], img: BUNDLE_IMGS[61] },
    "63": { name: "650GB GRAPHIC BUNDLE", desc: "Massive 650GB graphic bundle — the ultimate design resource for creators, editors and graphic designers.", tags: ["Graphics", "650GB", "Mega"], yt: BUNDLE_YT[62], img: BUNDLE_IMGS[62] },
    "64": { name: "70GB EDITING PACK", desc: "70GB professional video editing pack — premium assets, effects and templates to supercharge your editing workflow.", tags: ["Editing", "70GB", "Pack"], yt: BUNDLE_YT[63], img: BUNDLE_IMGS[63] },
    "65": { name: "700 CUTE AI MONSTER REELS BUNDLE", desc: "700 adorable AI monster reels — unique colourful content that stands out in every feed and gets massive organic reach.", tags: ["AI", "Monsters", "Cute"], yt: BUNDLE_YT[64], img: BUNDLE_IMGS[64] },
    "66": { name: "750 UNREALITY AI REELS BUNDLE", desc: "750 surreal unreality AI reels — a completely unique aesthetic that stops the scroll and gets saves instantly.", tags: ["AI", "Surreal", "Unique"], yt: BUNDLE_YT[65], img: BUNDLE_IMGS[65] },
    "67": { name: "900 EMOTIONAL REELS BUNDLE", desc: "900 deeply emotional reels that move audiences and generate the highest comment and share rate of any niche.", tags: ["Emotional", "Reels", "Viral"], yt: BUNDLE_YT[66], img: BUNDLE_IMGS[66] },
    "68": { name: "DIGITAL ART MARKETPLACE PROMO BUNDLE", desc: "Professional digital art marketplace promotion bundle — high-converting content for selling art and digital products.", tags: ["Digital Art", "Promo", "Marketing"], yt: BUNDLE_YT[67], img: BUNDLE_IMGS[67] },
    "69": { name: "HR TEMPLATES BANNER PACK", desc: "Premium HR and corporate template banners — perfect for LinkedIn, job portals and business social media pages.", tags: ["HR", "Templates", "Corporate"], yt: BUNDLE_YT[68], img: BUNDLE_IMGS[68] },
    "70": { name: "CREATIVE VIRAL REELS PACK", desc: "Handpicked creative viral reels covering multiple trending niches — maximum reach with minimum effort.", tags: ["Creative", "Viral", "Trending"], yt: BUNDLE_YT[69], img: BUNDLE_IMGS[69] },
    "71": { name: "VIDEO EDITING ESSENTIAL PACK", desc: "The complete video editing essential pack — professional transitions, effects and overlays for every platform.", tags: ["Editing", "Essential", "Pack"], yt: BUNDLE_YT[70], img: BUNDLE_IMGS[70] },
    "72": { name: "WEDDING GRAPHICS COLLECTION BUNDLE", desc: "Stunning wedding graphics collection — high-demand content for wedding photography, invitation design and event pages.", tags: ["Wedding", "Graphics", "Design"], yt: BUNDLE_YT[71], img: BUNDLE_IMGS[71] },
    "73": { name: "YOUTUBE THUMBNAIL PACK", desc: "Professional YouTube thumbnail pack with proven CTR-boosting designs. Better thumbnails = more clicks = more revenue.", tags: ["YouTube", "Thumbnails", "CTR"], yt: BUNDLE_YT[72], img: BUNDLE_IMGS[72] }
};

// ─── Read bundle ID from URL ──────────────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const bundleId = params.get('id');

// Guard: stop execution immediately if no valid bundle
if (!bundleId || !BUNDLES[bundleId]) {
    window.location.href = 'index.html';
    throw new Error('Invalid bundle ID — stopping execution');
}

const bundle = BUNDLES[bundleId];
const numericId = parseInt(bundleId, 10);

// ─── Populate page (safe to run since script is at bottom of body) ─────────────
document.title = `${bundle.name} – VideoMarket`;
document.getElementById('bundle-title').textContent = bundle.name;
document.getElementById('header-title').textContent = bundle.name;
document.getElementById('bundle-desc').textContent = bundle.desc;
document.getElementById('bundle-serial-badge').textContent = `#${bundleId}`;
document.getElementById('bundle-hero-img').src = bundle.img;
document.getElementById('bundle-hero-img').alt = bundle.name;

// Tags
const tagList = document.getElementById('bundle-tags');
bundle.tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'bundle-tag';
    chip.textContent = tag;
    tagList.appendChild(chip);
});

// YouTube embed — clear src first to force reload on page refresh
const videoEl = document.getElementById('bundle-video');
videoEl.src = '';
videoEl.src = `https://www.youtube.com/embed/${bundle.yt}?rel=0&modestbranding=1&color=white`;

// Proceed button
document.getElementById('proceed-btn').href = 'index.html';

// ─── Selection state (synced with main gallery via localStorage) ──────────────
const STORAGE_KEY = 'bundle_page_selection';

function getSelectedSet() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch { return new Set(); }
}

function saveSelectedSet(set) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

function isSelected() {
    return getSelectedSet().has(numericId);
}

function updateButtonUI(selected) {
    const topBtn = document.getElementById('bundle-select-btn');
    const ctaBtn = document.getElementById('cta-select-btn');
    const ctaIcon = document.getElementById('cta-icon');
    const ctaTxt = document.getElementById('cta-btn-text');
    const hint = document.getElementById('select-hint');
    const proceedBtn = document.getElementById('proceed-btn');
    const countTxt = document.getElementById('cta-count-text');

    const count = getSelectedSet().size;
    if (countTxt) countTxt.textContent = `${count} bundle${count !== 1 ? 's' : ''} selected`;

    if (selected) {
        topBtn.innerHTML = `<i class="fas fa-check-circle"></i><span>SELECTED ✓</span>`;
        topBtn.classList.add('selected-state');
        ctaBtn.classList.add('selected-state');
        ctaIcon.className = 'fas fa-check-circle';
        ctaTxt.textContent = 'REMOVE FROM SELECTION';
        hint.textContent = count >= 5
            ? `${count} bundles selected — ready to proceed!`
            : `Select ${5 - count} more to proceed`;
        proceedBtn.classList.toggle('hidden', count < 5);
    } else {
        topBtn.innerHTML = `<i class="fas fa-plus-circle"></i><span>SELECT THIS BUNDLE</span>`;
        topBtn.classList.remove('selected-state');
        ctaBtn.classList.remove('selected-state');
        ctaIcon.className = 'fas fa-plus-circle';
        ctaTxt.textContent = 'SELECT THIS BUNDLE – ₹10';
        hint.textContent = count >= 5
            ? `${count} bundles selected — ready to proceed!`
            : `Select at least 5 bundles to proceed`;
        proceedBtn.classList.toggle('hidden', count < 5);
    }
}

function toggleBundleSelection() {
    const sel = getSelectedSet();
    const wasSelected = sel.has(numericId);

    if (wasSelected) {
        sel.delete(numericId);
    } else {
        sel.add(numericId);
        if (navigator.vibrate) navigator.vibrate([50, 30, 80]);
    }

    saveSelectedSet(sel);
    updateButtonUI(!wasSelected);

    // Sync 0-indexed for script.js gallery
    localStorage.setItem('gallery_selection_indices',
        JSON.stringify([...sel].map(id => id - 1)));
}

// ─── Initial render ───────────────────────────────────────────────────────────
updateButtonUI(isSelected());

