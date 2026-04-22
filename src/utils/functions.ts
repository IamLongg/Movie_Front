/**
 * @description hàm nhập text không dấu
 */
export const checkImage = async (url: string) => {
  try {
    const res = await fetch(url, { method: 'Head' });
    return res.ok;
  } catch {
    return false;
  }
};
