// Image List
const images = [
    'photo_6082457110810660433_y.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.27 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.28 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.28 AM(2).jpg',
    'WhatsApp Image 2026-02-11 at 11.12.28 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.29 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.29 AM.jpg',
    'WhatsApp Image 2026-02-11 at 11.12.30 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.30 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.31 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.31 AM(2).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.31 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.32 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.32 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.33 AM(1).jpg',
    'WhatsApp Image 2026-02-11 at 11.12.33 AM(2).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.33 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.34 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.34 AM.jpg',
    'WhatsApp Image 2026-02-11 at 11.12.35 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.12.35 AM.jpg',
    'WhatsApp Image 2026-02-11 at 11.23.18 AM.jpg',
    'WhatsApp Image 2026-02-11 at 11.23.19 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.19 AM(2).jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.19 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.20 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.21 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.21 AM(2).jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.21 AM.jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.22 AM(1).jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.22 AM(2).jpeg',
    'WhatsApp Image 2026-02-11 at 11.23.22 AM.jpeg',
    // ── New Bundles (33–73) ──────────────────────────────────────────────────────
    'new bundles/100-4K-BGMI-BACKGROUND-BANNER-700x700 (1).png',
    'new bundles/1000-AI-Story-Reels-Bundle-430x430 (1).png',
    'new bundles/1000-Ai-Animal-Vlogging-Bundle-430x430 (1).png',
    'new bundles/1000-Caught-On-Camera-Ai-Reels-Bundle-700x700 (1).png',
    'new bundles/1000-Luxury-Lifestyle-Reels-Bundle-430x430 (1).png',
    'new bundles/1000-Money-Motivational-Reels-Bundle-430x430 (1).png',
    'new bundles/1000-The-Legend-of-Hanuman-Reels-Bundle-700x700 (1).png',
    'new bundles/100GB-Thumbnail-Graphics-Mega-Bundle-700x700 (1).jpg.jpeg',
    'new bundles/1100-Cute-Ai-Toons-Reels-Bundle-700x700 (1).png',
    'new bundles/1200-GLASS-CUTTING-AI-ASMR-REELS-BUNDLE-430x430 (1).png',
    'new bundles/150-Colorfull-Monsters-Reels-Bundle-700x700 (1).png',
    'new bundles/1770473888430.png',
    'new bundles/1770473975655.png',
    'new bundles/200-Futuristic-Ai-Machine-Reels-Bundle-700x700 (1).png',
    'new bundles/2000-SCENERY-REELS-BUNDLE-POST-700x700 (1).png',
    'new bundles/20000-Backgrounds-Bundle-700x700 (1).jpg.jpeg',
    'new bundles/240-AI-God-Images-700x700.png',
    'new bundles/250-Baby-Food-Eating-Food-Ai-Reels-Bundle-700x700 (1).png',
    'new bundles/2500-Car-Reels-Bundle-430x430 (1).jpg.jpeg',
    'new bundles/300-Dream-Bed-Ai-ASMR-Reels-Bundle-700x700 (1).png',
    'new bundles/3000-T-Shirt-design-bundle-700x700 (1).jpg.jpeg',
    'new bundles/350-AI-Facts-Reels-Bundle-430x430 (1).png',
    'new bundles/400-Pixellab-PLP-Thumbnail-Pack-700x700 (1).jpg.jpeg',
    'new bundles/450-AI-Trading-Reels-Bundle-700x700 (1).png',
    'new bundles/450-Health-Awareness-Ai-Reels-Bundle-700x700 (1).png',
    'new bundles/500-2D-Animation-Reels-Bundle-430x430 (1).png',
    'new bundles/500-Floor-Transformation-Ai-Reels-Bundle-700x700 (1).png',
    'new bundles/50GB-BIGGEST-EDITING-PACK-Mockup-430x301.png',
    'new bundles/600-Bgmi-3D-Characters-Pack-700x700 (1).png',
    'new bundles/600-Radha-Krishna-High-Quality-Image-Bundle-700x700 (1) (1).png',
    'new bundles/650-GB-Graphic-Bundle-Mockup-700x490.png',
    'new bundles/70-GB-EDITING-PACK-Mockup-430x301.png',
    'new bundles/700-Cute-Ai-Monster-Reels-Bundle (1).png',
    'new bundles/750-Unreality-Ai-Reels-Bundle1-700x700 (1).png',
    'new bundles/900-Emotional-Reels-Bundle-700x700 (1).png',
    'new bundles/Blue-Modern-Digital-Art-Marketplace-Promotion-Instagram-Post-430x430 (1).jpg.jpeg',
    'new bundles/HR-Templates-Banner-430x430 (1).png',
    'new bundles/Picsart_26-02-07_19-53-45-159.jpg.jpeg',
    'new bundles/Video-Editing-Essential-Pack-1-430x430 (1).png',
    'new bundles/Wedding-Graphics-Collection-Bundle-700x700 (1).jpg.jpeg',
    'new bundles/YouTube-Thumbnail-Pack-Banner-430x430 (1).png',
];

