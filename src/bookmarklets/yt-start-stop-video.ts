document.addEventListener('visibilitychange', function () {
  const vid = document.querySelector('.html5-main-video') as HTMLVideoElement;
  if (!vid) {
    console.error('Video element was not found');
  }

  /* A bit silly is else, but maybe I will do some other actions depending on the visibility state */
  if (document.visibilityState === 'visible') {
    console.log(`Visibility: ${document.visibilityState}`);
    vid.click();
  } else {
    console.log(`Visibility: ${document.visibilityState}`);
    vid.click();
  }
});