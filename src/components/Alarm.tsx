import React, { ForwardedRef } from "react";

const Alarm = React.forwardRef<HTMLAudioElement, {}>((_, ref: ForwardedRef<HTMLAudioElement>) => {
  return (
    <audio ref={ref}>
      <source src="/alarm.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  );
});

Alarm.displayName = 'Alarm'; // Set the display name

export default React.memo(Alarm);