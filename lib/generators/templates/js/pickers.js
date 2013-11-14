$(function() {
    $('.datepicker').datetimepicker({
        pickTime: false
    });
});

$(function() {
    $('.datetimepicker').datetimepicker({
        pickSeconds: true
    });
});

$(function() {
    $('.timepicker').datetimepicker({
        pickDate: false,
        pickSeconds: true
    });
});