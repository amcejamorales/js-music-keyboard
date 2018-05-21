$(document).ready( function() {
  const validNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  let playAudio = function playAudio(note) {
    let noteId = `#${note}Audio`;
    let thisAudio = $(noteId)[0];
    $('audio').each(function() {
      if (this === thisAudio) {
        this.pause();
        this.currentTime = 0;
      }
    });
    thisAudio.play();
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
