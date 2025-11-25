function BrewPic(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "brew-pic";

    // Keep existing click behavior (toggle on/off)
    img.onclick = () => img.classList.toggle("big");

    // Add this: Ensure it closes when the mouse leaves the image area
    img.onmouseleave = () => img.classList.remove("big");

    return img;
}

const MAX_TRY = 500;
const gallery = document.getElementById("gallery");
let pics = [];
let i = 0;

function shuffle(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        const r = Math.floor(Math.random() * (j + 1));
        [arr[j], arr[r]] = [arr[r], arr[j]];
    }
}

function loadNext() {
    if (i > MAX_TRY) {
        shuffle(pics);
        pics.forEach(p => gallery.appendChild(p));
        return;
    }

    const img = BrewPic(`assets/brew/${i}.jpg`, `brew ${i}`);

    img.onload = () => {
        pics.push(img);
        i++;
        loadNext();
    };

    img.onerror = () => {
        i++;
        loadNext();
    };

    const _ = img.src;
}

loadNext();
