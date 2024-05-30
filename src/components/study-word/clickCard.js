import '../../css/style.css';
import '../../css/clickCard.css';
import { GoX } from "react-icons/go";

function ClickCard(props) {
    return (
        <section id="clickCard" className='clickCard'>
            <div className='clickCard__inner'>
                <div className='x-cont'>
                    <p>
                        <GoX size="40"/>
                    </p>
                </div>
                <div className='innerText'>
                    <h1>턴어라운드</h1>  

                    <p>기업회생. 적자를 계속해서 기록하던 기업이 실적이 크게 개선되고
                    이와 더불어 주가도 크게 개선된 경우를 말합니다.</p>  
                </div>
            </div>
        </section>
    );
}

export default ClickCard;
    