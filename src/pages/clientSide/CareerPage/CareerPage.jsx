
import { Helmet } from 'react-helmet-async';
import Career from '../../../components/clientSide/CareerComponent/Career/Career';

const CareerPage = () => {
    window.scrollTo(0, 0);
    return (
        <div className=''>
             <Helmet>
                <title>Soft Tech | Career</title>
            </Helmet>
            <Career></Career>
            
        </div>
    );
};

export default CareerPage;