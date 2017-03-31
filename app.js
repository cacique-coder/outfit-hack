var xhr;

var Communication = {
  initialize: function(){
    var _orgAjax = jQuery.ajaxSettings.xhr;

    jQuery.ajaxSettings.xhr = function () {
      xhr = _orgAjax();
      return xhr;
    };
  },

  send : function(arguments){
    window.url = "http://timefit.outfit.io/projects/2790/selections/78997/dynamic_export"+
              "?&document_id=26812&access_token=U1WqGTJDHE4q8MsGSj54S8Bw&" +arguments;

    $('#image_id').attr('src', url)
  }
};

var Forms = {
  initialize : function(){
    var selectTimeZone = document.querySelector('#timeZoneList');
    selectTimeZone.innerHTML = moment.tz.names().map((n) => "<option>"+n+"</option>")
  },
  generate : function(e){
    e.preventDefault();
    Communication.send(unescape($('form').serialize()));
  }
}

$(function(){
  Communication.initialize();
  Forms.initialize();
  document.querySelector('#generate').addEventListener("click", Forms.generate);
  $('#datetimepicker12').datetimepicker();
  $('#datetimepicker12').datetimepicker({ inline: true, sideBySide: true });
  $('#datetimepicker12').on('dp.change', function(e){
    document.querySelector("#context_time_stamp").value = e.date.toISOString();
  })
})
