  $(document).ready(function() {

    // Tablesorter 
    // Default sorting

    $("table.tablesorter").tablesorter({ 
    	sortList: [[1,1]] 
    }); 


    var tableHeads = $('table.tablesorter thead th') 

    $(tableHeads).click(function(e){
    	tableHeads.removeClass('active');
    	$(this).addClass('active');
    });
});