// State
let selectedIndices = new Set();
const minSelection = 5; // Reverted to 5 as per request

// Restore selection synced from bundle detail pages
(function restoreFromBundlePages() {
    try {
        const saved = localStorage.getItem('gallery_selection_indices');
        if (saved) {
            const arr = JSON.parse(saved);
            arr.forEach(i => selectedIndices.add(i));
        }
    } catch (e) { /* ignore */ }
})();
const galleryContainer = document.querySelector('.gallery');
const fragment = document.createDocumentFragment(); // batch DOM insertion

// Render Gallery
images.forEach((image, index) => {
    const serialNo = index + 1;

    // Container
    const container = document.createElement('div');
    container.classList.add('gallery-item-container');
    container.dataset.index = index;

    // Stagger delay capped at 0.4s — with 73 items, uncapped = 3.6s wait for last card
    container.style.animationDelay = `${Math.min(index * 0.04, 0.4)}s`;


    // Image
    const imgElement = document.createElement('img');
    imgElement.src = `photo/${image}`;
    imgElement.alt = `Bundle #${serialNo}`;
    imgElement.loading = 'lazy';
    imgElement.decoding = 'async';   // non-blocking decode — keeps main thread free

    // Serial Badge
    const badge = document.createElement('div');
    badge.classList.add('serial-badge');
    badge.innerText = `#${serialNo}`;

    // Action Button
    const btn = document.createElement('button');
    btn.className = 'action-btn select';
    btn.innerText = 'SELECT 👆';

    // Interactive Logic
    // 1. Click Image = Navigate to bundle detail page
    imgElement.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = `bundle.html?id=${serialNo}`;
    });

    // Serial badge also links to bundle page
    badge.style.cursor = 'pointer';
    badge.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = `bundle.html?id=${serialNo}`;
    });

    // 2. Click Button = Select / Remove only
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSelection(index, container, btn, imgElement);
    });

    // NOTE: No container-level click handler — it caused double toggles
    // when image (navigate) or button (select) was clicked.

    // "View Details" overlay link
    const detailsLink = document.createElement('a');
    detailsLink.href = `bundle.html?id=${serialNo}`;
    detailsLink.className = 'details-overlay-link';
    detailsLink.innerHTML = `<i class="fas fa-info-circle"></i> Details`;
    detailsLink.addEventListener('click', e => e.stopPropagation());

    container.appendChild(imgElement);
    container.appendChild(badge);
    container.appendChild(detailsLink);
    container.appendChild(btn);
    fragment.appendChild(container);


    // Restore visual selection state from localStorage
    if (selectedIndices.has(index)) {
        container.classList.add('selected');
        btn.className = 'action-btn remove';
        btn.innerText = 'REMOVE ❌';
    }
});
// Batch insert — one reflow instead of 73
galleryContainer.appendChild(fragment);

