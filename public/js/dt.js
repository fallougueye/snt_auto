  var table = $("table").dataTable({
  "lengthMenu": [[15, 30, 50, -1], [15, 30, 50 , "Tous"]],
  "order": [[ 0, "desc" ]],
   "language":{
    "sProcessing":     "Traitement en cours...",
    "sSearch":         "Rechercher une annonce &nbsp;:",
    "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
    "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
    "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
    "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    "sInfoPostFix":    "",
    "sLoadingRecords": "Chargement en cours...",
    "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
    "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
    "oPaginate": {
        "sFirst":      "Premier ",
        "sPrevious":   "Pr&eacute;c&eacute;dent ",
        "sNext":       " Suivant",
        "sLast":       " Dernier"
    }, "oAria": {
        "sSortAscending": ": activer pour trier la colonne par ordre croissant",
        "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
        }
     }
  });
