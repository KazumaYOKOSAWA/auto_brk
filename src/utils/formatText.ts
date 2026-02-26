import { KEYWORDS } from "./keywords.ts";

/**
 * 文頭キーワードで改行を入れる関数（改善版）
 */
export const formatText = (text: string): string => {
  let formatted = text;

  KEYWORDS.forEach((word) => {
    // 「。」「！」「？」の後にキーワードが来たら改行を入れる
    const regex = new RegExp(`([。！？])(${word})`, "g");
    formatted = formatted.replace(regex, `$1\n\n$2`);
  });

  return formatted.trim();
};