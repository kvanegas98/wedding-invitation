import Home from '../../Layout/Home';
import CoupleSection from '../../components/Grid/Section';
import CountdownTimer from '../../components/Grid/CountdownTimer';
import AutoPlayer from '../../components/Grid/AutoPlayer';
import EventSection from '../../components/Grid/EventSection';
import Protocol from '../../components/Grid/Protocol';
import Gallery from '../../components/Grid/Gallery';
import GiftTable from '../../components/Grid/GiftTable';
import Footer from '../../components/Grid/Footer';
import FormConfirmation from '../../components/Grid/FormConfirmation';

const GridLayout = () => {

    return (
        <>
            <div translate="no">
                <Home />
                <AutoPlayer />
                <CountdownTimer />
                <CoupleSection />
                <EventSection />
                <Protocol />
                <GiftTable />
                <Gallery />
                <FormConfirmation />
                <br />
                <br />
                <Footer />
            </div>


        </>
    );
};

export default GridLayout;
