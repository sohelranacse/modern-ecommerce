import React,{useState} from 'react'
import './ScrollTop.scss'
import { UilArrowUp } from '@iconscout/react-unicons'

const ScrollTop = () => {
    const [top, setTop] = useState(false)

    window.addEventListener('scroll', () => {
        window.scrollY > 500 ? setTop(true) : setTop(false)
    })

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div onClick={goToTop} className={top?"scroll_top_button active":"scroll_top_button"}>
            <UilArrowUp/>
        </div>
    )
}

export default ScrollTop
