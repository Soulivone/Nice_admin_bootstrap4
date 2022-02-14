
$(document).ready( function () {
    $('#table-recent').DataTable({
        "sDom": "lfrti",
        "aLengthMenu": [[5, 10, 15, 20, 25], [5, 10, 15, 20, 25]],
        "iDisplayLength": 10,
        "processing": true,
        language: {
            "search": "_INPUT_",
            "searchPlaceholder": "Search...",
            "lengthMenu": "_MENU_ entries per page",
        }
    });
})
$(document).ready( function () {
    $('#table-topselling').DataTable({
        "searching": false,
        "paging": false,
        "bInfo": false,
        "targets": 'no-sort',
        "bSort": false,
    });
});
