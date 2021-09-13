export function getSurveysList(state) {
  return (idStudy) => {
    if(state.surveysList[idStudy]){
      return JSON.parse(JSON.stringify(state.surveysList[idStudy]));
    }
    else{
      return [];
    }
    
  };
}

export function getSurveysListData(state) {
  return (idStudy) => {
    if (state.surveysListData[idStudy]){
      return JSON.parse(JSON.stringify(state.surveysListData[idStudy]));
    }
    else{
      return {}
    }
  };
}

export function getSurveyDetail(state){
  return (studyId)=>{
    return  state.surveyDetail[studyId];
  }
}

export function getUserSurveys(state){
  return state.userSurveys;
}

export function getUserSurveysBuilder(state){
  return state.SurveyBuilderUser;
}

export function getUserSurveyQuestion(state){
  return state.SurveyUserQuestions
}

export function getAllQuestion(state){
  return state.allQuestions
}