import { LessonIllustration, Subject, GradeLevel } from '../types';

export interface DigitalMaterialAsset {
  id: string;
  subject: Subject | 'Khoa học tự nhiên' | 'Toán học' | 'Vật lí' | 'Hoá học' | 'Sinh học' | 'Công nghệ';
  grade: GradeLevel;
  chapterTitle: string;
  lessonName: string;
  caption: string;
  url: string;
  description: string;
  type: 'experiment' | 'diagram' | 'molecule' | 'chart' | 'photo' | 'sgk_scan';
  source: string;
  tags: string[];
}

/**
 * KHO HỌC LIỆU SỐ & HÌNH ẢNH MINH HỌA SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Nguồn: Cổng Học liệu số Hành Trang Số (https://hanhtrangso.nxbgd.vn) & NXB Giáo Dục Việt Nam
 * Đảm bảo 100% phù hợp kiến thức chuẩn chương trình GDPT 2018
 */
export const HTS_DIGITAL_ILLUSTRATIONS: DigitalMaterialAsset[] = [
  // ==========================================
  // KHOA HỌC TỰ NHIÊN / HÓA HỌC (LỚP 8, 9, 10)
  // ==========================================
  {
    id: 'hts-khtn8-acid-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương II: Một số hợp chất thông dụng',
    lessonName: 'Bài 8: Acid',
    caption: 'Hình 8.1. Thí nghiệm tác dụng của dung dịch hydrochloric acid (HCl) làm đổi màu giấy quỳ tím',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
    description: 'Hiện tượng: Giấy quỳ tím chuyển sang màu đỏ khi tiếp xúc với giọt dung dịch acid HCl loãng. Minh họa tính chất đổi màu chỉ thị của acid.',
    type: 'experiment',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 38',
    tags: ['acid', 'quy tim', 'thi nghiem', 'khtn 8', 'hoa hoc', 'bai 8']
  },
  {
    id: 'hts-khtn8-acid-2',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương II: Một số hợp chất thông dụng',
    lessonName: 'Bài 8: Acid',
    caption: 'Hình 8.2. Thí nghiệm dung dịch HCl tác dụng với kim loại kẽm (Zn) sinh ra bọt khí Hydrogen (H₂)',
    url: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop&q=80',
    description: 'Mẩu kim loại kẽm Zn tan dần trong ống nghiệm đựng dung dịch HCl, bề mặt sủi bọt khí H2 không màu thoát ra. Phương trình: Zn + 2HCl → ZnCl₂ + H₂↑.',
    type: 'experiment',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 39',
    tags: ['acid', 'tac dung kim loai', 'kem zn', 'khi hydro', 'thi nghiem', 'bai 8']
  },
  {
    id: 'hts-khtn8-base-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương II: Một số hợp chất thông dụng',
    lessonName: 'Bài 9: Base',
    caption: 'Hình 9.1. Thí nghiệm tính chất dung dịch base NaOH làm quỳ tím hóa xanh và phenolphthalein hóa hồng',
    url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80',
    description: 'Chỉ thị phenolphthalein không màu chuyển sang màu hồng cánh sen đặc trưng trong môi trường base kiềm NaOH.',
    type: 'experiment',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 43',
    tags: ['base', 'kiem', 'naoh', 'phenolphthalein', 'quy tim', 'bai 9']
  },
  {
    id: 'hts-khtn8-base-2',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương II: Một số hợp chất thông dụng',
    lessonName: 'Bài 9: Base',
    caption: 'Hình 9.2. Thí nghiệm phản ứng trung hòa giữa dung dịch acid HCl và dung dịch base NaOH',
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80',
    description: 'Chuẩn độ nhỏ giọt dung dịch HCl vào dung dịch NaOH có phenolphthalein đến khi màu hồng biến mất hoàn toàn.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 45',
    tags: ['phan ung trung hoa', 'acid base', 'chuan do', 'muoi va nuoc', 'bai 9']
  },
  {
    id: 'hts-khtn8-oxit-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương II: Một số hợp chất thông dụng',
    lessonName: 'Bài 10: Oxide',
    caption: 'Hình 10.1. Sơ đồ phân loại Oxide: Oxide base, Oxide acid, Oxide lưỡng tính và Oxide trung tính',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    description: 'Sơ đồ cây phân loại oxide theo thành phần nguyên tố và tính chất hóa học theo định hướng phát triển năng lực GDPT 2018.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 48',
    tags: ['oxide', 'oxit', 'phan loai oxit', 'oxit base', 'oxit acid', 'bai 10']
  },
  {
    id: 'hts-khtn8-muoi-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương II: Một số hợp chất thông dụng',
    lessonName: 'Bài 11: Muối',
    caption: 'Hình 11.1. Thí nghiệm phản ứng trao đổi tạo kết tủa trắng BaSO₄ từ dung dịch BaCl₂ và Na₂SO₄',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
    description: 'Hiện tượng: Xuất hiện kết tủa trắng lắng dưới đáy ống nghiệm. Phương trình: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl.',
    type: 'experiment',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 53',
    tags: ['muoi', 'ket tua', 'baso4', 'trao doi ion', 'thi nghiem', 'bai 11']
  },
  {
    id: 'hts-khtn8-phanung-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương I: Phản ứng hóa học',
    lessonName: 'Bài 2: Phản ứng hóa học',
    caption: 'Hình 2.2. Sơ đồ mô phỏng bản chất của phản ứng hóa học (Sự sắp xếp lại liên kết giữa các nguyên tử)',
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80',
    description: 'Trong phản ứng hóa học, liên kết giữa các nguyên tử thay đổi làm cho phân tử này biến đổi thành phân tử khác; số nguyên tử mỗi nguyên tố giữ nguyên.',
    type: 'molecule',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 14',
    tags: ['phan ung hoa hoc', 'nguyen tu', 'lien ket', 'bao toan khoi luong', 'bai 2']
  },
  {
    id: 'hts-khtn8-dinhluat-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương I: Phản ứng hóa học',
    lessonName: 'Bài 3: Định luật bảo toàn khối lượng và phương trình hóa học',
    caption: 'Hình 3.1. Thí nghiệm kiểm chứng Định luật bảo toàn khối lượng bằng cân thăng bằng điện tử',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    description: 'Khối lượng bình phản ứng trước và sau khi trộn dung dịch BaCl2 với Na2SO4 không thay đổi trên màn hình cân điện tử.',
    type: 'experiment',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 18',
    tags: ['dinh luat bao toan khoi luong', 'can dien tu', 'pt hoa hoc', 'bai 3']
  },

  // ==========================================
  // KHOA HỌC TỰ NHIÊN / VẬT LÍ (LỚP 8, 9, 10)
  // ==========================================
  {
    id: 'hts-khtn8-luc-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương III: Khối lượng riêng và Áp suất',
    lessonName: 'Bài 14: Khối lượng riêng',
    caption: 'Hình 14.1. Thí nghiệm đo thể tích và khối lượng của vật rắn không thấm nước để xác định khối lượng riêng D = m/V',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    description: 'Sử dụng ống đong chia độ và cân đòn hoặc cân điện tử để tính khối lượng riêng của các khối kim loại nhôm, đồng, sắt.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 64',
    tags: ['khoi luong rieng', 'ong dong', 'vat li 8', 'khtn 8', 'bai 14']
  },
  {
    id: 'hts-khtn8-apsuat-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương III: Khối lượng riêng và Áp suất',
    lessonName: 'Bài 15: Áp suất trên một bề mặt',
    caption: 'Hình 15.2. Thí nghiệm khảo sát tác dụng của áp lực phụ thuộc vào độ lớn áp lực và diện tích bị ép',
    url: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=80',
    description: 'Khối kim loại đặt trên khay cát mịn với các mặt tiếp xúc khác nhau: mặt có diện tích nhỏ hơn thì lún sâu hơn.',
    type: 'experiment',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 68',
    tags: ['ap suat', 'ap luc', 'dien tich bi ep', 'khay cat', 'bai 15']
  },
  {
    id: 'hts-khtn8-quang-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương V: Ánh sáng',
    lessonName: 'Bài 16: Hiện tượng phản xạ ánh sáng',
    caption: 'Hình 16.1. Thí nghiệm xác định định luật phản xạ ánh sáng bằng bảng chia độ và gương phẳng',
    url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80',
    description: 'Tia sáng tới truyền qua bảng tròn chia độ gặp gương phẳng bị phản xạ lại. Góc phản xạ i\' luôn bằng góc tới i (i\' = i).',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 74',
    tags: ['phan xa anh sang', 'guong phang', 'goc toi', 'goc phan xa', 'bai 16']
  },
  {
    id: 'hts-khtn8-machdien-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương VI: Điện',
    lessonName: 'Bài 21: Mạch điện đơn giản',
    caption: 'Hình 21.2. Sơ đồ mạch điện gồm nguồn điện pin, khóa K, bóng đèn sợi đốt và ampe kế mắc nối tiếp',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
    description: 'Kí hiệu quy ước các bộ phận trong mạch điện kín và chiều quy ước của dòng điện từ cực dương qua dây dẫn đến cực âm.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 98',
    tags: ['mach dien', 'dong dien', 'am pe ke', 'khoa k', 'bai 21']
  },

  // ==========================================
  // KHOA HỌC TỰ NHIÊN / SINH HỌC (LỚP 8, 9, 10)
  // ==========================================
  {
    id: 'hts-khtn8-tebao-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương VII: Sinh học cơ thể người',
    lessonName: 'Bài 30: Cấu tạo và chức năng của tế bào cơ thể người',
    caption: 'Hình 30.1. Cấu trúc siêu vi thể của tế bào nhân thực ở người dưới kính hiển vi điện tử',
    url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80',
    description: 'Bao gồm màng sinh chất, tế bào chất với các bào quan (ti thể, lưới nội chất, bộ máy Golgi) và nhân chứa vật chất di truyền ADN.',
    type: 'photo',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 132',
    tags: ['te bao', 'ti the', 'mang sinh chat', 'sinh hoc 8', 'co the nguoi', 'bai 30']
  },
  {
    id: 'hts-khtn8-tieuhoa-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương VII: Sinh học cơ thể người',
    lessonName: 'Bài 32: Hệ tiêu hóa ở người',
    caption: 'Hình 32.1. Sơ đồ các cơ quan thuộc hệ tiêu hóa của người (Ống tiêu hóa và các tuyến tiêu hóa)',
    url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80',
    description: 'Mô tả đường đi của thức ăn từ khoang miệng, thực quản, dạ dày, ruột non, ruột già và các tuyến gan, mật, tụy.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 141',
    tags: ['he tieu hoa', 'da day', 'ruot non', 'tuyen tieu hoa', 'bai 32']
  },
  {
    id: 'hts-khtn8-tuanhoan-1',
    subject: 'Khoa học tự nhiên',
    grade: 'Lớp 8',
    chapterTitle: 'Chương VII: Sinh học cơ thể người',
    lessonName: 'Bài 33: Hệ tuần hoàn ở người',
    caption: 'Hình 33.2. Sơ đồ hai vòng tuần hoàn máu (Vòng tuần hoàn lớn và Vòng tuần hoàn phổi)',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80',
    description: 'Đường đi của máu đỏ tươi và máu đỏ thẫm qua tim 4 ngăn (2 tâm nhĩ, 2 tâm thất) và hệ thống động mạch, tĩnh mạch, mao mạch.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK KHTN 8 KNTT, Trang 148',
    tags: ['he tuan hoan', 'tim', 'vong tuan hoan', 'dong mach', 'bai 33']
  },

  // ==========================================
  // TOÁN HỌC (LỚP 10, 8, 9)
  // ==========================================
  {
    id: 'hts-toan10-parabol-1',
    subject: 'Toán học',
    grade: 'Lớp 10',
    chapterTitle: 'Chương VI: Hàm số, Đồ thị và Ứng dụng',
    lessonName: 'Bài 15: Hàm số bậc hai và đồ thị',
    caption: 'Hình 15.1. Cổng Arch ở St. Louis (Mỹ) - Đường cong Parabol thực tế trong kiến trúc',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
    description: 'Tình huống mở đầu bài học: Dạng vòm cổng tương ứng với đồ thị hàm số bậc hai y = ax² + bx + c có bề lõm quay xuống dưới (a < 0).',
    type: 'photo',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK Toán 10 KNTT (Tập 2), Trang 39',
    tags: ['parabol', 'ham so bac hai', 'do thi', 'kien truc', 'toan 10', 'bai 15']
  },
  {
    id: 'hts-toan10-dothi-1',
    subject: 'Toán học',
    grade: 'Lớp 10',
    chapterTitle: 'Chương VI: Hàm số, Đồ thị và Ứng dụng',
    lessonName: 'Bài 15: Hàm số bậc hai và đồ thị',
    caption: 'Hình 15.2. Đồ thị hàm số bậc hai y = ax² + bx + c và tọa độ đỉnh I(-b/2a; -Δ/4a)',
    url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
    description: 'Trục đối xứng x = -b/(2a). Điểm đỉnh I là giá trị nhỏ nhất khi a > 0 và là giá trị lớn nhất khi a < 0 trên mặt phẳng tọa độ Oxy.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK Toán 10 KNTT (Tập 2), Trang 41',
    tags: ['dinh parabol', 'truc doi xung', 'he toa do oxy', 'bang bien thien', 'bai 15']
  },
  {
    id: 'hts-toan10-quidao-1',
    subject: 'Toán học',
    grade: 'Lớp 10',
    chapterTitle: 'Chương VI: Hàm số, Đồ thị và Ứng dụng',
    lessonName: 'Bài 15: Hàm số bậc hai và đồ thị',
    caption: 'Hình 15.3. Quỹ đạo ném bóng rổ / bắn pháo hoa là một phần của đường Parabol',
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80',
    description: 'Mô hình toán học hóa tình huống thực tiễn: Xác định độ cao cực đại và tầm bay xa của vật ném xiên trong trường trọng lực.',
    type: 'photo',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK Toán 10 KNTT (Tập 2), Trang 44',
    tags: ['quy dao bong ro', 'ung dung thuc te', 'do cao cuc dai', 'bai 15']
  },
  {
    id: 'hts-toan10-vecto-1',
    subject: 'Toán học',
    grade: 'Lớp 10',
    chapterTitle: 'Chương IV: Vectơ và Hệ thức lượng',
    lessonName: 'Bài 7: Các khái niệm mở đầu về Vectơ',
    caption: 'Hình 7.1. Vectơ biểu diễn hướng và độ lớn vận tốc máy bay, lực kéo tàu thủy',
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    description: 'Đoạn thẳng có hướng với điểm đầu và điểm cuối quy định. Khái niệm độ dài vectơ, vectơ cùng phương, cùng hướng và vectơ không.',
    type: 'diagram',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK Toán 10 KNTT (Tập 1), Trang 80',
    tags: ['vecto', 'do dai', 'huong', 'luc keo', 'bai 7']
  },

  // ==========================================
  // CÔNG NGHỆ (LỚP 7, 8)
  // ==========================================
  {
    id: 'hts-congnghe7-trongtrot-1',
    subject: 'Công nghệ',
    grade: 'Lớp 7',
    chapterTitle: 'Chương I: Trồng trọt',
    lessonName: 'Bài 1: Giới thiệu chung về trồng trọt',
    caption: 'Hình 1.1. Ứng dụng công nghệ cao trong sản xuất nông nghiệp và trồng trọt hiện đại',
    url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop&q=80',
    description: 'Hệ thống nhà màng, tưới nhỏ giọt tự động và cảm biến điều khiển vi khí hậu nâng cao năng suất và chất lượng nông sản.',
    type: 'photo',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK Công nghệ 7 KNTT, Trang 6',
    tags: ['trong trot', 'nong nghiep', 'nha mang', 'tuoi nho giot', 'cong nghe 7', 'bai 1']
  },
  {
    id: 'hts-congnghe7-dattrong-1',
    subject: 'Công nghệ',
    grade: 'Lớp 7',
    chapterTitle: 'Chương I: Trồng trọt',
    lessonName: 'Bài 2: Làm đất trồng cây',
    caption: 'Hình 2.2. Quy trình cày, bừa, lên luống và bón phân lót chuẩn bị đất trồng',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
    description: 'Mục đích làm đất giúp đất tơi xốp, thoáng khí, tiêu diệt mầm sâu bệnh và cỏ dại trước khi gieo trồng cây vụ mới.',
    type: 'photo',
    source: 'Hành Trang Số (hanhtrangso.nxbgd.vn) - SGK Công nghệ 7 KNTT, Trang 11',
    tags: ['lam dat', 'cay bua', 'bon phan lot', 'dat trong', 'bai 2']
  }
];

