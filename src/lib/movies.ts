import { Movie } from '@/types';

export const [featuredMovie, ...allMovies]: Movie[] = [
  // Featured
  {
    id: '1',
    title: 'Bà Bầu Chạy Trốn',
    titleEn: 'Pregnant and Run',
    genre: ['Short Drama', 'Tình Cảm'],
    year: 2025,
    rating: 8.2,
    description:
      'Trong buổi tiệc của công ty, Lâm Ngữ Mặc say rượu và vô tình qua đêm với tổng giám đốc Tần Mục Xuyên. Khi phát hiện mình mang thai, cô chỉ có một lựa chọn là chạy trốn.',
    image: 'https://img.ophim.live/uploads/movies/ba-bau-chay-tron-short-drama-poster.jpg',
    episode: 'Phần 1 | Full',
    country: 'Trung Quốc',
  },

  // Action Movies
  {
    id: '2',
    title: 'Phi Hổ (Phần 2)',
    titleEn: 'Tiger Cubs (Season 2)',
    genre: ['Hành Động', 'Hình Sự'],
    year: 2025,
    description: 'Đội hình sự tiếp tục hành trình bắt bóng tội phạm nguy hiểm.',
    image: 'https://img.ophim.live/uploads/movies/phi-ho-poster.jpg',
    episode: 'Phần 2 | Trailer',
    country: 'Hồng Kông',
  },

  {
    id: '3',
    title: 'Godzilla: Final Wars',
    titleEn: 'Godzilla: Final Wars',
    genre: ['Hành Động', 'Viễn Tưởng'],
    year: 2004,
    rating: 6.5,
    description:
      'Quái vật Godzilla trở lại trong trận chiến cuối cùng chống lại các sinh vật ngoài không gian.',
    image: 'https://img.ophim.live/uploads/movies/godzilla-final-wars-poster.jpg',
    episode: 'Full',
    country: 'Nhật Bản',
  },

  {
    id: '4',
    title: 'MF GHOST (Phần 2)',
    titleEn: 'MF Ghost (Season 2)',
    genre: ['Hành Động', 'Anime'],
    year: 2023,
    description: 'Cuộc đua siêu xe đầy kịch tính và bí ẩn trên những con đường đêm của Nhật Bản.',
    image: 'https://img.ophim.live/uploads/movies/mf-ghost-poster.jpg',
    episode: 'Phần 2 | Trailer',
    country: 'Nhật Bản',
  },

  // Drama Movies
  {
    id: '5',
    title: 'Giáo Sư Gabriel',
    titleEn: "Gabriel's Inferno",
    genre: ['Chính kịch', 'Tình Cảm'],
    year: 2020,
    rating: 8.0,
    description:
      'Một câu chuyện về tình yêu cấm đoán, sự chuộc tội và hành trình thoát khỏi địa ngục cá nhân.',
    image: 'https://img.ophim.live/uploads/movies/giao-su-gabriel-poster.jpg',
    episode: 'Full',
    country: 'Canada',
  },

  {
    id: '6',
    title: 'Một Thời Ta Đã Yêu',
    titleEn: 'One Time We Loved',
    genre: ['Chính kịch', 'Tình Cảm'],
    year: 2026,
    rating: 8.5,
    description:
      'Bộ phim sâu sắc về mọi hình thái của tình yêu: tình yêu đôi lứa, tình thân gia đình và sự gắn kết bạn bè.',
    image: 'https://img.ophim.live/uploads/movies/mot-thoi-ta-da-yeu-poster.jpg',
    episode: 'Phần 1 | Trailer',
    country: 'Việt Nam',
  },

  {
    id: '7',
    title: 'Lời Tố Cáo Ngờ Vực',
    titleEn: 'An Old Lady',
    genre: ['Chính kịch', 'Tâm Lý'],
    year: 2020,
    rating: 7.8,
    description:
      'Câu chuyện của một phụ nữ lớn tuổi đối mặt với những mâu thuẫn, không ai tin lời kể của bà.',
    image: 'https://img.ophim.live/uploads/movies/loi-to-cao-ngo-vuc-poster.jpg',
    episode: 'Full',
    country: 'Hàn Quốc',
  },

  // Comedy Movies
  {
    id: '8',
    title: 'Đội Thám Tử Cừu: Án Mạng Lúc Nửa Đêm',
    titleEn: 'The Sheep Detectives',
    genre: ['Hài Hước', 'Bí Ẩn'],
    year: 2026,
    rating: 7.9,
    description:
      'George, một người chăn cừu, dạy đàn cừu của mình trở thành thám tử để giải những vụ án bí ẩn trên trang trại.',
    image: 'https://img.ophim.live/uploads/movies/doi-tham-tu-cuu-poster.jpg',
    episode: 'Full',
    country: 'Âu Mỹ',
  },

  {
    id: '9',
    title: 'Funny AF with Kevin Hart',
    titleEn: 'Funny AF with Kevin Hart',
    genre: ['Hài Hước', 'Stand-up'],
    year: 2025,
    rating: 7.5,
    description:
      'Kevin Hart trở lại với những màn hài hước tươi cười và những khoảnh khắc vô tùy trong show stand-up mới.',
    image: 'https://img.ophim.live/uploads/movies/funny-af-kevin-hart-poster.jpg',
    episode: 'Full',
    country: 'Âu Mỹ',
  },

  {
    id: '10',
    title: 'Yêu Nữ Thích Hàng Hiệu 2',
    titleEn: 'The Devil Wears Prada 2',
    genre: ['Hài Hước', 'Chính kịch'],
    year: 2024,
    rating: 7.6,
    description:
      'Tiếp tục những cuộc phiêu lưu thời trang được dự đoán của Andy Sachs trong thế giới ngành hàng hiệu.',
    image: 'https://img.ophim.live/uploads/movies/yeu-nu-thich-hang-hieu-2-poster.jpg',
    episode: 'Full',
    country: 'Âu Mỹ',
  },

  // Indie/Art Films
  {
    id: '11',
    title: 'Lucy Shimmers và Hoàng tử Hòa bình',
    titleEn: 'Lucy Shimmers and the Prince of Peace',
    genre: ['Chính kịch', 'Gia Đình'],
    year: 2020,
    rating: 6.8,
    description:
      'Những cơ hội thứ hai bắt đầu khi một tên tội phạm tình cờ gặp một cô bé thông minh và được thiên thần giúp đỡ.',
    image: 'https://img.ophim.live/uploads/movies/lucy-shimmers-poster.jpg',
    episode: 'Full',
    country: 'Âu Mỹ',
  },

  {
    id: '12',
    title: 'Giới hạn dọc',
    titleEn: 'Vertical Limit',
    genre: ['Phiêu Lưu', 'Hành Động'],
    year: 2000,
    rating: 6.3,
    description:
      'Bị mắc kẹt gần đỉnh K2, Annie Garrett cẩn cầu cứu và em trai Peter tập hợp một đội để giải cứu trước khi quá muộn.',
    image: 'https://img.ophim.live/uploads/movies/gioi-han-doc-poster.jpg',
    episode: 'Full',
    country: 'Âu Mỹ',
  },

  // Vietnamese Films
  {
    id: '13',
    title: 'Thẩm Mỹ Viện Âm Phủ',
    titleEn: 'Beauty Salon of the Underworld',
    genre: ['Hài Hước', 'Kinh Dị'],
    year: 2024,
    rating: 7.4,
    description:
      'Một phim Việt khôi hài về một tiệm thẩm mỹ được điều hành bởi những linh hồn kỳ dị.',
    image: 'https://img.ophim.live/uploads/movies/tham-my-vien-am-phu-poster.jpg',
    episode: 'Full',
    country: 'Việt Nam',
  },

  {
    id: '14',
    title: 'Bus: Chuyến Xe Một Chiều',
    titleEn: 'Bus: The Last Drive',
    genre: ['Hài Hước', 'Phiêu Lưu'],
    year: 2024,
    rating: 7.2,
    description:
      'Một chuyến xe buýt du lịch trở thành cuộc phiêu lưu bất ngờ đầy những bất ngờ hài hước.',
    image: 'https://img.ophim.live/uploads/movies/bus-chuyen-xe-poster.jpg',
    episode: 'Full',
    country: 'Việt Nam',
  },

  // K-dramas
  {
    id: '15',
    title: 'Mang Tâm Hồn: Bộ Phim',
    titleEn: 'Bring the Soul: The Movie',
    genre: ['Tài Liệu', 'Âm Nhạc'],
    year: 2019,
    rating: 7.7,
    description:
      'Cùng khám phá thế giới riêng của nhóm nhạc K-pop BTS ngoài sân khấu với những cuộc trò chuyện thân mật.',
    image: 'https://img.ophim.live/uploads/movies/mang-tam-hon-poster.jpg',
    episode: 'Full',
    country: 'Hàn Quốc',
  },

  {
    id: '16',
    title: 'Không Bông Tuyết Nào Trong Sạch',
    titleEn: 'The Woman in the White Car',
    genre: ['Bí Ẩn', 'Hình Sự'],
    year: 2025,
    rating: 8.3,
    description:
      'Một rạng sáng sau đêm bão tuyết, Do Kyung hốt hoảng lái xe đưa chị gái mình đến bệnh viện. Nhưng ranh giới giữa sự thật và dối trá dần tan biến.',
    image: 'https://img.ophim.live/uploads/movies/khong-bong-tuyet-poster.jpg',
    episode: 'Full',
    country: 'Hàn Quốc',
  },

  {
    id: '17',
    title: 'Magic Move: Tiên Tri Tình Yêu',
    titleEn: 'Magic Move',
    genre: ['Hài Hước', 'Tình Cảm'],
    year: 2024,
    rating: 7.0,
    description: 'Một phim Thái về những phép thuật lạ kỳ và những bất ngờ trong tình yêu.',
    image: 'https://img.ophim.live/uploads/movies/magic-move-poster.jpg',
    episode: 'Full',
    country: 'Thái Lan',
  },

  {
    id: '18',
    title: 'Quỷ Dữ Từ Luyện Ngục',
    titleEn: 'King Keaw',
    genre: ['Kinh Dị', 'Thần Thoại'],
    year: 2024,
    rating: 7.1,
    description:
      'Một bộ phim Thái khai thác những bí ẩn từ thế giới tâm linh và các lực lượng thần bí.',
    image: 'https://img.ophim.live/uploads/movies/quy-du-poster.jpg',
    episode: 'Full',
    country: 'Thái Lan',
  },

  {
    id: '19',
    title: 'Giáo Sư Gabriel: Phần 3',
    titleEn: "Gabriel's Inferno: Part III",
    genre: ['Chính kịch', 'Tình Cảm'],
    year: 2020,
    rating: 7.9,
    description: 'Phần cuối cùng của bộ phim chuyển thể từ tiểu thuyết lãng mạn Gabriel Inferno.',
    image: 'https://img.ophim.live/uploads/movies/giao-su-gabriel-3-poster.jpg',
    episode: 'Full',
    country: 'Canada',
  },

  {
    id: '20',
    title: 'Giáo Sư Gabriel: Phần 2',
    titleEn: "Gabriel's Inferno: Part II",
    genre: ['Chính kịch', 'Tình Cảm'],
    year: 2020,
    rating: 7.8,
    description:
      'Gabriel cuối cùng biết sự thật về thân phận của Julia Mitchell, nhưng liệu có quá muộn?',
    image: 'https://img.ophim.live/uploads/movies/giao-su-gabriel-2-poster.jpg',
    episode: 'Full',
    country: 'Canada',
  },
];

export const topMovies = allMovies.slice(0, 10);
export const actionMovies = allMovies.filter((m) =>
  m.genre.some((g) => ['Hành Động', 'Phiêu Lưu'].includes(g))
);
export const dramMovies = allMovies.filter((m) =>
  m.genre.some((g) => ['Chính kịch', 'Tình Cảm'].includes(g))
);
export const comedyMovies = allMovies.filter((m) => m.genre.some((g) => g === 'Hài Hước'));
export const vietnameseMovies = allMovies.filter((m) => m.country === 'Việt Nam');
