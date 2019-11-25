let entry: string;
let uninited = true;

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

export const getSignableUrl = (): string => {
  if (uninited) {
    throw new Error('获取待签名URL前必须先初始化入口地址信息');
  }

  let href = entry;

  if (!iOS) {
    href = window.location.href;
  }

  return href.split('#')[0];
};

/**
 * 初始化入口地址
 *
 * 在初始化之前去获取签名URL将会引起一个异常
 */
export const init = () => {
  if (!uninited) return;

  uninited = false;
  entry = window.location.href;
};

getSignableUrl.init = init;

export default getSignableUrl;
