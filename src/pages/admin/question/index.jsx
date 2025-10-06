import Space from "@/components/layout/space/index.jsx";
import QuestionForm from "@/containers/admin/form/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";
import {useLocation} from "react-router-dom";
import {addQuestion, updateQuestion} from "@/api/admin.js";


export default function AdminQuestion(){
  const {handleNavigate} = useNavigationWithTransition()
  const onCancel = () =>{
    handleNavigate("/admin")
  }
  const location = useLocation()
  const onSubmit = async (data) =>{
    if(location.pathname === "/admin/question/update"){
      await updateQuestion(data)
    }
    else{
      await addQuestion(data)
    }
  }
  return(
    <Space>
      <QuestionForm onCancel={onCancel} onSubmit={onSubmit}/>
    </Space>
  )
}