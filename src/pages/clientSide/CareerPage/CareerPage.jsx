
import { Helmet } from 'react-helmet-async';
import Career from '../../../components/clientSide/CareerComponent/Career/Career';

const CareerPage = () => {
    return (
        <div className='mt-12'>
             <Helmet>
                <title>Soft Tech | Career</title>
            </Helmet>
            <Career></Career>
            
        </div>
    );
};

export default CareerPage;