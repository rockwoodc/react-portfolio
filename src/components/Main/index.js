import About from "../../pages/About"
import ContactForm from "../../pages/Contact"
import Projects from "../../pages/Projects"

export default function Main({page}){
    function renderPage(){
        if(page === 'projects'){
            return(<Projects/>)
        }else if(page ==='contact'){
            return (<ContactForm/>)
        }else{
            return (<About/>)
        }
    }
    return(
        <>
        {renderPage()}
        </>
    )
}