// Sync the sticky selection bar with any state restored from bundle pages
// (Without this, cards are highlighted but the count shows 0)
updateUI();
syncSelectionToStorage();

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    /* Create explicit close button (X) if not exists */
    if (!lightbox.querySelector('.lightbox-close-btn')) {
        const closeBtn = document.createElement('div');
        closeBtn.className = 'lightbox-close-btn';
        closeBtn.innerHTML = '&times;';
        lightbox.appendChild(closeBtn);

        // Add click listener specifically for this button
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('lightbox').classList.remove('active');
        });
        // Add click listener specifically for this button
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('lightbox').classList.remove('active');
        });
    }

    lightboxImg.src = src;
    lightbox.classList.add('active');
}

// Close Lightbox on Click ANYWHERE
document.getElementById('lightbox').addEventListener('click', (e) => {
    // If clicking image, do nothing? No, user wants tap anywhere to close.
    // So we just close it.
    document.getElementById('lightbox').classList.remove('active');
});


// Selection Logic with Animation
function toggleSelection(index, container, btn, imgElement) {
    if (selectedIndices.has(index)) {
        // Remove
        selectedIndices.delete(index);
        container.classList.remove('selected');

        btn.className = 'action-btn select';
        btn.innerText = 'SELECT 👆';

        // Haptic (Light)
        if (navigator.vibrate) navigator.vibrate(50);

    } else {
        // Select
        selectedIndices.add(index);
        container.classList.add('selected');

        btn.className = 'action-btn remove';
        btn.innerText = 'REMOVE ❌';

        // Play Animation
        playFlyAnimation(imgElement);

        // Haptic (Heavy)
        if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
    }
    updateUI();
    // Sync back with bundle detail pages
    syncSelectionToStorage();
}

function syncSelectionToStorage() {
    localStorage.setItem('gallery_selection_indices', JSON.stringify([...selectedIndices]));
    // Also sync as 1-indexed bundle IDs for bundle.js
    const bundleIds = [...selectedIndices].map(i => i + 1);
    localStorage.setItem('bundle_page_selection', JSON.stringify(bundleIds));
}

