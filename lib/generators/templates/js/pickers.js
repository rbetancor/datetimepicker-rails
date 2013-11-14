$(function() {
  init_pickers();
});

function init_pickers(){
  $('.datepicker').datetimepicker({
    pickTime: false
  });
  $('.datetimepicker').datetimepicker({
    pickSeconds: false
  });
  $('.timepicker').datetimepicker({
    pickDate: false,
    pickSeconds: false
  });
}