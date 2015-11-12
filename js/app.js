$(function(){
  var currentDate = new Date();
  var pastDate  = new Date(currentDate.getFullYear(), 12, 27);
  var diff = Math.abs(currentDate.getTime() / 1000 - pastDate.getTime() / 1000);

  $('.countdown-clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			// label: 'flip-clock-label',
			label: 'hidden',
			flip: 'flip',
			play: 'play',
			wrapper: 'flip-clock-wrapper'
		},
  });
});
