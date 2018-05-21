$(document).ready( function() {
  const validNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  let playAudio = function playAudio(note) {
    $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
    });
    let noteId = `#${note}Audio`;
    let audio = $(noteId)[0];
    audio.play();
  }

  $('.instrument').on('click', 'button', function() {
    let note = $(this)[0].innerHTML;
    playAudio(note);
  });

  $('body').keydown((event) => {
    let note = event.key;
    if (validNotes.includes(note)) {
      playAudio(note);
    }
  });
});
