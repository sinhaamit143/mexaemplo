function showName($id){
    var id=$id;
    $.ajax({
            type: "POST",
            url: "/ajax/check_sp.php",
            data: "id=" + id,
            dataType: "json",
            cache: false,
            success: function(html) {
                    $("#lblName").html(html[0]);
                    $("#userID").val(html[1]);
                    $('#installment-input').fadeIn("slow");
                    $(".process").hide();
            }
    });
}
