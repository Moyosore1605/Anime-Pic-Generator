const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('imgContainer');
const imgEl = document.getElementById('image');
const nameEl = document.getElementById('name');
const altImageEl = document.getElementById('altImage');

const getImage = async() => {
    try {
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        nameEl.innerText = 'Updating...';
        const response = await fetch('https://api.catboys.com/img');
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime';
        containerEl.style.display = 'flex';
        imgEl.src = data.url;
        nameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = 'Get Anime';
        nameEl.innerText = 'An error occured, please try again.';
    }
}

btnEl.addEventListener('click', getImage);