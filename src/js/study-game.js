import '../css/style.css';
import Header from './header';
import Footer from './footer';
import '../css/study-game.css';

function Main() {
    return (
        <div class="rect">
            <div class="question_number">Q</div>
            <div class="question"></div>
            
            <div class="answer answer1">답1</div>
            <div class="answer answer2">답2</div>
            <div class="answer answer3">답3</div>
            <div class="answer answer4">답4</div>

            <div class="nextSection">
            <div class="what">.</div>
            <div class="next">다음</div>
            <div class="hint"></div>
            </div>

            <div id="timeBar">
                <div id="timer">.</div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />

        </div>
    );
}

export default App;