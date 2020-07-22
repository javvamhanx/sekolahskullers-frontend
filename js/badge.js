$('.badge').addClass(function() {
  switch ($(this).html()) {
    case 'Sailors': return 'badge-primary'; break;
    case 'Gunners': return 'badge-secondary'; break;
    case 'Boatswain': return 'badge-success'; break;
    case 'Lieutenants': return 'badge-danger'; break;
    case 'Sailing Master': return 'badge-warning'; break;
    case 'First Mate': return 'badge-info'; break;
    case 'Kapten': return 'badge-light';
  }
});