import { react, useState } from 'react'
import './Home.css'
import gif1 from '../gif/tonton.gif'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [text, setText] = useState('No')
    const [gif, setGif] = useState('tonton.gif')
    const [padding, setPadding] = useState(1)
    const navigate = useNavigate();
    const [font, setfont] = useState(14)
    const handleNoButton = () => {
        switch (text) {
            case 'No': setText('Are you sure?')
                setGif('tonton3.gif')
                break;
            case 'Are you sure?': setText('Really Sure?')
                setGif('tonton4.gif')
                break
            case 'Really Sure?': setText('Think again')
                setGif('tonton5.gif')
                break
            case 'Think again': setText("You'll break my heart")
                setGif('tonton6.gif')
                break
            case "You'll break my heart": setText('Last Change')
                setGif('tonton7.gif')
                break
            case 'Last Change': setText('Change of heart')
                setGif('tonton8.gif')
                break
            case 'Change of heart': setText('Need another thought')
                setGif('tonton5.gif')
                break
            case 'Need another thought': setText('You maybe a mistake')
                setGif('tonton7.gif')
                break
            case 'You maybe a mistake': setText('Dont be so  cold')
                setGif('tonton3.gif')
                break
            case 'Dont be so  cold': setText('Is that your final answer')
                setGif('tonton6.gif')
                break
            case 'Is that your final answer': setText('Change of heart')
                setGif('tonton4.gif')
                break
        }

        setPadding(padding + 1)
        setfont(font + 10)
    }
    const handleYesbutton = () => {
        navigate('/<3')
    }
    return (
        <>
            <img src={require(`../gif/${gif}`)} />
            <h1>Do you wanna hangout with me this Valentine❤️❤️❤️ ??</h1>
            <div>
                <button onClick={handleYesbutton} className='save' style={{ padding: `${padding}rem`, fontSize: `${font}px` }}>Yes</button>
                <button className='alert' onClick={handleNoButton}>{text}</button>
            </div >
        </>
    )
}
export default Home