function playFlyAnimation(sourceImg) {
    // Clone Image
    const flyer = sourceImg.cloneNode();
    flyer.classList.add('flying-img');

    // Get coordinates
    const rect = sourceImg.getBoundingClientRect();
    const target = document.querySelector('.progress-bar-container');
    const targetRect = target.getBoundingClientRect();

    // Set Initial Position (Fixed)
    flyer.style.left = `${rect.left}px`;
    flyer.style.top = `${rect.top}px`;
    flyer.style.width = `${rect.width}px`;
    flyer.style.height = `${rect.height}px`;
    flyer.style.transform = "scale(1)"; // Explicit start scale
    flyer.style.opacity = "1";

    document.body.appendChild(flyer);

    // Force Reflow / Double RAF ensures transition happens
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            // Target Position (Center of Progress Bar)
            const targetX = targetRect.left + (targetRect.width / 2);
            const targetY = targetRect.top + (targetRect.height / 2);

            // Calculate translation needed
            const moveX = targetX - (rect.left + rect.width / 2);
            const moveY = targetY - (rect.top + rect.height / 2);

            flyer.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.05)`;
            flyer.style.opacity = '0';
        });
    });

    // Cleanup
    setTimeout(() => {
        if (flyer.parentNode) flyer.remove();

        // Pulse Counter & Bar
        const counter = document.getElementById('count');
        const bar = document.getElementById('progress-fill');

        counter.style.transform = "scale(1.5)";
        bar.style.filter = "brightness(1.5)";

        setTimeout(() => {
            counter.style.transform = "scale(1)";
            bar.style.filter = "brightness(1)";
        }, 200);
    }, 800); // Match CSS transition duration
}

function updateUI() {
    const countSpan = document.getElementById('count');
    const buyBtn = document.getElementById('buy-btn');
    const progressBar = document.getElementById('progress-fill');

    const count = selectedIndices.size;
    // Cap progress bar at 100% physically, but logical count goes higher
    const progress = Math.min((count / minSelection) * 100, 100);

    countSpan.innerText = count;
    progressBar.style.width = `${progress}%`;

    if (count >= minSelection) {
        buyBtn.classList.add('active');
        const totalPrice = count * 10;
        buyBtn.innerText = `BUY ${count} BUNDLES - ₹${totalPrice}`;

        // Vibrate only on the exact transition to valid state
        if (count === minSelection && navigator.vibrate) navigator.vibrate([100, 50, 100]);
    } else {
        buyBtn.classList.remove('active');
        buyBtn.innerText = `SELECT ${minSelection - count} MORE (Min 5)`;
    }
}

// WhatsApp Redirect
// WhatsApp Redirect
const whatsappNumber = '919826397716';

function buyNow() {
    if (selectedIndices.size < minSelection) {
        alert(`Please select at least ${minSelection} bundles to proceed!`);
        return;
    }

    if (navigator.vibrate) {
        navigator.vibrate(200);
    }

    const serials = Array.from(selectedIndices).map(i => i + 1).sort((a, b) => a - b);

    // Save selection to LocalStorage for the next page
    const orderData = {
        itemCount: selectedIndices.size,
        totalPrice: selectedIndices.size * 10, // Dynamic Price
        selectedIds: serials
    };
    localStorage.setItem('mega_bundle_order', JSON.stringify(orderData));

    // Also persist selection sync keys
    syncSelectionToStorage();

    // Redirect to Details Page
    window.location.href = 'details.html';
}

// Misc Logic (Timer removed — it ran setInterval every 1s causing constant repaints.
// Confetti, social proof below)

// Dynamic Title
window.addEventListener("blur", () => { document.title = "WAIT! Don't Miss Out! 😱"; });
window.addEventListener("focus", () => { document.title = "Mega Offer - 10 Video Bundle"; });

// Handle Welcome Overlay Logic Independently
document.addEventListener("DOMContentLoaded", () => {
    const hideOverlay = () => {
        const overlay = document.getElementById('welcome-overlay');
        if (overlay) {
            overlay.classList.add('overlay-hidden');
            // Hard remove from DOM after transition to be sure
            setTimeout(() => {
                if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            }, 1000);
        }
    };

    // Primary Hide: 2 seconds
    setTimeout(hideOverlay, 2000);
});

// Lightweight confetti — only on FIRST ever visit (not every session)
// so returning users never pay the cost
function startConfetti() {
    const colors = ['#7c3aed', '#a78bfa', '#06b6d4', '#f472b6', '#fbbf24'];
    const count = 30; // fewer particles
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden';
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        const size = Math.random() * 8 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * 100;
        const duration = Math.random() * 2 + 1.5;
        const delay = Math.random() * 1.5;
        p.style.cssText = `position:absolute;left:${startX}vw;top:-20px;width:${size}px;height:${size}px;background:${color};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};animation:confettiFall ${duration}s ${delay}s linear forwards;`;
        container.appendChild(p);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 3500);
}
// Only fire confetti on absolute first visit ever (localStorage persists across sessions)
if (!localStorage.getItem('confetti_shown')) {
    localStorage.setItem('confetti_shown', '1');
    window.addEventListener('load', startConfetti);
}

// Social Proof
const names = ["Rahul", "Priya", "Amit", "Sneha", "Vikram"];
const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad"];

function createSocialProof() {
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const popup = document.createElement('div');
    popup.classList.add('social-proof-popup');
    popup.innerHTML = `
        <div style="background: #25d366; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold;">${name.charAt(0)}</div>
        <div class="social-proof-text">${name} from ${city}<br><span>Just bought 10 bundles!</span></div>
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add('visible'), 100);
    setTimeout(() => {
        popup.classList.remove('visible');
        setTimeout(() => popup.remove(), 500);
    }, 3500); // Hide faster
}

// Randomly trigger social proof less often to reduce DOM churn
function randomSocialProof() {
    const delay = Math.random() * 7000 + 8000; // 8–15 seconds (was 3–8)
    setTimeout(() => {
        createSocialProof();
        randomSocialProof();
    }, delay);
}
// Start delayed — give the page time to fully render and settle
setTimeout(randomSocialProof, 12000);
