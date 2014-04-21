$(function() {
    $('.datepicker input[text]').datetimepicker({
        pickTime: false,
        endDate: '-0d'
    });
    
    $('.datetimepicker input[text]').datetimepicker({
        pickSeconds: false
    });
    
    $('.timepicker input[text]').datetimepicker({
        pickDate: false,
        pickSeconds: false
    });
});
