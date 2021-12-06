module.exports = {
  title: `J-Felog`,
  description: `Jfe Blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jfelog.netlify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `Go-Jaecheol/Jfe_Blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Go Jaecheol`,
    bio: {
      role: `개발자`,
      description: ['@j4e_fe'],
      thumbnail: 'profile.jpg', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/Go-Jaecheol`, 
      instagram: `https://www.instagram.com/j4e_fe`, 
      email: ``,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.12 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '등산 소셜게더링 서비스 SANTA 개발',
        description:
          '2021년도 고급웹프로그래밍 & 산림 공공 빅데이터 활용 창업경진대회 프로젝트',
        techStack: ['React', 'Node.js', 'MongoDB'],
        thumbnailUrl: 'santa.png',
        links: {
          post: '',
          github: 'https://github.com/woong-jae/SANTA',
          demo: '',
        },
      },
    ],
  },
};
