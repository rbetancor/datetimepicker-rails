$(function() {
    $('.datepicker').datetimepicker({
        pickTime: false,
        endDate: '-0d'
    });
});

$(function() {
    $('.datetimepicker').datetimepicker({
        pickSeconds: false
    });
});

$(function() {
    $('.timepicker').datetimepicker({
        pickDate: false,
        pickSeconds: false
    });
});
