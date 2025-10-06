import Space from "@/components/layout/space/index.jsx";
import QuestionForm from "@/containers/admin/form/index.jsx";
import useNavigationWithTransition from "@/hooks/useNavigationWithTransition.js";


export default function AdminQuestion(){
  const {handleNavigate} = useNavigationWithTransition()
  const onCancel = () =>{
    handleNavigate("/admin")
  }
  const onSubmit = () =>{

  }
  return(
    <Space>
      <QuestionForm onCancel={onCancel} onSubmit={onSubmit}/>
    </Space>
  )
}