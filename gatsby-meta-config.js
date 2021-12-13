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
  ga: 'G-K2809FDDXD', // Google Analytics Tracking ID
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
        date: '2017.03 ~',
        activity: '경북대학교 컴퓨터학부 재학',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2018.08 ~ 2020.03',
        activity: '육군 병장 만기 전역',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.05 ~ 2021.09',
        activity: '2021년 산림공공빅데이터 활용 창업경진대회 장려 수상',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.07 ~ 2021.08',
        activity: '2021 LG webOS Hackathon Silver Prize 수상',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.09 ~ 2021.11',
        activity: '2021년 한국정보기술학회 추계 대학생 논문경진대회 동상 수상',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.12',
        activity: '2021 대학생 AI 프로그래밍 경진대회(대경권) 우수상 수상',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
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
        title: 'STT 서비스간 성능 비교 웹서비스 개발',
        description:
          'STT API들의 인식률과 인식 시간에 대한 성능을 비교해서 제공해줍니다. 사용자가 원하는 STT API들을 선택하고 음성 파일과 해당 파일의 원본 텍스트를 입력하면 해당 API들의 인식 결과를 확인할 수 있습니다. 프론트엔드는 React를, 백엔드로는 Node.js를 사용해 개발하였습니다. 기업 연계로 진행된 산학협력 Capstone Design 프로젝트로, 2021년 한국정보기술학회 추계 대학생 논문경진대회에도 관련 논문으로 참가하였습니다.',
        techStack: ['React', 'Node.js', 'Docker'],
        thumbnailUrl: 'beanz.png',
        links: {
          post: '',
          github: 'https://github.com/woong-jae/STT-Evaluation',
          demo: '',
        },
      },
      {
        title: 'Smart Fire Detection System 개발',
        description:
          'Gas sensor와 Flame sensor로 화재를 감지하고 CCTV로 현재 위치에 있는 사람 수를 체크해서 근처 소방서에 알려주는 LG webOS 기반 어플리케이션입니다. 또한, 위험도와 화재 장소까지의 최단거리도 확인할 수 있습니다. 화재 감지와 전달에는 아두이노와 라즈베리파이가 사용되었고, 사람 감지에는 YOLOv4 기술이 사용되었습니다. 프론트엔드는 React 기반 프레임워크인 Enact를, 백엔드로는 Spring을 사용하여 개발하였습니다. LG Soft India에서 주최한 2021 LG webOS Hackathon 출품작이며, 해당 해커톤에서 은상을 수상했습니다.',
        techStack: ['Enact', 'Spring', 'YOLOv4'],
        thumbnailUrl: 'sfds.png',
        links: {
          post: '',
          github: 'https://github.com/KNU-indiGo/Client',
          demo: '',
        },
      },
      {
        title: '등산 소셜게더링 서비스 SANTA 개발',
        description:
          '자신이 원하는 등산 모임을 만들거나 참여할 수 있는 등산 소셜게더링 서비스입니다. 산림 공공데이터를 활용해 대한민국 100대 명산에 해당하는 산들의 정보를 제공하며, 해당 산으로의 등산 모임을 만들 수 있습니다. 프론트엔드는 React를, 백엔드로는 Node.js, 그리고 MongoDB를 사용해 개발하였습니다. 산림청에서 주최한 2021년 산림공공빅데이터 활용 창업경진대회 출품작이며, 해당 대회에서 장려상을 수상했습니다.',
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
