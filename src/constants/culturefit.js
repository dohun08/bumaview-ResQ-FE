export const 더스팟 = {
  culture_type: "가치 중심",
  core_values: ["핵심가치", "목적의식", "팀경험"],
  evaluation_criteria: {
    가치관: {
      weight: 60,
      keywords: ["핵심 가치", "가치관 형성 계기", "일의 의미"]
    },
    팀경험: {
      weight: 40,
      keywords: ["팀 개발 경험", "협업 프로젝트"]
    }
  },
  ideal_candidate: "명확한 가치관을 가지고 목적 지향적으로 일하는 인재",
  question_themes: ["핵심 가치관", "가치관 형성 계기", "팀 프로젝트 경험"]
};

export const 핀다 = {
  culture_type: "리더십 & 갈등해결",
  core_values: ["주도성", "문제해결", "갈등관리", "리더십"],
  evaluation_criteria: {
    갈등해결: {
      weight: 35,
      keywords: ["회의 중 갈등", "갈등 해결 방법", "팀장과의 불화"]
    },
    리더십: {
      weight: 35,
      keywords: ["팀 이끄는 방식", "리더 경험", "팀원 관리"]
    },
    협업선호: {
      weight: 30,
      keywords: ["선호하는 동료", "협업 스타일", "팀워크"]
    }
  },
  ideal_candidate: "갈등 상황을 주도적으로 해결하고, 팀을 이끄는 리더십을 발휘할 수 있는 인재",
  question_themes: ["회의 갈등 경험", "리더로서의 팀 운영", "팀장과의 갈등 대처", "이상적인 동료상"]
};


export const 달파 = {
  culture_type: "협업 프로세스 & 리더십",
  core_values: ["협업방식", "리더십", "실무중심"],
  evaluation_criteria: {
    협업프로세스: {
      weight: 60,
      keywords: ["협업 방식", "프로세스", "워크플로우"]
    },
    리더십경험: {
      weight: 40,
      keywords: ["팀장 경험", "어려움", "리더십"]
    }
  },
  ideal_candidate: "명확한 협업 프로세스를 가지고 팀을 이끈 경험이 있는 인재",
  question_themes: ["협업 방식", "팀장으로서의 어려움"]
};
