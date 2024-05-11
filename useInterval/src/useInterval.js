/**
 * 要求实现一个定时器 hook (任选 react/vue3)，调用示例如下：
 *
 * const { start, stop, pause, resume } = 
 * useInterval(()=>console.log('foo'), 3000, true)
 */

// 实现思路：

import { ref, watch, onUnmounted } from 'vue';

function useInterval(callback, delay, immediate = false) {
  const savedCallback = ref(callback);
  const intervalId = ref(null);

  // 保存新的回调
  watch(callback, () => {
    savedCallback.value = callback;
  });

  // 设置定时器
  const start = () => {
    if (intervalId.value === null) {
      const tick = () => {
        savedCallback.value();
      };
      intervalId.value = setInterval(tick, delay);
      if (immediate) {
        savedCallback.value();
      }
    }
  };

  // 停止定时器
  const stop = () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  // 组件卸载时清除定时器
  onUnmounted(stop);

  return {
    start,
    stop,
    pause: stop,
    resume: start
  };
}

export default useInterval;