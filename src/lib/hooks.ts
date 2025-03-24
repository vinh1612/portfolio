import { useActiveSectionContext } from "@/src/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/** Nguyên tắc sử dụng threshold
 * - Threshold nhỏ (0.1 - 0.3): 
 * + Sử dụng cho các component cao hoặc các phần mà bạn muốn được coi là "active"
 * ngay khi người dùng bắt đầu nhìn thấy nó
 * - Threshold trung bình (0.4 - 0.6):
 * + Phù hợp cho các component có kích thước trung bình,
 * khi bạn muốn phần đó được coi là "active" khi khoảng một nửa của nó hiển thị
 * - Threshold lớn (0.7 - 1.0):
 * + Sử dụng cho các component nhỏ hoặc khi bạn muốn đảm bảo
 * người dùng hoàn toàn tập trung vào phần đó trước khi đánh dấu nó là active
 **/
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