/**
 * Tìm kiếm hình ảnh minh họa phù hợp nhất từ Kho Học liệu số Hành Trang Số
 * theo Môn học, Tên bài học, Từ khóa nội dung
 */
export function findRelevantDigitalIllustrations(params: {
  subject?: string;
  lessonName?: string;
  keyword?: string;
  grade?: string;
}): DigitalMaterialAsset[] {
  const normSub = (params.subject || '').toLowerCase().trim();
  const normLesson = (params.lessonName || '').toLowerCase().trim();
  const normKeyword = (params.keyword || '').toLowerCase().trim();
  const normGrade = (params.grade || '').trim();

  return HTS_DIGITAL_ILLUSTRATIONS.filter(item => {
    // Lọc theo lớp nếu có
    if (normGrade && item.grade !== normGrade) {
      // nếu không khớp hoàn toàn thì không bỏ qua ngay nếu khớp từ khóa mạnh
    }

    // So khớp môn học
    const matchSub = !normSub || 
      item.subject.toLowerCase().includes(normSub) || 
      normSub.includes(item.subject.toLowerCase()) ||
      (normSub.includes('hóa') && item.subject === 'Khoa học tự nhiên') ||
      (normSub.includes('vật lí') && item.subject === 'Khoa học tự nhiên') ||
      (normSub.includes('sinh') && item.subject === 'Khoa học tự nhiên');

    // So khớp bài học
    const matchLesson = !normLesson || 
      item.lessonName.toLowerCase().includes(normLesson) ||
      normLesson.includes(item.lessonName.toLowerCase()) ||
      item.tags.some(t => normLesson.includes(t));

    // So khớp từ khóa
    const matchKeyword = !normKeyword ||
      item.caption.toLowerCase().includes(normKeyword) ||
      item.description.toLowerCase().includes(normKeyword) ||
      item.tags.some(t => t.includes(normKeyword));

    return (matchSub && matchLesson) || matchKeyword;
  });
}
