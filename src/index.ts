let entry = window.location.href;

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export const getSignableUrl = (): string => {
  let href = entry;

  if (!iOS) {
    href = window.location.href;
  }

  return href.split('#')[0];
};

export default getSignableUrl;
