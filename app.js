 $('.second.circle').circleProgress({
  value: 0.6
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
});
