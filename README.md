# QD Cards

This project was started to get some practice with front-end tools for making
e-cards. The first example is a Christmas card with some interaction where you
can decorate a Christmas tree with emojis.

## Current Issues

There is an event listener to close the emoji container modal on clicks to the
background. This seems to be triggering at times when it shouldn't, most likely
because of a mouseup event that is propagating to the body element.

(Confirmed that this only happens when picking the same thing twice)

On mobile, the mousedown, mousemove, and mouseup events do not work properly,
so the elements are not draggable.
