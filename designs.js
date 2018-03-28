//An event listener that comes into action when Submit button is clicked .
$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});
//To make the grid pattern makegrid is called whenever button is clicked.
function makeGrid() {
    //variables to get canvas element,height,width
        var table = $("#pixelCanvas");
        var gridHeight = $("#inputHeight");
        var gridWidth = $("#inputWeight");
        table.children().remove();
        for (x = 0; x < gridHeight.val(); x++) {
          table.append('<tr></tr>');
        }
        rows = $('tr');
        for (y = 0; y < gridWidth.val(); y++) {
          rows.append('<td></td>');
        } 
        table.on( 'click','td', function() {  
             var color = $("#colorPicker"); 
             $(this).attr('bgcolor', color.val());  
        });
}