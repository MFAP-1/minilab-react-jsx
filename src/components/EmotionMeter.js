import '../assets/styles/styles.css';

const emotion = 'SAD';

function EmotionMeter() {
    function checkEmotion() {
        if (emotion === 'HAPPY') {
            return <i className="fas fa-laugh-squint fa-7x"></i>;
        } else if (emotion === 'SAD'){
            return <i className="fas fa-sad-cry fa-7x"></i>;
        }
    }
    return checkEmotion();
}

export default EmotionMeter;