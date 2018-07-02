$("#sms-form").submit(function(event) {
  event.preventDefault();
  var pass = $(this).find("input[name='password']").val();
  (pass === "password") ? successCallback() : failureCallback();
});

$(".input-group-addon").on('click', function() {
    $(this).find("i").toggleClass("fa-eye fa-eye-slash");
    var type = $(this).closest('.input-group').find('.form-control').attr('type');
    if (type == 'password') {
        $(this).closest('.input-group').find('.form-control').attr('type', 'text');
    } else {
        $(this).closest('.input-group').find('.form-control').attr('type', 'password');
    }
});

$("input, textarea").focus(function() {
    $(this).parent().find(".inp-label").addClass("active");
    $(this).parent(".input-group").addClass("focusedLine");
});

$("input, textarea").blur(function() {
    if (!this.value) {
        $(this).parent().find(".inp-label").removeClass("active");
        $(this).parent(".input-group").addClass("focusedLine");
    }
    $(this).parent(".input-group").removeClass("focusedLine");
    $(this).parent().find(".input-group-addon").css("border-color", "#ccc");
});

$('[data-toggle="tooltip"]').tooltip({placement: "bottom", title: "Don't think too hard!"});
$('[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
        $('.tooltip').addClass('animated swing');
    });

var successCallback = function() {
    $("#success").addClass("success_active");
    $('.circle-loader').show();
    window.setTimeout(function() {
        $('.checkmark').toggle();
        $('.circle-loader').toggleClass('success-load-complete');
    }, 1000);
};

var failureCallback = function() {
    $("#failure").addClass("failure_active");
    $('.square-loader').show();
    window.setTimeout(function() {
        $('.x').toggle();
        $('.square-loader').toggleClass('failure-load-complete');
    }, 1000);
};