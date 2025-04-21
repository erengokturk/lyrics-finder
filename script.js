document.getElementById("lyrics-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;
  const lyricsContainer = document.getElementById("lyrics");

  fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.lyrics) {
        lyricsContainer.textContent = data.lyrics;
      } else {
        lyricsContainer.textContent = "Şarkı sözleri bulunamadı.";
      }
    })
    .catch((error) => {
      lyricsContainer.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
    });
});
