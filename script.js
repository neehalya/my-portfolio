$(document).ready(function () {
  var calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Keep the copyright year current.
  $("#year").text(new Date().getFullYear());
  // One entrance on the home page: the two page links slide in.
  if (!calm) {
    $(".door").each(function (i) {
      $(this).css({ opacity: 0, marginLeft: 40 }).delay(i * 200).animate({ opacity: 1, marginLeft: 0 }, 500);
    });
  }
  // Print / Save as PDF.
  $("#printResume, #printBiodata").on("click", function () { window.print(); });
  // Click the email on the resume to copy it.
  $(".copy-email").on("click", function (e) {
    var $t = $(this), mail = $t.text();
    if (!navigator.clipboard) return;
    e.preventDefault();
    navigator.clipboard.writeText(mail).then(function () {
      $t.text("Email copied");
      setTimeout(function () { $t.text(mail); }, 1500);
    });
  });
});
