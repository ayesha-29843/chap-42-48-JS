// JavaScript function to show the alert
       
           function showAlert() {
            alert("The link has been clicked!");
        }


//display some mobile image in browser on click on an image show the message in alerts to user

         function showAlert(mobileName) {
            alert("thanks for purchase from us " + mobileName);
        }


//display 10 student record on your table and each row should contain a delete button if you click on a button to delete a record entire row should be deleted
         
       function deleteRow(btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }