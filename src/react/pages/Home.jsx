import SectionNumberedTitlesList from './../components/section/SectionNumberedTitlesList';
import SectionTitlesList from '../components/section/SectionTitlesList';

function Home() {
    return (
        <div className="home">
            <div className="container">
                <SectionNumberedTitlesList heading="Top 10 Movies today" />
                <SectionTitlesList heading="Top Chart: Movies" />
            </div>
        </div>
    );
}

export default Home;
