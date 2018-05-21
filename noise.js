$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    let note = $(this)[0].innerHTML;
    console.log(note);
    let noteId = `${note}Audio`;
    console.log(noteId);
    let audio = document.getElementById(noteId);
    console.log(audio);
    audio.play();
  });
});
